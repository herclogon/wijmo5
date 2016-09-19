'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from '../input/InputBaseCmp';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { DataSvc } from '../../services/DataSvc';
import { AppPipesModule } from '../../pipes/appPipes';

// Wijmo Globalization component.
@Component({
    selector: 'grid-globalization-cmp',
    templateUrl: 'src/components/infra/globalizationCmp.html'
})

export class GlobalizationCmp extends InputBaseCmp {

    today = new Date();
    departureDate = new Date();
    pi = Math.PI;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GlobalizationCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjInputModule, AppPipesModule],
    declarations: [GlobalizationCmp],
})
export class GlobalizationModule {
}

