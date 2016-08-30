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
// Chart bubble component
var ChartBubbleCmp = (function () {
    function ChartBubbleCmp() {
        this.itemsSource = [];
        for (var i = 0; i < 30; i++) {
            this.itemsSource.push({
                x: i,
                y: Math.random() * 10,
                size: Math.random() * 100
            });
        }
        this.customTooltip = this._customToolTip.bind(this);
    }
    ChartBubbleCmp.prototype._customToolTip = function (ht) {
        return 'x=<b>' + ht.item.x.toFixed(1) + '</b> ' +
            'y=<b>' + ht.item.y.toFixed(1) + '</b><br/>' +
            'size=<b>' + ht.item.size.toFixed(1) + '</b>';
    };
    ChartBubbleCmp = __decorate([
        core_1.Component({
            selector: 'chart-bubble-cmp',
            templateUrl: 'src/components/chart/chartBubbleCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis, common_1.CORE_DIRECTIVES]
        })
    ], ChartBubbleCmp);
    return ChartBubbleCmp;
}());
exports.ChartBubbleCmp = ChartBubbleCmp;
//# sourceMappingURL=ChartBubbleCmp.js.map