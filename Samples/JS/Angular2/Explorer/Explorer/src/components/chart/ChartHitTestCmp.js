'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
// Chart hittest component
var ChartHitTestCmp = (function () {
    function ChartHitTestCmp() {
        this.headerStyle = { fontSize: 32 };
        this.footerStyle = { fontSize: 24 };
        this.pts1 = [];
        this.pts2 = [];
        for (var i = 0; i < 60; i++) {
            this.pts1.push({ x: i, y: Math.cos(0.12 * i) });
            this.pts2.push({ x: i, y: Math.sin(0.12 * i) });
        }
    }
    ChartHitTestCmp.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.chart) {
            this.chart.hostElement.onmousemove = function (e) {
                _this.hitInfo = _this.chart.hitTest(e);
                _this.point = _this.chart.pointToData(e);
                _this.chartElement = wijmo.chart.ChartElement[_this.hitInfo.chartElement];
            };
        }
    };
    __decorate([
        core_1.ViewChild('chart')
    ], ChartHitTestCmp.prototype, "chart", void 0);
    ChartHitTestCmp = __decorate([
        core_1.Component({
            selector: 'chart-hit-test-cmp',
            templateUrl: 'src/components/chart/chartHitTestCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis, common_1.CORE_DIRECTIVES]
        })
    ], ChartHitTestCmp);
    return ChartHitTestCmp;
}());
exports.ChartHitTestCmp = ChartHitTestCmp;
//# sourceMappingURL=ChartHitTestCmp.js.map