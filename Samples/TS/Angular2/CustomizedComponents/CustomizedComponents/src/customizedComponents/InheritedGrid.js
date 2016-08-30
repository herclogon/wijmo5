'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var wijmo_angular2_directiveBase_1 = require('wijmo/wijmo.angular2.directiveBase');
var wjGrid = require('wijmo/wijmo.angular2.grid');
var EditableSelectionRenderer_1 = require('../cellTemplates/EditableSelectionRenderer');
// Custom grid component implemented by deriving from the WjFlexGrid component.
//
// The WjComponent decorator merges the definitions made for this class with the definitions for
// the base class decorator.
var InheritedGrid = (function (_super) {
    __extends(InheritedGrid, _super);
    function InheritedGrid(elRef, injector) {
        _super.call(this, elRef, injector);
        this._showSelectColumn = true;
        this._isEditable = true;
        this.selectionType = EditableSelectionRenderer_1.SelectionType.Single;
        // Disable cell selection.
        this.selectionMode = wijmo.grid.SelectionMode.None;
        // Disables standard cell editing functionality.
        this.isReadOnly = true;
    }
    Object.defineProperty(InheritedGrid.prototype, "isEditable", {
        // Indicates whether cell editing is enabled.
        get: function () {
            return this._isEditable;
        },
        set: function (value) {
            if (this._isEditable != value) {
                this._isEditable = value;
                this.invalidate();
            }
        },
        enumerable: true,
        configurable: true
    });
    // Overrides the onFormatItem method and adds the logic that enables or disables cell editing based 
    // on the isEditable property value.
    InheritedGrid.prototype.onFormatItem = function (e) {
        _super.prototype.onFormatItem.call(this, e);
        if (e.panel.cellType === wijmo.grid.CellType.Cell) {
            var column = this.columns[e.col];
            wijmo.enable(e.cell, this.isEditable || column.name === 'select');
        }
    };
    InheritedGrid = __decorate([
        wijmo_angular2_directiveBase_1.WjComponent({
            selector: 'inherited-grid',
            // We would not specify a template at all if we would like to create just an inherited grid component,
            // the template will be automatically inherited from the base WjFlexGrid component decorator.
            // But we want to create a grid with a predefined Select column, so we define a custom template
            // that includes the Select column definition, see the template definition in html file for details.
            templateUrl: 'src/customizedComponents/inheritedGrid.html',
            directives: [wjGrid.WjFlexGridColumn, wjGrid.WjFlexGridCellTemplate, EditableSelectionRenderer_1.EditableSelectionRenderer],
            // We need to specify only properties added in this class, and they will be merged with properties
            // defined for the WjFlexGrid component.
            inputs: ['selectionType', 'isEditable']
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(core_1.Injector))
    ], InheritedGrid);
    return InheritedGrid;
}(wjGrid.WjFlexGrid));
exports.InheritedGrid = InheritedGrid;
//# sourceMappingURL=InheritedGrid.js.map