/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class StandaloneCmp {
    protected dataSvc: DataSvc;
    data: any[];
    sheets: any[];
    selectedSheetIndex: number;
    flexSheet: wijmo.grid.sheet.FlexSheet;
    constructor(dataSvc: DataSvc);
    flexInitialized(flexSheet: wijmo.grid.sheet.FlexSheet): void;
    save(): void;
    load(): void;
    changeSelectedSheet(e: any): void;
    private _initDataMapForBindingSheet(flexSheet);
    private _buildDataMap(items);
}
