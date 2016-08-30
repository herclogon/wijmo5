'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';
import * as wjNg2Analytics from 'wijmo/wijmo.angular2.chart.analytics';

import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';

//MovingAverages sample component
@Component({
    selector: 'moving-averages-cmp',
    templateUrl: 'src/components/analytics/MovingAveragesCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjInputNumber, wjNg2Analytics.WjFlexChartMovingAverage, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class MovingAveragesCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    selectedSymbol: string;
    title: string;
    shortProps: any;
    longProps: any;
    // references control in the view
    @ViewChild('chart') chart: wijmo.chart.finance.FinancialChart;

    constructor( @Inject(DataSvc) dataSvc: DataSvc, @Inject(TooltipSvc) tooltipSvc: TooltipSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.selectedSymbol = 'fb';
        this.setDataSource();
        this.title = 'Moving Averages';
        this.shortProps = {
            period: 50,
            type: 'Simple',
            name: ' Day MA'
        };
        this.longProps = {
            period: 200,
            type: 'Simple',
            name: ' Day MA'
        };
    }

    chartRendered() {
        // customize tooltips
        if (this.chart) {
            this.chart.tooltip.content = this.tooltipSvc.getTooltip;
        }
    }
    
    private setDataSource() {
        var symbol = this.selectedSymbol;

        this.dataSvc.getData(symbol).subscribe(data => {
            this.data = data;
        });
    }

    shortPeriodChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.shortProps.period = input.value;
    };

    longPeriodChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.longProps.period = input.value;
    };
}