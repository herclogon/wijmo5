'use strict';

import { Component, ViewChild } from '@angular/core';
import * as wjFlexSheet from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'intro-cmp',
    templateUrl: 'src/components/introCmp.html',
    directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
})
export class IntroCmp {
    // references FlexSheet named 'flexSheet' in the view
    @ViewChild('flexSheet') flexSheet: wijmo.grid.sheet.FlexSheet;

    flexSheetInit(flexSheet: wijmo.grid.sheet.FlexSheet) {
        if (flexSheet) {
            flexSheet.selectedSheetIndex = 0;
        }
    }
}
