'use strict';

/* Controllers */
var app = angular.module('app');

app.controller('appCtrl', function appCtrl($scope, $sce) {

    // expose products and chart data
    $scope.products = [];
    $scope.chartType = 'Column';

    // expose this and previous quarter
    $scope.qStart = new Date().getFullYear() + '-Q1';
    $scope.qThis = product.prototype.getQuarter(true);
    $scope.qPrev = product.prototype.getQuarter(false);

    // prepare to load the data
    $scope.error = null;

    // set current chart type
    $scope.setChartType = function (chartType) {
        $scope.chartType = chartType;
    }

    // get sparklines for a list of numeric values
    $scope.getSparklines = function (data, width, height) {

        // create line elements
        var min = Math.min.apply(Math, data),
            max = Math.max.apply(Math, data),
            x1 = 0,
            y1 = scaleY(data[0], min, max),
            x2, y2;
        for (var i = 1; i < data.length; i++) {
            x2 = Math.round((i) / (data.length - 1) * 100);
            y2 = scaleY(data[i], min, max);
            svg += '<line x1=' + x1 + '% y1=' + y1 + '% x2=' + x2 + '% y2=' + y2 + '% />';
            x1 = x2;
            y1 = y2;
        }

        // wrap it up in an SVG element
        var svg = encloseSvg(svg, width, height);

        // and ensure this is trusted HTML
        return $sce.trustAsHtml(svg);
    }
    function scaleY(value, min, max) {
        return 100 - Math.round((value - min) / (max - min) * 100);
    }
    function encloseSvg(svg, width, height) {
        if (!height) height = '100%';
        if (!width) width = '100%';
        return '<div style="width:' + width + ';height:' + height + ';box-sizing:border-box;padding:4px">' +
            '<svg width="100%" height="100%" style="stroke:currentColor;stroke-width:2;opacity:.6;overflow:visible"><g>' +
            svg +
            '</g></svg></div>';
    }

    // update current product when navigating
    $scope.$on('$locationChangeStart', function (e, nextLoc, currLoc) {
        selectProduct(nextLoc);
    });

    // select current product based on id parameter in URL
    function selectProduct(url) {
        var match = url.match(/\/([0-9]+)$/);
        if (match) {
            var id = parseInt(match[1]);
            for (var i = 0; i < $scope.products.length; i++) {
                var p = $scope.products[i];
                if (p.id == id) {
                    $scope.product = p;
                    break;
                }
            }
        }
    }

    // load data
    getData(function (data) {

        // expose start year
        $scope.qStart = data.startYear + '-Q1';

        // get products, chart data
        for (var i = 0; i < data.products.length; i++) {
            var p = new product(data.products[i]);
            $scope.products.push(p);
        }

        // update chart data (sales per product in this quarter)
        $scope.chartData = [];
        for (var i = 1; i < $scope.products.length; i++) {
            var p = $scope.products[i];
            $scope.chartData.push({ product: p.name, sales: p.sales.qThis });
        }

        // update current product
        selectProduct(location.href);
    });

    // get data from cache or from server
    function getData(success) {

        // progress indicator on
        $scope.loading = true;

        // get data from server
        $.getJSON('GetData.ashx', function (data) {
            success(data);
        })
        .fail(function (error) {
            $scope.error = 'Error downloading data from the server';
        })
        .always(function () {
            $scope.loading = false;
            $scope.$apply();
        });
    }
});
