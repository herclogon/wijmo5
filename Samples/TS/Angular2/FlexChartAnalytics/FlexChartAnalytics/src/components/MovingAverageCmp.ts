'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Analytics from 'wijmo/wijmo.angular2.chart.analytics';

import { DataSvc } from './../services/DataSvc';

//MovingAverage sample component
@Component({
    selector: 'moving-average-cmp',
    templateUrl: 'src/components/MovingAverageCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjInputNumber, wjNg2Analytics.WjFlexChartMovingAverage, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class MovingAverageCmp {
    itemsSource: wijmo.collections.ObservableArray;
    title: string;
    period: number;
    type: string;
    name: string;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.itemsSource = dataSvc.getData(30);
        this.title = 'MovingAverage';
        this.period = 3;
        this.type = 'Simple';
    }

    periodChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.period = input.value;
    };
}