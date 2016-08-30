'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { AppTab, AppTabPane } from './AppTab';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2FlexChart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2FlexChartAnalytics from 'wijmo/wijmo.angular2.chart.analytics';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';

import { DataSvc } from './../services/DataSvc';

//TrendLines sample component
@Component({
    selector: 'trend-lines-cmp',
    templateUrl: 'src/components/TrendLinesCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2FlexChart.WjFlexChartAxis, wjNg2FlexChart.WjFlexChartLegend,
        wjNg2FlexChartAnalytics.WjFlexChartMovingAverage, wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, AppTab, AppTabPane, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class TrendLinesCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;
    movingAverageName: string;
    movingAveragePeriod: number;
    movingAverageType: string;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
        this.movingAveragePeriod = 2;
        this.movingAverageType = 'Simple';
        this.movingAverageName = 'Simple Moving Average';
    }

    changeType(maMenu) {
        this.movingAverageName = maMenu.selectedValue + ' Moving Average';
    }

    periodChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.movingAveragePeriod = input.value;
    };

    private setDataSource() {
        this.dataSvc.getData().subscribe(data => {
            this.data = data;
        });
    }
}