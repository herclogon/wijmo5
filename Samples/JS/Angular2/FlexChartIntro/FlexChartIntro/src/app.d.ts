/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    countries: string[];
    data: {
        country: string;
        downloads: number;
        sales: number;
        expenses: number;
    }[];
    chartType: string;
    stacking: string;
    legendPosition: string;
    rotated: boolean;
    header: string;
    footer: string;
    titleX: string;
    titleY: string;
    tooltipContent: string;
    selectionMode: string;
    trafficData: wijmo.collections.ObservableArray;
    series1Visible: wijmo.chart.SeriesVisibility;
    series2Visible: wijmo.chart.SeriesVisibility;
    series3Visible: wijmo.chart.SeriesVisibility;
    _toAddData: any;
    _interval: any;
    protected dataSvc: DataSvc;
    constructor(dataSvc: DataSvc);
    setInterval: (interval: any) => void;
    seriesVisible: (idx: any, checked: any) => void;
    private _addTrafficItem;
}
