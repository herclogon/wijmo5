'use strict';
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var InputBaseCmp_1 = require('./InputBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// ListBox sample component.
var ListBoxCmp = (function (_super) {
    __extends(ListBoxCmp, _super);
    function ListBoxCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    ListBoxCmp = __decorate([
        core_1.Component({
            selector: 'list-box-cmp',
            templateUrl: 'src/components/input/listBoxCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], ListBoxCmp);
    return ListBoxCmp;
}(InputBaseCmp_1.InputBaseCmp));
exports.ListBoxCmp = ListBoxCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ListBoxCmp }
]);
var ListBoxModule = (function () {
    function ListBoxModule() {
    }
    ListBoxModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_input_1.WjInputModule],
            declarations: [ListBoxCmp],
        })
    ], ListBoxModule);
    return ListBoxModule;
}());
exports.ListBoxModule = ListBoxModule;
//# sourceMappingURL=ListBoxCmp.js.map