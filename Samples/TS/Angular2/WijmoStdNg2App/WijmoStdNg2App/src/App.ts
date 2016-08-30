///<reference path="../typings/globals/core-js/index.d.ts"/>

'use strict';

import { Component, provide, enableProdMode } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { CORE_DIRECTIVES } from '@angular/common';
import { DataSvc } from './services/DataSvc';
import {Component1Cmp} from './components/Component1Cmp';
import {Component2Cmp} from './components/Component2Cmp';

export module WijmoStdNg2App {


    //// AppCmp  component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
    })
    @RouteConfig([
        { path: '/', redirectTo: ['Component1'] },
        { path: '/component1', component: Component1Cmp, name: 'Component1' },
        { path: '/component2', component: Component2Cmp, name: 'Component2' },
         ])

    export class AppCmp {
        constructor() {
        }

    }
}


enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(WijmoStdNg2App.AppCmp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    DataSvc]);

