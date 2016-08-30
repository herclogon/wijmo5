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
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var router_deprecated_1 = require('@angular/router-deprecated');
var common_2 = require('@angular/common');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var DataSvc_1 = require('./services/DataSvc');
var AlphabeticalListOfProductsCmp_1 = require('./components/AlphabeticalListOfProductsCmp');
var CustomerLabelsCmp_1 = require('./components/CustomerLabelsCmp');
var EmployeesCmp_1 = require('./components/EmployeesCmp');
var ProductCatalogCmp_1 = require('./components/ProductCatalogCmp');
var ProductsByCategoryCmp_1 = require('./components/ProductsByCategoryCmp');
var SalesByCategoryCmp_1 = require('./components/SalesByCategoryCmp');
var SalesChartCmp_1 = require('./components/SalesChartCmp');
var EmployeeSalesByCountryCmp_1 = require('./components/EmployeeSalesByCountryCmp');
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
            { header: 'Alphabetical List of Products', name: 'AalphabeticalListOfProducts' },
            { header: 'Customer Labels', name: 'CustomerLabels' },
            { header: 'Employees', name: 'Employees' },
            { header: 'Product Catalog', name: 'ProductCatalog' },
            { header: 'Products by Category', name: 'ProductsByCategory' },
            { header: 'Sales by Category', name: 'SalesByCategory' },
            { header: 'Sales Chart', name: 'SalesChart' },
            { header: 'Employee Sales By Country', name: 'EmployeeSalesByCountry' }
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
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES, wjNg2Input.WjComboBox]
        }),
        router_deprecated_1.RouteConfig([
            // { path: '/', redirectTo: ['AlphabeticalListOfProducts'] },
            { path: '/alphabeticalListOfProducts', component: AlphabeticalListOfProductsCmp_1.AlphabeticalListOfProductsCmp, name: 'AalphabeticalListOfProducts', useAsDefault: true },
            { path: '/customerLabels', component: CustomerLabelsCmp_1.CustomerLabelsCmp, name: 'CustomerLabels' },
            { path: '/employees', component: EmployeesCmp_1.EmployeesCmp, name: 'Employees' },
            { path: '/productCatalog', component: ProductCatalogCmp_1.ProductCatalogCmp, name: 'ProductCatalog' },
            { path: '/productsByCategory', component: ProductsByCategoryCmp_1.ProductsByCategoryCmp, name: 'ProductsByCategory' },
            { path: '/salesByCategory', component: SalesByCategoryCmp_1.SalesByCategoryCmp, name: 'SalesByCategory' },
            { path: '/salesChart', component: SalesChartCmp_1.SalesChartCmp, name: 'SalesChart' },
            { path: '/employeeSalesByCountry', component: EmployeeSalesByCountryCmp_1.EmployeeSalesByCountryCmp, name: 'EmployeeSalesByCountry' },
        ]),
        __param(0, core_1.Inject(router_deprecated_1.Router)),
        __param(1, core_1.Inject(DataSvc_1.DataSvc)),
        __param(2, core_1.Inject(core_1.NgZone))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(AppCmp, [
    router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(common_2.LocationStrategy, { useClass: common_2.HashLocationStrategy }),
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map