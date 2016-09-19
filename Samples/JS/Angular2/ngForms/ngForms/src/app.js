///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var AppTab_1 = require('./components/AppTab');
var validators_1 = require('./validators/validators');
var app_module_1 = require('./DynamicForms/app.module');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp() {
        this.active = true;
        this.num = 3;
        this.num1 = 11;
        this.valueComboValue = 'Apple Inc';
        this.indexComboValue = 0;
        this.data = [
            { name: 'Apple Inc', lastPrice: 98.38 },
            { name: 'Amazon.com, Inc.', lastPrice: 320.00 },
            { name: 'Google Inc.', lastPrice: 585.81 },
            { name: 'Yahoo Inc.', lastPrice: 35.68 },
        ];
        this.defaultData = {
            input1: this.num, inputNumber1: this.num1,
            valueCombo: this.valueComboValue, indexCombo: this.indexComboValue
        };
    }
    AppCmp.prototype.resetForm = function () {
        this.form1.resetForm(this.defaultData);
    };
    __decorate([
        core_1.ViewChild('form1')
    ], AppCmp.prototype, "form1", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
        })
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [wijmo_angular2_input_1.WjInputModule, platform_browser_1.BrowserModule, forms_1.FormsModule, AppTab_1.TabsModule, app_module_1.DynamicFormAppModule],
            declarations: [AppCmp, validators_1.EvenNumberValidator],
            bootstrap: [AppCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map