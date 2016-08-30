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
var DataSvc_1 = require('../../services/DataSvc');
var InputBaseCmp_1 = require('../input/InputBaseCmp');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var appPipes_1 = require('../../pipes/appPipes');
// Wijmo Globalization component.
var GlobalizationCmp = (function (_super) {
    __extends(GlobalizationCmp, _super);
    function GlobalizationCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.today = new Date();
        this.departureDate = new Date();
        this.pi = Math.PI;
    }
    GlobalizationCmp = __decorate([
        core_1.Component({
            selector: 'grid-globalization-cmp',
            templateUrl: 'src/components/infra/globalizationCmp.html',
            directives: [wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjMenuSeparator,
                wjNg2Input.WjCalendar, common_1.CORE_DIRECTIVES],
            pipes: [appPipes_1.GlbzPipe, appPipes_1.ToDatePipe]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GlobalizationCmp);
    return GlobalizationCmp;
}(InputBaseCmp_1.InputBaseCmp));
exports.GlobalizationCmp = GlobalizationCmp;
//# sourceMappingURL=GlobalizationCmp.js.map