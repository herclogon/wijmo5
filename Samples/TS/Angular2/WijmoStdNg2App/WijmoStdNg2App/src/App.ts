///<reference path="../typings/globals/core-js/index.d.ts"/>

'use strict';

import { Component, EventEmitter, enableProdMode, NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { DataSvc } from './services/DataSvc';
import {Component1Cmp} from './components/Component1Cmp';
import {Component2Cmp} from './components/Component2Cmp';

export module WijmoStdNg2App {


    //// AppCmp  component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html'
    })
    export class AppCmp {
        constructor() {
        }

    }
}

export const routes: Routes = [
    { path: '', redirectTo: 'component1', pathMatch: 'full' },
    { path: 'component1', data: { caption: 'Component1' }, component: Component1Cmp },
    { path: 'component2', data: { caption: 'Component2' }, component: Component2Cmp }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });


@NgModule({
    imports: [BrowserModule, routing, WjGridModule, WjInputModule],
    declarations: [WijmoStdNg2App.AppCmp, Component1Cmp, Component2Cmp],
    providers: [DataSvc],
    bootstrap: [WijmoStdNg2App.AppCmp]
})
export class AppModule {
}


enableProdMode();
// Bootstrap application 
platformBrowserDynamic().bootstrapModule(AppModule);