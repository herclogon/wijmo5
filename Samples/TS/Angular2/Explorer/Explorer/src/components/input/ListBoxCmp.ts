'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// ListBox sample component.
@Component({
    selector: 'list-box-cmp',
    templateUrl: 'src/components/input/listBoxCmp.html'
})
export class ListBoxCmp extends InputBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ListBoxCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjInputModule],
    declarations: [ListBoxCmp],
})
export class ListBoxModule {
}

