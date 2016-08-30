'use strict';

var app = angular.module('app');

// Service for checkout the shopping cart to paypal or other sites.
app.factory('checkoutService', function () {
	//var googleCheckoutOptions = {
	//	ship_method_name_1: "UPS Next Day Air",
	//	ship_method_price_1: "20.00",
	//	ship_method_currency_1: "USD",
	//	ship_method_name_2: "UPS Ground",
	//	ship_method_price_2: "15.00",
	//	ship_method_currency_2: "USD"
	//};

	function checkoutPayPal(merchantID, cartItems) {
		// global data
		var data = {
			cmd: '_cart',
			business: merchantID,
			upload: '1',
			rm: '2',
			charset: 'utf-8'
		};

		// item data
		for (var i = 0; i < cartItems.length; i++) {
			var item = cartItems[i];
			var ctr = i + 1;
			data['item_number_' + ctr] = item.sku;
			data['item_name_' + ctr] = item.name;
			data['quantity_' + ctr] = item.quantity;
			data['amount_' + ctr] = item.price.toFixed(2);
		}

		// build form
		var form = $('<form/></form>');
		form.attr('action', 'https://www.paypal.com/cgi-bin/webscr');
		form.attr('method', 'POST');
		form.attr('style', 'display:none;');
		addFormFields(form, data);
		$('body').append(form);

		// submit form
		form.submit();
		form.remove();
	};

	//function checkoutGoogle(merchantID, cartItems) {
	//	// global data
	//	var data = {};

	//	// item data
	//	for (var i = 0; i < cartItems.length; i++) {
	//		var item = cartItems[i];
	//		var ctr = i + 1;
	//		data["item_name_" + ctr] = item.sku;
	//		data["item_description_" + ctr] = item.name;
	//		data["item_price_" + ctr] = item.price.toFixed(2);
	//		data["item_quantity_" + ctr] = item.quantity;
	//		data["item_merchant_id_" + ctr] = merchantID;
	//	}

	//	// build form
	//	var form = $('<form/></form>');
	//	// NOTE: in production projects, use the checkout.google url below;
	//	// for debugging/testing, use the sandbox.google url instead.
	//	//form.attr("action", "https://checkout.google.com/api/checkout/v2/merchantCheckoutForm/Merchant/" + merchantID);
	//	form.attr("action", "https://sandbox.google.com/checkout/api/checkout/v2/checkoutForm/Merchant/" + merchantID);
	//	form.attr("method", "POST");
	//	form.attr("style", "display:none;");
	//	addFormFields(form, data);
	//	addFormFields(form, googleCheckoutOptions);
	//	$("body").append(form);

	//	// submit form
	//	form.submit();
	//	form.remove();
	//}

	function addFormFields(form, data) {
		if (data != null) {
			$.each(data, function (name, value) {
				if (value != null) {
					var input = $('<input></input>').attr('type', 'hidden').attr('name', name).val(value);
					form.append(input);
				}
			});
		}
	};

	return {
		checkout: function (serviceName, merchantID, cartItems) {
			if (serviceName === 'PayPal') {
				checkoutPayPal(merchantID, cartItems);
			} else {
				throw 'Unknown checkout service: ' + serviceName;
			}
		}
	};
});