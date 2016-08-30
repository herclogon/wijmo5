'use strict';

var app = angular.module('app');

// Service to load the products from server to client.
app.factory('productsService', ['$http', '$q', function ($http, $q) {
	return {
		getProducts: function () {
			return $http.get('data/products.json').then(function (result) {
				return result.data;
			});
		}
	}
}]);