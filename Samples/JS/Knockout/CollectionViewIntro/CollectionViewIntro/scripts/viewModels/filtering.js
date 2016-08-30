function filteringVM(data) {
    this.collectionView = new wijmo.collections.CollectionView(data);
    this.collectionView.filter = filterFn.bind(this);

    this.filterText = ko.observable('');
    this.filterText.subscribe(function (newVal) {
        this.collectionView.refresh();
    }, this);

    // function used to filter the CollectionView
    function filterFn(dataItem) {
        if (!this.hasOwnProperty('filterText')) return true;

        var filterText = this.filterText().toLowerCase();
        return !filterText || dataItem.country.toLowerCase().indexOf(filterText) > -1;
    }
}