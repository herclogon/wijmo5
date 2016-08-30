function sortingVM(data, names) {
    this.collectionView = new wijmo.collections.CollectionView(data);
    this.names = names;

    this.currentSort = ko.observable();
    this.currentSort.subscribe(applySort, this);

    this.sortOrder = ko.observable();
    this.sortOrder.subscribe(applySort, this);

    // perform CollectionView sorting when dropdown value changes
    function applySort(newVal) {
        var currentSort = this.currentSort(),
            sortOrder = this.sortOrder() === 'true',
            cv = this.collectionView;

        if (!currentSort) return;

        cv.sortDescriptions.clear();
        cv.sortDescriptions.push(new wijmo.collections.SortDescription(currentSort, sortOrder));
    }
}