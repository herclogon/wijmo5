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
var wjNg2Core = require('wijmo/wijmo.angular2.core');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
// FlexGrid Dynamic Columns sample component.
var GridDynamicColumnsCmp = (function (_super) {
    __extends(GridDynamicColumnsCmp, _super);
    function GridDynamicColumnsCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.columns = [
            { header: 'ID', binding: 'id', width: 80 },
            { header: 'Date', binding: 'start' },
            { header: 'Product', binding: 'product' },
            { header: 'Revenue', binding: 'amount', format: 'n0' },
            { header: 'Expense', binding: 'amount2', format: 'n0' },
            {
                header: 'Expense (with template)', binding: 'amount2', width: 180, cellTemplate: ExpenceCellCmp,
                cellEditTemplate: ExpenceCellEditCmp
            },
            { header: 'Discount', binding: 'discount', format: 'p0' }
        ];
    }
    GridDynamicColumnsCmp = __decorate([
        core_1.Component({
            selector: 'grid-dynamic-columns-cmp',
            templateUrl: 'src/components/grid/gridDynamicColumnsCmp.html',
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate, common_1.CORE_DIRECTIVES,
                wjNg2Input.WjInputNumber, wjNg2Core.WjComponentLoader]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridDynamicColumnsCmp);
    return GridDynamicColumnsCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridDynamicColumnsCmp = GridDynamicColumnsCmp;
var ExpenceCellCmp = (function () {
    function ExpenceCellCmp() {
    }
    ExpenceCellCmp = __decorate([
        core_1.Component({
            selector: 'expence-cell-cmp',
            template: "\n        <div [ngStyle]=\"{color: item.amount2 > 2000 ? 'red' : 'green'}\">\n            {{item.amount2 | currency:'USD':true}}\n            <span [ngSwitch]=\"item.amount2 > 2000\">\n              <span *ngSwitchCase=\"true\">&#9650;</span>\n              <span *ngSwitchDefault>&#9660;</span>\n            </span>\n        </div>\n        ",
        })
    ], ExpenceCellCmp);
    return ExpenceCellCmp;
}());
exports.ExpenceCellCmp = ExpenceCellCmp;
var ExpenceCellEditCmp = (function () {
    function ExpenceCellEditCmp() {
    }
    ExpenceCellEditCmp = __decorate([
        core_1.Component({
            selector: 'expence-cell-edit-cmp',
            template: "\n        <wj-input-number [(value)]=\"cell.value\" [required]=\"false\" [step]=\"1\">\n        </wj-input-number>                        \n        ",
            directives: [wjNg2Input.WjInputNumber]
        })
    ], ExpenceCellEditCmp);
    return ExpenceCellEditCmp;
}());
exports.ExpenceCellEditCmp = ExpenceCellEditCmp;
//# sourceMappingURL=GridDynamicColumnsCmp.js.map