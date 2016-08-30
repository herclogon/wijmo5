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
var DataSvc_1 = require('./services/DataSvc');
// Sample components
var IntroCmp_1 = require('./components/IntroCmp');
var DataBindingCmp_1 = require('./components/DataBindingCmp');
var SortingCmp_1 = require('./components/SortingCmp');
var FilteringCmp_1 = require('./components/FilteringCmp');
var FormatCellsCmp_1 = require('./components/FormatCellsCmp');
var MultipleHeadersCmp_1 = require('./components/MultipleHeadersCmp');
var CellMergingCmp_1 = require('./components/CellMergingCmp');
var DragDropCmp_1 = require('./components/DragDropCmp');
var FrozenCellsCmp_1 = require('./components/FrozenCellsCmp');
var FormulasCmp_1 = require('./components/FormulasCmp');
var CustomFunctionCmp_1 = require('./components/CustomFunctionCmp');
var ExcelIOCmp_1 = require('./components/ExcelIOCmp');
'use strict';
// The Explorer application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        this.dataSvc = dataSvc;
    }
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, router_deprecated_1.ROUTER_DIRECTIVES]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', redirectTo: ['Intro'] },
            { path: '/intro', component: IntroCmp_1.IntroCmp, name: 'Intro' },
            { path: '/dataBinding', component: DataBindingCmp_1.DataBindingCmp },
            { path: '/sorting', component: SortingCmp_1.SortingCmp },
            { path: '/filtering', component: FilteringCmp_1.FilteringCmp },
            { path: '/formatCells', component: FormatCellsCmp_1.FormatCellsCmp },
            { path: '/multipleHeaders', component: MultipleHeadersCmp_1.MultipleHeadersCmp },
            { path: '/cellMerging', component: CellMergingCmp_1.CellMergingCmp },
            { path: '/dragDrop', component: DragDropCmp_1.DragDropCmp },
            { path: '/frozenCells', component: FrozenCellsCmp_1.FrozenCellsCmp },
            { path: '/formulas', component: FormulasCmp_1.FormulasCmp },
            { path: '/customFunction', component: CustomFunctionCmp_1.CustomFunctionCmp },
            { path: '/excelIO', component: ExcelIOCmp_1.ExcelIOCmp }]),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(AppCmp, [
    router_deprecated_1.ROUTER_PROVIDERS,
    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy }),
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map