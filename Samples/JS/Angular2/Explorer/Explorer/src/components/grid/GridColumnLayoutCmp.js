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
var GridBaseCmp_1 = require('./GridBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
// FlexGrid Column Layout component.
var GridColumnLayoutCmp = (function (_super) {
    __extends(GridColumnLayoutCmp, _super);
    function GridColumnLayoutCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    // ** save/restore column layout
    GridColumnLayoutCmp.prototype.saveColumnLayout = function () {
        if (localStorage) {
            localStorage['columns'] = this.flex.columnLayout;
            console.log('** Saved layout: ' + this.flex.columnLayout);
        }
    };
    GridColumnLayoutCmp.prototype.loadColumnLayout = function () {
        if (localStorage) {
            if (!localStorage['columns']) {
                alert('Please save a layout first...');
            }
            else {
                this.flex.columnLayout = localStorage['columns'];
                console.log('** Loaded layout: ' + this.flex.columnLayout);
            }
        }
    };
    GridColumnLayoutCmp = __decorate([
        core_1.Component({
            selector: 'grid-column-layout-cmp',
            templateUrl: 'src/components/grid/gridColumnLayoutCmp.html',
            directives: [wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridColumnLayoutCmp);
    return GridColumnLayoutCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridColumnLayoutCmp = GridColumnLayoutCmp;
//# sourceMappingURL=GridColumnLayoutCmp.js.map