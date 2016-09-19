'use strict';

import { Component, Inject, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../services/DataSvc';
import { CustomComponentsModule } from '../customizedComponents/CustomComponentsModule';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { EditableDateRenderer } from '../cellTemplates/EditableDateRenderer';
import { SelectionType } from '../cellTemplates/EditableSelectionRenderer';
import { EditableStringRenderer } from '../cellTemplates/EditableStringRenderer';

//Component2.
@Component({
    selector: 'aggregated-grid-view',
    templateUrl: 'src/views/aggregatedGridView.html',
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

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: AggregatedGridView }
]);

@NgModule({
    imports: [CommonModule, routing, FormsModule, WjInputModule, CustomComponentsModule],
    declarations: [AggregatedGridView],
    entryComponents: [EditableDateRenderer, EditableStringRenderer]
})
export class AggregatedGridViewModule {
}