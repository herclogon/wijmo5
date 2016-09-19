'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'product-by-catalog-cmp',
    templateUrl: 'src/components/productsByCategoryCmp.html'
})

export class ProductsByCategoryCmp {

    products: wijmo.odata.ODataCollectionView;
    categories: wijmo.odata.ODataCollectionView;
    today = new Date();

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.products = dataSvc.products;
        this.categories = dataSvc.categories;
    }

    // get an array of elements from a CollectionView by looking up a property value
    select(view: any, prop: string, val: string): any[] {
        var arr = [];
        for (var i = 0; i < view.items.length; i++) {
            var item = view.items[i];
            if (item[prop] == val) {
                arr.push(item);
            }
        }
        return arr;
    }
}
const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ProductsByCategoryCmp }
]);

@NgModule({
    imports: [CommonModule, routing],
    declarations: [ProductsByCategoryCmp],
})
export class ProductsByCategoryModule {
}

