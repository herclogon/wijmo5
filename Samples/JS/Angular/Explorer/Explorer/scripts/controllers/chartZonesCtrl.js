'use strict';

var app = angular.module('app');

app.controller('chartZonesCtrl', function appCtrl($scope) {

    // data context
    $scope.ctx = {
        chart: null,
        itemsSource: []
    };

    // generate data
    var nStudents = 200;
    var nMaxPoints = 1600;
    for (var i = 0; i < nStudents; i++) {
        $scope.ctx.itemsSource.push({
            number: i,
            score: nMaxPoints * 0.5 * (1 + Math.random())
        });
    }

    function findMean(data) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            sum += data[i].score;
        }
        return sum / data.length;
    }

    function findStdDev(data, mean) {
        var sum = 0;
        for (var i = 0; i < data.length; i++) {
            var d = data[i].score - mean;
            sum += d * d;
        }
        return Math.sqrt( sum / data.length);
    }

    function getBoundingIndex(data, frac) {
        var n = data.length;
        var i = Math.ceil(n * frac);
        while (i > data[0] && data[i] == data[i + 1])
            i--;
        return i;
    }

    function drawAlarmZone(chart, engine, xmin, ymin, xmax, ymax, fill) {
        var pt1 = chart.dataToPoint(new wijmo.Point(xmin, ymin));
        var pt2 = chart.dataToPoint(new wijmo.Point(xmax, ymax));
        engine.fill = fill;
        engine.drawRect(Math.min(pt1.x, pt2.x), Math.min(pt1.y, pt2.y), Math.abs(pt2.x - pt1.x), Math.abs(pt2.y - pt1.y));
    }

    $scope.$watch('ctx.chart', function () {
        if ($scope.ctx.chart) {
            var chart = $scope.ctx.chart;
            var data = $scope.ctx.itemsSource;

            // calculate statistics
            var mean = findMean(data);
            var stdDev = findStdDev(data, mean);

            chart.beginUpdate();

            // format axis
            chart.axisX.axisLine = false;
            chart.axisX.title = 'student number';
            chart.axisY.title = 'student accumalated points';

            // statistics series
            for (var i = -2; i <= 2; i++) {
                var y = mean+i*stdDev;
                var sdata = [{ x: 0, y: y }, { x: nStudents - 1, y: y }];
                var series = new wijmo.chart.Series();
                series.itemsSource = sdata;
                series.bindingX = 'x';
                series.binding = 'y';
                series.chartType = 'Line';
                series.style = { stroke: '#202020', strokeWidth:2 };
                if(Math.abs(i)==1){
                    series.style.strokeDasharray = '5,1';
                } else if (Math.abs(i) == 2) {
                    series.style.strokeDasharray = '2,2';
                }

                if (i > 0) {
                    series.name = 'm+' + i + 's';
                } else if (i < 0) {
                    series.name = 'm' + i + 's';
                } else {
                    series.name = 'mean';
                }
                chart.series.push(series);
            }

            // calculate zone ranges
            var scores = [];
            for (var i = 0; i < data.length; i++)
                scores.push(data[i].score);
            scores.sort(function (a, b) { return b - a });

            var zones = [
                scores[getBoundingIndex(scores, 0.95)],
                scores[getBoundingIndex(scores, 0.75)],
                scores[getBoundingIndex(scores, 0.25)],
                scores[getBoundingIndex(scores, 0.05)]
            ];

            var colors = [
                'rgba(255,192,192,0.2)',
                'rgba(55,328,228,0.5)',
                'rgba(255,228,128,0.5)',
                'rgba(128,255,128,0.5)',
                'rgba(128,128,225,0.5)'
            ];

            // add zones to legend
            for (var i = 0; i < 5; i++) {
                var series = new wijmo.chart.Series();
                series.chartType = 'Area';
                series.style = { fill: colors[4-i], stroke: 'transparent' };
                series.name = String.fromCharCode('A'.charCodeAt(0) + i);
                chart.series.push(series);
            }

            // render zones
            chart.rendering.addHandler(function (sender, e) {

                for (var i = 0; i < 5; i++) {
                    var ymin = i == 0 ? chart.axisY.actualMin : zones[i-1];
                    var ymax = i == 4 ? chart.axisY.actualMax : zones[i];
                    drawAlarmZone(chart, e.engine, chart.axisX.actualMin, ymin, chart.axisX.actualMax, ymax, colors[i]);
                }
            });

            chart.endUpdate();
        }
    });
});
