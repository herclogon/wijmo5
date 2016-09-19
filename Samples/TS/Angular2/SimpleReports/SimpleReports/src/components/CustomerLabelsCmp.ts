'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'customer-labels-cmp',
    templateUrl: 'src/components/customerLabelsCmp.html'
})

export class CustomerLabelsCmp {

    customers: wijmo.odata.ODataCollectionView;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.customers = dataSvc.customers;
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: CustomerLabelsCmp }
]);

@NgModule({
    imports: [CommonModule, routing],
    declarations: [CustomerLabelsCmp],
})
export class CustomerLabelsModule {
}
