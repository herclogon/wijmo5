/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    cvGettingStarted: wijmo.collections.CollectionView;
    cvCRM: wijmo.collections.CollectionView;
    cvSorting: wijmo.collections.CollectionView;
    cvFiltering: wijmo.collections.CollectionView;
    cvGrouping: wijmo.collections.CollectionView;
    cvEditing: wijmo.collections.CollectionView;
    cvPaging: wijmo.collections.CollectionView;
    cvTrackingChanges: wijmo.collections.CollectionView;
    cvTrackingChangesExtra: wijmo.collections.CollectionView;
    groupItems: any;
    fieldNames: string[];
    currentItem: any;
    current: any;
    protected dataSvc: DataSvc;
    private _selectedGroupOpt;
    private _toFilter;
    private _thisFilterFunction;
    private _filter;
    constructor(dataSvc: DataSvc);
    filter: string;
    selectedGroupOpt: string;
    isGroupItem(item: any): boolean;
    avgAmount(item: any): string;
    private _addGroup(g);
    stopCurrent(): void;
    reset(): void;
    toggleSort(fieldName: string): void;
    getSort(propName: string): string;
    confirmUpdate(): void;
    cancelUpdate(): void;
    private _applyFilter();
    private _filterFunction(item);
    private _stopCurrentIn4th(sender, e);
    private _applyGrouping();
    private _findGroup(propName);
}
