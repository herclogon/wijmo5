import { DataSvc } from './../services/DataSvc';
export declare class MovingAverageCmp {
    itemsSource: wijmo.collections.ObservableArray;
    title: string;
    period: number;
    type: string;
    name: string;
    constructor(dataSvc: DataSvc);
    periodChanged: (input: wijmo.input.InputNumber) => void;
}
export declare class MovingAverageModule {
}
