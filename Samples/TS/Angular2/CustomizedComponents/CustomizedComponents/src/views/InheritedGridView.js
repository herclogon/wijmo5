'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var DataSvc_1 = require('../services/DataSvc');
var InheritedGrid_1 = require('../customizedComponents/InheritedGrid');
var wjInput = require('wijmo/wijmo.angular2.input');
var wjGrid = require('wijmo/wijmo.angular2.grid');
var wjCore = require('wijmo/wijmo.angular2.core');
var EditableDateRenderer_1 = require('../cellTemplates/EditableDateRenderer');
var EditableSelectionRenderer_1 = require('../cellTemplates/EditableSelectionRenderer');
var EditableStringRenderer_1 = require('../cellTemplates/EditableStringRenderer');
//Component2.
var InheritedGridView = (function () {
    function InheritedGridView(dataSvc) {
        // Row selection type
        this.selectionType = EditableSelectionRenderer_1.SelectionType.Single;
        // References SelectionType enum to use it in markup.
        this.SelectionTypeEnum = EditableSelectionRenderer_1.SelectionType;
        this.data = dataSvc.getData(150, false);
    }
    InheritedGridView = __decorate([
        core_1.Component({
            selector: 'inherited-grid-view',
            templateUrl: 'src/views/inheritedGridView.html',
            directives: [InheritedGrid_1.InheritedGrid, wjGrid.WjFlexGridColumn, wjGrid.WjFlexGridCellTemplate,
                wjCore.WjComponentLoader, wjInput.WjMenu, wjInput.WjMenuItem,
                EditableStringRenderer_1.EditableStringRenderer, EditableDateRenderer_1.EditableDateRenderer,
                common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], InheritedGridView);
    return InheritedGridView;
}());
exports.InheritedGridView = InheritedGridView;
//# sourceMappingURL=InheritedGridView.js.map