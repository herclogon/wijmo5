/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    data: wijmo.collections.CollectionView;
    protected dataSvc: DataSvc;
    flex: wijmo.grid.FlexGrid;
    constructor(dataSvc: DataSvc);
}
export declare class AppModule {
}
