(function () {
    'use strict';

    angular
        .module('app')
        .controller('createExpense', CreateExpense);

    function CreateExpense($scope, $state, CategorySvc, ExpenseSvc) {
        // init Expense object that the user will create
        $scope.expense = new Expense('', 0, new Date(), '', null);

        // get categories with HTML content property
        $scope.categories = CategorySvc.getCategoriesWithHtmlContent();

        // method to save expense in localStorage
        $scope.addExpense = function () {
            // insert expense
            ExpenseSvc.insertExpense($scope.expense);
            $scope.cancel();
        };

        // method for cancelling (i.e. navigate to the dashboard)
        $scope.cancel = function () {
            $state.go('app.overview');
        };
    }
})();