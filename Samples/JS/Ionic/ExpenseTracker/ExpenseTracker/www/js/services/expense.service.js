(function () {
	'use strict';

	angular
		.module('app')
		.factory('ExpenseSvc', ExpenseSvc);

    // serves as a way to interact with our Expense related data
    // and should be consumed from controllers
	function ExpenseSvc(DataSvc, GuidSvc, CategorySvc) {
		var svc = {
            hasExpenses:  hasExpenses,
            getExpenseTotal: getExpenseTotal,
            getExpenses: getExpenses,
            getExpensesWithCategory: getExpensesWithCategory,
            getExpenseById: getExpenseById,
            insertExpense: insertExpense,
            deleteExpense: deleteExpense,
            updateExpenses: updateExpenses,
            getExpensesByCategorySlug: getExpensesByCategorySlug,
            getExpensesByCategoryId: getExpensesByCategoryId,
            getCategoriesExpenseSummary: getCategoriesExpenseSummary
		};

		return svc;

        // determines if the app has any Expenses
        function hasExpenses() {
            var expenses = getExpenses();

            return expenses && expenses.length > 0;
        }

        // get the sum of all Expenses
        function getExpenseTotal() {
            var expenses = getExpenses(),
                total = 0,
                amtArr;

            if(expenses && expenses.length > 0) {
                amtArr = expenses.map(function (expense) {
                    return expense.amount;
                });

                total = amtArr.reduce(function (prev, curr) {
                    return prev + curr;
                }, 0);
            }

            return total;
        }

        // return all Expenses
        function getExpenses() {
            var expenseObj = DataSvc.get();

            return expenseObj.expenses || [];
        }

        // get all Expenses with parent Category
        function getExpensesWithCategory() {
            var expenses = getExpenses();

            expenses.forEach(function(expense) {
                expense.category = CategorySvc.getCategoryById(expense.categoryId);
            });

            return expenses;
        }

        // return a single expense
        function getExpenseById(expenseId) {
            var expenses = getExpenses(),
                tempExpenses;

            tempExpenses = expenses.filter(function(expense) {
                return expense.id === expenseId;
            });

            return tempExpenses && tempExpenses.length > 0 ? tempExpenses[0] : {};

        }

        // insert Expense
        function insertExpense(expense) {
            var expenseObj = DataSvc.get();

            // using our GuidSvc, emulate primary key
            expense.id = GuidSvc.getGuid();

            expenseObj.expenses.push(expense);
            DataSvc.put(expenseObj);
        }

        // delete an Expense by ID
        function deleteExpense(expenseId, categoryId) {
            var expenseObj = DataSvc.get(),
                matches,
                index;

            matches = expenseObj.expenses.filter(function(expense) {
                return expense.id === expenseId;
            });

            if(matches && matches.length > 0) {
                index = expenseObj.expenses.indexOf(matches[0]);
                expenseObj.expenses.splice(index, 1);
                DataSvc.put(expenseObj);
            }

            return categoryId
                        ? getExpensesByCategoryId(categoryId)
                        : getExpensesWithCategory()
                            || [];
        }

        // batch update Expenses
        function updateExpenses(updatedExpenses) {
            var expenseObj;

            if(!updatedExpenses || updatedExpenses.length <= 0) {
                return;
            }

            expenseObj = DataSvc.get();

            for(var i = 0; i < updateExpenses.length; i++) {
                for(var j = 0; j < expenseObj.expenses.length; j++) {
                    // compare id's
                    if(expenseObj.expenses[j].id === updatedExpenses[i].id) {
                        // update expense in collection
                        expenseObj.expenses[j] = updatedExpenses[i];

                        // stop this cycle
                        break;
                    }
                }
            }

            DataSvc.put(expenseObj);
        }

        // retrieve all Expenses for a given Category
        function getExpensesByCategorySlug(slug) {
            var category = CategorySvc.getCategoryBySlug(slug);

            return getExpensesByCategoryId(category.id);
        }

        // retrieve all Expenses for a Category
        function getExpensesByCategoryId(categoryId) {
            var expenses = getExpenses(),
                category = CategorySvc.getCategoryById(categoryId),
                tempExpenses;

            tempExpenses = expenses.filter(function (expense) {
                return expense.categoryId === categoryId;
            });

            tempExpenses.forEach(function(expense) {
                expense.category = category;
            });

            return tempExpenses || [];
        }

        // get all of the Categories and the sum of each Category's Expenses
        function getCategoriesExpenseSummary() {
            var categories = CategorySvc.getCategories();

            categories.forEach(function (category) {
                var catExpenses = getExpensesByCategoryId(category.id);

                var catAmtArr = catExpenses.map(function (curr) {
                    return curr.amount;
                });

                category.total = catAmtArr.reduce(function (prev, curr) {
                    return prev + curr;
                }, 0);
            });

            return categories;
        }
	}
})();