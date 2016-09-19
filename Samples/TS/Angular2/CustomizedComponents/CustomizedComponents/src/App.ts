///<reference path="../typings/globals/core-js/index.d.ts"/>

'use strict';

import { Component, enableProdMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes } from '@angular/router';
import { routing } from './app.routing';
import { DataSvc } from './services/DataSvc';



//// AppCmp  component.
@Component({
    selector: 'app-cmp',
    templateUrl: 'src/app.html',
})

export class AppCmp {
    constructor() {
    }

}

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppCmp],
    providers: [DataSvc],
    bootstrap: [AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application 
platformBrowserDynamic().bootstrapModule(AppModule);