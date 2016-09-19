/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    data: wijmo.collections.CollectionView;
    countryMap: wijmo.grid.DataMap;
    protected dataSvc: DataSvc;
    private _downloadsColumnFilterType;
    private _culture;
    filter: wijmo.grid.filter.FlexGridFilter;
    constructor(dataSvc: DataSvc);
    downloadsColumnFilterType: wijmo.grid.filter.FilterType;
    culture: string;
    saveFilter(): void;
    restoreFilter(): void;
    initialized(s: wijmo.grid.FlexGrid, e: any): void;
}
export declare class AppModule {
}
