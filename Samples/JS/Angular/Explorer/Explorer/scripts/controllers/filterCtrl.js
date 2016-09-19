'use strict';

var app = angular.module('app');

// filter controller
app.controller('filterCtrl', function appCtrl($scope, dataSvc) {
    $scope.ctx = {
        filter: null,
        data: dataSvc.getData(500),
        revenueColumnFilterType: 1
    };

    // create the filter and expose it to scope for customization
    $scope.initialized = function (s, e) {
        if ($scope.ctx.filter) {
            $scope.ctx.filter.filterChanging.addHandler(function () {
                console.log('filter changing');
            });
            $scope.ctx.filter.filterChanged.addHandler(function () {
                console.log('filter changed');
            });
            $scope.ctx.filter.filterApplied.addHandler(function () {
                console.log('filter applied');
            });
            setFilterType();
        }
    }

    // update the filter type
    $scope.$watch('ctx.revenueColumnFilterType', function () {
        setFilterType();
    })

    // update the filter type for the 'amount' column
    function setFilterType() {
        var f = $scope.ctx.filter;
        if (f) {
            var col = f.grid.columns.getColumn('amount'),
                cf = f.getColumnFilter(col, true);
            cf.filterType = $scope.ctx.revenueColumnFilterType;
        }
    }

});
