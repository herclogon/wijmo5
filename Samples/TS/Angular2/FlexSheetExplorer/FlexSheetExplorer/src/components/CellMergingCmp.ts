'use strict';

import { Component, ViewChild } from '@angular/core';
import * as wjFlexSheet from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'cell-merging-cmp',
    templateUrl: 'src/components/cellMergingCmp.html',
    directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
})
export class CellMergingCmp {
    mergeState: any = {};

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
            });

            flexSheet.selectionChanged.addHandler(() => {
                self.mergeState = flexSheet.getSelectionFormatState();
            });
        }
    }

    mergeCells() {
        if (this.flexSheet) {
            this.flexSheet.mergeRange();
            this.mergeState = this.flexSheet.getSelectionFormatState();
        }
    }
}