'use strict';

var app = angular.module('app');

app.controller('trendlineCtrl', function ($scope) {
    var trendLine, equation;

    // generate some random data
    function getData(count) {
        var data = new wijmo.collections.ObservableArray();

        for (var i = 1; i <= count; i++) {
            data.push({
                x: i,
                y: Math.floor(Math.random() * 100)
            });
        }
        return data;
    }

    $scope.itemsSource = new wijmo.collections.CollectionView(getData(10));
    $scope.order = 4;
    $scope.fitType = 'Linear';
    $scope.showEquation = true;
    $scope.iptOrder = 4;
    $scope.inputOrder = null;

    $scope.$watch('iptOrder', function () {
        var input = $scope.inputOrder
        if (input == null || input.value < input.min || input.value > input.max) {
            return;
        }
        $scope.order = $scope.iptOrder;
    });

    $scope.$watch('order', function () {
        updateTrendLine();
    });

    $scope.$watch('showEquation', function () {
        if ($scope.showEquation !== undefined && equation) {
            equation.isVisible = $scope.showEquation;
        }
    });

    $scope.$watch('fitType', function () {
        if (!$scope.fitType) {
            return;
        }
        var orders = document.querySelectorAll('.order');
        if ($scope.fitType === 'Fourier' || $scope.fitType === 'Polynomial') {
            toggleVisible(orders, true);
        } else {
            toggleVisible(orders, false);

        }

        updateTrendLine();
    });

    function toggleVisible(arr, visible) {
        var display, i, len;

        visible = !!visible;
        display = visible ? 'inline-block' : 'none';

        for (i = 0, len = arr.length; i < len; i++) {
            arr[i].style.display = display;
        }
    }

    $scope.$watch('trendlinechart', function () {
        var sender = $scope.trendlinechart,
            ele;
        if (sender && sender.hostElement) {
            if (trendLine != null) {
                return;
            }
            trendLine = new wijmo.chart.analytics.TrendLine();
            trendLine.name = 'Trend Line';
            trendLine.binding = 'y';
            trendLine.bindingX = 'x';
            trendLine.sampleCount = 100;
            sender.series.push(trendLine);
            updateTrendLine();

            //add equation
            equation = new wijmo.chart.LineMarker(sender, {
                isVisible: !!$scope.showEquation,
                lines: wijmo.chart.LineMarkerLines.None,
                interaction: wijmo.chart.LineMarkerInteraction.None,
                content: function () {
                    return trendLine.getEquation();
                }
            });

            ele = sender.hostElement;
            trendlineChart = sender;
            // add event handlers for moving point.
            ele.addEventListener('mouseleave', update);
            ele.addEventListener('mouseup', update);
            ele.addEventListener('mousedown', mouseDown);
            ele.addEventListener('mousemove', mouseMove);
        }
    });

    // init variables
    var moving = false,
        hti = null,
        threshold = 10,
        el = null,
        dp = null,
        ptIdx = null,
        trendlineChart;

    function mouseMove(e) {
        var target = e.target || e.srcElement;

        // prevent text selection
        e.preventDefault();

        // hit test
        hti = trendlineChart.series[0].hitTest(e);

        // get data point based on HitTestInfo
        dp = trendlineChart.pointToData(hti.point);

        if (moving && hti && hti.series && hti.series === trendlineChart.series[0]) {

            // update the svg element position
            el = hti.series.getPlotElement(ptIdx);

            // set svg attributes to update position
            //e.offsetY doesn't work for FF.
            //el.setAttribute('cy', e.offsetY);
            el.setAttribute('cy', e.clientY - target.getBoundingClientRect().top);

            // update values - but don't refresh collection until done
            hti.series.collectionView.items[ptIdx].y = Math.min(Math.max(0, dp.y), 100);
        }
    }

    function mouseDown(e) {
        if (!moving && hti && hti.distance <= threshold) {
            // bool flag
            moving = true;

            // maintain pointIndex until moving is done
            ptIdx = hti.pointIndex;
        }
    }

    // called on mouseup or mouseleave
    function update() {
        if (hti && hti.series) {
            // notify only once
            hti.series.collectionView.refresh();
        }

        moving = false;
        hti = null;
        el = null;
        dp = null;
        ptIdx = null;
    }

    function updateTrendLine() {
        if (trendLine == null || !$scope.fitType || $scope.order == null) {
            return;
        }
        var sender = $scope.trendlinechart;
        sender.beginUpdate();

        trendLine.fitType = wijmo.chart.analytics.TrendLineFitType[$scope.fitType];
        trendLine.order = $scope.order;

        sender.endUpdate();
    }
});
