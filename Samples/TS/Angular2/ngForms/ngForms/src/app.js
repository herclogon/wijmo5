///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var wjInput = require('wijmo/wijmo.angular2.input');
var AppTab_1 = require('./components/AppTab');
var validators_1 = require('./validators/validators');
var app_component_1 = require('./DynamicForms/app.component');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp() {
        this.active = true;
        this.num = 3;
        this.num1 = 11;
        this.data = [
            { name: 'Apple Inc', lastPrice: 98.38 },
            { name: 'Amazon.com, Inc.', lastPrice: 320.00 },
            { name: 'Google Inc.', lastPrice: 585.81 },
            { name: 'Yahoo Inc.', lastPrice: 35.68 },
        ];
        this.valueComboValue = 'Apple Inc';
        this.indexComboValue = 0;
    }
    AppCmp.prototype.makePristine = function () {
        var _this = this;
        this.active = false;
        setTimeout(function () { return _this.active = true; }, 0);
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, forms_1.FORM_DIRECTIVES, validators_1.EvenNumberValidator, wjInput.WjInputNumber, wjInput.WjComboBox,
                app_component_1.DynamicFormAppComponent,
                AppTab_1.AppTab, AppTab_1.AppTabPane,]
        })
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(AppCmp, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms()
]);
//# sourceMappingURL=app.js.map