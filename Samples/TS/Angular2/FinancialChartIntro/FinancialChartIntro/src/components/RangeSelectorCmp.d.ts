import { DataSvc } from './../services/DataSvc';
export declare class RangeSelectorCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;
    stChart: wijmo.chart.finance.FinancialChart;
    rsChart: wijmo.chart.finance.FinancialChart;
    rangeSelector: wijmo.chart.interaction.RangeSelector;
    constructor(dataSvc: DataSvc);
    stRendered(): void;
    rsRendered(): void;
    rangeChanged(): void;
    private setDataSource();
}
