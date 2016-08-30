///<reference path="../typings/globals/core-js/index.d.ts"/>
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var common_2 = require('@angular/common');
var DataSvc_1 = require('./services/DataSvc');
var Component1Cmp_1 = require('./components/Component1Cmp');
var Component2Cmp_1 = require('./components/Component2Cmp');
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
                directives: [common_2.CORE_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES]
            }),
            router_deprecated_1.RouteConfig([
                { path: '/', redirectTo: ['Component1'] },
                { path: '/component1', component: Component1Cmp_1.Component1Cmp, name: 'Component1' },
                { path: '/component2', component: Component2Cmp_1.Component2Cmp, name: 'Component2' },
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