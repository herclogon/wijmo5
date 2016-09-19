// get referece to Angular app
var app = angular.module('app');

// define the app's controller
app.controller('appCtrl', function ($scope) {

    // CSS url templates
    var CSS_WIJMO = 'http://cdn.wijmo.com/5.latest/styles/themes/material/wijmo.theme.material.{colors}.min.css';
    var CSS_MDL = 'https://code.getmdl.io/1.1.1/material.{colors}.min.css';

    // define the standard Material Design Lite color palette
    $scope.palette = [
        { name: 'Cyan', outer: 'rgb(0, 188, 212)', inner: 'rgb(0, 151, 167)' },
        { name: 'Teal', outer: 'rgb(0, 150, 136)', inner: 'rgb(0, 121, 107)' },
        { name: 'Green', outer: 'rgb(76, 175, 80)', inner: 'rgb(56, 142, 60)' },
        { name: 'Light Green', outer: 'rgb(139, 195, 74)', inner: 'rgb(104, 159, 56)' },
        { name: 'Lime', outer: 'rgb(205, 220, 57)', inner: 'rgb(175, 180, 43)' },
        { name: 'Yellow', outer: 'rgb(255, 235, 59)', inner: 'rgb(251, 192, 45)' },
        { name: 'Amber', outer: 'rgb(255, 193, 7)', inner: 'rgb(255, 160, 0)' },
        { name: 'Orange', outer: 'rgb(255, 152, 0)', inner: 'rgb(245, 124, 0)' },
        { name: 'Brown', outer: 'rgb(121, 85, 72)', inner: 'rgb(93, 64, 55)', primary: true },
        { name: 'Blue Grey', outer: 'rgb(96, 125, 139)', inner: 'rgb(69, 90, 100)', primary: true },
        { name: 'Grey', outer: 'rgb(158, 158, 158)', inner: 'rgb(97, 97, 97)', primary: true },
        { name: 'Deep Orange', outer: 'rgb(255, 87, 34)', inner: 'rgb(230, 74, 25)' },
        { name: 'Red', outer: 'rgb(244, 67, 54)', inner: 'rgb(211, 47, 47)' },
        { name: 'Pink', outer: 'rgb(233, 30, 99)', inner: 'rgb(194, 24, 91)' },
        { name: 'Purple', outer: 'rgb(156, 39, 176)', inner: 'rgb(123, 31, 162)' },
        { name: 'Deep Purple', outer: 'rgb(103, 58, 183)', inner: 'rgb(81, 45, 168)' },
        { name: 'Indigo', outer: 'rgb(63, 81, 181)', inner: 'rgb(48, 63, 159)' },
        { name: 'Blue', outer: 'rgb(33, 150, 243)', inner: 'rgb(25, 118, 210)' },
        { name: 'Light Blue', outer: 'rgb(3, 169, 244)', inner: 'rgb(2, 136, 209)' }
    ];

    // update URLs when the theme changes
    $scope.themeChanged = function (s, e) {
        if (s.primary && s.accent) {
            var colors = s.primary.toLowerCase().replace(/ /g, '_') + '-' + s.accent.toLowerCase().replace(/ /g, '_');
            $scope.wijmoUrl = CSS_WIJMO.replace('{colors}', colors);
            $scope.materialUrl = CSS_MDL.replace('{colors}', colors);
            $scope.primary = s.primary;
            $scope.accent = s.accent;
            $scope.$apply();
        }
    }

    // download minified CSS for the current theme
    $scope.downloadCss = function () {
        var a = document.createElement("a");
        a.download = 'wijmo.theme.material.min.css';
        a.href = $scope.wijmoUrl;
        a.click();
    }

    // values input controls in the preview
    $scope.theGaugeValue = 80;
    $scope.theDateTime = new Date(2016, 2, 2, 13, 30);

    // sample validation functions
    $scope.checkEven = function (number) {
        return wijmo.isNumber(number) && number % 2 != 0
            ? 'not an even number...'
            : ''
    }
});
