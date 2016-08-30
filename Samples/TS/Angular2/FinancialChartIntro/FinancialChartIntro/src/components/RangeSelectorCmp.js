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
var AppTab_1 = require('./AppTab');
var wjNg2FlexChartInteraction = require('wijmo/wijmo.angular2.chart.interaction');
var wjNg2FinancialChart = require('wijmo/wijmo.angular2.chart.finance');
var DataSvc_1 = require('./../services/DataSvc');
//RangeSelector sample component
var RangeSelectorCmp = (function () {
    function RangeSelectorCmp(dataSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
    }
    RangeSelectorCmp.prototype.stRendered = function () {
        var stChart = this.stChart;
        if (!stChart) {
            return;
        }
        stChart.axisX.labels = false;
        stChart.axisX.axisLine = false;
        stChart.legend.position = 0;
        stChart.plotMargin = '60 30 0 50';
        stChart.tooltip.content = function (ht) {
            return 'Date: ' + ht.x + '<br/>' +
                'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2') + '<br/>' +
                'Volume: ' + wijmo.Globalize.format(ht.item.volume, 'n0');
        };
    };
    RangeSelectorCmp.prototype.rsRendered = function () {
        var rsChart = this.rsChart;
        if (!rsChart) {
            return;
        }
        rsChart.axisY.labels = false;
        rsChart.axisY.majorGrid = false;
        rsChart.tooltip.content = '';
        rsChart.plotMargin = '0 30 NaN 50';
    };
    RangeSelectorCmp.prototype.rangeChanged = function () {
        if (this.stChart && this.rangeSelector) {
            this.stChart.axisX.min = this.rangeSelector.min;
            this.stChart.axisX.max = this.rangeSelector.max;
            this.stChart.invalidate();
        }
    };
    RangeSelectorCmp.prototype.setDataSource = function () {
        var _this = this;
        this.dataSvc.getData().subscribe(function (data) {
            _this.data = data;
        });
    };
    __decorate([
        core_1.ViewChild('stChart')
    ], RangeSelectorCmp.prototype, "stChart", void 0);
    __decorate([
        core_1.ViewChild('rsChart')
    ], RangeSelectorCmp.prototype, "rsChart", void 0);
    __decorate([
        core_1.ViewChild('rangeSelector')
    ], RangeSelectorCmp.prototype, "rangeSelector", void 0);
    RangeSelectorCmp = __decorate([
        core_1.Component({
            selector: 'range-selector-cmp',
            templateUrl: 'src/components/RangeSelectorCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2FlexChartInteraction.WjFlexChartRangeSelector,
                AppTab_1.AppTab, AppTab_1.AppTabPane, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], RangeSelectorCmp);
    return RangeSelectorCmp;
}());
exports.RangeSelectorCmp = RangeSelectorCmp;
//# sourceMappingURL=RangeSelectorCmp.js.map