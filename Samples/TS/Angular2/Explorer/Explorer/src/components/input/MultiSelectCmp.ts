'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// MultiSelect sample component.
@Component({
    selector: 'multi-select-cmp',
    templateUrl: 'src/components/input/multiSelectCmp.html',
    directives: [wjNg2Input.WjMultiSelect, CORE_DIRECTIVES]
})
export class MultiSelectCmp extends InputBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}


