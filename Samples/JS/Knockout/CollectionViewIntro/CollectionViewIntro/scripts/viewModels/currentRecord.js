function currentRecordVM(data) {
    this.collectionView = new wijmo.collections.CollectionView(data);

    this.addStopping = function () {
        this.collectionView.currentChanging.addHandler(stoppingHandler);
    };

    this.clearStopping = function () {
        this.collectionView.currentChanging.removeHandler(stoppingHandler);
    };

    function stoppingHandler(sender, args) {
        if (sender.currentPosition === 3) {
            args.cancel = true;
        }
    }
}