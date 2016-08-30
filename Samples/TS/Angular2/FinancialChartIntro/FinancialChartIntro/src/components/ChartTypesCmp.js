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
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2FinancialChart = require('wijmo/wijmo.angular2.chart.finance');
var DataSvc_1 = require('./../services/DataSvc');
//ChartTypes sample component
var ChartTypesCmp = (function () {
    function ChartTypesCmp(dataSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
        this.chartType = 'Line';
        this.bindingY = 'close';
        this.bindingYs = {
            Column: 'close',
            Line: 'close',
            Area: 'close',
            Candlestick: 'high,low,open,close',
            HighLowOpenClose: 'high,low,open,close',
            HeikinAshi: 'high,low,open,close',
            LineBreak: 'high,low,open,close',
            Renko: 'high,low,open,close',
            Kagi: 'high,low,open,close',
            ColumnVolume: 'close,volume',
            EquiVolume: 'high,low,open,close,volume',
            CandleVolume: 'high,low,open,close,volume',
            ArmsCandleVolume: 'high,low,open,close,volume'
        };
    }
    ChartTypesCmp.prototype.setDataSource = function () {
        var _this = this;
        this.dataSvc.getData().subscribe(function (data) {
            _this.data = data;
        });
    };
    ChartTypesCmp.prototype.chartRendered = function () {
        var _this = this;
        if (this.chart) {
            this.chart.tooltip.content = function (ht) {
                var dateStr = 'Date: ' + ht.x + '<br/>', hlocStr = 'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                    'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                    'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                    'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2') + '<br/>', closeStr = 'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2'), volStr = 'Volume: ' + wijmo.Globalize.format(ht.item.volume, 'n0'), toolTipStr;
                switch (_this.chartType) {
                    case 'Line':
                    case 'Column':
                        toolTipStr = dateStr + closeStr;
                        break;
                    case 'ColumnVolume':
                        toolTipStr = dateStr + closeStr + '<br/>' + volStr;
                        break;
                    case 'EquiVolume':
                    case 'CandleVolume':
                    case 'ArmsCandleVolume':
                        toolTipStr = dateStr + hlocStr + volStr;
                        break;
                    default:
                        toolTipStr = dateStr + hlocStr;
                        break;
                }
                return toolTipStr;
            };
        }
    };
    ChartTypesCmp.prototype.changeType = function (type) {
        var type = type.selectedValue;
        this.bindingY = this.bindingYs[type];
        switch (type) {
            case 'LineBreak':
                this.chart.options = {
                    lineBreak: {
                        newLineBreaks: 3
                    }
                };
                break;
            case 'Renko':
                this.chart.options = {
                    renko: {
                        boxSize: 2,
                        rangeMode: 'Fixed',
                        fields: 'Close'
                    }
                };
                break;
            case 'Kagi':
                this.chart.options = {
                    kagi: {
                        reversalAmount: 1,
                        rangeMode: 'Fixed',
                        fields: 'Close'
                    }
                };
                break;
            default:
                break;
        }
    };
    __decorate([
        core_1.ViewChild('chart')
    ], ChartTypesCmp.prototype, "chart", void 0);
    ChartTypesCmp = __decorate([
        core_1.Component({
            selector: 'chart-types-cmp',
            templateUrl: 'src/components/ChartTypesCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
                AppTab_1.AppTab, AppTab_1.AppTabPane, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], ChartTypesCmp);
    return ChartTypesCmp;
}());
exports.ChartTypesCmp = ChartTypesCmp;
//# sourceMappingURL=ChartTypesCmp.js.map