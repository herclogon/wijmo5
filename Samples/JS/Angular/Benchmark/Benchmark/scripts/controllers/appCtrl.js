'use strict';

// declare app module
var app = angular.module('app');

// app controller provides data
app.controller('appCtrl', function appCtrl($scope, $filter) {

    // data for the controls
    $scope.itemCount = 5000;
    $scope.data = getData($scope.itemCount);
    $scope.chartData = getData(Math.min(10000, $scope.itemCount));
    $scope.$watch('itemCount', function () {
        $scope.data = getData($scope.itemCount);
        $scope.chartData = getData(Math.min(10000, $scope.itemCount));
    });

    // ** slick-grid
    $scope.slickGridOptions = {
        editable: true,
        enableCellNavigation: true,
        asyncEditorLoading: false,
        autoEdit: true
    }
    $scope.slickGridColumns = [
        { id: 'id', name: 'ID', field: 'id', width: 50, cssClass: 'text-right', sortable: true },
        { id: 'date', name: 'Date', field: 'date', width: 100, formatter: sgFormatter, sortable: true },
        { id: 'country', name: 'Country', field: 'country', width: 100, sortable: true },
        { id: 'product', name: 'Product', field: 'product', width: 140, sortable: true },
        { id: 'color', name: 'Color', field: 'color', width: 140, sortable: true },
        { id: 'amount', name: 'Amount', field: 'amount', width: 100, formatter: sgFormatter, cssClass: 'text-right', sortable: true },
        { id: 'active', name: 'Active', field: 'active', sortable: true }
    ];
    function sgFormatter(row, cell, value, columnDef, dataContext) {
        if (angular.isDate(value)) {
            return $filter('date')(value);
        }
        if (angular.isNumber(value)) {
            return $filter('currency')(value, 2);
        }
        return value;
    }

    // ** kendo grid
    $scope.kendoGridColumns = [
        { field: 'id', width: 50 },
        { field: 'date', width: 100, template: '#= kendo.toString(date,\'dd-MMM-yy\') #' },
        { field: 'country', width: 100 },
        { field: 'product', width: 140 },
        { field: 'color', width: 140 },
        { field: 'amount', width: 100, format: '{0:c}', attributes: { 'class': 'text-right' } },
        { field: 'active', width: 60 }
    ];

    // ** igGrid
    $scope.igGridOptions = {
        columns: [
            { headerText: 'ID', key: 'id', dataType: 'number' },
            { headerText: 'Date', key: 'date', dataType: 'date' },
            { headerText: 'Country', key: 'country', dataType: 'string' },
            { headerText: 'Product', key: 'product', dataType: 'string' },
            { headerText: 'Color', key: 'color', dataType: 'string' },
            { headerText: 'Amount', key: 'amount', dataType: 'number' },
            { headerText: 'Active', key: 'active', dataType: 'bool' }
        ],
        autoGenerateColumns: false,
        rowVirtualization: true,
        width: 750,
        height: 450
    }

    // ** ng-grid
    $scope.gridOptions = {
        data: 'data',
        enableColumnResize: true,       // Enable or disable resizing of columns
        enableColumnReordering: true,   // Enable or disable reordering of columns
        enableSorting: true,
        enableCellSelection: true,
        columnDefs: [
            { field: 'id', displayName: 'ID', width: 50, cellClass: 'text-right', enableCellEdit: true },
            { field: 'date', displayName: 'Date', cellFilter: 'date', width: 100, enableCellEdit: true },
            { field: 'country', displayName: 'Country', width: 100, enableCellEdit: true },
            { field: 'product', displayName: 'Product', width: 140, enableCellEdit: true },
            { field: 'color', displayName: 'Color', width: 140, enableCellEdit: true },
            { field: 'amount', displayName: 'Amount', cellFilter: 'currency', width: 100, cellClass: 'text-right', enableCellEdit: true },
            { field: 'active', displayName: 'Active', width: 50, enableCellEdit: true },
        ]
    };

    
    // ** UI-Grid
    $scope.uiGridOptions = {
        data: 'data',
        enableColumnResize: true,       // Enable or disable resizing of columns
        enableColumnReordering: true,   // Enable or disable reordering of columns
        enableFiltering: true,
        enableSorting: true,
        enableCellSelection: true,
        columnDefs: [
            { field: 'id', displayName: 'ID', width: 50, cellClass: 'text-right', enableCellEdit: true },
            { field: 'date', displayName: 'Date', cellFilter: 'date', width: 100, enableCellEdit: true },
            { field: 'country', displayName: 'Country', width: 100, enableCellEdit: true },
            { field: 'product', displayName: 'Product', width: 140, enableCellEdit: true },
            { field: 'color', displayName: 'Color', width: 140, enableCellEdit: true },
            { field: 'amount', displayName: 'Amount', cellFilter: 'currency', width: 100, cellClass: 'text-right', enableCellEdit: true },
            { field: 'active', displayName: 'Active', width: 50, enableCellEdit: true },
        ]
    };

    // create some random data
    function getData(count) {
        var data = [];
        var countries = ['US', 'Germany', 'UK', 'Japan', 'Italy'];
        var products = ['Widget', 'Gadget', 'Doohickey'];
        var colors = ['Black', 'White', 'Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Brown'];
        var dt = new Date();
        for (var i = 0; i < count; i++) {

            // create a new item
            var item = {
                id: i,
                date: new Date(dt.getFullYear(), i % 12, 1),
                country: countries[Math.floor(Math.random() * countries.length)],
                product: products[Math.floor(Math.random() * products.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                amount: 1000 + Math.random() * 10000,
                active: i % 6 != 0
            };

            // binding to null values
            if ((i+1) % 10 == 0) {
                item.date = null;
                item.amount = null;
                item.active = null;
            }

            // add new item to list
            data.push(item);
        }
        return data;
    }

    // start benchmarking this view
    $scope.benchmark = {};
    var viewName = null;
    var startTime = null;
    var docChangedTimeout = null;
    $scope.benchmarkView = function (name) {
        startTime = new Date();
        viewName = name;
    }
    document.addEventListener('DOMSubtreeModified', function () {
        if (viewName) {
            if (docChangedTimeout) clearTimeout(docChangedTimeout);
            docChangedTimeout = setTimeout(function () {

                // measure elapsed time when DOM stops changing for a while
                var endTime = new Date();
                var elapsed = (endTime.getTime() - startTime.getTime()) / 1000;
                //console.log('done loading ' + viewName + ': ' + elapsed.toFixed(2) + ' seconds');

                // save/update elapsed time for this view
                $scope.benchmark[viewName] = elapsed.toFixed(1) + ' s';
                if (!$scope.$$phase) {
                    $scope.$apply('benchmark');
                }
                viewName = null;
            }, 250);
        }
    });
});
