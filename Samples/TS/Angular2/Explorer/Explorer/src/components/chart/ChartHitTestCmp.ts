'use strict';

import { Component, EventEmitter, Inject, ViewChild, AfterViewInit, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// Chart hittest component
@Component({
    selector: 'chart-hit-test-cmp',
    templateUrl: 'src/components/chart/chartHitTestCmp.html'
})

export class ChartHitTestCmp implements AfterViewInit {

    @ViewChild('chart') chart: wijmo.chart.FlexChart;

    pts1: any[];
    pts2: any[];
    itemsSource: any[];
    headerStyle = { fontSize: 32 };
    footerStyle = { fontSize: 24 };
    hitInfo: wijmo.chart.HitTestInfo;
    point: wijmo.Point;
    chartElement: string;

    constructor() {
        this.pts1 = [];
        this.pts2 = [];

        for (var i = 0; i < 60; i++) {
            this.pts1.push({ x: i, y: Math.cos(0.12 * i) });
            this.pts2.push({ x: i, y: Math.sin(0.12 * i) });
        }

    }
    ngAfterViewInit() {
        if (this.chart) {
            this.chart.hostElement.onmousemove = (e) => {
                this.hitInfo = this.chart.hitTest(e);
                this.point = this.chart.pointToData(e);
                this.chartElement = wijmo.chart.ChartElement[this.hitInfo.chartElement];
            };
        }
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartHitTestCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule],
    declarations: [ChartHitTestCmp],
})
export class ChartHitTestModule {
}
