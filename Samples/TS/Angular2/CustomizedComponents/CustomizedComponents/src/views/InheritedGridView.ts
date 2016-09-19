'use strict';

import { Component, Inject, NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../services/DataSvc';
import { CustomComponentsModule } from '../customizedComponents/CustomComponentsModule';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';

import { SelectionType } from '../cellTemplates/EditableSelectionRenderer';

//Component2.
@Component({
    selector: 'inherited-grid-view',
    templateUrl: 'src/views/inheritedGridView.html',
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


const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: InheritedGridView }
]);

@NgModule({
    imports: [CommonModule, routing, FormsModule, WjInputModule, WjGridModule, WjCoreModule, CustomComponentsModule],
    declarations: [InheritedGridView],
})
export class InheritedGridViewModule {
}