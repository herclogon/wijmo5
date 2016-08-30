'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';

import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';

//Renko sample component
@Component({
    selector: 'renko-cmp',
    templateUrl: 'src/components/charttype/RenkoCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
        wjNg2Input.WjComboBox, wjNg2Input.WjInputColor, wjNg2Input.WjInputNumber,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class RenkoCmp {
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
        this.title = 'Renko';
        this.options = {
            renko: {
                boxSize: 2,
                rangeMode: 'Fixed',
                fields: 'Close'
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

    boxSizeChanged(input: wijmo.input.InputNumber) {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        if (this.chart) {
            this.chart.invalidate();
        }
    }

    rangeModeChanged(menu) {
        var input = this.inputNumber;
        if (menu.selectedValue === 'ATR') {
            input.format = 'n0';
            input.min = 2;
            input.max = this.data.length - 2;
            input.value = wijmo.clamp(input.value, 14, this.data.length - 2);
            input.step = 1;
        } else {
            input.format = 'n0';
            input.min = 1;
            input.max = null;
            input.step = 1;
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

/*

*/