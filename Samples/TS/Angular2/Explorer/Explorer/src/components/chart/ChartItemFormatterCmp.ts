'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Chart item formatter component
@Component({
    selector: 'chart-item-formatter-cmp',
    templateUrl: 'src/components/chart/chartItemFormatterCmp.html'
})

export class ChartItemFormatterCmp {

    pts1: any[];
    itemFormatter: Function;

    constructor() {

        this.pts1 = [];
        var ptsCount = 300;
        for (var i = 0; i < ptsCount; i++) {
            this.pts1.push({ x: 0.16 * i, y: Math.cos(0.12 * i) });
        }
        this.itemFormatter = this._itemFormatter.bind(this);
    }

    private _itemFormatter(engine: wijmo.chart.IRenderEngine, hitTestInfo: wijmo.chart.HitTestInfo, defaultFormat: Function) {
        if (hitTestInfo.chartElement == wijmo.chart.ChartElement.SeriesSymbol) {
            var y = hitTestInfo.y;
            var r = y >= 0 ? 255 : (255 * (1 + y)).toFixed();
            var b = y < 0 ? 255 : (255 * (1 - y)).toFixed();
            var g = ((1 - Math.abs(y)) * 255).toFixed();
            engine.fill = 'rgb(' + r + ',' + g + ',' + b + ')';
            defaultFormat();
        }
    };
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartItemFormatterCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule, WjInputModule],
    declarations: [ChartItemFormatterCmp],
})
export class ChartItemFormatterModule {
}