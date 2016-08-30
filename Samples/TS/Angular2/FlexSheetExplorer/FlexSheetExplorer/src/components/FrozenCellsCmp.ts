'use strict';

import { Component, ViewChild } from '@angular/core';
import * as wjFlexSheet from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'frozen-cells-cmp',
    templateUrl: 'src/components/frozenCellsCmp.html',
    directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
})
export class FrozenCellsCmp {
    isFrozen: boolean = false;

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

            flexSheet.selectedSheetChanged.addHandler(() => {
                if (self.flexSheet.frozenColumns > 0 || self.flexSheet.frozenRows > 0) {
                    self.isFrozen = true;
                } else {
                    self.isFrozen = false;
                }
            });
        }
    }

    freezeCells () {
        var flexSheet = this.flexSheet;
        if (flexSheet) {
            flexSheet.freezeAtCursor();

            if (flexSheet.frozenColumns > 0 || flexSheet.frozenRows > 0) {
                this.isFrozen = true;
            } else {
                this.isFrozen = false;
            }
        }
    }
}
