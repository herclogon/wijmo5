'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var wjFlexSheet = require('wijmo/wijmo.angular2.grid.sheet');
var FrozenCellsCmp = (function () {
    function FrozenCellsCmp() {
        this.isFrozen = false;
    }
    FrozenCellsCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        if (flexSheet) {
            flexSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
            });
            flexSheet.selectedSheetChanged.addHandler(function () {
                if (self.flexSheet.frozenColumns > 0 || self.flexSheet.frozenRows > 0) {
                    self.isFrozen = true;
                }
                else {
                    self.isFrozen = false;
                }
            });
        }
    };
    FrozenCellsCmp.prototype.freezeCells = function () {
        var flexSheet = this.flexSheet;
        if (flexSheet) {
            flexSheet.freezeAtCursor();
            if (flexSheet.frozenColumns > 0 || flexSheet.frozenRows > 0) {
                this.isFrozen = true;
            }
            else {
                this.isFrozen = false;
            }
        }
    };
    __decorate([
        core_1.ViewChild('flexSheet')
    ], FrozenCellsCmp.prototype, "flexSheet", void 0);
    FrozenCellsCmp = __decorate([
        core_1.Component({
            selector: 'frozen-cells-cmp',
            templateUrl: 'src/components/frozenCellsCmp.html',
            directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
        })
    ], FrozenCellsCmp);
    return FrozenCellsCmp;
}());
exports.FrozenCellsCmp = FrozenCellsCmp;
//# sourceMappingURL=FrozenCellsCmp.js.map