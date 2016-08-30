'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
// Chart series binding component
var ChartPlotAreasCmp = (function () {
    function ChartPlotAreasCmp() {
        this.itemsSource = [];
        for (var i = 0; i < 20; i++) {
            var a = i, v = a * i, s = 0.5 * a * i * i;
            this.itemsSource[i] = { a: a, v: v, s: s, t: i };
        }
    }
    ChartPlotAreasCmp = __decorate([
        core_1.Component({
            selector: 'chart-plot-areas-cmp',
            templateUrl: 'src/components/chart/chartPlotAreasCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis, wjNg2Chart.WjFlexChartPlotArea, common_1.CORE_DIRECTIVES]
        })
    ], ChartPlotAreasCmp);
    return ChartPlotAreasCmp;
}());
exports.ChartPlotAreasCmp = ChartPlotAreasCmp;
//# sourceMappingURL=ChartPlotAreasCmp.js.map