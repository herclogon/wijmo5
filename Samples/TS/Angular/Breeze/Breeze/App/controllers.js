'use strict';

// RouteCtrl - expose app.routes and the current route for the navbar
app.controller('RouteCtrl', function ($scope, $route) {
        $scope.$route = $route;
        $scope.links = app.routes;
});

// HomeCtrl - expose the changed entities in the EntityManager
app.controller('HomeCtrl', ['$scope', function ($scope) {

}]);

// CustomerCtrl - load the customers and configure the grid to display them
app.controller('CustomerCtrl', ['$scope', function ($scope) {

    $scope.flexGrid = null;
    $scope.numberInput = null;
    $scope.customers = new wijmo.data.BreezeCollectionView(app.dataservice.getManager(), app.dataservice.getEntityQuery("Customers"), true, true, true);
    $scope.customer = null;
    $scope.filterText = null;
    $scope.customers.currentChanged.addHandler(function () {
        $scope.customer = $scope.customers.currentItem;
    });

    $scope.customers.collectionChanged.addHandler(function () {
        $scope.customer = $scope.customers.currentItem;
    });

    $scope.customers.querySucceeded.addHandler(function (sender, e) {
        if ($scope.numberInput) {
            $scope.numberInput.max = $scope.customers.pageCount;
        }
        $scope.$apply();
        app.dataservice.querySucceeded(e.data);
    });

    $scope.customers.queryFailed.addHandler(function (sender, e) {
        app.dataservice.queryFailed(e.data.message);
    });

    $scope.customers.saveSucceeded.addHandler(function (sender, e) {
        app.dataservice.saveSucceeded(e.data);
    });

    $scope.customers.saveFailed.addHandler(function (sender, e) {
        app.dataservice.saveFailed(e.data);
    });

    $scope.reset = function (customer) {
        customer.entityAspect.rejectChanges();
        $scope.customers.cancelEdit();
    };

    $scope.update = function (customer) {
        $scope.customers.editItem(customer);
        $scope.customers.commitEdit();
    };

    $scope.$watch('filterText', function (newVal, oldVal) {
        if (newVal !== oldVal) {
            $scope.customers.filterPredicate = app.dataservice.getCompanyNamePredicate(newVal);
        }
    });
}]);

// OrderCtrl - load the orders and configure the grid to display them.
app.controller('OrderCtrl', function ($scope) {

    $scope.orderGrid = null;

    $scope.orders = new wijmo.data.BreezeCollectionView(app.dataservice.getManager(), app.dataservice.getEntityQuery("Orders").take(50), true, true, true);

    $scope.currentOrder = null;

    $scope.orders.currentChanged.addHandler(function () {
        $scope.currentOrder = $scope.orders.currentItem;
    });

    $scope.orders.collectionChanged.addHandler(function () {
        $scope.currentOrder = $scope.orders.currentItem;
    });

    $scope.orders.querySucceeded.addHandler(function (sender, e) {
        $scope.$apply();
        app.dataservice.querySucceeded(e.data);
    });

    $scope.orders.queryFailed.addHandler(function (sender, e) {
        app.dataservice.queryFailed(e.data.message);
    });

    $scope.orders.saveSucceeded.addHandler(function (sender, e) {
        app.dataservice.saveSucceeded(e.data);
    });

    $scope.orders.saveFailed.addHandler(function (sender, e) {
        app.dataservice.saveFailed(e.data);
    });

    $scope.update = function (currentOrder) {
        $scope.orders.editItem(currentOrder);
        $scope.orders.commitEdit();
    };

    $scope.reset = function (currentOrder) {
        currentOrder.entityAspect.rejectChanges();
        $scope.orders.cancelEdit();
    }

    $scope.$watch("orderGrid", function () {
        if ($scope.orderGrid) {
            // store reference to grid
            var grid = $scope.orderGrid,
                tip = new wijmo.Tooltip(),
                rng = null;

            // monitor the mouse over the grid
            grid.addEventListener(grid.hostElement, 'mousemove', function (evt) {
                var ht = grid.hitTest(evt);
                if (!ht.range.equals(rng)) {
                    // new cell selected, show tooltip
                    if (ht.cellType == wijmo.grid.CellType.Cell) {
                        rng = ht.range;
                        var cellElement = document.elementFromPoint(evt.clientX, evt.clientY),
                            cellBounds = wijmo.Rect.fromBoundingRect(cellElement.getBoundingClientRect()),
                            data = wijmo.escapeHtml(grid.getCellData(rng.row, rng.col, true)),
                            tipContent = '<b>' + data + '</b>';
                        if (cellElement.className.indexOf('wj-cell') > -1) {
                            tip.show(grid.hostElement, tipContent, cellBounds);
                        } else {
                            tip.hide(); // cell must be behind scroll bar...
                        }
                    }
                }
            });
            grid.addEventListener(grid.hostElement, 'mouseout', function () {
                tip.hide();
                rng = null;
            });
        }
    });
});
