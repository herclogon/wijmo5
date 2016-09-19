// get application
var app = angular.module('app');

// add controller
app.controller('appCtrl', function appCtrl($scope) {

    // expose some data
    $scope.data = getData(100);

    // show column picker for the grid
    $scope.pickColumns = function () {

        // create column picker (once)
        if (!$scope.picker) {
            $scope.picker = new wijmo.grid.ColumnPicker('#columnPicker');
        }

        // show column picker in a dialog
        $scope.picker.grid = $scope.flex;
        $scope.dlgColumns.show(true, function (s) {
            var dr = s.dialogResult;
            if (dr && dr.indexOf('apply') > -1) {
                $scope.picker.save();
            }
        });
    }

    // some random data
    function getData(count) {
        var data = [],
            countries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'],
            products = ['Widget', 'Gadget', 'Doohickey'],
            colors = ['Black', 'White', 'Red', 'Green', 'Blue'],
            dt = new Date();
        for (var i = 0; i < count; i++) {
            var date = new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                countryId = Math.floor(Math.random() * countries.length),
                productId = Math.floor(Math.random() * products.length),
                colorId = Math.floor(Math.random() * colors.length);
            var item = {
                id: i,
                start: date,
                end: date,
                country: countries[countryId],
                product: products[productId],
                color: colors[colorId],
                countryId: countryId,
                productId: productId,
                colorId: colorId,
                amount: Math.random() * 10000 - 5000,
                amount2: Math.random() * 10000 - 5000,
                discount: Math.random() / 4,
                active: i % 4 == 0,
            };
            data.push(item);
        }
        return data;
    }
});
