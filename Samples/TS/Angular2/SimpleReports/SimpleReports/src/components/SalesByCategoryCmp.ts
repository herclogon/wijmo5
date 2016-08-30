'use strict';

import { Component, EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'sales-by-catalog-cmp',
    templateUrl: 'src/components/salesByCategoryCmp.html',
    directives: [CORE_DIRECTIVES, wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries]
})

export class SalesByCategoryCmp {

    productSales: wijmo.odata.ODataCollectionView;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.productSales = dataSvc.productSales;
    }
}


