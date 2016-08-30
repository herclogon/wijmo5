'use strict';

import { Component, EventEmitter} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

// Chart series binding component
@Component({
    selector: 'chart-plot-areas-cmp',
    templateUrl: 'src/components/chart/chartPlotAreasCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis, wjNg2Chart.WjFlexChartPlotArea, CORE_DIRECTIVES] 
})

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