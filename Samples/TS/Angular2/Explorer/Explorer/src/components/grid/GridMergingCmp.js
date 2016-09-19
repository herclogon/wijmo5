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
var router_1 = require('@angular/router');
var GridBaseCmp_1 = require('./GridBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// FlexGrid Merging component.
var GridMergingCmp = (function (_super) {
    __extends(GridMergingCmp, _super);
    function GridMergingCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.data = this.dataSvc.getData(500);
    }
    GridMergingCmp.prototype.sourceChanged = function () {
        this.updateDataMapSettings();
        this.updateHeaders();
    };
    GridMergingCmp.prototype.ngAfterViewInit = function () {
        _super.prototype.ngAfterViewInit.call(this);
        this.updateHeaders();
    };
    // add some column headers to show merging
    GridMergingCmp.prototype.updateHeaders = function () {
        var flex = this.flex;
        if (flex) {
            // insert new row if not yet
            if (flex.columnHeaders.rows.length === 1) {
                flex.columnHeaders.rows.insert(0, new wijmo.grid.Row());
            }
            var row = flex.columnHeaders.rows[0];
            row.allowMerging = true;
            // set headings so the cells merge
            for (var i = 0; i < flex.columns.length; i++) {
                var hdr = 'String';
                switch (flex.columns[i].binding) {
                    case 'id':
                    case 'amount':
                    case 'discount':
                        hdr = 'Number';
                        break;
                    case 'active':
                        hdr = 'Boolean';
                        break;
                }
                flex.columnHeaders.setCellData(0, i, hdr);
            }
        }
    };
    GridMergingCmp = __decorate([
        core_1.Component({
            selector: 'grid-merging-cmp',
            templateUrl: 'src/components/grid/gridMergingCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridMergingCmp);
    return GridMergingCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridMergingCmp = GridMergingCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: GridMergingCmp }
]);
var GridMergingModule = (function () {
    function GridMergingModule() {
    }
    GridMergingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [GridMergingCmp],
        })
    ], GridMergingModule);
    return GridMergingModule;
}());
exports.GridMergingModule = GridMergingModule;
//# sourceMappingURL=GridMergingCmp.js.map