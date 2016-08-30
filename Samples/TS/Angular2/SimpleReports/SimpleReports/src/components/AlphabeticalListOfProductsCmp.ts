'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';

@Component({
    selector: 'alphabetical-list-Of-products-cmp',
    templateUrl: 'src/components/alphabeticalListOfProductsCmp.html',
    directives: [CORE_DIRECTIVES]
})

export class AlphabeticalListOfProductsCmp  {

    products: wijmo.odata.ODataCollectionView;
    categories: wijmo.odata.ODataCollectionView;
    today = new Date();

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        //super();
        this.products = dataSvc.products;
        this.categories = dataSvc.categories;
    }

    // get an element in a CollectionView by looking up a property value
    find(view, prop, val) {
        for (var i = 0; i < view.items.length; i++) {
            var item = view.items[i];
            if (item[prop] == val) {
                return item;
            }
        }
        return null;
    }

}


