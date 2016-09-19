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
var router_1 = require('@angular/router');
var DataSvc_1 = require('../../services/DataSvc');
var PieChartBaseCmp_1 = require('./PieChartBaseCmp');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
// PieChart Introduction sample component.
var PieChartItemFormatterCmp = (function (_super) {
    __extends(PieChartItemFormatterCmp, _super);
    function PieChartItemFormatterCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.itemFormatter = this._itemFormatter.bind(this);
    }
    PieChartItemFormatterCmp.prototype._itemFormatter = function (engine, hitTestInfo, defaultFormatter) {
        var fsz = engine.fontSize;
        engine.fontSize = '10';
        defaultFormatter();
        var point = hitTestInfo.point.clone();
        var text = hitTestInfo.name + '=' + hitTestInfo.value.toFixed(1);
        var sz = engine.measureString(text);
        var fill = engine.fill;
        engine.fill = 'white';
        engine.drawRect(point.x - 2 - sz.width / 2, point.y - sz.height - 2, sz.width + 4, sz.height + 4);
        engine.fill = fill;
        point.x -= sz.width / 2;
        engine.drawString(text, point);
        engine.fontSize = fsz;
    };
    PieChartItemFormatterCmp = __decorate([
        core_1.Component({
            selector: 'pie-item-formatter-cmp',
            templateUrl: 'src/components/piechart/pieChartItemFormatterCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], PieChartItemFormatterCmp);
    return PieChartItemFormatterCmp;
}(PieChartBaseCmp_1.PieChartBaseCmp));
exports.PieChartItemFormatterCmp = PieChartItemFormatterCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: PieChartItemFormatterCmp }
]);
var PieChartItemFormatterModule = (function () {
    function PieChartItemFormatterModule() {
    }
    PieChartItemFormatterModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_chart_1.WjChartModule],
            declarations: [PieChartItemFormatterCmp],
        })
    ], PieChartItemFormatterModule);
    return PieChartItemFormatterModule;
}());
exports.PieChartItemFormatterModule = PieChartItemFormatterModule;
//# sourceMappingURL=PieChartItemFormatterCmp.js.map