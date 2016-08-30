'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';

import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';

//LineBreak sample component
@Component({
    selector: 'line-break-cmp',
    templateUrl: 'src/components/charttype/LineBreakCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
        wjNg2Input.WjComboBox, wjNg2Input.WjInputColor, wjNg2Input.WjInputNumber, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class LineBreakCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    selectedSymbol: string;
    options: any;
    style: any;
    altStyle: any;
    title: string;
    // references control in the view
    @ViewChild('chart') chart: wijmo.chart.finance.FinancialChart;

    constructor( @Inject(DataSvc) dataSvc: DataSvc, @Inject(TooltipSvc) tooltipSvc: TooltipSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.selectedSymbol = this.dataList[0].symbol;
        this.setDataSource();
        this.title = 'Line Break';
        this.options = {
            lineBreak: {
                newLineBreaks: 3
            }
        };
        this.style = {
            stroke: 'rgb(136, 189, 230)',
            fill: 'rgba(136, 189, 230, 0.701961)'
        };
        this.altStyle = {
            stroke: 'rgb(136, 189, 230)',
            fill: 'transparent'
        };
    }

    selectedSymbolChanged() {
        this.setDataSource();
    }

    chartRendered() {
        // customize tooltips
        if (this.chart) {
            this.chart.tooltip.content = this.tooltipSvc.getFinancialTooltip;
        }
    }

    optionChanged() {
        if (this.chart) {
            this.chart.invalidate();
        }
    }

    private setDataSource() {
        var symbol = this.selectedSymbol;

        this.dataSvc.getData(symbol).subscribe(data => {
            this.data = data;
        });
    }
}