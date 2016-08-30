'use strict';

// defines functions that return sparkline and sparkBar svg elements
angular.module('app').factory('sparkSvc', function () {

    function encloseSvg(svg, width, height) {
        if (!height) height = '100%';
        if (!width) width = '100%';
        return '<div style="width:' + width + ';height:' + height + ';box-sizing:border-box;padding:4px">' +
            '<svg width="100%" height="100%" style="stroke:currentColor;stroke-width:2;opacity:.6;overflow:visible"><g>' +
            svg +
            '</g></svg></div>';
    }
    function scaleY(value, min, max) {
        return 100 - Math.round((value - min) / (max - min) * 100);
    }

    return {
        getSparklines: function(data, width, height) {
            var svg = '',
                min = Math.min.apply(Math, data),
                max = Math.max.apply(Math, data),
                x1 = 0,
                y1 = scaleY(data[0], min, max),
                x2, y2;
            for (var i = 1; i < data.length; i++) {
                x2 = Math.round((i) / (data.length - 1) * 100);
                y2 = scaleY(data[i], min, max);
                svg += '<line x1=' + x1 + '% y1=' + y1 + '% x2=' + x2 + '% y2=' + y2 + '% />';
                x1 = x2;
                y1 = y2;
            }
            return encloseSvg(svg, width, height);
        },
        getSparkbars: function(data, width, height) {
            var svg = '',
                min = Math.min.apply(Math, data),
                max = Math.max.apply(Math, data),
                base = Math.min(max, Math.max(min, 0)),
                basey = scaleY(base, min, max),
                w = Math.round(100 / data.length) - 2,
                x, y;
            for (var i = 0; i < data.length; i++) {
                x = i * Math.round(100 / data.length) + 1;
                y = scaleY(data[i], min, max);
                svg += '<rect x=' + x + '% width=' + w + '% y=' + Math.min(y, basey) + '% height=' + Math.abs(y - basey) + '% />';
            }
            svg += '<rect x=0% width=100% height=1 y=' + basey + '% opacity=.5 />';
            return encloseSvg(svg, width, height);
        }
    }
});
