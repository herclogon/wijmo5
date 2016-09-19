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
// Chart binding component
var ChartBindingCmp = (function () {
    //@ViewChild('menu') menu: wijmo.input.Menu;
    //@ViewChild('chart') chart: wijmo.chart.FlexChart;
    function ChartBindingCmp() {
        this.itemsSource = [];
        for (var i = 0; i < 300; i++) {
            var mod = Math.floor(i / 10) % 10;
            this.itemsSource.push({
                date: new Date(10, 0, i),
                sales: mod == 0 ? null : Math.random() * 10,
                downloads: mod == 0 ? null : Math.random() * 10 + 10
            });
        }
    }
    ChartBindingCmp.prototype.ngAfterViewInit = function () {
        //TODO: remove the workaround
        //this.menu.selectedIndex = 0;
        //this.chart.chartType = wijmo.chart.ChartType.Line;
    };
    ChartBindingCmp = __decorate([
        core_1.Component({
            selector: 'chart-binding-cmp',
            templateUrl: 'src/components/chart/chartBindingCmp.html'
        })
    ], ChartBindingCmp);
    return ChartBindingCmp;
}());
exports.ChartBindingCmp = ChartBindingCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartBindingCmp }
]);
var ChartBindingModule = (function () {
    function ChartBindingModule() {
    }
    ChartBindingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [ChartBindingCmp],
        })
    ], ChartBindingModule);
    return ChartBindingModule;
}());
exports.ChartBindingModule = ChartBindingModule;
//# sourceMappingURL=ChartBindingCmp.js.map