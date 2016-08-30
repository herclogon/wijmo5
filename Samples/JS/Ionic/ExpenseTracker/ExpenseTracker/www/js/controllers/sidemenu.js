(function () {
	'use strict';

	angular
		.module('app')
		.controller('sidemenu', SideMenu);

	function SideMenu($scope) {
		// boolean flag indicating if we are in a webview or not
		$scope.isWebView = ionic.Platform.isWebView();

		// method to exit the application on a mobile device
		$scope.exit = function () {
			ionic.Platform.exitApp();
		};
	}
})();