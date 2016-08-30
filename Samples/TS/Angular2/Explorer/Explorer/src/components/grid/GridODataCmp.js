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
var GridBaseCmp_1 = require('./GridBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
// FlexGrid Data component.
var GridODataCmp = (function (_super) {
    __extends(GridODataCmp, _super);
    function GridODataCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.categories = new wijmo.collections.CollectionView();
        this.products = new wijmo.collections.CollectionView();
    }
    GridODataCmp.prototype.ngAfterViewInit = function () {
        if (this.flex) {
            this.dataSvc.initOData(this.categories, this.products, this.supplierMap);
        }
    };
    GridODataCmp = __decorate([
        core_1.Component({
            selector: 'grid-o-data-cmp',
            templateUrl: 'src/components/grid/gridODataCmp.html',
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridODataCmp);
    return GridODataCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridODataCmp = GridODataCmp;
//# sourceMappingURL=GridODataCmp.js.map