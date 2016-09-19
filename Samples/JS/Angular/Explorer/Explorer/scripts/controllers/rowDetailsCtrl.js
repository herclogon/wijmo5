'use strict';

// get reference to app module
var app = angular.module('app');

// controller
app.controller('rowDetailsCtrl', function ($scope, $http, $interval) {

    // initialize detail visibility mode
    $scope.detailMode = wijmo.grid.detail.DetailVisibilityMode.ExpandSingle;

    // initialize detail row FlexGrid with Northwind data, DetailProvider version
    // this is used to show how to use the FlexGridDetailProvider without a directive
    $scope.initDetailProvider = function (s, e) {
        var dp = new wijmo.grid.detail.FlexGridDetailProvider(s);
        dp.maxHeight = 250;

        // create detail cells for a given row
        dp.createDetailCell = function (row) {
            var cell = document.createElement('div');
            s.hostElement.appendChild(cell);
            var detailGrid = new wijmo.grid.FlexGrid(cell, {
                headersVisibility: wijmo.grid.HeadersVisibility.Column,
                autoGenerateColumns: false,
                itemsSource: $scope.getProducts(row.dataItem.CategoryID),
                columns: [
                    { header: 'ID', binding: 'ProductID' },
                    { header: 'Name', binding: 'ProductName' },
                    { header: 'Qty/Unit', binding: 'QuantityPerUnit' },
                    { header: 'Unit Price', binding: 'UnitPrice' },
                    { header: 'Discontinued', binding: 'Discontinued' }
                ]
            });
            cell.parentElement.removeChild(cell);
            return cell;
        };

        // remove details from items with odd CategoryID
        dp.rowHasDetail = function (row) {
            return row.dataItem.CategoryID % 2 == 0;
        };
    }

    // ** get NorthWind data to demonstrate

    // get products for a given category
    var products = {};
    $scope.getProducts = function (categoryID) {
        var view = products[categoryID];
        if (!view) {
            view = new wijmo.collections.CollectionView($scope.products.sourceCollection);
            view.filter = function (item) {
                return item.CategoryID == categoryID;
            }
            products[categoryID] = view;
        }
        return view;
    }

    // get categories and products from server
    $scope.categories = new wijmo.collections.CollectionView();
    getData($scope.categories, 'Categories');
    $scope.products = new wijmo.collections.CollectionView();
    getData($scope.products, 'Products');

    // function to fill a CollectionView with data from an OData source
    function getData(view, url) {

        // build request url
        var serviceBase = 'http://services.odata.org/Northwind/Northwind.svc/';
        url = serviceBase + url;
        url += (url.indexOf('?') < 0) ? '?' : '&' + '$format=json';

        // submit request
        $http.get(url)
        .success(function (data, status, headers, config) {

            // handle this batch
            var items = data.value;
            for (var i = 0; i < items.length; i++) {
                view.sourceCollection.push(items[i]);
            }

            // and go fetch more...
            var next = data['odata.nextLink'];
            if (next) {
                getData(view, next);
            }

            // update scope
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        });
    }

});
