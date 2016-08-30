'use strict';

import { Component, EventEmitter, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Analytics from 'wijmo/wijmo.angular2.chart.analytics';

//ParametricFunctionSeries sample component
@Component({
    selector: 'parametric-function-series-cmp',
    templateUrl: 'src/components/ParametricFunctionSeriesCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Analytics.WjFlexChartParametricFunctionSeries, CORE_DIRECTIVES, FORM_DIRECTIVES]
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