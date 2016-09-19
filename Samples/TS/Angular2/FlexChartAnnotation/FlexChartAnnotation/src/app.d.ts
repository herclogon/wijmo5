/// <reference path="../typings/globals/core-js/index.d.ts" />
import { AfterViewInit } from '@angular/core';
import { DataSvc } from './services/DataSvc';
export declare module FlexChartAnnotation {
    class AppCmp implements AfterViewInit {
        data: any[];
        basicData: any[];
        basic: any;
        advanced: any;
        axisXScrollbar: wijmo.chart.interaction.AxisScrollbar;
        volYAxis: wijmo.chart.Axis;
        advancedChart: wijmo.chart.FlexChart;
        al: wijmo.chart.annotation.AnnotationLayer;
        constructor(dataSvc: DataSvc);
        ngAfterViewInit(): void;
        _initAxisScrollbar(): void;
        _setQuoteDetailInfo(e: any): void;
        _clearDetail(): void;
        _setAnnotationText(al: any, name: any, text: any): void;
        _updateLastPoint(): void;
        _fromOADate(val: any): Date;
    }
}
export declare class AppModule {
}
