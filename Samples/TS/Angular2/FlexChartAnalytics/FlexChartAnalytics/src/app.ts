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
import { TrendLineCmp } from './components/TrendLineCmp';
import { MovingAverageCmp } from './components/MovingAverageCmp';
import { YFunctionSeriesCmp } from './components/YFunctionSeriesCmp';
import { ParametricFunctionSeriesCmp } from './components/ParametricFunctionSeriesCmp';
import { WaterfallCmp } from './components/WaterfallCmp';

export module FlexChartAnalytics {
    'use strict';

    // The FlexChartAnalytics application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
            wjNg2Input.WjMenuSeparator]
    })
    @RouteConfig([
        { path: '/', redirectTo: ['TrendLine'] },
        { path: '/trendLine', component: TrendLineCmp, name: 'TrendLine' },
        { path: '/movingAverage', component: MovingAverageCmp, name: 'MovingAverage' },
        { path: '/yFunctionSeries', component: YFunctionSeriesCmp, name: 'YFunctionSeries' },
        { path: '/parametricFunctionSeries', component: ParametricFunctionSeriesCmp, name: 'ParametricFunctionSeries' },
        { path: '/waterfall', component: WaterfallCmp, name: 'Waterfall' }
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
bootstrap(FlexChartAnalytics.AppCmp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    MenuSvc,
    DataSvc
]);