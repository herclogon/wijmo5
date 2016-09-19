'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// Chart series binding component
@Component({
    selector: 'chart-series-binding-cmp',
    templateUrl: 'src/components/chart/chartSeriesBindingCmp.html'})

export class ChartSeriesBindingCmp {

    pts1: any[];
    pts2: any[];

    constructor() {

        this.pts1 = [];
        this.pts2 = [];
        for (var i = 0; i < 300; i++) {
            this.pts1.push({ x: 2 * Math.sin(0.16 * i), y: 2 * Math.cos(0.12 * i) });
            this.pts2.push({ x: Math.sin(0.1 * i), y: Math.cos(0.15 * i) });
        }
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartSeriesBindingCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule],
    declarations: [ChartSeriesBindingCmp],
})
export class ChartSeriesBindingModule {
}
