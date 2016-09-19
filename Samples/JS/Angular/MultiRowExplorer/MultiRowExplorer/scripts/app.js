var app = angular.module('app', ['wj', 'ngRoute']);

// root controller
app.controller('appCtrl', function appCtrl($scope) {
    // when the culture changes, load the new culture, apply, and invalidate
    $scope.$watch('culture', function () {
        $.ajax({
            url: 'scripts/vendor/wijmo.culture.' + $scope.culture + '.js',
            dataType: 'script',
            success: function (data) {
                // culture applied, now load translations
                $.ajax({
                    url: 'translations/fields.' + $scope.culture + '.js',
                    dataType: 'json',
                    async: false,
                    success: function (data) {
                        $scope.fields = data;
                        // show changes
                        $scope.$apply();
                    }
                });
            }
        });
    });

    // build a data map from a string array using the indices as keys
    $scope.buildDataMap = function (items) {
        var map = [];
        for (var i = 0; i < items.length; i++) {
            map.push({ key: i, value: items[i] });
        }
        return new wijmo.grid.DataMap(map, 'key', 'value');
    }
});

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
		.when('/transferSlip', { templateUrl: 'views/transferSlip.htm', controller: 'transferSlipCtrl' })
        .when('/ordersSlip', { templateUrl: 'views/ordersSlip.htm', controller: 'ordersSlipCtrl' })
        .when('/orderDetail', { templateUrl: 'views/orderDetail.htm', controller: 'orderDetailCtrl' })
        .when('/purchaseSlip', { templateUrl: 'views/purchaseSlip.htm', controller: 'purchaseSlipCtrl' })
        .when('/orderManagement', { templateUrl: 'views/orderManagement.htm', controller: 'orderManagementCtrl' })
        .when('/salesSlip', { templateUrl: 'views/salesSlip.htm', controller: 'salesSlipCtrl' })
		// default...
		.when('/', { templateUrl: 'views/transferSlip.htm', controller: 'transferSlipCtrl' })
		.otherwise({ redirectTo: '/' });
}]);