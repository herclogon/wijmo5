'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../../services/DataSvc';
import { InputBaseCmp } from '../input/InputBaseCmp';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// Wijmo TrackChanges component.
@Component({
    selector: 'grid-trackChanges-cmp',
    templateUrl: 'src/components/infra/trackChangesCmp.html',
    directives: [wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator,
        wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn,
        wjNg2Input.WjCalendar, CORE_DIRECTIVES]
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


