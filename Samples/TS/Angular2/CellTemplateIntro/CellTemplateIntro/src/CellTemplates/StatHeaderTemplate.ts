'use strict';

import { Component} from '@angular/core';

@Component({
    selector: 'column-header-template',
    templateUrl: 'src/CellTemplates/statHeaderTemplate.html'
})

export class StatHeaderTemplate {
    cell: any;
    colDef: any;
    constructor() {
    }
}
