'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_chart_analytics_1 = require('wijmo/wijmo.angular2.chart.analytics');
// Chart waterfall component
var ChartWaterfallCmp = (function () {
    function ChartWaterfallCmp() {
        this.itemsSource = this._getWaterfallData();
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
    ChartWaterfallCmp.prototype.ngAfterViewInit = function () {
        this.waterfallChart.tooltip.content = function (ht) {
            if (ht) {
                return '<b>' + ht.x + '</b><br/>value: ' + ht.y;
            }
        };
    };
    ChartWaterfallCmp.prototype._getWaterfallData = function () {
        var names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], data = new wijmo.collections.ObservableArray();
        for (var i = 0, len = names.length; i < len; i++) {
            data.push({
                name: names[i],
                value: Math.round((0.5 - Math.random()) * 1000)
            });
        }
        return data;
    };
    __decorate([
        core_1.ViewChild('waterfall')
    ], ChartWaterfallCmp.prototype, "waterfall", void 0);
    __decorate([
        core_1.ViewChild('waterfallChart')
    ], ChartWaterfallCmp.prototype, "waterfallChart", void 0);
    ChartWaterfallCmp = __decorate([
        core_1.Component({
            selector: 'chart-waterfall-cmp',
            templateUrl: 'src/components/chart/chartWaterfallCmp.html'
        })
    ], ChartWaterfallCmp);
    return ChartWaterfallCmp;
}());
exports.ChartWaterfallCmp = ChartWaterfallCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartWaterfallCmp }
]);
var ChartWaterfallModule = (function () {
    function ChartWaterfallModule() {
    }
    ChartWaterfallModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, forms_1.FormsModule, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_chart_analytics_1.WjChartAnalyticsModule],
            declarations: [ChartWaterfallCmp],
        })
    ], ChartWaterfallModule);
    return ChartWaterfallModule;
}());
exports.ChartWaterfallModule = ChartWaterfallModule;
//# sourceMappingURL=ChartWaterfallCmp.js.map