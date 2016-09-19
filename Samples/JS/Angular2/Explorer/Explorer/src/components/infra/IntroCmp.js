'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var IntroCmp = (function () {
    function IntroCmp() {
    }
    IntroCmp = __decorate([
        core_1.Component({
            selector: 'intro-cmp',
            templateUrl: 'src/components/infra/introCmp.html'
        })
    ], IntroCmp);
    return IntroCmp;
}());
exports.IntroCmp = IntroCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: IntroCmp }
]);
var IntroModule = (function () {
    function IntroModule() {
    }
    IntroModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing],
            declarations: [IntroCmp],
        })
    ], IntroModule);
    return IntroModule;
}());
exports.IntroModule = IntroModule;
//# sourceMappingURL=IntroCmp.js.map