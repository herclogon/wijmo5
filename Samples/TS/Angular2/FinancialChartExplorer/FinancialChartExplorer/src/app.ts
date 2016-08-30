///<reference path="../typings/globals/core-js/index.d.ts"/>

// Angular
import { Component, EventEmitter, provide, Input, Inject, enableProdMode } from '@angular/core';
import { Http, HTTP_BINDINGS } from '@angular/http';
import { CORE_DIRECTIVES } from '@angular/common';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

// Services
import { MenuSvc } from './services/MenuSvc';
import { DataSvc } from './services/DataSvc';
import { TooltipSvc } from './services/TooltipSvc';

// Wijmo Input components 
import * as wjNg2Input from 'wijmo/wijmo.angular2.input';

// Sample components
// Chart Types
import { HeikinAshiCmp } from './components/charttype/HeikinAshiCmp';
import { LineBreakCmp } from './components/charttype/LineBreakCmp';
import { RenkoCmp } from './components/charttype/RenkoCmp';
import { KagiCmp } from './components/charttype/KagiCmp';
import { ColumnVolumeCmp } from './components/charttype/ColumnVolumeCmp';
import { EquiVolumeCmp } from './components/charttype/EquiVolumeCmp';
import { CandleVolumeCmp } from './components/charttype/CandleVolumeCmp';
import { ArmsCandleVolumeCmp } from './components/charttype/ArmsCandleVolumeCmp';
// Interaction 
import { MarkersCmp } from './components/interaction/MarkersCmp';
import { RangeSelectorCmp } from './components/interaction/RangeSelectorCmp';
// Analytics
import { TrendLinesCmp } from './components/analytics/TrendLinesCmp';
import { MovingAveragesCmp } from './components/analytics/MovingAveragesCmp';
import { OverlaysCmp } from './components/analytics/OverlaysCmp';
import { IndicatorsCmp } from './components/analytics/IndicatorsCmp';
import { EventAnnotationsCmp } from './components/analytics/EventAnnotationsCmp';
import { FibonacciToolCmp } from './components/analytics/FibonacciToolCmp';

export module FinancialChartExplorer {
    'use strict';

    // The FinancialChartExplorer application root component.
    @Component({
        selector: 'app-cmp',
        templateUrl: 'src/app.html',
        directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem,
            wjNg2Input.WjMenuSeparator],
    })
    @RouteConfig([
        { path: '/', redirectTo: ['HeikinAshi'] },
        // Chart Types
        { path: '/charttype/heikinAshi', component: HeikinAshiCmp, name: 'HeikinAshi' },
        { path: '/charttype/lineBreak', component: LineBreakCmp, name: 'LineBreak' },
        { path: '/charttype/renko', component: RenkoCmp, name: 'Renko' },
        { path: '/charttype/kagi', component: KagiCmp, name: 'Kagi' },
        { path: '/charttype/columnVolume', component: ColumnVolumeCmp, name: 'ColumnVolume' },
        { path: '/charttype/equiVolume', component: EquiVolumeCmp, name: 'EquiVolume' },
        { path: '/charttype/candleVolume', component: CandleVolumeCmp, name: 'CandleVolume' },
        { path: '/charttype/armsCandleVolume', component: ArmsCandleVolumeCmp, name: 'ArmsCandleVolume' },
        // Interaction 
        { path: '/interaction/markers', component: MarkersCmp, name: 'Markers' },
        { path: '/interaction/rangeSelector', component: RangeSelectorCmp, name: 'RangeSelector' },
        //// Analytics
        { path: '/analytics/trendLines', component: TrendLinesCmp, name: 'TrendLines' },
        { path: '/analytics/movingAverages', component: MovingAveragesCmp, name: 'MovingAverages' },
        { path: '/analytics/overlays', component: OverlaysCmp, name: 'Overlays' },
        { path: '/analytics/indicators', component: IndicatorsCmp, name: 'Indicators' },
        { path: '/analytics/eventAnnotations', component: EventAnnotationsCmp, name: 'EventAnnotations' },
        { path: '/analytics/fibonacciTool', component: FibonacciToolCmp, name: 'FibonacciTool' }
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
bootstrap(FinancialChartExplorer.AppCmp, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, { useClass: HashLocationStrategy }),
    provide(Http, { useClass: Http }),
    HTTP_BINDINGS,
    MenuSvc,
    DataSvc,
    TooltipSvc
]);