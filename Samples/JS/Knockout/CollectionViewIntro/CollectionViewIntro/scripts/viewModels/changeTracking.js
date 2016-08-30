function changeTrackingVM(data) {
    var collectionView = new wijmo.collections.CollectionView(data);
    collectionView.trackChanges = true;

    this.collectionView = collectionView;
}