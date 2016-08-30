'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { AppTab, AppTabPane } from './AppTab';
import * as wjNg2FlexChart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';

import { DataSvc } from './../services/DataSvc';

//GettingStarted sample component
@Component({
    selector: 'getting-started-cmp',
    templateUrl: 'src/components/GettingStartedCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2FlexChart.WjFlexChartAxis,
        AppTab, AppTabPane, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class GettingStartedCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
    }

    private setDataSource() {
        this.dataSvc.getData().subscribe(data => {
            this.data = data;
        });
    }
}