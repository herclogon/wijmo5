module wijmo.grid {

    export class ColumnPicker extends Control {
        private _grid: FlexGrid;
        private _dAll: HTMLDivElement;
        private _dInUse: HTMLDivElement;
        private _dMarker: HTMLElement;
        private _dragSource: HTMLElement;
        private _dropIndex: number;
        private _lbAll: input.ListBox;
        private _lbInUse: input.ListBox;

        static controlTemplate = '<div class="wj-columnlists">' +
                '<div wj-part="d-all"></div>' +
                '<div wj-part="d-inuse"></div>' +
            '</div>';

        constructor(element: any, options?) {
            super(element);

            // instantiate and apply template
            var tpl = this.getTemplate();
            this.applyTemplate('wj-control wj-columnpicker', tpl, {
                _dAll: 'd-all',
                _dInUse: 'd-inuse',
            });

            // create draggable lists for the columns
            this._lbAll = this._createColumnListBox(this._dAll);
            this._lbInUse = this._createColumnListBox(this._dInUse);

            // create target indicator element
            this._dMarker = createElement('<div class="wj-marker" style="display:none">&nbsp;</div>');
            this.hostElement.appendChild(this._dMarker);

            // use double-click to add/remove columns
            this.addEventListener(this.hostElement, 'dblclick', (e) => {

                // add to inUse list
                if (contains(this._lbAll.hostElement, e.target)) {
                    var col = this._lbAll.selectedItem,
                    list = this._lbInUse.itemsSource;
                    if (list.indexOf(col) < 0) {
                        list.push(col);
                    }
                }

                // remove from inUse list
                if (contains(this._lbInUse.hostElement, e.target)) {
                    var col = this._lbInUse.selectedItem,
                        list = this._lbInUse.itemsSource;
                    list.remove(col);
                }
            });

            // initialize control options
            this.initialize(options);
        }

        get grid(): FlexGrid {
            return this._grid;
        }
        set grid(value: FlexGrid) {
            this._grid = asType(value, FlexGrid);
            this.load();
        }

        // saves the column layout to the grid
        save() {
            var g = this._grid,
                cols = this._lbInUse.itemsSource;
            if (g) {
                g.columns.deferUpdate(() => {
                    g.columns.clear();
                    for (var i = 0; i < cols.length; i++) {
                        g.columns.push(cols[i]);
                    }
                });
            }
        }

        // loads the column layout from the grid
        load() {

            // get lists of all columns and columns currently in use
            var all = this._getAllColumns();
            var inUse = new collections.ObservableArray();
            for (var i = 0; i < all.length; i++) {
                var c = <Column>all[i];
                if (c.grid) {
                    inUse.push(c);
                }
            }

            // bind column lists
            this._lbAll.itemsSource = all;
            this._lbInUse.itemsSource = inUse;

            // sort 'all' list by header (binding?)
            var sd = this._lbAll.collectionView.sortDescriptions;
            sd.clear();
            sd.push(new collections.SortDescription('header', true));

            // reset mouse state/list selection
            this._resetMouseState();
        }

        // get a list with all available columns
        _getAllColumns() {
            var g = this._grid,
                all = new collections.ObservableArray();
            if (g) {

                // columns currently in use (preserve formatting, etc)
                for (var i = 0; i < g.columns.length; i++) {
                    all.push(g.columns[i]);
                }

                // columns available but not in use
                if (hasItems(g.collectionView)) {
                    var item = g.collectionView.items[0];
                    for (var k in item) {
                        if (!g.columns.getColumn(k)) {
                            all.push(new Column({
                                binding: k,
                                header: toHeaderCase(k)
                            }));
                        }
                    }
                }
            }
            return all;
        }

        // create a listbox for showing grid columns (draggable)
        _createColumnListBox(host: HTMLElement): input.ListBox {

            // create the listbox
            var lb = new input.ListBox(host);

            // show field headers
            lb.displayMemberPath = 'header';

            // make items draggable, show filter indicator
            lb.formatItem.addHandler((s, e: input.FormatItemEventArgs) => {
                e.item.setAttribute('draggable', 'true');
                var fld = <Column>e.data;
                assert(e.data instanceof Column, 'expecting a Column here...');
            });

            // make items draggable
            this.addEventListener(host, 'dragstart', this._dragstart.bind(this));
            this.addEventListener(host, 'dragover', this._dragover.bind(this));
            this.addEventListener(host, 'dragleave', this._dragover.bind(this));
            this.addEventListener(host, 'drop', this._drop.bind(this));
            this.addEventListener(host, 'dragend', this._dragend.bind(this));

            // return the listbox
            return lb;
        }

        // drag/drop event handlers
        _dragstart(e: DragEvent) {
            var target = this._getListBoxTarget(e);
            if (target) {

                // select field under the mouse, save drag source
                this._dragSource = null;
                var host = target.hostElement;
                for (var i = 0; i < host.children.length; i++) {
                    if (contains(host.children[i], e.target)) {
                        target.selectedIndex = i;
                        this._dragSource = host;
                        break;
                    }
                }

                // start drag operation
                if (this._dragSource && e.dataTransfer) {
                    e.dataTransfer.effectAllowed = 'copyMove';
                    e.dataTransfer.setData('text', '');
                    e.stopPropagation();
                } else {
                    e.preventDefault();
                }
            }
        }
        _dragover(e: DragEvent) {
            var target = this._getListBoxTarget(e);
            if (target) {

                // check whether the move is valid
                var valid = false;

                // dragging from All to InUse (valid if the target does not contain the item)
                if (this._dragSource == this._dAll && target != this._lbAll) {
                    var srcList = <input.ListBox>Control.getControl(this._dragSource),
                        col = srcList.selectedItem;
                    if (target.itemsSource.indexOf(col) < 0) {
                        valid = true;
                    }
                }

                // dragging from InUse to All (to remove the column) or within the inUse list
                if (this._dragSource && this._dragSource != this._dAll) {
                    valid = true;
                }

                // if valid, prevent default to allow drop
                if (valid) {
                    e.dataTransfer.dropEffect = this._dragSource == this._dAll ? 'copy' : 'move';
                    e.preventDefault();
                    this._showDragMarker(e);
                } else {
                    this._showDragMarker(null);
                }
            }
        }
        _drop(e: DragEvent) {

            // perform drop operation
            var target = this._getListBoxTarget(e);
            if (target) {
                var srcList = <input.ListBox>Control.getControl(this._dragSource),
                    col = <Column>(srcList ? srcList.selectedItem : null),
                    items = <collections.ObservableArray>target.itemsSource;
                if (col) {

                    // if the target is the All list, remove from InUse
                    // otherwise, add to or re-position field in target list
                    if (target == this._lbAll) {
                        srcList.itemsSource.remove(col);
                    } else {
                        var index = items.indexOf(col);
                        if (index != this._dropIndex) {
                            if (index > -1) {
                                items.removeAt(index);
                                if (index < this._dropIndex) {
                                    this._dropIndex--;
                                }
                            }
                            items.insert(this._dropIndex, col);
                            target.selectedIndex = this._dropIndex;
                        }
                    }
                }
            }

            // always reset the mouse state when done
            this._resetMouseState();
        }
        _dragend(e: DragEvent) {
            this._resetMouseState();
        }

        // gets the listbox that contains the target of a drag event
        _getListBoxTarget(e: DragEvent): input.ListBox {
            for (var el = <HTMLElement>e.target; el; el = el.parentElement) {
                var lb = <input.ListBox>Control.getControl(el);
                if (lb instanceof input.ListBox) {
                    return lb;
                }
            }
            return null;
        }

        // reset the mouse state after a drag operation
        _resetMouseState() {
            this._dragSource = null;
            this._showDragMarker(null);
            this._lbAll.selectedIndex = this._lbInUse.selectedIndex = -1;
        }

        // show the drag/drop marker
        _showDragMarker(e: DragEvent) {
            var rc: ClientRect,
                target: HTMLElement,
                item: HTMLElement;

            if (e) {

                // get item at the mouse (listbox item or listbox itself)
                target = <HTMLElement>document.elementFromPoint(e.clientX, e.clientY);
                item = target;
                while (item && !hasClass(item, 'wj-listbox-item')) {
                    item = item.parentElement;
                }
                if (!item && hasClass(target, 'wj-listbox')) {
                    var last = <HTMLElement>target.lastElementChild;
                    if (hasClass(last, 'wj-listbox-item')) {
                        item = last;
                    }
                }

                // get marker position
                rc = item ? item.getBoundingClientRect() :
                    hasClass(target, 'wj-listbox') ? target.getBoundingClientRect() :
                        null;
            }

            // update marker
            if (rc) {

                // calculate drop position/index
                var top = rc.top;
                this._dropIndex = 0;
                if (item) {
                    var items = item.parentElement.children;
                    for (var i = 0; i < items.length; i++) {
                        if (items[i] == item) {
                            this._dropIndex = i;
                            if (e.clientY > rc.top + rc.height / 2) {
                                top = rc.bottom;
                                this._dropIndex++;
                            }
                            break;
                        }
                    }
                }

                // show the drop marker
                var rcHost = this.hostElement.getBoundingClientRect();
                setCss(this._dMarker, {
                    left: Math.round(rc.left - rcHost.left),
                    top: Math.round(top - rcHost.top - 2),
                    width: Math.round(rc.width),
                    height: 4,
                    display: ''
                });
                console.log(wijmo.format('showing marker at {left} {top} {width} {height}', this._dMarker.style));
            } else {

                // hide the drop marker
                this._dMarker.style.display = 'none';
                console.log('hiding marker');
            }
        }
    }
}