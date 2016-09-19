'use strict';

import { Component, EventEmitter, Inject, ViewChild, Input, AfterViewInit, forwardRef, Type, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import { RouterModule } from '@angular/router';
import { WjCoreModule } from 'wijmo/wijmo.angular2.core';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// FlexGrid Dynamic Columns sample component.
@Component({
    selector: 'grid-dynamic-columns-cmp',
    templateUrl: 'src/components/grid/gridDynamicColumnsCmp.html',

    entryComponents: [ forwardRef(()=>ExpenceCellCmp), forwardRef(()=>ExpenceCellEditCmp)]
})

export class GridDynamicColumnsCmp extends GridBaseCmp {
    columns: {
        binding?: string, header?: string, width?: any, format?: string,
        cellTemplate?: Type<any>, cellEditTemplate?: Type<any>
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
        <wj-input-number [(value)]="cell.value" [isRequired]="false" [step]="1">
        </wj-input-number>                        
        `
    //directives: [wjNg2Input.WjInputNumber]
})
export class ExpenceCellEditCmp {
    item: any;

    constructor() {


    }
}

const routing: ModuleWithProviders = RouterModule.forChild([
    { path: '', component: GridDynamicColumnsCmp }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing, WjCoreModule, WjGridModule, WjInputModule],
    declarations: [GridDynamicColumnsCmp, ExpenceCellEditCmp, ExpenceCellCmp],
})
export class GridDynamicColumnsModule {
}
