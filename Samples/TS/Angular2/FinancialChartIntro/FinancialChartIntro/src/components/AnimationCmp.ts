'use strict';

import { Component, AfterViewInit, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { AppTab, AppTabPane } from './AppTab';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2FlexChartAnimation from 'wijmo/wijmo.angular2.chart.animation';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';

import { DataSvc } from './../services/DataSvc';

//Animation sample component
@Component({
    selector: 'animation-cmp',
    templateUrl: 'src/components/AnimationCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2FlexChartAnimation.WjFlexChartAnimation,
        wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, AppTab, AppTabPane, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class AnimationCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;
    footer: string;
    chartType: string;
    easing: string;
    duration: number;
    bindingY: string;
    bindingYs: any;
    @ViewChild('chart') chart: wijmo.chart.finance.FinancialChart;
    @ViewChild('animation') animation: wijmo.chart.animation.ChartAnimation;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
        this.footer = 'Click on chart to refresh';
        this.chartType = 'Line';
        this.easing = 'Swing';
        this.duration = 400;
        this.bindingY = 'close';
        this.bindingYs = {
            Column: 'close',
            Line: 'close',
            Area: 'close',
            Candlestick: 'high,low,open,close',
            HighLowOpenClose: 'high,low,open,close'
        };
    }

    private setDataSource() {
        this.dataSvc.getData().subscribe(data => {
            this.data = data;
        });
    }

    ngAfterViewInit() {
        this.chart.tooltip.content = ht => {
            var dateStr = 'Date: ' + ht.x + '<br/>',
                hlocStr = 'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                    'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                    'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                    'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2') + '<br/>',
                closeStr = 'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2'),
                volStr = 'Volume: ' + wijmo.Globalize.format(ht.item.volume, 'n0'),
                toolTipStr;
            switch (this.chartType) {
                case 'Line':
                case 'Column':
                    toolTipStr = dateStr + closeStr;
                    break;
                default:
                    toolTipStr = dateStr + hlocStr;
                    break;
            }
            return toolTipStr;
        };

        this.chart.hostElement.addEventListener('click', () => {
            this.refreshChart();
        });
    }

    typeChanged(menu) {
        var chartType = menu.selectedValue;
        this.bindingY = this.bindingYs[chartType];
    }

    refreshChart() {
        if (this.chart) {
            // call with a delay to make sure that bindings have propagated to all components
            setTimeout(() => {
                this.chart.invalidate(true);
            }, 0);
        }
    }

    durationChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.duration = input.value;
    };
}