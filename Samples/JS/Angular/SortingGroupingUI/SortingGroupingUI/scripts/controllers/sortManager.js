/**
* Class used as a controller for the sortDescriptions collection of a
* Wijmo 5 CollectionView class.
*/
var SortManager = (function () {
    function SortManager() {
    }
    /**
     * Sets the CollectionView being managed by this SortManager.
     *
     * @param view The CollectionView to be managed by this SortManager.
     * @param properties List of property names to expose for sorting.
     */
    SortManager.prototype.setView = function (view, properties) {
        // save view
        this._view = wijmo.asCollectionView(view);
        // get properties that can be sorted on
        if (!properties && view.sourceCollection.length) {
            var item = view.sourceCollection[0];
            properties = [];
            for (var k in item) {
                properties.push(k);
            }
        }
        this._props = properties.sort();
        // build list of sortDescriptions
        var sorts = [];
        for (var i = 0; i < this._view.sortDescriptions.length; i++) {
            var sd = this._view.sortDescriptions[i];
            sorts.push({
                property: sd.property,
                ascending: sd.ascending
            });
        }
        this._sorts = new wijmo.collections.CollectionView(sorts);
        // add a blank level if we have none
        if (!sorts.length) {
            this.addLevel();
        }
        // invalidate all Wijmo controls in case they just became visible.
        setTimeout(function () {
            wijmo.Control.invalidateAll();
        }, 500);
    };
    /**
     * Commits the current sort descriptions to the original CollectionView.
     */
    SortManager.prototype.commit = function (save) {
        var _this = this;
        // make sure there aren't any grids in edit mode
        var arr = document.querySelectorAll('.wj-flexgrid');
        for (var i = 0; i < arr.length; i++) {
            var flex = wijmo.Control.getControl(arr[i]);
            flex.finishEditing();
        }
        // save changes
        if (save) {
            this._view.deferUpdate(function () {
                // remove current sorts
                _this._view.sortDescriptions.clear();
                // add edited sorts
                var arr = _this._sorts.sourceCollection;
                for (var i = 0; i < arr.length; i++) {
                    if (_this.properties.indexOf(arr[i].property) > -1 && wijmo.isBoolean(arr[i].ascending)) {
                        var sd = new wijmo.collections.SortDescription(arr[i].property, arr[i].ascending);
                        _this._view.sortDescriptions.push(sd);
                    }
                }
            });
        }
    };
    /**
     * Gets a string describing problems with the current sort descriptions.
     */
    SortManager.prototype.getError = function () {
        if (this._sorts) {
            var arr = this._sorts.sourceCollection, used = [];
            for (var i = 0; i < arr.length; i++) {
                var prop = arr[i].property;
                if (!prop)
                    return 'Missing property name';
                if (this.properties.indexOf(prop) < 0)
                    return 'Invalid property: "' + prop + '"';
                if (used.indexOf(prop) > -1)
                    return 'Duplicate property: "' + prop + '"';
                if (!wijmo.isBoolean(arr[i].ascending))
                    return 'Order not specified: "' + prop + '"';
                used.push(prop);
            }
        }
        return null;
    };
    /**
     * Adds a blank sorting level to the sort descriptions.
     */
    SortManager.prototype.addLevel = function () {
        var item = this._sorts.addNew();
        item.ascending = true;
        this._sorts.commitNew();
    };
    /**
     * Removes the current sorting level from the sort descriptions.
     */
    SortManager.prototype.removeLevel = function () {
        var item = this._sorts.currentItem;
        if (item) {
            this._sorts.remove(item);
        }
    };
    /**
     * Adds a copy of the current sorting level to the sort descriptions.
     */
    SortManager.prototype.copyLevel = function () {
        var item = this._sorts.currentItem;
        if (item) {
            var newItem = this._sorts.addNew();
            for (var k in item) {
                newItem[k] = item[k];
            }
            this._sorts.commitNew();
        }
    };
    /**
     * Moves the current sorting level to a new position.
     *
     * @param offset The offset to move the current level by.
     */
    SortManager.prototype.moveLevel = function (offset) {
        var item = this._sorts.currentItem;
        if (item) {
            var arr = this._sorts.sourceCollection, index = arr.indexOf(item), newIndex = index + offset;
            if (index > -1 && newIndex > -1) {
                arr.splice(index, 1);
                arr.splice(newIndex, 0, item);
                this._sorts.refresh();
                this._sorts.moveCurrentTo(item);
            }
        }
    };
    Object.defineProperty(SortManager.prototype, "properties", {
        /**
         * Gets a list of the property names available for sorting by.
         */
        get: function () {
            return this._props;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SortManager.prototype, "sortDescriptions", {
        /**
         * Gets a CollectionView with the current sort descriptions.
         */
        get: function () {
            return this._sorts;
        },
        enumerable: true,
        configurable: true
    });
    return SortManager;
}());
//# sourceMappingURL=sortManager.js.map