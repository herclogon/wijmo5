'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// ListBox sample component.
@Component({
    selector: 'list-box-cmp',
    templateUrl: 'src/components/input/listBoxCmp.html',
    directives: [wjNg2Input.WjListBox, wjNg2Input.WjItemTemplate, CORE_DIRECTIVES]
})
export class ListBoxCmp extends InputBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}


