'use strict';

import { Component, EventEmitter, Inject, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { InputBaseCmp } from '../input/InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Wijmo TrackChanges component.
@Component({
    selector: 'grid-trackChanges-cmp',
    templateUrl: 'src/components/infra/trackChangesCmp.html'
})

export class TrackChangesCmp extends InputBaseCmp {

    data: wijmo.collections.CollectionView;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this._initData();
    }

    private _initData() {
        var items = this.dataSvc.getData(6);
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.amount = item.amount.toFixed(2) * 1;
            item.start = new Date(item.start.getFullYear(), item.start.getMonth(), item.start.getDate());
        }

        // create CollectionView
        this.data = new wijmo.collections.CollectionView(items);
        // track changes
        this.data.trackChanges = true;

    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: TrackChangesCmp }
]);

@NgModule({
    imports: [CommonModule, routing, WjGridModule, WjInputModule],
    declarations: [TrackChangesCmp],
})
export class TrackChangesModule {
}

