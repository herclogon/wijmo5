'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// Chart bubble component
@Component({
    selector: 'chart-bubble-cmp',
    templateUrl: 'src/components/chart/chartBubbleCmp.html'
})

export class ChartBubbleCmp {

    itemsSource: any[];
    customTooltip: Function;

    constructor() {
        this.itemsSource = [];
        for (var i = 0; i < 30; i++) {
            this.itemsSource.push({
                x: i,
                y: Math.random() * 10,
                size: Math.random() * 100
            });
        }
        this.customTooltip = this._customToolTip.bind(this);
    }

    private _customToolTip(ht: wijmo.chart.HitTestInfo) {
        return 'x=<b>' + ht.item.x.toFixed(1) + '</b> ' +
            'y=<b>' + ht.item.y.toFixed(1) + '</b><br/>' +
            'size=<b>' + ht.item.size.toFixed(1) + '</b>';
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartBubbleCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule],
    declarations: [ChartBubbleCmp],
})
export class ChartBubbleModule {
}