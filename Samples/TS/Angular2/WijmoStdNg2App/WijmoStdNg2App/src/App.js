///<reference path="../typings/globals/core-js/index.d.ts"/>
'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
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
                templateUrl: 'src/app.html'
            })
        ], AppCmp);
        return AppCmp;
    }());
    WijmoStdNg2App.AppCmp = AppCmp;
})(WijmoStdNg2App = exports.WijmoStdNg2App || (exports.WijmoStdNg2App = {}));
exports.routes = [
    { path: '', redirectTo: 'component1', pathMatch: 'full' },
    { path: 'component1', data: { caption: 'Component1' }, component: Component1Cmp_1.Component1Cmp },
    { path: 'component2', data: { caption: 'Component2' }, component: Component2Cmp_1.Component2Cmp }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes, { useHash: true });
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, exports.routing, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [WijmoStdNg2App.AppCmp, Component1Cmp_1.Component1Cmp, Component2Cmp_1.Component2Cmp],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [WijmoStdNg2App.AppCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application 
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=App.js.map