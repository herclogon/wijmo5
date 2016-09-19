"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var wijmo_angular2_core_1 = require('wijmo/wijmo.angular2.core');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var InheritedGrid_1 = require('./InheritedGrid');
var AggregatedGrid_1 = require('./AggregatedGrid');
var EditableDateRenderer_1 = require('../cellTemplates/EditableDateRenderer');
var EditableSelectionRenderer_1 = require('../cellTemplates/EditableSelectionRenderer');
var EditableStringRenderer_1 = require('../cellTemplates/EditableStringRenderer');
var components = [
    InheritedGrid_1.InheritedGrid,
    AggregatedGrid_1.AggregatedGrid,
    AggregatedGrid_1.AggregatedGridColumn,
    EditableDateRenderer_1.EditableDateRenderer,
    EditableSelectionRenderer_1.EditableSelectionRenderer,
    EditableStringRenderer_1.EditableStringRenderer
];
var CustomComponentsModule = (function () {
    function CustomComponentsModule() {
    }
    CustomComponentsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, wijmo_angular2_core_1.WjCoreModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule],
            declarations: components.slice(),
            exports: components.slice(),
        })
    ], CustomComponentsModule);
    return CustomComponentsModule;
}());
exports.CustomComponentsModule = CustomComponentsModule;
//# sourceMappingURL=CustomComponentsModule.js.map