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
var EmployeesCmp = (function () {
    function EmployeesCmp(dataSvc) {
        this.images = [
            'burns/512448cb3.gif',
            'agnes/0c8adf467.png',
            'skinner/58d3283e7.png',
            'bob/5d7451cde.png',
            'flanders/db01ccc49.jpg',
            'lovejoy/5ec99ea6a.jpg',
            'apu/41fa40f90.png',
            'barney/f3b7b1de2.png',
            'luann/81d97cbd4.png',
            'troy/d5aa8e02c.jpg',
            'edna/2bade433d.jpg',
            'chalmers/89d0c32c6.jpg',
            'frink/7833a6b34.jpg',
            'hibbert/f68f3f3c9.gif',
            'sea/0e8a8aa69.gif',
            'stu/a9c5e72a7.png',
            'nick/3b85ac6a0.jpg',
            'duff/e3246663c.jpg',
            'sarc/c61411e1a.png'
        ];
        this.employees = dataSvc.employees;
    }
    EmployeesCmp = __decorate([
        core_1.Component({
            selector: 'employees-cmp',
            templateUrl: 'src/components/employeesCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], EmployeesCmp);
    return EmployeesCmp;
}());
exports.EmployeesCmp = EmployeesCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: EmployeesCmp }
]);
var EmployeesModule = (function () {
    function EmployeesModule() {
    }
    EmployeesModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing],
            declarations: [EmployeesCmp],
        })
    ], EmployeesModule);
    return EmployeesModule;
}());
exports.EmployeesModule = EmployeesModule;
//# sourceMappingURL=EmployeesCmp.js.map