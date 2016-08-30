'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';
import * as wjNg2FinAnalytics from 'wijmo/wijmo.angular2.chart.finance.analytics';

import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';

//Overlays sample component
@Component({
    selector: 'overlays-cmp',
    templateUrl: 'src/components/analytics/OverlaysCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
        wjNg2Input.WjComboBox, wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
        wjNg2FinAnalytics.WjFlexChartBollingerBands, wjNg2FinAnalytics.WjFlexChartEnvelopes, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class OverlaysCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    overlays: any[];
    item: string;
    data: any[];
    title: string;
    selectedSymbol: string;
    selectedOverlay: string;
    properties: any;
    // references control in the view
    @ViewChild('chart') chart: wijmo.chart.finance.FinancialChart;

    constructor( @Inject(DataSvc) dataSvc: DataSvc, @Inject(TooltipSvc) tooltipSvc: TooltipSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.tooltipSvc = tooltipSvc;
        this.dataList = dataSvc.getDataList();
        this.overlays = dataSvc.getOverlayList();
        this.selectedSymbol = this.dataList[0].symbol;
        this.selectedOverlay = this.overlays[0].abbreviation;
        this.setDataSource();
        this.title = 'Overlays';
        this.properties = {
            // Bollinger Bands
            bollingerPeriod: 20,
            bollingerMultiplier: 2,

            // Moving Average Envelopes
            envelopePeriod: 20,
            envelopeType: 'Simple',
            envelopeSize: 0.03
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

    private setDataSource() {
        var symbol = this.selectedSymbol;

        this.dataSvc.getData(symbol).subscribe(data => {
            this.data = data;
        });
    }

    bpChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.properties.bollingerPeriod = input.value;
    };

    bmChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.properties.bollingerMultiplier = input.value;
    };

    esChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.properties.envelopeSize = input.value;
    };

    epChanged = (input: wijmo.input.InputNumber) => {
        if (input.value < input.min || input.value > input.max) {
            return;
        }
        this.properties.envelopePeriod = input.value;
    };
}