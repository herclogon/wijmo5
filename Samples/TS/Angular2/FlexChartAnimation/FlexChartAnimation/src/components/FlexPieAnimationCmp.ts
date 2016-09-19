'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjChartAnimationModule } from 'wijmo/wijmo.angular2.chart.animation';

import { DataSvc } from './../services/DataSvc';

//FlexPieAnimation sample component
@Component({
    selector: 'flex-pie-animation-cmp',
    templateUrl: 'src/components/FlexPieAnimationCmp.html'
})

export class FlexPieAnimationCmp {
    dataService: DataSvc;
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

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.flexPiePoints = 5;
        this.dataService = dataSvc;
        this._setDataSource();
        this.title = 'FlexPie';
        this.duration = 400;
        this.innerRadius = 0;
        this.easing = 'Swing';
        this.animationMode = 'All';
    }

    _setDataSource() {
        this.data = this.dataService.getData(this.flexPiePoints);
        this.insertPieIdx = 1;
    }

    resetChartData() {
        this._setDataSource();
    }

    addSlice = function () {
        this.data.push(this.dataService.getRandomData('added' + this.insertPieIdx));
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
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: FlexPieAnimationCmp }
]);

@NgModule({
    imports: [CommonModule, routing, FormsModule, WjInputModule, WjChartModule, WjChartAnimationModule],
    declarations: [FlexPieAnimationCmp],
})
export class FlexPieAnimationModule {
}