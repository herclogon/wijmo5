'use strict';

import { Component, EventEmitter, Inject,  Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// ComboBox sample component.
@Component({
    selector: 'combo-box-cmp',
    templateUrl: 'src/components/input/comboBoxCmp.html'
})

export class ComboBoxCmp extends InputBaseCmp {
    country1 = '';
    country2 = 'Algeria';
    country3 = '';
    item1 = '';
    item2 = '';

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }

}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ComboBoxCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjGridModule, WjInputModule],
    declarations: [ComboBoxCmp],
})
export class ComboBoxModule {
}


