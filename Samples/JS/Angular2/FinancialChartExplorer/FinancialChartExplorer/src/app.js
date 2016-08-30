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
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_2 = require('@angular/common');
// Services
var MenuSvc_1 = require('./services/MenuSvc');
var DataSvc_1 = require('./services/DataSvc');
var TooltipSvc_1 = require('./services/TooltipSvc');
// Wijmo Input components 
var wjNg2Input = require('wijmo/wijmo.angular2.input');
// Sample components
// Chart Types
var HeikinAshiCmp_1 = require('./components/charttype/HeikinAshiCmp');
var LineBreakCmp_1 = require('./components/charttype/LineBreakCmp');
var RenkoCmp_1 = require('./components/charttype/RenkoCmp');
var KagiCmp_1 = require('./components/charttype/KagiCmp');
var ColumnVolumeCmp_1 = require('./components/charttype/ColumnVolumeCmp');
var EquiVolumeCmp_1 = require('./components/charttype/EquiVolumeCmp');
var CandleVolumeCmp_1 = require('./components/charttype/CandleVolumeCmp');
var ArmsCandleVolumeCmp_1 = require('./components/charttype/ArmsCandleVolumeCmp');
// Interaction 
var MarkersCmp_1 = require('./components/interaction/MarkersCmp');
var RangeSelectorCmp_1 = require('./components/interaction/RangeSelectorCmp');
// Analytics
var TrendLinesCmp_1 = require('./components/analytics/TrendLinesCmp');
var MovingAveragesCmp_1 = require('./components/analytics/MovingAveragesCmp');
var OverlaysCmp_1 = require('./components/analytics/OverlaysCmp');
var IndicatorsCmp_1 = require('./components/analytics/IndicatorsCmp');
var EventAnnotationsCmp_1 = require('./components/analytics/EventAnnotationsCmp');
var FibonacciToolCmp_1 = require('./components/analytics/FibonacciToolCmp');
var FinancialChartExplorer;
(function (FinancialChartExplorer) {
    'use strict';
    // The FinancialChartExplorer application root component.
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
                    wjNg2Input.WjMenuSeparator],
            }),
            router_deprecated_1.RouteConfig([
                { path: '/', redirectTo: ['HeikinAshi'] },
                // Chart Types
                { path: '/charttype/heikinAshi', component: HeikinAshiCmp_1.HeikinAshiCmp, name: 'HeikinAshi' },
                { path: '/charttype/lineBreak', component: LineBreakCmp_1.LineBreakCmp, name: 'LineBreak' },
                { path: '/charttype/renko', component: RenkoCmp_1.RenkoCmp, name: 'Renko' },
                { path: '/charttype/kagi', component: KagiCmp_1.KagiCmp, name: 'Kagi' },
                { path: '/charttype/columnVolume', component: ColumnVolumeCmp_1.ColumnVolumeCmp, name: 'ColumnVolume' },
                { path: '/charttype/equiVolume', component: EquiVolumeCmp_1.EquiVolumeCmp, name: 'EquiVolume' },
                { path: '/charttype/candleVolume', component: CandleVolumeCmp_1.CandleVolumeCmp, name: 'CandleVolume' },
                { path: '/charttype/armsCandleVolume', component: ArmsCandleVolumeCmp_1.ArmsCandleVolumeCmp, name: 'ArmsCandleVolume' },
                // Interaction 
                { path: '/interaction/markers', component: MarkersCmp_1.MarkersCmp, name: 'Markers' },
                { path: '/interaction/rangeSelector', component: RangeSelectorCmp_1.RangeSelectorCmp, name: 'RangeSelector' },
                //// Analytics
                { path: '/analytics/trendLines', component: TrendLinesCmp_1.TrendLinesCmp, name: 'TrendLines' },
                { path: '/analytics/movingAverages', component: MovingAveragesCmp_1.MovingAveragesCmp, name: 'MovingAverages' },
                { path: '/analytics/overlays', component: OverlaysCmp_1.OverlaysCmp, name: 'Overlays' },
                { path: '/analytics/indicators', component: IndicatorsCmp_1.IndicatorsCmp, name: 'Indicators' },
                { path: '/analytics/eventAnnotations', component: EventAnnotationsCmp_1.EventAnnotationsCmp, name: 'EventAnnotations' },
                { path: '/analytics/fibonacciTool', component: FibonacciToolCmp_1.FibonacciToolCmp, name: 'FibonacciTool' }
            ]),
            __param(0, core_1.Inject(MenuSvc_1.MenuSvc))
        ], AppCmp);
        return AppCmp;
    }());
    FinancialChartExplorer.AppCmp = AppCmp;
})(FinancialChartExplorer = exports.FinancialChartExplorer || (exports.FinancialChartExplorer = {}));
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(FinancialChartExplorer.AppCmp, [
    router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy }),
    core_1.provide(http_1.Http, { useClass: http_1.Http }),
    http_1.HTTP_BINDINGS,
    MenuSvc_1.MenuSvc,
    DataSvc_1.DataSvc,
    TooltipSvc_1.TooltipSvc
]);
//# sourceMappingURL=app.js.map