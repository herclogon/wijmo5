/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    protected dataSvc: DataSvc;
    data: wijmo.collections.CollectionView;
    constructor(dataSvc: DataSvc);
    groupBy(groupBy: string): void;
    initGrid(s: wijmo.grid.FlexGrid): void;
}
export declare class AppModule {
}
