'use strict';

import { Component, EventEmitter, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Analytics from 'wijmo/wijmo.angular2.chart.analytics';

//YFunctionSeries sample component
@Component({
    selector: 'y-function-series-cmp',
    templateUrl: 'src/components/YFunctionSeriesCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Analytics.WjFlexChartYFunctionSeries, CORE_DIRECTIVES, FORM_DIRECTIVES]
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