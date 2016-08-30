import { DataSvc } from '../services/DataSvc';
import { EditableDateRenderer } from '../cellTemplates/EditableDateRenderer';
import { SelectionType } from '../cellTemplates/EditableSelectionRenderer';
import { EditableStringRenderer } from '../cellTemplates/EditableStringRenderer';
export declare class AggregatedGridView {
    data: any[];
    editableDateRenderer: typeof EditableDateRenderer;
    editableStringRenderer: typeof EditableStringRenderer;
    selectionType: SelectionType;
    SelectionTypeEnum: typeof SelectionType;
    constructor(dataSvc: DataSvc);
}
