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
         * Class that extends the standard MergeManager to support merged ranges that
         * span both rows and columns.
         *
         * This class uses the same content-based approach used by the built-in merge
         * manager, but it could use any other logic instead (for example, a fixed list
         * of pre-defined merged ranges).
         */
        var CustomMergeManager = (function (_super) {
            __extends(CustomMergeManager, _super);
            function CustomMergeManager() {
                _super.apply(this, arguments);
            }
            CustomMergeManager.prototype.getMergedRange = function (panel, r, c, clip) {
                if (clip === void 0) { clip = true; }
                // create basic cell range
                var rg = new grid.CellRange(r, c);
                // expand left/right
                for (var i = rg.col; i < panel.columns.length - 1; i++) {
                    if (panel.getCellData(rg.row, i, true) != panel.getCellData(rg.row, i + 1, true))
                        break;
                    rg.col2 = i + 1;
                }
                for (var i = rg.col; i > 0; i--) {
                    if (panel.getCellData(rg.row, i, true) != panel.getCellData(rg.row, i - 1, true))
                        break;
                    rg.col = i - 1;
                }
                // expand up/down
                for (var i = rg.row; i < panel.rows.length - 1; i++) {
                    if (panel.getCellData(i, rg.col, true) != panel.getCellData(i + 1, rg.col, true))
                        break;
                    rg.row2 = i + 1;
                }
                for (var i = rg.row; i > 0; i--) {
                    if (panel.getCellData(i, rg.col, true) != panel.getCellData(i - 1, rg.col, true))
                        break;
                    rg.row = i - 1;
                }
                // done
                return rg;
            };
            return CustomMergeManager;
        }(grid.MergeManager));
        grid.CustomMergeManager = CustomMergeManager;
    })(grid = wijmo.grid || (wijmo.grid = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=CustomMergeManager.js.map