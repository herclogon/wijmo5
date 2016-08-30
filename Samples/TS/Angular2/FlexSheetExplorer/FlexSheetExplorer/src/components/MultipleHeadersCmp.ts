'use strict';

import { Component, ViewChild } from '@angular/core';
import * as wjFlexSheet from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'multiple-headers-cmp',
    templateUrl: 'src/components/multipleHeadersCmp.html',
    directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
})
export class MultipleHeadersCmp {
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
        }
    }

    addRowHeader () {
        if (this.flexSheet) {
            this.flexSheet.rowHeaders.columns.push(new wijmo.grid.Column());
        }
    }

    removeRowHeader() {
        var colCnt: number;
        if (this.flexSheet) {
            colCnt = this.flexSheet.rowHeaders.columns.length;
            this.flexSheet.rowHeaders.columns.removeAt(colCnt - 1);
        }
    }

    addColumnHeader () {
        if (this.flexSheet) {
            this.flexSheet.columnHeaders.rows.push(new wijmo.grid.Row());
        }
    }

    removeColumnHeader() {
        var rowCnt: number;
        if (this.flexSheet) {
            rowCnt = this.flexSheet.columnHeaders.rows.length;
            this.flexSheet.columnHeaders.rows.removeAt(rowCnt - 1);
        }
    }
}