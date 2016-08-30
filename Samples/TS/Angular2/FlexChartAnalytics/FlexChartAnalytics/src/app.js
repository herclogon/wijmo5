///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_2 = require('@angular/common');
// Services
var MenuSvc_1 = require('./services/MenuSvc');
var DataSvc_1 = require('./services/DataSvc');
// Wijmo Input components 
var wjNg2Input = require('wijmo/wijmo.angular2.input');
// Sample components
var TrendLineCmp_1 = require('./components/TrendLineCmp');
var MovingAverageCmp_1 = require('./components/MovingAverageCmp');
var YFunctionSeriesCmp_1 = require('./components/YFunctionSeriesCmp');
var ParametricFunctionSeriesCmp_1 = require('./components/ParametricFunctionSeriesCmp');
var WaterfallCmp_1 = require('./components/WaterfallCmp');
var FlexChartAnalytics;
(function (FlexChartAnalytics) {
    'use strict';
    // The FlexChartAnalytics application root component.
    var AppCmp = (function () {
        function AppCmp(menuSvc) {
            this.menuData = menuSvc.getMenu();
        }
        __decorate([
            core_1.Input()
        ], AppCmp.prototype, "menuData", void 0);
        AppCmp = __decorate([
            core_1.Component({
                selector: 'app-cmp',
                templateUrl: 'src/app.html',
                directives: [common_1.CORE_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
                    wjNg2Input.WjMenuSeparator]
            }),
            router_deprecated_1.RouteConfig([
                { path: '/', redirectTo: ['TrendLine'] },
                { path: '/trendLine', component: TrendLineCmp_1.TrendLineCmp, name: 'TrendLine' },
                { path: '/movingAverage', component: MovingAverageCmp_1.MovingAverageCmp, name: 'MovingAverage' },
                { path: '/yFunctionSeries', component: YFunctionSeriesCmp_1.YFunctionSeriesCmp, name: 'YFunctionSeries' },
                { path: '/parametricFunctionSeries', component: ParametricFunctionSeriesCmp_1.ParametricFunctionSeriesCmp, name: 'ParametricFunctionSeries' },
                { path: '/waterfall', component: WaterfallCmp_1.WaterfallCmp, name: 'Waterfall' }
            ]),
            __param(0, core_1.Inject(MenuSvc_1.MenuSvc))
        ], AppCmp);
        return AppCmp;
    }());
    FlexChartAnalytics.AppCmp = AppCmp;
})(FlexChartAnalytics = exports.FlexChartAnalytics || (exports.FlexChartAnalytics = {}));
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(FlexChartAnalytics.AppCmp, [
    router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy }),
    MenuSvc_1.MenuSvc,
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map