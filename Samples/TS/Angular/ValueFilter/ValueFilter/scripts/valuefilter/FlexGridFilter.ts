module wijmo.grid.valuefilter {
    'use strict';

    /**
     * Implements an Excel-style filter for @see:FlexGrid controls.
     *
     * To enable filtering on a @see:FlexGrid control, create an instance 
     * of the @see:FlexGridFilter and pass the grid as a parameter to the 
     * constructor. For example:
     *
     * <pre>
     * // create FlexGrid
     * var flex = new wijmo.grid.FlexGrid('#gridElement');
     * // enable filtering on the FlexGrid
     * var filter = new wijmo.grid.filter.FlexGridFilter(flex);
     * </pre>
     *
     * Once this is done, a filter icon is added to the grid's column headers. 
     * Clicking the icon shows an editor where the user can edit the filter
     * conditions for that column.
     *
     * The @see:FlexGridFilter class depends on the <b>wijmo.grid</b> and 
     * <b>wijmo.input</b> modules.
     */
    export class FlexGridFilter {
        static _WJA_FILTER = 'wj-filter';

        // members
        _grid: FlexGrid;
        _filters: ColumnFilter[];
        _filterColumns: string[];
        _divEdt: HTMLElement;
        _edtCol: Column;
        _showIcons = true;

        /**
         * Initializes a new instance of the @see:FlexGridFilter.
         *
         * @param grid The @see:FlexGrid to filter.
         */
        constructor(grid: FlexGrid) {

            // check dependencies
            var depErr = 'Missing dependency: FlexGridFilter requires ';
            assert(wijmo.grid.FlexGrid != null, depErr + 'wijmo.grid.');
            assert(wijmo.input.ComboBox != null, depErr + 'wijmo.input.');

            // initialize filter
            this._filters = [];
            this._grid = asType(grid, FlexGrid, false);
            this._grid.formatItem.addHandler(this._formatItem.bind(this));
            this._grid.itemsSourceChanged.addHandler(this.clear.bind(this));
            this._grid.hostElement.addEventListener('mousedown', this._mouseDown.bind(this), true);

            // initialize column filters
            this._grid.invalidate();
        }
        /**
         * Gets or sets a value indicating whether the @see:FlexGridFilter adds filter
         * editing buttons to the grid's column headers.
         */
        get showFilterIcons() : boolean {
            return this._showIcons;
        }
        set showFilterIcons(value: boolean) {
            this._showIcons = asBoolean(value);
        }
        /**
         * Gets or sets an array containing the names or bindings of the columns
         * that have filters.
         *
         * Setting this property to null or to an empty array adds filters to all 
         * columns.
         */
        get filterColumns(): string[] {
            return this._filterColumns;
        }
        set filterColumns(value: string[]) {
            this._filterColumns = asArray(value);
            this.clear();
        }
        /**
         * Gets the filter for the given column.
         *
         * @param col The @see:Column that the filter applies to.
         * @param create The value indicating whether to create the filter if it does not exist.
         */
        getColumnFilter(col: Column, create = true): ColumnFilter {

            // look for the filter
            for (var i = 0; i < this._filters.length; i++) {
                if (this._filters[i].column == col) {
                    return this._filters[i];
                }
            }

            // not found, create one now
            if (create) {
                var cf = new ColumnFilter(col);
                this._filters.push(cf);
                return cf;
            }

            // not found, not created
            return null;
        }
        /**
         * Shows the filter editor for the given grid column.
         *
         * @param col The @see:Column that contains the filter to edit.
         */
        editColumnFilter(col: any) {

            // remove current editor
            this.closeEditor();

            // get column by name of by reference
            col = isString(col)
                ? this._grid.columns.getColumn(col)
                : asType(col, Column, false);

            // get the header cell to position editor
            var ch = this._grid.columnHeaders,
                rc = ch.getCellBoundingRect(ch.rows.length - 1, col.index);

            // get the filter and the editor
            var div = document.createElement('div'),
                flt = this.getColumnFilter(col, true),
                edt = new ColumnFilterEditor(div, flt);
            addClass(div, 'wj-dropdown-panel');

            // close editor when buttons are clicked or when it loses focus
            var self = this;
            edt.filterChanged.addHandler(function () {
                self.closeEditor();
                self.apply();
            });

            // use blur+capture to emulate focusout (not supported in FireFox)
            div.addEventListener('blur', function () {
                setTimeout(function () {
                    if (!contains(self._divEdt, document.activeElement)) {
                        self.closeEditor();
                    }
                }, 200); // let others handle it first
            }, true);

            // show editor and give it focus
            var host = document.body;
            host.appendChild(div);
            div.tabIndex = -1;
            showPopup(div, rc);
            div.focus();

            // save reference to editor
            this._divEdt = div;
            this._edtCol = col;
        }
        /**
         * Closes the filter editor.
         */
        closeEditor() {
            if (this._divEdt) {
                hidePopup(this._divEdt, true);
                this._divEdt = null;
                this._edtCol = null;
            }
        }
        /**
         * Applies the current column filters to the grid.
         */
        apply() {
            var cv = this._grid.collectionView;
            if (cv) {
                if (cv.filter) {
                    cv.refresh();
                } else {
                    cv.filter = this._filter.bind(this);
                }
            }
            this.onFilterApplied();
        }
        /**
         * Clears all column filters.
         */
        clear() {
            this._filters = [];
            this.apply();
        }
        /**
         * Occurs after the filter is applied.
         */
        filterApplied = new Event();
        /**
         * Raises the @see:filterApplied event.
         */
        onFilterApplied() {
            this.filterApplied.raise(this);
        }

        // predicate function used to filter the CollectionView
        _filter(item: any): boolean {
            for (var i = 0; i < this._filters.length; i++) {
                if (!this._filters[i].apply(item)) {
                    return false;
                }
            }
            return true;
        }

        // handle the formatItem event to add filter icons to the column header cells
        _formatItem(sender: FlexGrid, e: FormatItemEventArgs) {

            // check that this is a filter cell
            if (this._showIcons && 
                e.panel.cellType == CellType.ColumnHeader &&
                e.row == this._grid.columnHeaders.rows.length - 1) {

                // check that this column should have a filter
                var col = this._grid.columns[e.col];
                if (!this._filterColumns || this._filterColumns.indexOf(col.binding) > -1) {

                    // show filter glyph for this column
                    var cf = this.getColumnFilter(col, true),
                        op = cf.isActive ? .85 : .25,
                        filterGlyph = '<div ' + FlexGridFilter._WJA_FILTER +
                        ' style ="float:right;cursor:pointer;padding:0px 4px;opacity:' + op + '">' +
                        '<span class="wj-glyph-filter"></span>' +
                        '</div>';

                    // insert filter glyph before cell content (so it appears in Firefox...)
                    e.cell.innerHTML = filterGlyph + e.cell.innerHTML;
                }
            }
        }

        // handle mouse down to show/hide the filter editor
        _mouseDown(e) {
            if (this._hasAttribute(e.target, FlexGridFilter._WJA_FILTER)) {
                var ht = this._grid.hitTest(e);
                if (ht.cellType == wijmo.grid.CellType.ColumnHeader) {
                    var col = this._grid.columns[ht.col];
                    if (this._divEdt && this._edtCol == col) {
                        this.closeEditor();
                    } else {
                        this.editColumnFilter(col);
                    }
                    e.stopPropagation();
                    e.preventDefault();
                }
            }
        }

        // checks whether an element or any of its ancestors contains an attribute
        _hasAttribute(e: any, att: string) {
            for (; e; e = e.parentNode) {
                if (e.getAttribute && e.getAttribute(att) != null) return true;
            }
            return false;
        }

    }
}