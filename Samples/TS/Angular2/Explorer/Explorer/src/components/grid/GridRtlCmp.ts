'use strict';

import { Component, EventEmitter, ViewChild, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid RTL component.
@Component({
    selector: 'grid-rtl-cmp',
    templateUrl: 'src/components/grid/gridRtlCmp.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Input.WjCollectionViewNavigator,
        wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator]
})

export class GridRtlCmp extends GridBaseCmp {

    @ViewChild('flex') flex: wijmo.grid.FlexGrid;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }
}


