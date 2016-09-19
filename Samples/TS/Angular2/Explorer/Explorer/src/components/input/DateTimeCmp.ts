'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { AppPipesModule } from '../../pipes/appPipes';

// DateTime sample component.
@Component({
    selector: 'date-time-cmp',
    templateUrl: 'src/components/input/dateTimeCmp.html'
})

export class DateTimeCmp extends InputBaseCmp {
    departureDate = new Date();
    
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: DateTimeCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjInputModule, AppPipesModule],
    declarations: [DateTimeCmp],
})
export class DateTimeModule {
}
