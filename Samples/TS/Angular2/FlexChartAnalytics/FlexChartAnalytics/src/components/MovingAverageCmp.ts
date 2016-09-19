'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjChartAnalyticsModule } from 'wijmo/wijmo.angular2.chart.analytics';

import { DataSvc } from './../services/DataSvc';

//MovingAverage sample component
@Component({
    selector: 'moving-average-cmp',
    templateUrl: 'src/components/MovingAverageCmp.html'
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

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: MovingAverageCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule, WjInputModule, WjChartAnalyticsModule],
    declarations: [MovingAverageCmp],
})
export class MovingAverageModule {
}