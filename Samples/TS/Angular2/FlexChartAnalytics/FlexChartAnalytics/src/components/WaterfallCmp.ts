'use strict';

import { Component, AfterViewInit, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';
import * as wjNg2Analytics from 'wijmo/wijmo.angular2.chart.analytics';

import { DataSvc } from './../services/DataSvc';

//TrendLine sample component
@Component({
    selector: 'waterfall-cmp',
    templateUrl: 'src/components/WaterfallCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Analytics.WjFlexChartWaterfall, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class WaterfallCmp implements AfterViewInit {
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

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.itemsSource = dataSvc.getWaterfallData();
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
}