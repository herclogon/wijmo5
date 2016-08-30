'use strict';

var m = angular.module('gdash');
m.controller('gdashController', function ($scope, gdashService) {
    $scope.ctx = {
        search: '',                         // geocode a location
        extent: null,                       // current map extent (read/write)
        location: null,                     // current map location (lat, lon, name, read only)
        domTapDescription: '',              // current map tapestry description
        selectedSource: null,               // tiles for a given info source
        sources: [],                        // information sources for the tiles
        medianAgeChart: null,               // the chart for the Median Age information
        householdIncomeChart: null,         // the chart for the Household Income information
        homeValueChart: null,               // the chart for the Home Value information
        homeValueDistributionChart: null    // the chart for the Home Value Distribution information
    };

    // initialize service
    require(['esri/map'], function () {
        gdashService.initService(onGotData);
        $scope.ctx.sources = gdashService.getSources();
        $scope.ctx.extent = gdashService.getExtent();
        $scope.ctx.location = gdashService.getLocation();
    })

    // get a description for an index (100 is the national average, 50 is half, 200 is double, etc)
    $scope.getIndexDescription = function (index) {
        return gdashService.getIndexDescription(index);
    }

    // show tiles for a given info source
    $scope.selectSource = function (source) {
        if (source != $scope.ctx.selectedSource) {
            angular.forEach($scope.ctx.sources, function (value, key) {
                value.selected = (value == source);
            });
            $scope.ctx.selectedSource = source;
            $scope.$apply('ctx.selectedSource');
        }
    }

    // go to the current location
    $scope.gotoCurrentLocation = function () {
        if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var c = position.coords;
                $scope.gotoLocation(c.latitude, c.longitude);
            });
            return true;
        }
        return false;
    };

    // go to any location
    $scope.gotoLocation = function (lat, lon) {
        var ptg = new esri.geometry.Point(lon, lat, $scope.ctx.extent.spatialReference);
        var ptm = esri.geometry.geographicToWebMercator(ptg);
        $scope.ctx.extent = $scope.ctx.extent.centerAt(ptm);
        $scope.$apply('ctx.extent');
    }

    // geocode a location
    $scope.ctx.search = '';
    $scope.geoCode = function () {
        if ($scope.ctx.search && $scope.ctx.search.length > 0) {
            if (!this.geocoder) {
                this.geocoder = new google.maps.Geocoder();
            }
            this.geocoder.geocode({ 'address': $scope.ctx.search }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var loc = results[0].geometry.location;
                    $scope.gotoLocation(loc.lat(), loc.lng());
                    $scope.ctx.search = '';
                } else {
                    alert('Sorry, this search produced no results.');
                }
            });
        }
    }

    // when scope extent changes, update model extent
    $scope.$watch('ctx.extent', function () {
        gdashService.setExtent($scope.ctx.extent);
    });

    $scope.$watch('ctx.medianAgeChart', function () {
        if ($scope.ctx.medianAgeChart) {
            var chart = $scope.ctx.medianAgeChart;
            chart.tooltip.content = '{y} people <br/> are {x}';
        }
    });

    $scope.$watch('ctx.householdIncomeChart', function () {
        if ($scope.ctx.householdIncomeChart) {
            var chart = $scope.ctx.householdIncomeChart;
            chart.tooltip.content = '{y} households <br/> earn {x}';
        }
    });

    $scope.$watch('ctx.homeValueChart', function () {
        if ($scope.ctx.homeValueChart) {
            var chart = $scope.ctx.homeValueChart;
            chart.tooltip.content = '{y} homes in the <br/>{x} range';
        }
    });

    $scope.$watch('ctx.homeValueDistributionChart', function () {
        if ($scope.ctx.homeValueDistributionChart) {
            var chart = $scope.ctx.homeValueDistributionChart;
            chart.tooltip.content = '{y} homes in the <br/>{x} value range';
        }
    });

    // update location and tapestry description when new data arrives
    function onGotData() {
        $scope.ctx.location = gdashService.getLocation();
        $scope.ctx.domTapDescription = gdashService.getDomTapDescription();
        $scope.$apply();

        updateChart($scope.ctx.medianAgeChart);
        updateChart($scope.ctx.householdIncomeChart);
        updateChart($scope.ctx.homeValueChart);
        updateChart($scope.ctx.homeValueDistributionChart);
    }

    function updateChart(chart) {
        var valueSeries = new wijmo.chart.Series();
        chart.series.clear();

        valueSeries.binding = 'value';
        valueSeries.style = {};
        valueSeries.style.fill = '#8f5ca6';
        valueSeries.style.stroke = '#8f5ca6';

        chart.bindingX = 'name';
        chart.series.push(valueSeries);
    }
});
