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
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var wjNg2Animation = require('wijmo/wijmo.angular2.chart.animation');
var DataSvc_1 = require('./../services/DataSvc');
//FlexChartAnimation sample component
var FlexChartAnimationCmp = (function () {
    function FlexChartAnimationCmp(dataSvc) {
        var _this = this;
        this.addChartSeriesFirstPoint = function () {
            this.data.insert(0, this.dataService.getRandomData('added' + this.dataService.getRandomValue(1000)));
        };
        this.addChartSeriesLastPoint = function () {
            this.data.push(this.dataService.getRandomData('added' + this.dataService.getRandomValue(1000)));
        };
        this.removeChartSeriesFirstPoint = function () {
            if (this.data.length) {
                this.data.removeAt(0);
            }
        };
        this.removeChartSeriesLastPoint = function () {
            if (this.data.length) {
                this.data.pop();
            }
        };
        this.valueChanged = function (sender) {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            _this.duration = sender.value;
        };
        this.addChartSeries = function () {
            var chart = this.flexChart, len = chart.series.length;
            if (len >= 5) {
                return;
            }
            var series = new wijmo.chart.Series();
            series.binding = len ? 'y' + len : 'y';
            series.name = 'Y' + (chart.series.length + 1);
            chart.series.push(series);
        };
        this.removeChartSeries = function () {
            var chart = this.flexChart;
            if (chart.series.length <= 0) {
                return;
            }
            chart.series.pop();
        };
        this.flexChartPoints = 10;
        this.dataService = dataSvc;
        this._setDataSource();
        this.title = 'FlexChart';
        this.duration = 400;
        this.chartType = 'Line';
        this.easing = 'Swing';
        this.animationMode = 'All';
    }
    FlexChartAnimationCmp.prototype._setDataSource = function () {
        this.data = this.dataService.getData(this.flexChartPoints);
    };
    FlexChartAnimationCmp.prototype.resetChartData = function () {
        this._setDataSource();
    };
    FlexChartAnimationCmp.prototype.itemAdd = function (args) {
        var idx = args.selectedIndex;
        if (idx > -1) {
            this.func('add', idx);
        }
    };
    FlexChartAnimationCmp.prototype.itemRemove = function (args) {
        var idx = args.selectedIndex;
        if (idx > -1) {
            this.func('remove', idx);
        }
    };
    FlexChartAnimationCmp.prototype.func = function (oper, idx) {
        var str = '', funcName;
        if (idx === 1) {
            str = 'FirstPoint';
        }
        else if (idx === 2) {
            str = 'LastPoint';
        }
        funcName = oper + 'ChartSeries' + str;
        this[funcName]();
    };
    FlexChartAnimationCmp.prototype.animationModeChanged = function (args) {
        if (args.selectedValue !== this.animationMode) {
            this.animation.animationMode = args.selectedValue;
            this.flexChart.refresh(true);
        }
    };
    __decorate([
        core_1.ViewChild('flexChart')
    ], FlexChartAnimationCmp.prototype, "flexChart", void 0);
    __decorate([
        core_1.ViewChild('animation')
    ], FlexChartAnimationCmp.prototype, "animation", void 0);
    FlexChartAnimationCmp = __decorate([
        core_1.Component({
            selector: 'flex-chart-animation-cmp',
            templateUrl: 'src/components/FlexChartAnimationCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjInputNumber, wjNg2Animation.WjFlexChartAnimation, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], FlexChartAnimationCmp);
    return FlexChartAnimationCmp;
}());
exports.FlexChartAnimationCmp = FlexChartAnimationCmp;
//# sourceMappingURL=FlexChartAnimationCmp.js.map