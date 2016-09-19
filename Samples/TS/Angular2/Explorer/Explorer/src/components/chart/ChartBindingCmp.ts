'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Chart binding component
@Component({
    selector: 'chart-binding-cmp',
    templateUrl: 'src/components/chart/chartBindingCmp.html'
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

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartBindingCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjChartModule, WjInputModule],
    declarations: [ChartBindingCmp],
})
export class ChartBindingModule {
}