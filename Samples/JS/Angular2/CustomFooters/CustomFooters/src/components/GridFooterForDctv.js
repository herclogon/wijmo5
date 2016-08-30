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
var core_2 = require('@angular/core');
var WjFlexGrid = require('wijmo/wijmo.angular2.grid');
var GridFooterFor = (function () {
    function GridFooterFor(_flex, viewContainerRef, elRef, injector) {
        this._flex = _flex;
        this.viewContainerRef = viewContainerRef;
        this.elRef = elRef;
    }
    GridFooterFor.prototype.ngOnInit = function () {
        var _this = this;
        // configure footer grid
        this._flex.isReadOnly = true;
        this._flex.selectionMode = wijmo.grid.SelectionMode.None;
        this._flex.headersVisibility = this.gridFooterFor.headersVisibility;
        this._flex.columnHeaders.rows.clear();
        var row = new wijmo.grid.GroupRow();
        row.cssClass = GridFooterFor.GRID_FOOTER_CLASS;
        this._flex.rows.push(row);
        // remove scrollbars from footer grid
        var root = this._flex.hostElement.querySelector('[wj-part="root"]');
        root.style.overflow = 'hidden';
        // synchronize columns with master grid
        setTimeout(function () {
            _this._syncCols();
        }, 100);
        this.gridFooterFor.draggedColumn.addHandler(this._syncCols, this);
        this.gridFooterFor.resizedColumn.addHandler(this._syncCols, this);
        this.gridFooterFor.loadedRows.addHandler(this._syncCols, this);
        this.gridFooterFor.cellEditEnded.addHandler(this._syncCols, this);
        // synchronize scroll position with master grid
        this.gridFooterFor.scrollPositionChanged.addHandler(function () {
            _this._flex.scrollPosition = _this.gridFooterFor.scrollPosition;
        });
    };
    GridFooterFor.prototype._syncCols = function () {
        // copy columns/sizes etc
        if (!this._flex) {
            return;
        }
        this._flex.columnLayout = this.gridFooterFor.columnLayout;
        // set content of footer grid
        for (var i = 0; i < this.gridFooterFor.columns.length; i++) {
            var col = this.gridFooterFor.columns[i];
            var data = col.header ? col.header : col.binding;
            this._flex.setCellData(0, i, 'f(' + data + ')', false);
        }
    };
    GridFooterFor.prototype.ngOnDestroy = function () {
        this.viewContainerRef.clear();
        this.gridFooterFor.invalidate();
    };
    GridFooterFor.GRID_FOOTER_CLASS = 'wj-footer';
    GridFooterFor = __decorate([
        core_1.Directive({
            selector: '[gridFooterFor]',
            inputs: ['gridFooterFor']
        }),
        __param(0, core_1.Self()),
        __param(0, core_2.Inject(WjFlexGrid.WjFlexGrid)),
        __param(1, core_2.Inject(core_1.ViewContainerRef)),
        __param(2, core_2.Inject(core_1.ElementRef)),
        __param(3, core_2.Inject(core_2.Injector))
    ], GridFooterFor);
    return GridFooterFor;
}());
exports.GridFooterFor = GridFooterFor;
//# sourceMappingURL=GridFooterForDctv.js.map