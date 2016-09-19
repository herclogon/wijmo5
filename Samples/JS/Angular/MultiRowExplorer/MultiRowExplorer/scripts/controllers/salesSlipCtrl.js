'use strict';

angular.module('app').controller('salesSlipCtrl', function ($scope, dataService, exportService) {
    $scope.ctx = {
        multiRow: null,
        data: new wijmo.collections.CollectionView(dataService.getSalesSlip(20)),
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
                var unitPrice, profitUnitPrice, quantity;
                if (e.action === wijmo.collections.NotifyCollectionChangedAction.Change && !!e.item) {
                    unitPrice = +e.item.unitPrice;
                    profitUnitPrice = +e.item.profitUnitPrice;
                    quantity = +e.item.quantity;
                    if (!isNaN(quantity)) {
                        if (!isNaN(unitPrice)) {
                            e.item.salesAmount = unitPrice * quantity;
                        }
                        if (!isNaN(profitUnitPrice)) {
                            e.item.totalProfit = profitUnitPrice * quantity;
                        }
                        if (!isNaN(unitPrice) && !isNaN(profitUnitPrice)) {
                            e.item.profitRate = e.item.totalProfit / e.item.salesAmount;
                        }
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
        exportService.exportXlsx($scope.ctx.multiRow, 'SalesSlip.xlsx');
    }

    // Save the records of current page to PDF file.
    $scope.exportToPDF = function () {
        var isJapanese = $scope.$parent.culture === 'ja';

        exportService.exportPdf($scope.ctx.multiRow, 'SalesSlip.pdf', isJapanese, null);
    }
    // Generate the layout definition for the MultiRow control.
    function generateLayoutDef() {
        var warehouseDataMap = $scope.$parent.buildDataMap($scope.$parent.fields.warehouses.split(','));

        return [
            {
                cells: [
                    { binding: 'id', header: $scope.$parent.fields.salesSlipFields.id, width: 60 }
                ]
            },
            {
                colspan: 5,
                cells: [
                    { binding: 'productId', header: $scope.$parent.fields.salesSlipFields.productId, width: 80 },
                    { binding: 'productName', header: $scope.$parent.fields.salesSlipFields.productName, colspan: 3 },
                    { binding: 'marker', header: $scope.$parent.fields.salesSlipFields.marker, align: 'center' },
                    { binding: 'quantity', header: $scope.$parent.fields.salesSlipFields.quantity, width: 80, align: 'right' },
                    { binding: 'unit', header: $scope.$parent.fields.salesSlipFields.unit },
                    { binding: 'unitPrice', header: $scope.$parent.fields.salesSlipFields.unitPrice, format: 'c2', colspan: 2 },
                    { binding: 'salesAmount', header: $scope.$parent.fields.salesSlipFields.salesAmount, format: 'c2', isReadOnly: true },
                    { binding: 'profitUnitPrice', header: $scope.$parent.fields.salesSlipFields.profitUnitPrice, format: 'c2', colspan: 2 },
                    { binding: 'totalProfit', header: $scope.$parent.fields.salesSlipFields.totalProfit, format: 'c2', colspan: 2, isReadOnly: true, cssClass: 'profit-cell' },
                    { binding: 'profitRate', header: $scope.$parent.fields.salesSlipFields.profitRate, format: 'p2', isReadOnly: true, cssClass: 'profit-cell' }
                ]
            }
        ];
    }
});