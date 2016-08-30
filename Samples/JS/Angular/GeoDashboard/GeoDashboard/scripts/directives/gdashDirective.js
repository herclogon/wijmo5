'use strict';

var m = angular.module('gdash');

// ** gdash-tile directive
// - frame for tile content.
// - provides a header and a click event.
m.directive('gdashTile', function () {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            header: '@',
            click: '&'
        },
        template:
            '<div class="tile" style="float:left">' +
            '  <strong>{{header}}</strong>' +
            '  <div ng-transclude></div>' +
            '</div>',
        link: function (scope, element, attrs) {
            element.click(function () {

                // invoke event handler
                if (scope.click) scope.click();

                // select this tile and un-select all others
                var tiles = $(element.parent()).children();
                $(tiles).css('box-shadow', '');
                element.css('box-shadow', '2px 2px 12px black');
            });
        }
    }
});

// ** gdash-enter directive
// - invokes a method when the enter key is pressed on the parent element.
m.directive('gdashEnter', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.keypress(function (event) {
                if (event.which == 13 && attrs.gdashEnter) {
                    scope.$eval(attrs.gdashEnter);
                    event.preventDefault();
                }
            })
        }
    }
});

// ** gdash-slider directive
// - slider to show index values.
// - css is all internal to make the directive self-contained.
m.directive('gdashSlider', function () {
    return {
        restrict: 'E',
        scope: {
            value: '@',
            color: '@'
        },
        template:
            '<div style="height: 34px">' +
            '  <div style="width:230px; height:1px; background:gray; position:relative;	top:50%">' +
            '    <div style="text-align:center; border-radius:5px; width:10px; height:10px; background:#d2d1cf; position:relative; left:50%; top:-5px;"></div>' +
            '    <div class="marker" ng-style="{background:color}" style="text-align:center; border-radius:30px; width:30px; height:30px; line-height:30px; background:black; color:white; position:relative; top:-25px; left:25%">' +
            '      {{value}}' +
            '    </div>' +
            '  </div>' +
            '</div>',
        link: function (scope, element, attrs) {

            // update slider position when value changes
            scope.$watch('value', function () {

                // calculate slider position (as a percentage)
                var value = Math.log(scope.value / 100);
                value = Math.min(Math.max(value, -1.5), +1.5);
                value = (value + 1.5) / 3;

                // convert to pixels
                value = value * 230 - 15;

                // apply position
                var e = element.find('.marker');
                e.css('left', value + 'px');
            });
        }
    }
});
