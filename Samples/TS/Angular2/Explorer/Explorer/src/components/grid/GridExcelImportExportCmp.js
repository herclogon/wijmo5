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
var common_1 = require('@angular/common');
var forms_1 = require('@angular/forms');
var GridBaseCmp_1 = require('./GridBaseCmp');
var DataSvc_1 = require('../../services/DataSvc');
var router_1 = require('@angular/router');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
// FlexGrid excel Export component.
var GridExcelImportExportCmp = (function (_super) {
    __extends(GridExcelImportExportCmp, _super);
    function GridExcelImportExportCmp(dataSvc) {
        _super.call(this, dataSvc);
        this.includeColumnHeader = true;
    }
    GridExcelImportExportCmp.prototype.exportExcel = function () {
        wijmo.grid.xlsx.FlexGridXlsxConverter.save(this.flexGrid, { includeColumnHeaders: this.includeColumnHeader, includeCellStyles: false }, 'FlexGrid.xlsx');
    };
    GridExcelImportExportCmp.prototype.importExcel = function () {
        var fileInput = document.getElementById('importFile');
        if (fileInput.files[0]) {
            wijmo.grid.xlsx.FlexGridXlsxConverter.load(this.flexGrid, fileInput.files[0], { includeColumnHeaders: this.includeColumnHeader });
        }
    };
    GridExcelImportExportCmp.prototype.updateGroup = function (flex) {
        var groupNames = ['Product', 'Country', 'Amount'], cv, propName, groupDesc;
        if (flex) {
            // get the collection view, start update
            cv = flex.collectionView;
            cv.beginUpdate();
            // clear existing groups
            cv.groupDescriptions.clear();
            // add new groups
            for (var i = 0; i < groupNames.length; i++) {
                propName = groupNames[i].toLowerCase();
                if (propName == 'amount') {
                    // group amounts in ranges
                    // (could use the mapping function to group countries into continents, 
                    // names into initials, etc)
                    groupDesc = new wijmo.collections.PropertyGroupDescription(propName, function (item, prop) {
                        var value = item[prop];
                        if (value > 1000)
                            return 'Large Amounts';
                        if (value > 100)
                            return 'Medium Amounts';
                        if (value > 0)
                            return 'Small Amounts';
                        return 'Negative';
                    });
                    cv.groupDescriptions.push(groupDesc);
                }
                else if (propName) {
                    // group other properties by their specific values
                    groupDesc = new wijmo.collections.PropertyGroupDescription(propName);
                    cv.groupDescriptions.push(groupDesc);
                }
            }
            // done updating
            cv.endUpdate();
        }
    };
    __decorate([
        core_1.ViewChild('flexGrid')
    ], GridExcelImportExportCmp.prototype, "flexGrid", void 0);
    GridExcelImportExportCmp = __decorate([
        core_1.Component({
            selector: 'grid-excel-import-export-cmp',
            templateUrl: 'src/components/grid/gridExcelImportExportCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridExcelImportExportCmp);
    return GridExcelImportExportCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridExcelImportExportCmp = GridExcelImportExportCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: GridExcelImportExportCmp }
]);
var GridExcelImportExportModule = (function () {
    function GridExcelImportExportModule() {
    }
    GridExcelImportExportModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_grid_1.WjGridModule],
            declarations: [GridExcelImportExportCmp],
        })
    ], GridExcelImportExportModule);
    return GridExcelImportExportModule;
}());
exports.GridExcelImportExportModule = GridExcelImportExportModule;
//# sourceMappingURL=GridExcelImportExportCmp.js.map