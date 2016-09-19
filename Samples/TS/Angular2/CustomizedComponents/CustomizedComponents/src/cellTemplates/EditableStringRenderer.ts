'use strict';

import { Component, Inject, Input, OnInit } from '@angular/core';

// String cell renderer component that allows to edit a cell without switching to the cell edit mode.
@Component({
    selector: 'editable-string-renderer',
    templateUrl: 'src/cellTemplates/editableStringRenderer.html',
})
export class EditableStringRenderer {
    // The 'cell' object provided by the wjFlexGridCellTemplate directive.
    @Input() cell: any;
}
