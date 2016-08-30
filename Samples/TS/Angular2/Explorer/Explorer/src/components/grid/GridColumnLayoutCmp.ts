'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GridBaseCmp } from './GridBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// FlexGrid Column Layout component.
@Component({
    selector: 'grid-column-layout-cmp',
    templateUrl: 'src/components/grid/gridColumnLayoutCmp.html',
    directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn]
})

export class GridColumnLayoutCmp extends GridBaseCmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);

    }

    // ** save/restore column layout
    saveColumnLayout() {
        if (localStorage) {
            localStorage['columns'] = this.flex.columnLayout;
            console.log('** Saved layout: ' + this.flex.columnLayout);
        }
    }
    loadColumnLayout() {
        if (localStorage) {
            if (!localStorage['columns']) {
                alert('Please save a layout first...');
            } else {
                this.flex.columnLayout = localStorage['columns'];
                console.log('** Loaded layout: ' + this.flex.columnLayout);
            }
        }
    }
}


