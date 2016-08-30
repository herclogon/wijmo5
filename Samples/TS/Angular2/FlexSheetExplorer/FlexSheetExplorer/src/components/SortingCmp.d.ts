import { DataSvc } from '../services/DataSvc';
import { BindingFlexSheetBaseCmp } from './BindingFlexSheetBaseCmp';
export declare class SortingCmp extends BindingFlexSheetBaseCmp {
    sortManager: wijmo.grid.sheet.SortManager;
    columns: string[];
    constructor(dataSvc: DataSvc);
    flexSheetInit(flexSheet: wijmo.grid.sheet.FlexSheet): void;
    commitSort(): void;
    cancelSort(): void;
    addSortLevel(): void;
    deleteSortLevel(): void;
    copySortLevel(): void;
    moveSortLevel(offset: any): void;
    applySortColumnIndex(e: any, sortItem: any): void;
    applySortAscending(e: any, sortItem: any): void;
    private _getColumns();
}
