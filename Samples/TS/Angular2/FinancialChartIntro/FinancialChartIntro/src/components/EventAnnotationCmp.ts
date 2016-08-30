'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { AppTab, AppTabPane } from './AppTab';
import * as wjNg2FlexChartAnnotation from 'wijmo/wijmo.angular2.chart.annotation';
import * as wjNg2FinancialChart from 'wijmo/wijmo.angular2.chart.finance';

import { DataSvc } from './../services/DataSvc';

//EventAnnotation sample component
@Component({
    selector: 'event-annotation-cmp',
    templateUrl: 'src/components/EventAnnotationCmp.html',
    directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
        wjNg2FlexChartAnnotation.WjFlexChartAnnotationLayer, wjNg2FlexChartAnnotation.WjFlexChartAnnotationCircle,
        wjNg2FlexChartAnnotation.WjFlexChartAnnotationRectangle, wjNg2FlexChartAnnotation.WjFlexChartAnnotationEllipse,
        wjNg2FlexChartAnnotation.WjFlexChartAnnotationSquare, AppTab, AppTabPane, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class EventAnnotationCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
    }

    private setDataSource() {
        this.dataSvc.getData().subscribe(data => {
            this.data = data;
        });
    }
}