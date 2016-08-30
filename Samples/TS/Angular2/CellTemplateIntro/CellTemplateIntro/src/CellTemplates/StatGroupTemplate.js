'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var StatGroupTemplate = (function () {
    function StatGroupTemplate() {
    }
    StatGroupTemplate = __decorate([
        core_1.Component({
            selector: 'expence-cell-edit-cmp',
            templateUrl: 'src/CellTemplates/statGroupTemplate.html',
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Chart.WjFlexPie, wjNg2Grid.WjFlexGridColumn,
                wjNg2Chart.WjFlexChartLegend, wjNg2Chart.WjFlexPieDataLabel]
        })
    ], StatGroupTemplate);
    return StatGroupTemplate;
}());
exports.StatGroupTemplate = StatGroupTemplate;
//# sourceMappingURL=StatGroupTemplate.js.map