'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WjChartModule } from 'wijmo/wijmo.angular2.chart';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjChartAnalyticsModule } from 'wijmo/wijmo.angular2.chart.analytics';

import { DataSvc } from './../services/DataSvc';

//TrendLine sample component
@Component({
    selector: 'trend-line-cmp',
    templateUrl: 'src/components/TrendLineCmp.html'
})

export class TrendLineCmp implements AfterViewInit {
    itemsSource: wijmo.collections.ObservableArray;
    title: string;
    order: number;
    fitType: string;
    name: string;
    showEquation: boolean;
    markerContent: Function;
    
    // references control in the view
    @ViewChild('trendLine') trendLine: wijmo.chart.analytics.TrendLine;
    @ViewChild('trendLineChart') trendLineChart: wijmo.chart.FlexChart;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.itemsSource = dataSvc.getData(10);
        this.title = 'TrendLine';
        this.order = 4;
        this.fitType = 'Linear';
        this.showEquation = true;
    }

    ngAfterViewInit() {
        var self = this;
        self.markerContent = function() {
            if (self.trendLine) {
                return self.trendLine.getEquation();
            }
            return '';
        }
    }
    
    // init variables
    moving = false;
    hti = null;
    threshold = 10;
    el = null;
    dp = null;
    ptIdx = null;

    mouseMove(e) {
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
    }

    mouseDown(e) {
        if (!this.moving && this.hti && this.hti.distance <= this.threshold) {
            // bool flag
            this.moving = true;

            // maintain pointIndex until moving is done
            this.ptIdx = this.hti.pointIndex;
        }
    }

    orderChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.order = input.value;
    };

    // called on mouseup or mouseleave
    update() {
        if (this.hti && this.hti.series) {
            // notify only once
            this.hti.series.collectionView.refresh();
        }

        this.moving = false;
        this.hti = null;
        this.el = null;
        this.dp = null;
        this.ptIdx = null;
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: TrendLineCmp }
]);

@NgModule({
    imports: [CommonModule, routing, FormsModule, WjChartModule, WjInputModule, WjChartAnalyticsModule],
    declarations: [TrendLineCmp],
})
export class TrendLineModule {
}