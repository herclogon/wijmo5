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
var wjNg2Analytics = require('wijmo/wijmo.angular2.chart.analytics');
//ParametricFunctionSeries sample component
var ParametricFunctionSeriesCmp = (function () {
    function ParametricFunctionSeriesCmp() {
        var xParam = 5, yParam = 7;
        this.title = 'ParametricFunctionSeries';
        this.xFunc = function (value) {
            return Math.cos(value * xParam);
        };
        this.yFunc = function (value) {
            return Math.sin(value * yParam);
        };
        this.max = 2 * Math.PI;
    }
    ParametricFunctionSeriesCmp = __decorate([
        core_1.Component({
            selector: 'parametric-function-series-cmp',
            templateUrl: 'src/components/ParametricFunctionSeriesCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Analytics.WjFlexChartParametricFunctionSeries, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        })
    ], ParametricFunctionSeriesCmp);
    return ParametricFunctionSeriesCmp;
}());
exports.ParametricFunctionSeriesCmp = ParametricFunctionSeriesCmp;
//# sourceMappingURL=ParametricFunctionSeriesCmp.js.map