'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
//import { FormsModule } from '@angular/forms';
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
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
            templateUrl: 'src/components/chart/chartBubbleCmp.html'
        })
    ], ChartBubbleCmp);
    return ChartBubbleCmp;
}());
exports.ChartBubbleCmp = ChartBubbleCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartBubbleCmp }
]);
var ChartBubbleModule = (function () {
    function ChartBubbleModule() {
    }
    ChartBubbleModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule],
            declarations: [ChartBubbleCmp],
        })
    ], ChartBubbleModule);
    return ChartBubbleModule;
}());
exports.ChartBubbleModule = ChartBubbleModule;
//# sourceMappingURL=ChartBubbleCmp.js.map