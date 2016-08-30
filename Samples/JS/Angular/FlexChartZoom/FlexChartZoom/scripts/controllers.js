'use strict';

// get reference to the app
var app = angular.module('app');

// define the app's single controller
app.controller('appCtrl', function appCtrl($scope, $http) {
    
    //create chart
    $scope.ctx = {
        zoomChart: null,
        chartType: 3,
        itemsSource: [],
        chartGestures: null
    };
    $scope.mouseAction = wijmo.chart.interaction.MouseAction.Zoom;
    $scope.interactiveAxes = wijmo.chart.interaction.InteractiveAxes.X;

    if (navigator.userAgent.match(/iPad/i) != null ||
        /Android/i.test(navigator.userAgent)) {
        document.querySelector('#mouseAction').style.display = 'none';
    }

    // add data array to scope
    $http.get('data/fb.json')
          .success(function (data) {
              var dateStr;
              for (var i = 0; i < data.length; i++) {
                  dateStr = data[i].date;
                  dateStr = dateStr.split('/');
                  data[i].date = new Date(dateStr[2], dateStr[0] - 1, dateStr[1]);
              }
              $scope.ctx.itemsSource = data;
          }).error(function (error) {
              console.log(error);
          });

    $scope.$watch('ctx.zoomChart', function () {
        if (!$scope.ctx.zoomChart) {
            return;
        }
        var chart = $scope.ctx.zoomChart;

        chart.plotMargin = 'NaN NaN NaN 80';
        window.setTimeout(function () {
            chart.axisX.rangeChanged.addHandler(function () {
                document.querySelector('#reset').disabled = undefined;
            });
            chart.axisY.rangeChanged.addHandler(function () {
                document.querySelector('#reset').disabled = undefined;
            });
        }, 200);
     
    });

    $scope.$watch('mouseAction', function () {
        if ($scope.ctx.chartGestures) {
            $scope.ctx.chartGestures.mouseAction = $scope.mouseAction;
        }
    });

    $scope.$watch('interactiveAxes', function () {
        if ($scope.ctx.chartGestures) {
            $scope.ctx.chartGestures.interactiveAxes = $scope.interactiveAxes;
        }
    });

    $scope.resetAxes = function () {
        if ($scope.ctx.chartGestures) {
            $scope.ctx.chartGestures.reset();
        }
        window.setTimeout(function () {
            document.querySelector('#reset').disabled = 'disabled';
        }, 20);         
    }
});

