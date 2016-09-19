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
var http_1 = require('@angular/http');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_grid_detail_1 = require('wijmo/wijmo.angular2.grid.detail');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The Explorer application root component.
var AppCmp = (function () {
    function AppCmp(_dataSvc, _http) {
        this._dataSvc = _dataSvc;
        this._http = _http;
        this._productsCache = {};
        this.detailMode = wijmo.grid.detail.DetailVisibilityMode[wijmo.grid.detail.DetailVisibilityMode.ExpandSingle];
        this.categories = new wijmo.collections.CollectionView();
        this.products = new wijmo.collections.CollectionView();
        this.getData(this.categories, 'Categories');
        this.getData(this.products, 'Products');
    }
    AppCmp.prototype.ngAfterViewInit = function () {
        if (this.flex1) {
            this._initDetailProvider(this.flex1);
        }
    };
    AppCmp.prototype._initDetailProvider = function (grid) {
        var _this = this;
        var dp = new wijmo.grid.detail.FlexGridDetailProvider(grid);
        dp.maxHeight = 250;
        // create detail cells for a given row
        dp.createDetailCell = function (row) {
            var cell = document.createElement('div');
            grid.hostElement.appendChild(cell);
            var detailGrid = new wijmo.grid.FlexGrid(cell, {
                headersVisibility: wijmo.grid.HeadersVisibility.Column,
                autoGenerateColumns: false,
                itemsSource: _this.getProducts(row.dataItem.CategoryID),
                columns: [
                    { header: 'ID', binding: 'ProductID' },
                    { header: 'Name', binding: 'ProductName' },
                    { header: 'Qty/Unit', binding: 'QuantityPerUnit' },
                    { header: 'Unit Price', binding: 'UnitPrice' },
                    { header: 'Discontinued', binding: 'Discontinued' }
                ]
            });
            cell.parentElement.removeChild(cell);
            return cell;
        };
        // remove details from items with odd CategoryID
        dp.rowHasDetail = function (row) {
            return row.dataItem.CategoryID % 2 == 0;
        };
    };
    // function to fill a CollectionView with data from an OData source
    AppCmp.prototype.getData = function (view, url) {
        var _this = this;
        // build request url
        var serviceBase = 'http://services.odata.org/Northwind/Northwind.svc/';
        url = serviceBase + url;
        url += (url.indexOf('?') < 0) ? '?' : '&' + '$format=json';
        // TBD: achieve this via Ng2 http
        // submit request
        //this._http.get(url).subscribe((res: Response) => {
        //this._http.get(url).map((res: Response) => res.json()).subscribe(something => {
        //this._http.get(url).subscribe(something => {
        $.getJSON(url, null, function (data) {
            // handle this batch
            var items = data.value;
            for (var i = 0; i < items.length; i++) {
                view.sourceCollection.push(items[i]);
            }
            // and go fetch more...
            var next = data['odata.nextLink'];
            if (next) {
                _this.getData(view, next);
            }
        });
    };
    AppCmp.prototype.getProducts = function (categoryID) {
        var view = this._productsCache[categoryID];
        if (!view) {
            view = new wijmo.collections.CollectionView(this.products.sourceCollection);
            view.filter = function (item) {
                return item.CategoryID == categoryID;
            };
            this._productsCache[categoryID] = view;
        }
        return view;
    };
    __decorate([
        core_1.ViewChild('flex1')
    ], AppCmp.prototype, "flex1", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)),
        __param(1, core_1.Inject(http_1.Http))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_detail_1.WjGridDetailModule, platform_browser_1.BrowserModule, http_1.HttpModule],
            declarations: [AppCmp],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [AppCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map