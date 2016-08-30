function pagingVM(data) {
    var collectionView = new wijmo.collections.CollectionView(data);
    collectionView.pageSize = 10;

    this.collectionView = ko.observable(collectionView);

    // computed property to help get/set the CollectionView's pageSize property
    this.pageSize = ko.computed({
        read: function () {
            return this.collectionView().pageSize;
        },
        write: function (newVal) {
            this.collectionView().pageSize = Math.abs(parseInt(newVal)) || 0;
        }
    }, this);

    // determine if previous/first page buttons should be disabled/enabled
    this.isBeginning = ko.computed(function () {
        return this.collectionView().pageIndex === 0;
    }, this);

    // determine if next/last page buttons should be disabled/enabled
    this.isEnd = ko.computed(function () {
        return (this.collectionView().pageIndex + 1) === this.collectionView().pageCount;
    }, this);

    collectionView.collectionChanged.addHandler(notifyChange.bind(this));
    collectionView.currentChanged.addHandler(notifyChange.bind(this));
    collectionView.pageChanged.addHandler(notifyChange.bind(this));
    function notifyChange() {
        this.collectionView.valueHasMutated();
    }
}