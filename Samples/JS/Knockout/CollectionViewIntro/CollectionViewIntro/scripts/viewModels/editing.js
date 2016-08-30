function editingVM(data) {
    var collectionView = new wijmo.collections.CollectionView(data);
    collectionView.newItemCreator = function () {
        // return object with an ID property
        return {
            id: wijmo.getAggregate(wijmo.Aggregate.Max, collectionView.sourceCollection, 'id') + 1
        };
    };

    this.collectionView = ko.observable(collectionView);
    this.currentItem = ko.computed(function () {
        return this.collectionView().currentItem;
    }, this);

    this.addItem = function () {
        collectionView.addNew();
    };

    // commit CollectionView's changes
    this.commitUpdate = function () {
        collectionView.commitEdit();
        collectionView.commitNew();
        collectionView.refresh();
    };

    // cancel CollectionView's changes
    this.cancelUpdate = function () {
        collectionView.cancelEdit();
        collectionView.cancelNew();
        collectionView.refresh();
    };

    collectionView.collectionChanged.addHandler(notifyChange.bind(this));
    collectionView.currentChanged.addHandler(notifyChange.bind(this));
    function notifyChange() {
        this.collectionView.valueHasMutated();
    }
}