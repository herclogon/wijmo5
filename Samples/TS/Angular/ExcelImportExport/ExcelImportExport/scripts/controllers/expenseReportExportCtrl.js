'use strict';

var app = angular.module('app');

app.controller('expenseReportExportCtrl', ['$scope', 'dataService', function ($scope, dataService) {

    $scope.employeeExpenses = dataService.getEmployeesWithExpences();

    $scope.saveExpenses = function () {
        var workbook = XlsxExport.exportExpenseReport($scope.employeeExpenses);
    	//var xlsx = wijmo.xlsx.XlsxConverter.exportToFile(workbook, 'ExpenseReport.xlsx');
        workbook.save('ExpenseReport.xlsx');
    }
}]);
