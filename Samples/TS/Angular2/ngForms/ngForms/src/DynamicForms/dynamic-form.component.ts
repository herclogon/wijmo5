import { Component, Input, OnInit, Inject }  from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

import { DynamicFormQuestionComponent } from './dynamic-form-question.component';
import { QuestionBase }                 from './question-base';
import { QuestionControlService }       from './question-control.service';

@Component({
  selector: 'dynamic-form',
  templateUrl: 'src/DynamicForms/dynamic-form.component.html',
  directives: [DynamicFormQuestionComponent, REACTIVE_FORM_DIRECTIVES],
  providers:  [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor( @Inject(QuestionControlService) private qcs: QuestionControlService) {  }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/