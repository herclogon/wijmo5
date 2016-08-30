import { DataSvc } from './../../services/DataSvc';
export declare class MarkersCmp {
    dataSvc: DataSvc;
    dataList: any[];
    item: string;
    data: any[];
    selectedSymbol: string;
    isTouch: boolean;
    title: string;
    properties: any;
    snapping: boolean;
    pt: any;
    chart: wijmo.chart.finance.FinancialChart;
    marker: wijmo.chart.LineMarker;
    constructor(dataSvc: DataSvc);
    chartRendered(): void;
    positionChanged(event: any): void;
    snappingChanged(): void;
    private setDataSource();
    private snappingHandler(e);
}
