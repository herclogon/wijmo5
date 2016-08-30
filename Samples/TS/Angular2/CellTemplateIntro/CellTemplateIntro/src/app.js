///<reference path="../typings/globals/core-js/index.d.ts"/>
"use strict";
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
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var wjNg2Core = require('wijmo/wijmo.angular2.core');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var AppTab_1 = require('./components/AppTab');
var DataSvc_1 = require('./services/DataSvc');
var CountryGroupHeaderTemplate_1 = require('./CellTemplates/CountryGroupHeaderTemplate');
var StatGroupTemplate_1 = require('./CellTemplates/StatGroupTemplate');
var StatHeaderTemplate_1 = require('./CellTemplates/StatHeaderTemplate');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        this.countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
        this.customTopLeft = true;
        this.customRowHeader = true;
        this.customRowHeaderEdit = true;
        this.customCell = true;
        this.customCellEdit = true;
        this.customColumnHeader = true;
        this.customGroupHeader = true;
        this.customGroup = true;
        this.statisticsColumns = [
            {
                binding: 'downloads',
                header: 'Downloads',
                width: 230,
                align: 'center',
                format: 'N0',
                columnHeaderTemplate: StatHeaderTemplate_1.StatHeaderTemplate,
                groupTemplate: StatGroupTemplate_1.StatGroupTemplate,
                reportType: 'Chart',
                isAvailable: true
            },
            {
                binding: 'sales',
                header: 'Sales',
                width: 230,
                align: 'center',
                format: 'N2',
                columnHeaderTemplate: StatHeaderTemplate_1.StatHeaderTemplate,
                groupTemplate: StatGroupTemplate_1.StatGroupTemplate,
                reportType: 'Chart',
                isAvailable: false
            },
            {
                binding: 'expenses',
                header: 'Expenses',
                width: 230,
                align: 'center',
                format: 'N2',
                columnHeaderTemplate: StatHeaderTemplate_1.StatHeaderTemplate,
                groupTemplate: StatGroupTemplate_1.StatGroupTemplate,
                reportType: 'Table',
                isAvailable: true
            }];
        this.uiCtx = {
            highlightDownloads: true,
            reportType: 'Chart'
        };
        this.countryGroupHeaderTemplate = CountryGroupHeaderTemplate_1.CountryGroupHeaderTemplate;
        this.dataSvc = dataSvc;
        var data = dataSvc.getData();
        this.data1 = dataSvc.getCv(data);
        this.data2 = dataSvc.getCv(data);
        this.data3 = dataSvc.getCv(data);
    }
    AppCmp.prototype.ngAfterViewInit = function () {
        if (this.flex2) {
            this.flex2.collapseGroupsToLevel(0);
        }
        if (this.flex3) {
            this._dynaColumnsFlexInit(this.flex3);
        }
    };
    AppCmp.prototype._dynaColumnsFlexInit = function (flex) {
        flex.columnHeaders.rows.defaultSize = 36;
        flex.cells.rows.defaultSize = 156;
        flex.collapseGroupsToLevel(0);
    };
    __decorate([
        core_1.ViewChild('flex2')
    ], AppCmp.prototype, "flex2", void 0);
    __decorate([
        core_1.ViewChild('flex3')
    ], AppCmp.prototype, "flex3", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, AppTab_1.AppTab, AppTab_1.AppTabPane,
                wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2Grid.WjFlexGridCellTemplate,
                wjNg2Core.WjComponentLoader, wjNg2Core.WjHtmlLoader,
                wjNg2Chart.WjFlexChart, wjNg2Chart.WjFlexChartLegend, wjNg2Chart.WjFlexChartSeries, wjNg2Chart.WjFlexChartAxis,
                wjNg2Chart.WjFlexPie, wjNg2Chart.WjFlexPieDataLabel,
                wjNg2Input.WjComboBox, wjNg2Input.WjInputNumber, wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Input.WjListBox]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.bootstrap(AppCmp, [
    DataSvc_1.DataSvc
]);
//# sourceMappingURL=app.js.map