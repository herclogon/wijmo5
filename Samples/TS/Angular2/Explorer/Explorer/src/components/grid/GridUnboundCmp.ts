'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Unbound component.
@Component({
    selector: 'grid-unbound-cmp',
    templateUrl: 'src/components/grid/gridUnboundCmp.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn]
})

export class GridUnboundCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }

    ngAfterViewInit() {
        this.update();
    }

    update() {
        if (this.flex) {
            var flex = this.flex;
            flex.allowResizing = wijmo.grid.AllowResizing.Both;
            flex.allowDragging = wijmo.grid.AllowDragging.Both;

            // add 50 rows, 10 columns
            for (var r = 0; r < 50; r++) {
                flex.rows.push(new wijmo.grid.Row());
            }
            for (var c = 0; c < 10; c++) {
                flex.columns.push(new wijmo.grid.Column());
            }

            // populate the scrollable area
            for (var r = 0; r < flex.rows.length; r++) {
                for (var c = 0; c < flex.columns.length; c++) {
                    flex.setCellData(r, c, 'r' + r + ',c' + c);
                }
            }

            // add 3 rows to the column header and 3 columns to the row header panels
            for (var i = 0; i < 3; i++) {
                flex.columnHeaders.rows.insert(0, new wijmo.grid.Row());
                flex.rowHeaders.columns.insert(0, new wijmo.grid.Column());
            }

            // populate the fixed area
            var p = flex.columnHeaders;
            for (var r = 0; r < p.rows.length; r++) {
                for (var c = 0; c < p.columns.length; c++) {
                    p.setCellData(r, c, 'cHdr r' + r + ',c' + c);
                }
            }
            p = flex.rowHeaders;
            for (var r = 0; r < p.rows.length; r++) {
                for (var c = 0; c < p.columns.length; c++) {
                    p.setCellData(r, c, 'rHdr r' + r + ',c' + c);
                }
            }
            p = flex.topLeftCells;
            for (var r = 0; r < p.rows.length; r++) {
                for (var c = 0; c < p.columns.length; c++) {
                    p.setCellData(r, c, 'tl r' + r + ',c' + c);
                }
            }
        }
    }
}


