/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class FlexGridImportExportCmp {
    protected dataSvc: DataSvc;
    data: any[];
    includeColumnHeader: boolean;
    constructor(dataSvc: DataSvc);
    flexGrid: wijmo.grid.FlexGrid;
    exportExcel(): void;
    importExcel(): void;
    updateGroup(flex: wijmo.grid.FlexGrid): void;
}
export declare class AppModule {
}
