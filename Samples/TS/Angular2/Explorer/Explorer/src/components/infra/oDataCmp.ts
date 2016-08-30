'use strict';

import { Component, EventEmitter, Inject, AfterViewInit } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from '../input/InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// FlexGrid Data component.
@Component({
    selector: 'grid-o-data-cmp',
    templateUrl: 'src/components/infra/oDataCmp.html',
    directives: [CORE_DIRECTIVES]
})

export class ODataCmp extends InputBaseCmp implements AfterViewInit {

    categories: wijmo.collections.CollectionView;
    products: wijmo.collections.CollectionView;
    supplierMap: wijmo.grid.DataMap;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this.categories = new wijmo.collections.CollectionView();
        this.products = new wijmo.collections.CollectionView();        
    }

    ngAfterViewInit() {
        this.dataSvc.initOData(this.categories, this.products, this.supplierMap);
    }

}


