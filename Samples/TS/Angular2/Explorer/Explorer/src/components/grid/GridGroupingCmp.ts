'use strict';


import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// FlexGrid Grouping sample component.
@Component({
    selector: 'grid-grouping-cmp',
    templateUrl: 'src/components/grid/gridGroupingCmp.html'
})

export class GridGroupingCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridGroupingCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjGridModule, WjInputModule],
    declarations: [GridGroupingCmp],
})
export class GridGroupingModule {
}
