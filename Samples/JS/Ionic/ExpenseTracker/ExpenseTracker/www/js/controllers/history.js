(function () {
    'use strict';

    angular
        .module('app')
        .controller('history', History);

    function History($scope, $ionicListDelegate, $ionicActionSheet, ExpenseSvc) {
        // get expenses from localStorage
        $scope.expenses = ExpenseSvc.getExpensesWithCategory();

        // method to confirm and likely delete expense
        $scope.confirmDelete = function (expenseId) {
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
                    $scope.expenses = ExpenseSvc.deleteExpense(expenseId);

                    // hide the confirmation dialog
                    hideSheet();
                }
            });
        };
    }
})();