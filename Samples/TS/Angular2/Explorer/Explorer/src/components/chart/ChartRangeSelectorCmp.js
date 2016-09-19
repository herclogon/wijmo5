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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_chart_interaction_1 = require('wijmo/wijmo.angular2.chart.interaction');
var DataSvc_1 = require('../../services/DataSvc');
// Chart rangeSelector component
var ChartRangeSelectorCmp = (function () {
    function ChartRangeSelectorCmp(dataSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
    }
    ChartRangeSelectorCmp.prototype.stRendered = function () {
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
    ChartRangeSelectorCmp.prototype.rsRendered = function () {
        var rsChart = this.rsChart;
        if (!rsChart) {
            return;
        }
        rsChart.axisY.labels = false;
        rsChart.axisY.majorGrid = false;
        rsChart.tooltip.content = '';
        rsChart.plotMargin = '0 30 NaN 50';
    };
    ChartRangeSelectorCmp.prototype.rangeChanged = function () {
        if (this.stChart && this.rangeSelector) {
            this.stChart.axisX.min = this.rangeSelector.min;
            this.stChart.axisX.max = this.rangeSelector.max;
            this.stChart.invalidate();
        }
    };
    ChartRangeSelectorCmp.prototype.setDataSource = function () {
        this.data = this.dataSvc.getChartData();
    };
    __decorate([
        core_1.ViewChild('stChart')
    ], ChartRangeSelectorCmp.prototype, "stChart", void 0);
    __decorate([
        core_1.ViewChild('rsChart')
    ], ChartRangeSelectorCmp.prototype, "rsChart", void 0);
    __decorate([
        core_1.ViewChild('rangeSelector')
    ], ChartRangeSelectorCmp.prototype, "rangeSelector", void 0);
    ChartRangeSelectorCmp = __decorate([
        core_1.Component({
            selector: 'chart-range-selector-cmp',
            templateUrl: 'src/components/chart/chartRangeSelectorCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], ChartRangeSelectorCmp);
    return ChartRangeSelectorCmp;
}());
exports.ChartRangeSelectorCmp = ChartRangeSelectorCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartRangeSelectorCmp }
]);
var ChartRangeSelectorModule = (function () {
    function ChartRangeSelectorModule() {
    }
    ChartRangeSelectorModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_chart_interaction_1.WjChartInteractionModule],
            declarations: [ChartRangeSelectorCmp],
        })
    ], ChartRangeSelectorModule);
    return ChartRangeSelectorModule;
}());
exports.ChartRangeSelectorModule = ChartRangeSelectorModule;
//# sourceMappingURL=ChartRangeSelectorCmp.js.map