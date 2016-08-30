import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
export declare class FilteringCmp extends BindingFlexSheetBaseCmp {
    filterEnable: boolean;
    constructor(dataSvc: DataSvc);
    flexSheetInit(flexSheet: wijmo.grid.sheet.FlexSheet): void;
    showFilter(): void;
}
