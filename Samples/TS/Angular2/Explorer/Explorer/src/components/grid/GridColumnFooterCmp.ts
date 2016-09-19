'use strict';


import { Component, EventEmitter, Inject, ViewChild, Input, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { RouterModule } from '@angular/router';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { DataSvc } from '../../services/DataSvc';

// FlexGrid Column Footer component.
@Component({
    selector: 'grid-column-footer-cmp',
    templateUrl: 'src/components/grid/gridColumnFooterCmp.html'
})

export class GridColumnFooterCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }

    // add a footer row to display column aggregates below the data
    addFooterRow(flexGrid: wijmo.grid.FlexGrid) {
        var row = new wijmo.grid.GroupRow(); // create a GroupRow to show aggregates
        flexGrid.columnFooters.rows.push(row); // add the row to the column footer panel
        flexGrid.bottomLeftCells.setCellData(0, 0, '\u03A3'); // sigma on the header
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridColumnFooterCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridModule],
    declarations: [GridColumnFooterCmp],
})
export class GridColumnFooterModule {
}


