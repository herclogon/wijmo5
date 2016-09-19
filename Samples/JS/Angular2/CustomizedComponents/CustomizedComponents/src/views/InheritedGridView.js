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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var DataSvc_1 = require('../services/DataSvc');
var CustomComponentsModule_1 = require('../customizedComponents/CustomComponentsModule');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var wijmo_angular2_core_1 = require('wijmo/wijmo.angular2.core');
var EditableSelectionRenderer_1 = require('../cellTemplates/EditableSelectionRenderer');
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
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], InheritedGridView);
    return InheritedGridView;
}());
exports.InheritedGridView = InheritedGridView;
var routing = router_1.RouterModule.forChild([
    { path: '', component: InheritedGridView }
]);
var InheritedGridViewModule = (function () {
    function InheritedGridViewModule() {
    }
    InheritedGridViewModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, forms_1.FormsModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_core_1.WjCoreModule, CustomComponentsModule_1.CustomComponentsModule],
            declarations: [InheritedGridView],
        })
    ], InheritedGridViewModule);
    return InheritedGridViewModule;
}());
exports.InheritedGridViewModule = InheritedGridViewModule;
//# sourceMappingURL=InheritedGridView.js.map