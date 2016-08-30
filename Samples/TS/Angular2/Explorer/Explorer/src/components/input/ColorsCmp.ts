'use strict';

import { Component, EventEmitter, Inject } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { InputBaseCmp } from './InputBaseCmp';
import { DataSvc } from '../../services/DataSvc';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// Colors sample component.
@Component({
    selector: 'colors-cmp',
    templateUrl: 'src/components/input/colorsCmp.html',
    directives: [wjNg2Input.WjColorPicker, wjNg2Input.WjInputColor,
        wjNg2Input.WjComboBox, CORE_DIRECTIVES],
})

export class ColorsCmp extends InputBaseCmp {
    theColor = 'white';

    constructor( @Inject(DataSvc) dataSvc: DataSvc) {
        super(dataSvc);
    }
}
