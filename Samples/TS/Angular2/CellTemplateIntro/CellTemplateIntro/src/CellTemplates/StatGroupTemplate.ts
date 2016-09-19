'use strict';

import { Component} from '@angular/core';

@Component({
    selector: 'expence-cell-edit-cmp',
    templateUrl: 'src/CellTemplates/statGroupTemplate.html'
})
export class StatGroupTemplate {
    cell: any;
    colDef: any;

    constructor() {
    }
}
