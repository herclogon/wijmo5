'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjChartAnalyticsModule } from 'wijmo/wijmo.angular2.chart.analytics';
//YFunctionSeries sample component
@Component({
    selector: 'y-function-series-cmp',
    templateUrl: 'src/components/YFunctionSeriesCmp.html'
})

export class YFunctionSeriesCmp {
    title: string;
    func: Function;

    constructor() {
        this.title = 'YFunctionSeries';
        this.func = function (value) {
            return Math.sin(4 * value) * Math.cos(3 * value);
        };
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: YFunctionSeriesCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule, WjChartAnalyticsModule],
    declarations: [YFunctionSeriesCmp],
})
export class YFunctionSeriesModule {
}