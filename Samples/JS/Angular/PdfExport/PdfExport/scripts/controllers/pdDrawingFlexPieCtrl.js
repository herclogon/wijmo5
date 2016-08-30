(function () {
	'use strict';
	angular
        .module('app')
        .controller('pdDrawingFlexPieCtrl', function ($scope, dataService) {
        	$scope.title = 'Drawing FlexPie as a raster image';

        	$scope.export = function () {
        		var doc = new wijmo.pdf.PdfDocument({
        				ended: function (sender, args) {
        					wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
        				}
        			}),
					data = dataService.getExpenseItems(),
					flexPie = new wijmo.chart.FlexPie('#pie'),
					renderingImageFlag = false;

        		try {
        			flexPie.initialize({
        				itemsSource: [
							{ name: 'Hotel', value: summarizeColumn(data, 'Hotel') },
							{ name: 'Transport', value: summarizeColumn(data, 'Transport') },
							{ name: 'Meal', value: summarizeColumn(data, 'Meal') },
							{ name: 'Fuel', value: summarizeColumn(data, 'Fuel') },
							{ name: 'Misc', value: summarizeColumn(data, 'Misc') }
        				],
        				binding: 'value',
        				bindingName: 'name',
        				innerRadius: 0.75,
        				dataLabel: {
        					content: '{value:c1}',
        					position: wijmo.chart.PieLabelPosition.Inside
        				},
        				rendered: function (sender, args) {
        					if (!renderingImageFlag) {
        						renderingImageFlag = true;

        						try {
        							sender.saveImageToDataUrl(wijmo.chart.ImageFormat.Png, function (url) {
        								flexPie.dispose();

        								doc.drawText('Total expenses by category:');
        								doc.drawImage(url);

        								doc.end();
        							});
        						} catch (ex) {
        							flexPie.dispose();
        						}
        					}
        				}
        			});
        		} catch (ex) {
        			flexPie.dispose();
        		}
        	}

        	function summarizeColumn(data, name) {
        		var sum = 0;

        		data.forEach(function (item) {
        			sum += item[name]
        		});

        		return sum;
        	}
        });
})();