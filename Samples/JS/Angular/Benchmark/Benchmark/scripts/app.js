// define app and dependencies
// wj: Wijmo 5
// wijmo: wijmo 3
angular.module('app', ['ngRoute', 'wj', 'wijmo', 'ngGrid', 'ui.grid']).
  config(['$routeProvider', function ($routeProvider) {
      $routeProvider.

      // grids
      when('/flexgrid',     { templateUrl: 'partials/flexgrid.htm' }).
	  when('/flexsheet',    { templateUrl: 'partials/flexsheet.htm' }).
      when('/wijgrid',      { templateUrl: 'partials/wijgrid.htm' }).
      when('/spreadjs',     { templateUrl: 'partials/spreadjs.htm' }).
      when('/html',         { templateUrl: 'partials/htmltable.htm' }).
      when('/slickgrid',    { templateUrl: 'partials/slickgrid.htm' }).
      when('/nggrid',       { templateUrl: 'partials/nggrid.htm' }).
      when('/uigrid',       { templateUrl: 'partials/uigrid.htm' }).
      when('/kendogrid',    { templateUrl: 'partials/kendogrid.htm' }).
      when('/iggrid',       { templateUrl: 'partials/iggrid.htm' }).

      // charts
      when('/flexchart',    { templateUrl: 'partials/flexchart.htm' }).
      when('/wijchart',     { templateUrl: 'partials/wijchart.htm' }).
      when('/highcharts',   { templateUrl: 'partials/highcharts.htm' }).
      when('/flotcharts',   { templateUrl: 'partials/flotcharts.htm' }).
      when('/kendochart',   { templateUrl: 'partials/kendochart.htm' }).
      when('/igchart',      { templateUrl: 'partials/igchart.htm' }).
      when('/gcharts',      { templateUrl: 'partials/googlecharts.htm' }).

      // other
      when('/home',         { templateUrl: 'partials/home.htm' }).
      when('/',             { templateUrl: 'partials/home.htm' }).
      otherwise({ redirectTo: '/' });
  }]);
