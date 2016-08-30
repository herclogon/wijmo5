'use strict';

import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';
import * as wjNg2Grid from 'wijmo/wijmo.angular2.grid';

// ComboBox sample component.
@Component({
    selector: 'combo-box-cmp',
    templateUrl: 'src/components/input/comboBoxCmp.html',
    directives: [wjNg2Input.WjComboBox, wjNg2Grid.WjFlexGrid, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class ComboBoxCmp extends InputBaseCmp {
    country1 = '';
    country2 = 'Algeria';
    country3 = '';
    item1 = '';
    item2 = '';

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }

}


