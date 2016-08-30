(function () {
	'use strict';

	angular
		.module('app')
		.factory('BudgetSvc', BudgetSvc);

    // serves as a way to interact with our Budget related data
    // and should be consumed from controllers
	function BudgetSvc(DataSvc) {
		var svc = {
			getBudget: getBudget,
            setBudget: setBudget
		};

		return svc;

        // return Budget value
        function getBudget() {
            var expenseObj = DataSvc.get();
            return expenseObj.budget;
        }

        // set Budget value
        function setBudget(budget) {
            var expenseObj = DataSvc.get();
            expenseObj.budget = budget;
            DataSvc.put(expenseObj);
        }
	}
})();