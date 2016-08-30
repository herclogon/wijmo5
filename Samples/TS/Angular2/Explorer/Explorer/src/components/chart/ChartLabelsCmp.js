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
// Chart labels component
var ChartLabelsCmp = (function () {
    function ChartLabelsCmp() {
        this.itemsSource = [];
        var names = ['c1', 'c2', 'c3', 'c4', 'c5'];
        for (var i = 0; i < names.length; i++) {
            this.itemsSource.push({
                name: names[i],
                mar: Math.random() * 3,
                apr: Math.random() * 10,
                may: Math.random() * 5
            });
        }
    }
    ChartLabelsCmp = __decorate([
        core_1.Component({
            selector: 'chart-labels-cmp',
            templateUrl: 'src/components/chart/chartlabelsCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, common_1.CORE_DIRECTIVES]
        })
    ], ChartLabelsCmp);
    return ChartLabelsCmp;
}());
exports.ChartLabelsCmp = ChartLabelsCmp;
//# sourceMappingURL=ChartLabelsCmp.js.map