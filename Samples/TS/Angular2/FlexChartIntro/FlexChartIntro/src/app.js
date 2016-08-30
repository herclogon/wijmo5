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
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var AppTab_1 = require('./components/AppTab');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The Explorer application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        var _this = this;
        // generate some random data
        this.countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
        //chart properties
        this.chartType = 'Column';
        this.stacking = 'None';
        this.legendPosition = 'Right';
        this.rotated = false;
        this.header = 'Sample Chart';
        this.footer = 'copyright (c) ComponentOne';
        this.titleX = 'country';
        this.titleY = 'amount';
        this.tooltipContent = '<img src="resources/{x}.png" /> <b>{seriesName} </b><br/ > {y}';
        this.selectionMode = 'Series';
        this.series1Visible = wijmo.chart.SeriesVisibility.Visible;
        this.series2Visible = wijmo.chart.SeriesVisibility.Visible;
        this.series3Visible = wijmo.chart.SeriesVisibility.Visible;
        //help
        this._toAddData = null;
        this._interval = null;
        this.setInterval = function (interval) {
            if (_this._toAddData) {
                clearTimeout(_this._toAddData);
                _this._toAddData = null;
            }
            _this._interval = interval;
            if (interval) {
                _this._toAddData = setTimeout(_this._addTrafficItem);
            }
        };
        this.seriesVisible = function (idx, checked) {
            if (idx === 0) {
                _this.series1Visible = checked ?
                    wijmo.chart.SeriesVisibility.Visible : wijmo.chart.SeriesVisibility.Hidden;
            }
            else if (idx === 1) {
                _this.series2Visible = checked ?
                    wijmo.chart.SeriesVisibility.Visible : wijmo.chart.SeriesVisibility.Hidden;
            }
            else if (idx === 2) {
                _this.series3Visible = checked ?
                    wijmo.chart.SeriesVisibility.Visible : wijmo.chart.SeriesVisibility.Hidden;
            }
        };
        this._addTrafficItem = function () {
            var len = _this.trafficData.length, last = len ? _this.trafficData[len - 1] : null, trucks = last ? last.trucks : 0, ships = last ? last.ships : 0, planes = last ? last.planes : 0;
            trucks = Math.max(0, trucks + Math.round(Math.random() * 50 - 25));
            ships = Math.max(0, ships + Math.round(Math.random() * 10 - 5));
            planes = Math.max(0, planes + Math.round(Math.random() * 10 - 5));
            // add random data, limit array length
            _this.trafficData.push({ time: new Date(), trucks: trucks, ships: ships, planes: planes });
            if (_this.trafficData.length > 200) {
                _this.trafficData.splice(0, 1);
            }
            // keep adding
            if (_this._interval) {
                _this._toAddData = setTimeout(_this._addTrafficItem, _this._interval);
            }
        };
        this.dataSvc = dataSvc;
        this.data = this.dataSvc.getData(this.countries);
        this.trafficData = new wijmo.collections.ObservableArray();
        this.setInterval(500);
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, AppTab_1.AppTab, AppTab_1.AppTabPane,
                wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartAxis, wjNg2Chart.WjFlexChartLegend,
                wjNg2Chart.WjFlexChartDataLabel, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartLineMarker,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(AppCmp, [
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map