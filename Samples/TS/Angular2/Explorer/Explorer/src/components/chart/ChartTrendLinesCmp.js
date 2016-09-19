'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_chart_analytics_1 = require('wijmo/wijmo.angular2.chart.analytics');
var DataSvc_1 = require('../../services/DataSvc');
// Chart trendlines component
var ChartTrendLinesCmp = (function () {
    function ChartTrendLinesCmp(dataSvc) {
        var _this = this;
        this.periodChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.movingAveragePeriod = input.value;
        };
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
        this.movingAveragePeriod = 2;
        this.movingAverageType = 'Simple';
        this.movingAverageName = 'Simple Moving Average';
    }
    ChartTrendLinesCmp.prototype.changeType = function (maMenu) {
        this.movingAverageName = maMenu.selectedValue + ' Moving Average';
    };
    ChartTrendLinesCmp.prototype.setDataSource = function () {
        this.data = this.dataSvc.getChartData();
    };
    ChartTrendLinesCmp = __decorate([
        core_1.Component({
            selector: 'chart-trendlines-cmp',
            templateUrl: 'src/components/chart/chartTrendLinesCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], ChartTrendLinesCmp);
    return ChartTrendLinesCmp;
}());
exports.ChartTrendLinesCmp = ChartTrendLinesCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartTrendLinesCmp }
]);
var ChartTrendLinesModule = (function () {
    function ChartTrendLinesModule() {
    }
    ChartTrendLinesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_chart_analytics_1.WjChartAnalyticsModule],
            declarations: [ChartTrendLinesCmp],
        })
    ], ChartTrendLinesModule);
    return ChartTrendLinesModule;
}());
exports.ChartTrendLinesModule = ChartTrendLinesModule;
//# sourceMappingURL=ChartTrendLinesCmp.js.map