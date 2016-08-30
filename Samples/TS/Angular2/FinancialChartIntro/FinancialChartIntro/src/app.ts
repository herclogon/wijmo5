///<reference path="../typings/globals/core-js/index.d.ts"/>


// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { Http, HTTP_BINDINGS } from '@angular/http';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';

// Services
import { DataSvc } from './services/DataSvc';

// Sample components
import { GettingStartedCmp } from './components/GettingStartedCmp';
import { ChartTypesCmp } from './components/ChartTypesCmp';
import { MarkerCmp } from './components/MarkerCmp';
import { RangeSelectorCmp } from './components/RangeSelectorCmp';
import { TrendLinesCmp } from './components/TrendLinesCmp';
import { EventAnnotationCmp } from './components/EventAnnotationCmp';
import { AnimationCmp } from './components/AnimationCmp';

export module FinancialChartIntro {
    'use strict';

    // The FinancialChartIntro application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, GettingStartedCmp, ChartTypesCmp, MarkerCmp, RangeSelectorCmp, TrendLinesCmp, EventAnnotationCmp, AnimationCmp]
    })
    export class AppCmp {
        constructor() {
        }

    }
}

enableProdMode();
// Bootstrap application with hash style navigation and global services.
bootstrap(FinancialChartIntro.AppCmp, [
    provide(Http, { useClass: Http }),
    HTTP_BINDINGS,
    DataSvc
]);