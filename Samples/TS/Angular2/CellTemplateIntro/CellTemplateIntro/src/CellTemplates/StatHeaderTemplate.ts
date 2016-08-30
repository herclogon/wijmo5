'use strict';

import { Component} from '@angular/core';
import * as wjNg2Core from 'wijmo/wijmo.angular2.core';
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

@Component({
    selector: 'column-header-template',
    templateUrl: 'src/CellTemplates/statHeaderTemplate.html',
    directives: [wjNg2Input.WjComboBox]
})

export class StatHeaderTemplate {
    cell: any;
    colDef: any;
    constructor() {
    }
}
