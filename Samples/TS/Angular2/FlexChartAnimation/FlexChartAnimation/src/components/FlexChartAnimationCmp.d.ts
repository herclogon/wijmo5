import { DataSvc } from './../services/DataSvc';
export declare class FlexChartAnimationCmp {
    dataService: DataSvc;
    data: wijmo.collections.ObservableArray;
    flexChartPoints: number;
    title: string;
    duration: number;
    chartType: string;
    easing: string;
    animationMode: string;
    flexChart: wijmo.chart.FlexChart;
    animation: wijmo.chart.animation.ChartAnimation;
    constructor(dataSvc: DataSvc);
    _setDataSource(): void;
    resetChartData(): void;
    itemAdd(args: any): void;
    itemRemove(args: any): void;
    func(oper: any, idx: any): void;
    addChartSeriesFirstPoint: () => void;
    addChartSeriesLastPoint: () => void;
    removeChartSeriesFirstPoint: () => void;
    removeChartSeriesLastPoint: () => void;
    valueChanged: (sender: wijmo.input.InputNumber) => void;
    addChartSeries: () => void;
    removeChartSeries: () => void;
    animationModeChanged(args: any): void;
}
