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
//YFunctionSeries sample component
var YFunctionSeriesCmp = (function () {
    function YFunctionSeriesCmp() {
        this.title = 'YFunctionSeries';
        this.func = function (value) {
            return Math.sin(4 * value) * Math.cos(3 * value);
        };
    }
    YFunctionSeriesCmp = __decorate([
        core_1.Component({
            selector: 'y-function-series-cmp',
            templateUrl: 'src/components/YFunctionSeriesCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Analytics.WjFlexChartYFunctionSeries, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        })
    ], YFunctionSeriesCmp);
    return YFunctionSeriesCmp;
}());
exports.YFunctionSeriesCmp = YFunctionSeriesCmp;
//# sourceMappingURL=YFunctionSeriesCmp.js.map