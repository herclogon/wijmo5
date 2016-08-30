'use strict';

import { Component, EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'product-catalog-cmp',
    templateUrl: 'src/components/productCatalogCmp.html',
    directives: [CORE_DIRECTIVES]
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


