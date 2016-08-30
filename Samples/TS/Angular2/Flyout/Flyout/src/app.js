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
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        this.data = dataSvc.getData();
    }
    AppCmp.prototype.ngAfterViewInit = function () {
        this._initializeFlyout(this.flex);
    };
    AppCmp.prototype._initializeFlyout = function (s) {
        // create the FlexGridFlyout
        var f = new wijmo.grid.FlexGridFlyout(s);
        // add some content to the flyout element
        f.flyout.innerHTML =
            '<span id="fo-size"    title="Auto Size Column" class="glyphicon glyphicon-resize-horizontal"></span>' +
                '<span id="fo-sorta"   title="Sort Ascending"   class="glyphicon glyphicon glyphicon-sort-by-attributes"></span>' +
                '<span id="fo-sortd"   title="Sort Descending"  class="glyphicon glyphicon glyphicon-sort-by-attributes-alt"></span>' +
                '<span id="fo-refresh" title="Refresh Data"     class="glyphicon glyphicon glyphicon-refresh"></span>' +
                '<span id="fo-comment" title="Show Comment"     class="glyphicon glyphicon glyphicon-comment"></span>';
        // handle clicks on the flyout element
        s.addEventListener(f.flyout, 'click', function (e) {
            switch (e.target.id) {
                case 'fo-size':
                    s.autoSizeColumn(f.column.index);
                    break;
                case 'fo-sorta':
                case 'fo-sortd':
                    var sd = s.collectionView.sortDescriptions;
                    sd.clear();
                    sd.push(new wijmo.collections.SortDescription(f.column.binding, e.target.id == 'fo-sorta'));
                    break;
                case 'fo-refresh':
                    s.collectionView.refresh();
                    break;
                case 'fo-comment':
                    alert('Showing detail for column ' + f.column.header + '...');
                    break;
            }
            wijmo.hidePopup(f.flyout);
        });
    };
    ;
    __decorate([
        core_1.ViewChild('flex')
    ], AppCmp.prototype, "flex", void 0);
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, wjNg2Grid.WjFlexGrid]
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