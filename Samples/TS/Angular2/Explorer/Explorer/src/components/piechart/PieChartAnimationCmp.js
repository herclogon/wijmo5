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
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var wijmo_angular2_chart_animation_1 = require('wijmo/wijmo.angular2.chart.animation');
// Chart animation component
var PieChartAnimationCmp = (function () {
    function PieChartAnimationCmp() {
        var _this = this;
        this.addSlice = function () {
            this.data.push(this._getRandomData('added' + this.insertPieIdx));
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
        this._setDataSource();
        this.title = 'FlexPie';
        this.duration = 400;
        this.innerRadius = 0;
        this.easing = 'Swing';
        this.animationMode = 'All';
    }
    PieChartAnimationCmp.prototype._setDataSource = function () {
        this.data = this._getData(this.flexPiePoints);
        this.insertPieIdx = 1;
    };
    PieChartAnimationCmp.prototype.resetChartData = function () {
        this._setDataSource();
    };
    PieChartAnimationCmp.prototype.animationModeChanged = function () {
        this.animation.animationMode = this.animationMode;
        this.flexPie.refresh(true);
    };
    // get data by symbol
    PieChartAnimationCmp.prototype._getData = function (count) {
        var data = new wijmo.collections.ObservableArray();
        for (var i = 1; i <= count; i++) {
            data.push(this._getRandomData('random' + this._getRandomValue(1000)));
        }
        return data;
    };
    PieChartAnimationCmp.prototype._getRandomData = function (idx) {
        return {
            //x: getRandomValue(100),
            x: idx,
            y: this._getRandomValue(200),
            y1: this._getRandomValue(400),
            y2: this._getRandomValue(600),
            y3: this._getRandomValue(800),
            y4: this._getRandomValue(1000)
        };
    };
    PieChartAnimationCmp.prototype._getRandomValue = function (max) {
        return Math.round(Math.random() * max);
    };
    __decorate([
        core_1.ViewChild('flexPie')
    ], PieChartAnimationCmp.prototype, "flexPie", void 0);
    __decorate([
        core_1.ViewChild('animation')
    ], PieChartAnimationCmp.prototype, "animation", void 0);
    PieChartAnimationCmp = __decorate([
        core_1.Component({
            selector: 'pie-chart-animation-cmp',
            templateUrl: 'src/components/piechart/pieChartAnimationCmp.html',
            styles: ["\n   .list-inline > li {\n    margin-bottom: 5px;\n}\n  "]
        })
    ], PieChartAnimationCmp);
    return PieChartAnimationCmp;
}());
exports.PieChartAnimationCmp = PieChartAnimationCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: PieChartAnimationCmp }
]);
var PieChartAnimationModule = (function () {
    function PieChartAnimationModule() {
    }
    PieChartAnimationModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_chart_1.WjChartModule, wijmo_angular2_input_1.WjInputModule, wijmo_angular2_chart_animation_1.WjChartAnimationModule],
            declarations: [PieChartAnimationCmp],
        })
    ], PieChartAnimationModule);
    return PieChartAnimationModule;
}());
exports.PieChartAnimationModule = PieChartAnimationModule;
//# sourceMappingURL=PieChartAnimationCmp.js.map