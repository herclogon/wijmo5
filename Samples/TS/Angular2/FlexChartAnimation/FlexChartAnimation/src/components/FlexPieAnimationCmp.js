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
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_chart_1 = require('wijmo/wijmo.angular2.chart');
var wijmo_angular2_chart_animation_1 = require('wijmo/wijmo.angular2.chart.animation');
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
    FlexPieAnimationCmp.prototype.animationModeChanged = function () {
        this.animation.animationMode = this.animationMode;
        this.flexPie.refresh(true);
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
            templateUrl: 'src/components/FlexPieAnimationCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], FlexPieAnimationCmp);
    return FlexPieAnimationCmp;
}());
exports.FlexPieAnimationCmp = FlexPieAnimationCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: FlexPieAnimationCmp }
]);
var FlexPieAnimationModule = (function () {
    function FlexPieAnimationModule() {
    }
    FlexPieAnimationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, routing, forms_1.FormsModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_chart_animation_1.WjChartAnimationModule],
            declarations: [FlexPieAnimationCmp],
        })
    ], FlexPieAnimationModule);
    return FlexPieAnimationModule;
}());
exports.FlexPieAnimationModule = FlexPieAnimationModule;
//# sourceMappingURL=FlexPieAnimationCmp.js.map