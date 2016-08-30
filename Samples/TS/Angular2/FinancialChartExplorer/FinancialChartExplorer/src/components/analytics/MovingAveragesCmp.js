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
//MovingAverages sample component
var MovingAveragesCmp = (function () {
    function MovingAveragesCmp(dataSvc, tooltipSvc) {
        var _this = this;
        this.shortPeriodChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.shortProps.period = input.value;
        };
        this.longPeriodChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.longProps.period = input.value;
        };
        this.data = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.selectedSymbol = 'fb';
        this.setDataSource();
        this.title = 'Moving Averages';
        this.shortProps = {
            period: 50,
            type: 'Simple',
            name: ' Day MA'
        };
        this.longProps = {
            period: 200,
            type: 'Simple',
            name: ' Day MA'
        };
    }
    MovingAveragesCmp.prototype.chartRendered = function () {
        // customize tooltips
        if (this.chart) {
            this.chart.tooltip.content = this.tooltipSvc.getTooltip;
        }
    };
    MovingAveragesCmp.prototype.setDataSource = function () {
        var _this = this;
        var symbol = this.selectedSymbol;
        this.dataSvc.getData(symbol).subscribe(function (data) {
            _this.data = data;
        });
    };
    __decorate([
        core_1.ViewChild('chart')
    ], MovingAveragesCmp.prototype, "chart", void 0);
    MovingAveragesCmp = __decorate([
        core_1.Component({
            selector: 'moving-averages-cmp',
            templateUrl: 'src/components/analytics/MovingAveragesCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjInputNumber, wjNg2Analytics.WjFlexChartMovingAverage, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)),
        __param(1, core_1.Inject(TooltipSvc_1.TooltipSvc))
    ], MovingAveragesCmp);
    return MovingAveragesCmp;
}());
exports.MovingAveragesCmp = MovingAveragesCmp;
//# sourceMappingURL=MovingAveragesCmp.js.map