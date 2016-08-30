'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
// Chart marker component
var ChartMarkerCmp = (function () {
    function ChartMarkerCmp() {
        this._lines = 1;
        this.itemsSource = [];
        for (var i = 0; i < 300; i++) {
            this.itemsSource.push({
                date: new Date(10, 0, i),
                output: Math.floor(Math.random() * 10),
                input: Math.floor(Math.random() * 10 + 10)
            });
        }
        this._pt = new wijmo.Point();
        this.changeContent = this._changeContent.bind(this);
    }
    Object.defineProperty(ChartMarkerCmp.prototype, "lines", {
        get: function () {
            return this._lines;
        },
        set: function (value) {
            if (this._lines != value) {
                this._lines = value;
                if (this.lineMarker) {
                    if (this._lines === 0 && this.lineMarker.interaction === 2) {
                        this.lineMarker.interaction = 1;
                    }
                    this.lineMarker.lines = this._lines;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ChartMarkerCmp.prototype.positionChanged = function (point) {
        this._pt = point;
    };
    ChartMarkerCmp.prototype.ngAfterViewInit = function () {
        this.lineMarker.alignment = wijmo.chart.LineMarkerAlignment.Auto;
    };
    ChartMarkerCmp.prototype._changeContent = function () {
        var html = '', chart = this.chart;
        if (!chart) {
            return;
        }
        for (var i = 0; i < chart.series.length; i++) {
            var s = chart.series[i];
            var ht = s.hitTest(new wijmo.Point(this._pt.x, NaN));
            // find series lines to get its color
            var polyline = $(s.hostElement).find('polyline')[0];
            // add series info to the marker content
            if (ht.x && ht.y !== null) {
                if (i == 0) {
                    html += wijmo.Globalize.formatDate(ht.x, 'dd-MMM');
                }
                html += '<div style="color:' + polyline.getAttribute('stroke') + '">' + ht.name + ' = ' + ht.y.toFixed(2) + '</div>';
            }
        }
        return html;
    };
    __decorate([
        core_1.ViewChild('chart')
    ], ChartMarkerCmp.prototype, "chart", void 0);
    __decorate([
        core_1.ViewChild('lineMarker')
    ], ChartMarkerCmp.prototype, "lineMarker", void 0);
    ChartMarkerCmp = __decorate([
        core_1.Component({
            selector: 'chart-marker-cmp',
            templateUrl: 'src/components/chart/chartMarkerCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Chart.WjFlexChartLineMarker, common_1.CORE_DIRECTIVES]
        })
    ], ChartMarkerCmp);
    return ChartMarkerCmp;
}());
exports.ChartMarkerCmp = ChartMarkerCmp;
//# sourceMappingURL=ChartMarkerCmp.js.map