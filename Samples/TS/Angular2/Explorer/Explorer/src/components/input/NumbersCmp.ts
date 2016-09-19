'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { AppPipesModule } from '../../pipes/appPipes';

// Numbers sample component.
@Component({
    selector: 'numbers-cmp',
    templateUrl: 'src/components/input/numbersCmp.html'
})

export class NumbersCmp extends InputBaseCmp {
    passengers = 1;
    price = 0;
    tax = .085;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: NumbersCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjInputModule, AppPipesModule],
    declarations: [NumbersCmp],
})
export class NumbersModule {
}

