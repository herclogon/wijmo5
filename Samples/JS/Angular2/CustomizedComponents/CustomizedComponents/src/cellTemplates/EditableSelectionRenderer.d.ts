export declare enum SelectionType {
    Single = 0,
    Multiple = 1,
}
export declare class EditableSelectionRenderer {
    private _selectionType;
    cell: any;
    SelectionTypeEnum: typeof SelectionType;
    constructor();
    selectionType: SelectionType;
    singleSelectChanged(e: any): void;
}
