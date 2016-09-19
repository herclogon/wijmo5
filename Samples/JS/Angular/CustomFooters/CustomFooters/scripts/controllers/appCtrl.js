// get application
var app = angular.module('app');

// add controller
app.controller('appCtrl', function appCtrl($scope) {

    // expose some data
    $scope.data = new wijmo.collections.CollectionView(getData(10));

    // group by
    $scope.groupBy = function (groupBy) {
        $scope.data.groupDescriptions.clear();
        var groups = groupBy ? groupBy.split(','): [];
        for (var i = 0; i < groups.length; i++) {
            $scope.data.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription(groups[i]));
        }
    }

    // add a footer row to the grid
    $scope.initGrid = function (s, e) {

        // create a GroupRow to show aggregates automatically
        var row = new wijmo.grid.GroupRow();

        // add the new GroupRow to the grid's 'columnFooters' panel
        s.columnFooters.rows.push(row);

        // add a sigma to the header to show that this is a summary row
        s.bottomLeftCells.setCellData(0, 0, '\u03A3');
    }

    // some random data
    function getData(count) {
        var data = [],
            countries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'],
            products = ['Widget', 'Gadget', 'Doohickey'],
            colors = ['Black', 'White', 'Red', 'Green', 'Blue'],
            dt = new Date();
        for (var i = 0; i < count; i++) {
            var item = {
                id: i,
                date: new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                country: countries[Math.floor(Math.random() * countries.length)],
                product: products[Math.floor(Math.random() * products.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                sales: Math.random() * 10000 + 5000,
                expenses: Math.random() * 1000 + 500,
                discount: Math.random() / 4,
                active: i % 4 == 0,
            };
            data.push(item);
        }
        return data;
    }
});
