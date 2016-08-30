'use strict';

import { Component, Inject } from '@angular/core';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
import * as wjFlexSheet from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'filtering-cmp',
    templateUrl: 'src/components/filteringCmp.html',
    directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
})
export class FilteringCmp extends BindingFlexSheetBaseCmp {

    filterEnable: boolean = false;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }

    flexSheetInit(flexSheet: wijmo.grid.sheet.FlexSheet) {
        super.flexSheetInit(flexSheet);

        if (flexSheet) {
            this.filterEnable = !!flexSheet.itemsSource;
        }
    }

    // Show the column filter for the flexSheet control.
    showFilter() {
        if (this.flexSheet) {
            this.flexSheet.showColumnFilter();
        }
    }
}