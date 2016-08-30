// get referece to Angular app
var app = angular.module('app');

// add directive for the ColorWheel control
app.directive('colorWheel', function () {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            palette: '=',
            themeChanged: '&'
        },
        template: '<div/>',
        link: function (scope, element, attrs) {
            var wheel = new wijmo.material.ColorWheel(element[0], {
                palette: scope.palette,
                primary: 'Indigo',
                accent: 'Pink',
                themeChanged: function (s, e) {
                    if (scope.themeChanged) {
                        scope.themeChanged({ s: s, e: e });
                    }
                }
            });
        }
    }
});
