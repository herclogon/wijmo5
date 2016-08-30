'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Data component.
@Component({
    selector: 'grid-o-data-cmp',
    templateUrl: 'src/components/grid/gridODataCmp.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn]
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


