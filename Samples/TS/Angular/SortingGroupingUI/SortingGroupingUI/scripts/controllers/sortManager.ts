/**
 * Class used as a controller for the sortDescriptions collection of a 
 * Wijmo 5 CollectionView class.
 */
class SortManager {
    _view: wijmo.collections.ICollectionView; // the ICollectionView being controlled
    _props: string[]; // the properties available to sort on
    _sorts: wijmo.collections.CollectionView; // the sortDescriptions being edited

    /**
     * Sets the CollectionView being managed by this SortManager.
     *
     * @param view The CollectionView to be managed by this SortManager.
     * @param properties List of property names to expose for sorting.
     */
    setView(view: wijmo.collections.CollectionView, properties?: string[]) {

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
            var sd = <wijmo.collections.SortDescription>this._view.sortDescriptions[i];
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
    }

    /**
     * Commits the current sort descriptions to the original CollectionView.
     */
    commit(save: boolean) {

        // make sure there aren't any grids in edit mode
        var arr = document.querySelectorAll('.wj-flexgrid');
        for (var i = 0; i < arr.length; i++) {
            var flex = <wijmo.grid.FlexGrid>wijmo.Control.getControl(arr[i]);
            flex.finishEditing();
        }

        // save changes
        if (save) {
            this._view.deferUpdate(() => {

                // remove current sorts
                this._view.sortDescriptions.clear();

                // add edited sorts
                var arr = this._sorts.sourceCollection;
                for (var i = 0; i < arr.length; i++) {
                    if (this.properties.indexOf(arr[i].property) > -1 && wijmo.isBoolean(arr[i].ascending)) {
                        var sd = new wijmo.collections.SortDescription(arr[i].property, arr[i].ascending);
                        this._view.sortDescriptions.push(sd);
                    }
                }
            });
        }
    }

    /**
     * Gets a string describing problems with the current sort descriptions.
     */
    getError(): string {
        if (this._sorts) {
            var arr = this._sorts.sourceCollection,
                used = [];
            for (var i = 0; i < arr.length; i++) {
                var prop = arr[i].property;
                if (!prop) return 'Missing property name';
                if (this.properties.indexOf(prop) < 0) return 'Invalid property: "' + prop + '"';
                if (used.indexOf(prop) > -1) return 'Duplicate property: "' + prop + '"';
                if (!wijmo.isBoolean(arr[i].ascending)) return 'Order not specified: "' + prop + '"';
                used.push(prop);
            }
        }
        return null;
    }

    /**
     * Adds a blank sorting level to the sort descriptions.
     */
    addLevel() {
        var item = this._sorts.addNew();
        item.ascending = true;
        this._sorts.commitNew();
    }

    /**
     * Removes the current sorting level from the sort descriptions.
     */
    removeLevel() {
        var item = this._sorts.currentItem;
        if (item) {
            this._sorts.remove(item);
        }
    }

    /**
     * Adds a copy of the current sorting level to the sort descriptions.
     */
    copyLevel() {
        var item = this._sorts.currentItem;
        if (item) {
            var newItem = this._sorts.addNew();
            for (var k in item) {
                newItem[k] = item[k];
            }
            this._sorts.commitNew();
        }
    }

    /**
     * Moves the current sorting level to a new position.
     *
     * @param offset The offset to move the current level by.
     */
    moveLevel(offset: number) {
        var item = this._sorts.currentItem;
        if (item) {
            var arr = this._sorts.sourceCollection,
                index = arr.indexOf(item),
                newIndex = index + offset;
            if (index > -1 && newIndex > -1) {
                arr.splice(index, 1);
                arr.splice(newIndex, 0, item);
                this._sorts.refresh();
                this._sorts.moveCurrentTo(item);
            }
        }
    }

    /**
     * Gets a list of the property names available for sorting by.
     */
    get properties(): string[]{
        return this._props;
    }

    /**
     * Gets a CollectionView with the current sort descriptions.
     */
    get sortDescriptions(): wijmo.collections.ICollectionView {
        return this._sorts;
    }
}