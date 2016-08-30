'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Paging sample component.
@Component({
    selector: 'grid-paging-cmp',
    templateUrl: 'src/components/grid/gridPagingCmp.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Input.WjCollectionViewPager,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class GridPagingCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }
}


