import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';
export declare class OverlaysCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    overlays: any[];
    item: string;
    data: any[];
    title: string;
    selectedSymbol: string;
    selectedOverlay: string;
    properties: any;
    chart: wijmo.chart.finance.FinancialChart;
    constructor(dataSvc: DataSvc, tooltipSvc: TooltipSvc);
    selectedSymbolChanged(): void;
    chartRendered(): void;
    private setDataSource();
    bpChanged: (input: wijmo.input.InputNumber) => void;
    bmChanged: (input: wijmo.input.InputNumber) => void;
    esChanged: (input: wijmo.input.InputNumber) => void;
    epChanged: (input: wijmo.input.InputNumber) => void;
}
