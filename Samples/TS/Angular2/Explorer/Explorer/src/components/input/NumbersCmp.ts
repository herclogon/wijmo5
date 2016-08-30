'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { GlbzPipe } from '../../pipes/appPipes';

// Numbers sample component.
@Component({
    selector: 'numbers-cmp',
    templateUrl: 'src/components/input/numbersCmp.html',
    directives: [wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, CORE_DIRECTIVES, FORM_DIRECTIVES],
    pipes: [GlbzPipe]
})

export class NumbersCmp extends InputBaseCmp {
    passengers = 1;
    price = 0;
    tax = .085;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}


