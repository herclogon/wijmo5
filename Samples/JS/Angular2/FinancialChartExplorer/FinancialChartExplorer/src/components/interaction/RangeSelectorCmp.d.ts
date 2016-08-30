import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';
export declare class RangeSelectorCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    selectedSymbol: string;
    title: string;
    customStyle: boolean;
    chart: wijmo.chart.finance.FinancialChart;
    selectorChart: wijmo.chart.finance.FinancialChart;
    selector: wijmo.chart.interaction.RangeSelector;
    constructor(dataSvc: DataSvc, tooltipSvc: TooltipSvc);
    selectedSymbolChanged(): void;
    selectorChartRendered(): void;
    chartRendered(): void;
    rangeChanged(): void;
    private setDataSource();
}
