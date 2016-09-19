'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjChartAnnotationModule } from 'wijmo/wijmo.angular2.chart.annotation';

// Chart annotation component
@Component({
    selector: 'chart-annotation-cmp',
    templateUrl: 'src/components/chart/chartAnnotationCmp.html'
})

export class ChartAnnotationCmp  {

    data: any[];
    basicData: any[];
    basic: any;
    @ViewChild('al') al: wijmo.chart.annotation.AnnotationLayer;

    constructor() {
        this.basicData = this._getBasicData();
        this.basic = {
            rectDate: new Date(2014, 1, 10),
            imageDate: new Date(2014, 0, 25)
        };
    }

    // get basic data
    private _getBasicData() {
        var data = [],
            sales = [
                96, 19, 54, 83, 15, 56, 36, 4, 29, 93,
                38, 71, 50, 77, 69, 13, 79, 57, 29, 62,
                4, 27, 66, 96, 65, 12, 52, 3, 61, 48, 50,
                70, 39, 33, 25, 49, 69, 46, 44, 40, 35,
                72, 64, 10, 66, 63, 78, 19, 96, 26],
            len = sales.length;

        for (var i = 0; i < len; i++) {
            data.push({
                sale: sales[i],
                date: new Date(2014, 0, i),
            });
        }
        return data;
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartAnnotationCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjChartModule, WjChartAnnotationModule],
    declarations: [ChartAnnotationCmp],
})
export class ChartAnnotationModule {
}