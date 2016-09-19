'use strict';

angular.module('app').controller('transferSlipCtrl', function ($scope, dataService) {
    $scope.ctx = {
        multiRow: null,
        layoutDef: generateLayoutDef(),
        data: null,
        items: null,
        debtorSum: 0,
        creditorSum: 0,
        balance: 0,
        pageIndex: -1,
        pageCount: -1
    };
    $scope.ctx.data = dataService.generateSlipData(50);
    $scope.ctx.items = new wijmo.collections.CollectionView($scope.ctx.data.items);
    $scope.ctx.items.pageSize = 5;

    $scope.$watch('fields', function () {
        var multiRow = $scope.ctx.multiRow,
            cv;
        if (multiRow) {
            cv = multiRow.collectionView;
            multiRow.layoutDefinition = generateLayoutDef();
            updateSummary(cv);
        }
    });

    $scope.$watch('ctx.multiRow', function () {
        var multiRow = $scope.ctx.multiRow;
        if (multiRow) {
            var cv = multiRow.collectionView;
            multiRow.rowHeaders.columns.clear();
            updateSummary(cv);
            $scope.ctx.pageIndex = cv.pageIndex;
            $scope.ctx.pageCount = cv.pageCount;
            multiRow.cellEditEnded.addHandler(function () {
                updateSummary(cv);
            });
            cv.pageChanged.addHandler(function () {
                updateSummary(cv);
                $scope.ctx.pageIndex = cv.pageIndex;
            });
            cv.collectionChanged.addHandler(function (sender, e) {
                var debtorAmt, creditorAmt;
                if (e.action === wijmo.collections.NotifyCollectionChangedAction.Change && !!e.item) {
                    debtorAmt = +e.item.debtorAmt;
                    creditorAmt = +e.item.creditorAmt;
                    if (!isNaN(debtorAmt)) {
                        e.item.debtorTax = e.item.debtorAmt * 0.09;
                    }
                    if (!isNaN(creditorAmt)) {
                        e.item.creditorTax = e.item.creditorAmt * 0.09;
                    }
                }
            });
        }
    });

    $scope.moveToFirstPage = function () {
        $scope.ctx.items.moveToFirstPage();
    }

    $scope.moveToLastPage = function () {
        $scope.ctx.items.moveToLastPage();
    }

    $scope.moveToPreviousPage = function () {
        $scope.ctx.items.moveToPreviousPage();
    }

    $scope.moveToNextPage = function () {
        $scope.ctx.items.moveToNextPage();
    }

    // Export the records of current page to xlsx file.
    $scope.exportToExcel = function () {
        var workbook = wijmo.grid.xlsx.FlexGridXlsxConverter.save($scope.ctx.multiRow);
        var workbookRow = new wijmo.xlsx.WorkbookRow();
        var workbookFill = new wijmo.xlsx.WorkbookFill();
        workbookFill.color = '#8080FF';
        var workbookFont = new wijmo.xlsx.WorkbookFont();
        workbookFont.bold = true;
        var workbookStyle = new wijmo.xlsx.WorkbookStyle();
        workbookStyle.fill = workbookFill;
        workbookStyle.font = workbookFont;
        workbookStyle.hAlign = wijmo.xlsx.HAlign.Center;
        var workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.$parent.fields.date;
        workbookCell.style = workbookStyle;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.ctx.data.date;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.$parent.fields.slipNo;
        workbookCell.style = workbookStyle;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.ctx.data.slipNo;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.$parent.fields.settlementTitle;
        workbookCell.style = workbookStyle;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.ctx.data.settlement;
        workbookRow.cells.push(workbookCell);
        workbook.sheets[0].rows.splice(0, 0, workbookRow);
        workbook.sheets[0].frozenPane.rows = 3;

        workbookRow = new wijmo.xlsx.WorkbookRow();
        workbookFill = new wijmo.xlsx.WorkbookFill();
        workbookFill.color = '#99B4D1';
        workbookStyle = new wijmo.xlsx.WorkbookStyle();
        workbookStyle.fill = workbookFill;
        workbookStyle.hAlign = wijmo.xlsx.HAlign.Center;
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.$parent.fields.debtorSumTitle;
        workbookCell.style = workbookStyle;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.ctx.debtorSum;
        workbookCell.style = workbookStyle;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.$parent.fields.creditorSumTitle;
        workbookCell.style = workbookStyle;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.ctx.creditorSum;
        workbookCell.style = workbookStyle;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.$parent.fields.debtorCreditorBalanceTitle;
        workbookCell.style = workbookStyle;
        workbookRow.cells.push(workbookCell);
        workbookCell = new wijmo.xlsx.WorkbookCell();
        workbookCell.value = $scope.ctx.balance;
        workbookCell.style = workbookStyle;
        workbookRow.cells.push(workbookCell);
        workbook.sheets[0].rows.push(workbookRow);
        workbook.save('TransferSlip.xlsx');
    }

    // Save the records of current page to PDF file.
    $scope.exportToPDF = function () {
        var doc = new wijmo.pdf.PdfDocument({
                header: {
                    declarative: {
                        text: '\t&[Page]\\&[Pages]'
                    }
                },
                footer: {
                    declarative: {
                        text: '\t&[Page]\\&[Pages]'
                    }
                },
                ended: function (sender, args) {
                    wijmo.pdf.saveBlob(args.blob, 'TransferSlip.pdf')
                }
            }),
            settings = {
                styles: {
                    cellStyle: {
                        backgroundColor: '#ffffff',
                        borderColor: '#c6c6c6'
                    },
                    altCellStyle: {
                        backgroundColor: '#f9f9f9'
                    },
                    headerCellStyle: {
                        backgroundColor: '#eaeaea'
                    }
                }
            }, font, drawTextSetting, thinPen = new wijmo.pdf.PdfPen('#000000', 0.5);
        
        // Set Japanese font for Japanese culture.
        if ($scope.$parent.culture === 'ja') {
            doc.registerFont({
                source: 'resources/fonts/ipaexg00201/ipaexg.ttf',
                name: 'ipaexg',
                style: 'normal',
                weight: 'normal',
                sansSerif: true
            });
            font = new wijmo.pdf.PdfFont('ipaexg');
            settings.styles.cellStyle.font = font;
            drawTextSetting = {
                font: font
            };
        }
        
        // Draw header of the transfer slip.
        doc.paths
           .rect(0.5, 0.5, 50, 21)
           .fill('#8080FF')
           .moveTo(0, 0).lineTo(334, 0)
           .moveTo(334, 0).lineTo(334, 22)
           .moveTo(0, 22).lineTo(334, 22)
           .moveTo(0, 0).lineTo(0, 22).stroke(thinPen);
        doc.drawText($scope.$parent.fields.date, 3.5, 5.5, drawTextSetting);
        doc.drawText(wijmo.Globalize.format($scope.ctx.data.date, 'd'), 53.5, 5.5, drawTextSetting);
        doc.paths
           .rect(130.5, 0.5, 50, 21)
           .fill('#8080FF');
        doc.drawText($scope.$parent.fields.slipNo, 133.5, 5.5, drawTextSetting);
        doc.drawText($scope.ctx.data.slipNo, 183.5, 5.5, drawTextSetting);
        doc.paths
           .rect(230.5, 0.5, 50, 21)
           .fill('#8080FF');
        doc.drawText($scope.$parent.fields.settlementTitle, 233.5, 5.5, drawTextSetting);
        doc.drawText($scope.ctx.data.settlement, 283.5, 5.5, drawTextSetting);
        doc.moveDown();

        // Draw the body of the transfer slip.
        wijmo.grid.pdf.FlexGridPdfConverter.draw($scope.ctx.multiRow, doc, null, null, settings);

        // Draw the footer of the transfer slip.
        doc.paths
          .rect(0.5, 274.5, 380, 21)
          .fill('#99B4D1')
          .moveTo(0, 274).lineTo(381, 274)
          .moveTo(381, 274).lineTo(381, 296)
          .moveTo(0, 296).lineTo(381, 296)
          .moveTo(0, 274).lineTo(0, 296)
          .moveTo(60, 274).lineTo(60, 296)
          .moveTo(120, 274).lineTo(120, 296)
          .moveTo(180, 274).lineTo(180, 296)
          .moveTo(240, 274).lineTo(240, 296)
          .moveTo(320, 274).lineTo(320, 296).stroke(thinPen);
        doc.drawText($scope.$parent.fields.debtorSumTitle, 3.5, 279.5, drawTextSetting);
        doc.drawText($scope.ctx.debtorSum, 63.5, 279.5, drawTextSetting);
        doc.drawText($scope.$parent.fields.creditorSumTitle, 123.5, 279.5, drawTextSetting);
        doc.drawText($scope.ctx.creditorSum, 183.5, 279.5, drawTextSetting);
        doc.drawText($scope.$parent.fields.debtorCreditorBalanceTitle, 243.5, 279.5, drawTextSetting);
        doc.drawText($scope.ctx.balance, 323.5, 279.5, drawTextSetting);

        doc.end();
    }

    // Generate the layout definition for the MultiRow control.
    function generateLayoutDef() {
        var debtorAccDataMap = $scope.$parent.buildDataMap($scope.$parent.fields.debtorAccounts.split(',')),
            debtorTypeDataMap = $scope.$parent.buildDataMap($scope.$parent.fields.debtorTypes.split(',')),
            creditorAccDataMap = $scope.$parent.buildDataMap($scope.$parent.fields.creditorAccounts.split(',')),
            creditorTypeDataMap = $scope.$parent.buildDataMap($scope.$parent.fields.creditorTypes.split(','));

        return [
            {
                cells: [
                  { binding: 'debtorAcc', width: 125, header: $scope.$parent.fields.transferSlipFields.debtorAccount, dataMap: debtorAccDataMap, align: 'center' },
                  { binding: 'debtorType', width: 125, header: $scope.$parent.fields.transferSlipFields.debtorType, dataMap: debtorTypeDataMap, align: 'center' }
                ]
            },
            {
                cells: [
                  { binding: 'debtorAmt', width: 125, format: 'c2', header: $scope.$parent.fields.transferSlipFields.debtorAmount, align: 'center' },
                  { binding: 'debtorTax', width: 125, format: 'c2', header: $scope.$parent.fields.transferSlipFields.debtorTax, align: 'center', isReadOnly: true }
                ]
            },
            {
                cells: [
                  { binding: 'creditorAcc', width: 125, header: $scope.$parent.fields.transferSlipFields.creditorAccount, dataMap: creditorAccDataMap, align: 'center' },
                  { binding: 'creditorType', width: 125, header: $scope.$parent.fields.transferSlipFields.creditorType, dataMap: creditorTypeDataMap, align: 'center' }
                ]
            },
            {
               
                cells: [
                  { binding: 'creditorAmt', width: 125, format: 'c2', header: $scope.$parent.fields.transferSlipFields.creditorAmount, align: 'center' },
                  { binding: 'creditorTax', width: 125, format: 'c2', header: $scope.$parent.fields.transferSlipFields.creditorTax, align: 'center', isReadOnly: true }
                ]
            },
            {
                cells: [
                  { binding: 'brief', width: 210, header: $scope.$parent.fields.transferSlipFields.brief, align: 'center' },
                  { binding: 'note', width: 210, header: $scope.$parent.fields.transferSlipFields.note, align: 'center' }
                ]
            },
            {
                cells: [
                  { binding: 'debtorTaxCategrory', width: 230, header: $scope.$parent.fields.transferSlipFields.debtorTaxCategory, align: 'center' },
                  { binding: 'creditorTaxCategory', width: 230, header: $scope.$parent.fields.transferSlipFields.creditorTaxCategory, align: 'center' }
                ]
            }
        ];
    }

    // Update summary info for the footer of the multirow control.
    function updateSummary(cv) {
        var debtorSum = wijmo.getAggregate(wijmo.Aggregate.Sum, cv.items, 'debtorAmt'),
            creditorSum = wijmo.getAggregate(wijmo.Aggregate.Sum, cv.items, 'creditorAmt');
        $scope.ctx.debtorSum = wijmo.Globalize.format(debtorSum, 'c');
        $scope.ctx.creditorSum = wijmo.Globalize.format(creditorSum, 'c');
        $scope.ctx.balance = wijmo.Globalize.format(debtorSum - creditorSum, 'c');
    }
});