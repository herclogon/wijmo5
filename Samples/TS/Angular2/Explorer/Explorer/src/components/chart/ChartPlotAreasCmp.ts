'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// Chart series binding component
@Component({
    selector: 'chart-plot-areas-cmp',
    templateUrl: 'src/components/chart/chartPlotAreasCmp.html'})

export class ChartPlotAreasCmp {

    itemsSource: any[];

    constructor() {

        this.itemsSource = [];

        for (var i = 0; i < 20; i++) {
            var a = i,
                v = a * i,
                s = 0.5 * a * i * i;

            this.itemsSource[i] = { a: a, v: v, s: s, t: i };
        }

    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartPlotAreasCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule],
    declarations: [ChartPlotAreasCmp],
})
export class ChartPlotAreasModule {
}