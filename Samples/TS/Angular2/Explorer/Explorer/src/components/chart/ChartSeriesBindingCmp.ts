'use strict';

import { Component, EventEmitter} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

// Chart series binding component
@Component({
    selector: 'chart-series-binding-cmp',
    templateUrl: 'src/components/chart/chartSeriesBindingCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis, CORE_DIRECTIVES]  
})

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