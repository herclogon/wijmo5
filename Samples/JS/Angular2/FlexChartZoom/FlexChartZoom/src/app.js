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
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2FlexChart = require('wijmo/wijmo.angular2.chart');
var wjNg2Interaction = require('wijmo/wijmo.angular2.chart.interaction');
// Services
var DataSvc_1 = require('./services/DataSvc');
var FlexChartZoom;
(function (FlexChartZoom) {
    'use strict';
    // The FlexChartZoom application root component.
    var AppCmp = (function () {
        function AppCmp(dataSvc) {
            var _this = this;
            dataSvc.getData().subscribe(function (data) {
                _this.data = data;
                setTimeout(function () {
                    _this.chartGestures.posX = 0.1;
                    _this.chartGestures.posY = 0.1;
                    _this.chartGestures.scaleX = 0.5;
                    _this.chartGestures.scaleY = 0.5;
                }, 100);
            });
            this.mouseAction = 'Zoom';
            this.interactiveAxes = 'X';
            this.isTouch = navigator.userAgent.match(/iPad/i) != null || /Android/i.test(navigator.userAgent);
            this.disabled = true;
        }
        AppCmp.prototype.resetAxes = function () {
            var _this = this;
            if (this.chartGestures) {
                this.chartGestures.reset();
            }
            window.setTimeout(function () {
                _this.disabled = true;
            }, 20);
        };
        AppCmp.prototype.rangeChanged = function () {
            this.disabled = false;
        };
        __decorate([
            core_1.ViewChild('zoomChart')
        ], AppCmp.prototype, "zoomChart", void 0);
        __decorate([
            core_1.ViewChild('chartGestures')
        ], AppCmp.prototype, "chartGestures", void 0);
        AppCmp = __decorate([
            core_1.Component({
                selector: 'app-cmp',
                templateUrl: 'src/app.html',
                directives: [wjNg2FlexChart.WjFlexChart, wjNg2FlexChart.WjFlexChartSeries, wjNg2Interaction.WjFlexChartGestures,
                    wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2FlexChart.WjFlexChartAxis, wjNg2FlexChart.WjFlexChartLegend,
                    common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
            }),
            __param(0, core_1.Inject(DataSvc_1.DataSvc))
        ], AppCmp);
        return AppCmp;
    }());
    FlexChartZoom.AppCmp = AppCmp;
})(FlexChartZoom = exports.FlexChartZoom || (exports.FlexChartZoom = {}));
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(FlexChartZoom.AppCmp, [
    core_1.provide(http_1.Http, { useClass: http_1.Http }),
    http_1.HTTP_BINDINGS,
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map