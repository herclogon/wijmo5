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
var AggregatedGrid_1 = require('../customizedComponents/AggregatedGrid');
var wjInput = require('wijmo/wijmo.angular2.input');
var EditableDateRenderer_1 = require('../cellTemplates/EditableDateRenderer');
var EditableSelectionRenderer_1 = require('../cellTemplates/EditableSelectionRenderer');
var EditableStringRenderer_1 = require('../cellTemplates/EditableStringRenderer');
//Component2.
var AggregatedGridView = (function () {
    function AggregatedGridView(dataSvc) {
        // cell render component types, to use in markup
        this.editableDateRenderer = EditableDateRenderer_1.EditableDateRenderer;
        this.editableStringRenderer = EditableStringRenderer_1.EditableStringRenderer;
        // type of selection provided by the Select column
        this.selectionType = EditableSelectionRenderer_1.SelectionType.Single;
        // References SelectionType enum to use it in markup.
        this.SelectionTypeEnum = EditableSelectionRenderer_1.SelectionType;
        this.data = dataSvc.getData(150, false);
    }
    AggregatedGridView = __decorate([
        core_1.Component({
            selector: 'aggregated-grid-view',
            templateUrl: 'src/views/aggregatedGridView.html',
            directives: [AggregatedGrid_1.AggregatedGrid, AggregatedGrid_1.AggregatedGridColumn, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES,
                wjInput.WjMenu, wjInput.WjMenuItem, wjInput.WjInputDate]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AggregatedGridView);
    return AggregatedGridView;
}());
exports.AggregatedGridView = AggregatedGridView;
//# sourceMappingURL=AggregatedGridView.js.map