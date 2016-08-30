'use strict';

import { Component, Inject, Input, OnInit } from '@angular/core';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';

// String cell renderer component that allows to edit a cell without switching to the cell edit mode.
@Component({
    selector: 'editable-string-renderer',
    templateUrl: 'src/cellTemplates/editableStringRenderer.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class EditableStringRenderer {
    // The 'cell' object provided by the wjFlexGridCellTemplate directive.
    @Input() cell: any;
}
