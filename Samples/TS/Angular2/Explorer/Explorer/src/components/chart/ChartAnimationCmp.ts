'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjChartAnimationModule } from 'wijmo/wijmo.angular2.chart.animation';


// Chart animation component
@Component({
    selector: 'chart-animation-cmp',
    templateUrl: 'src/components/chart/chartAnimationCmp.html',
    styles: [`
       .list-inline > li {
        margin-bottom: 5px;
    }
  `]
})

export class ChartAnimationCmp  {

    data: wijmo.collections.ObservableArray;
    flexChartPoints: number;
    title: string;
    duration: number;
    chartType: string;
    easing: string;
    animationMode: string;
    // references control in the view
    @ViewChild('flexChart') flexChart: wijmo.chart.FlexChart;
    @ViewChild('animation') animation: wijmo.chart.animation.ChartAnimation;

    constructor() {
        this.flexChartPoints = 10;
        this._setDataSource();
        this.title = 'FlexChart';
        this.duration = 400;
        this.chartType = 'Line';
        this.easing = 'Swing';
        this.animationMode = 'All';
    }

    _setDataSource() {
        this.data = this._getData(this.flexChartPoints);
    }

    resetChartData() {
        this._setDataSource();
    }

    itemAdd(args) {
        var idx = args.selectedIndex;
        if (idx > -1) {
            this.func('add', idx);
        }
    }

    itemRemove(args) {
        var idx = args.selectedIndex;
        if (idx > -1) {
            this.func('remove', idx);
        }
    }

    func(oper, idx) {
        var str = '', funcName;
        if (idx === 1) {
            str = 'FirstPoint';
        } else if (idx === 2) {
            str = 'LastPoint';
        }
        funcName = oper + 'ChartSeries' + str;
        this[funcName]();
    }

    addChartSeriesFirstPoint = function () {
        this.data.insert(0, this._getRandomData('added' + this._getRandomValue(1000)));
    };

    addChartSeriesLastPoint = function () {
        this.data.push(this._getRandomData('added' + this._getRandomValue(1000)));
    };

    removeChartSeriesFirstPoint = function () {
        if (this.data.length) {
            this.data.removeAt(0);
        }
    };

    removeChartSeriesLastPoint = function () {
        if (this.data.length) {
            this.data.pop();
        }
    };

    valueChanged = (sender: wijmo.input.InputNumber) => {
        if (sender.value < sender.min || sender.value > sender.max) {
            return;
        }
        this.duration = sender.value;
    };

    addChartSeries = function () {
        var chart = this.flexChart,
            len = chart.series.length;

        if (len >= 5) {
            return;
        }
        var series = new wijmo.chart.Series();
        series.binding = len ? 'y' + len : 'y';
        series.name = 'Y' + (chart.series.length + 1);
        chart.series.push(series);

    };

    removeChartSeries = function () {
        var chart = this.flexChart;

        if (chart.series.length <= 0) {
            return;
        }
        chart.series.pop();
    };

    animationModeChanged() {
        this.animation.animationMode = <any>this.animationMode;
        this.flexChart.refresh(true);
    }

    // get data by symbol
    private _getData(count: number): wijmo.collections.ObservableArray {
        var data = new wijmo.collections.ObservableArray();

        for (var i = 1; i <= count; i++) {
            data.push(this._getRandomData('random' + this._getRandomValue(1000)));
        }
        return data;
    }

    private _getRandomData(idx) {
        return {
            //x: getRandomValue(100),
            x: idx,
            y: this._getRandomValue(200),
            y1: this._getRandomValue(400),
            y2: this._getRandomValue(600),
            y3: this._getRandomValue(800),
            y4: this._getRandomValue(1000)
        };
    }

    private _getRandomValue(max) {
        return Math.round(Math.random() * max);
    }

}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartAnimationCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjChartModule, WjInputModule,
        WjChartAnimationModule],
    declarations: [ChartAnimationCmp],
})
export class ChartAnimationModule {
}