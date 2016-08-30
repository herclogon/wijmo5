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
var DataSvc_1 = require('../services/DataSvc');
var BindingFlexSheetBaseCmp_1 = require('./BindingFlexSheetBaseCmp');
var wjFlexSheet = require('wijmo/wijmo.angular2.grid.sheet');
var SortingCmp = (function (_super) {
    __extends(SortingCmp, _super);
    function SortingCmp(dataSvc) {
        _super.call(this, dataSvc);
    }
    SortingCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        _super.prototype.flexSheetInit.call(this, flexSheet);
        if (flexSheet) {
            self.columns = self._getColumns();
            self.sortManager = flexSheet.sortManager;
            flexSheet.selectedSheetChanged.addHandler(function (sender, args) {
                self.columns = self._getColumns();
                if (!self.sortManager) {
                    self.sortManager = flexSheet.sortManager;
                }
            });
            flexSheet.columns.collectionChanged.addHandler(function () {
                self.columns = self._getColumns();
            });
            flexSheet.loaded.addHandler(function () {
                self.columns = self._getColumns();
            });
        }
    };
    // commit the sorts
    SortingCmp.prototype.commitSort = function () {
        this.sortManager.commitSort();
    };
    ;
    // cancel the sorts
    SortingCmp.prototype.cancelSort = function () {
        this.sortManager.cancelSort();
    };
    ;
    // add new sort level
    SortingCmp.prototype.addSortLevel = function () {
        this.sortManager.addSortLevel();
    };
    ;
    // delete current sort level
    SortingCmp.prototype.deleteSortLevel = function () {
        this.sortManager.deleteSortLevel();
    };
    ;
    // copy a new sort level by current sort level setting.
    SortingCmp.prototype.copySortLevel = function () {
        this.sortManager.copySortLevel();
    };
    ;
    // move the sort level
    SortingCmp.prototype.moveSortLevel = function (offset) {
        this.sortManager.moveSortLevel(offset);
    };
    ;
    // apply column index property for sort item
    SortingCmp.prototype.applySortColumnIndex = function (e, sortItem) {
        sortItem.columnIndex = +e.target.value;
    };
    // apply asceding property for sort item
    SortingCmp.prototype.applySortAscending = function (e, sortItem) {
        if (e.target.value === 'true') {
            sortItem.ascending = true;
        }
        else {
            sortItem.ascending = false;
        }
    };
    SortingCmp.prototype._getColumns = function () {
        var columns = [], i = 0;
        if (this.flexSheet) {
            for (; i < this.flexSheet.columns.length; i++) {
                columns.push('Column ' + wijmo.grid.sheet.FlexSheet.convertNumberToAlpha(i));
            }
        }
        return columns;
    };
    SortingCmp = __decorate([
        core_1.Component({
            selector: 'sorting-cmp',
            templateUrl: 'src/components/sortingCmp.html',
            directives: [wjFlexSheet.WjFlexSheet, wjFlexSheet.WjSheet]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], SortingCmp);
    return SortingCmp;
}(BindingFlexSheetBaseCmp_1.BindingFlexSheetBaseCmp));
exports.SortingCmp = SortingCmp;
//# sourceMappingURL=SortingCmp.js.map