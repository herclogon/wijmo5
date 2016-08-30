var app = angular.module('app');

app.controller('storeController', function ($scope, productsService, checkoutService) {
	var dvaCaption = [
		'Negligible',
		'Low',
		'Average',
		'Good',
		'Great'
	], dvaRange = [
		'below 5%',
		'between 5 and 10%',
		'between 10 and 20%',
		'between 20 and 40%',
		'above 40%'
	], clearCart = false;

	$scope.ctx = {
		products: new wijmo.collections.CollectionView(),
		cartItems: [],
		filter: ''
	};

	productsService.getProducts().then(function (data) {
		$scope.ctx.products.sourceCollection = data;
	});

	loadCartItems();

	// save items to local storage when unloading
	$(window).unload(function () {
		if (clearCart) {
			$scope.ctx.cartItems = [];
			clearCart = false;
		}
		saveCartItems();
	});

	// add item in shopping cart
	$scope.addCartItem = function (product, quantity) {
		quantity = toNumber(quantity);
		if (quantity != 0) {

			// update quantity for existing item
			var found = false;
			for (var i = 0; i < $scope.ctx.cartItems.length && !found; i++) {
				var item = $scope.ctx.cartItems[i];
				if (item.sku === product.sku) {
					found = true;
					item.quantity = toNumber(item.quantity + quantity);
				}
			}

			// new item, add now
			if (!found) {
				$scope.ctx.cartItems.push({
					sku: product.sku,
					name: product.name,
					price: product.price,
					quantity: quantity
				});
			}
		}
	};

	// remove item from the shopping cart
	$scope.clearCartItem = function (sku) {
		if (sku) {
			for (var i = 0; i < $scope.ctx.cartItems.length; i++) {
				var item = $scope.ctx.cartItems[i];
				if (item.sku === sku) {
					$scope.ctx.cartItems.splice(i, 1);
				}
			}
		} else {
			$scope.ctx.cartItems = [];
		}

		saveCartItems();
	};

	// Get the caption of the nutrients
	$scope.getDvaCaption = function (idx) {
		if (idx < dvaCaption.length) {
			return dvaCaption[idx];
		} else {
			return undefined;
		}
	};

	// Get the range discription of the nutrients
	$scope.getDvaRange = function (idx) {
		if (idx < dvaRange.length) {
			return dvaRange[idx];
		} else {
			return undefined;
		}
	};

	// get the total price for all items currently in the cart
	$scope.getTotalPrice = function (sku) {
		var total = 0;
		for (var i = 0; i < $scope.ctx.cartItems.length; i++) {
			var item = $scope.ctx.cartItems[i];
			if (sku == null || item.sku == sku) {
				total += toNumber(item.quantity * item.price);
			}
		}
		return total;
	};

	// get the total price for all items currently in the cart
	$scope.getTotalCount = function (sku) {
		var count = 0;
		for (var i = 0; i < $scope.ctx.cartItems.length; i++) {
			var item = $scope.ctx.cartItems[i];
			if (sku == null || item.sku == sku) {
				count += toNumber(item.quantity);
			}
		}
		return count;
	};

	// checkout the shopping cart.
	$scope.checkout = function (serviceName) {
		var merchantID;
		if (serviceName === 'PayPal') {
			merchantID = 'bernardo.castilho-facilitator@gmail.com';
		} else {
			throw 'Unknown checkout service: ' + serviceName;
		}
		checkoutService.checkout(serviceName, merchantID, $scope.ctx.cartItems);
		clearCart = true;
	};

	// apply filter (applied on a 500 ms timeOut)
	var toFilter;
	$scope.$watch('ctx.filter', function () {
		if (toFilter) {
			clearTimeout(toFilter);
		}
		toFilter = setTimeout(function () {
			toFilter = null;
			var cv = $scope.ctx.products;
			if (cv) {
				if (cv.filter != filterFunction) {
					cv.filter = filterFunction;
				} else {
					cv.refresh();
				}
				$scope.$apply('ctx.products');
			}
		}, 500);
	});

	// remove the cart item from the cartItems array, if the quantity of the item is 0
	$scope.$watch('ctx.cartItems', function () {
		var j = 0;
		for (var i = 0; i < $scope.ctx.cartItems.length; i++) {
			var item = $scope.ctx.cartItems[i];
			if (item.quantity <= 0) {
				$scope.ctx.cartItems.splice(i, 1);
				i--;
			}
		}
	}, true);

	// define filter function for collectionview
	function filterFunction(item) {
		var filter = $scope.ctx.filter;

		if (filter && item) {
			var value = item['name'];
			if (angular.isString(value) && value.toUpperCase().indexOf(filter.toUpperCase()) > -1) {
				return true;
			}
			return false;
		}

		return true;
	};

	// save the shopping cart in local storage
	function saveCartItems() {
		if (localStorage != null && JSON != null) {
			localStorage['shoppingCart_items'] = JSON.stringify($scope.ctx.cartItems);
		}
	};

	// load the shopping cart from local storage
	function loadCartItems() {
		var items = localStorage != null ? localStorage['shoppingCart_items'] : null;
		if (items != null && JSON != null) {
			try {
				var items = JSON.parse(items);
				for (var i = 0; i < items.length; i++) {
					var item = items[i];
					if (item.sku != null && item.name != null && item.price != null && item.quantity != null) {
						$scope.ctx.cartItems.push({
							sku: item.sku,
							name: item.name,
							price: item.price,
							quantity: item.quantity
						});
					}
				}
			}
			catch (err) {
				// ignore errors while loading...
			}
		}
	};

	// convert the value to numeric value
	function toNumber(value) {
		value = value * 1;
		return isNaN(value) ? 0 : value;
	};
});