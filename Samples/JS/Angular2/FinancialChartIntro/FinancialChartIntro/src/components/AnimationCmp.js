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
var wjNg2FlexChartAnimation = require('wijmo/wijmo.angular2.chart.animation');
var wjNg2FinancialChart = require('wijmo/wijmo.angular2.chart.finance');
var DataSvc_1 = require('./../services/DataSvc');
//Animation sample component
var AnimationCmp = (function () {
    function AnimationCmp(dataSvc) {
        var _this = this;
        this.durationChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.duration = input.value;
        };
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
        this.footer = 'Click on chart to refresh';
        this.chartType = 'Line';
        this.easing = 'Swing';
        this.duration = 400;
        this.bindingY = 'close';
        this.bindingYs = {
            Column: 'close',
            Line: 'close',
            Area: 'close',
            Candlestick: 'high,low,open,close',
            HighLowOpenClose: 'high,low,open,close'
        };
    }
    AnimationCmp.prototype.setDataSource = function () {
        var _this = this;
        this.dataSvc.getData().subscribe(function (data) {
            _this.data = data;
        });
    };
    AnimationCmp.prototype.ngAfterViewInit = function () {
        var _this = this;
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
                default:
                    toolTipStr = dateStr + hlocStr;
                    break;
            }
            return toolTipStr;
        };
        this.chart.hostElement.addEventListener('click', function () {
            _this.refreshChart();
        });
    };
    AnimationCmp.prototype.typeChanged = function (menu) {
        var chartType = menu.selectedValue;
        this.bindingY = this.bindingYs[chartType];
    };
    AnimationCmp.prototype.refreshChart = function () {
        var _this = this;
        if (this.chart) {
            // call with a delay to make sure that bindings have propagated to all components
            setTimeout(function () {
                _this.chart.invalidate(true);
            }, 0);
        }
    };
    __decorate([
        core_1.ViewChild('chart')
    ], AnimationCmp.prototype, "chart", void 0);
    __decorate([
        core_1.ViewChild('animation')
    ], AnimationCmp.prototype, "animation", void 0);
    AnimationCmp = __decorate([
        core_1.Component({
            selector: 'animation-cmp',
            templateUrl: 'src/components/AnimationCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2FlexChartAnimation.WjFlexChartAnimation,
                wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, AppTab_1.AppTab, AppTab_1.AppTabPane, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AnimationCmp);
    return AnimationCmp;
}());
exports.AnimationCmp = AnimationCmp;
//# sourceMappingURL=AnimationCmp.js.map