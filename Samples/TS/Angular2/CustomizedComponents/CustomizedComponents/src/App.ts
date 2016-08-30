///<reference path="../typings/globals/core-js/index.d.ts"/>

'use strict';

import { Component, provide, enableProdMode } from '@angular/core';
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, PathLocationStrategy, APP_BASE_HREF,
//LocationStrategy, HashLocationStrategy } from '@angular/router';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { CORE_DIRECTIVES, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { DataSvc } from './services/DataSvc';
import {InheritedGridView} from './views/InheritedGridView';
import {AggregatedGridView} from './views/AggregatedGridView';

export module WijmoStdNg2App {


    //// AppCmp  component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES]
    })
    @RouteConfig([
            { path: '/', redirectTo: ['InheritedGridView'] },
        { path: '/inheritedGridView', component: InheritedGridView, name: 'InheritedGridView' },
        { path: '/aggregatedGridView', component: AggregatedGridView, name: 'AggregatedGridView' },
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

