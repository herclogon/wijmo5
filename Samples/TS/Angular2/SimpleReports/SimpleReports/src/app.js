///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Angular
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_1 = require('@angular/router');
var app_routing_1 = require('./app.routing');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp(router, dataSvc, ngZone) {
        var _this = this;
        this.router = router;
        this.ngZone = ngZone;
        this._dataSvc = dataSvc;
        dataSvc.initData();
        dataSvc.viewsLoadedFun = this._viewsLoadedChanged.bind(this);
        // report list
        this.reports = new wijmo.collections.CollectionView([
            { header: 'Alphabetical List of Products', name: 'alphabeticalListOfProducts' },
            { header: 'Customer Labels', name: 'customerLabels' },
            { header: 'Employees', name: 'employees' },
            { header: 'Product Catalog', name: 'productCatalog' },
            { header: 'Products by Category', name: 'productsByCategory' },
            { header: 'Sales by Category', name: 'salesByCategory' },
            { header: 'Sales Chart', name: 'salesChart' },
            { header: 'Employee Sales By Country', name: 'employeeSalesByCountry' }
        ], {
            currentChanged: function (s, e) {
                router.navigate([s.currentItem.name]);
            }
        });
        // zoom levels
        this.zoomLevels = new wijmo.collections.CollectionView([
            { header: '25%', value: 0.25 },
            { header: '50%', value: 0.5 },
            { header: '75%', value: 0.75 },
            { header: '100%', value: 1 },
            { header: '125%', value: 1.25 }
        ], {
            currentChanged: function (s, e) {
                //var view = <HTMLElement>document.querySelector('.zoom');
                var view = _this.zoomEle.nativeElement;
                if (view) {
                    view.style.zoom = s.currentItem.value;
                }
            }
        });
    }
    AppCmp.prototype.ngAfterViewInit = function () {
        this.zoomLevels.moveCurrentToPosition(2);
    };
    // commands
    AppCmp.prototype.print = function () {
        // create document
        var doc = new wijmo.PrintDocument({
            title: this.reports.currentItem.header
        });
        // add content to it
        //var view = <HTMLElement>document.querySelector('.zoom')
        var view = this.zoomEle.nativeElement;
        for (var i = 0; i < view.children.length; i++) {
            doc.append(view.children[i]);
        }
        // and print it
        doc.print();
        // work around the "More tasks executed then were scheduled." exception
        //this.ngZone.runOutsideAngular(() => doc.print());
    };
    AppCmp.prototype._viewsLoadedChanged = function () {
        this.viewsLoaded = this._dataSvc.viewsLoaded;
    };
    __decorate([
        core_1.ViewChild('zoomEle')
    ], AppCmp.prototype, "zoomEle", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html'
        }),
        __param(0, core_1.Inject(router_1.Router)),
        __param(1, core_1.Inject(DataSvc_1.DataSvc)),
        __param(2, core_1.Inject(core_1.NgZone))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routing_1.routing, wijmo_angular2_input_1.WjInputModule],
            declarations: [AppCmp],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [AppCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application 
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map