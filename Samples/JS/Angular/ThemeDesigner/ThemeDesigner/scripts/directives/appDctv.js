// get application
var app = angular.module('app');

// add directive
// InputDate directive
app.directive('style', function ($compile) {
        return {
            restrict: 'E',
            link: function postLink(scope, element) {
                if (element.html()) {
                    var template = $compile('<style ng-bind-template="' + element.html() + '"></style>');
                    element.replaceWith(template(scope));
                }
            }
        };
    })