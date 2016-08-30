(function () {
    'use strict';

    angular
        .module('app')
        .controller('editBudget', EditBudget);

    function EditBudget($scope, $state, BudgetSvc) {
        // get data from localStorage
        // NOTE: we use an object because of the problem outlined
        //       in http://codetunnel.com/angularjs-controller-as-or-scope/
        $scope.data = {
            budget: BudgetSvc.getBudget()
        };

        // method to update the budget
        $scope.updateBudget = function () {
            // update localStorage
            BudgetSvc.setBudget($scope.data.budget);
            $scope.cancel();
        };

        // method to cancel (i.e. navigate to the dashboard)
        $scope.cancel = function () {
            $state.go('app.overview');
        };
    }
})();