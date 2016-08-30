'use strict';

import { Component, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

// Chart Finance component
@Component({
    selector: 'chart-finance-cmp',
    templateUrl: 'src/components/chart/chartFinanceCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, CORE_DIRECTIVES]
})

export class ChartFinanceCmp implements AfterViewInit {

    data: any[];
    @ViewChild('chart') chart: wijmo.chart.FlexChart;
    @ViewChild('menu') menu: wijmo.input.Menu;
    customTooltip: Function;

    constructor() {
        this.data = [];
        var start = new Date(99, 0, 1);
        for (var i = 0; i < 90; i++) {
            var q = {x:null, open:null, close:null,hi:null,lo:null};

            q.x = new Date(99, 0, i);

            if (i > 0)
                q.open = this.data[i - 1].close;
            else
                q.open = 1000;

            q.hi = q.open + Math.random() * 50;
            q.lo = q.open - Math.random() * 50;

            q.close = q.lo + Math.random() * (q.hi - q.lo);

            this.data.push(q);
        }
        this.customTooltip = this._customTooltip.bind(this);
    }

    ngAfterViewInit() {
        this.menu.selectedIndex = 0;
        this.chart.chartType = wijmo.chart.ChartType.Candlestick;
    }

    private _customTooltip(ht: wijmo.chart.HitTestInfo) {
        return 'Date: ' + wijmo.Globalize.format(ht.x, 'MMM-dd') + '<br/>' +
            'High: ' + ht.item.hi.toFixed() + '<br/>' +
            'Low: ' + ht.item.lo.toFixed() + '<br/>' +
            'Open: ' + ht.item.open.toFixed() + '<br/>' +
            'Close: ' + ht.item.close.toFixed();
    }
}