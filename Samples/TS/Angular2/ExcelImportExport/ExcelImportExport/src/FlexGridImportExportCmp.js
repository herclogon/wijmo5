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
var AppTab_1 = require('./components/AppTab');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The Explorer application root component.
var FlexGridImportExportCmp = (function () {
    function FlexGridImportExportCmp(dataSvc) {
        this.includeColumnHeader = true;
        this.dataSvc = dataSvc;
        this.data = dataSvc.getProductOrders(1500);
    }
    FlexGridImportExportCmp.prototype.exportExcel = function () {
        wijmo.grid.xlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: this.includeColumnHeader, includeCellStyles: false }, 'FlexGrid.xlsx');
    };
    FlexGridImportExportCmp.prototype.importExcel = function () {
        var fileInput = document.getElementById('importFile');
        if (fileInput.files[0]) {
            wijmo.grid.xlsx.FlexGridXlsxConverter.load(this.flexGrid, fileInput.files[0], { includeColumnHeaders: this.includeColumnHeader });
        }
    };
    FlexGridImportExportCmp.prototype.updateGroup = function (flex) {
        var groupNames = ['Product', 'Country', 'Amount'], cv, propName, groupDesc;
        if (flex) {
            // get the collection view, start update
            cv = flex.collectionView;
            cv.beginUpdate();
            // clear existing groups
            cv.groupDescriptions.clear();
            // add new groups
            for (var i = 0; i < groupNames.length; i++) {
                propName = groupNames[i].toLowerCase();
                if (propName == 'amount') {
                    // group amounts in ranges
                    // (could use the mapping function to group countries into continents, 
                    // names into initials, etc)
                    groupDesc = new wijmo.collections.PropertyGroupDescription(propName, function (item, prop) {
                        var value = item[prop];
                        if (value > 1000)
                            return 'Large Amounts';
                        if (value > 100)
                            return 'Medium Amounts';
                        if (value > 0)
                            return 'Small Amounts';
                        return 'Negative';
                    });
                    cv.groupDescriptions.push(groupDesc);
                }
                else if (propName) {
                    // group other properties by their specific values
                    groupDesc = new wijmo.collections.PropertyGroupDescription(propName);
                    cv.groupDescriptions.push(groupDesc);
                }
            }
            // done updating
            cv.endUpdate();
        }
    };
    __decorate([
        core_1.ViewChild('flexGrid')
    ], FlexGridImportExportCmp.prototype, "flexGrid", void 0);
    FlexGridImportExportCmp = __decorate([
        core_1.Component({
            selector: 'flex-grid-import-export-cmp',
            templateUrl: 'src/flexGridImportExportCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], FlexGridImportExportCmp);
    return FlexGridImportExportCmp;
}());
exports.FlexGridImportExportCmp = FlexGridImportExportCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [wijmo_angular2_grid_1.WjGridModule, platform_browser_1.BrowserModule, forms_1.FormsModule, AppTab_1.TabsModule],
            declarations: [FlexGridImportExportCmp],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [FlexGridImportExportCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=FlexGridImportExportCmp.js.map