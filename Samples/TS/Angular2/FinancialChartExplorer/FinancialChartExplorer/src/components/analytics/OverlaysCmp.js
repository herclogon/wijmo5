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
var wjNg2FinAnalytics = require('wijmo/wijmo.angular2.chart.finance.analytics');
var DataSvc_1 = require('./../../services/DataSvc');
var TooltipSvc_1 = require('./../../services/TooltipSvc');
//Overlays sample component
var OverlaysCmp = (function () {
    function OverlaysCmp(dataSvc, tooltipSvc) {
        var _this = this;
        this.bpChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.properties.bollingerPeriod = input.value;
        };
        this.bmChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.properties.bollingerMultiplier = input.value;
        };
        this.esChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.properties.envelopeSize = input.value;
        };
        this.epChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.properties.envelopePeriod = input.value;
        };
        this.data = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.overlays = dataSvc.getOverlayList();
        this.selectedSymbol = this.dataList[0].symbol;
        this.selectedOverlay = this.overlays[0].abbreviation;
        this.setDataSource();
        this.title = 'Overlays';
        this.properties = {
            // Bollinger Bands
            bollingerPeriod: 20,
            bollingerMultiplier: 2,
            // Moving Average Envelopes
            envelopePeriod: 20,
            envelopeType: 'Simple',
            envelopeSize: 0.03
        };
    }
    OverlaysCmp.prototype.selectedSymbolChanged = function () {
        this.setDataSource();
    };
    OverlaysCmp.prototype.chartRendered = function () {
        // customize tooltips
        if (this.chart) {
            this.chart.tooltip.content = this.tooltipSvc.getFinancialTooltip;
        }
    };
    OverlaysCmp.prototype.setDataSource = function () {
        var _this = this;
        var symbol = this.selectedSymbol;
        this.dataSvc.getData(symbol).subscribe(function (data) {
            _this.data = data;
        });
    };
    __decorate([
        core_1.ViewChild('chart')
    ], OverlaysCmp.prototype, "chart", void 0);
    OverlaysCmp = __decorate([
        core_1.Component({
            selector: 'overlays-cmp',
            templateUrl: 'src/components/analytics/OverlaysCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
                wjNg2Input.WjComboBox, wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
                wjNg2FinAnalytics.WjFlexChartBollingerBands, wjNg2FinAnalytics.WjFlexChartEnvelopes, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)),
        __param(1, core_1.Inject(TooltipSvc_1.TooltipSvc))
    ], OverlaysCmp);
    return OverlaysCmp;
}());
exports.OverlaysCmp = OverlaysCmp;
//# sourceMappingURL=OverlaysCmp.js.map