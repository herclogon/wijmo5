'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import { GlbzPipe, ToDatePipe } from '../../pipes/appPipes';

// DateTime sample component.
@Component({
    selector: 'date-time-cmp',
    templateUrl: 'src/components/input/dateTimeCmp.html',
    directives: [wjNg2Input.WjInputDate, wjNg2Input.WjInputTime, wjNg2Input.WjCalendar,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator, CORE_DIRECTIVES],
    pipes: [GlbzPipe, ToDatePipe]
})

export class DateTimeCmp extends InputBaseCmp {
    departureDate = new Date();
    
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}


