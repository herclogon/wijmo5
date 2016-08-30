import { DataSvc } from './../services/DataSvc';
export declare class MarkerCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;
    changeContent: Function;
    changeYContent: Function;
    changeXContent: Function;
    pt: wijmo.Point;
    markcontents: any;
    pOffset: wijmo.Rect;
    chart: wijmo.chart.finance.FinancialChart;
    constructor(dataSvc: DataSvc);
    midPosChanged(event: any): void;
    chartRendered(): void;
    private _markershowing(lineMarkers, visible);
    private _getMarkerContents(pt);
    private setDataSource();
}
