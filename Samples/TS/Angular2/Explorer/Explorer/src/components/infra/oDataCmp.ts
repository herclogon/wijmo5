'use strict';

import { Component, EventEmitter, Inject, AfterViewInit, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DataSvc } from '../../services/DataSvc';
import { InputBaseCmp } from '../input/InputBaseCmp';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// FlexGrid Data component.
@Component({
    selector: 'grid-o-data-cmp',
    templateUrl: 'src/components/infra/oDataCmp.html'
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

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: ODataCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjInputModule],
    declarations: [ODataCmp],
})
export class ODataModule {
}
