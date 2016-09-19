'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'product-catalog-cmp',
    templateUrl: 'src/components/productCatalogCmp.html'
})

export class ProductCatalogCmp {

    products: wijmo.odata.ODataCollectionView;
    categories: wijmo.odata.ODataCollectionView;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.products = dataSvc.products;
        this.categories = dataSvc.categories;
    }

    // get an array of elements from a CollectionView by looking up a property value
    select(view: any, prop: string, val: string):any[] {
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
    { path: '', component: ProductCatalogCmp }
]);

@NgModule({
    imports: [CommonModule, routing],
    declarations: [ProductCatalogCmp],
})
export class ProductCatalogModule {
}
