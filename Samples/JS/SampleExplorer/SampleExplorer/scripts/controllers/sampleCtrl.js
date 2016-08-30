'use strict';
angular.module('app')

.controller('sampleCtrl', function ($scope, $http, $sce, $routeParams, SamplesService) {

    // sampleView Data
    $scope.sample = {
        data: {},
        state: {
            loading: false,
            ready: false,
            error: false,
            errorMessage: ''
        }
    };

    $scope.display = {
        downloadButton: false,
        codeButton: true,
        runButton: true
    };

    // helper avoids sanitizing the HTML that we want to be rendered
    $scope.displayHTML = function (item) {
        return $sce.trustAsHtml(item);
    }

    $scope.getDownloadLink = function (dirtitle, category) {
        return 'http://wijmo.com/wp-content/Samples/' + category + '/' + dirtitle + '/' + dirtitle + '.zip';
    }

    //construct
    if (SamplesService.isPopulated()===false) {
        SamplesService.downloadSamples({
            loading: function () {
                $scope.sample.state.loading = true;
            },
            success: function (data) {
                $scope.sample.state.loading = false;
                
                SamplesService.getSampleByName({
                    name: $routeParams['sampleName'],
                    success: function (data) {
                        $scope.sample.state.ready = true;
                        $scope.sample.state.error = false;
                        $scope.sample.data = data;
                    },
                    error: function (data) {
                        $scope.sample.state.error = true;
                        $scope.sample.state.ready = false;
                        $scope.sample.state.errorMessage = data;
                    }
                });
            },
            error: function (data) {
                $scope.sample.state.ready = false;
                $scope.sample.state.loading = false;
                $scope.sample.state.error = true;
                $scope.sample.state.errorMessage = data;
            }
        });
    } else if (SamplesService.isPopulated() === true) {
        SamplesService.getSampleByName({
            name: $routeParams['sampleName'],
            success: function (data) {
                $scope.sample.state.error = false;
                $scope.sample.state.ready = true;
                $scope.sample.data = data;
            },
            error: function (data) {
                $scope.sample.state.error = true;
                $scope.sample.state.ready = false;
                $scope.sample.state.errorMessage = data;
            }
        });
    } else {
        $scope.sample.state.ready = false;
        $scope.sample.state.error = true;
        $scope.sample.state.errorMessage = 'Failed to contact data service.';
    }
});