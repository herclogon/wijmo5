import { Component, Inject }       from '@angular/core';

import { DynamicFormComponent }     from './dynamic-form.component';
import { QuestionService } from './question.service';

@Component({
    selector: 'dynamic-form-app-cmp',
  template: `
    <div>
      <h3>Job Application for Heroes</h3>
      <dynamic-form [questions]="questions"></dynamic-form>
    </div>
  `,
  providers:  [QuestionService]
})
export class DynamicFormAppComponent {
  questions: any[];

  constructor( @Inject(QuestionService) service: QuestionService) {
    this.questions = service.getQuestions();
  }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/