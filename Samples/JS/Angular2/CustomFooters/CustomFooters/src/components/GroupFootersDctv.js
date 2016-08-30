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
var GroupFooters = (function () {
    function GroupFooters(_flex, elRef, injector) {
        this._flex = _flex;
        this.elRef = elRef;
    }
    GroupFooters.prototype.ngOnInit = function () {
        var _this = this;
        var flex = this._flex;
        // add group footers after loading rows
        flex.loadedRows.addHandler(function () {
            if (flex.collectionView.groupDescriptions.length) {
                _this._addGroupFooters();
            }
        });
    };
    // add group footers
    GroupFooters.prototype._addGroupFooters = function () {
        var flex = this._flex;
        flex.beginUpdate();
        for (var r = 0; r < flex.rows.length; r++) {
            var row = flex.rows[r];
            if (row instanceof wijmo.grid.GroupRow && row.cssClass != GroupFooters.ROW_FOOTER_CLASS) {
                // create footer row to match this group row
                var newRow = new wijmo.grid.GroupRow();
                newRow.level = row.level;
                newRow.cssClass = GroupFooters.ROW_FOOTER_CLASS;
                // add footer row to the grid
                var index = this._findFooterIndex(r);
                flex.rows.insert(index, newRow);
                // add some content to footer row
                var group = row.dataItem;
                flex.setCellData(index, 0, 'f(' + group.name + ')', false);
            }
        }
        flex.endUpdate();
    };
    // find the index where the group footer should be inserted
    GroupFooters.prototype._findFooterIndex = function (r) {
        var flex = this._flex;
        var level = flex.rows[r].level;
        for (var i = r + 1; i < flex.rows.length; i++) {
            var row = flex.rows[i];
            if (row instanceof wijmo.grid.GroupRow) {
                // if this is *not* a footer and the level is <=, insert here
                if (row.cssClass != GroupFooters.ROW_FOOTER_CLASS && row.level <= level) {
                    return i;
                }
                // if this *is* a footer and the level is <, insert here
                if (row.cssClass == GroupFooters.ROW_FOOTER_CLASS && row.level < level) {
                    return i;
                }
            }
        }
        // insert at the bottom
        return flex.rows.length;
    };
    GroupFooters.prototype.ngOnDestroy = function () {
        this._flex.invalidate();
    };
    GroupFooters.ROW_FOOTER_CLASS = 'wj-footer';
    GroupFooters = __decorate([
        core_1.Directive({
            selector: '[groupFooters]',
            inputs: ['groupFooters']
        }),
        __param(0, core_1.Self()),
        __param(0, core_2.Inject(WjFlexGrid.WjFlexGrid)),
        __param(1, core_2.Inject(core_1.ElementRef)),
        __param(2, core_2.Inject(core_2.Injector))
    ], GroupFooters);
    return GroupFooters;
}());
exports.GroupFooters = GroupFooters;
//# sourceMappingURL=GroupFootersDctv.js.map