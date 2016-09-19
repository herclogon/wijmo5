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
var question_service_1 = require('./question.service');
var DynamicFormAppComponent = (function () {
    function DynamicFormAppComponent(service) {
        this.questions = service.getQuestions();
    }
    DynamicFormAppComponent = __decorate([
        core_1.Component({
            selector: 'dynamic-form-app-cmp',
            template: "\n    <div>\n      <h3>Job Application for Heroes</h3>\n      <dynamic-form [questions]=\"questions\"></dynamic-form>\n    </div>\n  ",
            providers: [question_service_1.QuestionService]
        }),
        __param(0, core_1.Inject(question_service_1.QuestionService))
    ], DynamicFormAppComponent);
    return DynamicFormAppComponent;
}());
exports.DynamicFormAppComponent = DynamicFormAppComponent;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=app.component.js.map