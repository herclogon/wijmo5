///<reference path="../typings/globals/core-js/index.d.ts"/>

import { Component, EventEmitter, ViewChild, Inject, enableProdMode, NgModule} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { TabsModule } from './components/AppTab';
import { EvenNumberValidator } from './validators/validators';
import { DynamicFormAppModule } from './DynamicForms/app.module';


'use strict';

// The application root component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
})
export class AppCmp  {
    @ViewChild('form1') form1: NgForm;

    active = true;

    num = 3;
    num1 = 11;
    valueComboValue = 'Apple Inc';
    indexComboValue = 0;

    data = [
        { name: 'Apple Inc', lastPrice: 98.38 },
        { name: 'Amazon.com, Inc.', lastPrice: 320.00 },
        { name: 'Google Inc.', lastPrice: 585.81 },
        { name: 'Yahoo Inc.', lastPrice: 35.68 },
    ];

    defaultData = {
        input1: this.num, inputNumber1: this.num1,
        valueCombo: this.valueComboValue, indexCombo: this.indexComboValue
    };

    resetForm() {
        this.form1.resetForm(this.defaultData);
    }

}

@NgModule({
    imports: [WjInputModule, BrowserModule, FormsModule, TabsModule, DynamicFormAppModule],
    declarations: [AppCmp, EvenNumberValidator],
    bootstrap: [AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
platformBrowserDynamic().bootstrapModule(AppModule);