'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Chart selection component
@Component({
    selector: 'chart-selection-cmp',
    templateUrl: 'src/components/chart/chartSelectionCmp.html'
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

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartSelectionCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule, WjInputModule],
    declarations: [ChartSelectionCmp],
})
export class ChartSelectionModule {
}