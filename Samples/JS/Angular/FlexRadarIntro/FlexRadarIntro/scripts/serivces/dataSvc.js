(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataSvc', function() {
            var svc = {
                getData: getData,
                getPolarData: getPolarData
            };

            return svc;
            
            function getData() {
                var data = [],
                    countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');

                // populate itemsSource
                for (var i = 0; i < countries.length; i++) {
                    data.push({
                        country: countries[i],
                        downloads: Math.ceil(Math.random() * 80) + 20,
                        sales: Math.ceil(Math.random() * 80) + 20
                    });
                }
                return data;
            }

            function getPolarData() {
                var data = [],
                    len = 360;

                // populate itemsSource
                for (var i = 0; i <= len; i+=10) {
                    data.push({
                        longitude: i,
                        latitude1: Math.ceil(Math.random() * 30) + 60,
                        latitude2: Math.ceil(Math.random() * 30) + 30
                    });
                }
                return data;
            }
        });
})();