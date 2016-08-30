import { DataSvc } from './../../services/DataSvc';
import { TooltipSvc } from './../../services/TooltipSvc';
export declare class EventAnnotationsCmp {
    dataSvc: DataSvc;
    tooltipSvc: TooltipSvc;
    dataList: any[];
    item: string;
    data: any[];
    annotations: any[];
    selectedSymbol: string;
    title: string;
    chart: wijmo.chart.finance.FinancialChart;
    selectorChart: wijmo.chart.finance.FinancialChart;
    selector: wijmo.chart.interaction.RangeSelector;
    constructor(dataSvc: DataSvc, tooltipSvc: TooltipSvc);
    selectedSymbolChanged(): void;
    selectorChartRendered(): void;
    chartRendered(): void;
    rangeChanged(): void;
    private setDataSource();
    private setAnnotations();
}
