'use strict';

import { Component, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// Component1.
@Component({
    selector: 'component1-cmp',
    templateUrl: 'src/components/component1.html',
    directives: [wjNg2Grid.WjFlexGrid]
})

export class Component1Cmp {
    data: any[];
    private dataSvc: DataSvc;

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        this.dataSvc = dataSvc;
        this.data = this.dataSvc.getData(100);
    }
}


