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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The Explorer application root component.
var ExpenseReportExportCmp = (function () {
    function ExpenseReportExportCmp(dataSvc) {
        this.dataSvc = dataSvc;
    }
    ExpenseReportExportCmp.prototype.saveExpenses = function () {
        var workbook = XlsxExport.exportExpenseReport(this.dataSvc.getEmployeesWithExpences());
        //var xlsx = wijmo.xlsx.XlsxConverter.exportToFile(workbook, 'ExpenseReport.xlsx');
        workbook.save('ExpenseReport.xlsx');
    };
    ExpenseReportExportCmp = __decorate([
        core_1.Component({
            selector: 'expence-report-export-cmp',
            templateUrl: 'src/expenseReportExportCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], ExpenseReportExportCmp);
    return ExpenseReportExportCmp;
}());
exports.ExpenseReportExportCmp = ExpenseReportExportCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule],
            declarations: [ExpenseReportExportCmp],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [ExpenseReportExportCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=ExpenseReportExportCmp.js.map