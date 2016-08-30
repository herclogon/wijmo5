(function () {
    'use strict';
    angular
        .module('app')
        .controller('fcExpensesReportCtrl', function ($scope, dataService) {
            $scope.title = 'Expenses report';

            $scope.export = function () {
                var doc = new wijmo.pdf.PdfDocument({
                    header: {
                        declarative: {
                            text: 'Expense Report\t&[Page]\\&[Pages]',
                            font: new wijmo.pdf.PdfFont('times', 12),
                            brush: '#bfc1c2'
                        }
                    },
                    lineGap: 2,
                    pageSettings: {
                        margins: {
                            left: 36,
                            right: 36,
                            top: 36,
                            bottom: 36
                        }
                    },
                    ended: function (sender, args) {
                        wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
                    }
                });

                var employees = dataService.getEmployeesWithExpences();

                for (var i = 0; i < employees.length; i++) {
                    drawEmployee(doc, employees[i]);

                    if (i < employees.length - 1) {
                        doc.addPage();
                    }
                }

                doc.end();
            }

            function summarizeColumn(data, name) {
                var sum = 0;

                data.forEach(function (item) {
                    sum += item[name]
                });

                return sum;
            }

            function checkLineAvailable(doc) {
                if (doc.height - doc.y < doc.lineHeight() + doc.lineGap) {
                    doc.addPage();
                }
            }

            function drawEmployee(doc, employee) {
                var expenses = employee.Expenses.sort(function (a, b) {
                        return a.Date.getTime() - b.Date.getTime();
                    }),
                    minDate = expenses[0].Date,
                    maxDate = expenses[expenses.length - 1].Date,
                    columns = [
                        { header: 'Date', binding: 'Date', width: 105 },
                        { header: 'Description', binding: 'Description', format: 'c', width: 105 },
                        { header: 'Hotel', binding: 'Hotel', format: 'c', width: 105 },
                        { header: 'Transport', binding: 'Transport', format: 'c', width: 105 },
                        { header: 'Meal', binding: 'Meal', format: 'c', width: 105 },
                        { header: 'Fuel', binding: 'Fuel', format: 'c', width: 105 },
                        { header: 'Misc', binding: 'Misc', format: 'c', width: 105 },
                        { header: 'Total', binding: 'Total', format: 'c', width: 105 }
                    ],
                    bold = new wijmo.pdf.PdfFont('times', 10, 'normal', 'bold'),
                    thinPen = new wijmo.pdf.PdfPen('#000000', 0.5);

                var grandTotal = summarizeColumn(expenses, 'Total');

                try {
                    // * setup FlexGrid *
                    var grid = new wijmo.grid.FlexGrid('#grid'),
                        footer = new wijmo.grid.FlexGrid('#footer');

                    grid.initialize({
                        autoGenerateColumns: false,
                        allowMerging: wijmo.grid.AllowMerging.All,
                        columns: columns,
                        headersVisibility: wijmo.grid.HeadersVisibility.Column,
                        itemsSource: expenses
                    });

                    footer.initialize({
                        allowMerging: wijmo.grid.AllowMerging.All,
                        autoGenerateColumns: false,
                        headersVisibility: wijmo.grid.HeadersVisibility.None,
                        columns: columns,
                        itemsSource: [{
                            Date: null,
                            Decsription: null,
                            Hotel: summarizeColumn(expenses, 'Hotel'),
                            Transport: summarizeColumn(expenses, 'Transport'),
                            Meal: summarizeColumn(expenses, 'Meal'),
                            ParkingRate: summarizeColumn(expenses, 'ParkingRate'),
                            Misc: summarizeColumn(expenses, 'Misc'),
                            Total: grandTotal,
                        }]
                    });

                    footer.cells.setCellData(0, 'Date', 'Total', false);
                    footer.cells.setCellData(0, 'Description', 'Total', false);
                    footer.cells.rows[0].allowMerging = true;

                    // * draw captions *
                    doc.drawText('Purpose: ', null, null, { font: bold, continued: true });
                    doc.drawText(employee.Purpose);

                    doc.drawText('From: ', 380, 0, { font: bold, continued: true });
                    doc.drawText(wijmo.changeType(minDate, wijmo.DataType.String, 'd'));

                    doc.drawText('To: ', 470, 0, { font: bold, continued: true });
                    doc.drawText(wijmo.changeType(maxDate, wijmo.DataType.String, 'd'));

                    doc.moveDown(2);

                    var y = doc.y;
                    doc.drawText('Name: ', 20, y, { font: bold, continued: true });
                    doc.drawText(employee.Name);

                    doc.drawText('Position: ', 190, y, { font: bold, continued: true });
                    doc.drawText(employee.Position);

                    doc.drawText('SSN: ', 360, y, { font: bold, continued: true });
                    doc.drawText(employee.SSN);

                    y = doc.y;
                    doc.drawText('Department: ', 20, y, { font: bold, continued: true });
                    doc.drawText(employee.Department);

                    doc.drawText('Manager: ', 190, y, { font: bold, continued: true });
                    doc.drawText(employee.Manager);

                    doc.drawText('Employee ID: ', 360, y, { font: bold, continued: true });
                    doc.drawText(employee.Id);

                    doc.moveDown(2);

                    // * draw FlexGrid *
                    wijmo.grid.pdf.FlexGridPdfConverter.draw(grid, doc, doc.width, null, {
                        styles: {
                            cellStyle: {
                                backgroundColor: '#ffffff',
                                borderColor: '#c6c6c6'
                            },
                            altCellStyle: {
                                backgroundColor: '#f9f9f9'
                            },
                            groupCellStyle: {
                                font: { weight: 'bold' },
                                backgroundColor: '#dddddd'
                            },
                            headerCellStyle: {
                                backgroundColor: '#eaeaea'
                            }
                        }
                    });

                    wijmo.grid.pdf.FlexGridPdfConverter.draw(footer, doc, doc.width, null, {
                        styles: {
                            cellStyle: {
                                font: { weight: 'bold' },
                                backgroundColor: '#dddddd',
                                borderColor: '#c6c6c6'
                            }
                        }
                    });

                    doc.moveDown(2);

                    // * draw captions *
                    doc.drawText('Subtotal: ', 400, doc.y, { font: bold, continued: true });
                    doc.drawText(wijmo.changeType(grandTotal - employee.Advance, wijmo.DataType.String, 'c'));

                    doc.drawText('Cash Advance: ', 400, doc.y, { font: bold, continued: true });
                    doc.drawText(wijmo.changeType(employee.Advance, wijmo.DataType.String, 'c'));

                    doc.drawText('Total: ', 400, doc.y, { font: bold, continued: true });
                    doc.drawText(wijmo.changeType(grandTotal, wijmo.DataType.String, 'c'));
                    doc.moveDown(2);

                    checkLineAvailable(doc);

                    y = doc.y;
                    var sz = doc.drawText('Employee signature: ', 0, y);
                    doc.paths.moveTo(sz.size.width, doc.y).lineTo(sz.size.width + 150, doc.y).stroke(thinPen);
                    sz = doc.drawText('Date: ', 300, y);
                    doc.paths.moveTo(300 + sz.size.width + 5, doc.y).lineTo(300 + sz.size.width + 100, doc.y).stroke(thinPen);
                    doc.moveDown();

                    checkLineAvailable(doc);

                    y = doc.y;
                    sz = doc.drawText('Approved by: ', 0, y);
                    doc.paths.moveTo(sz.size.width, doc.y).lineTo(sz.size.width + 150, doc.y).stroke(thinPen);
                    sz = doc.drawText('Date: ', 300, y);
                    doc.paths.moveTo(300 + sz.size.width, doc.y).lineTo(300 + sz.size.width + 100, doc.y).stroke(thinPen);
                }
                finally {
                    if (grid) {
                        grid.dispose();
                    }

                    if (footer) {
                        footer.dispose();
                    }
                }
            }
        });
})();