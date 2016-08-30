'use strict';

// get reference to the app
var app = angular.module('app');

// define the app's single controller
app.controller('appCtrl', function ($scope, $location) {

    // load data for reports
    var url = 'http://services.odata.org/V4/Northwind/Northwind.svc';
    $scope.products = new wijmo.odata.ODataCollectionView(url, 'Products', {
        groupDescriptions: [
            new wijmo.collections.PropertyGroupDescription('ProductName',
                function (item, propName) {
                    var value = item[propName];
                    return value[0].toUpperCase();
                }
            )
        ],
        sortDescriptions: ['ProductName'],
        loaded: function (s, e) {
            viewLoaded();
        }
    });
    $scope.categories = new wijmo.odata.ODataCollectionView(url, 'Categories', {
        fields: ['CategoryID', 'CategoryName', 'Description'],
        sortDescriptions: ['CategoryName'],
        loaded: function (s, e) {
            viewLoaded();
        }
    });
    $scope.employees = new wijmo.odata.ODataCollectionView(url, 'Employees', {
        fields: ['EmployeeID', 'LastName', 'FirstName', 'Title', 'TitleOfCourtesy', 'BirthDate', 'HireDate', 'Address', 'City', 'Region', 'PostalCode', 'Country', 'HomePhone', 'Extension', 'Notes', 'ReportsTo'],
        groupDescriptions: ['Country', 'City'],
        sortDescriptions: ['Country', 'City'],
        loaded: function (s, e) {
            viewLoaded();
        }
    });
    $scope.customers = new wijmo.odata.ODataCollectionView(url, 'Customers', {
        sortDescriptions: ['CompanyName'],
        loaded: function (s, e) {
            viewLoaded();
        }
    });
    $scope.productSales = new wijmo.odata.ODataCollectionView(url, 'Product_Sales_for_1997', {
        groupDescriptions: ['CategoryName'],
        sortDescriptions: ['CategoryName', 'ProductName'],
        loaded: function (s, e) {
            viewLoaded();
        }
    });
    $scope.minInvoiceAmount = 2000;
    $scope.invoices = new wijmo.odata.ODataCollectionView(url, 'Invoices', {
        groupDescriptions: ['Country', 'Salesperson'],
        sortDescriptions: [
            new wijmo.collections.SortDescription('Country', true),
            new wijmo.collections.SortDescription('Salesperson', true),
            new wijmo.collections.SortDescription('ExtendedPrice', false)
        ],
        filterDefinition: 'ExtendedPrice ge ' + $scope.minInvoiceAmount,
        loaded: function (s, e) {
            viewLoaded();
        }
    });

    // update scope after loading each view
    function viewLoaded () {
        $scope.viewsLoaded = ($scope.viewsLoaded || 0) + 1;
        $scope.$apply();
    }

    // get an element in a CollectionView by looking up a property value
    $scope.find = function (view, prop, val) {
        for (var i = 0; i < view.items.length; i++) {
            var item = view.items[i];
            if (item[prop] == val) {
                return item;
            }
        }
        return null;
    }

    // get an array of elements from a CollectionView by looking up a property value
    $scope.select = function (view, prop, val) {
        var arr = [];
        for (var i = 0; i < view.items.length; i++) {
            var item = view.items[i];
            if (item[prop] == val) {
                arr.push(item);
            }
        }
        return arr;
    }

    // images from:
    // http://cdn.theatlantic.com/assets/media/img/posts/2014/08/
    $scope.images = [
        'burns/512448cb3.gif',
        'agnes/0c8adf467.png',
        'skinner/58d3283e7.png',
        'bob/5d7451cde.png',
        'flanders/db01ccc49.jpg',
        'lovejoy/5ec99ea6a.jpg',
        'apu/41fa40f90.png',
        'barney/f3b7b1de2.png',
        'luann/81d97cbd4.png',
        'troy/d5aa8e02c.jpg',
        'edna/2bade433d.jpg',
        'chalmers/89d0c32c6.jpg',
        'frink/7833a6b34.jpg',
        'hibbert/f68f3f3c9.gif',
        'sea/0e8a8aa69.gif',
        'stu/a9c5e72a7.png',
        'nick/3b85ac6a0.jpg',
        'duff/e3246663c.jpg',
        'sarc/c61411e1a.png'
    ];

    // today's date
    $scope.today = new Date();

    // report list
    $scope.reports = new wijmo.collections.CollectionView([
        { header: 'Alphabetical List of Products', name: 'alphabeticalListOfProducts' },
        { header: 'Customer Labels', name: 'customerLabels' },
        { header: 'Employees', name: 'employees' },
        { header: 'Product Catalog', name: 'productCatalog' },
        { header: 'Products by Category', name: 'productsByCategory' },
        { header: 'Sales by Category', name: 'salesByCategory' },
        { header: 'Sales Chart', name: 'salesChart' },
        { header: 'Employee Sales By Country', name: 'employeeSalesByCountry' }
    ], {
        currentChanged: function (s, e) {
            $location.url(s.currentItem.name);
        }
    });

    // zoom levels
    $scope.zoomLevels = new wijmo.collections.CollectionView([
        { header: '25%', value: 0.25 },
        { header: '50%', value: 0.5 },
        { header: '75%', value: 0.75 },
        { header: '100%', value: 1 },
        { header: '125%', value: 1.25 }
    ], {
        currentChanged: function (s, e) {
            var view = document.querySelector('.zoom');
            if (view) {
                view.style.zoom = s.currentItem.value;
            }
        }
    });
    $scope.zoomLevels.moveCurrentToPosition(2);

    // commands
    $scope.print = function () {

        // create document
        var doc = new wijmo.PrintDocument({
            title: $scope.reports.currentItem.header
        });

        // add content to it
        var view = document.querySelector('[ng-view]')
        for (var i = 0; i < view.children.length; i++) {
            doc.append(view.children[i]);
        }

        // and print it
        doc.print();
    }
});
