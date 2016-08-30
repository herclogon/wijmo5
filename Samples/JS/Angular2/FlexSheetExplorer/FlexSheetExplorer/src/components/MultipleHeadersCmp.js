'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var wjFlexSheet = require('wijmo/wijmo.angular2.grid.sheet');
var MultipleHeadersCmp = (function () {
    function MultipleHeadersCmp() {
    }
    MultipleHeadersCmp.prototype.flexSheetInit = function (flexSheet) {
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
        }
    };
    MultipleHeadersCmp.prototype.addRowHeader = function () {
        if (this.flexSheet) {
            this.flexSheet.rowHeaders.columns.push(new wijmo.grid.Column());
        }
    };
    MultipleHeadersCmp.prototype.removeRowHeader = function () {
        var colCnt;
        if (this.flexSheet) {
            colCnt = this.flexSheet.rowHeaders.columns.length;
            this.flexSheet.rowHeaders.columns.removeAt(colCnt - 1);
        }
    };
    MultipleHeadersCmp.prototype.addColumnHeader = function () {
        if (this.flexSheet) {
            this.flexSheet.columnHeaders.rows.push(new wijmo.grid.Row());
        }
    };
    MultipleHeadersCmp.prototype.removeColumnHeader = function () {
        var rowCnt;
        if (this.flexSheet) {
            rowCnt = this.flexSheet.columnHeaders.rows.length;
            this.flexSheet.columnHeaders.rows.removeAt(rowCnt - 1);
        }
    };
    __decorate([
        core_1.ViewChild('flexSheet')
    ], MultipleHeadersCmp.prototype, "flexSheet", void 0);
    MultipleHeadersCmp = __decorate([
        core_1.Component({
            selector: 'multiple-headers-cmp',
            templateUrl: 'src/components/multipleHeadersCmp.html',
            directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
        })
    ], MultipleHeadersCmp);
    return MultipleHeadersCmp;
}());
exports.MultipleHeadersCmp = MultipleHeadersCmp;
//# sourceMappingURL=MultipleHeadersCmp.js.map