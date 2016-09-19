/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    protected dataSvc: DataSvc;
    data: wijmo.collections.CollectionView;
    cvGroup: wijmo.collections.CollectionView;
    cvFilter: wijmo.collections.CollectionView;
    cvPaging: wijmo.collections.CollectionView;
    cvMaster: wijmo.collections.CollectionView;
    selectionMode: string;
    treeData: [{}];
    private _groupBy;
    private _filter;
    private _toFilter;
    constructor(dataSvc: DataSvc);
    groupBy: string;
    filter: string;
    toggleFreeze(flex: wijmo.grid.FlexGrid): void;
    getAmountColor(amount: number): string;
    sortedColumn(flex: wijmo.grid.FlexGrid): void;
    private _applyGroupBy();
    private _filterFunction(item);
    private _sortItem(item, view, childItemsPath);
}
export declare class AppModule {
}
