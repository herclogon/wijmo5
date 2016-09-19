'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_chart_annotation_1 = require('wijmo/wijmo.angular2.chart.annotation');
// Chart annotation component
var ChartAnnotationCmp = (function () {
    function ChartAnnotationCmp() {
        this.basicData = this._getBasicData();
        this.basic = {
            rectDate: new Date(2014, 1, 10),
            imageDate: new Date(2014, 0, 25)
        };
    }
    // get basic data
    ChartAnnotationCmp.prototype._getBasicData = function () {
        var data = [], sales = [
            96, 19, 54, 83, 15, 56, 36, 4, 29, 93,
            38, 71, 50, 77, 69, 13, 79, 57, 29, 62,
            4, 27, 66, 96, 65, 12, 52, 3, 61, 48, 50,
            70, 39, 33, 25, 49, 69, 46, 44, 40, 35,
            72, 64, 10, 66, 63, 78, 19, 96, 26], len = sales.length;
        for (var i = 0; i < len; i++) {
            data.push({
                sale: sales[i],
                date: new Date(2014, 0, i),
            });
        }
        return data;
    };
    __decorate([
        core_1.ViewChild('al')
    ], ChartAnnotationCmp.prototype, "al", void 0);
    ChartAnnotationCmp = __decorate([
        core_1.Component({
            selector: 'chart-annotation-cmp',
            templateUrl: 'src/components/chart/chartAnnotationCmp.html'
        })
    ], ChartAnnotationCmp);
    return ChartAnnotationCmp;
}());
exports.ChartAnnotationCmp = ChartAnnotationCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: ChartAnnotationCmp }
]);
var ChartAnnotationModule = (function () {
    function ChartAnnotationModule() {
    }
    ChartAnnotationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_chart_annotation_1.WjChartAnnotationModule],
            declarations: [ChartAnnotationCmp],
        })
    ], ChartAnnotationModule);
    return ChartAnnotationModule;
}());
exports.ChartAnnotationModule = ChartAnnotationModule;
//# sourceMappingURL=ChartAnnotationCmp.js.map