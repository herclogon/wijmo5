'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// Chart item formatter component
var ChartItemFormatterCmp = (function () {
    function ChartItemFormatterCmp() {
        this.pts1 = [];
        var ptsCount = 300;
        for (var i = 0; i < ptsCount; i++) {
            this.pts1.push({ x: 0.16 * i, y: Math.cos(0.12 * i) });
        }
        this.itemFormatter = this._itemFormatter.bind(this);
    }
    ChartItemFormatterCmp.prototype._itemFormatter = function (engine, hitTestInfo, defaultFormat) {
        if (hitTestInfo.chartElement == wijmo.chart.ChartElement.SeriesSymbol) {
            var y = hitTestInfo.y;
            var r = y >= 0 ? 255 : (255 * (1 + y)).toFixed();
            var b = y < 0 ? 255 : (255 * (1 - y)).toFixed();
            var g = ((1 - Math.abs(y)) * 255).toFixed();
            engine.fill = 'rgb(' + r + ',' + g + ',' + b + ')';
            defaultFormat();
        }
    };
    ;
    ChartItemFormatterCmp = __decorate([
        core_1.Component({
            selector: 'chart-item-formatter-cmp',
            templateUrl: 'src/components/chart/chartItemFormatterCmp.html'
        })
    ], ChartItemFormatterCmp);
    return ChartItemFormatterCmp;
}());
exports.ChartItemFormatterCmp = ChartItemFormatterCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartItemFormatterCmp }
]);
var ChartItemFormatterModule = (function () {
    function ChartItemFormatterModule() {
    }
    ChartItemFormatterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [ChartItemFormatterCmp],
        })
    ], ChartItemFormatterModule);
    return ChartItemFormatterModule;
}());
exports.ChartItemFormatterModule = ChartItemFormatterModule;
//# sourceMappingURL=ChartItemFormatterCmp.js.map