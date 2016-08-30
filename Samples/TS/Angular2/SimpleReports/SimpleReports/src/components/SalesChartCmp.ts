'use strict';

import { Component, EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'sales-chart-cmp',
    templateUrl: 'src/components/salesChartCmp.html',
    directives: [CORE_DIRECTIVES]
})

export class SalesChartCmp {

    invoices: wijmo.odata.ODataCollectionView;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.invoices = dataSvc.invoices;
    }
}


