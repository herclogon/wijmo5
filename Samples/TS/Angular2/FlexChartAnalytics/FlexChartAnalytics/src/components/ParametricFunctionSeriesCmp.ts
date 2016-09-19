'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjChartAnalyticsModule } from 'wijmo/wijmo.angular2.chart.analytics';

//ParametricFunctionSeries sample component
@Component({
    selector: 'parametric-function-series-cmp',
    templateUrl: 'src/components/ParametricFunctionSeriesCmp.html'
})

export class ParametricFunctionSeriesCmp {
    title: string;
    xFunc: Function;
    yFunc: Function;
    max: number;

    constructor() {
        var xParam = 5,
            yParam = 7;

        this.title = 'ParametricFunctionSeries';
        this.xFunc = function(value) {
            return Math.cos(value * xParam);
        };
        this.yFunc = function(value) {
            return Math.sin(value * yParam);
        }
        this.max = 2 * Math.PI;
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ParametricFunctionSeriesCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule, WjChartAnalyticsModule],
    declarations: [ParametricFunctionSeriesCmp],
})
export class ParametricFunctionSeriesModule {
}