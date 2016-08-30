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
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var wjInput = require('wijmo/wijmo.angular2.input');
var wjNg2FlexChart = require('wijmo/wijmo.angular2.chart');
var wjNg2FlexChartInteraction = require('wijmo/wijmo.angular2.chart.interaction');
var wjNg2FlexChartAnnotation = require('wijmo/wijmo.angular2.chart.annotation');
var wjNg2FlexChartAnalytics = require('wijmo/wijmo.angular2.chart.analytics');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The Explorer application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        var _this = this;
        this.increColor = '#129B14';
        this.decreColor = '#BA2418';
        this._chartRendered = false;
        this.periodChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.movingAveragePeriod = input.value;
        };
        this.cache = {};
        this.dataSvc = dataSvc;
        this._init();
    }
    AppCmp.prototype._init = function () {
        var _this = this;
        var cache = this.cache;
        this.hasData = false;
        this.markerVisible = false;
        this.volYAxis = new wijmo.chart.Axis(0);
        this.volSeriesIsVisible = true;
        this.showAnnotation = false;
        this.showLineMarker = false;
        this.chartType = 'Line';
        this.portfolio = this.dataSvc.getPortfolio(this.dataSvc);
        this.portfolio.itemsChanged.addHandler(this.itemsChanged.bind(this));
        this.movingAveragePeriod = 10;
        this.movingAverageType = 'Simple';
        this.searchCompany = function (query, max, callback) {
            // try getting the result from the cache
            var result = cache[query];
            if (result) {
                callback(result);
                return;
            }
            // not in cache, get from server
            _this.dataSvc.getStockInfo({ search: query, max: max }).subscribe(function (result) {
                // parse result
                var lines = result.split('\r'), matches = [];
                for (var i = 0; i < lines.length; i++) {
                    var items = lines[i].split('\t');
                    if (items.length == 2) {
                        var symbol = items[0].trim(), name = items[1].trim(), symbolName = '<b>' + symbol + '</b>: ' + name;
                        matches.push({ symbol: symbol, name: name, symbolName: symbolName });
                    }
                }
                // store result in cache
                cache[query] = matches;
                // and return the result
                callback(matches);
            }, function (error) {
                console.log('error: ' + error.responseText);
                cache[query] = null; // << no point in trying this query again
                callback(null);
            });
        };
        this._changeXContentFunc = this._changeXContent.bind(this);
        this._changeYContentFunc = this._changeYContent.bind(this);
    };
    AppCmp.prototype.itemsChanged = function () {
        if (this.rsChart && this.portfolio && this.rsChart.series.length === 0) {
            var paneOffset = wijmo.getElementRect(document.querySelector('.chartcontainer')), overlapEle = document.querySelector('.overlap');
            if (overlapEle) {
                overlapEle.style.top = paneOffset.top + 'px';
                overlapEle.style.left = paneOffset.left + 'px';
                overlapEle.style.width = paneOffset.width + 'px';
                overlapEle.style.height = paneOffset.height + 'px';
            }
        }
        if (this.portfolio.mainQuoteUpdated && this.portfolio.view.items.length > 1) {
            var item = this.portfolio.view.items[1], data = item.chartData, len = data.length, changeVal;
            this.mainquote = {};
            this.mainquote.name = item.name + '(' + item.symbol + ')';
            this.mainquote.color = item.color;
            if (!data[len - 1] || !data[len - 2]) {
                return;
            }
            changeVal = data[len - 1].close - data[len - 2].close;
            this.mainquote.price = data[len - 1].close;
            this.mainquote.changeColor = changeVal < 0 ? this.decreColor : this.increColor;
            this.mainquote.changePrice = (changeVal > 0 ? '+' : '') + changeVal.toFixed(2).toString();
            this.portfolio.mainQuoteUpdated = false;
        }
    };
    AppCmp.prototype.stChartRendered = function () {
        var _this = this;
        // customize tooltip
        if (this.stChart) {
            var chart = this.stChart, ele = this.stChart.hostElement, item;
            if (this.volSeries) {
                this.volSeries.axisY = this.volYAxis;
                if (this.volSeries.getValues(0)) {
                    this.volYAxis.max = Math.max.apply(null, this.volSeries.getValues(0)) * 8;
                }
            }
            this.hasData = false;
            if (this.portfolio.view.items && this.portfolio.view.items[1]) {
                item = this.portfolio.view.items[1];
                this.hasData = !!(item.chartData && item.chartData.length && item.chart);
            }
            this.pOffset = wijmo.getElementRect(ele.querySelector('.wj-plot-area'));
            if (!this._chartRendered) {
                this._chartRendered = true;
                chart.tooltip.content = '';
                ele.addEventListener('click', function (evt) {
                });
                ele.addEventListener('mousemove', function (e) {
                    _this.setQuotesDetailInfo(e);
                });
                // control line marker
                ele.addEventListener('mouseenter', function (e) {
                    _this.markerVisible = true;
                });
                ele.addEventListener('mouseleave', function (e) {
                    _this.markerVisible = false;
                });
                // for touch
                if ('ontouchstart' in window) {
                    ele.addEventListener('touchmove', function (e) {
                        _this.setQuotesDetailInfo(e);
                        e.preventDefault();
                    });
                    ele.addEventListener('touchstart', function (e) {
                        _this.markerVisible = true;
                        _this.setQuotesDetailInfo(e);
                    });
                }
            }
        }
    };
    //set main quote detail information
    AppCmp.prototype.setQuotesDetailInfo = function (e) {
        var _this = this;
        var series = this.stChart.series, hitTest, itmSource, detail = '', displaySeriesNum = this.portfolio.displayChartSeriesNum, point, pointIndex, ptMarker, annoItem;
        if (!series || series.length === 0) {
            return;
        }
        if (e) {
            point = e instanceof MouseEvent ?
                new wijmo.Point(e.pageX, e.pageY) :
                new wijmo.Point(e.changedTouches[0].pageX, e.changedTouches[0].pageY);
        }
        series.forEach(function (ser) {
            if (e) {
                // each series has different data range
                hitTest = ser.hitTest(new wijmo.Point(point.x, NaN));
                if (hitTest == null || hitTest.x == null || hitTest.y == null) {
                    return;
                }
                pointIndex = hitTest.pointIndex;
            }
            else {
                pointIndex = ser.itemsSource.length - 1;
            }
            var itm = ser.itemsSource[pointIndex], dateStr;
            if (!itm || ser instanceof wijmo.chart.analytics.MovingAverage ||
                ser.binding === 'volume') {
                return;
            }
            annoItem = _this.al.getItem(ser.name);
            if (annoItem) {
                if (annoItem.pointIndex !== pointIndex) {
                    annoItem.pointIndex = pointIndex;
                }
            }
            dateStr = wijmo.Globalize.format(itm.date, 'MMM dd, yyyy');
            if (displaySeriesNum === 1) {
                if (ser.binding === 'high,low,open,close' && e) {
                    detail = dateStr +
                        ' Open: ' + itm.open +
                        ' High: ' + itm.high +
                        ' Low: ' + itm.low +
                        ' Close: ' + itm.close +
                        ' Volume: ' + itm.volume;
                }
                else {
                    detail = dateStr +
                        ' Price: ' + itm.close +
                        ' Volume: ' + itm.volume;
                }
            }
            else {
                detail += _this._getCurPointQuoteInfo(ser.name, itm.closeChg, ser.style.stroke);
            }
        });
        this.details = detail;
    };
    AppCmp.prototype._getCurPointQuoteInfo = function (syml, info, symlColor) {
        var color = this.increColor, pSymbol = '';
        if (info < 0) {
            color = this.decreColor;
        }
        else {
            pSymbol = "+";
        }
        return '<span style="color: ' + symlColor + ';">' + syml + '</span><span style="color:' + color + ';">' +
            pSymbol + (info * 100).toFixed(2) + '%'
            + '</span> ';
    };
    AppCmp.prototype.rsChartRendered = function () {
        // customize tooltip
        if (this.rsChart) {
            this.rsChart.tooltip.content = '';
            this._resetRangeSelector();
        }
    };
    AppCmp.prototype.chartPeriodChange = function (period) {
        this.portfolio.chartPeriod = period;
        this._resetRangeSelector();
    };
    AppCmp.prototype._resetRangeSelector = function () {
        this.chartPeriodClicked = true;
        this.rangeSelector.max = null;
        this.rangeSelector.min = this.portfolio.getChartStartDate().valueOf();
        this.chartPeriodClicked = false;
    };
    AppCmp.prototype.rangeChanged = function (event) {
        var dateRangeSelector = this.rangeSelector, activeBtn = document.querySelector('.btn-group-xs .btn.active');
        if (!this.chartPeriodClicked && activeBtn) {
            wijmo.removeClass(activeBtn, 'active');
            activeBtn.blur();
        }
        this._updateStChartRange(dateRangeSelector.min, dateRangeSelector.max);
        //update the date range
        this.dateRange = wijmo.Globalize.format(new Date(dateRangeSelector.min), 'MMM dd, yyyy') +
            ' - ' + wijmo.Globalize.format(new Date(dateRangeSelector.max), 'MMM dd, yyyy');
    };
    //update stock chart range
    AppCmp.prototype._updateStChartRange = function (min, max) {
        this.portfolio.startDate = new Date(min);
        this.portfolio.endDate = new Date(max);
    };
    AppCmp.prototype.changeYContent = function () {
        return this._changeYContentFunc;
    };
    ;
    AppCmp.prototype._changeYContent = function (hitTest, pt) {
        var contents = this._getMarkerContents(new wijmo.Point(pt.x, pt.y));
        return contents && contents.y ? contents.y.toString() : '';
    };
    AppCmp.prototype.changeXContent = function () {
        return this._changeXContentFunc;
    };
    ;
    AppCmp.prototype._changeXContent = function (hitTest, pt) {
        var contents = this._getMarkerContents(new wijmo.Point(pt.x, pt.y));
        return contents && contents.x ? contents.x.toString() : '';
    };
    //get line marker content
    AppCmp.prototype._getMarkerContents = function (pt) {
        var chart = this.stChart, ht, xContent, yContent, newHitPoint = new wijmo.Point(pt.x, NaN), content = '';
        if (!chart) {
            return;
        }
        if (chart.series.length < 1) {
            return;
        }
        //calculate the y value
        yContent = this._getAxixYValue(pt.y);
        ht = chart.series[0].hitTest(newHitPoint);
        if (ht.x && ht.y !== null) {
            xContent = wijmo.Globalize.formatDate(ht.x, 'MM-dd-yyyy');
        }
        return { x: xContent, y: yContent };
    };
    AppCmp.prototype._getAxixYValue = function (y) {
        var chart = this.stChart, yVal, axisYRange, axisYMax, axisYMin;
        if (this.pOffset === undefined) {
            return 0;
        }
        axisYMax = chart.axisY.actualMax;
        axisYMin = chart.axisY.actualMin;
        axisYRange = axisYMax - axisYMin;
        if ((this.showMovingAverage && chart.series.length === 3) ||
            (!this.showMovingAverage && chart.series.length === 2)) {
            yVal = (axisYMax - ((y - this.pOffset.top) / this.pOffset.height) * axisYRange)
                .toFixed(2);
        }
        else {
            yVal = ((axisYMax - ((y - this.pOffset.top) / this.pOffset.height) * axisYRange) * 100)
                .toFixed(2) + '%';
        }
        return yVal;
    };
    AppCmp.prototype.getPointIndex = function (xVal) {
        var data = this.portfolio.view.items[1] && this.portfolio.view.items[1].chartData, i, len;
        if (data) {
            for (i = 0, len = data.length; i < len; i++) {
                if (xVal.getTime() === data[i].date.getTime()) {
                    return i;
                }
            }
        }
    };
    AppCmp.prototype.exportImage = function (exportMenu) {
        this.stChart.saveImageToFile('chart.' + exportMenu.selectedValue || 'png');
    };
    __decorate([
        core_1.ViewChild('rsChart')
    ], AppCmp.prototype, "rsChart", void 0);
    __decorate([
        core_1.ViewChild('stChart')
    ], AppCmp.prototype, "stChart", void 0);
    __decorate([
        core_1.ViewChild('rangeSelector')
    ], AppCmp.prototype, "rangeSelector", void 0);
    __decorate([
        core_1.ViewChild('volSeries')
    ], AppCmp.prototype, "volSeries", void 0);
    __decorate([
        core_1.ViewChild('al')
    ], AppCmp.prototype, "al", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, wjInput.WjAutoComplete, wjInput.WjMenu, wjInput.WjMenuItem, wjInput.WjInputNumber,
                wjNg2FlexChart.WjFlexChart, wjNg2FlexChart.WjFlexChartSeries, wjNg2FlexChart.WjFlexChartAxis, wjNg2FlexChart.WjFlexChartLineMarker,
                wjNg2FlexChart.WjFlexChartLegend, wjNg2FlexChartAnalytics.WjFlexChartMovingAverage, wjNg2FlexChartInteraction.WjFlexChartRangeSelector,
                wjNg2FlexChartAnnotation.WjFlexChartAnnotationLayer, wjNg2FlexChartAnnotation.WjFlexChartAnnotationText, wjNg2FlexChartAnnotation.WjFlexChartAnnotationCircle,
                wjNg2FlexChartAnnotation.WjFlexChartAnnotationSquare]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(AppCmp, [
    core_1.provide(http_1.Http, { useClass: http_1.Http }),
    http_1.HTTP_BINDINGS,
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map