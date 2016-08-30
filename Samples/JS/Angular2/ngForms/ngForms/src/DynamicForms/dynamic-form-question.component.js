"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var wjInput = require('wijmo/wijmo.angular2.input');
var DynamicFormQuestionComponent = (function () {
    function DynamicFormQuestionComponent() {
    }
    Object.defineProperty(DynamicFormQuestionComponent.prototype, "isValid", {
        get: function () { return this.form.controls[this.question.key].valid; },
        enumerable: true,
        configurable: true
    });
    // added by GrapeCity
    DynamicFormQuestionComponent.prototype.ngModelState = function (ngm) {
        var ret = ngm instanceof forms_1.NgModel ? "name: " + ngm.name + ";  " : '';
        return ret + ("touched: " + ngm.touched + ";  pristine: " + ngm.pristine + ";  valid: " + ngm.valid + ";  errors: " + JSON.stringify(ngm.errors) + ";  value: " + JSON.stringify(ngm.value));
    };
    __decorate([
        core_1.Input()
    ], DynamicFormQuestionComponent.prototype, "question", void 0);
    __decorate([
        core_1.Input()
    ], DynamicFormQuestionComponent.prototype, "form", void 0);
    DynamicFormQuestionComponent = __decorate([
        core_1.Component({
            selector: 'df-question',
            templateUrl: 'src/DynamicForms/dynamic-form-question.component.html',
            directives: [forms_1.REACTIVE_FORM_DIRECTIVES, wjInput.WjComboBox, wjInput.WjInputNumber]
        })
    ], DynamicFormQuestionComponent);
    return DynamicFormQuestionComponent;
}());
exports.DynamicFormQuestionComponent = DynamicFormQuestionComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=dynamic-form-question.component.js.map