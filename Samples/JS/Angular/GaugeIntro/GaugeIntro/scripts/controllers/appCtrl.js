(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('appCtrl', function ($scope) {

        // a collection of property values for the Wijmo Gauges
        $scope.props = {
            value: 50,
            min: 0,
            max: 100,
            step: 10,
            isReadOnly: false,
            format: 'n0',
            showRanges: true,
            showTicks: false,
            thumbSize: null,
            showText: 'All',
            isAnimated: true,
            hasShadow: true,
            direction: 'Right',
            autoScale: true,
            startAngle: 0,
            sweepAngle: 180,
            ranges: {
                pointerThickness: 0.5,
                lower: {
                    min: 0,
                    max: 33,
                    color: 'rgba(255,100,100,.5)'
                },
                middle: {
                    min: 33,
                    max: 66,
                    color: 'rgba(255,255,100,.5)'
                },
                upper: {
                    min: 66,
                    max: 100,
                    color: 'rgba(100,255,100,.5)'
                }
            }
        };

        // getText callback to convert values into strings
        $scope.getText = function (gauge, part, value, text) {
            switch (part) {
                case 'value':
                    if (value <= 10) return 'Empty!';
                    if (value <= 25) return 'Low...';
                    if (value <= 95) return 'Good';
                    return 'Full';
                case 'min':
                    return 'EMPTY';
                case 'max':
                    return 'FULL';
            }
            return text;
        }

        // "showRanges" change event handler
        $scope.showRangesChanged = function () {
            // get the value of "showRanges" from $scope
            var showRanges = $scope.props.showRanges;

            // update the percentile.ranges object based on "$scope.props.showRanges"
            $scope.props.ranges.lower.color = showRanges ? 'rgba(255,100,100,.1)' : 'red';
            $scope.props.ranges.middle.color = showRanges ? 'rgba(255,255,100,.1)' : 'yellow';
            $scope.props.ranges.upper.color = showRanges ? 'rgba(100,255,100,.1)' : 'green';
            $scope.props.ranges.pointerThickness = showRanges ? 0.5 : 1;
        };
    });
})();