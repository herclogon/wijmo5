'use strict';

import { Component, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

// Chart binding component
@Component({
    selector: 'chart-binding-cmp',
    templateUrl: 'src/components/chart/chartBindingCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, CORE_DIRECTIVES]
})

export class ChartBindingCmp implements AfterViewInit {
    itemsSource: any[];
    //@ViewChild('menu') menu: wijmo.input.Menu;
    //@ViewChild('chart') chart: wijmo.chart.FlexChart;

    constructor() {

        this.itemsSource = [];
        for (var i = 0; i < 300; i++) {
            var mod = Math.floor(i / 10) % 10;
            this.itemsSource.push({
                date: new Date(10, 0, i),
                sales: mod == 0 ? null : Math.random() * 10,
                downloads: mod == 0 ? null : Math.random() * 10 + 10
            });
        }
    }

    ngAfterViewInit() {
        //TODO: remove the workaround
        //this.menu.selectedIndex = 0;
        //this.chart.chartType = wijmo.chart.ChartType.Line;
    }
}