"use strict";
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
var forms_1 = require('@angular/forms');
var dynamic_form_question_component_1 = require('./dynamic-form-question.component');
var question_control_service_1 = require('./question-control.service');
var DynamicFormComponent = (function () {
    function DynamicFormComponent(qcs) {
        this.qcs = qcs;
        this.questions = [];
        this.payLoad = '';
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
        this.form = this.qcs.toFormGroup(this.questions);
    };
    DynamicFormComponent.prototype.onSubmit = function () {
        this.payLoad = JSON.stringify(this.form.value);
    };
    __decorate([
        core_1.Input()
    ], DynamicFormComponent.prototype, "questions", void 0);
    DynamicFormComponent = __decorate([
        core_1.Component({
            selector: 'dynamic-form',
            templateUrl: 'src/DynamicForms/dynamic-form.component.html',
            directives: [dynamic_form_question_component_1.DynamicFormQuestionComponent, forms_1.REACTIVE_FORM_DIRECTIVES],
            providers: [question_control_service_1.QuestionControlService]
        }),
        __param(0, core_1.Inject(question_control_service_1.QuestionControlService))
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());
exports.DynamicFormComponent = DynamicFormComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=dynamic-form.component.js.map