'use strict';

var app = angular.module('app');

// app controller: load OData service tables and expose them as collection views
app.controller('appCtrl', function appCtrl($scope, $location) {

    // expose current view name to scope
    $scope.currentView = function () {
        return $location.path().toLowerCase();
    };

    // create an ODataCollectionView for each table in the database
    // NOTE: the url for the OData service used in this sample is defined 
    // in the WebApiConfig.cs file.
    var serviceUrl = 'MyNorthWind';

    // Categories table
    $scope.cvCat = new wijmo.odata.ODataCollectionView(serviceUrl, 'Categories', {
        keys: ['Category_ID'],
        fields: ['Category_ID', 'Category_Name'],
        currentChanged: function () { // show products for current category
            $scope.cvPrd.refresh();
            $scope.$apply();
        },
        loaded: function () { // update scope
            $scope.$apply();
        }
    });

    // Products table
    $scope.cvPrd = new wijmo.odata.ODataCollectionView(serviceUrl, 'Products', {
        keys: ['Product_ID'],
        dataTypes: {
            Unit_Price: wijmo.DataType.Number
        },
        filterOnServer: false,
        filter: function (item) { // show products for current category
            var cat = $scope.cvCat.currentItem;
            return cat && item.Category_ID == cat.Category_ID;
        },
        newItemCreator: function () { // initialize new products based on current category
        	return {
        		Category_ID: $scope.cvCat.currentItem.Category_ID,
				Product_Name: '',
				Discontinued: false
        	};
        },
        loaded: function (s, e) {

            // create data map the *first* time the data is loaded
            // subsequent loads might contain only individual pages so they 
            // would create incomplete data maps
            if (!$scope.mapPrd) {
                $scope.mapPrd = new wijmo.grid.DataMap(s.sourceCollection, 'Product_ID', 'Product_Name');
            }

            // update scope
            $scope.$apply();
        }
    });

    // Customers table
    $scope.cvCst = new wijmo.odata.ODataCollectionView(serviceUrl, 'Customers', {
        keys: ['Customer_ID'],
        fields: ['Customer_ID', 'Company_Name'],
        currentChanged: function () { // show orders for current customer
            $scope.cvOrd.refresh();
            $scope.$apply();
        },
        loaded: function () { // update scope
            $scope.$apply();
        }
    });

    // Employees table
    $scope.cvEmp = new wijmo.odata.ODataCollectionView(serviceUrl, 'Employees', {
        keys: ['Employee_ID'],
        loaded: function (s, e) { // create data map, update scope
            if (!$scope.mapEmp) {
                $scope.mapEmp = new wijmo.grid.DataMap(s.sourceCollection, 'Employee_ID', 'Last_Name');
            }
            $scope.$apply();
        },
        newItemCreator: function () { // initialize new products based on current category
        	return {
        		First_Name: '',
        		Last_Name: ''
        	};
        }
    });

    // Suppliers table
    $scope.cvSup = new wijmo.odata.ODataCollectionView(serviceUrl, 'Suppliers', {
        keys: ['Supplier_ID'],
        loaded: function (s, e) { // create data map, update scope
            if (!$scope.mapSup) {
                $scope.mapSup = new wijmo.grid.DataMap(s.sourceCollection, 'Supplier_ID', 'Company_Name');
            }
            $scope.$apply();
        }
    });

    // Shippers table
    $scope.cvShp = new wijmo.odata.ODataCollectionView(serviceUrl, 'Shippers', {
        keys: ['Shipper_ID'],
        loaded: function (s, e) { // create data map, update scope
            if (!$scope.mapShp) {
                $scope.mapShp = new wijmo.grid.DataMap(s.sourceCollection, 'Shipper_ID', 'Company_Name');
            }
            $scope.$apply();
        }
    });

    // Orders table
    $scope.cvOrd = new wijmo.odata.ODataCollectionView(serviceUrl, 'Orders', {
        keys: ['Order_ID'],
        dataTypes: {
            Order_Date: wijmo.DataType.Date,
            Required_Date: wijmo.DataType.Date,
            Shipped_Date: wijmo.DataType.Date,
            Freight: wijmo.DataType.Number
        },
        filterOnServer: false,
        filter: function (item) { // show orders for selected customer
            var cst = $scope.cvCst.currentItem;
            return cst && item.Customer_ID == cst.Customer_ID;
        },
        currentChanged: function () { // show details for current order
            getOrderDetail();
        },
        collectionChanged: function () { // show details for current order
            getOrderDetail();
        },
        newItemCreator: function () { // initialize new Order based on current customer
            return {
                Order_ID: getNewId($scope.cvOrd, 'Order_ID'),
                Customer_ID: $scope.cvCst.currentItem.Customer_ID
            };
        },
        loaded: function () { // update scope
            $scope.$apply();
        }
    });

    // Get the order details for current selected order.
    function getOrderDetail() {
        if (!$scope.cvOrd.currentItem) {
            return;
        }
        var orderID = $scope.cvOrd.currentItem.Order_ID;
        if (orderID) {
            $scope.cvDtl = new wijmo.odata.ODataCollectionView(serviceUrl, 'Order_Details', {
                keys: ['Order_ID', 'Product_ID'],
                dataTypes: {
                    Unit_Price: wijmo.DataType.Number
                },
                filterOnServer: false,
                filter: function (item) {
                    return item.Order_ID == orderID
                },
                newItemCreator: function () { // initialize new OrderDetail based on current order
                	return {
                		Order_ID: $scope.cvOrd.currentItem.Order_ID,
                		Product_ID: 1
                	};
                }
            });
        }
    }

    // get new ID for an item by adding one to the maximum ID present in the
    // source (unfiltered) collection
    function getNewId(view, idField) {
        var items = view.sourceCollection;
        return items.length > 0 ? wijmo.getAggregate(wijmo.Aggregate.Max, view.sourceCollection, idField) + 1 : 0;
    }
});