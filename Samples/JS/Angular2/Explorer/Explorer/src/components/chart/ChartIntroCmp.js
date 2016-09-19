'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// Chart Intro sample component
var ChartIntroCmp = (function () {
    function ChartIntroCmp() {
        this._groupWidth = '70%';
        this.pal = 0;
        this.palettes = ['standard', 'cocoa', 'coral', 'dark', 'highcontrast', 'light', 'midnight', 'minimal', 'modern', 'organic', 'slate'];
        this.isColumnOrBar = function (chart) {
            return chart && (chart.chartType == wijmo.chart.ChartType.Column || chart.chartType == wijmo.chart.ChartType.Bar);
        };
        var names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'], data = [];
        this.itemsSource = [];
        for (var i = 0; i < names.length; i++) {
            this.itemsSource.push({
                name: names[i],
                mar: Math.random() * 3,
                apr: Math.random() * 10,
                may: Math.random() * 5
            });
        }
    }
    Object.defineProperty(ChartIntroCmp.prototype, "groupWidth", {
        get: function () {
            return this._groupWidth;
        },
        set: function (value) {
            if (this._groupWidth != value) {
                this._groupWidth = value;
                if (this.chart) {
                    this.chart.options = { groupWidth: value };
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    ChartIntroCmp.prototype.getPalette = function (palIdx) {
        return wijmo.chart.Palettes[this.palettes[palIdx]];
    };
    __decorate([
        core_1.ViewChild('chart')
    ], ChartIntroCmp.prototype, "chart", void 0);
    ChartIntroCmp = __decorate([
        core_1.Component({
            selector: 'chart-intro-cmp',
            templateUrl: 'src/components/chart/chartIntroCmp.html'
        })
    ], ChartIntroCmp);
    return ChartIntroCmp;
}());
exports.ChartIntroCmp = ChartIntroCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartIntroCmp }
]);
var ChartIntroModule = (function () {
    function ChartIntroModule() {
    }
    ChartIntroModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [ChartIntroCmp],
        })
    ], ChartIntroModule);
    return ChartIntroModule;
}());
exports.ChartIntroModule = ChartIntroModule;
//# sourceMappingURL=ChartIntroCmp.js.map