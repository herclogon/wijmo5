"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
var wjCore = require('wijmo/wijmo.angular2.core');
var wjBase = require('wijmo/wijmo.angular2.directiveBase');
var EditableSelectionRenderer_1 = require('../cellTemplates/EditableSelectionRenderer');
// Represents the custom grid component implemented by means of aggregating the WjFlexGrid component.
var AggregatedGrid = (function () {
    function AggregatedGrid() {
        this._isEditable = true;
        // A type of selection provided by the Select column.
        this.selectionType = EditableSelectionRenderer_1.SelectionType.Single;
        // References SelectionType enum to use it in markup.
        this.SelectionTypeEnum = EditableSelectionRenderer_1.SelectionType;
        // Provide correct 'this' for the formatItem event handler.
        this.onFormatItem = this._onFormatItem.bind(this);
    }
    Object.defineProperty(AggregatedGrid.prototype, "isEditable", {
        // Indicates whether grid cells editing is enabled.
        get: function () {
            return this._isEditable;
        },
        set: function (value) {
            if (this._isEditable != value) {
                this._isEditable = value;
                if (this.flex) {
                    // invalidates grid to apply changes
                    this.flex.invalidate();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    // FlexGrid.formatItem event handler, enables or disables cell editing based on the isEditable property value.
    AggregatedGrid.prototype._onFormatItem = function (e) {
        if (e.panel.cellType === wijmo.grid.CellType.Cell) {
            var column = this.flex.columns[e.col];
            wijmo.enable(e.cell, this.isEditable || column.name === 'select');
        }
    };
    __decorate([
        core_1.Input()
    ], AggregatedGrid.prototype, "itemsSource", void 0);
    __decorate([
        core_1.Input()
    ], AggregatedGrid.prototype, "selectionType", void 0);
    __decorate([
        core_1.ViewChild('flex')
    ], AggregatedGrid.prototype, "flex", void 0);
    __decorate([
        core_1.ContentChildren(core_1.forwardRef(function () { return AggregatedGridColumn; }))
    ], AggregatedGrid.prototype, "columns", void 0);
    __decorate([
        core_1.Input()
    ], AggregatedGrid.prototype, "isEditable", null);
    AggregatedGrid = __decorate([
        core_1.Component({
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate,
                wjCore.WjComponentLoader, EditableSelectionRenderer_1.EditableSelectionRenderer],
            selector: 'aggregated-grid',
            templateUrl: 'src/customizedComponents/aggregatedGrid.html'
        })
    ], AggregatedGrid);
    return AggregatedGrid;
}());
exports.AggregatedGrid = AggregatedGrid;
;
// A column definition for the AggregatedGrid component, which is used as a child of aggregated-grid in markup,
// in the same way as wj-flex-grid-column components are used with wj-flex-grid.
// Exposes the same set of properties for binding in markup as wj-flex-grid-column does, plus the cellTemplate
// property that can be assigned with a type reference to a component that should be used as the column cell template.
var AggregatedGridColumn = (function () {
    function AggregatedGridColumn() {
    }
    AggregatedGridColumn = __decorate([
        core_1.Component({
            selector: 'aggregated-grid-column',
            template: '',
            // We only need to provide a list of bindable properties here, no need to explicitly define them
            // in the component class. For this, we read the 'inputs' array from the WjFlexGridColumn component's metadata
            // and add the 'cellTemplate' property specific to AggregatedGridColumn.
            inputs: wjBase.Ng2Utils.getTypeAnnotation(wjNg2Grid.WjFlexGridColumn, core_1.ComponentMetadata)
                .inputs.concat('cellTemplate')
        })
    ], AggregatedGridColumn);
    return AggregatedGridColumn;
}());
exports.AggregatedGridColumn = AggregatedGridColumn;
;
//# sourceMappingURL=AggregatedGrid.js.map