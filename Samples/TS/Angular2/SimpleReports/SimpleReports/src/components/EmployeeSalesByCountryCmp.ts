'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'employee-sales-by-country-cmp',
    templateUrl: 'src/components/employeeSalesByCountryCmp.html'
})

export class EmployeeSalesByCountryCmp {

    invoices: wijmo.odata.ODataCollectionView;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.invoices = dataSvc.invoices;
    }

}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: EmployeeSalesByCountryCmp }
]);

@NgModule({
    imports: [CommonModule, routing],
    declarations: [EmployeeSalesByCountryCmp],
})
export class EmployeeSalesByCountryModule {
}

