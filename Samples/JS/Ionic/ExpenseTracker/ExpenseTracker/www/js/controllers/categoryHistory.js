(function () {
    'use strict';

    angular
        .module('app')
        .controller('categoryHistory', CategoryHistory);

    function CategoryHistory($scope, $stateParams, $ionicListDelegate, $ionicActionSheet, CategorySvc, ExpenseSvc) {
        // get the category from localStorage based on the route parameter
        var category = CategorySvc.getCategoryBySlug($stateParams.category);

        // set the header title
        $scope.title = category.name;

        // get all expenses from localStorage for the category
        $scope.expenses = ExpenseSvc.getExpensesByCategorySlug(category.slug);

        // method to confirm and likely delete expense
        $scope.confirmDelete = function (expense) {
            // show ionic actionSheet to confirm delete operation
            // show() returns a function to hide the actionSheet
            var hideSheet = $ionicActionSheet.show({
                titleText: 'Are you sure that you\'d like to delete this expense?',
                cancelText: 'Cancel',
                destructiveText: 'Delete',
                cancel: function () {
                    // if the user cancel's deletion, hide the list item's delete button
                    $ionicListDelegate.closeOptionButtons();
                },
                destructiveButtonClicked: function () {
                    // delete expense by its id property
                    // also pass category's ID so we can return correct set of data
                    $scope.expenses = ExpenseSvc.deleteExpense(expense.id, category.id);

                    // hide the confirmation dialog
                    hideSheet();
                }
            });
        };
    }
})();