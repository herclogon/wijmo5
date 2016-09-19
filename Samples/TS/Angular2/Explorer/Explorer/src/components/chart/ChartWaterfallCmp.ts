'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjChartAnalyticsModule } from 'wijmo/wijmo.angular2.chart.analytics';
import { DataSvc } from '../../services/DataSvc';

// Chart waterfall component
@Component({
    selector: 'chart-waterfall-cmp',
    templateUrl: 'src/components/chart/chartWaterfallCmp.html'
})

export class ChartWaterfallCmp implements AfterViewInit {
    itemsSource: wijmo.collections.ObservableArray;
    title: string;
    relativeData: Boolean;
    connectorLines: Boolean;
    showTotal: Boolean;
    showIntermediateTotal: Boolean;
    styles: any;

    // references control in the view
    @ViewChild('waterfall') waterfall: wijmo.chart.analytics.Waterfall;
    @ViewChild('waterfallChart') waterfallChart: wijmo.chart.FlexChart;

    constructor() {
        this.itemsSource = this._getWaterfallData();
        this.title = 'Waterfall';
        this.relativeData = true;
        this.connectorLines = true;
        this.showTotal = true;
        this.showIntermediateTotal = true;
        this.styles = {
            connectorLines: {
                stroke: '#333',
                'stroke-dasharray': '5 5'
            },
            start: {
                fill: '#7dc7ed'
            },
            falling: {
                fill: '#dd2714',
                stroke: '#a52714'
            },
            rising: {
                fill: '#0f9d58',
                stroke: '#0f9d58'
            },
            intermediateTotal: {
                fill: '#7dc7ed'
            },
            total: {
                fill: '#7dc7ed'
            }
        };
    }

    ngAfterViewInit() {
        this.waterfallChart.tooltip.content = function (ht) {
            if (ht) {
                return '<b>' + ht.x + '</b><br/>value: ' + ht.y;
            }
        }
    }

    private _getWaterfallData(): wijmo.collections.ObservableArray {
        var names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data = new wijmo.collections.ObservableArray();

        for (var i = 0, len = names.length; i < len; i++) {
            data.push({
                name: names[i],
                value: Math.round((0.5 - Math.random()) * 1000)
            });
        }
        return data;
    }

}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartWaterfallCmp }
]);

@NgModule({
    imports: [CommonModule, routing, FormsModule, WjChartModule, WjInputModule, WjChartAnalyticsModule],
    declarations: [ChartWaterfallCmp],
})
export class ChartWaterfallModule {
}
