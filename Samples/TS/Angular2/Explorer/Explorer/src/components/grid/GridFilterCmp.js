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
var forms_1 = require('@angular/forms');
var GridBaseCmp_1 = require('./GridBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var router_1 = require('@angular/router');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var wijmo_angular2_grid_filter_1 = require('wijmo/wijmo.angular2.grid.filter');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// FlexGrid Star Sizing component.
var GridFilterCmp = (function (_super) {
    __extends(GridFilterCmp, _super);
    function GridFilterCmp(dataSvc) {
        _super.call(this, dataSvc);
        this._revenueColumnFilterType = wijmo.grid.filter.FilterType.Condition;
    }
    Object.defineProperty(GridFilterCmp.prototype, "revenueColumnFilterType", {
        get: function () {
            return this._revenueColumnFilterType;
        },
        set: function (value) {
            if (this._revenueColumnFilterType != value) {
                this._revenueColumnFilterType = value;
                var f = this.gridFilter;
                if (f) {
                    var col = f.grid.columns.getColumn('amount'), cf = f.getColumnFilter(col, true);
                    cf.filterType = this._revenueColumnFilterType;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    // create the filter and expose it to scope for customization
    GridFilterCmp.prototype.initialized = function (s, e) {
        this.gridFilter.filterChanging.addHandler(function () {
            console.log('filter changing');
        });
        this.gridFilter.filterChanged.addHandler(function () {
            console.log('filter changed');
        });
        this.gridFilter.filterApplied.addHandler(function () {
            console.log('filter applied');
        });
    };
    __decorate([
        core_1.ViewChild('filter')
    ], GridFilterCmp.prototype, "gridFilter", void 0);
    GridFilterCmp = __decorate([
        core_1.Component({
            selector: 'grid-filter-cmp',
            templateUrl: 'src/components/grid/gridFilterCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridFilterCmp);
    return GridFilterCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridFilterCmp = GridFilterCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: GridFilterCmp }
]);
var GridFilterModule = (function () {
    function GridFilterModule() {
    }
    GridFilterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_grid_filter_1.WjGridFilterModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [GridFilterCmp],
        })
    ], GridFilterModule);
    return GridFilterModule;
}());
exports.GridFilterModule = GridFilterModule;
//# sourceMappingURL=GridFilterCmp.js.map