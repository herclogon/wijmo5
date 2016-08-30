// get application
var app = angular.module('app');

// add controller
app.controller('appCtrl', function appCtrl($scope) {

    // show that edit events fire also for custom editors
    $scope.editEnding = function (s, e) {
        console.log(wijmo.format('Edit ending for cell {row}, {col}', e));
    }
    $scope.editEnded = function (s, e) {
        console.log(wijmo.format('Edit ended for cell {row}, {col}', e));
    }

    // expose some data
    $scope.countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
    $scope.products = 'Widget,Gadget,Doohickey'.split(',');
    $scope.companies = [
        { symbol: 'BH', name: 'Biglari Holdings Inc.', country: 'US' },
        { symbol: 'CMG', name: 'Chipotle Mexican Grill, Inc.', country: 'US' },
        { symbol: 'NEU', name: 'NewMarket Corporation', country: 'US' },
        { symbol: 'ALX', name: 'Alexander\'s, Inc.', country: 'US' },
        { symbol: 'MTD', name: 'Mettler-Toledo International, Inc.', country: 'US' },
        { symbol: 'ALRB', name: 'Alere Inc.', country: 'US' },
        { symbol: 'BLK', name: 'BlackRock, Inc.', country: 'US' },
        { symbol: 'SHW', name: 'Sherwin-Williams Company (The)', country: 'US' },
        { symbol: 'TDG', name: 'Transdigm Group Incorporated', country: 'US' },
        { symbol: 'AYI', name: 'Acuity Brands Inc', country: 'US' },
        { symbol: 'ICE', name: 'Intercontinental Exchange Inc.', country: 'US' },
        { symbol: 'PSA', name: 'Public Storage', country: 'US' },
        { symbol: 'LMT', name: 'Lockheed Martin Corporation', country: 'US' },
        { symbol: 'BCR', name: 'C.R. Bard, Inc.', country: 'US' },
        { symbol: 'AGN', name: 'Allergan plc.', country: 'US' },
        { symbol: 'GWW', name: 'W.W. Grainger, Inc.', country: 'US' },
        { symbol: 'ESS', name: 'Essex Property Trust, Inc.', country: 'US' },
        { symbol: 'NOC', name: 'Northrop Grumman Corporation', country: 'US' },
        { symbol: 'SPG', name: 'Simon Property Group, Inc.', country: 'US' },
        { symbol: 'ADS', name: 'Alliance Data Systems Corporation', country: 'US' },
        { symbol: 'LNKD', name: 'LinkedIn Corporation', country: 'Canada' },
        { symbol: 'MLM', name: 'Martin Marietta Materials, Inc.', country: 'Canada' },
        { symbol: 'MHK', name: 'Mohawk Industries, Inc.', country: 'Canada' },
        { symbol: 'HUM', name: 'Humana Inc.', country: 'Canada' },
        { symbol: 'MCK', name: 'McKesson Corporation', country: 'Canada' },
        { symbol: 'AVB', name: 'AvalonBay Communities, Inc.', country: 'Canada' },
        { symbol: 'RE', name: 'Everest Re Group, Ltd.', country: 'Canada' },
        { symbol: 'TFX', name: 'Teleflex Incorporated', country: 'Canada' },
        { symbol: 'MSG', name: 'MSG Networks Inc.', country: 'Canada' },
        { symbol: 'MMM', name: '3M Company', country: 'Canada' },
        { symbol: 'ROP', name: 'Roper Technologies, Inc.', country: 'Canada' },
        { symbol: 'COO', name: 'Cooper Companies, Inc. (The)', country: 'Canada' },
        { symbol: 'BDX', name: 'Becton, Dickinson and Company', country: 'Canada' },
        { symbol: 'TPL', name: 'Texas Pacific Land Trust', country: 'Canada' },
        { symbol: 'WHR', name: 'Whirlpool Corporation', country: 'Canada' }
    ];
    $scope.companyDataMap = new wijmo.grid.DataMap($scope.companies, 'symbol', 'name');
    $scope.data = new wijmo.collections.CollectionView(getData(50));
    $scope.data.pageSize = 10;

    // get some random data
    function getData(count) {
        var data = [],
            countries = $scope.countries,
            products = $scope.products,
            colors = $scope.colors,
            companies = $scope.companies,
            dt = new Date();
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                date: new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                time: new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                country: countries[Math.floor(Math.random() * countries.length)],
                product: products[Math.floor(Math.random() * products.length)],
                company: companies[Math.floor(Math.random() * companies.length)].symbol,
                amount: Math.random() * 10000 - 5000,
                discount: Math.random() / 4
            });
        }
        return data;
    }

    // AutoComplete: select companies by symbol and name based on a query string
    // not actually used in this sample since we have the whole collection, but
    // left over as a demo.
    $scope.companySourceFunction = function (query, max, callback) {
        var items = $scope.companies,
            response = [];
        query = query.toLowerCase();
        for (var i = 0; i < items.length && response.length < max; i++) {
            var item = items[i];
            if (item.name.toLowerCase().indexOf(query) > -1 ||
                item.symbol.toLowerCase().indexOf(query) > -1) {
                response.push(item);
            }
        }
        callback(response);
    }

    // AutoComplete: format items showing the company symbol and name
    $scope.companyFormatter = function (index, text) {
        var item = this.collectionView.items[index];
        return wijmo.format('<b>{symbol}</b>: {name}', item);
    }

});
