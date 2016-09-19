'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
// Intro sample component.
var InputIntroCmp = (function () {
    function InputIntroCmp() {
    }
    InputIntroCmp = __decorate([
        core_1.Component({
            selector: 'input-intro-cmp',
            templateUrl: 'src/components/input/inputIntroCmp.html'
        })
    ], InputIntroCmp);
    return InputIntroCmp;
}());
exports.InputIntroCmp = InputIntroCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: InputIntroCmp }
]);
var InputIntroModule = (function () {
    function InputIntroModule() {
    }
    InputIntroModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing],
            declarations: [InputIntroCmp],
        })
    ], InputIntroModule);
    return InputIntroModule;
}());
exports.InputIntroModule = InputIntroModule;
//# sourceMappingURL=InputIntroCmp.js.map