import { AfterViewInit } from '@angular/core';
import { DataSvc } from './../services/DataSvc';
export declare class WaterfallCmp implements AfterViewInit {
    itemsSource: wijmo.collections.ObservableArray;
    title: string;
    relativeData: Boolean;
    connectorLines: Boolean;
    showTotal: Boolean;
    showIntermediateTotal: Boolean;
    styles: any;
    waterfall: wijmo.chart.analytics.Waterfall;
    waterfallChart: wijmo.chart.FlexChart;
    constructor(dataSvc: DataSvc);
    ngAfterViewInit(): void;
}
export declare class WaterfallModule {
}
