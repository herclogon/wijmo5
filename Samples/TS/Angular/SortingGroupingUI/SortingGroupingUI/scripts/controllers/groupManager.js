/**
* Class used as a controller for the groupDescriptions collection of a
* Wijmo 5 CollectionView class.
*/
var GroupManager = (function () {
    function GroupManager() {
    }
    /**
     * Sets the CollectionView being managed by this GroupManager.
     *
     * @param view The CollectionView to be managed by this GroupManager.
     * @param properties List of property names to expose for grouping by.
     */
    GroupManager.prototype.setView = function (view, properties) {
        // save view
        this._view = wijmo.asCollectionView(view);
        // get properties that can be grouped on
        if (!properties && view.sourceCollection.length) {
            var item = view.sourceCollection[0];
            properties = [];
            for (var k in item) {
                properties.push(k);
            }
        }
        this._props = properties.sort();
        // build list of groupDescriptions
        var groups = [];
        for (var i = 0; i < this._view.groupDescriptions.length; i++) {
            var gd = wijmo.asType(this._view.groupDescriptions[i], wijmo.collections.PropertyGroupDescription);
            if (gd) {
                groups.push({
                    propertyName: gd.propertyName,
                });
            }
        }
        this._groups = new wijmo.collections.CollectionView(groups);
        // add a blank group if we have none
        if (!groups.length) {
            this.addGroup();
        }
        // invalidate all Wijmo controls in case they just became visible.
        setTimeout(function () {
            wijmo.Control.invalidateAll();
        }, 500);
    };
    /**
     * Commits the current group descriptions to the original CollectionView.
     */
    GroupManager.prototype.commit = function (save) {
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
                // remove current groups
                _this._view.groupDescriptions.clear();
                // add edited groups
                var arr = _this._groups.sourceCollection;
                for (var i = 0; i < arr.length; i++) {
                    if (_this.properties.indexOf(arr[i].propertyName) > -1) {
                        var gd = new wijmo.collections.PropertyGroupDescription(arr[i].propertyName);
                        _this._view.groupDescriptions.push(gd);
                    }
                }
            });
        }
    };
    /**
     * Gets a string describing problems with the current group descriptions.
     */
    GroupManager.prototype.getError = function () {
        if (this._groups) {
            var arr = this._groups.sourceCollection, used = [];
            for (var i = 0; i < arr.length; i++) {
                var prop = arr[i].propertyName;
                if (!prop)
                    return 'Missing property name';
                if (this.properties.indexOf(prop) < 0)
                    return 'Invalid property: "' + prop + '"';
                if (used.indexOf(prop) > -1)
                    return 'Duplicate property: "' + prop + '"';
                used.push(prop);
            }
        }
        return null;
    };
    /**
     * Adds a blank grouping level to the group descriptions.
     */
    GroupManager.prototype.addGroup = function () {
        var item = this._groups.addNew();
        this._groups.commitNew();
    };
    /**
     * Removes the current group from the group descriptions.
     */
    GroupManager.prototype.removeGroup = function () {
        var item = this._groups.currentItem;
        if (item) {
            this._groups.remove(item);
        }
    };
    /**
     * Adds a copy of the current group to the group descriptions.
     */
    GroupManager.prototype.copyGroup = function () {
        var item = this._groups.currentItem;
        if (item) {
            var newItem = this._groups.addNew();
            for (var k in item) {
                newItem[k] = item[k];
            }
            this._groups.commitNew();
        }
    };
    /**
     * Moves the current group to a new position.
     *
     * @param offset The offset to move the current group by.
     */
    GroupManager.prototype.moveGroup = function (offset) {
        var item = this._groups.currentItem;
        if (item) {
            var arr = this._groups.sourceCollection, index = arr.indexOf(item), newIndex = index + offset;
            if (index > -1 && newIndex > -1) {
                arr.splice(index, 1);
                arr.splice(newIndex, 0, item);
                this._groups.refresh();
                this._groups.moveCurrentTo(item);
            }
        }
    };
    Object.defineProperty(GroupManager.prototype, "properties", {
        /**
         * Gets a list of the property names available for grouping by.
         */
        get: function () {
            return this._props;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GroupManager.prototype, "groupDescriptions", {
        /**
         * Gets a CollectionView with the current group descriptions.
         */
        get: function () {
            return this._groups;
        },
        enumerable: true,
        configurable: true
    });
    return GroupManager;
}());
//# sourceMappingURL=groupManager.js.map