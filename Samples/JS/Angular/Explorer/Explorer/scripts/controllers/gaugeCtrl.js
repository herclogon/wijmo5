'use strict';

var app = angular.module('app');

// gauge controller: provides data for the gauges
app.controller('gaugeCtrl', function appCtrl($scope, $sce, sparkSvc) {

	// data context
	$scope.ctx = {

		// simple gauge data
		gauge: {
			min: 0,
			max: 100,
			value: 25,
			step: 5,
			angles: [
				{ start: -45, sweep: 270 },
				{ start: 10, sweep: 340 },
				{ start: 0, sweep: 90 },
				{ start: 45, sweep: 90 }
			]
		},

		// dashboard data
		keyMetrics: [
			{ name: 'Sales', units: 'M', current: 47.2, target: 45, last12: [41.9,42.8,41.8,42.0,42.1,43.9,46.1,45.7,46.3,45.6,47.8,47.2] },
			{ name: 'Expenses', units: 'M', current: 33.4, target: 35, last12: [40.1,39.8,39.1,38.2,38.6,36.9,37.9,36.7,37.3,35.7,34.6,33.4] },
			{ name: 'Profit', units: 'M', current: 13.8, target: 13.5, last12: [14.5,14.3,13.6,14.0,14.5,14.8,15.0,14.3,14.4,14.6,14.0,13.8] },
			{ name: 'Units Sold', units: 'k', current: 165, target: 155, last12: [152.1,156.2,155.3,162.3,156.8,162.6,155.4,160.7,160.6,163.9,170.9,165.0] },
			{ name: 'Market Share', units: '%', current: 13, target: 14, last12: [11.6,12.0,12.4,12.9,12.3,11.8,11.6,11.7,12.0,12.4,12.7,13.0] },
			{ name: 'Customer Sat', units: '%', current: 84, target: 75, last12: [95.4,96.4,93.4,91.7,94.5,91.2,89.7,92.2,88.3,85.7,87.6,84.0] }
		],
		regionalSales: [
			{ name: 'Eastern US', units: 'M', current: 11.5, target: 8, last12: [10.2,10.6,10.2,10.3,10.6,10.7,10.4,10.8,11.2,11.5,11.3,11.5] },
			{ name: 'Germany', units: 'M', current: 9.5, target: 7, last12: [9.4,9.4,9.8,10.0,10.3,10.1,9.9,9.8,10.1,10.0,9.7,9.5] },
			{ name: 'Western US', units: 'M', current: 9.2, target: 7, last12: [10.1,9.8,10.1,10.2,9.9,10.4,10.0,9.7,9.2,9.5,9.6,9.2] },
			{ name: 'Central US', units: 'M', current: 4.8, target: 6, last12: [4.9,5.1,5.3,5.3,5.3,5.6,5.4,5.5,5.3,5.1,5.0,4.8] },
			{ name: 'UK', units: 'M', current: 4.1, target: 4, last12: [3.7,3.8,3.9,4.1,4.0,4.0,4.1,3.9,3.9,4.1,4.0,4.1] },
			{ name: 'France', units: 'M', current: 3.9, target: 4, last12: [3.8,3.9,3.9,3.9,4.0,4.1,4.2,4.1,3.9,3.9,4.0,3.9] },
			{ name: 'Canada', units: 'M', current: 2.8, target: 2, last12: [2.9,3.0,3.0,3.0,3.1,3.1,3.0,3.0,2.9,2.8,2.8,2.8] },
			{ name: 'Mexico', units: 'M', current: 1.4, target: 2, last12: [1.2,1.2,1.2,1.3,1.2,1.3,1.2,1.3,1.3,1.3,1.4,1.4] }
		],
		productSales: [
			{ name: 'Televisions', units: 'M', current: 8.3, target: 7.5, last12: [8.6,9.0,8.8,8.6,8.3,8.4,8.6,8.4,8.5,8.2,8.2,8.3] },
			{ name: 'Computers', units: 'M', current: 8.1, target: 8, last12: [7.4,7.8,7.8,8.2,7.9,7.8,8.1,7.9,8.1,8.1,7.9,8.1] },
			{ name: 'Video Games', units: 'M', current: 8.1, target: 7.5, last12: [7.8,7.7,7.7,7.9,8.3,8.1,7.7,8.1,7.9,8.2,8.4,8.1] },
			{ name: 'Home Audio', units: 'M', current: 6.8, target: 6.5, last12: [5.7,6.0,6.2,5.9,6.1,6.1,6.4,6.2,6.5,6.7,6.6,6.8] },
			{ name: 'Car Audio', units: 'M', current: 6.4, target: 6.5, last12: [6.0,6.0,6.2,6.1,5.9,5.9,6.1,6.2,6.2,6.0,6.3,6.4] },
			{ name: 'Appliances', units: 'M', current: 4.1, target: 4, last12: [4.0,3.8,3.9,3.9,4.1,4.3,4.3,4.2,4.1,4.1,4.0,4.1] },
			{ name: 'DVDs', units: 'M', current: 3.1, target: 4, last12: [4.0,3.8,3.9,3.9,4.1,4.3,4.3,4.2,4.1,4.1,4.0,4.1] },
			{ name: 'Furniture', units: 'M', current: 2.3, target: 2, last12: [2.2,2.2,2.1,2.2,2.2,2.3,2.3,2.4,2.3,2.4,2.3,2.3] }
		]
	}

	// sparkline service
	$scope.getSparklines = function (data) {
		return $sce.trustAsHtml(sparkSvc.getSparklines(data, '100%', '1.5em'));
	};

	// get tooltip for an item
	$scope.getTooltip = function (item) {
		return wijmo.format('{name} {ia} <b>{delta:p0} {ab}</b> the target', {
			name: item.name,
			ia: (item.name[item.name.length - 1] == 's') ? 'are' : 'is',
			ab: (item.current > item.target) ? 'above' : 'below',
			delta: Math.abs(item.current / item.target - 1)
		});
	}
});
