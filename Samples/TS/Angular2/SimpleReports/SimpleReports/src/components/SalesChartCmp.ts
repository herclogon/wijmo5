'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'sales-chart-cmp',
    templateUrl: 'src/components/salesChartCmp.html'
})

export class SalesChartCmp {

    invoices: wijmo.odata.ODataCollectionView;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.invoices = dataSvc.invoices;
    }
}


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: SalesChartCmp }
]);

@NgModule({
    imports: [CommonModule, routing],
    declarations: [SalesChartCmp],
})
export class SalesChartModule {
}