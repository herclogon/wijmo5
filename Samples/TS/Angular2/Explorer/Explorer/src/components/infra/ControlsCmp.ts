'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from '../../services/DataSvc';
import { InputBaseCmp } from '../input/InputBaseCmp';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// Wijmo Controls component.
@Component({
    selector: 'grid-controls-cmp',
    templateUrl: 'src/components/infra/controlsCmp.html',
    directives: [wjNg2Input.WjComboBox, wjNg2Input.WjInputNumber,
        wjNg2Grid.WjFlexGrid, CORE_DIRECTIVES]
})

export class ControlsCmp extends InputBaseCmp {

    passengers = 1;
    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}


