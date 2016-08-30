'use strict';

import { Component, EventEmitter} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

// Chart header footer component
@Component({
    selector: 'chart-header-footer-cmp',
    templateUrl: 'src/components/chart/chartHeaderFooterCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis, CORE_DIRECTIVES]    
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