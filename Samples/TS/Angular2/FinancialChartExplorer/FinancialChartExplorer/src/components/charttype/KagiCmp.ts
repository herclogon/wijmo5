'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';

import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';

//Kagi sample component
@Component({
    selector: 'kagi-cmp',
    templateUrl: 'src/components/charttype/KagiCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
        wjNg2Input.WjComboBox, wjNg2Input.WjInputColor, wjNg2Input.WjInputNumber,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class KagiCmp {
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
    @ViewChild('inputNumber') inputNumber: wijmo.input.InputNumber;

    constructor( @Inject(DataSvc) dataSvc: DataSvc, @Inject(TooltipSvc) tooltipSvc: TooltipSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.selectedSymbol = this.dataList[0].symbol;
        this.setDataSource();
        this.title = 'Kagi';
        this.options = {
            kagi: {
                reversalAmount: 1,
                rangeMode: 'Fixed',
                fields: 'Close'
            }
        };
        this.style = {
            stroke: 'rgb(136, 189, 230)'
        };
        this.altStyle = {
            stroke: 'rgb(136, 189, 230)'
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

    reversalAmountChanged(input: wijmo.input.InputNumber) {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        if (this.chart) {
            this.chart.invalidate();
        }
    }

    rangeModeChanged(menu) {
        var reversalInput = this.inputNumber;
        if (menu.selectedValue === 'Percentage') {
            reversalInput.format = 'p0';
            reversalInput.min = 0;
            reversalInput.max = 1;
            reversalInput.value = wijmo.clamp(reversalInput.value, 0, .05);
            reversalInput.step = 0.05;
        } else if (menu.selectedValue === 'ATR') {
            reversalInput.format = 'n0';
            reversalInput.min = 2;
            reversalInput.max = this.data.length - 2;
            reversalInput.value = wijmo.clamp(reversalInput.value, 14, this.data.length - 2);
            reversalInput.step = 1;
        } else {
            reversalInput.format = 'n0';
            reversalInput.min = 1;
            reversalInput.max = null;
            reversalInput.value = 1;
            reversalInput.step = 1;
        }

        this.optionChanged();
    }

    private setDataSource() {
        var symbol = this.selectedSymbol;

        this.dataSvc.getData(symbol).subscribe(data => {
            this.data = data;
        });
    }
}