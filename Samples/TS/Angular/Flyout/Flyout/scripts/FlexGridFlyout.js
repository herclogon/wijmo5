var wijmo;
(function (wijmo) {
    var grid;
    (function (grid) {
        'use strict';
        /**
         * Provides flyout menus when the mouse hovers over a FlexGrid's column headers.
         */
        var FlexGridFlyout = (function () {
            /**
             * Initializes a new instance of the @see:FlexGridFlyout class.
             *
             * @param flex @see:FlexGrid that will receive the flyout menus.
             */
            function FlexGridFlyout(flex) {
                var _this = this;
                this._g = flex;
                // create flyout
                this._flyout = document.createElement('div');
                wijmo.addClass(this._flyout, 'wj-flyout');
                // connect event handlers
                var hdr = flex.columnHeaders.hostElement;
                flex.addEventListener(flex.hostElement, 'mousedown', this._hide.bind(this));
                flex.addEventListener(hdr, 'mouseenter', this._mouseenter.bind(this));
                flex.addEventListener(hdr, 'mouseleave', this._mouseleave.bind(this));
                flex.addEventListener(this._flyout, 'mouseenter', this._mouseenter.bind(this));
                flex.addEventListener(this._flyout, 'mouseleave', this._mouseleave.bind(this));
                // update flyout column as the mouse moves (optional)
                flex.addEventListener(hdr, 'mousemove', function (e) {
                    if (_this._col) {
                        _this._show(e);
                    }
                });
            }
            Object.defineProperty(FlexGridFlyout.prototype, "flyout", {
                // ** object model
                /**
                 * Gets a reference to the @see:HTMLElement that represents the flyout menu.
                 */
                get: function () {
                    return this._flyout;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(FlexGridFlyout.prototype, "column", {
                /**
                 * Gets a reference to the @see:Column that owns the flyout menu currently being shown.
                 */
                get: function () {
                    return this._col;
                },
                enumerable: true,
                configurable: true
            });
            // ** event handlers
            FlexGridFlyout.prototype._mouseenter = function (e) {
                var _this = this;
                clearTimeout(this._toUpdate);
                this._toUpdate = setTimeout(function () {
                    _this._show(e);
                }, FlexGridFlyout._SHOWDELAY);
            };
            FlexGridFlyout.prototype._mouseleave = function (e) {
                var _this = this;
                clearTimeout(this._toUpdate);
                this._toUpdate = setTimeout(function () {
                    _this._hide(e);
                }, FlexGridFlyout._HIDEDELAY);
            };
            // ** implementation
            FlexGridFlyout.prototype._show = function (e) {
                var ht = this._g.hitTest(e);
                if (ht.cellType == grid.CellType.ColumnHeader && ht.col > -1) {
                    var col = this._g.columns[ht.col];
                    if (col != this._col) {
                        var rc = this._g.columnHeaders.getCellBoundingRect(0, ht.col);
                        wijmo.showPopup(this._flyout, rc, true); // display to get width
                        rc.left -= (this._flyout.offsetWidth - rc.width) / 2; // center horizontally
                        wijmo.showPopup(this._flyout, rc, true); // update display
                        this._col = col;
                    }
                }
            };
            FlexGridFlyout.prototype._hide = function (e) {
                wijmo.hidePopup(this._flyout, true, true);
                this._col = null;
            };
            FlexGridFlyout._SHOWDELAY = 900;
            FlexGridFlyout._HIDEDELAY = 600;
            return FlexGridFlyout;
        }());
        grid.FlexGridFlyout = FlexGridFlyout;
    })(grid = wijmo.grid || (wijmo.grid = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=FlexGridFlyout.js.map