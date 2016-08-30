'use strict';

var app = angular.module('app');

// app controller: load OData service tables and expose them as collection views
app.controller('appCtrl', function appCtrl($scope, $location) {

    // user authentication
    // https://developers.facebook.com/apps/
    // https://console.developers.google.com/project
    var idFacebook = '1550500778503407';
    var idGoogle = '876000485560-aqe76kkqhkrhplqih8ithbgftmhks3n2.apps.googleusercontent.com';
    $scope.auth = new wijmo.auth.Auth(idFacebook, idGoogle, {
        stateChanged: function (s, e) {
            if (s.user) {
                console.log('logged in: as ' + s.user.email + '(' + s.user.name + ')');
            } else {
                console.log('logged out...');
            }
            if (!$scope.$$phase && !$scope.$root.$$phase) {
                $scope.$apply();
            }
        }
    });

    // handle submits from authentication forms (see partials/Auth/frm*.htm)
    $scope.auth.submit = function (e) {
        var auth = $scope.auth,
            form = auth.form;
        switch (e.target.id) {
            case 'frmlogin':
                auth.logIn(form.mail, form.pw, form.keep, function () {
                    if (!form.error) {
                        auth.frmLogIn.hide();
                    }
                    $scope.$apply();
                });
                break;
            case 'frmcreateaccount':
                auth.createAccount(form.name, form.mail, form.pw, function () {
                    if (!form.error) {
                        auth.frmCreateAccount.hide();
                    }
                    $scope.$apply();
                });
                break;
            case 'frmeditaccount':
                auth.changeAccount(form.pw, form.name, form.newpw, function () {
                    if (!form.error) {
                        auth.frmEditAccount.hide();
                    }
                    $scope.$apply();
                });
                break;
            case 'frmpasswordreset':
                auth.resetPassword(form.mail, function (result) {
                    if (!form.error) {
                        auth.frmPasswordReset.hide();
                    }
                    $scope.$apply();
                });
                break;
            default:
                throw '** call to submit from unknown target.';
        }
    }

    // expose current view name to scope
    $scope.currentView = function () {
        return $location.path().toLowerCase();
    };

    // define data service URL and data types for specific columns
    var serviceUrl = 'Northwind.svc/';

    // create an ODataCollectionView for each table in the database

    // Categories table
    $scope.cvCat = new wijmo.odata.ODataCollectionView(serviceUrl, 'Categories', {
        oDataVersion: 3,
        keys: ['Category_ID'],
        fields: ['Category_ID', 'Category_Name'],
        currentChanged: function () { // show products for current category
            $scope.cvPrd.refresh();
            $scope.$apply();
        },
        loaded: loaded,
        error: error
});

    // Products table
    $scope.cvPrd = new wijmo.odata.ODataCollectionView(serviceUrl, 'Products', {
        oDataVersion: 3,
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
            return { Category_ID: $scope.cvCat.currentItem.Category_ID };
        },
        loaded: loaded,
        error: error
    });

    // Customers table
    $scope.cvCst = new wijmo.odata.ODataCollectionView(serviceUrl, 'Customers', {
        oDataVersion: 3,
        keys: ['Customer_ID'],
        fields: ['Customer_ID', 'Company_Name'], 
        currentChanged: function () { // show orders for current customer
            $scope.cvOrd.refresh();
            $scope.$apply();
        },
        loaded: loaded,
        error: error
    });

    // Employees table
    $scope.cvEmp = new wijmo.odata.ODataCollectionView(serviceUrl, 'Employees', {
        oDataVersion: 3,
        keys: ['Employee_ID'],
        loaded: loaded,
        error: error
    });

    // Suppliers table
    $scope.cvSup = new wijmo.odata.ODataCollectionView(serviceUrl, 'Suppliers', {
        oDataVersion: 3,
        keys: ['Supplier_ID'],
        loaded: loaded,
        error: error
    });

    // Shippers table
    $scope.cvShp = new wijmo.odata.ODataCollectionView(serviceUrl, 'Shippers', {
        oDataVersion: 3,
        keys: ['Shipper_ID'],
        loaded: loaded,
        error: error
    });

    // Orders table
    $scope.cvOrd = new wijmo.odata.ODataCollectionView(serviceUrl, 'Orders', {
        oDataVersion: 3,
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
        loaded: loaded,
        error: error
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
                    return { Order_ID: $scope.cvOrd.currentItem.Order_ID };
                }
            });
        }
    }

    // create data maps to show related items
    $scope.mapPrd = new wijmo.grid.DataMap($scope.cvPrd, 'Product_ID', 'Product_Name');
    $scope.mapEmp = new wijmo.grid.DataMap($scope.cvEmp, 'Employee_ID', 'Last_Name');
    $scope.mapSup = new wijmo.grid.DataMap($scope.cvSup, 'Supplier_ID', 'Company_Name');
    $scope.mapShp = new wijmo.grid.DataMap($scope.cvShp, 'Shipper_ID', 'Company_Name');

    // get new ID for an item by adding one to the maximum ID present in the
    // source (unfiltered) collection
    function getNewId(view, idField) {
        var items = view.sourceCollection;
        return items.length > 0 ? wijmo.getAggregate(wijmo.Aggregate.Max, view.sourceCollection, idField) + 1 : 0;
    }

    // update scope when data is loaded
    function loaded() {
        $scope.$apply();
    }

    // show an error message when errors are detected
    function error(s, e) {
        var msg = 'An error was detected.';
        if (e.request.responseText.indexOf('references to this key still exist') > -1) {
            msg += '\r\nThe changes were canceled because they would violate database integrity rules.';
        }
        alert(msg);
    }
});