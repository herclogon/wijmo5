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
// FlexGrid No Dctv component.
var GridNoDctvCmp = (function (_super) {
    __extends(GridNoDctvCmp, _super);
    function GridNoDctvCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    GridNoDctvCmp.prototype.ngAfterViewInit = function () {
        if (!this.flex) {
            // create flex using a jQuery id selector
            this.flex = new wijmo.grid.FlexGrid('#flexNoDctv');
            // create flex using an element (same thing really)
            //var e = $('#flexNoDctv')[0];
            //flex = new wijmo.grid.FlexGrid(e);
            // populate the grid with the grid's own properties
            var data = [];
            for (var prop in this.flex) {
                if (prop.indexOf('_') != 0) {
                    var val = this.flex[prop];
                    var type = val instanceof wijmo.Event ? 'Event'
                        : val instanceof wijmo.grid.CellRange ? 'CellRange'
                            : val instanceof wijmo.Point ? 'Point'
                                : val instanceof wijmo.Size ? 'Size'
                                    : val instanceof wijmo.collections.ObservableArray ? 'ObservableArray'
                                        : typeof (val);
                    if (!wijmo.isFunction(val)) {
                        data.push({
                            name: prop,
                            type: type,
                            value: val ? val.toString() : ''
                        });
                    }
                }
            }
            this.flex.itemsSource = data;
            this.flex.autoSizeColumns();
        }
    };
    GridNoDctvCmp = __decorate([
        core_1.Component({
            selector: 'grid-no-dctv-cmp',
            templateUrl: 'src/components/grid/gridNoDctvCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridNoDctvCmp);
    return GridNoDctvCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridNoDctvCmp = GridNoDctvCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: GridNoDctvCmp }
]);
var GridNoDctvModule = (function () {
    function GridNoDctvModule() {
    }
    GridNoDctvModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [GridNoDctvCmp],
        })
    ], GridNoDctvModule);
    return GridNoDctvModule;
}());
exports.GridNoDctvModule = GridNoDctvModule;
//# sourceMappingURL=GridNoDctvCmp.js.map