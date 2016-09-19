'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Chart Axes sample component
@Component({
    selector: 'chart-axes-cmp',
    templateUrl: 'src/components/chart/chartAxesCmp.html'
})

export class ChartAxesCmp {
    itemsSource: any[];

    constructor() {
        this.itemsSource = [
            { mon: 'jan', tav: 3.1, tmin: 0.6, tmax: 5.6, prec: 78.7 },
            { mon: 'feb', tav: 3.2, tmin: 0.3, tmax: 6.2, prec: 52.0 },
            { mon: 'mar', tav: 5.7, tmin: 2.3, tmax: 9.3, prec: 73.6 },
            { mon: 'apr', tav: 8.7, tmin: 4.4, tmax: 13.0, prec: 45.9 },
            { mon: 'may', tav: 12.6, tmin: 8.0, tmax: 17.0, prec: 64.8 },
            { mon: 'jun', tav: 15.3, tmin: 10.8, tmax: 19.6, prec: 70.9 },
            { mon: 'jul', tav: 17.2, tmin: 12.9, tmax: 21.4, prec: 70.2 },
            { mon: 'aug', tav: 17.2, tmin: 12.8, tmax: 21.6, prec: 74.2 },
            { mon: 'sep', tav: 14.7, tmin: 10.7, tmax: 18.6, prec: 83.4 },
            { mon: 'oct', tav: 10.9, tmin: 7.4, tmax: 14.4, prec: 92.3 },
            { mon: 'nov', tav: 6.9, tmin: 4.0, tmax: 9.5, prec: 83.8 },
            { mon: 'dec', tav: 4.1, tmin: 1.5, tmax: 6.5, prec: 83.0 }
        ];
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartAxesCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjChartModule, WjInputModule],
    declarations: [ChartAxesCmp],
})
export class ChartAxesModule {
}