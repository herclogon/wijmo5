'use strict';

angular.module('app').controller('purchaseSlipCtrl', function ($scope, dataService, exportService) {
    $scope.ctx = {
        multiRow: null,
        footer: null,
        data: dataService.getPurchaseSlip(),
        layoutDef: generateLayoutDef()
    }

    $scope.$watch('fields', function () {
        if ($scope.ctx.multiRow) {
            $scope.ctx.multiRow.layoutDefinition = generateLayoutDef();
        }
        if ($scope.ctx.footer) {
            $scope.ctx.footer.setCellData(0, 3, $scope.$parent.fields.summary);
            $scope.ctx.footer.setCellData(0, 6, $scope.$parent.fields.amountSummary);
            updateSummary($scope.ctx.multiRow.collectionView);
        }
    });

    $scope.$watch('ctx.multiRow', function () {
        var multiRow = $scope.ctx.multiRow;
        if (multiRow) {
            var cv = multiRow.collectionView;
            cv.collectionChanged.addHandler(function (sender, e) {
                var quantity, unitCost;
                if (e.action === wijmo.collections.NotifyCollectionChangedAction.Change && !!e.item) {
                    quantity = +e.item.quantity;
                    unitCost = +e.item.unitCost;
                    if (!isNaN(quantity) && !isNaN(unitCost)) {
                        e.item.cost = quantity * unitCost;
                        e.item.price = e.item.cost * 1.35;
                        updateSummary(cv);
                    }
                }
            });
            multiRow._root.style.overflowX = 'hidden';
        }
    });

    $scope.$watch('ctx.footer', function () {
        var footer = $scope.ctx.footer,
            multiRow = $scope.ctx.multiRow;
        if (footer && multiRow) {
            var cv = multiRow.collectionView;
            footer.columnLayout = multiRow.columnLayout;
            for (var i = 0; i < footer.columns.length; i++) {
                footer.columns[i].isReadOnly = true;
                footer.columns[i].cssClass = 'summary-footer';
                if (i === 3 || i === 6) {
                    footer.columns[i].cssClass += ' summary-footer-title';
                }
            }
            footer.columns[4].align = 'right';
            footer.rows.push(new wijmo.grid.Row());
            footer.columnHeaders.rows.clear();
            footer.setCellData(0, 3, $scope.$parent.fields.summary);
            footer.setCellData(0, 6, $scope.$parent.fields.amountSummary);
            updateSummary(cv);
            footer.scrollPositionChanged.addHandler(function () {
                var multiRow = $scope.ctx.multiRow;
                if (multiRow) {
                    multiRow.scrollPosition = footer.scrollPosition;
                }
            })
        }
    });

    // Export the records of current page to xlsx file.
    $scope.exportToExcel = function () {
        var mainWorkbook = wijmo.grid.xlsx.FlexGridXlsxConverter.save($scope.ctx.multiRow),
            footerWOrkbook = wijmo.grid.xlsx.FlexGridXlsxConverter.save($scope.ctx.footer);

        mainWorkbook.sheets[0].rows.push(footerWOrkbook.sheets[0].rows[0]);
        mainWorkbook.save('PurchaseSlip.xlsx');
    }

    // Save the records of current page to PDF file.
    $scope.exportToPDF = function () {
        var isJapanese = $scope.$parent.culture === 'ja';

        mergeFooter();
        exportService.exportPdf($scope.ctx.multiRow, 'PurchaseSlip.pdf', isJapanese, null);
        $scope.ctx.multiRow.rows.pop();
    }

    // Generate the layout definition for the MultiRow control.
    function generateLayoutDef() {
        var caseDataMap = $scope.$parent.buildDataMap($scope.$parent.fields.cases.split(','));

        return [
            {
                cells: [
                    { binding: 'productName', header: $scope.$parent.fields.purchaseSlipFields.productName, align: 'center', width: 200 }
                ]
            },
            {
                cells: [
                    { binding: 'productId', header: $scope.$parent.fields.purchaseSlipFields.productId, width: 90 }
                ]
            },
            {
                cells: [
                    { binding: 'color', header: $scope.$parent.fields.purchaseSlipFields.color, align: 'center' },
                    { binding: 'packageUnit', header: $scope.$parent.fields.purchaseSlipFields.packageUnit, align: 'center' }
                ]
            },
            {
                cells: [
                    { binding: 'size', header: $scope.$parent.fields.purchaseSlipFields.size, width: 80 },
                    { binding: 'case', header: $scope.$parent.fields.purchaseSlipFields.case, dataMap: caseDataMap, width: 80 }
                ]
            },
            {
                cells: [
                    { binding: 'quantity', header: $scope.$parent.fields.purchaseSlipFields.quantity, width: 65 }
                ]
            },
            {
                cells: [
                    { binding: 'deal', header: $scope.$parent.fields.purchaseSlipFields.deal, width: 60 },
                    { binding: 'id', header: $scope.$parent.fields.purchaseSlipFields.id, width: 60 }
                ]
            },
            {
                cells: [
                    { binding: 'unitCost', header: $scope.$parent.fields.purchaseSlipFields.unitCost, width: 130, format: 'c2' }
                ]
            },
            {
                cells: [
                    { binding: 'cost', header: $scope.$parent.fields.purchaseSlipFields.cost, width: 80, format: 'c2', isReadOnly: true }
                ]
            },
            {
                cells: [
                    { binding: 'price', header: $scope.$parent.fields.purchaseSlipFields.price, width: 80, format: 'c2', isReadOnly: true }
                ]
            },
            {
                cells: [
                    { binding: 'remarks', header: $scope.$parent.fields.purchaseSlipFields.remarks, align: 'center' }
                ]
            }
        ];
    }

    // Update the summary info for the MultiRow control.
    function updateSummary(cv) {
        var footer = $scope.ctx.footer,
            qtySum = wijmo.getAggregate(wijmo.Aggregate.Sum, cv.items, 'quantity'),
            costSum = wijmo.getAggregate(wijmo.Aggregate.Sum, cv.items, 'cost'),
            priceSum = wijmo.getAggregate(wijmo.Aggregate.Sum, cv.items, 'price');

        footer.setCellData(0, 4, qtySum);
        footer.setCellData(0, 7, wijmo.Globalize.format(costSum, 'c'));
        footer.setCellData(0, 8, wijmo.Globalize.format(priceSum, 'c'));

    }

    // Merge the footer to the multiRow control for exporting pdf.
    function mergeFooter() {
        var multiRow = $scope.ctx.multiRow,
            footer = $scope.ctx.footer,
            rowCnt = multiRow.rows.length,
            newRow = new wijmo.grid.Row();

        newRow.recordIndex = 0;
        multiRow.rows.push(newRow);
        multiRow.setCellData(rowCnt, 3, footer.getCellData(0, 3));
        multiRow.setCellData(rowCnt, 4, footer.getCellData(0, 4));
        multiRow.setCellData(rowCnt, 6, footer.getCellData(0, 6), false);
        multiRow.setCellData(rowCnt, 7, footer.getCellData(0, 7));
        multiRow.setCellData(rowCnt, 8, footer.getCellData(0, 8));
    }
});