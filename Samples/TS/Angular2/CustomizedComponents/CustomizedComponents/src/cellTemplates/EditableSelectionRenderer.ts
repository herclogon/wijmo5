'use strict';

import { Component, Inject, Input, OnInit } from '@angular/core';

export enum SelectionType {
    Single = 0,
    Multiple = 1
}

// Selection cell renderer component that allows to edit a cell without switching to the cell edit mode.
@Component({
    selector: 'editable-selection-renderer',
    templateUrl: 'src/cellTemplates/editableSelectionRenderer.html',
})
export class EditableSelectionRenderer {
    private _selectionType: SelectionType;
    // The 'cell' object provided by the wjFlexGridCellTemplate directive.
    @Input() cell: any;
    // References SelectionType enum to give an access to its members in markup.
    SelectionTypeEnum = SelectionType;

    constructor() {
    }

    // Defines row selection type - Single/Multi.
    @Input()
    get selectionType(): SelectionType {
        return this._selectionType;
    }
    set selectionType(value: SelectionType) {
        this._selectionType = wijmo.asEnum(value, SelectionType, true);
    }

    // Single row selection handler - set this cell value to true and all other cell values to false.
    singleSelectChanged(e: any) {
        if (e.target.checked) {
            let row = <wijmo.grid.Row>this.cell.row,
                col = <wijmo.grid.Column>this.cell.col,
                grid = row.grid;
            for (let i = 0; i < grid.rows.length; i++) {
                grid.setCellData(i, col.index, row.index === i, false);
            }
            grid.invalidate(false);
        }
    }

}

