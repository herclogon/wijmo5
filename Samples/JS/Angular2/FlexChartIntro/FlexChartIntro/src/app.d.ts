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
    funnelData: any;
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
    funnelChart: wijmo.chart.FlexChart;
    _toAddData: any;
    _interval: any;
    protected dataSvc: DataSvc;
    constructor(dataSvc: DataSvc);
    ngAfterViewInit(): void;
    setInterval: (interval: any) => void;
    seriesVisible: (idx: any, checked: any) => void;
    private _addTrafficItem;
    neckWidthChanged: (sender: wijmo.input.InputNumber) => void;
    neckHeightChanged: (sender: wijmo.input.InputNumber) => void;
    funnelTypeChanged: (sender: wijmo.input.Menu) => void;
}
export declare class AppModule {
}
