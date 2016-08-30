'use strict';

angular.module('app').controller('introCtrl', function ($scope) {
	$scope.initialized = function (s) {
		s.selectedSheetIndex = 0;
	}
})