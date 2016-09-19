'use strict';


import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, forwardRef, Type, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { RouterModule } from '@angular/router';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// FlexGrid Star Sizing component.
@Component({
    selector: 'grid-filter-cmp',
    templateUrl: 'src/components/grid/gridFilterCmp.html'
})

export class GridFilterCmp extends GridBaseCmp {

    @ViewChild('filter') gridFilter: wijmo.grid.filter.FlexGridFilter;
    private _revenueColumnFilterType = wijmo.grid.filter.FilterType.Condition;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        
    }

    get revenueColumnFilterType(): wijmo.grid.filter.FilterType {
        return this._revenueColumnFilterType;
    }
    set revenueColumnFilterType(value: wijmo.grid.filter.FilterType) {
        if (this._revenueColumnFilterType != value) {
            this._revenueColumnFilterType = value;
            var f = this.gridFilter;
            if (f) {
                var col = f.grid.columns.getColumn('amount'),
                    cf = f.getColumnFilter(col, true);
                cf.filterType = this._revenueColumnFilterType;
            }
        }
    }

    // create the filter and expose it to scope for customization
    initialized(s: wijmo.grid.FlexGrid, e: any) {
        this.gridFilter.filterChanging.addHandler(function () {
            console.log('filter changing');
        });
        this.gridFilter.filterChanged.addHandler(function () {
            console.log('filter changed');
        });
        this.gridFilter.filterApplied.addHandler(function () {
            console.log('filter applied');
        });
    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridFilterCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjGridFilterModule, WjGridModule, WjInputModule],
    declarations: [GridFilterCmp],
})
export class GridFilterModule {
}
