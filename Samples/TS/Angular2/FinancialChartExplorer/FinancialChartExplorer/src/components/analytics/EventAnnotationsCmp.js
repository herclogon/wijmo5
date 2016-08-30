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
var wjNg2FinancialChart = require('wijmo/wijmo.angular2.chart.finance');
var wjNg2Interaction = require('wijmo/wijmo.angular2.chart.interaction');
var wjNg2Annotation = require('wijmo/wijmo.angular2.chart.annotation');
var DataSvc_1 = require('./../../services/DataSvc');
var TooltipSvc_1 = require('./../../services/TooltipSvc');
//EventAnnotations sample component
var EventAnnotationsCmp = (function () {
    function EventAnnotationsCmp(dataSvc, tooltipSvc) {
        this.data = [];
        this.annotations = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.selectedSymbol = 'box';
        this.setDataSource();
        this.title = 'Event Annotations';
        this.setAnnotations();
    }
    EventAnnotationsCmp.prototype.selectedSymbolChanged = function () {
        this.setDataSource();
    };
    EventAnnotationsCmp.prototype.selectorChartRendered = function () {
        if (this.selector && this.selectorChart) {
            var range = this.dataSvc.findApproxRange(this.selectorChart.axisX.actualMin, this.selectorChart.axisX.actualMax, 0.45);
            this.selector.max = range.max;
            this.selector.min = range.min;
        }
    };
    EventAnnotationsCmp.prototype.chartRendered = function () {
        // customize tooltips
        if (this.chart) {
            this.chart.tooltip.content = this.tooltipSvc.getFinancialTooltip;
        }
    };
    EventAnnotationsCmp.prototype.rangeChanged = function () {
        var chart = this.chart, selector = this.selector, yRange;
        if (!chart || !selector) {
            return;
        }
        // find visible y-range
        yRange = this.dataSvc.findRenderedYRange(this.data, selector.min, selector.max);
        // update main chart's x & y range
        chart.axisX.min = selector.min;
        chart.axisX.max = selector.max;
        chart.axisY.min = yRange.min;
        chart.axisY.max = yRange.max;
        chart.invalidate();
    };
    EventAnnotationsCmp.prototype.setDataSource = function () {
        var _this = this;
        var symbol = this.selectedSymbol;
        this.dataSvc.getData(symbol).subscribe(function (data) {
            _this.data = data;
        });
    };
    EventAnnotationsCmp.prototype.setAnnotations = function () {
        var _this = this;
        this.dataSvc.getData('box-annotations').subscribe(function (data) {
            var i, len = data.length;
            for (i = 0; i < len; i++) {
                data[i].tooltip = '<b>' + data[i].title + '</b>';
                if (data[i].description) {
                    data[i].tooltip += '<br>' + data[i].description;
                }
            }
            _this.annotations = data;
        });
    };
    __decorate([
        core_1.ViewChild('chart')
    ], EventAnnotationsCmp.prototype, "chart", void 0);
    __decorate([
        core_1.ViewChild('selectorChart')
    ], EventAnnotationsCmp.prototype, "selectorChart", void 0);
    __decorate([
        core_1.ViewChild('selector')
    ], EventAnnotationsCmp.prototype, "selector", void 0);
    EventAnnotationsCmp = __decorate([
        core_1.Component({
            selector: 'event-annotations-cmp',
            templateUrl: 'src/components/analytics/EventAnnotationsCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2Interaction.WjFlexChartRangeSelector,
                wjNg2Annotation.WjFlexChartAnnotationLayer, wjNg2Annotation.WjFlexChartAnnotationRectangle, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)),
        __param(1, core_1.Inject(TooltipSvc_1.TooltipSvc))
    ], EventAnnotationsCmp);
    return EventAnnotationsCmp;
}());
exports.EventAnnotationsCmp = EventAnnotationsCmp;
//# sourceMappingURL=EventAnnotationsCmp.js.map