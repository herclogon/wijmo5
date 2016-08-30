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
var FormattedModelAccessor_1 = require('./directives/FormattedModelAccessor');
var NumberInputAccessor_1 = require('./directives/NumberInputAccessor');
var wjNg2Grid = require('wijmo/wijmo.angular2.grid');
var AppTab_1 = require('./components/AppTab');
var appPipes_1 = require('./pipes/appPipes');
var DataSvc_1 = require('./services/DataSvc');
'use strict';
// The application root component.
var AppCmp = (function () {
    function AppCmp(dataSvc) {
        var _this = this;
        this._selectedGroupOpt = '';
        // initialize the collectionview
        this.cvGettingStarted = new wijmo.collections.CollectionView(dataSvc.getData(10));
        this.cvCRM = new wijmo.collections.CollectionView(dataSvc.getData(10));
        this.cvSorting = new wijmo.collections.CollectionView(dataSvc.getData(10));
        this.cvFiltering = new wijmo.collections.CollectionView(dataSvc.getData(10));
        this.cvGrouping = new wijmo.collections.CollectionView(dataSvc.getData(20));
        this.cvEditing = new wijmo.collections.CollectionView(dataSvc.getData(10));
        this.cvPaging = new wijmo.collections.CollectionView(dataSvc.getData(55));
        this.cvTrackingChanges = new wijmo.collections.CollectionView(dataSvc.getData(6));
        this.cvTrackingChangesExtra = new wijmo.collections.CollectionView(dataSvc.getData(6));
        this.fieldNames = dataSvc.getNames();
        this._thisFilterFunction = this._filterFunction.bind(this);
        this.groupItems = this.cvGrouping.items;
        this.currentItem = this.cvEditing.currentItem;
        // update the group list
        this.cvGrouping.collectionChanged.addHandler(function () {
            _this.groupItems = _this.cvGrouping.items;
            if (_this.cvGrouping.groups && _this.cvGrouping.groups.length > 0) {
                _this.groupItems = [];
                for (var i = 0; i < _this.cvGrouping.groups.length; i++) {
                    _this._addGroup(_this.cvGrouping.groups[i]);
                }
            }
        });
        // define the new item value.
        this.cvEditing.newItemCreator = function () {
            var item = dataSvc.getData(1)[0];
            // aggregate the max value of id in the collection.
            item.id = wijmo.getAggregate(wijmo.Aggregate.Max, _this.cvEditing.sourceCollection, 'id') + 1;
            return item;
        };
        // syn the scope currentItem with the collectionview.
        this.cvEditing.currentChanged.addHandler(function () {
            _this.currentItem = _this.cvEditing.currentItem;
        });
        // page settings
        this.cvPaging.pageSize = 10;
        this.cvTrackingChanges.trackChanges = true;
        this.cvTrackingChangesExtra.trackChanges = true;
        // keep the original state of the current item in tracking Changes
        this.current = this.cvTrackingChangesExtra.currentItem ? JSON.stringify(this.cvTrackingChangesExtra.currentItem) : null;
        this.cvTrackingChangesExtra.currentChanged.addHandler(function (s, e) {
            _this.current = s.currentItem ? JSON.stringify(s.currentItem) : null;
        });
        // keep track of the original state of edited items
        var original = [];
        this.cvTrackingChangesExtra.itemsEdited.collectionChanged.addHandler(function (s, e) {
            if (e.action == wijmo.collections.NotifyCollectionChangedAction.Add ||
                e.action == wijmo.collections.NotifyCollectionChangedAction.Change) {
                // check if we have this item's original data
                var index = _this.cvTrackingChangesExtra.sourceCollection.indexOf(e.item);
                var found = -1;
                for (var i = 0; i < original.length && found < 0; i++) {
                    if (original[i].index == index) {
                        found = i;
                    }
                }
                // if we have the item, check original value
                if (found > -1) {
                    // if the current value is the same as the original, remove
                    var valueNow = JSON.stringify(e.item);
                    if (valueNow == original[found].value) {
                        original.splice(found, 1);
                        index = _this.cvTrackingChangesExtra.itemsEdited.indexOf(e.item);
                        _this.cvTrackingChangesExtra.itemsEdited.splice(index, 1);
                    }
                }
                else {
                    found = original.length;
                    original.push({ index: index, value: _this.current });
                }
            }
        });
    }
    Object.defineProperty(AppCmp.prototype, "filter", {
        // filtering
        get: function () {
            return this._filter;
        },
        set: function (value) {
            if (this._filter != value) {
                this._filter = value;
                this._applyFilter();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppCmp.prototype, "selectedGroupOpt", {
        // grouping
        get: function () {
            return this._selectedGroupOpt;
        },
        set: function (value) {
            if (this._selectedGroupOpt != value) {
                this._selectedGroupOpt = value;
                this._applyGrouping();
            }
        },
        enumerable: true,
        configurable: true
    });
    AppCmp.prototype.isGroupItem = function (item) {
        return item instanceof wijmo.collections.CollectionViewGroup;
    };
    ;
    AppCmp.prototype.avgAmount = function (item) {
        // it only works when the item is a group item.
        if (!this.isGroupItem(item)) {
            return;
        }
        // get the average value of group amount values.
        var avg = item.getAggregate(wijmo.Aggregate.Avg, 'amount');
        return wijmo.Globalize.format(avg, '');
    };
    ;
    AppCmp.prototype._addGroup = function (g) {
        this.groupItems.push(g);
        if (g.isBottomLevel) {
            for (var i = 0; i < g.items.length; i++) {
                this.groupItems.push(g.items[i]);
            }
        }
        else {
            for (var i = 0; i < g.groups.length; i++) {
                this._addGroup(g.groups[i]);
            }
        }
    };
    // current record management
    AppCmp.prototype.stopCurrent = function () {
        this.cvCRM.currentChanging.addHandler(this._stopCurrentIn4th);
    };
    ;
    // restore to be able to change current.
    AppCmp.prototype.reset = function () {
        this.cvCRM.currentChanging.removeHandler(this._stopCurrentIn4th);
    };
    ;
    // sorting
    AppCmp.prototype.toggleSort = function (fieldName) {
        // get all the sort descriptions.
        var sd = this.cvSorting.sortDescriptions;
        var ascending = true;
        // try to find whether the field has been sorted.
        if (sd.length > 0 && sd[0].property === fieldName) {
            // if finded, toggle the sort order.
            ascending = !sd[0].ascending;
        }
        // create a new SortDescription object.
        var sdNew = new wijmo.collections.SortDescription(fieldName, ascending);
        // remove any old sort descriptors and add the created one.
        sd.splice(0, sd.length, sdNew);
    };
    ;
    // get the sort label
    AppCmp.prototype.getSort = function (propName) {
        var sd = this.cvSorting.sortDescriptions;
        if (sd.length > 0 && sd[0].property === propName) {
            return sd[0].ascending ? '▲' : '▼';
        }
        return '';
    };
    ;
    // editing
    AppCmp.prototype.confirmUpdate = function () {
        // commit editing/adding
        this.cvEditing.commitEdit();
        this.cvEditing.commitNew();
    };
    ;
    AppCmp.prototype.cancelUpdate = function () {
        // cancel editing or adding
        this.cvEditing.cancelEdit();
        this.cvEditing.cancelNew();
    };
    ;
    // apply filter (applied on a 500 ms timeOut)
    AppCmp.prototype._applyFilter = function () {
        var _this = this;
        if (this._toFilter) {
            clearTimeout(this._toFilter);
        }
        //var self = this;
        this._toFilter = setTimeout(function () {
            _this._toFilter = null;
            if (_this.cvFiltering) {
                var cv = _this.cvFiltering;
                if (cv) {
                    if (cv.filter != _this._thisFilterFunction) {
                        cv.filter = _this._thisFilterFunction;
                    }
                    else {
                        cv.refresh();
                    }
                }
            }
        }, 500);
    };
    // ICollectionView filter function
    AppCmp.prototype._filterFunction = function (item) {
        var filter = this.filter.toLowerCase();
        if (!filter) {
            return true;
        }
        return item['country'].toLowerCase().indexOf(filter) > -1;
    };
    // forbid changing current when the current item is the 4th one.
    AppCmp.prototype._stopCurrentIn4th = function (sender, e) {
        // when the current is the 4rd item, stop moving.
        if (sender.currentPosition === 3) {
            e.cancel = true;
        }
    };
    AppCmp.prototype._applyGrouping = function () {
        var gd, fieldName = this.selectedGroupOpt;
        gd = this.cvGrouping.groupDescriptions;
        if (!fieldName) {
            // clear all the group settings.
            gd.splice(0, gd.length);
            return;
        }
        if (this._findGroup(fieldName) >= 0) {
            return;
        }
        if (fieldName == 'amount') {
            // when grouping by amount, use ranges instead of specific values
            gd.push(new wijmo.collections.PropertyGroupDescription(fieldName, function (item, propName) {
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
            gd.push(new wijmo.collections.PropertyGroupDescription(fieldName));
        }
    };
    // check whether the group with the specified property name already exists.
    AppCmp.prototype._findGroup = function (propName) {
        var gd = this.cvGrouping.groupDescriptions;
        for (var i = 0; i < gd.length; i++) {
            if (gd[i].propertyName === propName) {
                return i;
            }
        }
        return -1;
    };
    AppCmp = __decorate([
        core_1.Component({
            selector: 'app-cmp',
            templateUrl: 'src/app.html',
            directives: [common_1.CORE_DIRECTIVES, FormattedModelAccessor_1.FormattedModelAccessor, NumberInputAccessor_1.NumberInputAccessor, AppTab_1.AppTab, AppTab_1.AppTabPane, wjNg2Grid.WjFlexGrid, wjNg2Grid.WjFlexGridColumn],
            pipes: [appPipes_1.GlobalizePipe]
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