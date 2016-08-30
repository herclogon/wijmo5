'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../../services/DataSvc';
import { InputBaseCmp } from '../input/InputBaseCmp';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { GlbzPipe, ToDatePipe } from '../../pipes/appPipes';

// Wijmo Globalization component.
@Component({
    selector: 'grid-globalization-cmp',
    templateUrl: 'src/components/infra/globalizationCmp.html',
    directives: [wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator,
        wjNg2Input.WjCalendar, CORE_DIRECTIVES],
    pipes: [GlbzPipe, ToDatePipe]
})

export class GlobalizationCmp extends InputBaseCmp {

    today = new Date();
    departureDate = new Date();
    pi = Math.PI;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}


