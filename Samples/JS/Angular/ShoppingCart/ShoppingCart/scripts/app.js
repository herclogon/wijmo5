'use strict';

var app = angular.module('app', ['ngRoute', 'wj']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.

	// store
	when('/store', { templateUrl: 'partials/store.htm' }).
	// product detail
	when('/product', { templateUrl: 'partials/product.htm'}).
	// shopping cart
	when('/cart', { templateUrl: 'partials/shoppingCart.htm' }).

	// default...
	when('/', { templateUrl: 'partials/store.htm' }).
	otherwise({ redirectTo: '/' });
}]);