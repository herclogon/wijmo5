'use strict';

import { Component, Input } from '@angular/core';
import * as wjInput from 'wijmo/wijmo.angular2.input';

// Date cell renderer component that allows to edit a cell without switching to the cell edit mode.
@Component({
    selector: 'editable-date-renderer',
    templateUrl: 'src/cellTemplates/editableDateRenderer.html',
})
export class EditableDateRenderer {
    // The 'cell' object provided by the wjFlexGridCellTemplate directive.
    @Input() cell: any;
}

