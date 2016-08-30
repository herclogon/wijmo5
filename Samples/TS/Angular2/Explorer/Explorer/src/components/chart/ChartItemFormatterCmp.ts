'use strict';

import { Component, EventEmitter} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import * as wjNg2Chart from 'wijmo/wijmo.angular2.chart';

// Chart item formatter component
@Component({
    selector: 'chart-item-formatter-cmp',
    templateUrl: 'src/components/chart/chartItemFormatterCmp.html',
    directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis, CORE_DIRECTIVES]
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
