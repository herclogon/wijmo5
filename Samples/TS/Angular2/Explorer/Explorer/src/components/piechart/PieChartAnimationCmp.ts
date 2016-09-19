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
    selector: 'pie-chart-animation-cmp',
    templateUrl: 'src/components/piechart/pieChartAnimationCmp.html',
    styles: [`
   .list-inline > li {
    margin-bottom: 5px;
}
  `]
})

export class PieChartAnimationCmp  {
    data: wijmo.collections.ObservableArray;
    flexPiePoints: number;
    title: string;
    duration: number;
    innerRadius: number;
    easing: string;
    animationMode: string;
    insertPieIdx: number;
    // references control in the view
    @ViewChild('flexPie') flexPie: wijmo.chart.FlexPie;
    @ViewChild('animation') animation: wijmo.chart.animation.ChartAnimation;

    constructor() {
        this.flexPiePoints = 5;
        this._setDataSource();
        this.title = 'FlexPie';
        this.duration = 400;
        this.innerRadius = 0;
        this.easing = 'Swing';
        this.animationMode = 'All';
    }

    _setDataSource() {
        this.data = this._getData(this.flexPiePoints);
        this.insertPieIdx = 1;
    }

    resetChartData() {
        this._setDataSource();
    }

    addSlice = function () {
        this.data.push(this._getRandomData('added' + this.insertPieIdx));
        this.insertPieIdx++;
    }

    removeSlice = function () {
        if (this.data.length) {
            this.data.pop();
            this.insertPieIdx = this.insertPieIdx <= 1 ? 1 : this.insertPieIdx--;
        }
    }

    animationModeChanged() {
        this.animation.animationMode = <any>this.animationMode;
        this.flexPie.refresh(true);
    }

    innerRadiusChanged = (sender: wijmo.input.InputNumber) => {
        if (sender.value < sender.min || sender.value > sender.max) {
            return;
        }
        this.innerRadius = sender.value;
    };

    durationChanged = (sender: wijmo.input.InputNumber) => {
        if (sender.value < sender.min || sender.value > sender.max) {
            return;
        }
        this.duration = sender.value;
    };

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
    { path: '', component: PieChartAnimationCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjChartModule, WjInputModule, WjChartAnimationModule],
    declarations: [PieChartAnimationCmp],
})
export class PieChartAnimationModule {
}