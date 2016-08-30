'use strict';

var app = angular.module('app');

// CollectionView header sorter
app.directive('appSorter', function () {

    // update element content to show whether is the sorted column
    function updateSortIndicator(scope, element) {
        if (scope.view) {
            var sd = scope.view.sortDescriptions,
                sortIndicator = '';
            if (sd.length > 0 && sd[0].property == scope.binding) {
                sortIndicator = sd[0].ascending ? ' ▲' : ' ▼';
            }
            element.innerText = scope.header + sortIndicator;
        }
    };

    // apply/change/remove sort on this column
    function applySort(scope, args) {
        if (scope.view) {
            var sd = scope.view.sortDescriptions;
            if (args.ctrlKey) { // clear sort on ctrl-click 
                sd.clear();
            } else { // add/reverse sort on clicked column
                var ascending = true;
                if (sd.length > 0 && sd[0].property == scope.binding) {
                    ascending = !sd[0].ascending;
                }
                var sdNew = new wijmo.collections.SortDescription(scope.binding, ascending);
                sd.splice(0, sd.length, sdNew);
            }
        }
    };

    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        scope: {
            view: '=',
            binding: '@'
        },
        template: '<span ng-transclude/>',
        link: function (scope, element, attrs) {
            var e = element[0];

            // save header to update on clicks
            if (!scope.header) {
                scope.header = e.textContent;
            }

            // make cursor a hand
            var p = e.parentElement;
            p.style.cursor = 'pointer';

            // show sort indicator
            updateSortIndicator(scope, e);
            if (scope.view) {
                scope.view.collectionChanged.addHandler(function () {
                    updateSortIndicator(scope, e);
                });
            }

            // change sort on click
            p.addEventListener('click', function (args) {
                if (scope.view) {
                    applySort(scope, args);
                }
            });
        }
    }
});

// StockChart directive
app.directive('appStockChart', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            portfolio: '=',
        },
        template: '<div/>',
        link: function (scope, element, attrs) {
            var chart,
                portfolio;

            // create FlexChart control
            chart = new wijmo.chart.FlexChart(element[0]);
            chart.chartType = wijmo.chart.ChartType.Line;
            chart.axisY.format = 'p0';
            chart.axisX.format = 'MMM-yyyy';
            chart.legend.position = wijmo.chart.Position.None;

            // allow user to select series
            chart.selectionMode = wijmo.chart.SelectionMode.Series;

            // bind to portfolio
            scope.$watch('portfolio', function () {
                var p = portfolio;
                if (p) {
                    p.itemsChanged.removeHandler(itemsChanged);
                    p.view.currentChanged.removeHandler(currentChanged);
                }
                p = scope.portfolio;
                if (p) {
                    portfolio = p;
                    p.itemsChanged.addHandler(itemsChanged);
                    p.view.currentChanged.addHandler(currentChanged);
                }
            });

            // update chart when portfolio changes
            function itemsChanged() {
                if (chart && portfolio) {
                    updateChart(chart, portfolio);
                }
            }

            // update chart selection to match portfolio selection
            function currentChanged() {
                var symbol = portfolio.view.currentItem ? portfolio.view.currentItem.symbol : null,
                    selSeries = null;
                for (var i = 0; i < chart.series.length; i++) {
                    if (chart.series[i].name == symbol) {
                        selSeries = chart.series[i];
                        break;
                    }
                }
                chart.selection = selSeries;
            }

            // update portfolio selection to match chart
            chart.selectionChanged.addHandler(function () {
                var symbol = chart.selection ? chart.selection.name : null,
                    selSeries = null;
                for (var i = 0; i < portfolio.view.items.length; i++) {
                    if (portfolio.view.items[i].symbol == symbol) {
                        portfolio.view.moveCurrentToPosition(i);
                        break;
                    }
                }
            });
        }
    }
    function updateChart(chart, portfolio) {

        // don't update chart until all done
        chart.beginUpdate();

        // remove current series
        var series = [];
        while (chart.series.length > 0) {
            series.push(chart.series[0]);
            chart.series.splice(0, 1);
        }

        // add new series
        chart.bindingX = 'date';
        chart.binding = 'change';
        var items = portfolio.view.items;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            if (item.chartData && item.chartData.length && item.chart) {
                var series = new wijmo.chart.Series();
                series.itemsSource = item.chartData;
                series.name = item.symbol;
                series.style = { stroke: item.color };
                chart.series.push(series);
                //console.log('added series with ' + item.chartData.length + ' items.');
            }
        }

        // ready to update chart
        chart.endUpdate();
    }
});
