///<reference path="../typings/globals/core-js/index.d.ts"/>

import { Component, EventEmitter, provide, ViewChild, Inject, enableProdMode} from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { disableDeprecatedForms, provideForms, FORM_DIRECTIVES } from '@angular/forms';
import { bootstrap } from '@angular/platform-browser-dynamic';
import * as wjInput from 'wijmo/wijmo.angular2.input';
import { AppTab, AppTabPane } from './components/AppTab';
import { EvenNumberValidator } from './validators/validators';
import { DynamicFormAppComponent } from './DynamicForms/app.component';


'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, EvenNumberValidator, wjInput.WjInputNumber, wjInput.WjComboBox,
        DynamicFormAppComponent,
        AppTab, AppTabPane,]
})
export class AppCmp  {
    active = true;

    num = 3;
    num1 = 11;

    data = [
        { name: 'Apple Inc', lastPrice: 98.38 },
        { name: 'Amazon.com, Inc.', lastPrice: 320.00 },
        { name: 'Google Inc.', lastPrice: 585.81 },
        { name: 'Yahoo Inc.', lastPrice: 35.68 },
    ];

    valueComboValue = 'Apple Inc';
    indexComboValue = 0;

    makePristine() {
        this.active = false;
        setTimeout(() => this.active = true, 0);
    }

}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(AppCmp, [
    disableDeprecatedForms(),
    provideForms()
]);