'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
// Chart zones component
var ChartZonesCmp = (function () {
    function ChartZonesCmp() {
        this._nStudents = 200;
        this._nMaxPoints = 1600;
        this.itemsSource = [];
        // generate data
        for (var i = 0; i < this._nStudents; i++) {
            this.itemsSource.push({
                number: i,
                score: this._nMaxPoints * 0.5 * (1 + Math.random())
            });
        }
    }
    ChartZonesCmp.prototype.ngAfterViewInit = function () {
        var _this = this;
        var chart = this.chart;
        var data = this.itemsSource;
        if (!chart) {
            return;
        }
        // calculate statistics
        var mean = this._findMean(data);
        var stdDev = this._findStdDev(data, mean);
        chart.beginUpdate();
        // statistics series
        for (var i = -2; i <= 2; i++) {
            var y = mean + i * stdDev;
            var sdata = [{ x: 0, y: y }, { x: this._nStudents - 1, y: y }];
            var series = new wijmo.chart.Series();
            series.itemsSource = sdata;
            series.bindingX = 'x';
            series.binding = 'y';
            series.chartType = wijmo.chart.ChartType.Line;
            series.style = { stroke: '#202020', strokeWidth: 2 };
            if (Math.abs(i) == 1) {
                series.style.strokeDasharray = '5,1';
            }
            else if (Math.abs(i) == 2) {
                series.style.strokeDasharray = '2,2';
            }
            if (i > 0) {
                series.name = 'm+' + i + 's';
            }
            else if (i < 0) {
                series.name = 'm' + i + 's';
            }
            else {
                series.name = 'mean';
            }
            chart.series.push(series);
        }
        // calculate zone ranges
        var scores = [];
        for (var i = 0; i < data.length; i++)
            scores.push(data[i].score);
        scores.sort(function (a, b) { return b - a; });
        var zones = [
            scores[this._getBoundingIndex(scores, 0.95)],
            scores[this._getBoundingIndex(scores, 0.75)],
            scores[this._getBoundingIndex(scores, 0.25)],
            scores[this._getBoundingIndex(scores, 0.05)]
        ];
        var colors = [
            'rgba(255,192,192,0.2)',
            'rgba(55,328,228,0.5)',
            'rgba(255,228,128,0.5)',
            'rgba(128,255,128,0.5)',
            'rgba(128,128,225,0.5)'
        ];
        // add zones to legend
        for (var i = 0; i < 5; i++) {
            var series = new wijmo.chart.Series();
            series.chartType = wijmo.chart.ChartType.Area;
            series.style = { fill: colors[4 - i], stroke: 'transparent' };
            series.name = String.fromCharCode('A'.charCodeAt(0) + i);
            chart.series.push(series);
        }
        // render zones
        chart.rendering.addHandler(function (sender, e) {
            for (var i = 0; i < 5; i++) {
                var ymin = i == 0 ? chart.axisY.actualMin : zones[i - 1];
                var ymax = i == 4 ? chart.axisY.actualMax : zones[i];
                _this._drawAlarmZone(chart, e.engine, chart.axisX.actualMin, ymin, chart.axisX.actualMax, ymax, colors[i]);
            }
        });
        chart.endUpdate();
    };
    ChartZonesCmp.prototype._findMean = function (data) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum += data[i].score;
        }
        return sum / data.length;
    };
    ChartZonesCmp.prototype._findStdDev = function (data, mean) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            var d = data[i].score - mean;
            sum += d * d;
        }
        return Math.sqrt(sum / data.length);
    };
    ChartZonesCmp.prototype._getBoundingIndex = function (data, frac) {
        var n = data.length;
        var i = Math.ceil(n * frac);
        while (i > data[0] && data[i] == data[i + 1])
            i--;
        return i;
    };
    ChartZonesCmp.prototype._drawAlarmZone = function (chart, engine, xmin, ymin, xmax, ymax, fill) {
        var pt1 = chart.dataToPoint(new wijmo.Point(xmin, ymin));
        var pt2 = chart.dataToPoint(new wijmo.Point(xmax, ymax));
        engine.fill = fill;
        engine.drawRect(Math.min(pt1.x, pt2.x), Math.min(pt1.y, pt2.y), Math.abs(pt2.x - pt1.x), Math.abs(pt2.y - pt1.y));
    };
    __decorate([
        core_1.ViewChild('chart')
    ], ChartZonesCmp.prototype, "chart", void 0);
    ChartZonesCmp = __decorate([
        core_1.Component({
            selector: 'chart-zones-cmp',
            templateUrl: 'src/components/chart/chartZonesCmp.html' })
    ], ChartZonesCmp);
    return ChartZonesCmp;
}());
exports.ChartZonesCmp = ChartZonesCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartZonesCmp }
]);
var ChartZonesModule = (function () {
    function ChartZonesModule() {
    }
    ChartZonesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule],
            declarations: [ChartZonesCmp],
        })
    ], ChartZonesModule);
    return ChartZonesModule;
}());
exports.ChartZonesModule = ChartZonesModule;
//# sourceMappingURL=ChartZonesCmp.js.map