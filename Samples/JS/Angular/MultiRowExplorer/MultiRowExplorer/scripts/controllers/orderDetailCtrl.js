'use strict';

angular.module('app').controller('orderDetailCtrl', function ($scope, dataService, exportService) {
    $scope.ctx = {
        multiRow: null,
        data: dataService.getOrderDetail(5),
        layoutDef: generateLayoutDef()
    };

    $scope.$watch('fields', function () {
        if ($scope.ctx.multiRow) {
            $scope.ctx.multiRow.layoutDefinition = generateLayoutDef();
        }
    });

    // Export the records of current page to xlsx file.
    $scope.exportToExcel = function () {
        exportService.exportXlsx($scope.ctx.multiRow, 'OrderDetail.xlsx');
    }

    // Save the records of current page to PDF file.
    $scope.exportToPDF = function () {
        var styles = {
            cellStyle: {
                backgroundColor: '#ffffff',
                borderColor: '#c6c6c6'
            },
            altCellStyle: {
                backgroundColor: '#C0FFC0'
            },
            headerCellStyle: {
                backgroundColor: '#eaeaea'
            }
        }, isJapanese = $scope.$parent.culture === 'ja';

        exportService.exportPdf($scope.ctx.multiRow, 'OrderDetail.pdf', isJapanese, styles);
    }

    // Generate the layout definition for the MultiRow control.
    function generateLayoutDef() {
        return [
            {
                colspan: 6,
                cells: [
                  { binding: 'orderId', width: 90, header: $scope.$parent.fields.orderDetailFields.orderId },
                  { binding: 'partId', width: 80, header: $scope.$parent.fields.orderDetailFields.partId },
                  { binding: 'handlingId', width: 100, header: $scope.$parent.fields.orderDetailFields.handlingId },
                  { binding: 'processingStatus', width: 125, header: $scope.$parent.fields.orderDetailFields.processingStatus },
                  { binding: 'purchaseId', width: 100, header: $scope.$parent.fields.orderDetailFields.purchaseId },
                  { binding: 'completed', width: 100, header: $scope.$parent.fields.orderDetailFields.completed },
                  { binding: 'orderDate', width: 90, header: $scope.$parent.fields.orderDetailFields.orderDate },
                  { binding: 'partName', header: $scope.$parent.fields.orderDetailFields.partName, colspan: 5, align: 'center' },
                  { binding: 'company', header: $scope.$parent.fields.orderDetailFields.company, colspan: 3, align: 'center' },
                  { binding: 'person', header: $scope.$parent.fields.orderDetailFields.person, colspan: 2, align: 'center' },
                  { binding: 'accepted', width: 100, header: $scope.$parent.fields.orderDetailFields.accepted }
                ]
            },
            {
                cells: [
                  { binding: 'quantity1', width: 90, header: $scope.$parent.fields.orderDetailFields.quantity1 },
                  { binding: 'quantity2', width: 90, header: $scope.$parent.fields.orderDetailFields.quantity2 },
                  { binding: 'quantity3', width: 90, header: $scope.$parent.fields.orderDetailFields.quantity3 },
                ]
            },
            {
                cells: [
                  { binding: 'unit', width: 60, header: $scope.$parent.fields.orderDetailFields.unit },
                ]
            },
            {
                cells: [
                  { binding: 'deliveryDate', width: 120, header: $scope.$parent.fields.orderDetailFields.deliveryDate, format: 'yyyy/MM/dd' },
                  { binding: 'processingDate', width: 120, header: $scope.$parent.fields.orderDetailFields.processingDate, format: 'yyyy/MM/dd' },
                  { binding: 'shippingDate', width: 120, header: $scope.$parent.fields.orderDetailFields.shippingDate, format: 'yyyy/MM/dd' }
                ]
            },
            {
                cells: [
                  { binding: 'packingRequest', header: $scope.$parent.fields.orderDetailFields.packingRequest }
                ]
            }
        ];
    }
});