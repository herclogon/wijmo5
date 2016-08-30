import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';
export declare class KagiCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    selectedSymbol: string;
    options: any;
    style: any;
    altStyle: any;
    title: string;
    chart: wijmo.chart.finance.FinancialChart;
    inputNumber: wijmo.input.InputNumber;
    constructor(dataSvc: DataSvc, tooltipSvc: TooltipSvc);
    selectedSymbolChanged(): void;
    chartRendered(): void;
    optionChanged(): void;
    reversalAmountChanged(input: wijmo.input.InputNumber): void;
    rangeModeChanged(menu: any): void;
    private setDataSource();
}
