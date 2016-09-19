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
var wijmo_angular2_chart_analytics_1 = require('wijmo/wijmo.angular2.chart.analytics');
//ParametricFunctionSeries sample component
var ParametricFunctionSeriesCmp = (function () {
    function ParametricFunctionSeriesCmp() {
        var xParam = 5, yParam = 7;
        this.title = 'ParametricFunctionSeries';
        this.xFunc = function (value) {
            return Math.cos(value * xParam);
        };
        this.yFunc = function (value) {
            return Math.sin(value * yParam);
        };
        this.max = 2 * Math.PI;
    }
    ParametricFunctionSeriesCmp = __decorate([
        core_1.Component({
            selector: 'parametric-function-series-cmp',
            templateUrl: 'src/components/ParametricFunctionSeriesCmp.html'
        })
    ], ParametricFunctionSeriesCmp);
    return ParametricFunctionSeriesCmp;
}());
exports.ParametricFunctionSeriesCmp = ParametricFunctionSeriesCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ParametricFunctionSeriesCmp }
]);
var ParametricFunctionSeriesModule = (function () {
    function ParametricFunctionSeriesModule() {
    }
    ParametricFunctionSeriesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_chart_analytics_1.WjChartAnalyticsModule],
            declarations: [ParametricFunctionSeriesCmp],
        })
    ], ParametricFunctionSeriesModule);
    return ParametricFunctionSeriesModule;
}());
exports.ParametricFunctionSeriesModule = ParametricFunctionSeriesModule;
//# sourceMappingURL=ParametricFunctionSeriesCmp.js.map