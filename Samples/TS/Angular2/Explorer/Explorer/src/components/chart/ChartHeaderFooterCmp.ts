'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// Chart header footer component
@Component({
    selector: 'chart-header-footer-cmp',
    templateUrl: 'src/components/chart/chartHeaderFooterCmp.html'  
})

export class ChartHeaderFooterCmp {

    itemsSource: any[];
    headerStyle = { fontSize: 36 };
    footerStyle = { halign: 'right', foreground: 'gray'};
    footer = 'Footer (c) ' + new Date().getFullYear();
    customTooltip: Function;

    constructor() {
        this.itemsSource = [];
        for (var i = 0; i < 12; i++) {
           this.itemsSource.push({
                date: wijmo.Globalize.format(new Date(10, i, 1), 'MMM'),
                sales: Math.random() * 1000
            });
        }
        this.customTooltip = this._customTooltip.bind(this);
    }

    private _customTooltip(ht: wijmo.chart.HitTestInfo) {
        return 'Month: ' + ht.item.date + '<br/>' + 'Sales: ' + ht.item.sales.toFixed();
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartHeaderFooterCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule],
    declarations: [ChartHeaderFooterCmp],
})
export class ChartHeaderFooterModule {
}