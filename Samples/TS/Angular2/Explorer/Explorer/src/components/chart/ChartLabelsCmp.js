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
            templateUrl: 'src/components/chart/chartlabelsCmp.html'
        })
    ], ChartLabelsCmp);
    return ChartLabelsCmp;
}());
exports.ChartLabelsCmp = ChartLabelsCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartLabelsCmp }
]);
var ChartLabelsModule = (function () {
    function ChartLabelsModule() {
    }
    ChartLabelsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [ChartLabelsCmp],
        })
    ], ChartLabelsModule);
    return ChartLabelsModule;
}());
exports.ChartLabelsModule = ChartLabelsModule;
//# sourceMappingURL=ChartLabelsCmp.js.map