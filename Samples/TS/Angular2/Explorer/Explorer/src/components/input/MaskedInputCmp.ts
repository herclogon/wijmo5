'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// MaskedInput sample component.
@Component({
    selector: 'masked-input-cmp',
    templateUrl: 'src/components/input/maskedInputCmp.html'
})

export class MaskedInputCmp extends InputBaseCmp {
    mask = '>LL-AA-0000';
    departureDate = new Date();

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: MaskedInputCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjInputModule],
    declarations: [MaskedInputCmp],
})
export class MaskedInputModule {
}