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
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var wijmo_angular2_grid_filter_1 = require('wijmo/wijmo.angular2.grid.filter');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        this._downloadsColumnFilterType = wijmo.grid.filter.FilterType.Condition;
        this._culture = 'en';
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData());
        this.countryMap = new wijmo.grid.DataMap(new wijmo.collections.CollectionView(this.dataSvc.getCountryMap()), 'key', 'name');
    }
    Object.defineProperty(AppCmp.prototype, "downloadsColumnFilterType", {
        get: function () {
            return this._downloadsColumnFilterType;
        },
        set: function (value) {
            if (this._downloadsColumnFilterType != value) {
                this._downloadsColumnFilterType = value;
                var f = this.filter;
                if (f) {
                    var col = f.grid.columns.getColumn('downloads'), cf = f.getColumnFilter(col, true);
                    cf.filterType = this._downloadsColumnFilterType;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppCmp.prototype, "culture", {
        get: function () {
            return this._culture;
        },
        set: function (value) {
            if (this._culture != value) {
                this._culture = value;
                var self = this;
                // remove old localization reference
                $.ajax({
                    url: 'bin/Devel/sources/cultures/wijmo.culture.' + self._culture + '.js',
                    dataType: 'script',
                    success: function (data) {
                        wijmo.Control.invalidateAll(); // invalidate all controls to show new culture
                    },
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    AppCmp.prototype.saveFilter = function () {
        localStorage['filter'] = this.filter.filterDefinition;
    };
    AppCmp.prototype.restoreFilter = function () {
        this.filter.filterDefinition = localStorage['filter'];
    };
    // create the filter and expose it to scope for customization
    AppCmp.prototype.initialized = function (s, e) {
        this.filter.filterChanging.addHandler(function () {
            console.log('filter changing');
        });
        this.filter.filterChanged.addHandler(function () {
            console.log('filter changed');
        });
        this.filter.filterApplied.addHandler(function () {
            console.log('filter applied');
        });
    };
    __decorate([
        core_1.ViewChild('filter')
    ], AppCmp.prototype, "filter", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_grid_filter_1.WjGridFilterModule, platform_browser_1.BrowserModule, forms_1.FormsModule],
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