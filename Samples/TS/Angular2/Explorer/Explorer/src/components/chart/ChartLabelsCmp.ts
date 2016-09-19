'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Chart labels component
@Component({
    selector: 'chart-labels-cmp',
    templateUrl: 'src/components/chart/chartlabelsCmp.html'  
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

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartLabelsCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule, WjInputModule],
    declarations: [ChartLabelsCmp],
})
export class ChartLabelsModule {
}