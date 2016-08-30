function groupingVM(data, names) {
    this.collectionView = new wijmo.collections.CollectionView(data);
    this.names = names;
    this.currentGroup = ko.observable();
    this.currentGroup.subscribe(function (newVal) {
        var currentGroup = newVal,
            cv = this.collectionView;

        // clear groups when the "placeholder" is selected
        if (!currentGroup) {
            cv.groupDescriptions.clear();
            return;
        }

        // prevent double grouping
        var exists = cv.groupDescriptions.some(function (item) {
            return item.propertyName === currentGroup;
        });
        if (exists) return;

        // perform grouping
        cv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription(currentGroup));
    }, this);
}
