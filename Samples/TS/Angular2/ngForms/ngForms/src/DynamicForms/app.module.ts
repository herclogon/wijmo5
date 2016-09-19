import { BrowserModule }                from '@angular/platform-browser';
import { ReactiveFormsModule }          from '@angular/forms';
import { NgModule }                     from '@angular/core';

import { WjInputModule } from 'wijmo/wijmo.angular2.input';

import { DynamicFormAppComponent }                 from './app.component';
import { DynamicFormComponent }         from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule, WjInputModule],
    declarations: [DynamicFormAppComponent, DynamicFormComponent, DynamicFormQuestionComponent],
    exports: [DynamicFormAppComponent]
})
export class DynamicFormAppModule {
    constructor() {
    }
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/