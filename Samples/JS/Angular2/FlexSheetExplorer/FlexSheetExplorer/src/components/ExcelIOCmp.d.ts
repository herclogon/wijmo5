import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
export declare class ExcelIOCmp extends BindingFlexSheetBaseCmp {
    fileName: string;
    constructor(dataSvc: DataSvc);
    flexSheetInit(flexSheet: wijmo.grid.sheet.FlexSheet): void;
    load(): void;
    save(): void;
}
