import { DataSvc } from './../services/DataSvc';
export declare class AnimationCmp {
    dataSvc: DataSvc;
    data: any[];
    header: string;
    footer: string;
    chartType: string;
    easing: string;
    duration: number;
    bindingY: string;
    bindingYs: any;
    chart: wijmo.chart.finance.FinancialChart;
    animation: wijmo.chart.animation.ChartAnimation;
    constructor(dataSvc: DataSvc);
    private setDataSource();
    ngAfterViewInit(): void;
    typeChanged(menu: any): void;
    refreshChart(): void;
    durationChanged: (input: wijmo.input.InputNumber) => void;
}
