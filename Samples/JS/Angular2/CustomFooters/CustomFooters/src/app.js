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
// Angular
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
var wjNg2GridFilter = require('wijmo/wijmo.angular2.grid.filter');
var DataSvc_1 = require('./services/DataSvc');
var GridFooterForDctv_1 = require('./components/GridFooterForDctv');
var GroupFootersDctv_1 = require('./components/GroupFootersDctv');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        this.dataSvc = dataSvc;
        this.data = new wijmo.collections.CollectionView(this.dataSvc.getData(10));
    }
    AppCmp.prototype.groupBy = function (groupBy) {
        this.data.groupDescriptions.clear();
        var groups = groupBy ? groupBy.split(',') : [];
        for (var i = 0; i < groups.length; i++) {
            this.data.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription(groups[i]));
        }
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, wjNg2Input.WjComboBox, GridFooterForDctv_1.GridFooterFor, GroupFootersDctv_1.GroupFooters,
                wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn, wjNg2GridFilter.WjFlexGridFilter]
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