(function () {
    'use strict';

    angular
        .module('app')
        .controller('markerCtrl', function ($scope, DataSvc) {
            var pt = null,
                isTouch = DataSvc.isTouch();

            $scope.title = 'Markers';
            $scope.data = [];
            $scope.dataList = DataSvc.getDataList();
            $scope.selectedSymbol = $scope.dataList[0].symbol;
            $scope.ctx = {
                chart: null,
                marker: null,
                symbolSize: isTouch ? 5 : 10,
                properties: {
                    interaction: 'Move',
                    markerLines: 'Both',
                    alignment: 'Auto',
                    snapping: false,
                    content: function () {
                        var retval = null, hti, item;
                        if ($scope.ctx.chart && pt) {
                            // hit test
                            hti = $scope.ctx.chart.hitTest(pt);

                            // check hit test & use its values for LineMarker's content
                            if (hti && hti.item) {
                                item = hti.item;
                                retval =
                                   'Date: ' + item.date + '<br />' +
                                   'Open: ' + wijmo.Globalize.format(item.open, 'n2') + '<br />' +
                                   'High: ' + wijmo.Globalize.format(item.high, 'n2') + '<br />' +
                                   'Low: '  + wijmo.Globalize.format(item.low, 'n2') + '<br />' +
                                   'Close: ' + wijmo.Globalize.format(item.close, 'n2');
                            }
                        }

                        // return content string
                        return retval;
                    }
                }
            };

            // get data
            DataSvc.getData($scope.selectedSymbol, true)
                .success(function (data) {
                    $scope.data = data.splice(0, 20);
                })
                .error(function (error) {
                    console.log(error);
                });

            // LineMarker.positionChanged event handler
            $scope.positionChanged = function(sender, args) {
                pt = args;  // get screen coordinates
            };

            // handle snapping changed
            $scope.snappingChanged = function() {
                var chart = $scope.ctx.chart,
                    snapping = $scope.ctx.properties.snapping,
                    marker = $scope.ctx.marker;

                // change marker settings based on snapping variable
                if (snapping && chart && marker) {
                    $scope.ctx.properties.interaction = 'None';
                    $scope.ctx.properties.markerLines = 'Both';
                    $scope.ctx.properties.alignment = 'Auto';
                } else if (!snapping && chart && marker) {
                    $scope.ctx.properties.interaction = 'Move';
                    marker.horizontalPosition = null;
                    marker.verticalPosition = null;
                    marker.content = $scope.ctx.properties.content;
                    marker.isVisible = true;
                }
            };

            // chart rendered event handler
            $scope.chartRendered = function (sender, args) {
                // handle custom "snapping" feature using the correct event (mousemove or touchmove)
                sender.hostElement.addEventListener('mousemove', snappingHandler);
                sender.hostElement.addEventListener('touchmove', snappingHandler);
            };


            function snappingHandler(e) {
                if ($scope.ctx.properties.snapping) {
                    var chart = $scope.ctx.chart,
                        marker = $scope.ctx.marker,
                        ex, ey;

                    if (!wijmo.hasClass(chart.hostElement, 'snapping')) {
                        wijmo.addClass(chart.hostElement, 'snapping');
                    }

                    // get points from event
                    if (isTouch && e.touches && e.touches.length > 0) {
                        ex = e.touches[0].clientX; ey = e.touches[0].clientY;
                    } else {
                        e = chart._toControl(new wijmo.Point(e.pageX, e.pageY));
                        ex = e.x; ey = e.y;
                    }

                    var dp = chart.pointToData(ex, ey),
                        idx = wijmo.clamp(Math.round(dp.x), 0, $scope.data.length - 1),
                        item = $scope.data[idx],
                        ax = chart.axisX,
                        ay = chart.axisY,
                        x = wijmo.clamp(((Math.round(dp.x) - ax.actualMin) / (ax.actualMax - ax.actualMin)) - 0.00275, 0, 1),
                        y = wijmo.clamp((ay.actualMax - dp.y) / (ay.actualMax - ay.actualMin), 0, 1);

                    // marker content fn and give it access to current scope
                    marker.content = function () {
                        return 'Date: ' + item.date + '<br />' +
                               'Open: ' + wijmo.Globalize.format(item.open, 'n2') + '<br />' +
                               'High: ' + wijmo.Globalize.format(item.high, 'n2') + '<br />' +
                               'Low: ' + wijmo.Globalize.format(item.low, 'n2') + '<br />' +
                               'Close: ' + wijmo.Globalize.format(item.close, 'n2');
                    }.bind(this);

                    // set position and visibility
                    marker.horizontalPosition = x;
                    marker.verticalPosition = y;
                    marker.isVisible = 0 < x && x < 1;
                } else {
                    if (wijmo.hasClass($scope.ctx.chart.hostElement, 'snapping')) {
                        wijmo.removeClass($scope.ctx.chart.hostElement, 'snapping');
                    }
                }
            }

        });
})();