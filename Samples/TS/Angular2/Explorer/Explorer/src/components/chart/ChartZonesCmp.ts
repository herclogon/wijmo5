'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// Chart zones component
@Component({
    selector: 'chart-zones-cmp',
    templateUrl: 'src/components/chart/chartZonesCmp.html'})

export class ChartZonesCmp implements AfterViewInit {

    itemsSource: any[];
    @ViewChild('chart') chart: wijmo.chart.FlexChart;

    private _nStudents = 200;
    private _nMaxPoints = 1600;
    constructor() {
        this.itemsSource = [];
        // generate data
        for (var i = 0; i < this._nStudents; i++) {
            this.itemsSource.push({
                number: i,
                score: this._nMaxPoints * 0.5 * (1 + Math.random())
            });
        }
    }

    ngAfterViewInit() {
        var chart = this.chart;
        var data = this.itemsSource;
        if (!chart) {
            return;
        }

        // calculate statistics
        var mean = this._findMean(data);
        var stdDev = this._findStdDev(data, mean);

        chart.beginUpdate();
        // statistics series
        for (var i = -2; i <= 2; i++) {
            var y = mean + i * stdDev;
            var sdata = [{ x: 0, y: y }, { x: this._nStudents - 1, y: y }];
            var series = new wijmo.chart.Series();
            series.itemsSource = sdata;
            series.bindingX = 'x';
            series.binding = 'y';
            series.chartType = wijmo.chart.ChartType.Line;
            series.style = { stroke: '#202020', strokeWidth: 2 };
            if (Math.abs(i) == 1) {
                series.style.strokeDasharray = '5,1';
            } else if (Math.abs(i) == 2) {
                series.style.strokeDasharray = '2,2';
            }

            if (i > 0) {
                series.name = 'm+' + i + 's';
            } else if (i < 0) {
                series.name = 'm' + i + 's';
            } else {
                series.name = 'mean';
            }
            chart.series.push(series);
        }

        // calculate zone ranges
        var scores = [];
        for (var i = 0; i < data.length; i++)
            scores.push(data[i].score);
        scores.sort(function (a, b) { return b - a });

        var zones = [
            scores[this._getBoundingIndex(scores, 0.95)],
            scores[this._getBoundingIndex(scores, 0.75)],
            scores[this._getBoundingIndex(scores, 0.25)],
            scores[this._getBoundingIndex(scores, 0.05)]
        ];

        var colors = [
            'rgba(255,192,192,0.2)',
            'rgba(55,328,228,0.5)',
            'rgba(255,228,128,0.5)',
            'rgba(128,255,128,0.5)',
            'rgba(128,128,225,0.5)'
        ];

        // add zones to legend
        for (var i = 0; i < 5; i++) {
            var series = new wijmo.chart.Series();
            series.chartType = wijmo.chart.ChartType.Area
            series.style = { fill: colors[4 - i], stroke: 'transparent' };
            series.name = String.fromCharCode('A'.charCodeAt(0) + i);
            chart.series.push(series);
        }

        // render zones
        chart.rendering.addHandler((sender, e:any)=> {
            for (var i = 0; i < 5; i++) {
                var ymin = i == 0 ? chart.axisY.actualMin : zones[i - 1];
                var ymax = i == 4 ? chart.axisY.actualMax : zones[i];
                this._drawAlarmZone(chart, e.engine, chart.axisX.actualMin, ymin, chart.axisX.actualMax, ymax, colors[i]);
            }
        });

        chart.endUpdate();
    }

    private _findMean(data: any[]) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum += data[i].score;
        }
        return sum / data.length;
    }

    private _findStdDev(data:any[], mean:number) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            var d = data[i].score - mean;
            sum += d * d;
        }
        return Math.sqrt(sum / data.length);
    }

    private _getBoundingIndex(data: any[], frac: number) {
        var n = data.length;
        var i = Math.ceil(n * frac);
        while (i > data[0] && data[i] == data[i + 1])
            i--;
        return i;
    }

    private _drawAlarmZone(chart: wijmo.chart.FlexChart, engine: wijmo.chart.IRenderEngine, xmin: number, ymin: number, xmax: number, ymax: number, fill:string) {
        var pt1 = chart.dataToPoint(new wijmo.Point(xmin, ymin));
        var pt2 = chart.dataToPoint(new wijmo.Point(xmax, ymax));
        engine.fill = fill;
        engine.drawRect(Math.min(pt1.x, pt2.x), Math.min(pt1.y, pt2.y), Math.abs(pt2.x - pt1.x), Math.abs(pt2.y - pt1.y));
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartZonesCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule],
    declarations: [ChartZonesCmp],
})
export class ChartZonesModule {
}
