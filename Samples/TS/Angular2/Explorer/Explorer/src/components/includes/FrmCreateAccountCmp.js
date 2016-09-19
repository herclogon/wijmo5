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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var FrmBaseCmp_1 = require('./FrmBaseCmp');
var FrmCreateAccountCmp = (function (_super) {
    __extends(FrmCreateAccountCmp, _super);
    function FrmCreateAccountCmp() {
        _super.call(this);
    }
    FrmCreateAccountCmp = __decorate([
        core_1.Component({
            selector: 'frm-create-account-cmp',
            templateUrl: 'src/components/includes/frmCreateAccountCmp.html'
        })
    ], FrmCreateAccountCmp);
    return FrmCreateAccountCmp;
}(FrmBaseCmp_1.FrmBaseCmp));
exports.FrmCreateAccountCmp = FrmCreateAccountCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: FrmCreateAccountCmp }
]);
var FrmCreateAccountModule = (function () {
    function FrmCreateAccountModule() {
    }
    FrmCreateAccountModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing],
            declarations: [FrmCreateAccountCmp],
        })
    ], FrmCreateAccountModule);
    return FrmCreateAccountModule;
}());
exports.FrmCreateAccountModule = FrmCreateAccountModule;
//# sourceMappingURL=FrmCreateAccountCmp.js.map