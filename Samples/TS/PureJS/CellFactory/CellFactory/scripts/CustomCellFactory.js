var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wijmo;
(function (wijmo) {
    var grid;
    (function (grid) {
        'use strict';
        /**
         * Creates HTML elements that represent cells within a @see:FlexGrid control.
         */
        var CustomCellFactory = (function (_super) {
            __extends(CustomCellFactory, _super);
            function CustomCellFactory() {
                _super.apply(this, arguments);
            }
            /**
             * Creates or updates a cell in the grid.
             *
             * @param p The @see:GridPanel that contains the cell.
             * @param r The index of the row that contains the cell.
             * @param c The index of the column that contains the cell.
             * @param cell The element that represents the cell.
             * @param rng The @see:CellRange object that contains the cell's
             * merged range, or null if the cell is not merged.
             * @param updateContent Whether to update the cell's content as
             * well as its position and style.
             */
            CustomCellFactory.prototype.updateCell = function (p, r, c, cell, rng, updateContent) {
                switch (p.cellType) {
                    // regular cells
                    case wijmo.grid.CellType.Cell:
                        // get cell geometry
                        _super.prototype.updateCell.call(this, p, r, c, cell, rng, false);
                        // set styles
                        wijmo.addClass(cell, 'centered-cell');
                        cell.style.backgroundColor = (r % 2 == 0) ? '#beff82' : '#ff9393';
                        // add/update content
                        var content = p.getCellData(r, c, true);
                        if (cell.textContent != content) {
                            cell.innerHTML = '<div>' + content + '</div>';
                        }
                        break;
                    // column headers
                    case wijmo.grid.CellType.ColumnHeader:
                        // get cell geometry
                        _super.prototype.updateCell.call(this, p, r, c, cell, rng, false);
                        // set styles
                        wijmo.addClass(cell, 'rotated-cell');
                        // add content
                        var content = p.getCellData(r, c, true);
                        if (cell.textContent != content) {
                            cell.innerHTML = '<div>' + content + '</div>';
                        }
                        break;
                    // other cell types
                    default:
                        _super.prototype.updateCell.call(this, p, r, c, cell, rng, true);
                        break;
                }
            };
            return CustomCellFactory;
        })(grid.CellFactory);
        grid.CustomCellFactory = CustomCellFactory;
    })(grid = wijmo.grid || (wijmo.grid = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=CustomCellFactory.js.map