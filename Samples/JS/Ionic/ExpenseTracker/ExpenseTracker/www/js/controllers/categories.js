(function () {
    'use strict';

    angular
        .module('app')
        .controller('categories', Categories);

    function Categories($scope, CategorySvc) {
        // get categories from localStorage
        $scope.categories = CategorySvc.getCategories();

        // method for reordering categories
        $scope.reorderCategories = function (fromIndex, toIndex) {
            // use CategorySvc to reorder categories
            $scope.categories = CategorySvc.reorderCategories(fromIndex, toIndex);
        };
    }
})();