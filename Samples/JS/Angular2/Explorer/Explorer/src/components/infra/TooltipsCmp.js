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
var GridBaseCmp_1 = require('../grid/GridBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var wijmo_angular2_core_1 = require('wijmo/wijmo.angular2.core');
// Wijmo Tooltip component.
var TooltipsCmp = (function (_super) {
    __extends(TooltipsCmp, _super);
    function TooltipsCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.data = this.dataSvc.getData(500);
    }
    TooltipsCmp.prototype.ngAfterViewInit = function () {
        if (this.flex) {
            // store reference to grid
            var flex = this.flex;
            // create tooltip
            var tip = new wijmo.Tooltip(), rng = null;
            // monitor the mouse over the grid
            flex.hostElement.addEventListener('mousemove', function (evt) {
                var ht = flex.hitTest(evt);
                if (!ht.range.equals(rng)) {
                    // new cell selected, show tooltip
                    if (ht.cellType == wijmo.grid.CellType.Cell) {
                        rng = ht.range;
                        var cellElement = document.elementFromPoint(evt.clientX, evt.clientY), cellBounds = flex.getCellBoundingRect(ht.row, ht.col), data = wijmo.escapeHtml(flex.getCellData(rng.row, rng.col, true)), tipContent = 'cell (' + rng.row + ' ' + rng.col + ') contains "<b>' + data + '</b>"';
                        if (cellElement.className.indexOf('wj-cell') > -1) {
                            tip.show(flex.hostElement, tipContent, cellBounds);
                        }
                        else {
                            tip.hide(); // cell must be behind scroll bar...
                        }
                    }
                }
            });
            flex.hostElement.addEventListener('mouseout', function () {
                tip.hide();
                rng = null;
            });
        }
    };
    TooltipsCmp = __decorate([
        core_1.Component({
            selector: 'grid-tooltips-cmp',
            templateUrl: 'src/components/infra/tooltipsCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], TooltipsCmp);
    return TooltipsCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.TooltipsCmp = TooltipsCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: TooltipsCmp }
]);
var TooltipsModule = (function () {
    function TooltipsModule() {
    }
    TooltipsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_core_1.WjCoreModule],
            declarations: [TooltipsCmp],
        })
    ], TooltipsModule);
    return TooltipsModule;
}());
exports.TooltipsModule = TooltipsModule;
//# sourceMappingURL=TooltipsCmp.js.map