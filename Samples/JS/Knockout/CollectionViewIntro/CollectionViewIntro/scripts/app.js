(function () {
    'use strict';

    var dataSvc = {
        getData: function (count) {
            var data = [],
                dt = new Date(),

                // data used to generate random items
                countries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'],
                products = ['Widget', 'Gadget', 'Doohickey'],
                colors = ['Black', 'White', 'Red', 'Green', 'Blue'];

            // add count items
            for (var i = 0; i < count; i++) {
                // constants used to create data items
                var date = new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                    countryId = Math.floor(Math.random() * countries.length),
                    productId = Math.floor(Math.random() * products.length),
                    colorId = Math.floor(Math.random() * colors.length);

                // create the item
                var item = {
                    id: i,
                    start: date,
                    end: date,
                    country: countries[countryId],
                    product: products[productId],
                    color: colors[colorId],
                    amount: Math.random() * 10000 - 5000,
                    active: i % 4 === 0,
                };

                // add the item to the list
                data.push(item);
            }
            return data;
        },
        getNames: function () {
            return ['id', 'start', 'end', 'country', 'product', 'color', 'amount', 'active'];
        }
    };


    ko.applyBindings(new basicVM(dataSvc.getData(100)), document.getElementById('gettingStarted'));
    ko.applyBindings(new currentRecordVM(dataSvc.getData(100)), document.getElementById('currentRecordMgmt'));
    ko.applyBindings(new sortingVM(dataSvc.getData(100), dataSvc.getNames()), document.getElementById('sorting'));
    ko.applyBindings(new filteringVM(dataSvc.getData(100)), document.getElementById('filtering'));
    ko.applyBindings(new groupingVM(dataSvc.getData(100), dataSvc.getNames()), document.getElementById('grouping'));
    ko.applyBindings(new editingVM(dataSvc.getData(5)), document.getElementById('editing'));
    ko.applyBindings(new pagingVM(dataSvc.getData(100)), document.getElementById('paging'));
    ko.applyBindings(new changeTrackingVM(dataSvc.getData(5)), document.getElementById('changeTracking'));
})();