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
var DataSvc_1 = require('../services/DataSvc');
var BindingFlexSheetBaseCmp_1 = require('./BindingFlexSheetBaseCmp');
var wjFlexSheet = require('wijmo/wijmo.angular2.grid.sheet');
var ExcelIOCmp = (function (_super) {
    __extends(ExcelIOCmp, _super);
    function ExcelIOCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    ExcelIOCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        _super.prototype.flexSheetInit.call(this, flexSheet);
        if (flexSheet) {
            flexSheet.deferUpdate(function () {
                var colIdx, rowIdx;
                flexSheet.selectedSheetIndex = 1;
                for (colIdx = 0; colIdx < flexSheet.columns.length; colIdx++) {
                    for (rowIdx = 0; rowIdx < flexSheet.rows.length; rowIdx++) {
                        flexSheet.setCellData(rowIdx, colIdx, colIdx + rowIdx);
                    }
                }
                flexSheet.selectedSheetIndex = 0;
            });
        }
    };
    ExcelIOCmp.prototype.load = function () {
        var flexSheet = this.flexSheet, fileInput = document.getElementById('importFile');
        if (flexSheet && fileInput.files[0]) {
            flexSheet.load(fileInput.files[0]);
        }
    };
    ExcelIOCmp.prototype.save = function () {
        var flexSheet = this.flexSheet, fileName;
        if (flexSheet) {
            if (this.fileName) {
                fileName = this.fileName;
            }
            else {
                fileName = 'FlexSheet.xlsx';
            }
            flexSheet.save(fileName);
        }
    };
    ExcelIOCmp = __decorate([
        core_1.Component({
            selector: 'excel-i-o-cmp',
            templateUrl: 'src/components/excelIOCmp.html',
            directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], ExcelIOCmp);
    return ExcelIOCmp;
}(BindingFlexSheetBaseCmp_1.BindingFlexSheetBaseCmp));
exports.ExcelIOCmp = ExcelIOCmp;
//# sourceMappingURL=ExcelIOCmp.js.map