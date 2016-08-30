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
// Date cell renderer component that allows to edit a cell without switching to the cell edit mode.
var EditableDateRenderer = (function () {
    function EditableDateRenderer() {
    }
    __decorate([
        core_1.Input()
    ], EditableDateRenderer.prototype, "cell", void 0);
    EditableDateRenderer = __decorate([
        core_1.Component({
            selector: 'editable-date-renderer',
            templateUrl: 'src/cellTemplates/editableDateRenderer.html',
            directives: [wjInput.WjInputDate, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        })
    ], EditableDateRenderer);
    return EditableDateRenderer;
}());
exports.EditableDateRenderer = EditableDateRenderer;
//# sourceMappingURL=EditableDateRenderer.js.map