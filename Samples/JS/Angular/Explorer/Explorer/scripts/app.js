var app = angular.module('app', ['wj', 'ngRoute']);

// root controller
app.controller('appCtrl', function appCtrl($scope, $route, $templateCache) {

    // clear cache and reload the page when the theme changes
    // (in order to re-create controls with layouts that depend on the theme)
    // https://github.com/angular/angular.js/issues/6280
    $scope.$watch('activeTheme', function () {
        var currentRoute = $route.current;
        if (currentRoute) {
            var currentPageTemplate = currentRoute.templateUrl;
            $templateCache.remove(currentPageTemplate);
            $route.reload();
        }
    });
});

// route provider
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.

    // Infrastructure
    when('/infra/intro', { templateUrl: 'partials/infra/intro.htm' }).
    when('/infra/data', { templateUrl: 'partials/infra/data.htm', controller: 'dataCtrl' }).
    when('/infra/trackChanges', { templateUrl: 'partials/infra/trackChanges.htm', controller: 'changesCtrl' }).
    when('/infra/odata', { templateUrl: 'partials/infra/odata.htm', controller: 'odataCtrl' }).
    when('/infra/globalization', { templateUrl: 'partials/infra/globalization.htm', controller: 'inputCtrl' }).
    when('/infra/events', { templateUrl: 'partials/infra/events.htm', controller: 'dataCtrl' }).
    when('/infra/controls', { templateUrl: 'partials/infra/controls.htm', controller: 'inputCtrl' }).
    when('/infra/templates', { templateUrl: 'partials/infra/templates.htm', controller: 'templateCtrl' }).
    when('/infra/themes', { templateUrl: 'partials/infra/themes.htm', controller: 'inputCtrl' }).
    when('/infra/tooltips', { templateUrl: 'partials/infra/tooltips.htm', controller: 'tooltipCtrl' }).

    // Input
    when('/input/intro', { templateUrl: 'partials/input/intro.htm', controller: 'inputCtrl' }).
    when('/input/listbox', { templateUrl: 'partials/input/listbox.htm', controller: 'inputCtrl' }).
    when('/input/combo', { templateUrl: 'partials/input/combo.htm', controller: 'inputCtrl' }).
    when('/input/autocomplete', { templateUrl: 'partials/input/autocomplete.htm', controller: 'inputCtrl' }).
    when('/input/multiselect', { templateUrl: 'partials/input/multiselect.htm', controller: 'inputCtrl' }).
    when('/input/menu', { templateUrl: 'partials/input/menu.htm', controller: 'inputCtrl' }).
    when('/input/number', { templateUrl: 'partials/input/number.htm', controller: 'inputCtrl' }).
    when('/input/datetime', { templateUrl: 'partials/input/datetime.htm', controller: 'inputCtrl' }).
    when('/input/color', { templateUrl: 'partials/input/color.htm', controller: 'inputCtrl' }).
    when('/input/mask', { templateUrl: 'partials/input/mask.htm', controller: 'inputCtrl' }).
    when('/input/popup', { templateUrl: 'partials/input/popup.htm', controller: 'inputCtrl' }).

    // FlexGrid
    when('/grid/intro', { templateUrl: 'partials/grid/intro.htm', controller: 'basicCtrl' }).
    when('/grid/grouping', { templateUrl: 'partials/grid/grouping.htm', controller: 'basicCtrl' }).
    when('/grid/paging', { templateUrl: 'partials/grid/paging.htm', controller: 'basicCtrl' }).
    when('/grid/star', { templateUrl: 'partials/grid/starsizing.htm', controller: 'starCtrl' }).
    when('/grid/columnLayout', { templateUrl: 'partials/grid/columnLayout.htm', controller: 'basicCtrl' }).
    when('/grid/tree', { templateUrl: 'partials/grid/tree.htm', controller: 'treeCtrl' }).
    when('/grid/merging', { templateUrl: 'partials/grid/merging.htm', controller: 'mergingCtrl' }).
    when('/grid/unbound', { templateUrl: 'partials/grid/unbound.htm', controller: 'unboundCtrl' }).
    when('/grid/ccells', { templateUrl: 'partials/grid/customcells.htm', controller: 'customCellsCtrl' }).
    when('/grid/odata', { templateUrl: 'partials/grid/odata.htm', controller: 'odataCtrl' }).
    when('/grid/editing', { templateUrl: 'partials/grid/editing.htm', controller: 'basicCtrl' }).
    when('/grid/frozen', { templateUrl: 'partials/grid/frozen.htm', controller: 'basicCtrl' }).
    when('/grid/footers', { templateUrl: 'partials/grid/footers.htm', controller: 'basicCtrl' }).
    when('/grid/rtl', { templateUrl: 'partials/grid/rtl.htm', controller: 'basicCtrl' }).
    when('/grid/templates', { templateUrl: 'partials/grid/templates.htm', controller: 'basicCtrl' }).
    when('/grid/nodctv', { templateUrl: 'partials/grid/nodctv.htm', controller: 'noDctvCtrl' }).
    when('/grid/filter', { templateUrl: 'partials/grid/filter.htm', controller: 'filterCtrl' }).
    when('/grid/groupPanel', { templateUrl: 'partials/grid/groupPanel.htm', controller: 'groupPanelCtrl' }).
    when('/grid/rowDetails', { templateUrl: 'partials/grid/rowDetails.htm', controller: 'rowDetailsCtrl' }).
    when('/grid/excelImportExport', { templateUrl: 'partials/grid/excelImportExport.htm', controller: 'excelImportExportCtrl' }).
    when('/grid/pdfExport', { templateUrl: 'partials/grid/pdfExport.htm', controller: 'pdfExportCtrl' }).

    // Chart
    when('/chart/intro', { templateUrl: 'partials/chart/intro.htm', controller: 'chartCtrl' }).
    when('/chart/binding', { templateUrl: 'partials/chart/binding.htm', controller: 'chartBindingCtrl' }).
    when('/chart/seriesBinding', { templateUrl: 'partials/chart/seriesBinding.htm', controller: 'chartSeriesBindingCtrl' }).
    when('/chart/headerFooter', { templateUrl: 'partials/chart/headerFooter.htm', controller: 'chartHeaderFooterCtrl' }).
    when('/chart/hitTest', { templateUrl: 'partials/chart/hitTest.htm', controller: 'chartHitTestCtrl' }).
    when('/chart/selection', { templateUrl: 'partials/chart/selection.htm', controller: 'chartSelectionCtrl' }).
    when('/chart/labels', { templateUrl: 'partials/chart/labels.htm', controller: 'chartLabelsCtrl' }).
    when('/chart/itemFormatter', { templateUrl: 'partials/chart/itemFormatter.htm', controller: 'chartItemFormatterCtrl' }).
    when('/chart/bubble', { templateUrl: 'partials/chart/bubble.htm', controller: 'chartBubbleCtrl' }).
    when('/chart/zoom', { templateUrl: 'partials/chart/zoom.htm', controller: 'chartZoomCtrl' }).
    when('/chart/finance', { templateUrl: 'partials/chart/finance.htm', controller: 'chartFinanceCtrl' }).
    when('/chart/marker', { templateUrl: 'partials/chart/marker.htm', controller: 'chartMarkerCtrl' }).
    when('/chart/zones', { templateUrl: 'partials/chart/zones.htm', controller: 'chartZonesCtrl' }).
    when('/chart/axes', { templateUrl: 'partials/chart/axes.htm', controller: 'chartAxesCtrl' }).
    when('/chart/plotAreas', { templateUrl: 'partials/chart/plotAreas.htm', controller: 'chartPlotAreasCtrl' }).
    when('/chart/animation', { templateUrl: 'partials/chart/animation.htm', controller: 'chartAnimationCtrl' }).
    when('/chart/annotations', { templateUrl: 'partials/chart/annotations.htm', controller: 'chartAnnotationsCtrl' }).
    when('/chart/rangeSelector', { templateUrl: 'partials/chart/rangeSelector.htm', controller: 'chartRangeSelectorCtrl' }).
    when('/chart/waterfall', { templateUrl: 'partials/chart/waterfall.htm', controller: 'chartWaterfallCtrl' }).
    when('/chart/trendline', { templateUrl: 'partials/chart/trendline.htm', controller: 'chartTrendlineCtrl' }).
    when('/chart/sunburst', { templateUrl: 'partials/chart/sunburst.htm', controller: 'chartSunburstCtrl' }).

    // Pie chart
    when('/piechart/intro', { templateUrl: 'partials/piechart/intro.htm', controller: 'pieChartCtrl' }).
    when('/piechart/selection', { templateUrl: 'partials/piechart/selection.htm', controller: 'pieChartSelectionCtrl' }).
    when('/piechart/itemFormatter', { templateUrl: 'partials/piechart/itemFormatter.htm', controller: 'pieChartItemFormatterCtrl' }).
    when('/piechart/animation', { templateUrl: 'partials/piechart/animation.htm', controller: 'pieChartAnimationCtrl' }).

    // Gauge
    when('/gauge/intro', { templateUrl: 'partials/gauge/intro.htm', controller: 'gaugeCtrl' }).
    when('/gauge/linear', { templateUrl: 'partials/gauge/linear.htm', controller: 'gaugeCtrl' }).
    when('/gauge/radial', { templateUrl: 'partials/gauge/radial.htm', controller: 'gaugeCtrl' }).
    when('/gauge/bullet', { templateUrl: 'partials/gauge/bullet.htm', controller: 'gaugeCtrl' }).

    // default...
    when('/', { templateUrl: 'partials/infra/intro.htm', controller: 'basicCtrl' }).
    otherwise({ redirectTo: '/' });
}]);

