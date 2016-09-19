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
var router_1 = require('@angular/router');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var DataSvc_1 = require('../../services/DataSvc');
// FlexGrid Column Footer component.
var GridColumnFooterCmp = (function (_super) {
    __extends(GridColumnFooterCmp, _super);
    function GridColumnFooterCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    // add a footer row to display column aggregates below the data
    GridColumnFooterCmp.prototype.addFooterRow = function (flexGrid) {
        var row = new wijmo.grid.GroupRow(); // create a GroupRow to show aggregates
        flexGrid.columnFooters.rows.push(row); // add the row to the column footer panel
        flexGrid.bottomLeftCells.setCellData(0, 0, '\u03A3'); // sigma on the header
    };
    GridColumnFooterCmp = __decorate([
        core_1.Component({
            selector: 'grid-column-footer-cmp',
            templateUrl: 'src/components/grid/gridColumnFooterCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridColumnFooterCmp);
    return GridColumnFooterCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridColumnFooterCmp = GridColumnFooterCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: GridColumnFooterCmp }
]);
var GridColumnFooterModule = (function () {
    function GridColumnFooterModule() {
    }
    GridColumnFooterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_grid_1.WjGridModule],
            declarations: [GridColumnFooterCmp],
        })
    ], GridColumnFooterModule);
    return GridColumnFooterModule;
}());
exports.GridColumnFooterModule = GridColumnFooterModule;
//# sourceMappingURL=GridColumnFooterCmp.js.map