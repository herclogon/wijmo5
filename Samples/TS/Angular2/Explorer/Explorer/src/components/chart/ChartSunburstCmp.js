'use strict';
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
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_chart_hierarchical_1 = require('wijmo/wijmo.angular2.chart.hierarchical');
var DataSvc_1 = require('../../services/DataSvc');
// Chart Sunburst component
var ChartSunburstCmp = (function () {
    function ChartSunburstCmp(dataSvc) {
        var _this = this;
        this.innerRadius = 0;
        this.offset = 0;
        this.startAngle = 0;
        this.reversed = false;
        this.palette = 'standard';
        this.palettes = ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate'];
        this.bindingName = ['year', 'quarter', 'month'];
        this.childItemsPath = 'items';
        this.selectedPosition = 'Top';
        this.selectedOffset = 0;
        this.isAnimated = true;
        this.paletteChanged = function (sender) {
            var p = _this.palettes[sender.selectedIndex];
            _this.palette = p;
            _this.chartPalette = wijmo.chart.Palettes[p];
        };
        this.innerRadiusChanged = function (sender) {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            _this.innerRadius = sender.value;
        };
        this.offsetChanged = function (sender) {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            _this.offset = sender.value;
        };
        this.startAngleChanged = function (sender) {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            _this.startAngle = sender.value;
        };
        this.selectedOffsetChanged = function (sender) {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            _this.selectedOffset = sender.value;
        };
        this.dataSvc = dataSvc;
        this.hierarchicalData = this.dataSvc.getHierarchicalData();
    }
    ChartSunburstCmp = __decorate([
        core_1.Component({
            selector: 'chart-sunburst-cmp',
            templateUrl: 'src/components/chart/chartSunburstCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], ChartSunburstCmp);
    return ChartSunburstCmp;
}());
exports.ChartSunburstCmp = ChartSunburstCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartSunburstCmp }
]);
var ChartSunburstModule = (function () {
    function ChartSunburstModule() {
    }
    ChartSunburstModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_chart_hierarchical_1.WjChartHierarchicalModule],
            declarations: [ChartSunburstCmp],
        })
    ], ChartSunburstModule);
    return ChartSunburstModule;
}());
exports.ChartSunburstModule = ChartSunburstModule;
//# sourceMappingURL=ChartSunburstCmp.js.map