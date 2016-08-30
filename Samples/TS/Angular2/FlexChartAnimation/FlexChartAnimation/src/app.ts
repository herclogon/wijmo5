///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Services
import { MenuSvc } from './services/MenuSvc';
import { DataSvc } from './services/DataSvc';

// Wijmo Input components 
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// Sample components
import { FlexChartAnimationCmp } from './components/FlexChartAnimationCmp';
import { FlexPieAnimationCmp } from './components/FlexPieAnimationCmp';

export module FlexChartAnimation {
    'use strict';

    // The FlexChartAnimation application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
            wjNg2Input.WjMenuSeparator]
    })
    @RouteConfig([
        { path: '/', redirectTo: ['FlexChartAnimation'] },
        { path: '/flexChartAnimation', component: FlexChartAnimationCmp, name: 'FlexChartAnimation' },
        { path: '/flexPieAnimation', component: FlexPieAnimationCmp, name: 'FlexPieAnimation' }
    ])
    export class AppCmp {
        @Input() menuData;

        constructor( @Inject(MenuSvc) menuSvc: MenuSvc) {
            this.menuData = menuSvc.getMenu();
        }

    }
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(FlexChartAnimation.AppCmp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    MenuSvc,
    DataSvc
]);