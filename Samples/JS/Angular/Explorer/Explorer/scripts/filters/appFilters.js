'use strict';

var app = angular.module('app');

// Globalize filter
app.filter('glbz', function () {
    function glbz(input, format, culture) {
        return wijmo.Globalize.format(input, format);
    }
    glbz.$stateful = true; // required for Angular 1.3+
    return glbz;
});

// CellRange filter
app.filter('cellRange', function () {
    return function (input) {
        var rng = '';
        if (input instanceof wijmo.grid.CellRange) {
            rng = '(' + input.row + ';' + input.col + ')';
            if (!input.isSingleCell) {
                rng += '-(' + input.row2 + ';' + input.col2 + ')';
            }
        }
        return rng;
    }
});


