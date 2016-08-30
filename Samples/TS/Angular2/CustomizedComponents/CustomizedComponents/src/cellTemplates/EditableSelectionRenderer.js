'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var wjInput = require('wijmo/wijmo.angular2.input');
(function (SelectionType) {
    SelectionType[SelectionType["Single"] = 0] = "Single";
    SelectionType[SelectionType["Multiple"] = 1] = "Multiple";
})(exports.SelectionType || (exports.SelectionType = {}));
var SelectionType = exports.SelectionType;
// Selection cell renderer component that allows to edit a cell without switching to the cell edit mode.
var EditableSelectionRenderer = (function () {
    function EditableSelectionRenderer() {
        // References SelectionType enum to give an access to its members in markup.
        this.SelectionTypeEnum = SelectionType;
    }
    Object.defineProperty(EditableSelectionRenderer.prototype, "selectionType", {
        // Defines row selection type - Single/Multi.
        get: function () {
            return this._selectionType;
        },
        set: function (value) {
            this._selectionType = wijmo.asEnum(value, SelectionType, true);
        },
        enumerable: true,
        configurable: true
    });
    // Single row selection handler - set this cell value to true and all other cell values to false.
    EditableSelectionRenderer.prototype.singleSelectChanged = function (e) {
        if (e.target.checked) {
            var row = this.cell.row, col = this.cell.col, grid = row.grid;
            for (var i = 0; i < grid.rows.length; i++) {
                grid.setCellData(i, col.index, row.index === i, false);
            }
            grid.invalidate(false);
        }
    };
    __decorate([
        core_1.Input()
    ], EditableSelectionRenderer.prototype, "cell", void 0);
    __decorate([
        core_1.Input()
    ], EditableSelectionRenderer.prototype, "selectionType", null);
    EditableSelectionRenderer = __decorate([
        core_1.Component({
            selector: 'editable-selection-renderer',
            templateUrl: 'src/cellTemplates/editableSelectionRenderer.html',
            directives: [wjInput.WjInputDate, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        })
    ], EditableSelectionRenderer);
    return EditableSelectionRenderer;
}());
exports.EditableSelectionRenderer = EditableSelectionRenderer;
//# sourceMappingURL=EditableSelectionRenderer.js.map