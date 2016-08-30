'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var wjFlexSheet = require('wijmo/wijmo.angular2.grid.sheet');
var IntroCmp = (function () {
    function IntroCmp() {
    }
    IntroCmp.prototype.flexSheetInit = function (flexSheet) {
        if (flexSheet) {
            flexSheet.selectedSheetIndex = 0;
        }
    };
    __decorate([
        core_1.ViewChild('flexSheet')
    ], IntroCmp.prototype, "flexSheet", void 0);
    IntroCmp = __decorate([
        core_1.Component({
            selector: 'intro-cmp',
            templateUrl: 'src/components/introCmp.html',
            directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
        })
    ], IntroCmp);
    return IntroCmp;
}());
exports.IntroCmp = IntroCmp;
//# sourceMappingURL=IntroCmp.js.map