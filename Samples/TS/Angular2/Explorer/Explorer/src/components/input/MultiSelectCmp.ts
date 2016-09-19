'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// MultiSelect sample component.
@Component({
    selector: 'multi-select-cmp',
    templateUrl: 'src/components/input/multiSelectCmp.html'
})
export class MultiSelectCmp extends InputBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: MultiSelectCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjInputModule],
    declarations: [MultiSelectCmp],
})
export class MultiSelectModule {
}
