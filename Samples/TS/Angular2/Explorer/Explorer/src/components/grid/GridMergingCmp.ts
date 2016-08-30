'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Merging component.
@Component({
    selector: 'grid-merging-cmp',
    templateUrl: 'src/components/grid/gridMergingCmp.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator]
})

export class GridMergingCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
        this.data = this.dataSvc.getData(500);        
    }     

    sourceChanged() {
        this.updateDataMapSettings();
        this.updateHeaders();
    }

    ngAfterViewInit() {
        super.ngAfterViewInit();
        this.updateHeaders();
    }

    // add some column headers to show merging
     updateHeaders() {
        var flex = this.flex;
        if (flex) {

            // insert new row if not yet
            if (flex.columnHeaders.rows.length === 1) {
                flex.columnHeaders.rows.insert(0, new wijmo.grid.Row());
            }
            var row = flex.columnHeaders.rows[0];
            row.allowMerging = true;

            // set headings so the cells merge
            for (var i = 0; i < flex.columns.length; i++) {
                var hdr = 'String';
                switch (flex.columns[i].binding) {
                    case 'id':
                    case 'amount':
                    case 'discount':
                        hdr = 'Number';
                        break;
                    case 'active':
                        hdr = 'Boolean';
                        break;
                }
                flex.columnHeaders.setCellData(0, i, hdr);
            }
        }
    }
}


