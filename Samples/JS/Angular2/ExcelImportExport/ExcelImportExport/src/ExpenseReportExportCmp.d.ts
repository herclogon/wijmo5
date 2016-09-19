/// <reference path="../typings/globals/core-js/index.d.ts" />
import { DataSvc } from './services/DataSvc';
export declare class ExpenseReportExportCmp {
    protected dataSvc: DataSvc;
    constructor(dataSvc: DataSvc);
    saveExpenses(): void;
}
export declare class AppModule {
}
