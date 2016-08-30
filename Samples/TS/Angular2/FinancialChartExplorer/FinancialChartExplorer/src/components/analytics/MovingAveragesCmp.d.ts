import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';
export declare class MovingAveragesCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    selectedSymbol: string;
    title: string;
    shortProps: any;
    longProps: any;
    chart: wijmo.chart.finance.FinancialChart;
    constructor(dataSvc: DataSvc, tooltipSvc: TooltipSvc);
    chartRendered(): void;
    private setDataSource();
    shortPeriodChanged: (input: wijmo.input.InputNumber) => void;
    longPeriodChanged: (input: wijmo.input.InputNumber) => void;
}
