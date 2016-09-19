'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var DataSvc_1 = require('../services/DataSvc');
var EmployeeSalesByCountryCmp = (function () {
    function EmployeeSalesByCountryCmp(dataSvc) {
        this.invoices = dataSvc.invoices;
    }
    EmployeeSalesByCountryCmp = __decorate([
        core_1.Component({
            selector: 'employee-sales-by-country-cmp',
            templateUrl: 'src/components/employeeSalesByCountryCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], EmployeeSalesByCountryCmp);
    return EmployeeSalesByCountryCmp;
}());
exports.EmployeeSalesByCountryCmp = EmployeeSalesByCountryCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: EmployeeSalesByCountryCmp }
]);
var EmployeeSalesByCountryModule = (function () {
    function EmployeeSalesByCountryModule() {
    }
    EmployeeSalesByCountryModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing],
            declarations: [EmployeeSalesByCountryCmp],
        })
    ], EmployeeSalesByCountryModule);
    return EmployeeSalesByCountryModule;
}());
exports.EmployeeSalesByCountryModule = EmployeeSalesByCountryModule;
//# sourceMappingURL=EmployeeSalesByCountryCmp.js.map