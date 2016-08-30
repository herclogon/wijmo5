'use strict';

import { Component, EventEmitter, Inject, Type } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Core from 'wijmo/wijmo.angular2.core';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Dynamic Columns sample component.
@Component({
    selector: 'grid-dynamic-columns-cmp',
    templateUrl: 'src/components/grid/gridDynamicColumnsCmp.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, CORE_DIRECTIVES,
        wjNg2Input.WjInputNumber, wjNg2Core.WjComponentLoader]
})

export class GridDynamicColumnsCmp extends GridBaseCmp {
    columns: {
        binding?: string, header?: string, width?: any, format?: string,
        cellTemplate?: Type, cellEditTemplate?: Type
    }[];

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this.columns = [
            { header: 'ID', binding: 'id', width: 80 },
            { header: 'Date', binding: 'start' },
            { header: 'Product', binding: 'product' },
            { header: 'Revenue', binding: 'amount', format: 'n0' },
            { header: 'Expense', binding: 'amount2', format: 'n0' },
            {
                header: 'Expense (with template)', binding: 'amount2', width: 180, cellTemplate: ExpenceCellCmp,
                cellEditTemplate: ExpenceCellEditCmp
            },
            { header: 'Discount', binding: 'discount', format: 'p0' }
        ];

    }
}

@Component({
    selector: 'expence-cell-cmp',
    template: `
        <div [ngStyle]="{color: item.amount2 > 2000 ? 'red' : 'green'}">
            {{item.amount2 | currency:'USD':true}}
            <span [ngSwitch]="item.amount2 > 2000">
              <span *ngSwitchCase="true">&#9650;</span>
              <span *ngSwitchDefault>&#9660;</span>
            </span>
        </div>
        `,
})

export class ExpenceCellCmp {
    item: any;

    constructor() {


    }
}

@Component({
    selector: 'expence-cell-edit-cmp',
    template: `
        <wj-input-number [(value)]="cell.value" [required]="false" [step]="1">
        </wj-input-number>                        
        `,
    directives: [wjNg2Input.WjInputNumber]
})
export class ExpenceCellEditCmp {
    item: any;

    constructor() {


    }
}

