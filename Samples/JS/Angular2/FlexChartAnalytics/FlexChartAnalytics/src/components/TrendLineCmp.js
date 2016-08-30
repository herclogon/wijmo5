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
var wjNg2Analytics = require('wijmo/wijmo.angular2.chart.analytics');
var DataSvc_1 = require('./../services/DataSvc');
//TrendLine sample component
var TrendLineCmp = (function () {
    function TrendLineCmp(dataSvc) {
        var _this = this;
        // init variables
        this.moving = false;
        this.hti = null;
        this.threshold = 10;
        this.el = null;
        this.dp = null;
        this.ptIdx = null;
        this.orderChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.order = input.value;
        };
        this.itemsSource = dataSvc.getData(10);
        this.title = 'TrendLine';
        this.order = 4;
        this.fitType = 'Linear';
        this.showEquation = true;
    }
    TrendLineCmp.prototype.ngAfterViewInit = function () {
        var self = this;
        self.markerContent = function () {
            if (self.trendLine) {
                return self.trendLine.getEquation();
            }
            return '';
        };
    };
    TrendLineCmp.prototype.mouseMove = function (e) {
        var target = e.target || e.srcElement;
        // prevent text selection
        e.preventDefault();
        // hit test
        this.hti = this.trendLineChart.series[0].hitTest(e);
        // get data point based on HitTestInfo
        this.dp = this.trendLineChart.pointToData(this.hti.point);
        if (this.moving && this.hti && this.hti.series && this.hti.series === this.trendLineChart.series[0]) {
            // update the svg element position
            this.el = this.hti.series.getPlotElement(this.ptIdx);
            // set svg attributes to update position
            //e.offsetY doesn't work for FF.
            //el.setAttribute('cy', e.offsetY);
            this.el.setAttribute('cy', e.clientY - target.getBoundingClientRect().top);
            // update values - but don't refresh collection until done
            this.hti.series.collectionView.items[this.ptIdx].y = Math.min(Math.max(0, this.dp.y), 100);
        }
    };
    TrendLineCmp.prototype.mouseDown = function (e) {
        if (!this.moving && this.hti && this.hti.distance <= this.threshold) {
            // bool flag
            this.moving = true;
            // maintain pointIndex until moving is done
            this.ptIdx = this.hti.pointIndex;
        }
    };
    // called on mouseup or mouseleave
    TrendLineCmp.prototype.update = function () {
        if (this.hti && this.hti.series) {
            // notify only once
            this.hti.series.collectionView.refresh();
        }
        this.moving = false;
        this.hti = null;
        this.el = null;
        this.dp = null;
        this.ptIdx = null;
    };
    __decorate([
        core_1.ViewChild('trendLine')
    ], TrendLineCmp.prototype, "trendLine", void 0);
    __decorate([
        core_1.ViewChild('trendLineChart')
    ], TrendLineCmp.prototype, "trendLineChart", void 0);
    TrendLineCmp = __decorate([
        core_1.Component({
            selector: 'trend-line-cmp',
            templateUrl: 'src/components/TrendLineCmp.html',
            directives: [wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis, wjNg2Chart.WjFlexChartLineMarker,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjInputNumber, wjNg2Analytics.WjFlexChartTrendLine, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], TrendLineCmp);
    return TrendLineCmp;
}());
exports.TrendLineCmp = TrendLineCmp;
//# sourceMappingURL=TrendLineCmp.js.map