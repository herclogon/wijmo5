'use strict';

// declare app module
var app = angular.module('app');

// controller
app.controller('appCtrl', function ($scope) {

    // create the filter and expose it to scope for customization
    $scope.initialized = function (s, e) {
        var flex = s;
        $scope.filter = new wijmo.grid.filter.FlexGridFilter(flex);
        $scope.downloadsColumnFilterType = wijmo.grid.filter.FilterType.Condition;
        $scope.$apply();
        $scope.filter.filterChanging.addHandler(function () {
            console.log('filter changing');
        });
        $scope.filter.filterChanged.addHandler(function () {
            console.log('filter changed');
        });
        $scope.filter.filterApplied.addHandler(function () {
            console.log('filter applied');
        });
    }

    // persist filter definition
    $scope.saveFilter = function () {
        localStorage['filter'] = $scope.filter.filterDefinition;
    }
    $scope.restoreFilter = function () {
        $scope.filter.filterDefinition = localStorage['filter'];
    }

    // update filter type for "downloads" column
    $scope.$watch('downloadsColumnFilterType', function () {
        var f = $scope.filter;
        if (f) {
            var col = f.grid.columns.getColumn('downloads'),
                cf = f.getColumnFilter(col, true);
            cf.filterType = $scope.downloadsColumnFilterType;
        }
    });

    // filters are localizable
    $scope.culture = 'en';
    $scope.$watch('culture', function () {

        // remove old localization reference
        var loc = document.getElementById('loc');
        if (loc) {
            document.head.removeChild(loc);
        }

        // add new localization reference
        loc = document.createElement('script');
        loc.id = 'loc';
        loc.type = 'text/javascript';
        loc.async = false;
        loc.src = 'scripts/vendor/wijmo.culture.' + $scope.culture + '.js';
        document.getElementsByTagName('head')[0].appendChild(loc);

        // show changes
        invalidateAll();
    });

    // invalidate all Wijmo controls
    // using a separate function to handle strange IE9 scope issues
    function invalidateAll() {
        wijmo.Control.invalidateAll();
    }

    // create some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < 1000; i++) {
        data.push({
            id: i,
            date: new Date(2015, i % 12, (i + 1) % 25),
            time: new Date(2015, i % 12, (i + 1) % 25, i % 24, i % 60, i % 60),
            country: countries[i % countries.length],
            countryMapped: i % countries.length,
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000,
            checked: i % 9 == 0
        });
    }
    $scope.data = new wijmo.collections.CollectionView(data);

    // notify scope when collectionView changes
    $scope.data.collectionChanged.addHandler(function () {
        if (!$scope.$root.$$phase) {
            $scope.$apply();
        }
    });

    // expose countries, country map
    $scope.countries = countries;
    var countryMap = [
        { name: 'US', key: 0 },
        { name: 'Germany', key: 1 },
        { name: 'Japan', key: 2 },
        { name: 'Italy', key: 3 },
        { name: 'Greece', key: 4 },
        { name: 'Spain', key: 5 },
        { name: 'Chile', key: 6 },
        { name: 'China', key: 7 },
        { name: 'Canada', key: 8 },
        { name: 'Astralia', key: 9 },
        { name: 'Austria', key: 10 }
    ];
    $scope.countryMap = new wijmo.grid.DataMap(new wijmo.collections.CollectionView(countryMap), 'key', 'name');

});