'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';
import * as wjNg2ChartInteraction from 'wijmo/wijmo.angular2.chart.interaction';
import * as wjNg2FinAnalytics from 'wijmo/wijmo.angular2.chart.finance.analytics';

import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';

//FibonacciTool sample component
@Component({
    selector: 'fibonacci-tool-cmp',
        templateUrl: 'src/components/analytics/FibonacciToolCmp.html',
        directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
            wjNg2FinAnalytics.WjFlexChartFibonacci, wjNg2FinAnalytics.WjFlexChartFibonacciArcs,
            wjNg2FinAnalytics.WjFlexChartFibonacciFans, wjNg2FinAnalytics.WjFlexChartFibonacciTimeZones,
            wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2ChartInteraction.WjFlexChartRangeSelector, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class FibonacciToolCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    selectedSymbol: string;
    title: string;
    selectedFib: string;
    properties: any;
    // references control in the view
    @ViewChild('chart') chart: wijmo.chart.finance.FinancialChart;
    @ViewChild('selector') selector: wijmo.chart.interaction.RangeSelector;

    constructor( @Inject(DataSvc) dataSvc: DataSvc, @Inject(TooltipSvc) tooltipSvc: TooltipSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.selectedSymbol = this.dataList[0].symbol;
        this.selectedFib = 'retracements';
        this.setDataSource();
        this.title = 'Fibonacci Tool';
        this.properties = {
            retracements: {
                labelPosition: 'Left',
                uptrend: true,
                selectorVisible: false
            },
            arcs: {
                labelPosition: 'Top',
                start: new wijmo.chart.DataPoint(46, 19.75),
                end: new wijmo.chart.DataPoint(54, 17.1)

            },
            fans: {
                labelPosition: 'Top',
                start: new wijmo.chart.DataPoint(10, 18.12),
                end: new wijmo.chart.DataPoint(32, 20.53)
            },
            timeZones: {
                labelPosition: 'Right',
                start: 0,
                end: 3
            }
        };
    }

    selectedSymbolChanged() {
        this.setDataSource();
    }

    rangeChanged() {
        var chart = this.chart;
        if (chart) {
            chart.beginUpdate();
            chart.series[1].maxX = this.selector.max;
            chart.series[1].minX = this.selector.min;
            chart.endUpdate();
        }
    }

    valueChanged() {
        if (this.chart) {
            this.chart.invalidate();
        }
    }

    fibTypeClicked(type) {
        // ensure range selector is hidden
        if (type.selectedIndex !== 2) {
            this.properties.retracements.selectorVisible = false;
        }
    }

    private setDataSource() {
        var symbol = this.selectedSymbol;

        this.dataSvc.getData(symbol).subscribe(data => {
            this.data = data;
        });
    }
}