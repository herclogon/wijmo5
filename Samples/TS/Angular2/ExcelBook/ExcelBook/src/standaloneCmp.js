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
var wijmo_angular2_grid_sheet_1 = require('wijmo/wijmo.angular2.grid.sheet');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The Standalone application root component.
var StandaloneCmp = (function () {
    function StandaloneCmp(dataSvc) {
        this.sheets = [];
        this.selectedSheetIndex = 0;
        this.dataSvc = dataSvc;
        this.data = dataSvc.getData(50);
    }
    StandaloneCmp.prototype.flexInitialized = function (flexSheet) {
        var self = this;
        if (flexSheet) {
            flexSheet.deferUpdate(function () {
                for (var i = 0; i < flexSheet.sheets.length; i++) {
                    flexSheet.sheets.selectedIndex = i;
                    switch (flexSheet.sheets[i].name) {
                        case 'Country':
                            flexSheet.selectedSheet.itemsSource = self.data;
                            self._initDataMapForBindingSheet(flexSheet);
                            break;
                    }
                    self.sheets.push(flexSheet.sheets[i].name);
                }
                flexSheet.selectedSheetIndex = 0;
            });
            flexSheet.loaded.addHandler(function () {
                var sheetIndex = 0;
                self.sheets.length = 0;
                for (; sheetIndex < flexSheet.sheets.length; sheetIndex++) {
                    self.sheets.push(flexSheet.sheets[sheetIndex].name);
                }
                self.selectedSheetIndex = flexSheet.selectedSheetIndex;
            });
        }
    };
    // export 
    StandaloneCmp.prototype.save = function () {
        if (this.flexSheet) {
            this.flexSheet.save('StandaloneFlexSheet.xlsx');
        }
    };
    // import
    StandaloneCmp.prototype.load = function () {
        var fileEle = $('#importFile')[0];
        if (this.flexSheet && fileEle.files[0]) {
            this.flexSheet.load(fileEle.files[0]);
        }
    };
    //  Change the selected sheet for the flexsheet control
    StandaloneCmp.prototype.changeSelectedSheet = function (e) {
        if (this.flexSheet) {
            this.flexSheet.selectedSheetIndex = +e.target.value;
        }
    };
    // initialize the dataMap for the bound sheet.
    StandaloneCmp.prototype._initDataMapForBindingSheet = function (flexSheet) {
        var column;
        if (flexSheet) {
            column = flexSheet.columns.getColumn('countryId');
            if (column && !column.dataMap) {
                column.dataMap = this._buildDataMap(this.dataSvc.countries);
            }
            column = flexSheet.columns.getColumn('productId');
            if (column && !column.dataMap) {
                column.width = 100;
                column.dataMap = this._buildDataMap(this.dataSvc.products);
            }
        }
    };
    // build a data map from a string array using the indices as keys
    StandaloneCmp.prototype._buildDataMap = function (items) {
        var map = [];
        for (var i = 0; i < items.length; i++) {
            map.push({ key: i, value: items[i] });
        }
        return new wijmo.grid.DataMap(map, 'key', 'value');
    };
    __decorate([
        core_1.ViewChild('flexSheet')
    ], StandaloneCmp.prototype, "flexSheet", void 0);
    StandaloneCmp = __decorate([
        core_1.Component({
            selector: 'standalone-cmp',
            templateUrl: 'src/standaloneCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], StandaloneCmp);
    return StandaloneCmp;
}());
exports.StandaloneCmp = StandaloneCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_sheet_1.WjGridSheetModule, platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [StandaloneCmp],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [StandaloneCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=standaloneCmp.js.map