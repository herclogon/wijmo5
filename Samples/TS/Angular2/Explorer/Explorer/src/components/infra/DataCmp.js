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
var router_1 = require('@angular/router');
var DataSvc_1 = require('../../services/DataSvc');
var InputBaseCmp_1 = require('../input/InputBaseCmp');
var wijmo_angular2_input_1 = require('wijmo/wijmo.angular2.input');
// Wijmo Data component.
var DataCmp = (function (_super) {
    __extends(DataCmp, _super);
    function DataCmp(dataSvc) {
        var _this = this;
        _super.call(this, dataSvc);
        this.cv = new wijmo.collections.CollectionView(dataSvc.getData(500));
        this.cv.pageSize = 10;
        this.groupedList = this.cv.items;
        this.cv.filter = this._filterFun.bind(this);
        this.cv.newItemCreator = function () {
            var newItem = dataSvc.getData(1)[0];
            newItem.id = -1;
            return newItem;
        };
        this.cv.collectionChanged.addHandler(function () {
            _this.groupedList = _this.cv.items;
            if (_this.cv.groups && _this.cv.groups.length > 0) {
                _this.groupedList = [];
                for (var i = 0; i < _this.cv.groups.length; i++) {
                    _this._addGroup(_this.cv.groups[i]);
                }
            }
        });
        this.filter = { id: '', country: '', color: '', minAmount: null, month: null };
    }
    DataCmp.prototype.doFilter = function () {
        var _this = this;
        if (this._timeOut) {
            clearTimeout(this._timeOut);
        }
        this._timeOut = setTimeout(function () {
            _this._timeOut = null;
            _this.cv.refresh();
        }, 250);
    };
    // IEditableCollectionView commands
    DataCmp.prototype.isEditing = function () {
        return this.cv.isEditingItem || this.cv.isAddingNew;
    };
    DataCmp.prototype.edit = function () {
        this.cv.editItem(this.cv.currentItem);
    };
    DataCmp.prototype.add = function () {
        this.cv.addNew();
    };
    DataCmp.prototype.delete = function () {
        this.cv.remove(this.cv.currentItem);
    };
    DataCmp.prototype.commit = function () {
        this.cv.commitEdit();
        this.cv.commitNew();
    };
    DataCmp.prototype.cancel = function () {
        this.cv.cancelEdit();
        this.cv.cancelNew();
    };
    DataCmp.prototype.moveCurrentTo = function (item) {
        if (!this.isEditing() && !this.isGroup(item)) {
            this.cv.moveCurrentTo(item);
        }
    };
    // sorting
    DataCmp.prototype.getSort = function (propName) {
        var sd = this.cv.sortDescriptions;
        if (sd.length > 0 && sd[0].property == propName) {
            return sd[0].ascending ? '▲' : '▼';
        }
        return '◇';
    };
    DataCmp.prototype.toggleSort = function (propName) {
        var sd = this.cv.sortDescriptions;
        var ascending = true;
        if (sd.length > 0 && sd[0].property == propName) {
            ascending = !sd[0].ascending;
        }
        var sdNew = new wijmo.collections.SortDescription(propName, ascending);
        // remove any old sort descriptors and add the new one
        sd.splice(0, sd.length, sdNew);
    };
    // grouping
    DataCmp.prototype.getGroup = function (propName) {
        var index = this._findGroup(propName);
        return index < 0
            ? Array(this.cv.groupDescriptions.length + 2).join('▷')
            : Array(index + 2).join('▶');
    };
    DataCmp.prototype.toggleGroup = function (propName) {
        var gd = this.cv.groupDescriptions;
        var index = this._findGroup(propName);
        if (index >= 0) {
            gd.removeAt(index);
        }
        else {
            if (propName == 'amount') {
                // when grouping by amount, use ranges instead of specific values
                gd.push(new wijmo.collections.PropertyGroupDescription(propName, function (item, propName) {
                    var value = item[propName]; // amount
                    if (value > 1000)
                        return 'Large Amounts';
                    if (value > 100)
                        return 'Medium Amounts';
                    if (value > 0)
                        return 'Small Amounts';
                    return 'Negative Amounts';
                }));
            }
            else {
                // group by specific property values
                gd.push(new wijmo.collections.PropertyGroupDescription(propName));
            }
        }
    };
    DataCmp.prototype.isGroup = function (item) {
        return item instanceof wijmo.collections.CollectionViewGroup;
    };
    DataCmp.prototype._addGroup = function (g) {
        this.groupedList.push(g);
        if (g.isBottomLevel) {
            for (var i = 0; i < g.items.length; i++) {
                this.groupedList.push(g.items[i]);
            }
        }
        else {
            for (var i = 0; i < g.groups.length; i++) {
                this._addGroup(g.groups[i]);
            }
        }
    };
    DataCmp.prototype._findGroup = function (propName) {
        var gd = this.cv.groupDescriptions;
        for (var i = 0; i < gd.length; i++) {
            if (gd[i].propertyName == propName) {
                return i;
            }
        }
        return -1;
    };
    // filtering
    DataCmp.prototype._filterFun = function (item) {
        // check each filter parameter
        var f = this.filter;
        if (f) {
            if ((f.id == 'odd' && item.id % 2 == 0) ||
                (f.id == 'even' && item.id % 2 != 0)) {
                return false;
            }
            if (f.country && item.country.indexOf(f.country) < 0) {
                return false;
            }
            if (f.month != null && item.start.getMonth() != f.month * 1) {
                return false;
            }
            if (f.color && item.color.indexOf(f.color) < 0) {
                return false;
            }
            if (f.minAmount != null && item.amount < f.minAmount * 1) {
                return false;
            }
        }
        // all passed, return true to include the item
        return true;
    };
    DataCmp = __decorate([
        core_1.Component({
            selector: 'grid-data-cmp',
            templateUrl: 'src/components/infra/dataCmp.html'
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], DataCmp);
    return DataCmp;
}(InputBaseCmp_1.InputBaseCmp));
exports.DataCmp = DataCmp;
var routing = router_1.RouterModule.forChild([
    { path: '', component: DataCmp }
]);
var DataModule = (function () {
    function DataModule() {
    }
    DataModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, routing, wijmo_angular2_input_1.WjInputModule],
            declarations: [DataCmp],
        })
    ], DataModule);
    return DataModule;
}());
exports.DataModule = DataModule;
//# sourceMappingURL=DataCmp.js.map