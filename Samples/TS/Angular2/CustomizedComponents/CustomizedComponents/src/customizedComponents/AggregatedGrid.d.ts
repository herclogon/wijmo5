import { Type, QueryList } from '@angular/core';
import { SelectionType } from '../cellTemplates/EditableSelectionRenderer';
export declare class AggregatedGrid {
    private _isEditable;
    itemsSource: any;
    selectionType: SelectionType;
    SelectionTypeEnum: typeof SelectionType;
    flex: wijmo.grid.FlexGrid;
    columns: QueryList<AggregatedGridColumn>;
    onFormatItem: (e: wijmo.grid.FormatItemEventArgs) => void;
    constructor();
    isEditable: boolean;
    private _onFormatItem(e);
}
export declare class AggregatedGridColumn {
    cellTemplate: Type;
}
