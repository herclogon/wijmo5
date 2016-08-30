import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';
export declare class IndicatorsCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    title: string;
    selectedSymbol: string;
    indicators: any[];
    selectedIndicator: string;
    properties: any;
    chart: wijmo.chart.finance.FinancialChart;
    indicatorChart: wijmo.chart.finance.FinancialChart;
    constructor(dataSvc: DataSvc, tooltipSvc: TooltipSvc);
    selectedSymbolChanged(s: any, e: any): void;
    chartRendered(s: any, e: any): void;
    fastSlowPeriodChanged(): void;
    smoothingPeriodChanged(): void;
    stochKPeriodChanged(): void;
    stochDPeriodChanged(): void;
    stochSmoothingPeriodChanged(): void;
    private setDataSource();
    atrPeriodChanged(input: wijmo.input.InputNumber): void;
    rsiPeriodChanged(input: wijmo.input.InputNumber): void;
    cciPeriodChanged(input: wijmo.input.InputNumber): void;
    wrPeriodChanged(input: wijmo.input.InputNumber): void;
}
