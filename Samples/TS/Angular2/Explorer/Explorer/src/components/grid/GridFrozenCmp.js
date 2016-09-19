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
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var DataSvc_1 = require('../../services/DataSvc');
// FlexGrid Frozen component.
var GridFrozenCmp = (function (_super) {
    __extends(GridFrozenCmp, _super);
    function GridFrozenCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    // toggle freezing
    GridFrozenCmp.prototype.toggleFreeze = function (freeze) {
        var flex = this.flex;
        if (flex) {
            // figure out whether to freeze or unfreeze
            if (freeze == null) {
                freeze = (flex.frozenRows || flex.frozenColumns) ? false : true;
            }
            if (freeze) {
                // hide rows/cols before the viewRange and freeze
                var vr = flex.viewRange;
                for (var i = 0; i < vr.topRow; i++) {
                    flex.rows[i].visible = false;
                }
                for (var i = 0; i < vr.leftCol; i++) {
                    flex.columns[i].visible = false;
                }
                // freeze based on selection; if there is no selection,
                // freeze the first couple of rows/columns
                var sel = flex.selection;
                if (sel.topRow || sel.leftCol) {
                    flex.frozenRows = sel.topRow;
                    flex.frozenColumns = sel.leftCol;
                }
                else {
                    flex.frozenRows = flex.frozenColumns = 2;
                }
            }
            else {
                // show all rows/columns and unfreeze
                for (var i = 0; i < flex.rows.length; i++) {
                    flex.rows[i].visible = true;
                }
                for (var i = 0; i < flex.columns.length; i++) {
                    flex.columns[i].visible = true;
                }
                flex.frozenRows = flex.frozenColumns = 0;
            }
        }
    };
    GridFrozenCmp = __decorate([
        core_1.Component({
            selector: 'grid-frozen-cmp',
            templateUrl: 'src/components/grid/gridFrozenCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridFrozenCmp);
    return GridFrozenCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridFrozenCmp = GridFrozenCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: GridFrozenCmp }
]);
var GridFrozenModule = (function () {
    function GridFrozenModule() {
    }
    GridFrozenModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_grid_1.WjGridModule],
            declarations: [GridFrozenCmp],
        })
    ], GridFrozenModule);
    return GridFrozenModule;
}());
exports.GridFrozenModule = GridFrozenModule;
//# sourceMappingURL=GridFrozenCmp.js.map