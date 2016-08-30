(function() {
    'use strict';

    function dataSvc() {
        var svc = this;

        svc.getData = function() {
            var countries = ['Brazil', 'Canada', 'France', 'Germany', 'USA'],
                item = null,
                data = [];

            for (var i = 0; i < countries.length; i++) {
                item = {
                    country: countries[i],
                    sales: Math.random() * 1000,
                    downloads: Math.random() * 1000
                };

                data.push(item);
            }

            return data;
        };
    }

    angular
        .module('app')
        .service('dataSvc', dataSvc);

})();