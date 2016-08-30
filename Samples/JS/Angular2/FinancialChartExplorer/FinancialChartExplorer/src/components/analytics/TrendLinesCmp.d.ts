import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';
export declare class TrendLinesCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    selectedSymbol: string;
    title: string;
    properties: any;
    chart: wijmo.chart.finance.FinancialChart;
    constructor(dataSvc: DataSvc, tooltipSvc: TooltipSvc);
    chartRendered(): void;
    private setDataSource();
    orderChanged: (input: wijmo.input.InputNumber) => void;
    sampleCountChanged: (input: wijmo.input.InputNumber) => void;
}
