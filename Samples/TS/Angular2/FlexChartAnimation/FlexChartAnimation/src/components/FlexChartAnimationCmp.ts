'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjChartAnimationModule } from 'wijmo/wijmo.angular2.chart.animation';

import { DataSvc } from './../services/DataSvc';

//FlexChartAnimation sample component
@Component({
    selector: 'flex-chart-animation-cmp',
    templateUrl: 'src/components/FlexChartAnimationCmp.html'
})

export class FlexChartAnimationCmp {
    dataService: DataSvc;
    data: wijmo.collections.ObservableArray;
    flexChartPoints: number;
    title: string;
    duration: number;
    chartType: string;
    easing: string;
    //private _animationMode = 'All';
    animationMode: string;
    // references control in the view
    @ViewChild('flexChart') flexChart: wijmo.chart.FlexChart;
    @ViewChild('animation') animation: wijmo.chart.animation.ChartAnimation;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.flexChartPoints = 10;
        this.dataService = dataSvc;
        this._setDataSource();
        this.title = 'FlexChart';
        this.duration = 400;
        this.chartType = 'Line';
        this.easing = 'Swing';
        this.animationMode = 'All';
    }

    _setDataSource() {
        this.data = this.dataService.getData(this.flexChartPoints);
    }

    //get animationMode(): string {
    //    return this._animationMode;
    //}
    //set animationMode(value: string) {
    //    if (this._animationMode != value) {
    //        this._animationMode = value;
    //        let anim = wijmo.chart.animation.AnimationMode[value];
    //        this.animation.animationMode = anim;
    //        this.flexChart.refresh(true);
    //    }
    //}

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
        this.data.insert(0, this.dataService.getRandomData('added' + this.dataService.getRandomValue(1000)));
    };

    addChartSeriesLastPoint = function () {
        this.data.push(this.dataService.getRandomData('added' + this.dataService.getRandomValue(1000)));
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
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: FlexChartAnimationCmp }
]);

@NgModule({
    imports: [CommonModule, routing, FormsModule, WjInputModule, WjChartModule, WjChartAnimationModule],
    declarations: [FlexChartAnimationCmp],
})
export class FlexChartAnimationModule {
}