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
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_chart_annotation_1 = require('wijmo/wijmo.angular2.chart.annotation');
// Services
var DataSvc_1 = require('./services/DataSvc');
var FlexChartAnnotation;
(function (FlexChartAnnotation) {
    'use strict';
    // The FlexChartAnnotation application root component.
    var AppCmp = (function () {
        function AppCmp(dataSvc) {
            var _this = this;
            this.basicData = dataSvc.getBasicData();
            dataSvc.getData().subscribe(function (data) {
                _this.data = data;
                _this._initAxisScrollbar();
            });
            this.basic = {
                rectDate: new Date(2014, 1, 10),
                imageDate: new Date(2014, 0, 25)
            };
            this.advanced = {
                trendLine1: {
                    start: {
                        x: new Date(2014, 4, 8),
                        y: 64
                    },
                    end: {
                        x: new Date(2014, 8, 8),
                        y: 84
                    }
                },
                trendLine2: {
                    start: {
                        x: new Date(2014, 4, 8),
                        y: 56
                    },
                    end: {
                        x: new Date(2014, 8, 8),
                        y: 76
                    }
                },
                eventStyle: {
                    fill: '#01DFD7',
                    stroke: '#000000',
                    'fill-opacity': 1,
                    'stroke-width': 1,
                    'stroke-opacity': 1
                },
                detailStyle: {
                    fill: '#6E6E6E',
                    'font-size': '12px'
                },
                startLine: {
                    start: {
                        x: new Date(2014, 3, 10),
                        y: 59.16
                    },
                    end: {
                        x: new Date(2016, 3, 10),
                        y: 59.16
                    }
                },
                tradeRange: {
                    point: {
                        x: new Date(2014, 10, 26),
                        y: 70
                    },
                    style: {
                        fill: "#669999",
                        stroke: "#B40431",
                        "fill-opacity": 0.2,
                        "stroke-width": 0.5,
                        "stroke-opacity": 0.2
                    }
                },
                newsa: {
                    x: new Date(2015, 2, 2),
                    y: 80
                },
                newsb: {
                    x: new Date(2014, 6, 8),
                    y: 62
                },
                trendDesc: {
                    x: new Date(2014, 4, 8),
                    y: 64
                },
                buyAnno: {
                    x: new Date(2014, 9, 14),
                    y: 73
                },
                sellAnno: {
                    x: new Date(2015, 0, 8),
                    y: 73
                }
            };
        }
        AppCmp.prototype.ngAfterViewInit = function () {
            var _this = this;
            this.advancedChart.rendered.addHandler(function () {
                //adjust last point
                window.setTimeout(function () {
                    _this._updateLastPoint();
                }, 40);
                if (!_this.volYAxis && _this.advancedChart.series.length > 1) {
                    var volSeries = _this.advancedChart.series[1];
                    _this.volYAxis = new wijmo.chart.Axis(0);
                    volSeries.axisY = _this.volYAxis;
                    if (volSeries.getValues(0)) {
                        _this.volYAxis.max = Math.max.apply(null, volSeries.getValues(0)) * 8;
                    }
                }
            });
        };
        AppCmp.prototype._initAxisScrollbar = function () {
            var _this = this;
            var chart = this.advancedChart, ele;
            var self = this;
            if (!chart) {
                return;
            }
            chart.axes[0].axisLine = false;
            chart.axes[0].format = 'MM/dd/yy';
            chart.axes[1].position = wijmo.chart.Position.Right;
            // add scrollbar
            if (!this.axisXScrollbar) {
                this.axisXScrollbar = new wijmo.chart.interaction.AxisScrollbar(chart.axes[0]);
                window.setTimeout(function () {
                    _this.axisXScrollbar.maxPos = 0.5;
                }, 20);
            }
            ele = chart.hostElement;
            ele.ontouchmove = function (e) {
                _this._setQuoteDetailInfo(e);
            };
            ele.onmousemove = function (e) {
                _this._setQuoteDetailInfo(e);
            };
            ele.onmouseleave = function (e) {
                _this._clearDetail();
            };
        };
        //set main quote detail information
        AppCmp.prototype._setQuoteDetailInfo = function (e) {
            if (this.al == null)
                return;
            var series = this.advancedChart.series[0], hitTest, itmSource, detailContainer, detailLow, detailHigh, detailOpen, detailClose, al = this.al, point = e instanceof MouseEvent ?
                new wijmo.Point(e.pageX, e.pageY) :
                new wijmo.Point(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
            if (!series) {
                return;
            }
            hitTest = series.hitTest(new wijmo.Point(point.x, NaN));
            if (hitTest == null || hitTest.x == null || hitTest.y == null) {
                return;
            }
            itmSource = this.data[hitTest.pointIndex];
            al.getItem('detailContainer').isVisible = true;
            this._setAnnotationText(al, 'detailLow', 'Low: ' + itmSource.low);
            this._setAnnotationText(al, 'detailHigh', 'High: ' + itmSource.high);
            this._setAnnotationText(al, 'detailOpen', 'Open: ' + itmSource.open);
            this._setAnnotationText(al, 'detailClose', 'Close: ' + itmSource.close);
            this._setAnnotationText(al, 'detailVolume', 'Volume: ' + itmSource.volume);
        };
        AppCmp.prototype._clearDetail = function () {
            var al = this.al;
            if (al == null)
                return;
            al.getItem('detailContainer').isVisible = false;
            this._setAnnotationText(al, 'detailLow', '');
            this._setAnnotationText(al, 'detailHigh', '');
            this._setAnnotationText(al, 'detailOpen', '');
            this._setAnnotationText(al, 'detailClose', '');
            this._setAnnotationText(al, 'detailVolume', '');
        };
        AppCmp.prototype._setAnnotationText = function (al, name, text) {
            al.getItem(name).text = text;
        };
        AppCmp.prototype._updateLastPoint = function () {
            var content, maxItm, maxLineItm, data = this.data, len = data.length, al = this.al, maxDate;
            maxDate = this._fromOADate(Math.ceil(this.advancedChart.axisX.max));
            if (al && al.items) {
                maxItm = al.getItem('endPrice');
                maxLineItm = al.getItem('endPriceLine');
                if (!maxItm || !maxLineItm) {
                    return;
                }
                for (var i = 0; i < len; i++) {
                    if (i === len - 1 || data[i].date.getTime() === maxDate.getTime()) {
                        content = data[i].close;
                        break;
                    }
                    else if (i < len - 1 && maxDate.getTime() > data[i].date.getTime() &&
                        maxDate.getTime() < data[i + 1].date.getTime()) {
                        content = data[i + 1].close;
                        break;
                    }
                }
                if (!content) {
                    maxItm.isVisible = false;
                    maxLineItm.isVisible = false;
                }
                else {
                    maxItm.isVisible = true;
                    maxItm.content = content;
                    maxItm.point = { x: maxDate, y: content };
                    maxLineItm.isVisible = true;
                    maxLineItm.start = { x: new Date(2014, 3, 10, 0, 0, 0), y: content };
                    maxLineItm.end = { x: maxDate, y: content };
                }
            }
        };
        AppCmp.prototype._fromOADate = function (val) {
            var dec = val - Math.floor(val);
            if (val < 0 && dec) {
                val = Math.floor(val) - dec;
            }
            return new Date(val * 86400000 + new Date(1899, 11, 30).getTime());
        };
        __decorate([
            core_1.ViewChild('advancedChart')
        ], AppCmp.prototype, "advancedChart", void 0);
        __decorate([
            core_1.ViewChild('al')
        ], AppCmp.prototype, "al", void 0);
        AppCmp = __decorate([
            core_1.Component({
                selector: 'app-cmp',
                templateUrl: 'src/app.html'
            }),
            __param(0, core_1.Inject(DataSvc_1.DataSvc))
        ], AppCmp);
        return AppCmp;
    }());
    FlexChartAnnotation.AppCmp = AppCmp;
})(FlexChartAnnotation = exports.FlexChartAnnotation || (exports.FlexChartAnnotation = {}));
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_chart_annotation_1.WjChartAnnotationModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
            declarations: [FlexChartAnnotation.AppCmp],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [FlexChartAnnotation.AppCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map