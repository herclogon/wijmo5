(function () {
	'use strict';
	angular
        .module('app')
        .controller('fcExpenseAnalysisReportCtrl', function ($scope, dataService) {
        	$scope.title = 'Expense analysis report';
        	$scope.ctx = {
        		grid: null,
				pie: null,
				data: dataService.getEmployeesWithExpences()[0],
				totals: null
        	};

        	$scope.ctx.totals = dataService.getExpenseTotals($scope.ctx.data.Expenses);

        	$scope.export = function () {
	       		var doc = new wijmo.pdf.PdfDocument({
        			header: {
        				declarative: {
        					text: 'Expense Analysis Report',
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

	       		drawEmployee(doc, $scope.ctx.data, function () {
        			doc.end();
        		});
        	}

        	function drawEmployee(doc, employee, done) {
        		var expenses = employee.Expenses.sort(function (a, b) {
        			return a.Date.getTime() - b.Date.getTime();
        			}),
					minDate = expenses[0].Date,
					maxDate = expenses[expenses.length - 1].Date,
					bold = new wijmo.pdf.PdfFont('times', 10, 'normal', 'bold');

        		doc.moveDown(2);

        		doc.drawText('Name: ', undefined, undefined, { font: bold, continued: true });
        		doc.drawText(employee.Name);

        		doc.drawText('From: ', undefined, undefined, { font: bold, continued: true });
        		doc.drawText(wijmo.changeType(minDate, wijmo.DataType.String, 'd'));

        		doc.drawText('To: ', undefined, undefined, { font: bold, continued: true });
        		doc.drawText(wijmo.changeType(maxDate, wijmo.DataType.String, 'd'));

        		doc.moveDown(2);
        		var y = doc.y;

        		doc.drawText('Expense details:', 0, y)
        		doc.drawText('Total expenses by category:', doc.width * 0.5 + 20, y);
        		y = doc.y;

        		wijmo.grid.pdf.FlexGridPdfConverter.draw($scope.ctx.grid, doc, doc.width * 0.5, null, {
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

        		$scope.ctx.pie.saveImageToDataUrl(wijmo.chart.ImageFormat.Png, function (url) {
        			doc.drawImage(url, doc.width * 0.5 + 20, y, { width: doc.width * 0.5 - 20 });
        			done();
        		});
        	}
        });
})();