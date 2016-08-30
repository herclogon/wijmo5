import { DataSvc } from '../services/DataSvc';
import { SelectionType } from '../cellTemplates/EditableSelectionRenderer';
export declare class InheritedGridView {
    data: any[];
    selectionType: SelectionType;
    SelectionTypeEnum: typeof SelectionType;
    constructor(dataSvc: DataSvc);
}
