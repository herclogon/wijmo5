'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Star Sizing component.
@Component({
    selector: 'grid-star-sizing-cmp',
    templateUrl: 'src/components/grid/gridStarSizingCmp.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn]
})

export class GridStarSizingCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }
}


