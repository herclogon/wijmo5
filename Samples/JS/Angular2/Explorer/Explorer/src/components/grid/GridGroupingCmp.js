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
var GridBaseCmp_1 = require('./GridBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
// FlexGrid Grouping sample component.
var GridGroupingCmp = (function (_super) {
    __extends(GridGroupingCmp, _super);
    function GridGroupingCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    GridGroupingCmp = __decorate([
        core_1.Component({
            selector: 'grid-grouping-cmp',
            templateUrl: 'src/components/grid/gridGroupingCmp.html',
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Input.WjCollectionViewNavigator,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridGroupingCmp);
    return GridGroupingCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridGroupingCmp = GridGroupingCmp;
//# sourceMappingURL=GridGroupingCmp.js.map