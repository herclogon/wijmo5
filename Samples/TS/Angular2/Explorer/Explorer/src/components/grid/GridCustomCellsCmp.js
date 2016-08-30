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
var SparkSvc_1 = require('../../services/SparkSvc');
// FlexGrid Custom Cells component.
var GridCustomCellsCmp = (function (_super) {
    __extends(GridCustomCellsCmp, _super);
    function GridCustomCellsCmp(dataSvc, sparkSvc) {
        var _this = this;
        _super.call(this, dataSvc);
        this.itemFormatter = function (panel, r, c, cell) {
            if (panel.cellType == wijmo.grid.CellType.Cell) {
                // use chartInfo to draw a bar chart
                var col = panel.columns[c];
                if (col.chartInfo) {
                    cell.innerHTML = _this._getBar(panel, r, c);
                    return;
                }
                // create other types of custom content
                switch (col.name) {
                    case 'sparklines':
                        cell.innerHTML = _this.sparkSvc.getSparklines(panel.rows[r].dataItem['sales'], null, null);
                        break;
                    case 'sparkbars':
                        cell.innerHTML = _this.sparkSvc.getSparkbars(panel.rows[r].dataItem['sales'], null, null);
                        break;
                    case 'ticker':
                        var sales = panel.rows[r].dataItem['sales'], first = sales[0], last = sales[sales.length - 1], delta = last / first - 1;
                        cell.innerHTML =
                            '<div style="color:' + (delta >= 0 ? 'green' : 'red') + '">' +
                                '<span style="float:left;width:60px;font-size:larger;text-align:right">' + wijmo.Globalize.format(last, 'n2') + '</span>' +
                                '<span style="float:left;width:30px">' + (delta > 0 ? '&#x25b2;' : '&#x25bc;') + '</span>' +
                                '<span style="float:left;font-size:smaller;">(' + wijmo.Globalize.format(delta, 'p0') + ')</span>' +
                                '<div>';
                        break;
                }
            }
        };
        this.data = dataSvc.getData(1000);
        this.sparkSvc = sparkSvc;
    }
    GridCustomCellsCmp.prototype.ngAfterViewInit = function () {
        this._updateColumns();
    };
    GridCustomCellsCmp.prototype.itemsSourceChanged = function () {
        this._updateColumns();
    };
    GridCustomCellsCmp.prototype._updateColumns = function () {
        var flex = this.flex;
        if (!(flex && flex.collectionView)) {
            return;
        }
        var chartColumns = ['amount', 'amount2', 'discount'], items = flex.collectionView.items;
        for (var i = 0; i < chartColumns.length; i++) {
            var col = flex.columns.getColumn(chartColumns[i]);
            if (col) {
                col.chartInfo = {
                    posColor: 'green',
                    negColor: 'red',
                    min: wijmo.getAggregate(wijmo.Aggregate.Min, items, col.binding),
                    max: wijmo.getAggregate(wijmo.Aggregate.Max, items, col.binding)
                };
            }
        }
    };
    GridCustomCellsCmp.prototype._getBar = function (panel, r, c) {
        var col = panel.columns[c], ci = col.chartInfo, base = Math.min(ci.max, Math.max(ci.min, 0)), xbase = Math.round((base - ci.min) / (ci.max - ci.min) * 100), val = panel.getCellData(r, c, false), xval = Math.round((val - ci.min) / (ci.max - ci.min) * 100), style = 'box-sizing:border-box;height:100%;padding:4px;opacity:.5;';
        style += 'background-color:' + (val > 0 ? ci.posColor : ci.negColor) + ';';
        style += (xval > xbase)
            ? 'width:' + (xval - xbase) + '%;margin-left:' + xbase + '%;'
            : 'width:' + (xbase - xval) + '%;margin-left:' + xval + '%;';
        return '<div style="' + style + '" />';
    };
    GridCustomCellsCmp = __decorate([
        core_1.Component({
            selector: 'grid-custom-cells-cmp',
            templateUrl: 'src/components/grid/gridCustomCellsCmp.html',
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc)),
        __param(1, core_1.Inject(SparkSvc_1.SparkSvc))
    ], GridCustomCellsCmp);
    return GridCustomCellsCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridCustomCellsCmp = GridCustomCellsCmp;
//# sourceMappingURL=GridCustomCellsCmp.js.map