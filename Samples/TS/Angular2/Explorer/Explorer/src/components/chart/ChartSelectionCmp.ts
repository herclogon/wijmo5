'use strict';

import { Component, EventEmitter} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

// Chart selection component
@Component({
    selector: 'chart-selection-cmp',
    templateUrl: 'src/components/chart/chartSelectionCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, CORE_DIRECTIVES]
})

export class ChartSelectionCmp {

    itemsSource: any[];

    constructor() {
        this.itemsSource = [
            { name: 'Oranges', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
            { name: 'Apples', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
            { name: 'Pears', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
            { name: 'Bananas', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
            { name: 'Pineapples', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
        ]
    }
}