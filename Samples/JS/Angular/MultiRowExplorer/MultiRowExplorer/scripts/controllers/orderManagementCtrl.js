'use strict';

angular.module('app').controller('orderManagementCtrl', function ($scope, dataService, exportService) {
    $scope.ctx = {
        multiRow: null,
        data: new wijmo.collections.CollectionView(dataService.getOrders(20)),
        layoutDef: generateLayoutDef(),
        pageIndex: -1,
        pageCount: -1
    };
    $scope.ctx.data.pageSize = 5;

    $scope.$watch('fields', function () {
        if ($scope.ctx.multiRow) {
            $scope.ctx.multiRow.layoutDefinition = generateLayoutDef();
        }
    });

    $scope.$watch('ctx.multiRow', function () {
        var multiRow = $scope.ctx.multiRow;
        if (multiRow) {
            var cv = multiRow.collectionView;
            $scope.ctx.pageIndex = cv.pageIndex;
            $scope.ctx.pageCount = cv.pageCount;
            cv.pageChanged.addHandler(function () {
                $scope.ctx.pageIndex = cv.pageIndex;
            });
            cv.collectionChanged.addHandler(function (sender, e) {
                var unitPrice, quantity;
                if (e.action === wijmo.collections.NotifyCollectionChangedAction.Change && !!e.item) {
                    unitPrice = +e.item.unitPrice;
                    quantity = +e.item.quantity;
                    if (!isNaN(unitPrice) && !isNaN(quantity)) {
                        e.item.amount = unitPrice * quantity;
                    }
                }
            });
        }
    });

    $scope.moveToFirstPage = function () {
        $scope.ctx.data.moveToFirstPage();
    }

    $scope.moveToLastPage = function () {
        $scope.ctx.data.moveToLastPage();
    }

    $scope.moveToPreviousPage = function () {
        $scope.ctx.data.moveToPreviousPage();
    }

    $scope.moveToNextPage = function () {
        $scope.ctx.data.moveToNextPage();
    }

    // Export the records of current page to xlsx file.
    $scope.exportToExcel = function () {
        exportService.exportXlsx($scope.ctx.multiRow, 'OrderManagement.xlsx');
    }

    // Save the records of current page to PDF file.
    $scope.exportToPDF = function () {
        var isJapanese = $scope.$parent.culture === 'ja';

        exportService.exportPdf($scope.ctx.multiRow, 'OrderManagement.pdf', isJapanese, null);
    }
    // Generate the layout definition for the MultiRow control.
    function generateLayoutDef() {
        var warehouseDataMap = $scope.$parent.buildDataMap($scope.$parent.fields.warehouses.split(','));

        return [
            {
                colspan: 3,
                cells: [
                    { binding: 'orderId', header: $scope.$parent.fields.orderManagementFields.orderId, width: 80 },
                    { binding: 'productId', header: $scope.$parent.fields.orderManagementFields.productId, width: 80 },
                    { binding: 'productName', header: $scope.$parent.fields.orderManagementFields.productName, width: 180 },
                    { binding: 'specialNote', header: $scope.$parent.fields.orderManagementFields.specialNote, align: 'center', colspan: 3 }
                ]
            },
            {
                colspan: 3,
                cells: [
                    { binding: 'quantity', header: $scope.$parent.fields.orderManagementFields.quantity, width: 80 },
                    { binding: 'unitPrice', header: $scope.$parent.fields.orderManagementFields.unitPrice, width: 80, format: 'c2' },
                    { binding: 'amount', header: $scope.$parent.fields.orderManagementFields.amount, isReadOnly: true, width: 80, format: 'c2' },
                    { binding: 'shippingWarehouse', header: $scope.$parent.fields.orderManagementFields.shippingWarehouse, dataMap: warehouseDataMap, align: 'center', colspan: 2 },
                    { binding: 'onHold', header: $scope.$parent.fields.orderManagementFields.onHold },
                ]
            },
            {
                cells: [
                    { binding: 'orderDate', header: $scope.$parent.fields.orderManagementFields.orderDate, format: 'yyyy/MM/dd' },
                    { binding: 'deliveryDate', header: $scope.$parent.fields.orderManagementFields.deliveryDate, format: 'yyyy/MM/dd' }
                ]
            }
        ];
    }
});