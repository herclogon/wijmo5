'use strict';


import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// FlexGrid No Dctv component.
@Component({
    selector: 'grid-no-dctv-cmp',
    templateUrl: 'src/components/grid/gridNoDctvCmp.html'
})

export class GridNoDctvCmp extends GridBaseCmp {
    flex: wijmo.grid.FlexGrid;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }

    ngAfterViewInit() {
        if (!this.flex) {

            // create flex using a jQuery id selector
            this.flex = new wijmo.grid.FlexGrid('#flexNoDctv');

            // create flex using an element (same thing really)
            //var e = $('#flexNoDctv')[0];
            //flex = new wijmo.grid.FlexGrid(e);

            // populate the grid with the grid's own properties
            var data = [];
            for (var prop in this.flex) {
                if (prop.indexOf('_') != 0) {
                    var val = this.flex[prop];
                    var type = val instanceof wijmo.Event ? 'Event'
                        : val instanceof wijmo.grid.CellRange ? 'CellRange'
                            : val instanceof wijmo.Point ? 'Point'
                                : val instanceof wijmo.Size ? 'Size'
                                    : val instanceof wijmo.collections.ObservableArray ? 'ObservableArray'
                                        : typeof (val);
                    if (!wijmo.isFunction(val)) {
                        data.push({
                            name: prop,
                            type: type,
                            value: val ? val.toString() : ''
                        });
                    }
                }
            }
            this.flex.itemsSource = data;
            this.flex.autoSizeColumns();
        }
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridNoDctvCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridModule, WjInputModule],
    declarations: [GridNoDctvCmp],
})
export class GridNoDctvModule {
}
