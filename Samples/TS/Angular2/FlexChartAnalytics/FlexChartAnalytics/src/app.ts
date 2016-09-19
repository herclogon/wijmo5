///<reference path="../typings/globals/core-js/index.d.ts"/>

import { Component, EventEmitter, Inject, enableProdMode, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Routes } from '@angular/router';
import {routeTree, routing} from './app.routing';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

// Services
//import { MenuSvc } from './services/MenuSvc';
import { DataSvc } from './services/DataSvc';

export module FlexChartAnalytics {
    'use strict';

    // The FlexChartAnalytics application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html'
    })
    export class AppCmp {
        // Used to show navigation links and section headers in markup.
        private routTree = routeTree;
    }
}

@NgModule({
    imports: [BrowserModule, routing, WjInputModule],
    declarations: [FlexChartAnalytics.AppCmp],
    providers: [DataSvc],
    bootstrap: [FlexChartAnalytics.AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application 
platformBrowserDynamic().bootstrapModule(AppModule);