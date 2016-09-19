///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// Services
var MenuSvc_1 = require('./services/MenuSvc');
var DataSvc_1 = require('./services/DataSvc');
var SparkSvc_1 = require('./services/SparkSvc');
var explorer;
(function (explorer) {
    'use strict';
    // The Explorer application root component.
    var AppCmp = (function () {
        function AppCmp() {
            this._activeTheme = '';
            this.navCollapsed = true;
            // Used to show navigation links and section headers in markup.
            this.routTree = app_routing_1.routeTree;
        }
        Object.defineProperty(AppCmp.prototype, "activeTheme", {
            get: function () {
                return this._activeTheme;
            },
            set: function (value) {
                if (this._activeTheme != value) {
                    this._activeTheme = value;
                    var themeLink = document.getElementById('activeThemeLink');
                    if (themeLink) {
                        themeLink.href = value;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        __decorate([
            core_1.Input()
        ], AppCmp.prototype, "navCollapsed", void 0);
        AppCmp = __decorate([
            core_1.Component({
                selector: 'app-cmp',
                templateUrl: 'src/app.html'
            })
        ], AppCmp);
        return AppCmp;
    }());
    explorer.AppCmp = AppCmp;
})(explorer = exports.explorer || (exports.explorer = {}));
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, http_1.HttpModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [explorer.AppCmp],
            providers: [DataSvc_1.DataSvc, MenuSvc_1.MenuSvc, SparkSvc_1.SparkSvc],
            bootstrap: [explorer.AppCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application 
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map