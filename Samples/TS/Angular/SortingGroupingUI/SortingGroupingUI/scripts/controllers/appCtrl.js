// get application
var app = angular.module('app');

// add controller
app.controller('appCtrl', function appCtrl($scope) {

    // create sort and group managers
    $scope.sortManager = new SortManager();
    $scope.groupManager = new GroupManager();
    $scope.properties = 'country,color,product,active'.split(',');

    // expose some data
    $scope.countries = 'US,Germany,UK,Japan,Italy,Greece,Spain,Canada,Australia,China,Austria'.split(',');
    $scope.products = 'Widget,Gadget,Doohickey'.split(',');
    $scope.colors = 'Black,White,Red,Green,Blue'.split(',');
    $scope.view = new wijmo.collections.CollectionView(getData(100));

    // some random data
    function getData(count) {
        var data = [],
            countries = $scope.countries,
            products = $scope.products,
            colors = $scope.colors,
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
