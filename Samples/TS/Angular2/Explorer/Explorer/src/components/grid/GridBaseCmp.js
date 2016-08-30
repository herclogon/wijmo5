'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Base class for all components demonstrating FlexGrid control.
var GridBaseCmp = (function () {
    // DataSvc will be passed by derived classes
    function GridBaseCmp(dataSvc) {
        this._itemCount = 500;
        this._culture = 'en';
        this._dataMaps = true;
        this._formatting = true;
        this._filter = '';
        this._groupBy = '';
        this._pageSize = 0;
        this.dataSvc = dataSvc;
        this._thisFilterFunction = this._filterFunction.bind(this);
        this.data = dataSvc.getData(this.itemCount);
    }
    Object.defineProperty(GridBaseCmp.prototype, "itemCount", {
        get: function () {
            return this._itemCount;
        },
        set: function (value) {
            if (this._itemCount != value) {
                this._itemCount = value;
                this.data = this.dataSvc.getData(this.itemCount);
                this.groupBy = '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridBaseCmp.prototype, "dataMaps", {
        get: function () {
            return this._dataMaps;
        },
        set: function (value) {
            if (this._dataMaps != value) {
                this._dataMaps = value;
                this._updateDataMaps();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridBaseCmp.prototype, "formatting", {
        get: function () {
            return this._formatting;
        },
        set: function (value) {
            if (this._formatting != value) {
                this._formatting = value;
                this._updateFormatting();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridBaseCmp.prototype, "culture", {
        get: function () {
            return this._culture;
        },
        set: function (value) {
            if (this._culture != value) {
                this._culture = value;
                this._loadCultureInfo();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridBaseCmp.prototype, "filter", {
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
    Object.defineProperty(GridBaseCmp.prototype, "groupBy", {
        get: function () {
            return this._groupBy;
        },
        set: function (value) {
            if (this._groupBy != value) {
                this._groupBy = value;
                this._applyGroupBy();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GridBaseCmp.prototype, "pageSize", {
        get: function () {
            return this._pageSize;
        },
        set: function (value) {
            if (this._pageSize != value) {
                this._pageSize = value;
                if (this.flex) {
                    this.flex.collectionView.pageSize = value;
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    GridBaseCmp.prototype.ngAfterViewInit = function () {
        if (this.flex) {
            this.updateDataMapSettings();
        }
    };
    // update data maps, formatting, paging now and when the itemsSource changes
    GridBaseCmp.prototype.itemsSourceChangedHandler = function () {
        var flex = this.flex;
        if (!flex) {
            return;
        }
        // make columns 25% wider (for readability and to show how)
        for (var i = 0; i < flex.columns.length; i++) {
            flex.columns[i].width = flex.columns[i].renderSize * 1.25;
        }
        // update data maps and formatting
        this.updateDataMapSettings();
        // set page size on the grid's internal collectionView
        if (flex.collectionView && this.pageSize) {
            flex.collectionView.pageSize = this.pageSize;
        }
    };
    ;
    GridBaseCmp.prototype.updateDataMapSettings = function () {
        this._updateDataMaps();
        this._updateFormatting();
    };
    GridBaseCmp.prototype.toggleColumnVisibility = function () {
        var flex = this.flex;
        var col = flex.columns[0];
        col.visible = !col.visible;
    };
    ;
    GridBaseCmp.prototype.changeColumnSize = function () {
        var flex = this.flex;
        var col = flex.columns[0];
        col.visible = true;
        col.width = col.width < 0 ? 60 : -1;
        col = flex.rowHeaders.columns[0];
        col.width = col.width < 0 ? 40 : -1;
    };
    ;
    GridBaseCmp.prototype.toggleRowVisibility = function () {
        var flex = this.flex;
        var row = flex.rows[0];
        row.visible = !row.visible;
    };
    ;
    GridBaseCmp.prototype.changeRowSize = function () {
        var flex = this.flex;
        var row = flex.rows[0];
        row.visible = true;
        row.height = row.height < 0 ? 80 : -1;
        row = flex.columnHeaders.rows[0];
        row.height = row.height < 0 ? 80 : -1;
    };
    ;
    GridBaseCmp.prototype.changeDefaultRowSize = function () {
        var flex = this.flex;
        flex.rows.defaultSize = flex.rows.defaultSize == 28 ? 65 : 28;
    };
    ;
    GridBaseCmp.prototype.changeScrollPosition = function () {
        var flex = this.flex;
        if (flex.scrollPosition.y == 0) {
            var sz = flex.scrollSize;
            flex.scrollPosition = new wijmo.Point(-sz.width / 2, -sz.height / 2);
        }
        else {
            flex.scrollPosition = new wijmo.Point(0, 0);
        }
    };
    ;
    // apply/remove data maps
    GridBaseCmp.prototype._updateDataMaps = function () {
        var flex = this.flex;
        if (flex) {
            var colCountry = flex.columns.getColumn('countryId');
            var colProduct = flex.columns.getColumn('productId');
            var colColor = flex.columns.getColumn('colorId');
            if (colCountry && colProduct && colColor) {
                if (this.dataMaps == true) {
                    colCountry.showDropDown = true; // show drop-down for countries
                    colProduct.showDropDown = false; // don't show it for products
                    colColor.showDropDown = false; // or colors (just to show how)
                    colCountry.dataMap = this._buildDataMap(this.dataSvc.getSomeCountries());
                    colProduct.dataMap = this._buildDataMap(this.dataSvc.getProducts());
                    colColor.dataMap = this._buildDataMap(this.dataSvc.getColors());
                }
                else {
                    colCountry.dataMap = null;
                    colProduct.dataMap = null;
                    colColor.dataMap = null;
                }
            }
        }
    };
    // build a data map from a string array using the indices as keys
    GridBaseCmp.prototype._buildDataMap = function (items) {
        var map = [];
        for (var i = 0; i < items.length; i++) {
            map.push({ key: i, value: items[i] });
        }
        return new wijmo.grid.DataMap(map, 'key', 'value');
    };
    // apply/remove column formatting
    GridBaseCmp.prototype._updateFormatting = function () {
        var flex = this.flex;
        if (flex) {
            var fmt = this.formatting;
            this._setColumnFormat('amount', fmt ? 'c' : null);
            this._setColumnFormat('amount2', fmt ? 'c' : null);
            this._setColumnFormat('discount', fmt ? 'p0' : null);
            this._setColumnFormat('start', fmt ? 'MMM d yy' : null);
            this._setColumnFormat('end', fmt ? 'HH:mm' : null);
        }
    };
    GridBaseCmp.prototype._setColumnFormat = function (name, format) {
        var col = this.flex.columns.getColumn(name);
        if (col) {
            col.format = format;
        }
    };
    GridBaseCmp.prototype._loadCultureInfo = function () {
        $.ajax({
            url: 'bin/Devel/sources/cultures/wijmo.culture.' + this.culture + '.js',
            dataType: 'script',
            success: function (data) {
                wijmo.Control.invalidateAll(); // invalidate all controls to show new culture
            },
        });
    };
    // ICollectionView filter function
    GridBaseCmp.prototype._filterFunction = function (item) {
        var f = this.filter;
        if (f && item) {
            // split string into terms to enable multi-field searches such as 'us gadget red'
            var terms = f.toUpperCase().split(' ');
            // look for any term in any string field
            for (var i = 0; i < terms.length; i++) {
                var termFound = false;
                for (var key in item) {
                    var value = item[key];
                    if (wijmo.isString(value) && value.toUpperCase().indexOf(terms[i]) > -1) {
                        termFound = true;
                        break;
                    }
                }
                // fail if any of the terms is not found
                if (!termFound) {
                    return false;
                }
            }
        }
        // include item in view
        return true;
    };
    // apply filter (applied on a 500 ms timeOut)
    GridBaseCmp.prototype._applyFilter = function () {
        if (this._toFilter) {
            clearTimeout(this._toFilter);
        }
        var self = this;
        this._toFilter = setTimeout(function () {
            self._toFilter = null;
            if (self.flex) {
                var cv = self.flex.collectionView;
                if (cv) {
                    if (cv.filter != self._thisFilterFunction) {
                        cv.filter = self._thisFilterFunction;
                    }
                    else {
                        cv.refresh();
                    }
                }
            }
        }, 500);
    };
    GridBaseCmp.prototype._applyGroupBy = function () {
        if (this.flex) {
            // get the collection view, start update
            var cv = this.flex.collectionView;
            cv.beginUpdate();
            // clear existing groups
            cv.groupDescriptions.clear();
            // add new groups
            var groupNames = this.groupBy.split('/'), groupDesc;
            for (var i = 0; i < groupNames.length; i++) {
                var propName = groupNames[i].toLowerCase();
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
        core_1.ViewChild('flex')
    ], GridBaseCmp.prototype, "flex", void 0);
    GridBaseCmp = __decorate([
        core_1.Component({
            selector: '',
            templateUrl: ''
        })
    ], GridBaseCmp);
    return GridBaseCmp;
}());
exports.GridBaseCmp = GridBaseCmp;
//# sourceMappingURL=GridBaseCmp.js.map