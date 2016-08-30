///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
// Services
var DataSvc_1 = require('./services/DataSvc');
// Sample components
var GettingStartedCmp_1 = require('./components/GettingStartedCmp');
var ChartTypesCmp_1 = require('./components/ChartTypesCmp');
var MarkerCmp_1 = require('./components/MarkerCmp');
var RangeSelectorCmp_1 = require('./components/RangeSelectorCmp');
var TrendLinesCmp_1 = require('./components/TrendLinesCmp');
var EventAnnotationCmp_1 = require('./components/EventAnnotationCmp');
var AnimationCmp_1 = require('./components/AnimationCmp');
var FinancialChartIntro;
(function (FinancialChartIntro) {
    'use strict';
    // The FinancialChartIntro application root component.
    var AppCmp = (function () {
        function AppCmp() {
        }
        AppCmp = __decorate([
            core_1.Component({
                selector: 'app-cmp',
                templateUrl: 'src/app.html',
                directives: [common_1.CORE_DIRECTIVES, GettingStartedCmp_1.GettingStartedCmp, ChartTypesCmp_1.ChartTypesCmp, MarkerCmp_1.MarkerCmp, RangeSelectorCmp_1.RangeSelectorCmp, TrendLinesCmp_1.TrendLinesCmp, EventAnnotationCmp_1.EventAnnotationCmp, AnimationCmp_1.AnimationCmp]
            })
        ], AppCmp);
        return AppCmp;
    }());
    FinancialChartIntro.AppCmp = AppCmp;
})(FinancialChartIntro = exports.FinancialChartIntro || (exports.FinancialChartIntro = {}));
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(FinancialChartIntro.AppCmp, [
    core_1.provide(http_1.Http, { useClass: http_1.Http }),
    http_1.HTTP_BINDINGS,
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map