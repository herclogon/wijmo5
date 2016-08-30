///<reference path="../typings/globals/core-js/index.d.ts"/>
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
//import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, PathLocationStrategy, APP_BASE_HREF,
//LocationStrategy, HashLocationStrategy } from '@angular/router';
var router_deprecated_1 = require('@angular/router-deprecated');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_1 = require('@angular/common');
var DataSvc_1 = require('./services/DataSvc');
var InheritedGridView_1 = require('./views/InheritedGridView');
var AggregatedGridView_1 = require('./views/AggregatedGridView');
var WijmoStdNg2App;
(function (WijmoStdNg2App) {
    //// AppCmp  component.
    var AppCmp = (function () {
        function AppCmp() {
        }
        AppCmp = __decorate([
            core_1.Component({
                selector: 'app-cmp',
                templateUrl: 'src/app.html',
                directives: [common_1.CORE_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES]
            }),
            router_deprecated_1.RouteConfig([
                { path: '/', redirectTo: ['InheritedGridView'] },
                { path: '/inheritedGridView', component: InheritedGridView_1.InheritedGridView, name: 'InheritedGridView' },
                { path: '/aggregatedGridView', component: AggregatedGridView_1.AggregatedGridView, name: 'AggregatedGridView' },
            ])
        ], AppCmp);
        return AppCmp;
    }());
    WijmoStdNg2App.AppCmp = AppCmp;
})(WijmoStdNg2App = exports.WijmoStdNg2App || (exports.WijmoStdNg2App = {}));
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(WijmoStdNg2App.AppCmp, [
    router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    DataSvc_1.DataSvc]);
//# sourceMappingURL=App.js.map