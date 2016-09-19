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
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var GaugeBaseCmp_1 = require('./GaugeBaseCmp');
var router_1 = require('@angular/router');
var wijmo_angular2_gauge_1 = require('wijmo/wijmo.angular2.gauge');
// Linear gauge sample component.
var LinearGaugeCmp = (function (_super) {
    __extends(LinearGaugeCmp, _super);
    function LinearGaugeCmp() {
        _super.call(this);
    }
    LinearGaugeCmp = __decorate([
        core_1.Component({
            selector: 'linear-gauge-cmp',
            templateUrl: 'src/components/gauge/linearGaugeCmp.html'
        })
    ], LinearGaugeCmp);
    return LinearGaugeCmp;
}(GaugeBaseCmp_1.GaugeBaseCmp));
exports.LinearGaugeCmp = LinearGaugeCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: LinearGaugeCmp }
]);
var LinearGaugeModule = (function () {
    function LinearGaugeModule() {
    }
    LinearGaugeModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, wijmo_angular2_gauge_1.WjGaugeModule],
            declarations: [LinearGaugeCmp],
        })
    ], LinearGaugeModule);
    return LinearGaugeModule;
}());
exports.LinearGaugeModule = LinearGaugeModule;
//# sourceMappingURL=LinearGaugeCmp.js.map