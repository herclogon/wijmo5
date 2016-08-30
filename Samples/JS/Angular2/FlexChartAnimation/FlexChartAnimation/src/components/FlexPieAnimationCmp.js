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
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var wjNg2Animation = require('wijmo/wijmo.angular2.chart.animation');
var DataSvc_1 = require('./../services/DataSvc');
//FlexPieAnimation sample component
var FlexPieAnimationCmp = (function () {
    function FlexPieAnimationCmp(dataSvc) {
        var _this = this;
        this.addSlice = function () {
            this.data.push(this.dataService.getRandomData('added' + this.insertPieIdx));
            this.insertPieIdx++;
        };
        this.removeSlice = function () {
            if (this.data.length) {
                this.data.pop();
                this.insertPieIdx = this.insertPieIdx <= 1 ? 1 : this.insertPieIdx--;
            }
        };
        this.innerRadiusChanged = function (sender) {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            _this.innerRadius = sender.value;
        };
        this.durationChanged = function (sender) {
            if (sender.value < sender.min || sender.value > sender.max) {
                return;
            }
            _this.duration = sender.value;
        };
        this.flexPiePoints = 5;
        this.dataService = dataSvc;
        this._setDataSource();
        this.title = 'FlexPie';
        this.duration = 400;
        this.innerRadius = 0;
        this.easing = 'Swing';
        this.animationMode = 'All';
    }
    FlexPieAnimationCmp.prototype._setDataSource = function () {
        this.data = this.dataService.getData(this.flexPiePoints);
        this.insertPieIdx = 1;
    };
    FlexPieAnimationCmp.prototype.resetChartData = function () {
        this._setDataSource();
    };
    FlexPieAnimationCmp.prototype.animationModeChanged = function (args) {
        if (args.selectedValue !== this.animationMode) {
            this.animation.animationMode = args.selectedValue;
            this.flexPie.refresh(true);
        }
    };
    __decorate([
        core_1.ViewChild('flexPie')
    ], FlexPieAnimationCmp.prototype, "flexPie", void 0);
    __decorate([
        core_1.ViewChild('animation')
    ], FlexPieAnimationCmp.prototype, "animation", void 0);
    FlexPieAnimationCmp = __decorate([
        core_1.Component({
            selector: 'flex-pie-animation-cmp',
            templateUrl: 'src/components/FlexPieAnimationCmp.html',
            directives: [wjNg2Chart.WjFlexPie, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjInputNumber,
                wjNg2Animation.WjFlexChartAnimation, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], FlexPieAnimationCmp);
    return FlexPieAnimationCmp;
}());
exports.FlexPieAnimationCmp = FlexPieAnimationCmp;
//# sourceMappingURL=FlexPieAnimationCmp.js.map