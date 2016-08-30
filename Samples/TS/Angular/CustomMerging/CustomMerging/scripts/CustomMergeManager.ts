module wijmo.grid {
    'use strict';

    /**
     * Class that extends the standard MergeManager to support merged ranges that
     * span both rows and columns.
     *
     * This class uses the same content-based approach used by the built-in merge
     * manager, but it could use any other logic instead (for example, a fixed list 
     * of pre-defined merged ranges).
     */
    export class CustomMergeManager extends MergeManager {

        getMergedRange(panel: GridPanel, r: number, c: number, clip = true): CellRange {

            // create basic cell range
            var rg = new CellRange(r, c);

            // expand left/right
            for (var i = rg.col; i < panel.columns.length - 1; i++) {
                if (panel.getCellData(rg.row, i, true) != panel.getCellData(rg.row, i + 1, true)) break;
                rg.col2 = i + 1;
            }
            for (var i = rg.col; i > 0; i--) {
                if (panel.getCellData(rg.row, i, true) != panel.getCellData(rg.row, i - 1, true)) break;
                rg.col = i - 1;
            }

            // expand up/down
            for (var i = rg.row; i < panel.rows.length  - 1; i++) {
                if (panel.getCellData(i, rg.col, true) != panel.getCellData(i + 1, rg.col, true)) break;
                rg.row2 = i + 1;
            }
            for (var i = rg.row; i > 0; i--) {
                if (panel.getCellData(i, rg.col, true) != panel.getCellData(i - 1, rg.col, true)) break;
                rg.row = i - 1;
            }

            // done
            return rg;

        }

    }
}