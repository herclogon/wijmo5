'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
// Chart series binding component
var ChartSeriesBindingCmp = (function () {
    function ChartSeriesBindingCmp() {
        this.pts1 = [];
        this.pts2 = [];
        for (var i = 0; i < 300; i++) {
            this.pts1.push({ x: 2 * Math.sin(0.16 * i), y: 2 * Math.cos(0.12 * i) });
            this.pts2.push({ x: Math.sin(0.1 * i), y: Math.cos(0.15 * i) });
        }
    }
    ChartSeriesBindingCmp = __decorate([
        core_1.Component({
            selector: 'chart-series-binding-cmp',
            templateUrl: 'src/components/chart/chartSeriesBindingCmp.html' })
    ], ChartSeriesBindingCmp);
    return ChartSeriesBindingCmp;
}());
exports.ChartSeriesBindingCmp = ChartSeriesBindingCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartSeriesBindingCmp }
]);
var ChartSeriesBindingModule = (function () {
    function ChartSeriesBindingModule() {
    }
    ChartSeriesBindingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule],
            declarations: [ChartSeriesBindingCmp],
        })
    ], ChartSeriesBindingModule);
    return ChartSeriesBindingModule;
}());
exports.ChartSeriesBindingModule = ChartSeriesBindingModule;
//# sourceMappingURL=ChartSeriesBindingCmp.js.map