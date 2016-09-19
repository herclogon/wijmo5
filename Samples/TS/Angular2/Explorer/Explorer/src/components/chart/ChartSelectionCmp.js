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
            templateUrl: 'src/components/chart/chartSelectionCmp.html'
        })
    ], ChartSelectionCmp);
    return ChartSelectionCmp;
}());
exports.ChartSelectionCmp = ChartSelectionCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartSelectionCmp }
]);
var ChartSelectionModule = (function () {
    function ChartSelectionModule() {
    }
    ChartSelectionModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [ChartSelectionCmp],
        })
    ], ChartSelectionModule);
    return ChartSelectionModule;
}());
exports.ChartSelectionModule = ChartSelectionModule;
//# sourceMappingURL=ChartSelectionCmp.js.map