(function () {
    'use strict';

    angular
        .module('app')
        .controller('detailsGrid', DetailsGrid);

    function DetailsGrid($scope, $state, ExpenseSvc) {
        // get expenses from localStorage and initialize CollectionView
        $scope.data = new wijmo.collections.CollectionView(ExpenseSvc.getExpenses());

        // enable CollectionView's change tracking
        $scope.data.trackChanges = true;

        // method for batch update of expenses
        $scope.update = function () {
            // make sure items have been edited
            if ($scope.data.itemsEdited.length) {
                // bulk update expenses
                ExpenseSvc.updateExpenses($scope.data.itemsEdited);

                // return to overview page
                $scope.cancel();
            }
        };

        // method to cancel (i.e. navigate to dashboard)
        $scope.cancel = function () {
            $state.go('app.overview');
        };

        // FlexGrid.rowEditEnding event handler
        $scope.rowEditEnding = function (sender, args) {
            var expense = $scope.data.currentEditItem,      // get expense being edited
                isValid = isExpenseValid(expense);          // validate expense

            // if the expense isn't valid, cancel the edit operation
            if (!isValid) {
                $scope.data.cancelEdit();
                return;
            }
        };

        // local validation function to make sure the expense is valid before committing the row edit
        function isExpenseValid(expense) {
            return expense &&
                   expense.title !== '' &&
                   expense.title.length < 55 &&
                   wijmo.isNumber(expense.amount) &&
                   wijmo.isDate(expense.date) &&
                   expense.amount >= 0;
        }
    }
})();