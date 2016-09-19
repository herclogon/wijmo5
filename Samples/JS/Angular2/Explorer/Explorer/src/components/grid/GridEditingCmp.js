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
var wijmo_angular2_core_1 = require('wijmo/wijmo.angular2.core');
var wijmo_angular2_grid_1 = require('wijmo/wijmo.angular2.grid');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// FlexGrid Editing component.
var GridEditingCmp = (function (_super) {
    __extends(GridEditingCmp, _super);
    function GridEditingCmp(dataSvc) {
        var _this = this;
        _super.call(this, dataSvc);
        this.alwaysEdit = false;
        this._start = new Date();
        this._colorId = 0;
        this._productId = 0;
        this._countryId = 0;
        this._amount = 0;
        this._amount2 = 0;
        this.selectionChangedHandler = function () {
            var flex = _this.flex;
            _this._updateView();
            // keep the control in edit mode
            if (_this.alwaysEdit == true && flex.containsFocus()) {
                setTimeout(function () {
                    flex.startEditing(false);
                }, 50);
            }
        };
        //this.products = this.dataSvc.getProducts();
        this.products = this.dataSvc.getProducts();
        this.colors = this.dataSvc.getColors();
        this.countries = this.dataSvc.getSomeCountries();
        this._applyFilter();
    }
    GridEditingCmp.prototype.ngAfterViewInit = function () {
        var _this = this;
        var self = this;
        _super.prototype.ngAfterViewInit.call(this);
        this._updateView();
        $('#dlgDetail').on('shown.bs.modal', function (e) {
            self.flex.collectionView.editItem(self.flex.collectionView.currentItem);
        });
        if (this.flexInline) {
            var flex = this.flexInline;
            if (flex) {
                // prevent default editing
                flex.isReadOnly = true;
                // make rows taller to accommodate edit buttons and input controls
                flex.rows.defaultSize = 44;
                // use formatter to create buttons and custom editors
                //flex.itemFormatter = this.itemFormatter;
                // commit row changes when scrolling the grid
                flex.scrollPositionChanged.addHandler(function () {
                    if (_this.editIndex > -1) {
                        _this.commitRow(_this.editIndex);
                    }
                });
            }
        }
    };
    Object.defineProperty(GridEditingCmp.prototype, "start", {
        get: function () {
            return this._start;
        },
        set: function (value) {
            if (this._start != value) {
                this._start = value;
                this.flex.collectionView.currentItem.start = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridEditingCmp.prototype, "colorId", {
        get: function () {
            return this._colorId;
        },
        set: function (value) {
            if (this._colorId != value) {
                this._colorId = value;
                this.flex.collectionView.currentItem.colorId = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridEditingCmp.prototype, "productId", {
        get: function () {
            return this._productId;
        },
        set: function (value) {
            if (this._productId != value) {
                this._productId = value;
                this.flex.collectionView.currentItem.productId = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridEditingCmp.prototype, "countryId", {
        get: function () {
            return this._countryId;
        },
        set: function (value) {
            if (this._countryId != value) {
                this._countryId = value;
                this.flex.collectionView.currentItem.countryId = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridEditingCmp.prototype, "amount", {
        get: function () {
            return this._amount;
        },
        set: function (value) {
            if (this._amount != value) {
                this._amount = value;
                this.flex.collectionView.currentItem.amount = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridEditingCmp.prototype, "amount2", {
        get: function () {
            return this._amount2;
        },
        set: function (value) {
            if (this._amount2 != value) {
                this._amount2 = value;
                this.flex.collectionView.currentItem.amount2 = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    GridEditingCmp.prototype.editRow = function (rowIdx) {
        this.editIndex = rowIdx;
        this.flexInline.invalidate();
    };
    GridEditingCmp.prototype.deleteRow = function (rowIdx) {
        var ecv = this.flexInline.collectionView;
        ecv.removeAt(rowIdx);
    };
    GridEditingCmp.prototype.commitRow = function (rowIdx) {
        // save changes
        var flex = this.flexInline;
        flex.setCellData(rowIdx, 'start', $("#theDate").val());
        flex.setCellData(rowIdx, 'product', $("#theProduct").val());
        // done editing
        this.cancelRow(rowIdx);
    };
    GridEditingCmp.prototype.cancelRow = function (rowIdx) {
        this.editIndex = -1;
        this.flexInline.invalidate();
    };
    GridEditingCmp.prototype._updateView = function () {
        if (!this.flex.collectionView.currentItem) {
            return;
        }
        this._start = this.flex.collectionView.currentItem.start;
        this._colorId = this.flex.collectionView.currentItem.colorId;
        this._productId = this.flex.collectionView.currentItem.productId;
        this._countryId = this.flex.collectionView.currentItem.countryId;
        this._amount = this.flex.collectionView.currentItem.amount;
        this._amount2 = this.flex.collectionView.currentItem.amount2;
    };
    __decorate([
        core_1.ViewChild('flex')
    ], GridEditingCmp.prototype, "flex", void 0);
    __decorate([
        core_1.ViewChild('flexInline')
    ], GridEditingCmp.prototype, "flexInline", void 0);
    GridEditingCmp = __decorate([
        core_1.Component({
            selector: 'grid-editing-cmp',
            templateUrl: 'src/components/grid/gridEditingCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], GridEditingCmp);
    return GridEditingCmp;
}(GridBaseCmp_1.GridBaseCmp));
exports.GridEditingCmp = GridEditingCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: GridEditingCmp }
]);
var GridEditingModule = (function () {
    function GridEditingModule() {
    }
    GridEditingModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_core_1.WjCoreModule, wijmo_angular2_grid_1.WjGridModule, wijmo_angular2_input_1.WjInputModule],
            declarations: [GridEditingCmp],
        })
    ], GridEditingModule);
    return GridEditingModule;
}());
exports.GridEditingModule = GridEditingModule;
//# sourceMappingURL=GridEditingCmp.js.map