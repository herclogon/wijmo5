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
var DataSvc_1 = require('../services/DataSvc');
// Base class for all components demonstrating Binding FlexSheet control.
var BindingFlexSheetBaseCmp = (function () {
    function BindingFlexSheetBaseCmp(dataSvc) {
        this.dataSvc = dataSvc;
        this.data = dataSvc.getData(50);
    }
    BindingFlexSheetBaseCmp.prototype.flexSheetInit = function (flexSheet) {
        var self = this;
        if (flexSheet) {
            flexSheet.deferUpdate(function () {
                for (var i = 0; i < flexSheet.sheets.length; i++) {
                    flexSheet.sheets.selectedIndex = i;
                    if (flexSheet.sheets[i].name === 'Country') {
                        flexSheet.selectedSheet.itemsSource = self.data;
                        self._initDataMapForBindingSheet(flexSheet);
                    }
                }
                flexSheet.selectedSheetIndex = 0;
            });
        }
    };
    // initialize the dataMap for the bound sheet.
    BindingFlexSheetBaseCmp.prototype._initDataMapForBindingSheet = function (flexSheet) {
        var column;
        if (flexSheet) {
            column = flexSheet.columns.getColumn('countryId');
            if (column && !column.dataMap) {
                column.dataMap = this._buildDataMap(this.dataSvc.countries);
            }
            column = flexSheet.columns.getColumn('productId');
            if (column && !column.dataMap) {
                column.width = 100;
                column.dataMap = this._buildDataMap(this.dataSvc.products);
            }
        }
    };
    // build a data map from a string array using the indices as keys
    BindingFlexSheetBaseCmp.prototype._buildDataMap = function (items) {
        var map = [];
        for (var i = 0; i < items.length; i++) {
            map.push({ key: i, value: items[i] });
        }
        return new wijmo.grid.DataMap(map, 'key', 'value');
    };
    __decorate([
        core_1.ViewChild('flexSheet')
    ], BindingFlexSheetBaseCmp.prototype, "flexSheet", void 0);
    BindingFlexSheetBaseCmp = __decorate([
        core_1.Component({
            selector: '',
            templateUrl: ''
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], BindingFlexSheetBaseCmp);
    return BindingFlexSheetBaseCmp;
}());
exports.BindingFlexSheetBaseCmp = BindingFlexSheetBaseCmp;
//# sourceMappingURL=BindingFlexSheetBaseCmp.js.map