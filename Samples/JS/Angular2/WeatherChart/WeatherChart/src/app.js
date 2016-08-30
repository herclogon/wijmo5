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
var wjNg2FlexChart = require('wijmo/wijmo.angular2.chart');
var wjNg2Interaction = require('wijmo/wijmo.angular2.chart.interaction');
// Services
var DataSvc_1 = require('./services/DataSvc');
var WeatherChart;
(function (WeatherChart) {
    'use strict';
    // The WeatherChart application root component.
    var AppCmp = (function () {
        function AppCmp(dataSvc) {
            var _this = this;
            this.isViewInitialized = false;
            this.props = ['MeanPressure', 'Precipitation'];
            this.pt = new wijmo.Point();
            dataSvc.getData().subscribe(function (data) {
                _this.data = data;
            });
            this.palette = ['#88bde6', 'blue', 'red'];
            this.markerContent = function () {
                return _this.getMarkercontent(new wijmo.Point(_this.pt.x, NaN));
            };
        }
        AppCmp.prototype.ngAfterViewInit = function () {
            this.isViewInitialized = true;
            [this.chart1, this.chart2, this.chart3].forEach(function (chart) {
                if (chart) {
                    chart.rendered.addHandler(function () {
                        var ele = chart.hostElement.querySelector('.wj-chart-linemarker');
                        if (ele) {
                            ele.style.display = 'none';
                        }
                    });
                }
            });
        };
        AppCmp.prototype.rangeChanged = function () {
            this.update(this.selector.min, this.selector.max);
        };
        AppCmp.prototype.update = function (min, max) {
            [this.chart1, this.chart2, this.chart3].forEach(function (chart) {
                chart.axisX.min = min;
                chart.axisX.max = max;
                chart.invalidate();
            });
        };
        AppCmp.prototype.markerPositionChanged = function (chart, marker, point) {
            this.pt = point;
            this.changeMarker(chart, marker);
        };
        AppCmp.prototype.changeMarker = function (curChart, marker) {
            if (!this.isViewInitialized) {
                return;
            }
            var curHost = curChart.hostElement, vline = curHost.querySelector('.wj-chart-linemarker-vline');
            [this.chart1, this.chart2, this.chart3].forEach(function (chart) {
                if (chart) {
                    var ele = chart.hostElement.querySelector('.wj-chart-linemarker');
                    if (chart === curChart) {
                        ele.style.display = 'block';
                    }
                    else {
                        ele.style.display = 'none';
                    }
                }
            });
            vline.style.height = 326 + 'px';
        };
        AppCmp.prototype.getMarkercontent = function (pt) {
            if (!this.chart1 || !this.chart1.itemsSource) {
                return;
            }
            var chart = this.chart1, ht = chart.series[0].hitTest(pt), item = chart.itemsSource[ht.pointIndex], content = '', len = this.props.length;
            for (var i = 0; i < chart.series.length; i++) {
                var series = chart.series[i];
                // find series lines to get its color
                var polyline = series.hostElement.querySelector('polyline');
                // add series info to the marker content
                if (ht.x && ht.y !== null) {
                    if (i == 0) {
                        content += wijmo.Globalize.formatDate(ht.x, 'dd-MMM');
                    }
                    content += '<div style="color:' + polyline.getAttribute('stroke') + '">' + series.name + ' = ' + item[series.name].toFixed() + '</div>';
                }
            }
            for (var i = 0; i < len; i++) {
                content += '<div>' + this.props[i] + ' = ' + item[this.props[i]].toFixed() + '</div>';
            }
            return content;
        };
        __decorate([
            core_1.ViewChild('chart1')
        ], AppCmp.prototype, "chart1", void 0);
        __decorate([
            core_1.ViewChild('chart2')
        ], AppCmp.prototype, "chart2", void 0);
        __decorate([
            core_1.ViewChild('chart3')
        ], AppCmp.prototype, "chart3", void 0);
        __decorate([
            core_1.ViewChild('selector')
        ], AppCmp.prototype, "selector", void 0);
        AppCmp = __decorate([
            core_1.Component({
                selector: 'app-cmp',
                templateUrl: 'src/app.html',
                directives: [wjNg2FlexChart.WjFlexChart, wjNg2FlexChart.WjFlexChartSeries, wjNg2Interaction.WjFlexChartRangeSelector,
                    wjNg2FlexChart.WjFlexChartAxis, wjNg2FlexChart.WjFlexChartLegend, wjNg2FlexChart.WjFlexChartLineMarker, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
            }),
            __param(0, core_1.Inject(DataSvc_1.DataSvc))
        ], AppCmp);
        return AppCmp;
    }());
    WeatherChart.AppCmp = AppCmp;
})(WeatherChart = exports.WeatherChart || (exports.WeatherChart = {}));
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(WeatherChart.AppCmp, [
    core_1.provide(http_1.Http, { useClass: http_1.Http }),
    http_1.HTTP_BINDINGS,
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map