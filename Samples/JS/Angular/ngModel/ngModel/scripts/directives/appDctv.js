var app = angular.module('app');

// even-number validator directive
app.directive('evenNumber', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.push(function (viewValue) {
                ctrl.$setValidity('evenNumber', !viewValue || viewValue % 2 === 0);
                return viewValue;
            });
        }
    };
});

// Tab control directives
app.directive('appTab', function () {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        controller: function ($scope, $element) {
            var panes = $scope.panes = [];

            $scope.select = function (pane) {
                angular.forEach(panes, function (pane) {
                    pane.selected = false;
                });
                pane.selected = true;
            }

            this.addPane = function (pane) {
                if (panes.length == 0) $scope.select(pane);
                panes.push(pane);
            }
        },
        template:
            '<div class="tabbable">' +
            '<ul class="nav nav-tabs">' +
                '<li ng-repeat="pane in panes" ng-class="{active:pane.selected}">' +
                '<a href="" ng-click="select(pane)">{{pane.title}}</a>' +
                '</li>' +
            '</ul>' +
            '<div class="tab-content" ng-transclude></div>' +
            '</div>',
        replace: true
    };
})
.directive('appTabPane', function () {
    return {
        require: '^appTab',
        restrict: 'E',
        transclude: true,
        scope: { title: '@' },
        link: function (scope, element, attrs, tabsCtrl) {
            tabsCtrl.addPane(scope);
        },
        template:
            '<div class="tab-pane" ng-class="{active: selected}" ng-transclude>' +
            '</div>',
        replace: true
    };
});