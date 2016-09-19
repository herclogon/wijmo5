'use strict';

angular.module('app').controller('ordersSlipCtrl', function ($scope, dataService, exportService) {
    $scope.ctx = {
        multiRow: null,
        data: dataService.generateOrdersSlipData(),
        layoutDef: generateLayoutDef()
    }

    $scope.$watch('fields', function () {
        if ($scope.ctx.multiRow) {
            $scope.ctx.multiRow.layoutDefinition = generateLayoutDef();
        }
    });

    $scope.$watch('ctx.multiRow', function () {
        var multiRow = $scope.ctx.multiRow;
        if (multiRow) {
            var cv = multiRow.collectionView;
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

    // Export the records of current page to xlsx file.
    $scope.exportToExcel = function () {
        exportService.exportXlsx($scope.ctx.multiRow, 'OrdersSlip.xlsx');
    }

    // Save the records of current page to PDF file.
    $scope.exportToPDF = function () {
        var isJapanese = $scope.$parent.culture === 'ja';

        exportService.exportPdf($scope.ctx.multiRow, 'OrdersSlip.pdf', isJapanese, null);
    }

    function generateLayoutDef() {
        return [
            {
                colspan: 3,
                cells: [
                    { binding: 'productId', header: $scope.$parent.fields.ordersSlipFields.productId, width: 90 },
                    { binding: 'categoryId', header: $scope.$parent.fields.ordersSlipFields.categoryId, width: 90 },
                    { binding: 'categoryName', header: $scope.$parent.fields.ordersSlipFields.category, width: 90 },
                    { binding: 'productName', header: $scope.$parent.fields.ordersSlipFields.productName, colspan: 3 }
                ]
            },
            {
                cells: [
                    { binding: 'quantity', header: $scope.$parent.fields.ordersSlipFields.quantity, width: 140 },
                    { binding: 'packageUnit', header: $scope.$parent.fields.ordersSlipFields.packageUnit, width: 140 }
                ]
            },
            {
                cells: [
                    { binding: 'unitPrice', header: $scope.$parent.fields.ordersSlipFields.unitPrice, format: 'c2', width: 80 }
                ]
            },
            {
                cells: [
                    { binding: 'amount', header: $scope.$parent.fields.ordersSlipFields.amount, isReadOnly: true, format: 'c2', width: 70 }
                ]
            },
            {
                cells: [
                    { binding: 'shippingId', header: $scope.$parent.fields.ordersSlipFields.shippingId, width: 100 },
                    { binding: 'discontinued', header: $scope.$parent.fields.ordersSlipFields.discontinued, width: 100 }
                ]
            },
            {
                cells: [
                    { binding: 'remarks', header: $scope.$parent.fields.ordersSlipFields.remarks, width: 280 },
                    { binding: 'description', header: $scope.$parent.fields.ordersSlipFields.description, width: 280 }
                ]
            }
        ];
    }
});