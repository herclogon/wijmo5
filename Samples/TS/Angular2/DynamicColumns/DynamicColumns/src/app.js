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
var forms_1 = require('@angular/forms');
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        var data = dataSvc.getData(10000);
        this.data = new wijmo.collections.CollectionView(data);
        // build list of columns available
        var item = data[0];
        var fields = new wijmo.collections.ObservableArray();
        for (var key in item) {
            fields.push(key);
        }
        this.columnsAvailable = new wijmo.collections.CollectionView(fields);
        this.columns = new wijmo.collections.CollectionView();
        for (var i = 0; i < 3; i++) {
            this.columnsAvailable.moveCurrentToFirst();
            this.addColumn();
        }
    }
    // move item from columnsAvailable to columns
    AppCmp.prototype.addColumn = function () {
        var item = this.columnsAvailable.currentItem, index = this.columns.currentPosition;
        if (item) {
            this.columnsAvailable.remove(item);
            this.columns.sourceCollection.splice(Math.max(0, index), 0, item);
            this.columns.moveCurrentTo(item);
        }
    };
    // move item from columns to columnsAvailable
    AppCmp.prototype.removeColumn = function () {
        var item = this.columns.currentItem, index = this.columnsAvailable.currentPosition;
        if (item) {
            this.columns.remove(item);
            this.columnsAvailable.sourceCollection.splice(Math.max(0, index), 0, item);
            this.columnsAvailable.moveCurrentTo(item);
        }
    };
    // move a column within the columns collection
    AppCmp.prototype.moveColumn = function (offset) {
        var item = this.columns.currentItem;
        if (item) {
            var arr = this.columns.sourceCollection, index = arr.indexOf(item), newIndex = index + offset;
            if (index > -1 && newIndex > -1) {
                arr.splice(index, 1);
                arr.splice(newIndex, 0, item);
                this.columns.moveCurrentTo(item);
            }
        }
    };
    // update columns array if the user moves a column
    // (the ng-repeat directive cannot do this)
    AppCmp.prototype.draggedColumn = function (s) {
        var columns = new wijmo.collections.ObservableArray();
        for (var i = 0; i < s.columns.length; i++) {
            columns.push(s.columns[i].binding);
        }
        this.columns.sourceCollection = columns;
    };
    __decorate([
        core_1.ViewChild('flex')
    ], AppCmp.prototype, "flex", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], AppCmp);
    return AppCmp;
}());
exports.AppCmp = AppCmp;
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [wijmo_angular2_input_1.WjInputModule, wijmo_angular2_grid_1.WjGridModule, platform_browser_1.BrowserModule, forms_1.FormsModule],
            declarations: [AppCmp],
            providers: [DataSvc_1.DataSvc],
            bootstrap: [AppCmp]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
core_1.enableProdMode();
// Bootstrap application with hash style navigation and global services.
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule);
//# sourceMappingURL=app.js.map