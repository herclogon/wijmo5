"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Globalize pipe
var GlbzPipe = (function () {
    function GlbzPipe() {
    }
    GlbzPipe.prototype.transform = function (value, args) {
        return wijmo.Globalize.format(value, args[0]);
    };
    GlbzPipe = __decorate([
        core_1.Pipe({
            name: 'glbz',
            // stateful pipe
            pure: false
        })
    ], GlbzPipe);
    return GlbzPipe;
}());
exports.GlbzPipe = GlbzPipe;
// ToDate pipe - converts date/time string to a Date object
var ToDatePipe = (function () {
    function ToDatePipe() {
    }
    ToDatePipe.prototype.transform = function (value, args) {
        if (value && wijmo.isString(value)) {
            // parse date/time using RFC 3339 pattern
            var dt = wijmo.changeType(value, wijmo.DataType.Date, 'r');
            if (wijmo.isDate(dt)) {
                return dt;
            }
        }
        return value;
    };
    ToDatePipe = __decorate([
        core_1.Pipe({
            name: 'toDate'
        })
    ], ToDatePipe);
    return ToDatePipe;
}());
exports.ToDatePipe = ToDatePipe;
// CellRange pipe
var CellRangePipe = (function () {
    function CellRangePipe() {
    }
    CellRangePipe.prototype.transform = function (value, args) {
        var rng = '';
        if (value instanceof wijmo.grid.CellRange) {
            rng = '(' + value.row + ';' + value.col + ')';
            if (!value.isSingleCell) {
                rng += '-(' + value.row2 + ';' + value.col2 + ')';
            }
        }
        return rng;
    };
    CellRangePipe = __decorate([
        core_1.Pipe({
            name: 'cellRange'
        })
    ], CellRangePipe);
    return CellRangePipe;
}());
exports.CellRangePipe = CellRangePipe;
//exports
var AppPipesModule = (function () {
    function AppPipesModule() {
    }
    AppPipesModule = __decorate([
        core_1.NgModule({
            //imports: [Pipe],
            declarations: [GlbzPipe, ToDatePipe, CellRangePipe],
            exports: [GlbzPipe,
                ToDatePipe,
                CellRangePipe],
        })
    ], AppPipesModule);
    return AppPipesModule;
}());
exports.AppPipesModule = AppPipesModule;
//# sourceMappingURL=appPipes.js.map