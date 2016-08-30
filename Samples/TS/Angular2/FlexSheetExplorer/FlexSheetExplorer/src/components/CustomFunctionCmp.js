'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var wjFlexSheet = require('wijmo/wijmo.angular2.grid.sheet');
var CustomFunctionCmp = (function () {
    function CustomFunctionCmp() {
    }
    CustomFunctionCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        if (flexSheet) {
            flexSheet.addCustomFunction('customSumProduct', function (range1, range2) {
                var flexSheet = self.flexSheet, result = 0, val1, val2;
                if (range1.rowSpan === range2.rowSpan && range1.columnSpan === range2.columnSpan) {
                    for (var rowIndex = 0; rowIndex < range1.rowSpan; rowIndex++) {
                        for (var columnIndex = 0; columnIndex < range1.columnSpan; columnIndex++) {
                            val1 = +flexSheet.getCellValue(range1.topRow + rowIndex, range1.leftCol + columnIndex, false);
                            val2 = +flexSheet.getCellValue(range2.topRow + rowIndex, range2.leftCol + columnIndex, false);
                            result += val1 * val2;
                        }
                    }
                }
                return result;
            }, 'Custom SumProduct Function', 2, 2);
            flexSheet.unknownFunction.addHandler(function (sender, e) {
                var result = '', i;
                if (e.params) {
                    for (i = 0; i < e.params.length; i++) {
                        result += e.params[i];
                    }
                }
                e.value = result;
            });
            flexSheet.deferUpdate(function () {
                for (var ri = 0; ri < flexSheet.rows.length; ri++) {
                    for (var ci = 0; ci < 3; ci++) {
                        flexSheet.setCellData(ri, ci, ri + ci);
                    }
                }
                flexSheet.setCellData(0, 3, '=customSumProduct(A1:A10, B1:B10)');
                flexSheet.setCellData(1, 3, '=customFunc(1, "B", 3)');
            });
        }
    };
    __decorate([
        core_1.ViewChild('flexSheet')
    ], CustomFunctionCmp.prototype, "flexSheet", void 0);
    CustomFunctionCmp = __decorate([
        core_1.Component({
            selector: 'custom-function-cmp',
            templateUrl: 'src/components/customFunctionCmp.html',
            directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
        })
    ], CustomFunctionCmp);
    return CustomFunctionCmp;
}());
exports.CustomFunctionCmp = CustomFunctionCmp;
//# sourceMappingURL=CustomFunctionCmp.js.map