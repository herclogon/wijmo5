// get application
var app = angular.module('app');

// add controller
app.controller('appCtrl', function appCtrl($scope) {

    // expose some data
    var data = getData(10000);
    $scope.data = new wijmo.collections.CollectionView(data);

    // build list of columns available
    var item = data[0],
        fields = new wijmo.collections.ObservableArray();
    for (var key in item) {
        fields.push(key);
    }
    $scope.columnsAvailable = new wijmo.collections.CollectionView(fields);

    // build list of columns currently in use (initialize with first three)
    $scope.columns = new wijmo.collections.CollectionView();
    for (var i = 0; i < 3; i++) {
        $scope.columnsAvailable.moveCurrentToFirst();
        addColumn();
    }

    // expose scope methods
    $scope.addColumn = addColumn;
    $scope.removeColumn = removeColumn;
    $scope.moveColumn = moveColumn;

    // move item from columnsAvailable to columns
    function addColumn() {
        var item = $scope.columnsAvailable.currentItem,
            index = $scope.columns.currentPosition;
        if (item) {
            $scope.columnsAvailable.remove(item);
            $scope.columns.sourceCollection.splice(Math.max(0, index), 0, item);
            $scope.columns.moveCurrentTo(item);
        }
    }

    // move item from columns to columnsAvailable
    function removeColumn() {
        var item = $scope.columns.currentItem,
            index = $scope.columnsAvailable.currentPosition;
        if (item) {
            $scope.columns.remove(item);
            $scope.columnsAvailable.sourceCollection.splice(Math.max(0, index), 0, item);
            $scope.columnsAvailable.moveCurrentTo(item);
        }
    }

    // move a column within the columns collection
    function moveColumn(offset) {
        var item = $scope.columns.currentItem;
        if (item) {
            var arr = $scope.columns.sourceCollection,
                index = arr.indexOf(item),
                newIndex = index + offset;
            if (index > -1 && newIndex > -1) {
                arr.splice(index, 1);
                arr.splice(newIndex, 0, item);
                $scope.columns.moveCurrentTo(item);
            }
        }
    }

    // update columns array if the user moves a column
    // (the ng-repeat directive cannot do this)
    $scope.draggedColumn = function (s, e) {
        var columns = new wijmo.collections.ObservableArray();
        for (var i = 0; i < s.columns.length; i++) {
            columns.push(s.columns[i].binding);
        }
        $scope.columns.sourceCollection = columns;
    }

    // some random data
    function getData(count) {
        var data = [],
            countries = 'US,Germany,UK,Japan,Italy,Greece,Spain,Canada,Australia,China,Austria'.split(','),
            products = 'Widget,Gadget,Doohickey'.split(','),
            colors = 'Black,White,Red,Green,Blue'.split(','),
            dt = new Date();
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                date: new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                country: countries[Math.floor(Math.random() * countries.length)],
                product: products[Math.floor(Math.random() * products.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                amount: Math.random() * 10000 - 5000,
                discount: Math.random() / 4,
                active: i % 4 == 0,
            });
        }
        return data;
    }
});
