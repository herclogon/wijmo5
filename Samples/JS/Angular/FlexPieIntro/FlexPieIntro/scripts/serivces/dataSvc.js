(function() {
    'use strict';

    angular
        .module('app')
        .factory('dataSvc', function() {
            var svc = {
                getData: getData
            };

            return svc;

            function getData() {
                var names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'],
                    data = [];

                // populate itemsSource
                for (var i = 0; i < names.length; i++) {
                    data.push({
                        name: names[i],
                        value: Math.round(Math.random() * 100)
                    });
                }

                return data;
            }
        });
})();