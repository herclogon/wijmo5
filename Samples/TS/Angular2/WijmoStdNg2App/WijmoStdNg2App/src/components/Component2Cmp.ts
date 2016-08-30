'use strict';

import { Component, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

//Component2.
@Component({
    selector: 'component2-cmp',
    templateUrl: 'src/components/component2.html',
    directives: [wjNg2Input.WjInputNumber]
})

export class Component2Cmp {

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
    }
}

