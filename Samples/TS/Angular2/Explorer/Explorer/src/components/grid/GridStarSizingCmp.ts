'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// FlexGrid Star Sizing component.
@Component({
    selector: 'grid-star-sizing-cmp',
    templateUrl: 'src/components/grid/gridStarSizingCmp.html'
})

export class GridStarSizingCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridStarSizingCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridModule, WjInputModule],
    declarations: [GridStarSizingCmp],
})
export class GridStarSizingModule {
}
