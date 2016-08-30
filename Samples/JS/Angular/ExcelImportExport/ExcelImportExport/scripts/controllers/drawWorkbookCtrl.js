'use strict';

var app = angular.module('app');

app.controller('drawWorkbookCtrl', ['$scope', function ($scope) {

    $scope.workbook = null;
    $scope.sheetIndex = -1;

    document.getElementById('importFile').addEventListener('change', function () {
        loadWorkbook();
    });

    function loadWorkbook() {
        var reader = new FileReader(),
            fileData;

        reader.onload = function (e) {
        	//$scope.workbook = wijmo.xlsx.XlsxConverter.import(reader.result);
        	var workbook = new wijmo.xlsx.Workbook();
        	workbook.load(reader.result);
        	$scope.workbook = workbook;
            $scope.drawSheet($scope.workbook.activeWorksheet || 0);
            if (!$scope.$root.$$phase) {
                $scope.$apply();
            }
        };
        var file = document.getElementById('importFile').files[0];
        if (file) {
        	//reader.readAsArrayBuffer(file);
        	reader.readAsDataURL(file);
        }
    }

    $scope.drawSheet = function (sheetIndex) {
        var drawRoot = document.getElementById('tableHost');
        drawRoot.textContent = '';
        $scope.sheetIndex = sheetIndex;
        xlsxImport.drawWorksheet($scope.workbook, sheetIndex, drawRoot, 200, 100);
    }

}]);
