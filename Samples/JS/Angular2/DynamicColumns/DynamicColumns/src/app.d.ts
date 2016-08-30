/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class AppCmp {
    data: wijmo.collections.CollectionView;
    columnsAvailable: wijmo.collections.CollectionView;
    columns: wijmo.collections.CollectionView;
    flex: wijmo.grid.FlexGrid;
    constructor(dataSvc: DataSvc);
    addColumn(): void;
    removeColumn(): void;
    moveColumn(offset: any): void;
    draggedColumn(s: wijmo.grid.FlexGrid): void;
}
