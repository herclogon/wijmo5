'use strict';
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
var common_1 = require('@angular/common');
var AppTab_1 = require('./AppTab');
var wjNg2FlexChart = require('wijmo/wijmo.angular2.chart');
var wjNg2FinancialChart = require('wijmo/wijmo.angular2.chart.finance');
var DataSvc_1 = require('./../services/DataSvc');
//Marker sample component
var MarkerCmp = (function () {
    function MarkerCmp(dataSvc) {
        var _this = this;
        this.data = [];
        this.pt = new wijmo.Point();
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
        this.changeContent = function () {
            _this.markcontents = _this._getMarkerContents(new wijmo.Point(_this.pt.x, _this.pt.y));
            return _this.markcontents ? _this.markcontents.content : '';
        };
        this.changeXContent = function () {
            return _this.markcontents && _this.markcontents.x ? _this.markcontents.x.toString() : '';
        };
        this.changeYContent = function () {
            return _this.markcontents && _this.markcontents.y ? _this.markcontents.y.toString() : '';
        };
    }
    MarkerCmp.prototype.midPosChanged = function (event) {
        this.pt = event;
    };
    MarkerCmp.prototype.chartRendered = function () {
        var _this = this;
        var chart = this.chart;
        if (!chart) {
            return;
        }
        chart.tooltip.content = '';
        chart.axisY.position = 3;
        chart.rendered.addHandler(function () {
            var chartHostEle = chart.hostElement, pa = chartHostEle.querySelector('.wj-plot-area');
            _this.pOffset = wijmo.getElementRect(pa);
        });
        var lineMarkers = chart.hostElement.querySelectorAll('.wj-chart-linemarker-container');
        this._markershowing(lineMarkers, 'hidden');
        chart.hostElement.onmouseenter = function (e) {
            _this._markershowing(lineMarkers, 'visible');
        };
        if ('ontouchstart' in window) {
            chart.hostElement.ontouchstart = function (e) {
                _this._markershowing(lineMarkers, 'visible');
            };
        }
        chart.hostElement.onmouseleave = function (e) {
            _this._markershowing(lineMarkers, 'hidden');
        };
    };
    MarkerCmp.prototype._markershowing = function (lineMarkers, visible) {
        for (var i = 0; i < lineMarkers.length; i++) {
            lineMarkers[i].style.visibility = visible;
        }
    };
    //get line marker content
    MarkerCmp.prototype._getMarkerContents = function (pt) {
        var chart = this.chart, newHitPoint = new wijmo.Point(pt.x, NaN), ht, xContent, yContent, axisYMax, axisYMin, content = '';
        if (!chart || chart.series.length < 1) {
            return;
        }
        axisYMax = chart.axisY.actualMax;
        axisYMin = chart.axisY.actualMin;
        //calculate the y value
        if (this.pOffset == null) {
            yContent = 0;
        }
        else {
            yContent = axisYMax - ((pt.y - this.pOffset.top) / this.pOffset.height) * (axisYMax - axisYMin);
            yContent = yContent.toFixed(2);
        }
        ht = chart.series[0].hitTest(newHitPoint);
        if (ht.x && ht.y !== null) {
            xContent = ht.x;
        }
        return { content: '', x: xContent, y: yContent };
    };
    MarkerCmp.prototype.setDataSource = function () {
        var _this = this;
        this.dataSvc.getData().subscribe(function (data) {
            _this.data = data;
        });
    };
    __decorate([
        core_1.ViewChild('chart')
    ], MarkerCmp.prototype, "chart", void 0);
    MarkerCmp = __decorate([
        core_1.Component({
            selector: 'marker-cmp',
            templateUrl: 'src/components/MarkerCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2FlexChart.WjFlexChartLineMarker,
                AppTab_1.AppTab, AppTab_1.AppTabPane, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], MarkerCmp);
    return MarkerCmp;
}());
exports.MarkerCmp = MarkerCmp;
//# sourceMappingURL=MarkerCmp.js.map