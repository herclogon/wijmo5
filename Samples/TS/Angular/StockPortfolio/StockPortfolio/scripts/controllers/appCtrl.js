'use strict';

var app = angular.module('app');

// application controller (single)
app.controller('appCtrl', function appCtrl($scope, $routeParams, $filter, $location) {

    // create portfolio
    var p = new finance.Portfolio();

    $scope.portfolio = p;
    $scope.ctx = {
        chart: null
    };

    // update angular when portfolio items change
    p.itemsChanged.addHandler(function () {
        $scope.$apply('portfolio.items');
    });

    // show positive values in green, negative in red
    $scope.getAmountColor = function (amount) {
        return amount < -0.01 ? '#9F3912' : amount > 0.01 ? '#217648' : '#b0b0b0';
    };

    // update chart selection to match portfolio selection
    function currentChanged() {
        if ($scope.ctx.chart && p) {
            var symbol = p.view.currentItem ? p.view.currentItem.symbol : null,
                selSeries = null,
                chart = $scope.ctx.chart;
            for (var i = 0; i < chart.series.length; i++) {
                if (chart.series[i].name == symbol) {
                    selSeries = chart.series[i];
                    break;
                }
            }
            chart.selection = selSeries;
        }
    }
    p.view.currentChanged.addHandler(currentChanged);

    // selection changed event handler for FlexChart
    $scope.selectionChanged = function (sender, args) {
        var chart = sender,
            symbol = chart.selection ? chart.selection.name : null,
            selSeries = null;
        for (var i = 0; i < p.view.items.length; i++) {
            if (p.view.items[i].symbol == symbol) {
                p.view.moveCurrentToPosition(i);
                $scope.$apply('portfolio.view.currentItem');
                break;
            }
        }
    };

    // search for companies to fill auto complete control
    var cache = {};
    $scope.searchCompany = function(query, max, callback) {

        // try getting the result from the cache
        var result = cache[query],
            protocol = "https";
        if (result) {
            //console.log('found "' + query + '" in cache, ' + result.length + ' items.');
            callback(result);
            return;
        }

        // IE9 fix
        if (navigator.appVersion.indexOf("MSIE 9.") != -1) {
            $.support.cors = true;
            protocol = "http";
        }

        // not in cache, search Quandl's "Wiki EOD Stock Prices"
        $.get(protocol + '://www.quandl.com/api/v2/datasets.json',
            {
                auth_token: "rX6NsszGKZp32RUbA7SR",
                query: query.trim(),
                page: 1,
                per_page: 20,
                source_code: 'WIKI'
            }).done(function (result) {
                // parse result
                var lines = result.docs,
                    matches = [];
                //console.log('got result with ' + lines.length + ' matches.');
                for (var i = 0; i < lines.length; i++) {
                    var item = lines[i];
                    var symbol = item.code,
                        name = item.name.substring(0, item.name.indexOf('(')),
                        symbolName = '<b>' + symbol + '</b>: ' + name;
                    matches.push({ symbol: symbol, name: name, symbolName: symbolName });
                }

                // store result in cache
                cache[query] = matches;

                // and return the result
                callback(matches);
            }).fail(function (error) {
                console.log('error: ' + error.responseText);
                cache[query] = null; // << no point in trying this query again
                callback(null);
            });
    }
});
