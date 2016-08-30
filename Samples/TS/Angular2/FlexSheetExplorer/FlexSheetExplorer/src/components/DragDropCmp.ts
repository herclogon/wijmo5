'use strict';

import { Component, ViewChild } from '@angular/core';
import * as wjFlexSheet from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'drag-drop-cmp',
    templateUrl: 'src/components/dragDropCmp.html',
    directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
})
export class DragDropCmp {
    // references FlexSheet named 'flexSheet' in the view
    @ViewChild('flexSheet') flexSheet: wijmo.grid.sheet.FlexSheet;

    flexSheetInit(flexSheet: wijmo.grid.sheet.FlexSheet) {
        var self = this;

        if (flexSheet) {
            flexSheet.deferUpdate(() => {
                var colIdx: number,
                    rowIdx: number;

                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
                flexSheet.applyCellsStyle({ fontWeight: 'bold' }, [new wijmo.grid.CellRange(0, 0, 9, 0),
                    new wijmo.grid.CellRange(10, 1, 19, 1)]);
                flexSheet.applyCellsStyle({ textDecoration: 'underline' }, [new wijmo.grid.CellRange(0, 2, 9, 2),
                    new wijmo.grid.CellRange(10, 3, 19, 3)]);
                flexSheet.applyCellsStyle({ fontStyle: 'italic' }, [new wijmo.grid.CellRange(0, 4, 9, 4),
                    new wijmo.grid.CellRange(10, 5, 19, 5)]);
                flexSheet.applyCellsStyle({ format: 'c2' }, [new wijmo.grid.CellRange(0, 0, 9, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#4488CC' }, [new wijmo.grid.CellRange(0, 0, 19, 0),
                    new wijmo.grid.CellRange(0, 2, 19, 2), new wijmo.grid.CellRange(0, 4, 19, 4)]);
                flexSheet.applyCellsStyle({ color: '#CC8844' }, [new wijmo.grid.CellRange(0, 1, 19, 1),
                    new wijmo.grid.CellRange(0, 3, 19, 3), new wijmo.grid.CellRange(0, 5, 19, 5)]);
                flexSheet.applyCellsStyle({ color: '#336699' }, [new wijmo.grid.CellRange(0, 6, 9, 7)]);
                flexSheet.applyCellsStyle({ backgroundColor: '#996633' }, [new wijmo.grid.CellRange(10, 6, 19, 7)]);
            });
        }
    }
}