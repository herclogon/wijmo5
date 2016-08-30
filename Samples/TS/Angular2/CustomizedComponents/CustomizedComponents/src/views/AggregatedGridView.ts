'use strict';

import { Component, Inject } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';
import {AggregatedGrid, AggregatedGridColumn} from '../customizedComponents/AggregatedGrid';
import * as wjInput from 'wijmo/wijmo.angular2.input';
import {EditableDateRenderer} from '../cellTemplates/EditableDateRenderer';
import {EditableSelectionRenderer, SelectionType} from '../cellTemplates/EditableSelectionRenderer';
import {EditableStringRenderer} from '../cellTemplates/EditableStringRenderer';

//Component2.
@Component({
    selector: 'aggregated-grid-view',
    templateUrl: 'src/views/aggregatedGridView.html',
    directives: [AggregatedGrid, AggregatedGridColumn, CORE_DIRECTIVES, FORM_DIRECTIVES,
        wjInput.WjMenu, wjInput.WjMenuItem, wjInput.WjInputDate]
})

export class AggregatedGridView {
    // data array
    data: any[];
    // cell render component types, to use in markup
    editableDateRenderer = EditableDateRenderer;
    editableStringRenderer = EditableStringRenderer;
    // type of selection provided by the Select column
    selectionType = SelectionType.Single;
    // References SelectionType enum to use it in markup.
    SelectionTypeEnum = SelectionType;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.data = dataSvc.getData(150, false);
    }
}

