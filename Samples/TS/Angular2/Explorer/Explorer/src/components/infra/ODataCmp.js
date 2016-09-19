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
var DataSvc_1 = require('../../services/DataSvc');
var InputBaseCmp_1 = require('../input/InputBaseCmp');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// FlexGrid Data component.
var ODataCmp = (function (_super) {
    __extends(ODataCmp, _super);
    function ODataCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.categories = new wijmo.collections.CollectionView();
        this.products = new wijmo.collections.CollectionView();
    }
    ODataCmp.prototype.ngAfterViewInit = function () {
        this.dataSvc.initOData(this.categories, this.products, this.supplierMap);
    };
    ODataCmp = __decorate([
        core_1.Component({
            selector: 'grid-o-data-cmp',
            templateUrl: 'src/components/infra/oDataCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], ODataCmp);
    return ODataCmp;
}(InputBaseCmp_1.InputBaseCmp));
exports.ODataCmp = ODataCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ODataCmp }
]);
var ODataModule = (function () {
    function ODataModule() {
    }
    ODataModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_input_1.WjInputModule],
            declarations: [ODataCmp],
        })
    ], ODataModule);
    return ODataModule;
}());
exports.ODataModule = ODataModule;
//# sourceMappingURL=ODataCmp.js.map