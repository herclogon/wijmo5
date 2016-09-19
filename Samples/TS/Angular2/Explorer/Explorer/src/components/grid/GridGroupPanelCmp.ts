'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjGridGrouppanelModule } from 'wijmo/wijmo.angular2.grid.grouppanel';

// FlexGrid group panel component.
@Component({
    selector: 'grid-group-panel-cmp',
    templateUrl: 'src/components/grid/gridGroupPanelCmp.html'
})

export class GridGroupPanelCmp extends GridBaseCmp {
    dataView: wijmo.collections.CollectionView;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc); 
        this.dataView = new wijmo.collections.CollectionView(this.data);
        this.dataView.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('product'));
        this.dataView.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('country'));       
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridGroupPanelCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjGridModule, WjInputModule, WjGridGrouppanelModule],
    declarations: [GridGroupPanelCmp],
})
export class GridGroupPanelModule {
}