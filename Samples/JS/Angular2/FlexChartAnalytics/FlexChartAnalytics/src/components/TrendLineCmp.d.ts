import { AfterViewInit } from '@angular/core';
import { DataSvc } from './../services/DataSvc';
export declare class TrendLineCmp implements AfterViewInit {
    itemsSource: wijmo.collections.ObservableArray;
    title: string;
    order: number;
    fitType: string;
    name: string;
    showEquation: boolean;
    markerContent: Function;
    trendLine: wijmo.chart.analytics.TrendLine;
    trendLineChart: wijmo.chart.FlexChart;
    constructor(dataSvc: DataSvc);
    ngAfterViewInit(): void;
    moving: boolean;
    hti: any;
    threshold: number;
    el: any;
    dp: any;
    ptIdx: any;
    mouseMove(e: any): void;
    mouseDown(e: any): void;
    orderChanged: (input: wijmo.input.InputNumber) => void;
    update(): void;
}
