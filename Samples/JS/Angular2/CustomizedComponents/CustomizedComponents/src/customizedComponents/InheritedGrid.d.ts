import { Injector, ElementRef } from '@angular/core';
import * as wjGrid from 'wijmo/wijmo.angular2.grid';
import { SelectionType } from '../cellTemplates/EditableSelectionRenderer';
export declare class InheritedGrid extends wjGrid.WjFlexGrid {
    private _showSelectColumn;
    private _isEditable;
    selectionType: SelectionType;
    constructor(elRef: ElementRef, injector: Injector);
    isEditable: boolean;
    onFormatItem(e: wijmo.grid.FormatItemEventArgs): void;
}
