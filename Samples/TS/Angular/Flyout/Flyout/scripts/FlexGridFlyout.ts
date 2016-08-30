module wijmo.grid {
    'use strict';

    /**
     * Provides flyout menus when the mouse hovers over a FlexGrid's column headers.
     */
    export class FlexGridFlyout {
        _g: FlexGrid;
        _flyout: HTMLElement;
        _col: Column;
        _toUpdate: any;

        static _SHOWDELAY = 900;
        static _HIDEDELAY = 600;

        /**
         * Initializes a new instance of the @see:FlexGridFlyout class.
         *
         * @param flex @see:FlexGrid that will receive the flyout menus.
         */
        constructor(flex: FlexGrid) {
            this._g = flex;

            // create flyout
            this._flyout = document.createElement('div');
            addClass(this._flyout, 'wj-flyout');

            // connect event handlers
            var hdr = flex.columnHeaders.hostElement;
            flex.addEventListener(flex.hostElement, 'mousedown', this._hide.bind(this));
            flex.addEventListener(hdr, 'mouseenter', this._mouseenter.bind(this));
            flex.addEventListener(hdr, 'mouseleave', this._mouseleave.bind(this));
            flex.addEventListener(this._flyout, 'mouseenter', this._mouseenter.bind(this));
            flex.addEventListener(this._flyout, 'mouseleave', this._mouseleave.bind(this));

            // update flyout column as the mouse moves (optional)
            flex.addEventListener(hdr, 'mousemove', (e) => {
                if (this._col) {
                    this._show(e);
                }
            });

        }

        // ** object model

        /**
         * Gets a reference to the @see:HTMLElement that represents the flyout menu.
         */
        get flyout(): HTMLElement {
            return this._flyout;
        }
        /**
         * Gets a reference to the @see:Column that owns the flyout menu currently being shown.
         */
        get column(): Column {
            return this._col;
        }

        // ** event handlers

        _mouseenter(e: MouseEvent) {
            clearTimeout(this._toUpdate);
            this._toUpdate = setTimeout(() => {
                this._show(e);
            }, FlexGridFlyout._SHOWDELAY);
        }
        _mouseleave(e: MouseEvent) {
            clearTimeout(this._toUpdate);
            this._toUpdate = setTimeout(() => {
                this._hide(e);
            }, FlexGridFlyout._HIDEDELAY);
        }

        // ** implementation

        _show(e: MouseEvent) {
            var ht = this._g.hitTest(e);
            if (ht.cellType == CellType.ColumnHeader && ht.col > -1) {
                var col = this._g.columns[ht.col];
                if (col != this._col) {
                    var rc = this._g.columnHeaders.getCellBoundingRect(0, ht.col);
                    showPopup(this._flyout, rc, true); // display to get width
                    rc.left -= (this._flyout.offsetWidth - rc.width) / 2; // center horizontally
                    showPopup(this._flyout, rc, true); // update display
                    this._col = col;
                }
            }
        }
        _hide(e: MouseEvent) {
            hidePopup(this._flyout, true, true);
            this._col = null;
        }
    }
}