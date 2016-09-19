'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../services/DataSvc';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

@Component({
    selector: 'sales-by-catalog-cmp',
    templateUrl: 'src/components/salesByCategoryCmp.html'
})

export class SalesByCategoryCmp {

    productSales: wijmo.odata.ODataCollectionView;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.productSales = dataSvc.productSales;
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: SalesByCategoryCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule],
    declarations: [SalesByCategoryCmp],
})
export class SalesByCategoryModule {
}
