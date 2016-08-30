"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var QuestionControlService = (function () {
    function QuestionControlService() {
    }
    QuestionControlService.prototype.toFormGroup = function (questions) {
        var group = {};
        questions.forEach(function (question) {
            group[question.key] = question.required ? new forms_1.FormControl(question.value || '', forms_1.Validators.required)
                : new forms_1.FormControl(question.value || '');
        });
        return new forms_1.FormGroup(group);
    };
    QuestionControlService = __decorate([
        core_1.Injectable()
    ], QuestionControlService);
    return QuestionControlService;
}());
exports.QuestionControlService = QuestionControlService;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=question-control.service.js.map