'use strict';

import { Component, Inject } from '@angular/core';
import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
import * as wjFlexSheet from 'wijmo/wijmo.angular2.grid.sheet';

@Component({
    selector: 'data-binding-cmp',
    templateUrl: 'src/components/dataBindingCmp.html',
    directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
})
export class DataBindingCmp extends BindingFlexSheetBaseCmp {
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}
