'use strict';


import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { RouterModule } from '@angular/router';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { DataSvc } from '../../services/DataSvc';

// FlexGrid Column Layout component.
@Component({
    selector: 'grid-column-layout-cmp',
    templateUrl: 'src/components/grid/gridColumnLayoutCmp.html'
})

export class GridColumnLayoutCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }

    // ** save/restore column layout
    saveColumnLayout() {
        if (localStorage) {
            localStorage['columns'] = this.flex.columnLayout;
            console.log('** Saved layout: ' + this.flex.columnLayout);
        }
    }
    loadColumnLayout() {
        if (localStorage) {
            if (!localStorage['columns']) {
                alert('Please save a layout first...');
            } else {
                this.flex.columnLayout = localStorage['columns'];
                console.log('** Loaded layout: ' + this.flex.columnLayout);
            }
        }
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridColumnLayoutCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridModule],
    declarations: [GridColumnLayoutCmp],
})
export class GridColumnLayoutModule {
}


