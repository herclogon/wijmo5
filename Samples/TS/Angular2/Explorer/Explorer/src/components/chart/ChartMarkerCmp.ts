'use strict';

import { Component, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

// Chart marker component
@Component({
    selector: 'chart-marker-cmp',
    templateUrl: 'src/components/chart/chartMarkerCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Chart.WjFlexChartLineMarker, CORE_DIRECTIVES]
})

export class ChartMarkerCmp implements AfterViewInit{

    itemsSource: any[];
    changeContent: Function;

    @ViewChild('chart') chart: wijmo.chart.FlexChart;
    @ViewChild('lineMarker') lineMarker: wijmo.chart.LineMarker;

    private _lines = 1;
    private _pt: wijmo.Point;

    constructor() {
        this.itemsSource = [];
        for (var i = 0; i < 300; i++) {
            this.itemsSource.push({
                date: new Date(10, 0, i),
                output: Math.floor(Math.random() * 10),
                input: Math.floor(Math.random() * 10 + 10)
            });
        }
        this._pt = new wijmo.Point();
        this.changeContent = this._changeContent.bind(this);
    }

    get lines() {
        return this._lines;
    }
    set lines(value: number) {
        if (this._lines != value) {
            this._lines = value;
            if (this.lineMarker) {
                if (this._lines === 0 && this.lineMarker.interaction === 2) {
                    this.lineMarker.interaction = 1;
                }
                this.lineMarker.lines = this._lines;
            }
        }
    }

    positionChanged(point: wijmo.Point) {
        this._pt = point;
    }

    ngAfterViewInit() {
        this.lineMarker.alignment = wijmo.chart.LineMarkerAlignment.Auto;
    }

    private _changeContent() {
        var html = '', chart = this.chart;
        if (!chart) {
            return;
        }
        for (var i = 0; i < chart.series.length; i++) {
            var s = chart.series[i];
            var ht = s.hitTest(new wijmo.Point(this._pt.x, NaN));

            // find series lines to get its color
            var polyline = $(s.hostElement).find('polyline')[0];

            // add series info to the marker content
            if (ht.x && ht.y !== null) {
                if (i == 0) {
                    html += wijmo.Globalize.formatDate(ht.x, 'dd-MMM');
                }
                html += '<div style="color:' + polyline.getAttribute('stroke') + '">' + ht.name + ' = ' + ht.y.toFixed(2) + '</div>';
            }
        }
        return html;
    }
}