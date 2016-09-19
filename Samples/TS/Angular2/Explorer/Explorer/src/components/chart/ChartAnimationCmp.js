'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_chart_animation_1 = require('wijmo/wijmo.angular2.chart.animation');
// Chart animation component
var ChartAnimationCmp = (function () {
    function ChartAnimationCmp() {
        var _this = this;
        this.addChartSeriesFirstPoint = function () {
            this.data.insert(0, this._getRandomData('added' + this._getRandomValue(1000)));
        };
        this.addChartSeriesLastPoint = function () {
            this.data.push(this._getRandomData('added' + this._getRandomValue(1000)));
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
        this._setDataSource();
        this.title = 'FlexChart';
        this.duration = 400;
        this.chartType = 'Line';
        this.easing = 'Swing';
        this.animationMode = 'All';
    }
    ChartAnimationCmp.prototype._setDataSource = function () {
        this.data = this._getData(this.flexChartPoints);
    };
    ChartAnimationCmp.prototype.resetChartData = function () {
        this._setDataSource();
    };
    ChartAnimationCmp.prototype.itemAdd = function (args) {
        var idx = args.selectedIndex;
        if (idx > -1) {
            this.func('add', idx);
        }
    };
    ChartAnimationCmp.prototype.itemRemove = function (args) {
        var idx = args.selectedIndex;
        if (idx > -1) {
            this.func('remove', idx);
        }
    };
    ChartAnimationCmp.prototype.func = function (oper, idx) {
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
    ChartAnimationCmp.prototype.animationModeChanged = function () {
        this.animation.animationMode = this.animationMode;
        this.flexChart.refresh(true);
    };
    // get data by symbol
    ChartAnimationCmp.prototype._getData = function (count) {
        var data = new wijmo.collections.ObservableArray();
        for (var i = 1; i <= count; i++) {
            data.push(this._getRandomData('random' + this._getRandomValue(1000)));
        }
        return data;
    };
    ChartAnimationCmp.prototype._getRandomData = function (idx) {
        return {
            //x: getRandomValue(100),
            x: idx,
            y: this._getRandomValue(200),
            y1: this._getRandomValue(400),
            y2: this._getRandomValue(600),
            y3: this._getRandomValue(800),
            y4: this._getRandomValue(1000)
        };
    };
    ChartAnimationCmp.prototype._getRandomValue = function (max) {
        return Math.round(Math.random() * max);
    };
    __decorate([
        core_1.ViewChild('flexChart')
    ], ChartAnimationCmp.prototype, "flexChart", void 0);
    __decorate([
        core_1.ViewChild('animation')
    ], ChartAnimationCmp.prototype, "animation", void 0);
    ChartAnimationCmp = __decorate([
        core_1.Component({
            selector: 'chart-animation-cmp',
            templateUrl: 'src/components/chart/chartAnimationCmp.html',
            styles: ["\n       .list-inline > li {\n        margin-bottom: 5px;\n    }\n  "]
        })
    ], ChartAnimationCmp);
    return ChartAnimationCmp;
}());
exports.ChartAnimationCmp = ChartAnimationCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartAnimationCmp }
]);
var ChartAnimationModule = (function () {
    function ChartAnimationModule() {
    }
    ChartAnimationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule,
                wijmo_angular2_chart_animation_1.WjChartAnimationModule],
            declarations: [ChartAnimationCmp],
        })
    ], ChartAnimationModule);
    return ChartAnimationModule;
}());
exports.ChartAnimationModule = ChartAnimationModule;
//# sourceMappingURL=ChartAnimationCmp.js.map