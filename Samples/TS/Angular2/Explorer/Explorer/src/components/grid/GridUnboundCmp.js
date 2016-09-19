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
// FlexGrid Unbound component.
var GridUnboundCmp = (function (_super) {
    __extends(GridUnboundCmp, _super);
    function GridUnboundCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    GridUnboundCmp.prototype.ngAfterViewInit = function () {
        this.update();
    };
    GridUnboundCmp.prototype.update = function () {
        if (this.flex) {
            var flex = this.flex;
            flex.allowResizing = wijmo.grid.AllowResizing.Both;
            flex.allowDragging = wijmo.grid.AllowDragging.Both;
            // add 50 rows, 10 columns
            for (var r = 0; r < 50; r++) {
                flex.rows.push(new wijmo.grid.Row());
            }
            for (var c = 0; c < 10; c++) {
                flex.columns.push(new wijmo.grid.Column());
            }
            // populate the scrollable area
            for (var r = 0; r < flex.rows.length; r++) {
                for (var c = 0; c < flex.columns.length; c++) {
                    flex.setCellData(r, c, 'r' + r + ',c' + c);
                }
            }
            // add 3 rows to the column header and 3 columns to the row header panels
            for (var i = 0; i < 3; i++) {
                flex.columnHeaders.rows.insert(0, new wijmo.grid.Row());
                flex.rowHeaders.columns.insert(0, new wijmo.grid.Column());
            }
            // populate the fixed area
            var p = flex.columnHeaders;
            for (var r = 0; r < p.rows.length; r++) {
                for (var c = 0; c < p.columns.length; c++) {
                    p.setCellData(r, c, 'cHdr r' + r + ',c' + c);
                }
            }
            p = flex.rowHeaders;
            for (var r = 0; r < p.rows.length; r++) {
                for (var c = 0; c < p.columns.length; c++) {
                    p.setCellData(r, c, 'rHdr r' + r + ',c' + c);
                }
            }
            p = flex.topLeftCells;
            for (var r = 0; r < p.rows.length; r++) {
                for (var c = 0; c < p.columns.length; c++) {
                    p.setCellData(r, c, 'tl r' + r + ',c' + c);
                }
            }
        }
    };
    GridUnboundCmp = __decorate([
        core_1.Component({
            selector: 'grid-unbound-cmp',
            templateUrl: 'src/components/grid/gridUnboundCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridUnboundCmp);
    return GridUnboundCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridUnboundCmp = GridUnboundCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: GridUnboundCmp }
]);
var GridUnboundModule = (function () {
    function GridUnboundModule() {
    }
    GridUnboundModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_grid_1.WjGridModule],
            declarations: [GridUnboundCmp],
        })
    ], GridUnboundModule);
    return GridUnboundModule;
}());
exports.GridUnboundModule = GridUnboundModule;
//# sourceMappingURL=GridUnboundCmp.js.map