import { DataSvc } from '../services/DataSvc';
export declare abstract class BindingFlexSheetBaseCmp {
    protected dataSvc: DataSvc;
    data: any[];
    flexSheet: wijmo.grid.sheet.FlexSheet;
    constructor(dataSvc: DataSvc);
    flexSheetInit(flexSheet: wijmo.grid.sheet.FlexSheet): void;
    private _initDataMapForBindingSheet(flexSheet);
    private _buildDataMap(items);
}
