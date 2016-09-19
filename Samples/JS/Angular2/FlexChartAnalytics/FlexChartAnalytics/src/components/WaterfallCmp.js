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
var wijmo_angular2_chart_analytics_1 = require('wijmo/wijmo.angular2.chart.analytics');
var DataSvc_1 = require('./../services/DataSvc');
//TrendLine sample component
var WaterfallCmp = (function () {
    function WaterfallCmp(dataSvc) {
        this.itemsSource = dataSvc.getWaterfallData();
        this.title = 'Waterfall';
        this.relativeData = true;
        this.connectorLines = true;
        this.showTotal = true;
        this.showIntermediateTotal = true;
        this.styles = {
            connectorLines: {
                stroke: '#333',
                'stroke-dasharray': '5 5'
            },
            start: {
                fill: '#7dc7ed'
            },
            falling: {
                fill: '#dd2714',
                stroke: '#a52714'
            },
            rising: {
                fill: '#0f9d58',
                stroke: '#0f9d58'
            },
            intermediateTotal: {
                fill: '#7dc7ed'
            },
            total: {
                fill: '#7dc7ed'
            }
        };
    }
    WaterfallCmp.prototype.ngAfterViewInit = function () {
        this.waterfallChart.tooltip.content = function (ht) {
            if (ht) {
                return '<b>' + ht.x + '</b><br/>value: ' + ht.y;
            }
        };
    };
    __decorate([
        core_1.ViewChild('waterfall')
    ], WaterfallCmp.prototype, "waterfall", void 0);
    __decorate([
        core_1.ViewChild('waterfallChart')
    ], WaterfallCmp.prototype, "waterfallChart", void 0);
    WaterfallCmp = __decorate([
        core_1.Component({
            selector: 'waterfall-cmp',
            templateUrl: 'src/components/WaterfallCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], WaterfallCmp);
    return WaterfallCmp;
}());
exports.WaterfallCmp = WaterfallCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: WaterfallCmp }
]);
var WaterfallModule = (function () {
    function WaterfallModule() {
    }
    WaterfallModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, forms_1.FormsModule, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_chart_analytics_1.WjChartAnalyticsModule],
            declarations: [WaterfallCmp],
        })
    ], WaterfallModule);
    return WaterfallModule;
}());
exports.WaterfallModule = WaterfallModule;
//# sourceMappingURL=WaterfallCmp.js.map