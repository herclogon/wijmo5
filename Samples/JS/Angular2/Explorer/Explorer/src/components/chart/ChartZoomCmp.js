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
// Chart zoom component
var ChartZoomCmp = (function () {
    function ChartZoomCmp() {
        this._down = false;
        this._isZoomed = false;
        this._start = null;
        this._end = null;
        this._hostEl = null;
        this._offset = null;
        this._selection = null;
        this.pts1 = [];
        this.pts2 = [];
        for (var i = 0; i < 160; i++) {
            this.pts1.push({ x: 2 * Math.sin(0.16 * i), y: 2 * Math.cos(0.12 * i) });
            this.pts2.push({ x: Math.sin(0.1 * i), y: Math.cos(0.15 * i) });
        }
    }
    ChartZoomCmp.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.chart) {
            var chart = this.chart;
            this._hostEl = chart.hostElement;
            this._selection = $('#plotSelection');
            // handle mouse (always)
            this._hostEl.onmousedown = function (e) {
                _this._mouseDown(e);
            };
            this._hostEl.onmousemove = function (e) {
                _this._mouseMove(e, new wijmo.Point(e.pageX, e.pageY));
            };
            this._hostEl.onmouseup = function (e) {
                _this._mouseUp(e);
            };
            // handle touch (if supported by the browser)
            if ('ontouchstart' in window) {
                this._hostEl.ontouchstart = function (e) {
                    _this._mouseDown(e);
                    e.preventDefault();
                };
                this._hostEl.ontouchmove = function (e) {
                    _this._mouseMove(e, new wijmo.Point(e.changedTouches[0].pageX, e.changedTouches[0].pageY));
                    e.preventDefault();
                };
                this._hostEl.ontouchend = function (e) {
                    _this._mouseUp(e);
                    e.preventDefault();
                };
            }
            // handle pointer (if supported by the browser)
            if ('onpointerdown' in window) {
                this._hostEl.addEventListener('pointerdown', function (e) {
                    this._mouseDown(e);
                }, true);
                this._hostEl.addEventListener('pointermove', function (e) {
                    this._mouseMove(e, new wijmo.Point(e.pageX, e.pageY));
                }, true);
                this._hostEl.addEventListener('pointerup', function (e) {
                    this._mouseUp(e);
                }, true);
                // prevent touch scrolling on the chart
                this._hostEl.style['touchAction'] = 'none';
            }
        }
    };
    ChartZoomCmp.prototype.resetZoom = function () {
        var chart = this.chart;
        // set min and max to null/undefined to enable the default scaling
        chart.beginUpdate();
        chart.axisX.min = null;
        chart.axisY.min = null;
        chart.axisX.max = null;
        chart.axisY.max = null;
        chart.endUpdate();
        this._isZoomed = false;
    };
    ;
    ChartZoomCmp.prototype.canResetZoom = function () {
        return this._isZoomed;
    };
    ;
    ChartZoomCmp.prototype._mouseDown = function (e) {
        if (!this._isZoomed) {
            this._down = true;
            e.preventDefault();
        }
    };
    ChartZoomCmp.prototype._mouseMove = function (e, pt) {
        if (this._down) {
            if (this._isZoomed) {
                this._end = pt;
                // update selection rectangle
                var w = pt.x - this._start.x;
                var h = pt.y - this._start.y;
                if (w >= 0) {
                    this._selection.css('left', this._start.x - this._offset.left).width(w);
                }
                else {
                    this._selection.css('left', pt.x - this._offset.left).width(-w);
                }
                if (h >= 0) {
                    this._selection.css('top', this._start.y - this._offset.top).height(h);
                }
                else {
                    this._selection.css('top', pt.y - this._offset.top).height(-h);
                }
            }
            else {
                this._selection.css('visibility', 'visible');
                this._offset = this._selection.offset();
                this._start = pt;
                this._isZoomed = true;
            }
            e.preventDefault();
        }
    };
    ChartZoomCmp.prototype._mouseUp = function (e) {
        var chart = this.chart;
        var hostEl = chart.hostElement;
        this._down = false;
        if (this._end) {
            this._selection.css('visibility', 'hidden').width(0).height(0).css('left', 0).css('top', 0);
            var host = $(hostEl);
            this._offset = host.offset();
            this._offset.left = this._offset.left + parseInt(host.css('padding-left'));
            this._offset.top = this._offset.top + parseInt(host.css('padding-top'));
            // convert screen to data coordinates
            var min = new wijmo.Point(this._start.x - this._offset.left, this._start.y - this._offset.top);
            var max = new wijmo.Point(this._end.x - this._offset.left, this._end.y - this._offset.top);
            var p1 = chart.pointToData(min);
            var p2 = chart.pointToData(max);
            // update axes
            chart.beginUpdate();
            chart.axisX.min = Math.min(p1.x, p2.x);
            chart.axisY.min = Math.min(p1.y, p2.y);
            chart.axisX.max = Math.max(p1.x, p2.x);
            chart.axisY.max = Math.max(p1.y, p2.y);
            chart.endUpdate();
            this._end = this._start = null;
            e.preventDefault();
        }
    };
    __decorate([
        core_1.ViewChild('chart')
    ], ChartZoomCmp.prototype, "chart", void 0);
    ChartZoomCmp = __decorate([
        core_1.Component({
            selector: 'chart-zoom-cmp',
            templateUrl: 'src/components/chart/chartZoomCmp.html' })
    ], ChartZoomCmp);
    return ChartZoomCmp;
}());
exports.ChartZoomCmp = ChartZoomCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartZoomCmp }
]);
var ChartZoomModule = (function () {
    function ChartZoomModule() {
    }
    ChartZoomModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule],
            declarations: [ChartZoomCmp],
        })
    ], ChartZoomModule);
    return ChartZoomModule;
}());
exports.ChartZoomModule = ChartZoomModule;
//# sourceMappingURL=ChartZoomCmp.js.map