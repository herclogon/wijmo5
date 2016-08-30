'use strict';

import { Component, Inject } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';
import {InheritedGrid} from '../customizedComponents/InheritedGrid';
import * as wjInput from 'wijmo/wijmo.angular2.input';
import * as wjGrid from 'wijmo/wijmo.angular2.grid';
import * as wjCore from 'wijmo/wijmo.angular2.core';
import {EditableDateRenderer} from '../cellTemplates/EditableDateRenderer';
import {EditableSelectionRenderer, SelectionType} from '../cellTemplates/EditableSelectionRenderer';
import {EditableStringRenderer} from '../cellTemplates/EditableStringRenderer';

//Component2.
@Component({
    selector: 'inherited-grid-view',
    templateUrl: 'src/views/inheritedGridView.html',
    directives: [InheritedGrid, wjGrid.WjFlexGridColumn, wjGrid.WjFlexGridCellTemplate, 
        wjCore.WjComponentLoader, wjInput.WjMenu, wjInput.WjMenuItem,
        EditableStringRenderer, EditableDateRenderer,
        CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class InheritedGridView {
    data: any[];
    // Row selection type
    selectionType = SelectionType.Single;
    // References SelectionType enum to use it in markup.
    SelectionTypeEnum = SelectionType;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.data = dataSvc.getData(150, false);
    }
}

