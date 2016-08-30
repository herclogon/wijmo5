(function () {

    // create collectionview, grid
    var cvGettingStarted = new wijmo.collections.CollectionView(getData(10)),
        gsGrid = new wijmo.grid.FlexGrid('#gsGrid', {
            itemsSource: cvGettingStarted
        });
})();