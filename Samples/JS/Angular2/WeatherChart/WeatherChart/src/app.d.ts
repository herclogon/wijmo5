/// <reference path="../typings/globals/core-js/index.d.ts" />
import { AfterViewInit } from '@angular/core';
import { DataSvc } from './services/DataSvc';
export declare class AppCmp implements AfterViewInit {
    isViewInitialized: boolean;
    data: any[];
    palette: any[];
    pt: wijmo.Point;
    props: any[];
    markerContent: Function;
    chart1: wijmo.chart.FlexChart;
    chart2: wijmo.chart.FlexChart;
    chart3: wijmo.chart.FlexChart;
    selector: wijmo.chart.interaction.RangeSelector;
    constructor(dataSvc: DataSvc);
    ngAfterViewInit(): void;
    rangeChanged(): void;
    update(min: any, max: any): void;
    markerPositionChanged(chart: any, marker: any, point: any): void;
    changeMarker(curChart: any, marker: any): void;
    getMarkercontent(pt: any): string;
}
export declare class AppModule {
}
