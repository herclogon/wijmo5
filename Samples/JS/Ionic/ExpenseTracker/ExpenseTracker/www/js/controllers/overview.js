(function () {
    'use strict';

    angular
        .module('app')
        .controller('overview', Overview);

    function Overview($scope, $filter, $state, BudgetSvc, ExpenseSvc) {
        // get budget from localStorage
        $scope.budget = BudgetSvc.getBudget();

        // Boolean flag to determine if any expenses have been added
        $scope.hasExpenses = ExpenseSvc.hasExpenses();

        // get sum of all expenses
        $scope.totalExpenses = ExpenseSvc.getExpenseTotal();

        // get expense summary for all categories
        $scope.categories = ExpenseSvc.getCategoriesExpenseSummary();

        // init CSS class to style expense sum when compared against budget
        $scope.expensesCssClass = 'energized';


        //*** set the budget message
        // NOTE: use $filter service to format the total prior to concatenating the string
        $scope.budgetMsg = $scope.totalExpenses <= $scope.budget
                                                    ? $filter('currency')($scope.budget - $scope.totalExpenses).concat(' until you reach your monthly limit')
                                                    : $filter('currency')($scope.totalExpenses - $scope.budget).concat(' over your monthly limit');


        //*** set the class for budget message
        $scope.expensesCssClass = 0 === $scope.totalExpenses
                                    ? 'dark'
                                    : $scope.totalExpenses === $scope.budget
                                        ? 'energized'
                                        : $scope.totalExpenses > $scope.budget
                                            ? 'assertive'
                                            : 'balanced';


        //*** FlexChart's selectionChanged event handler
        $scope.selectionChanged = function (sender) {
            var category = null;
            if (sender.selection && sender.selection.collectionView.currentItem) {
                // get the currently selected category
                category = sender.selection.collectionView.currentItem;

                // navigate to the category history page to display expenses for selected category
                $state.go('app.category-history', { category: category.slug });
            }
        };


        //*** set color of FlexChart's plot elements
        $scope.itemFormatter = function (engine, hitTestInfo, defaultFormat) {
            if (hitTestInfo.chartElement === wijmo.chart.ChartElement.SeriesSymbol) {
                // set the SVG fill and stroke based on the category's bgColor property
                engine.fill = hitTestInfo.item.bgColor;
                engine.stroke = hitTestInfo.item.bgColor;
                defaultFormat();
            }
        };
    }
})();