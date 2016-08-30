'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { AppTab, AppTabPane } from './AppTab';
import * as wjNg2FlexChartInteraction from 'wijmo/wijmo.angular2.chart.interaction';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';

import { DataSvc } from './../services/DataSvc';

//RangeSelector sample component
@Component({
    selector: 'range-selector-cmp',
    templateUrl: 'src/components/RangeSelectorCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries, wjNg2FlexChartInteraction.WjFlexChartRangeSelector,
        AppTab, AppTabPane, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class RangeSelectorCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;
    @ViewChild('stChart') stChart: wijmo.chart.finance.FinancialChart;
    @ViewChild('rsChart') rsChart: wijmo.chart.finance.FinancialChart;
    @ViewChild('rangeSelector') rangeSelector: wijmo.chart.interaction.RangeSelector;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
    }

    stRendered() {
        var stChart = this.stChart;

        if (!stChart) {
            return;
        }
        stChart.axisX.labels = false;
        stChart.axisX.axisLine = false;
        stChart.legend.position = 0;
        stChart.plotMargin = '60 30 0 50';

        stChart.tooltip.content = function (ht) {
            return 'Date: ' + ht.x + '<br/>' +
                'Open: ' + wijmo.Globalize.format(ht.item.open, 'n2') + '<br/>' +
                'High: ' + wijmo.Globalize.format(ht.item.high, 'n2') + '<br/>' +
                'Low: ' + wijmo.Globalize.format(ht.item.low, 'n2') + '<br/>' +
                'Close: ' + wijmo.Globalize.format(ht.item.close, 'n2') + '<br/>' +
                'Volume: ' + wijmo.Globalize.format(ht.item.volume, 'n0');
        };
    }

    rsRendered() {
        var rsChart = this.rsChart;

        if (!rsChart) {
            return;
        }
        rsChart.axisY.labels = false;
        rsChart.axisY.majorGrid = false;
        rsChart.tooltip.content = '';
        rsChart.plotMargin = '0 30 NaN 50';
    }

    rangeChanged() {
        if (this.stChart && this.rangeSelector) {
            this.stChart.axisX.min = this.rangeSelector.min;
            this.stChart.axisX.max = this.rangeSelector.max;
            this.stChart.invalidate();
        }
    }

    private setDataSource() {
        this.dataSvc.getData().subscribe(data => {
            this.data = data;
        });
    }
}