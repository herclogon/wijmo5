(function () {
    'use strict';

    angular
        .module('app')
        .controller('appCtrl', function ($scope) {
            // populate data
            var data = [],
                names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'];
            for (var i = 0; i < names.length; i++) {
                data.push({
                    name: names[i],
                    mar: Math.random() * 3,
                    apr: Math.random() * 10,
                    may: Math.random() * 5
                });
            }

            // store some data related to the FlexChart
            $scope.ctx = {
                chart: null,
                cv: new wijmo.collections.CollectionView(data),
                chartType: 'Column'
            };

            // Wijmo Menu's itemClicked event handler
            $scope.itemClicked = function (menu) {
                if ($scope.ctx.chart == null) {
                    return;
                }
                $scope.ctx.chart.saveImageToFile('chart.' + menu.selectedItem.value || 'png');
            };

        });
})();