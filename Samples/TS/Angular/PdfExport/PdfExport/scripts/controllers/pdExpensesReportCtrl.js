(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdExpensesReportCtrl', function ($scope, dataService) {
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

            var colWidth = 80,
                rowHeight = 18;

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

            function renderRow(doc, y, values, getter, formatter, font, brush) {
                values.forEach(function (v, idx) {
                    var x = idx * colWidth;

                	doc.paths
						.rect(x, y, colWidth, rowHeight)
						.fill(brush || '#f4b19b');

                    var value = wijmo.isFunction(getter)
                        ? getter(v)
                        : v || '';

                    var format = wijmo.isFunction(formatter)
                        ? formatter(v)
                        : formatter || '';

                    if (value !== 'Total') {
                    	value = wijmo.changeType(value, wijmo.DataType.String, format);
                    }

                    doc.drawText(value, x + 3, y + 5, {
                        font: font,
                        height: rowHeight,
                        width: colWidth
                    });
                });
            };

            function drawEmployee(doc, employee) {
                var expenses = employee.Expenses.sort(function (a, b) {
                    return a.Date.getTime() - b.Date.getTime();
                }),
                    minDate = expenses[0].Date,
                    maxDate = expenses[expenses.length - 1].Date,
                    columns = [
                        { header: 'Date', binding: 'Date', format: 'd' },
                        { header: 'Description', binding: 'Description', format: 'c' },
                        { header: 'Hotel', binding: 'Hotel', format: 'c' },
                        { header: 'Transport', binding: 'Transport', format: 'c' },
                        { header: 'Meal', binding: 'Meal', format: 'c' },
                        { header: 'Fuel', binding: 'Fuel', format: 'c' },
                        { header: 'Misc', binding: 'Misc', format: 'c' },
                        { header: 'Total', binding: 'Total', format: 'c' }
                    ],
                    bold = new wijmo.pdf.PdfFont('times', 10, 'normal', 'bold');


                var grandTotal = summarizeColumn(expenses, 'Total'),
                    totals = ['Total', '', summarizeColumn(expenses, 'Hotel'), summarizeColumn(expenses, 'Transport'), summarizeColumn(expenses, 'Meal'), summarizeColumn(expenses, 'Fuel'), summarizeColumn(expenses, 'Misc'), grandTotal];

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

                // * draw table *
                doc.saveState();

                var scale = doc.width / (columns.length * colWidth),
                    docY = doc.y,
                    y = 0;

                if (scale > 1) {
                    scale = 1;
                }

                doc.scale(scale, scale, new wijmo.Point(0, docY));
                doc.translate(0, docY);

                // header
                renderRow(doc, y, columns, function (column) {
                    return column.header;
                }, null, bold, '#fad9cd');

                y += rowHeight;

                // body
                expenses.forEach(function (item) {
                    renderRow(doc, y, columns, function (column) {
                        return item[column.binding];
                    }, function (column) {
                        return column.format
                    });

                    y += rowHeight;
                });

                // footer
                renderRow(doc, y, totals, null, 'c', bold, '#fad9cd');

                y += rowHeight;

                doc.y = docY + y * scale;

                doc.restoreState();

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

                var thinPen = new wijmo.pdf.PdfPen('#000000', 0.5)

                y = doc.y;
                var sz = doc.drawText('Employee signature:', 0, y);
                doc.paths.moveTo(sz.size.width, doc.y).lineTo(sz.size.width + 150, doc.y).stroke(thinPen);
                sz = doc.drawText('Date:', 300, y);
                doc.paths.moveTo(300 + sz.size.width, doc.y).lineTo(300 + sz.size.width + 75, doc.y).stroke(thinPen);

                doc.moveDown();

                checkLineAvailable(doc);

                y = doc.y;
                var sz = doc.drawText('Approved by:', 0, y);
                doc.paths.moveTo(sz.size.width, doc.y).lineTo(sz.size.width + 150, doc.y).stroke(thinPen);
                sz = doc.drawText('Date:', 300, y);
                doc.paths.moveTo(300 + sz.size.width, doc.y).lineTo(300 + sz.size.width + 75, doc.y).stroke(thinPen);
            }
        });
})();