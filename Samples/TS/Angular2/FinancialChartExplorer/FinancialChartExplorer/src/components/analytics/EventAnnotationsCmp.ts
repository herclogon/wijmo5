'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';
import * as wjNg2Interaction from 'wijmo/wijmo.angular2.chart.interaction';
import * as wjNg2Annotation from 'wijmo/wijmo.angular2.chart.annotation';

import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';

//EventAnnotations sample component
@Component({
    selector: 'event-annotations-cmp',
    templateUrl: 'src/components/analytics/EventAnnotationsCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2Interaction.WjFlexChartRangeSelector,
        wjNg2Annotation.WjFlexChartAnnotationLayer, wjNg2Annotation.WjFlexChartAnnotationRectangle, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class EventAnnotationsCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    annotations: any[];
    selectedSymbol: string;
    title: string;
    // references control in the view
    @ViewChild('chart') chart: wijmo.chart.finance.FinancialChart;
    @ViewChild('selectorChart') selectorChart: wijmo.chart.finance.FinancialChart;
    @ViewChild('selector') selector: wijmo.chart.interaction.RangeSelector;

    constructor( @Inject(DataSvc) dataSvc: DataSvc, @Inject(TooltipSvc) tooltipSvc: TooltipSvc) {
        this.data = [];
        this.annotations = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.selectedSymbol = 'box';
        this.setDataSource();
        this.title = 'Event Annotations';
        this.setAnnotations();
    }

    selectedSymbolChanged() {
        this.setDataSource();
    }

    selectorChartRendered() {
        if (this.selector && this.selectorChart) {
            var range = this.dataSvc.findApproxRange(this.selectorChart.axisX.actualMin, this.selectorChart.axisX.actualMax, 0.45);
            this.selector.max = range.max;
            this.selector.min = range.min;
        }
    }

    chartRendered() {
        // customize tooltips
        if (this.chart) {
            this.chart.tooltip.content = this.tooltipSvc.getFinancialTooltip;
        }
    }

    rangeChanged() {
        var chart = this.chart,
            selector = this.selector,
            yRange;

        if (!chart || !selector) {
            return;
        }
        // find visible y-range
        yRange = this.dataSvc.findRenderedYRange(this.data, selector.min, selector.max);

        // update main chart's x & y range
        chart.axisX.min = selector.min;
        chart.axisX.max = selector.max;
        chart.axisY.min = yRange.min;
        chart.axisY.max = yRange.max;

        chart.invalidate();
    }

    private setDataSource() {
        var symbol = this.selectedSymbol;

        this.dataSvc.getData(symbol).subscribe(data => {
            this.data = data;
        });
    }

    private setAnnotations() {
        this.dataSvc.getData('box-annotations').subscribe(data => {
            var i, len = data.length;
            for (i = 0; i < len; i++) {
                data[i].tooltip = '<b>' + data[i].title + '</b>';
                if (data[i].description) {
                    data[i].tooltip += '<br>' + data[i].description;
                }
            }
            this.annotations = data;
        });
    }
}