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
// Chart Axes sample component
var ChartAxesCmp = (function () {
    function ChartAxesCmp() {
        this.itemsSource = [
            { mon: 'jan', tav: 3.1, tmin: 0.6, tmax: 5.6, prec: 78.7 },
            { mon: 'feb', tav: 3.2, tmin: 0.3, tmax: 6.2, prec: 52.0 },
            { mon: 'mar', tav: 5.7, tmin: 2.3, tmax: 9.3, prec: 73.6 },
            { mon: 'apr', tav: 8.7, tmin: 4.4, tmax: 13.0, prec: 45.9 },
            { mon: 'may', tav: 12.6, tmin: 8.0, tmax: 17.0, prec: 64.8 },
            { mon: 'jun', tav: 15.3, tmin: 10.8, tmax: 19.6, prec: 70.9 },
            { mon: 'jul', tav: 17.2, tmin: 12.9, tmax: 21.4, prec: 70.2 },
            { mon: 'aug', tav: 17.2, tmin: 12.8, tmax: 21.6, prec: 74.2 },
            { mon: 'sep', tav: 14.7, tmin: 10.7, tmax: 18.6, prec: 83.4 },
            { mon: 'oct', tav: 10.9, tmin: 7.4, tmax: 14.4, prec: 92.3 },
            { mon: 'nov', tav: 6.9, tmin: 4.0, tmax: 9.5, prec: 83.8 },
            { mon: 'dec', tav: 4.1, tmin: 1.5, tmax: 6.5, prec: 83.0 }
        ];
    }
    ChartAxesCmp = __decorate([
        core_1.Component({
            selector: 'chart-axes-cmp',
            templateUrl: 'src/components/chart/chartAxesCmp.html'
        })
    ], ChartAxesCmp);
    return ChartAxesCmp;
}());
exports.ChartAxesCmp = ChartAxesCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartAxesCmp }
]);
var ChartAxesModule = (function () {
    function ChartAxesModule() {
    }
    ChartAxesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [ChartAxesCmp],
        })
    ], ChartAxesModule);
    return ChartAxesModule;
}());
exports.ChartAxesModule = ChartAxesModule;
//# sourceMappingURL=ChartAxesCmp.js.map