'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
// Chart header footer component
var ChartHeaderFooterCmp = (function () {
    function ChartHeaderFooterCmp() {
        this.headerStyle = { fontSize: 36 };
        this.footerStyle = { halign: 'right', foreground: 'gray' };
        this.footer = 'Footer (c) ' + new Date().getFullYear();
        this.itemsSource = [];
        for (var i = 0; i < 12; i++) {
            this.itemsSource.push({
                date: wijmo.Globalize.format(new Date(10, i, 1), 'MMM'),
                sales: Math.random() * 1000
            });
        }
        this.customTooltip = this._customTooltip.bind(this);
    }
    ChartHeaderFooterCmp.prototype._customTooltip = function (ht) {
        return 'Month: ' + ht.item.date + '<br/>' + 'Sales: ' + ht.item.sales.toFixed();
    };
    ChartHeaderFooterCmp = __decorate([
        core_1.Component({
            selector: 'chart-header-footer-cmp',
            templateUrl: 'src/components/chart/chartHeaderFooterCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis, common_1.CORE_DIRECTIVES]
        })
    ], ChartHeaderFooterCmp);
    return ChartHeaderFooterCmp;
}());
exports.ChartHeaderFooterCmp = ChartHeaderFooterCmp;
//# sourceMappingURL=ChartHeaderFooterCmp.js.map