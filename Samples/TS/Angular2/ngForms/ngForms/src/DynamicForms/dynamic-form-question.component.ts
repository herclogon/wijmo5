import { Component, Input } from '@angular/core';
import { FormGroup, REACTIVE_FORM_DIRECTIVES, AbstractControlDirective, NgModel } from '@angular/forms';
import * as wjInput from 'wijmo/wijmo.angular2.input';

import { QuestionBase }     from './question-base';

@Component({
  selector: 'df-question',
  templateUrl: 'src/DynamicForms/dynamic-form-question.component.html',
  directives: [REACTIVE_FORM_DIRECTIVES, wjInput.WjComboBox, wjInput.WjInputNumber]
})
export class DynamicFormQuestionComponent {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

  // added by GrapeCity
  ngModelState(ngm: AbstractControlDirective): string {
      let ret = ngm instanceof NgModel ? `name: ${ngm.name};  ` : '';
      return ret + `touched: ${ngm.touched};  pristine: ${ngm.pristine};  valid: ${ngm.valid};  errors: ${JSON.stringify(ngm.errors)};  value: ${JSON.stringify(ngm.value)}`;
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/