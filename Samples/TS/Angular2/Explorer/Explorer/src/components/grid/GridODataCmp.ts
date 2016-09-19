'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';

// FlexGrid Data component.
@Component({
    selector: 'grid-o-data-cmp',
    templateUrl: 'src/components/grid/gridODataCmp.html'
})

export class GridODataCmp extends GridBaseCmp {

    categories: wijmo.collections.CollectionView;
    products: wijmo.collections.CollectionView;
    supplierMap: wijmo.grid.DataMap;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this.categories = new wijmo.collections.CollectionView();
        this.products = new wijmo.collections.CollectionView();
    }

    ngAfterViewInit() {
        if (this.flex) {
            this.dataSvc.initOData(this.categories, this.products, this.supplierMap);
        }
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridODataCmp }
]);
@NgModule({
    imports: [CommonModule, routing, WjGridModule],
    declarations: [GridODataCmp],
})
export class GridODataModule {
}

