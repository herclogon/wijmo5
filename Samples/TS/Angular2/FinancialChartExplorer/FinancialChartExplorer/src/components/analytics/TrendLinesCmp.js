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
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2FinancialChart = require('wijmo/wijmo.angular2.chart.finance');
var wjNg2Analytics = require('wijmo/wijmo.angular2.chart.analytics');
var DataSvc_1 = require('./../../services/DataSvc');
var TooltipSvc_1 = require('./../../services/TooltipSvc');
//TrendLines sample component
var TrendLinesCmp = (function () {
    function TrendLinesCmp(dataSvc, tooltipSvc) {
        var _this = this;
        this.orderChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.properties.order = input.value;
        };
        this.sampleCountChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.properties.sampleCount = input.value;
        };
        this.data = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.selectedSymbol = this.dataList[0].symbol;
        this.setDataSource();
        this.title = 'Trend Lines';
        this.properties = {
            fitType: 'Linear',
            order: 2,
            sampleCount: 150
        };
    }
    TrendLinesCmp.prototype.chartRendered = function () {
        // customize tooltips
        if (this.chart) {
            this.chart.tooltip.content = this.tooltipSvc.getTooltip;
        }
    };
    TrendLinesCmp.prototype.setDataSource = function () {
        var _this = this;
        var symbol = this.selectedSymbol;
        this.dataSvc.getData(symbol).subscribe(function (data) {
            _this.data = data;
        });
    };
    __decorate([
        core_1.ViewChild('chart')
    ], TrendLinesCmp.prototype, "chart", void 0);
    TrendLinesCmp = __decorate([
        core_1.Component({
            selector: 'trend-line-cmp',
            templateUrl: 'src/components/analytics/TrendLinesCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjInputNumber, wjNg2Analytics.WjFlexChartTrendLine, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)),
        __param(1, core_1.Inject(TooltipSvc_1.TooltipSvc))
    ], TrendLinesCmp);
    return TrendLinesCmp;
}());
exports.TrendLinesCmp = TrendLinesCmp;
//# sourceMappingURL=TrendLinesCmp.js.map