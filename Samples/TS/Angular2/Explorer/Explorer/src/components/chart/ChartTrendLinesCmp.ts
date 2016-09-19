'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjChartAnalyticsModule } from 'wijmo/wijmo.angular2.chart.analytics';
import { DataSvc } from '../../services/DataSvc';

// Chart trendlines component
@Component({
    selector: 'chart-trendlines-cmp',
    templateUrl: 'src/components/chart/chartTrendLinesCmp.html'
})

export class ChartTrendLinesCmp  {

    data: any[];
    header: string;
    movingAverageName: string;
    movingAveragePeriod: number;
    movingAverageType: string;

    private dataSvc: DataSvc;

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
        this.data = this.dataSvc.getChartData();
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartTrendLinesCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule, WjInputModule, WjChartAnalyticsModule],
    declarations: [ChartTrendLinesCmp],
})
export class ChartTrendLinesModule {
}