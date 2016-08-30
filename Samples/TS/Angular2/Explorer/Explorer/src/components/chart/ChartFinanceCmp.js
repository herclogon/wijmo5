'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
// Chart Finance component
var ChartFinanceCmp = (function () {
    function ChartFinanceCmp() {
        this.data = [];
        var start = new Date(99, 0, 1);
        for (var i = 0; i < 90; i++) {
            var q = { x: null, open: null, close: null, hi: null, lo: null };
            q.x = new Date(99, 0, i);
            if (i > 0)
                q.open = this.data[i - 1].close;
            else
                q.open = 1000;
            q.hi = q.open + Math.random() * 50;
            q.lo = q.open - Math.random() * 50;
            q.close = q.lo + Math.random() * (q.hi - q.lo);
            this.data.push(q);
        }
        this.customTooltip = this._customTooltip.bind(this);
    }
    ChartFinanceCmp.prototype.ngAfterViewInit = function () {
        this.menu.selectedIndex = 0;
        this.chart.chartType = wijmo.chart.ChartType.Candlestick;
    };
    ChartFinanceCmp.prototype._customTooltip = function (ht) {
        return 'Date: ' + wijmo.Globalize.format(ht.x, 'MMM-dd') + '<br/>' +
            'High: ' + ht.item.hi.toFixed() + '<br/>' +
            'Low: ' + ht.item.lo.toFixed() + '<br/>' +
            'Open: ' + ht.item.open.toFixed() + '<br/>' +
            'Close: ' + ht.item.close.toFixed();
    };
    __decorate([
        core_1.ViewChild('chart')
    ], ChartFinanceCmp.prototype, "chart", void 0);
    __decorate([
        core_1.ViewChild('menu')
    ], ChartFinanceCmp.prototype, "menu", void 0);
    ChartFinanceCmp = __decorate([
        core_1.Component({
            selector: 'chart-finance-cmp',
            templateUrl: 'src/components/chart/chartFinanceCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, common_1.CORE_DIRECTIVES]
        })
    ], ChartFinanceCmp);
    return ChartFinanceCmp;
}());
exports.ChartFinanceCmp = ChartFinanceCmp;
//# sourceMappingURL=ChartFinanceCmp.js.map