/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare module FlexChartZoom {
    class AppCmp {
        data: any[];
        mouseAction: string;
        interactiveAxes: string;
        disabled: boolean;
        isTouch: boolean;
        zoomChart: wijmo.chart.FlexChart;
        chartGestures: wijmo.chart.interaction.ChartGestures;
        constructor(dataSvc: DataSvc);
        resetAxes(): void;
        rangeChanged(): void;
    }
}
