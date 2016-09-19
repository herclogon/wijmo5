'use strict';

angular.module('app').factory('dataService', function () {
    var products = [
        { id: 'D0001', name: 'Chai', unitPrice: 12, profitUnitPrice: 3.11 },
        { id: 'D0002', name: 'Chang', unitPrice: 8.5, profitUnitPrice: 2.03 },
        { id: 'D0003', name: 'Aniseed Syrup', unitPrice: 6.85, profitUnitPrice: 2.35 },
        { id: 'D0004', name: 'Chef Anton\'s Gumbo Mix', unitPrice: 17.25, profitUnitPrice: 3.3 },
        { id: 'D0005', name: 'Ikura', unitPrice: 20, profitUnitPrice: 2.95 },
        { id: 'D0006', name: 'Mishi Kobe Niku', unitPrice: 14, profitUnitPrice: 3 },
    ];

    function randBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return {
        generateSlipData: function (count) {
            var slipData = {},
                items = [];

            for (var i = 0; i < count; i++) {
                var debtorAcc = Math.floor(5 * Math.random());
                var debtorType = 0;
                var debtorAmt = Math.round(10000 * Math.random());
                var creditorAcc = Math.floor(4 * Math.random());
                var creditorType = Math.floor(4 * Math.random());
                var creditorAmt = Math.round(10000 * Math.random());

                items.push({
                    debtorAcc: debtorAcc,
                    debtorType: debtorType,
                    debtorAmt: debtorAmt,
                    debtorTax: debtorAmt * 0.09,
                    creditorAcc: creditorAcc,
                    creditorType: creditorType,
                    creditorAmt: creditorAmt,
                    creditorTax: creditorAmt * 0.09,
                    brief: '',
                    note: '',
                    debtorTaxCategrory: '',
                    creditorTaxCategory: ''
                });
            }

            slipData.items = items;
            slipData.date = new Date();
            slipData.slipNo = 's128';
            slipData.settlement = 'Normal';

            return slipData;
        },
        generateOrdersSlipData: function () {
            return [
                {
                    productId: 1,
                    productName: 'Chai',
                    categoryId: 1,
                    categoryName: 'Beverages',
                    quantity: 100,
                    packageUnit: '10 boxes x 20 bags',
                    unitPrice: 18,
                    amount: 100 * 18,
                    shippingId: 1,
                    discontinued: false,
                    remarks: '',
                    description: 'Soft drinks, coffees, teas, beers, and ales'
                },
                {
                    productId: 2,
                    productName: 'Chang',
                    categoryId: 1,
                    categoryName: 'Beverages',
                    quantity: 120,
                    packageUnit: '24 - 12 oz bottles',
                    unitPrice: 19,
                    amount: 120 * 19,
                    shippingId: 1,
                    discontinued: false,
                    remarks: '',
                    description: 'Soft drinks, coffees, teas, beers, and ales'
                },
                {
                    productId: 3,
                    productName: 'Aniseed Syrup',
                    categoryId: 2,
                    categoryName: 'Condiments',
                    quantity: 80,
                    packageUnit: '12 - 550 ml bottles',
                    unitPrice: 10,
                    amount: 100 * 18,
                    shippingId: 1,
                    discontinued: false,
                    remarks: '',
                    description: ''
                },
                {
                    productId: 4,
                    productName: 'Chef Anton\'s Gumbo Mix',
                    categoryId: 2,
                    categoryName: 'Condiments',
                    quantity: 125,
                    packageUnit: '36 boxes',
                    unitPrice: 21.35,
                    amount: 125 * 21.35,
                    shippingId: 2,
                    discontinued: false,
                    remarks: '',
                    description: ''
                },
                {
                    productId: 5,
                    productName: 'Uncle Bob\'s Organic Dried Pears',
                    categoryId: 7,
                    categoryName: 'Produce',
                    quantity: 60,
                    packageUnit: '12 - 1 lb pkgs',
                    unitPrice: 30,
                    amount: 30 * 60,
                    shippingId: 2,
                    discontinued: false,
                    remarks: '',
                    description: 'Dried fruit and bean curd'
                },
                {
                    productId: 6,
                    productName: 'Mishi Kobe Niku',
                    categoryId: 6,
                    categoryName: 'Meat/Poultry',
                    quantity: 25,
                    packageUnit: '18 - 500 g pkgs',
                    unitPrice: 97,
                    amount: 25 * 97,
                    shippingId: 4,
                    discontinued: true,
                    remarks: '',
                    description: 'Prepared meats'
                },
                {
                    productId: 7,
                    productName: 'Ikura',
                    categoryId: 8,
                    categoryName: 'Seafood',
                    quantity: 60,
                    packageUnit: '12 - 200 ml jars',
                    unitPrice: 31,
                    amount: 60 * 31,
                    shippingId: 4,
                    discontinued: false,
                    remarks: '',
                    description: 'Seaweed and fish'
                },
                {
                    productId: 8,
                    productName: 'Queso Cabrales',
                    categoryId: 4,
                    categoryName: 'Dairy Products',
                    quantity: 90,
                    packageUnit: '1 kg pkg',
                    unitPrice: 21,
                    amount: 90 * 21,
                    shippingId: 5,
                    discontinued: false,
                    remarks: '',
                    description: 'Cheeses'
                }
            ]
        },
        getOrderDetail: function(count){
            var orderDetails = [],
                parts = ['Widget', 'Gadget', 'Doohickey'],
                companies = ['Alfreds Futterkiste', 'Ernst Handel', 'Eastern Connection', 'Du monde entier', 'Consolidated Holdings', 'Chop-suey Chinese'],
                persons = ['Laurence Lebihan', 'Elizabeth Lincoln', 'Victoria Ashworth', 'Patricio Simpson'];

            for (var i = 0; i < count; i++) {
                var orderDate = new Date(2016, i % 12, i % 28);
                orderDetails[i] = {
                    orderId: 'PT-0000' + (i + 1),
                    partId: randBetween(10000, 99999).toString(),
                    handlingId: randBetween(100, 999).toString(),
                    processingStatus: 'Testing',
                    purchaseId: randBetween(1000, 9999).toString(),
                    completed: '',
                    orderDate: orderDate,
                    partName: parts[Math.floor(Math.random() * 3)],
                    company: companies[Math.floor(Math.random() * 6)],
                    person: persons[Math.floor(Math.random() * 4)],
                    accepted: 1 % 3 === 0 ? true : false,
                    quantity1: randBetween(100, 999),
                    quantity2: randBetween(100, 999),
                    quantity3: randBetween(100, 999),
                    unit: 'copy',
                    deliveryDate: new Date(2016, orderDate.getMonth() + 1, orderDate.getDate() + 15),
                    processingDate: new Date(2016, orderDate.getMonth(), orderDate.getDate() + 15),
                    shippingDate: new Date(2016, orderDate.getMonth() + 1, orderDate.getDate()),
                    packingRequest: ''
                }
            }

            return orderDetails;
        },
        getPurchaseSlip: function () {
            return [
                {
                    productId: 'DC0001',
                    productName: 'Chai',
                    color: 'Red',
                    packageUnit: 12,
                    size: '40*30*20',
                    case: 1,
                    quantity: 15,
                    deal: '',
                    id: '',
                    unitCost: 200,
                    cost: 15 * 200,
                    price: 15 * 200 * 1.35,
                    remarks: ''
                },
                {
                    productId: 'DC0002',
                    productName: 'Chang',
                    color: 'Blue',
                    packageUnit: 16,
                    size: '25*35*25',
                    case: 0,
                    quantity: 10,
                    deal: '',
                    id: '',
                    unitCost: 180,
                    cost: 10 * 180,
                    price: 10 * 180 * 1.35,
                    remarks: ''
                },
                {
                    productId: 'DC0003',
                    productName: 'Aniseed Syrup',
                    color: 'Green',
                    packageUnit: 10,
                    size: '50*40*40',
                    case: 2,
                    quantity: 12,
                    deal: '',
                    id: '',
                    unitCost: 150,
                    cost: 12 * 150,
                    price: 12 * 150 * 1.35,
                    remarks: ''
                },
                {
                    productId: 'DC0004',
                    productName: 'Chef Anton\'s Gumbo Mix',
                    color: 'Yellow',
                    packageUnit: 24,
                    size: '30*40*40',
                    case: 1,
                    quantity: 8,
                    deal: '',
                    id: '',
                    unitCost: 220,
                    cost: 8 * 220,
                    price: 8 * 220 * 1.35,
                    remarks: ''
                },
                {
                    productId: 'DC0005',
                    productName: 'Ikura',
                    color: 'Black',
                    packageUnit: 15,
                    size: '20*20*30',
                    case: 0,
                    quantity: 5,
                    deal: '',
                    id: '',
                    unitCost: 300,
                    cost: 5 * 300,
                    price: 5 * 300 * 1.35,
                    remarks: ''
                },
                {
                    productId: 'DC0006',
                    productName: 'Mishi Kobe Niku',
                    color: 'White',
                    packageUnit: 18,
                    size: '25*20*30',
                    case: 0,
                    quantity: 6,
                    deal: '',
                    id: '',
                    unitCost: 360,
                    cost: 8 * 360,
                    price: 8 * 360 * 1.35,
                    remarks: ''
                }
            ];
        },
        getOrders: function (count) {
            var orders = [];
            for (var i = 0; i < count; i++) {
                var product = products[Math.floor(Math.random() * 6)],
                    quantity = randBetween(100, 999),
                    orderDate = new Date(2016, i % 12, i % 28);
                orders[i] = {
                    orderId: 'C' + wijmo.Globalize.format(i + 1, 'd4'),
                    productId: product.id,
                    productName: product.name,
                    specialNote: '',
                    quantity: quantity,
                    unitPrice: product.unitPrice,
                    shippingWarehouse: Math.floor(Math.random() * 4),
                    amount: quantity * product.unitPrice,
                    onHold: Math.random() > 0.5,
                    orderDate: orderDate,
                    deliveryDate: new Date(2016, orderDate.getMonth() + 1, orderDate.getDate() + 15)
                }
            }

            return orders;
        },
        getSalesSlip: function (count) {
            var salseSlip = [];
            for (var i = 0; i < count; i++) {
                var product = products[Math.floor(Math.random() * 6)],
                    quantity = randBetween(10, 50),
                    profitUnitPrice = product.profitUnitPrice * 10,
                    unitPrice = product.unitPrice * 10,
                    salesAmount = unitPrice * quantity,
                    totalProfit = profitUnitPrice * quantity;
                salseSlip[i] = {
                    id: i + 1,
                    productId: product.id,
                    productName: product.name,
                    quantity: quantity,
                    profitUnitPrice: profitUnitPrice,
                    unitPrice: unitPrice,
                    totalProfit: totalProfit,
                    salesAmount: salesAmount,
                    profitRate: totalProfit / salesAmount,
                    unit: 'box',
                    marker: ''
                }
            }

            return salseSlip;
        }
    };
});