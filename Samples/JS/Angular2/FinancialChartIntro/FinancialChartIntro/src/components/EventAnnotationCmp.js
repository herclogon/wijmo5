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
var AppTab_1 = require('./AppTab');
var wjNg2FlexChartAnnotation = require('wijmo/wijmo.angular2.chart.annotation');
var wjNg2FinancialChart = require('wijmo/wijmo.angular2.chart.finance');
var DataSvc_1 = require('./../services/DataSvc');
//EventAnnotation sample component
var EventAnnotationCmp = (function () {
    function EventAnnotationCmp(dataSvc) {
        this.data = [];
        this.dataSvc = dataSvc;
        this.setDataSource();
        this.header = 'Facebook, Inc. (FB)';
    }
    EventAnnotationCmp.prototype.setDataSource = function () {
        var _this = this;
        this.dataSvc.getData().subscribe(function (data) {
            _this.data = data;
        });
    };
    EventAnnotationCmp = __decorate([
        core_1.Component({
            selector: 'event-annotation-cmp',
            templateUrl: 'src/components/EventAnnotationCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
                wjNg2FlexChartAnnotation.WjFlexChartAnnotationLayer, wjNg2FlexChartAnnotation.WjFlexChartAnnotationCircle,
                wjNg2FlexChartAnnotation.WjFlexChartAnnotationRectangle, wjNg2FlexChartAnnotation.WjFlexChartAnnotationEllipse,
                wjNg2FlexChartAnnotation.WjFlexChartAnnotationSquare, AppTab_1.AppTab, AppTab_1.AppTabPane, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], EventAnnotationCmp);
    return EventAnnotationCmp;
}());
exports.EventAnnotationCmp = EventAnnotationCmp;
//# sourceMappingURL=EventAnnotationCmp.js.map