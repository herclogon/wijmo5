'use strict';
angular.module('app')

.controller('appCtrl', function ($scope, $location, $http, $sce, $routeParams, SamplesService) {

    // filters
    $scope.frameworks = [];
    $scope.q = $location.search().q; // search box query value
    $scope.routeParams = $routeParams;

    // ngUrlBind($scope, 'searchText'); this lib sucks

    // mainView Data Structure
    $scope.collection = {
        cv: null,
        loading: false,
        ready: false,
        error: false,
        errorMessage: ''
    };

    // returns an array with the names of the selected categories
    function selectedFrameworks() {
        var ret = [];
        $scope.frameworks.map(function(fw) {
            if (fw.show) {
                ret.push(fw.name);
            }
        });
        return ret;
    }

    function preventNull(item, instead) {
        return item == null ? instead : item;
    }

    // returns a string with all the category names of the passed sample concatenated
    function getAllCategories(item) {
        var all = '';
        item.implementations.forEach(function (i) {
            all += i.Category;
        });
        return all;
    }

    // wijmo filter function
    //  by checked frameworks matching sample's category
    //  and by search terms in text input matched directly to sample's name, title or description (case insensitive) and category
    function filterSamples(item) {
        if (item.implementations.some(function(imp) {
            return selectedFrameworks().indexOf(imp.Category) >= 0 ? true : false;
        })) {
            // some implementation is in a selected framework
            if ($scope.q) {

                // gotta search text too
                if (preventNull(item.Name, '').toLowerCase().indexOf($scope.q.toLowerCase()) >= 0 ||
                    preventNull(item.Title, '').toLowerCase().indexOf($scope.q.toLowerCase()) >= 0 ||
                    preventNull(item.Description, '').toLowerCase().indexOf($scope.q.toLowerCase()) >= 0 ||
                    preventNull(getAllCategories(item), '').toLowerCase().indexOf($scope.q.toLowerCase()) >= 0)
                {
                    return true;
                } else {
                    return false; // no textual match
                }
            } else {
                return true; // search box empty
            }
        }
        return false;
    }

    // ng-change callback from any of the filtering inputs
    //  refreshes the collection using filterSamples
    $scope.updateFilters = function () {
        $location.search('q', $scope.q);
        $scope.collection.ready = false;
        if ($scope.collection.cv.filter === filterSamples) {
            $scope.collection.loading = true;
            $scope.collection.cv.refresh();
            $scope.collection.loading = false;
            $scope.collection.ready = true;
        } else {
            $scope.collection.loading = true;
            $scope.collection.cv.filter = filterSamples;
            $scope.collection.loading = false;
            $scope.collection.ready = true;
        }
    }

    // when page loads...
    SamplesService.downloadSamples({
        loading: function () {
            $scope.collection.loading = true;
        },
        success: function (data) {
            $scope.collection.loading = false;
            $scope.frameworks = SamplesService.getFrameworks();
            $scope.frameworks.forEach(function (f, i) { $scope.frameworks[i] = {name:f, show:true}});
            $scope.collection.cv = new wijmo.collections.CollectionView(SamplesService.getSamples());
            $scope.collection.cv.filter = filterSamples;
            $scope.collection.cv.sortDescriptions.push(new wijmo.collections.SortDescription('Name', 'true'));
            $scope.collection.cv.refresh();
            $scope.collection.ready = true;
        },
        error: function (data) {
            $scope.collection.loading = false;
            $scope.collection.error = true;
            $scope.collection.errorMessage = data;
        }
    });

})

.config(function ($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects.
    // lol okay
    $sceProvider.enabled(false);
});