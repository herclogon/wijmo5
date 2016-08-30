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
// Chart selection component
var ChartSelectionCmp = (function () {
    function ChartSelectionCmp() {
        this.itemsSource = [
            { name: 'Oranges', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
            { name: 'Apples', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
            { name: 'Pears', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
            { name: 'Bananas', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
            { name: 'Pineapples', Mar: 3 * Math.random(), Apr: 10 * Math.random(), May: 5 * Math.random() },
        ];
    }
    ChartSelectionCmp = __decorate([
        core_1.Component({
            selector: 'chart-selection-cmp',
            templateUrl: 'src/components/chart/chartSelectionCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, common_1.CORE_DIRECTIVES]
        })
    ], ChartSelectionCmp);
    return ChartSelectionCmp;
}());
exports.ChartSelectionCmp = ChartSelectionCmp;
//# sourceMappingURL=ChartSelectionCmp.js.map