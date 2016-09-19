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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
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
        this.neckWidthChanged = function (sender) {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            if (!_this.funnelChart.options) {
                return;
            }
            _this.funnelChart.options.funnel.neckWidth = sender.value;
            _this.funnelChart.refresh(true);
        };
        this.neckHeightChanged = function (sender) {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            if (!_this.funnelChart.options) {
                return;
            }
            _this.funnelChart.options.funnel.neckHeight = sender.value;
            _this.funnelChart.refresh(true);
        };
        this.funnelTypeChanged = function (sender) {
            if (!_this.funnelChart.options) {
                return;
            }
            _this.funnelChart.options.funnel.type = sender.selectedValue;
            _this.funnelChart.refresh(true);
        };
        this.dataSvc = dataSvc;
        this.data = this.dataSvc.getData(this.countries);
        this.funnelData = this.dataSvc.getFunnelData(this.countries);
        this.trafficData = new wijmo.collections.ObservableArray();
        this.setInterval(500);
    }
    AppCmp.prototype.ngAfterViewInit = function () {
        this.funnelChart.options = {
            funnel: {
                neckWidth: 0.2,
                neckHeight: 0.2,
                type: 'default'
            }
        };
    };
    __decorate([
        core_1.ViewChild('funnelChart')
    ], AppCmp.prototype, "funnelChart", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [wijmo_angular2_input_1.WjInputModule, wijmo_angular2_chart_1.WjChartModule, platform_browser_1.BrowserModule, forms_1.FormsModule, AppTab_1.TabsModule],
            declarations: [AppCmp],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [AppCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map