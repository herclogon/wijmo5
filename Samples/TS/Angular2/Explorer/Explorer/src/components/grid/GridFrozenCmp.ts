'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Frozen component.
@Component({
    selector: 'grid-frozen-cmp',
    templateUrl: 'src/components/grid/gridFrozenCmp.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn]
})

export class GridFrozenCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }

    // toggle freezing
    toggleFreeze (freeze) {
        var flex = this.flex;
        if (flex) {

            // figure out whether to freeze or unfreeze
            if (freeze == null) {
                freeze = (flex.frozenRows || flex.frozenColumns) ? false : true;
            }

            if (freeze) {

                // hide rows/cols before the viewRange and freeze
                var vr = flex.viewRange;
                for (var i = 0; i < vr.topRow; i++) {
                    flex.rows[i].visible = false;
                }
                for (var i = 0; i < vr.leftCol; i++) {
                    flex.columns[i].visible = false;
                }

                // freeze based on selection; if there is no selection,
                // freeze the first couple of rows/columns
                var sel = flex.selection;
                if (sel.topRow || sel.leftCol) {
                    flex.frozenRows = sel.topRow;
                    flex.frozenColumns = sel.leftCol;
                } else {
                    flex.frozenRows = flex.frozenColumns = 2;
                }

            } else {

                // show all rows/columns and unfreeze
                for (var i = 0; i < flex.rows.length; i++) {
                    flex.rows[i].visible = true;
                }
                for (var i = 0; i < flex.columns.length; i++) {
                    flex.columns[i].visible = true;
                }
                flex.frozenRows = flex.frozenColumns = 0;
            }

        }
    }
}


