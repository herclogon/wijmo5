'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// MaskedInput sample component.
@Component({
    selector: 'masked-input-cmp',
    templateUrl: 'src/components/input/maskedInputCmp.html',
    directives: [wjNg2Input.WjInputMask, wjNg2Input.WjInputDate, wjNg2Input.WjInputTime, CORE_DIRECTIVES],
})

export class MaskedInputCmp extends InputBaseCmp {
    mask = '>LL-AA-0000';
    departureDate = new Date();

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}
