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
//YFunctionSeries sample component
var YFunctionSeriesCmp = (function () {
    function YFunctionSeriesCmp() {
        this.title = 'YFunctionSeries';
        this.func = function (value) {
            return Math.sin(4 * value) * Math.cos(3 * value);
        };
    }
    YFunctionSeriesCmp = __decorate([
        core_1.Component({
            selector: 'y-function-series-cmp',
            templateUrl: 'src/components/YFunctionSeriesCmp.html'
        })
    ], YFunctionSeriesCmp);
    return YFunctionSeriesCmp;
}());
exports.YFunctionSeriesCmp = YFunctionSeriesCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: YFunctionSeriesCmp }
]);
var YFunctionSeriesModule = (function () {
    function YFunctionSeriesModule() {
    }
    YFunctionSeriesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_chart_analytics_1.WjChartAnalyticsModule],
            declarations: [YFunctionSeriesCmp],
        })
    ], YFunctionSeriesModule);
    return YFunctionSeriesModule;
}());
exports.YFunctionSeriesModule = YFunctionSeriesModule;
//# sourceMappingURL=YFunctionSeriesCmp.js.map