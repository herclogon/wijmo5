'use strict';

var app = angular.module('app');

app.controller('chartMarkerCtrl', function appCtrl($scope) {
    var pt = new wijmo.Point();

    // data context
    $scope.ctx = {
        chart: null,
        itemsSource: [],
        lineMarker: null,
        lines: 1
    };
    // create random data
    var dataCount = 300;
    for (var i = 0; i < dataCount; i++) {
        $scope.ctx.itemsSource.push({
            date: new Date(10, 0, i),
            output: Math.floor(Math.random() * 10),
            input: Math.floor(Math.random() * 10 + 10)
        });
    }

    $scope.$watch('ctx.chart', function () {
        if ($scope.ctx.chart) {
            // store references
            var chart = $scope.ctx.chart;
            chart.axisX.format = "MMM-yy";
        }
    });

    $scope.$watch('ctx.lines', function () {
        var lines = $scope.ctx.lines, lineMarker = $scope.ctx.lineMarker;

        if (lineMarker) {
            if (lines === 0 && lineMarker.interaction === 2) {
                lineMarker.interaction = 1;
            }
            lineMarker.lines = lines;
        }
    });

    $scope.positionChanged = function (s, point) {
        pt = point;
    }

    $scope.changeContent = function () {
        var html = '', chart = $scope.ctx.chart;
        chart.series.forEach(function (s, i) {
            var ht = s.hitTest(new wijmo.Point(pt.x, NaN));

            // find series lines to get its color
            var polyline = $(s.hostElement).find('polyline')[0];

            // add series info to the marker content
            if (ht.x && ht.y !== null) {
                if (i == 0) {
                    html += wijmo.Globalize.formatDate(ht.x, 'dd-MMM');
                }
                html += '<div style="color:' + polyline.getAttribute('stroke') + '">' + ht.name + ' = ' + ht.y.toFixed(2) + '</div>';
            }
        });
        return html;
    }
});
