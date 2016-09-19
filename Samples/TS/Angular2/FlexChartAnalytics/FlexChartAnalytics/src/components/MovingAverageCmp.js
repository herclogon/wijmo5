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
var router_1 = require('@angular/router');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_chart_analytics_1 = require('wijmo/wijmo.angular2.chart.analytics');
var DataSvc_1 = require('./../services/DataSvc');
//MovingAverage sample component
var MovingAverageCmp = (function () {
    function MovingAverageCmp(dataSvc) {
        var _this = this;
        this.periodChanged = function (input) {
            if (input.value < input.min || input.value > input.max) {
                return;
            }
            _this.period = input.value;
        };
        this.itemsSource = dataSvc.getData(30);
        this.title = 'MovingAverage';
        this.period = 3;
        this.type = 'Simple';
    }
    MovingAverageCmp = __decorate([
        core_1.Component({
            selector: 'moving-average-cmp',
            templateUrl: 'src/components/MovingAverageCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], MovingAverageCmp);
    return MovingAverageCmp;
}());
exports.MovingAverageCmp = MovingAverageCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: MovingAverageCmp }
]);
var MovingAverageModule = (function () {
    function MovingAverageModule() {
    }
    MovingAverageModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_chart_analytics_1.WjChartAnalyticsModule],
            declarations: [MovingAverageCmp],
        })
    ], MovingAverageModule);
    return MovingAverageModule;
}());
exports.MovingAverageModule = MovingAverageModule;
//# sourceMappingURL=MovingAverageCmp.js.map