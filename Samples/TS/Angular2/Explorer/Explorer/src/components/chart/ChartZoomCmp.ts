'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';

// Chart zoom component
@Component({
    selector: 'chart-zoom-cmp',
    templateUrl: 'src/components/chart/chartZoomCmp.html'})

export class ChartZoomCmp implements AfterViewInit {

    pts1: any[];
    pts2: any[];
    @ViewChild('chart') chart: wijmo.chart.FlexChart;

    private _down = false;
    private _isZoomed = false;
    private _start = null;
    private _end = null;
    private _hostEl = null;
    private _offset = null;
    private _selection = null;

    constructor() {

        this.pts1 = [];
        this.pts2 = [];
        for (var i = 0; i < 160; i++) {
            this.pts1.push({ x: 2 * Math.sin(0.16 * i), y: 2 * Math.cos(0.12 * i) });
            this.pts2.push({ x: Math.sin(0.1 * i), y: Math.cos(0.15 * i) });
        }
    }

    ngAfterViewInit() {
        if (this.chart) {
            var chart = this.chart;

            this._hostEl = chart.hostElement;
            this._selection = $('#plotSelection');

            // handle mouse (always)
            this._hostEl.onmousedown = (e: Event) => {
                this._mouseDown(e);
            }
            this._hostEl.onmousemove = (e: any) => {
                this._mouseMove(e, new wijmo.Point(e.pageX, e.pageY));
            }
            this._hostEl.onmouseup = (e: Event) => {
                this._mouseUp(e);
            }
            // handle touch (if supported by the browser)
            if ('ontouchstart' in window) {

                this._hostEl.ontouchstart = (e: Event) => {
                    this._mouseDown(e);
                    e.preventDefault();
                }

                this._hostEl.ontouchmove = (e: TouchEvent) => {
                    this._mouseMove(e, new wijmo.Point(e.changedTouches[0].pageX, e.changedTouches[0].pageY));
                    e.preventDefault();
                }

                this._hostEl.ontouchend = (e: Event) => {
                    this._mouseUp(e);
                    e.preventDefault();
                }
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
    }


    resetZoom() {
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

    canResetZoom() {
        return this._isZoomed;
    };

    private _mouseDown(e) {
        if (!this._isZoomed) {
            this._down = true;
            e.preventDefault();
        }
    }

    private _mouseMove(e: Event, pt: wijmo.Point) {
        if (this._down) {
            if (this._isZoomed) {
                this._end = pt;

                // update selection rectangle
                var w = pt.x - this._start.x;
                var h = pt.y - this._start.y;

                if (w >= 0) {
                    this._selection.css('left', this._start.x - this._offset.left).width(w);
                } else {
                    this._selection.css('left', pt.x - this._offset.left).width(-w);
                }
                if (h >= 0) {
                    this._selection.css('top', this._start.y - this._offset.top).height(h);
                } else {
                    this._selection.css('top', pt.y - this._offset.top).height(-h);
                }
            } else {
                this._selection.css('visibility', 'visible');
                this._offset = this._selection.offset();

                this._start = pt;

                this._isZoomed = true;

            }
            e.preventDefault();
        }
    }

    private _mouseUp(e: Event) {
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
    }

}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ChartZoomCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjChartModule],
    declarations: [ChartZoomCmp],
})
export class ChartZoomModule {
}
