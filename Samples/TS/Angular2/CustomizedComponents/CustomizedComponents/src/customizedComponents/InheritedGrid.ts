'use strict';

import { Component, Inject, Injector, ElementRef, AfterContentInit, Input } from '@angular/core';
import {WjComponent, Ng2Utils} from 'wijmo/wijmo.angular2.directiveBase';
import * as wjGrid from 'wijmo/wijmo.angular2.grid';
import { SelectionType } from '../cellTemplates/EditableSelectionRenderer';

// Custom grid component implemented by deriving from the WjFlexGrid component.
//
// The WjComponent decorator merges the definitions made for this class with the definitions for
// the base class decorator.
@WjComponent({
    selector: 'inherited-grid',
    // We would not specify a template at all if we would like to create just an inherited grid component,
    // the template will be automatically inherited from the base WjFlexGrid component decorator.
    // But we want to create a grid with a predefined Select column, so we define a custom template
    // that includes the Select column definition, see the template definition in html file for details.
    templateUrl: 'src/customizedComponents/inheritedGrid.html',
    // We need to specify only properties added in this class, and they will be merged with properties
    // defined for the WjFlexGrid component.
    inputs: ['selectionType', 'isEditable']
})
export class InheritedGrid extends wjGrid.WjFlexGrid {
    private _showSelectColumn = true;
    private _isEditable = true;
    selectionType = SelectionType.Single;

    constructor( @Inject(ElementRef) elRef: ElementRef, @Inject(Injector) injector: Injector) {
        super(elRef, injector);
        // Disable cell selection.
        this.selectionMode = wijmo.grid.SelectionMode.None;
        // Disables standard cell editing functionality.
        this.isReadOnly = true;
    }

    // Indicates whether cell editing is enabled.
    get isEditable(): boolean {
        return this._isEditable;
    }
    set isEditable(value: boolean) {
        if (this._isEditable != value) {
            this._isEditable = value;
            this.invalidate();
        }
    }

    // Overrides the onFormatItem method and adds the logic that enables or disables cell editing based 
    // on the isEditable property value.
    onFormatItem(e: wijmo.grid.FormatItemEventArgs) {
        super.onFormatItem(e);
        if (e.panel.cellType === wijmo.grid.CellType.Cell) {
            let column = <wijmo.grid.Column>this.columns[e.col];
            wijmo.enable(e.cell, this.isEditable || column.name === 'select');
        }
    }
}


