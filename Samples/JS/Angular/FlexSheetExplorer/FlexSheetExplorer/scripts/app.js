var app = angular.module('app', ['wj', 'ngRoute']);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/intro', { templateUrl: 'views/intro.htm', controller: 'introCtrl' })
		.when('/dataBinding', { templateUrl: 'views/dataBinding.htm', controller: 'dataBindingCtrl' })
		.when('/sorting', { templateUrl: 'views/sorting.htm', controller: 'sortingCtrl' })
		.when('/filtering', { templateUrl: 'views/filtering.htm', controller: 'filteringCtrl' })
		.when('/formatCells', { templateUrl: 'views/formatCells.htm', controller: 'formatCellsCtrl' })
		.when('/cellMerging', { templateUrl: 'views/cellMerging.htm', controller: 'cellMergingCtrl' })
		.when('/multipleHeaders', { templateUrl: 'views/multipleHeaders.htm', controller: 'multipleHeadersCtrl' })
		.when('/dragDrop', { templateUrl: 'views/dragDrop.htm', controller: 'dragDropCtrl' })
		.when('/frozenCells', { templateUrl: 'views/frozenCells.htm', controller: 'frozenCellsCtrl' })
		.when('/formulas', { templateUrl: 'views/formulas.htm', controller: 'formulasCtrl' })
		.when('/customFunction', { templateUrl: 'views/customFunction.htm', controller: 'customFuncCtrl' })
		.when('/excelIO', { templateUrl: 'views/excelIO.htm', controller: 'excelIOCtrl' })
		// default...
		.when('/', { templateUrl: 'views/intro.htm', controller: 'introCtrl' })
		.otherwise({ redirectTo: '/' });
}]);