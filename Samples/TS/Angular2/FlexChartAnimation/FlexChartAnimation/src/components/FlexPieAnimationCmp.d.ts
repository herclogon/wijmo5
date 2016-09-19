import { DataSvc } from './../services/DataSvc';
export declare class FlexPieAnimationCmp {
    dataService: DataSvc;
    data: wijmo.collections.ObservableArray;
    flexPiePoints: number;
    title: string;
    duration: number;
    innerRadius: number;
    easing: string;
    animationMode: string;
    insertPieIdx: number;
    flexPie: wijmo.chart.FlexPie;
    animation: wijmo.chart.animation.ChartAnimation;
    constructor(dataSvc: DataSvc);
    _setDataSource(): void;
    resetChartData(): void;
    addSlice: () => void;
    removeSlice: () => void;
    animationModeChanged(): void;
    innerRadiusChanged: (sender: wijmo.input.InputNumber) => void;
    durationChanged: (sender: wijmo.input.InputNumber) => void;
}
export declare class FlexPieAnimationModule {
}
