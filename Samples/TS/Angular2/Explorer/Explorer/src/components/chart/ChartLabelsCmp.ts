'use strict';

import { Component, EventEmitter } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

// Chart labels component
@Component({
    selector: 'chart-labels-cmp',
    templateUrl: 'src/components/chart/chartlabelsCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, CORE_DIRECTIVES]  
})

export class ChartLabelsCmp {

    itemsSource: any[];

    constructor() {
        this.itemsSource = [];
        var names = ['c1', 'c2', 'c3', 'c4', 'c5'];
        for (var i = 0; i < names.length; i++) {
            this.itemsSource.push({
                name: names[i],
                mar: Math.random() * 3,
                apr: Math.random() * 10,
                may: Math.random() * 5
            });
        }
    }
}