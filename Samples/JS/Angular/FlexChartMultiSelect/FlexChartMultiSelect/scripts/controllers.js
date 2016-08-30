(function() {
    'use strict';

    function appCtrl($scope, dataSvc) {
        var rendered = false,
            wjSelected = 'wj-state-selected',
            ctrlKey = 17,
            ctrlDown = false,
            selections = [],
            chart = null,
            mouseDown = false,
            start = null,
            end = null,
            selector = null,
            offset = null,
            isTouch = 'ontouchstart' in window;

        $scope.data = dataSvc.getData();

        $scope.ctx = {
            items: [],
            chartType: 'Column'
        };

        $scope.data = dataSvc.getData();

        $scope.ctx = {
            items: [],
            chartType: 'Column'
        };
        // select all values/elements under 500
        $scope.selectValuesUnder500 = function() {
            var len = 0,
                i = 0,
                j = 0,
                item,
                series,
                binding;

            $scope.clear();

            for (i = 0; i < chart.series.length; i++) {
                series = chart.series[i];

                // internal helper method that gets the number of plot elements for sereis
                len = series._getLength();

                // get binding so we can use it when accessing data item
                binding = series._getBinding(0);

                for (j = 0; j < len; j++) {
                    item = series._getItem(j); // internal helper method that
                    // get's series data item by index

                    if (item && item[binding] < 500) {
                        // while not a HitTestInfo object, we only need these two pieces
                        // of information
                        addSelection({
                            pointIndex: j,
                            series: series
                        });
                    }
                }
            }

            // update length for view
            $scope.ctx.items.push.apply($scope.ctx.items, selections);
        }

        // clear selection for button click
        $scope.clear = function() {
            clearSelection();

            // update length for view
            $scope.ctx.items.length = 0;
        };

        // helper for clearing chart selection
        function clearSelection() {
            var item, series;
            for (var i = 0; i < selections.length; i++) {
                item = selections[i];
                series = item.series;
                var el = series.getPlotElement(item.pointIndex);
                if (el) {
                    wijmo.removeClass(el, wjSelected);
                }
            }

            selections.length = 0;
        }

        // helper for adding chart selection
        function addSelection(hti) {
            wijmo.addClass(hti.series.getPlotElement(hti.pointIndex), wjSelected);
            selections.push({
                series: hti.series,
                pointIndex: hti.pointIndex
            });
        }

        // helper for removing chart selection
        function removeSelection(hti) {
            var items = selections.filter(function(item) {
                    return item.series === hti.series && item.pointIndex === hti.pointIndex;
                }),
                idx = -1;

            if (items && items.length > 0) {
                idx = selections.indexOf(items[0]);
            }

            if (idx >= 0) {
                selections.splice(idx, 1);
                wijmo.removeClass(hti.series.getPlotElement(hti.pointIndex), wjSelected);
            }
        }

        // finds selected plot elements after rendering and applies CSS to
        // visually represent selection
        function restoreSelection() {
            var item, series, el;
            for (var i = 0; i < selections.length; i++) {
                item = selections[i];
                series = item.series;
                el = series.getPlotElement(item.pointIndex);

                if (el) {
                    wijmo.addClass(el, wjSelected);
                }
            }
        }

        // helper to hide the selector
        function hideSelector() {
            selector
                .css('visibility', 'hidden')
                .width(0)
                .height(0)
                .css('left', 0)
                .css('top', 0);
        }

        // selects plot elements within drawn rectangle
        function selectWithinRect(rect) {
            if (!rect || !chart) {
                return;
            }

            var seriesCount = chart.series.length,
                pointCount,
                series,
                el,
                box;

            for (var i = 0; i < seriesCount; i++) {
                series = chart.series[i];
                pointCount = series._getLength();

                for (var j = 0; j < pointCount; j++) {
                    el = series.getPlotElement(j);
                    if (elementInBounds(el, rect)) {
                        addSelection({
                            series: series,
                            pointIndex: j
                        });
                    }
                }
            }
        }

        // helper to determine if plot element is within the bounds
        // of the drawn rectangle
        function elementInBounds(el, rect) {
            var box = el.getBoundingClientRect();
            return !(box.left > rect.right || box.right < rect.left || box.top > rect.bottom || box.bottom < rect.top);
        }

        /*
         * Event handlers
         */

        $scope.rendered = function(sender, args) {
            chart = sender; // internal

            if (!chart) {
                return;
            }

            if (!rendered) {
                chart.hostElement.addEventListener('mousedown', chartMouseDown);
                chart.hostElement.addEventListener('mousemove', chartMouseMove);
                chart.hostElement.addEventListener('mouseup', chartMouseUp);
                chart.hostElement.addEventListener('mouseleave', chartMouseLeave);
                chart.hostElement.addEventListener('click', chartClick);
                document.addEventListener('keydown', chartKeyDown);
                document.addEventListener('keyup', chartKeyUp);

                // boolean flag - don't re-add event listener after resize
                rendered = true;

                selector = $('#plotSelection');
            } else {
                // *visually* restore selection after redraw (ex. resize browser, change chart type)
                restoreSelection();
            }
        };

        function chartClick(e) {
            if ((mouseDown || !ctrlDown) && !isTouch) {
                return;
            }

            var element = e.target,
                hti = chart.hitTest(e),
                selected = false,
                chartType = chart.chartType;

            selected = selections.some(function(item) {
                return item.series === hti.series && item.pointIndex === hti.pointIndex;
            });

            if (hti && hti.series && !selected && ((hti.distance <= 0 && (chartType == 0 || chartType == 1)) || hti.distance <= 15) && (ctrlDown || isTouch)) {
                // remove selection
                if (wijmo.hasClass(element, wjSelected)) {
                    removeSelection(hti);
                }
                // add selection
                else {
                    addSelection(hti);
                }
            } else if (selected && ((hti.distance <= 0 && (chartType == 0 || chartType == 1)) || hti.distance <= 15) && (ctrlDown || isTouch)) {
                removeSelection(hti);
            } else {
                clearSelection();
            }

            // update length for view
            $scope.$apply(function() {
                $scope.ctx.items.length = 0;
                $scope.ctx.items.push.apply($scope.ctx.items, selections);
            });
        }

        function chartMouseDown(e) {
            if (ctrlDown) {
                return;
            }
            mouseDown = true;
            e.preventDefault();
        }

        function chartMouseUp(e, pt) {
            if (end) {
                var host = $(chart.hostElement);
                offset = host.offset();
                offset.left = offset.left + parseInt(host.css('padding-left'));
                offset.top = offset.top + parseInt(host.css('padding-top'));

                end = start = null;

                $scope.clear();
                selectWithinRect(selector.get(0).getBoundingClientRect());

                // update length for view
                $scope.$apply(function() {
                    $scope.ctx.items.length = 0;
                    $scope.ctx.items.push.apply($scope.ctx.items, selections);
                });


                e.preventDefault();
            }

            hideSelector();
            mouseDown = false;
        }

        function chartMouseMove(e) {
            if (!mouseDown) {
                return;
            }

            var pt = isTouch ? new wijmo.Point(e.changedTouches[0].pageX, e.changedTouches[0].pageY) : new wijmo.Point(e.pageX, e.pageY);

            if (start !== null) {
                end = pt;

                // update selector rectangle
                var w = pt.x - start.x;
                var h = pt.y - start.y;

                if (w >= 0) {
                    selector.css('left', start.x - offset.left).width(w);
                } else {
                    selector.css('left', pt.x - offset.left).width(-w);
                }
                if (h >= 0) {
                    selector.css('top', start.y - offset.top).height(h);
                } else {
                    selector.css('top', pt.y - offset.top).height(-h);
                }
            } else {
                selector.css('visibility', 'visible');
                offset = selector.offset();

                start = pt;
            }

            e.preventDefault();
        }

        function chartMouseLeave(e) {
            if (start) {
                start = end = null;
                mouseDown = false;
                hideSelector();
            }
        }

        function chartKeyUp(e) {
            if (e.keyCode === ctrlKey) {
                ctrlDown = false;
            }
        }

        function chartKeyDown(e) {
            if (e.keyCode === ctrlKey) {
                ctrlDown = true;
            }
        }
    }

    angular
        .module('app')
        .controller('appCtrl', appCtrl);

})();
