'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Service providing sparklines and sparkbars SVG.
var SparkSvc = (function () {
    function SparkSvc() {
    }
    // Gets HTML string containing sparklines SVG representing the specified data.
    SparkSvc.prototype.getSparklines = function (data, width, height) {
        var svg = '', min = Math.min.apply(Math, data), max = Math.max.apply(Math, data), x1 = 0, y1 = this._scaleY(data[0], min, max), x2, y2;
        for (var i = 1; i < data.length; i++) {
            x2 = Math.round((i) / (data.length - 1) * 100);
            y2 = this._scaleY(data[i], min, max);
            svg += '<line x1=' + x1 + '% y1=' + y1 + '% x2=' + x2 + '% y2=' + y2 + '% />';
            x1 = x2;
            y1 = y2;
        }
        return this._encloseSvg(svg, width, height);
    };
    // Gets HTML string containing sparkbars SVG representing the specified data.
    SparkSvc.prototype.getSparkbars = function (data, width, height) {
        var svg = '', min = Math.min.apply(Math, data), max = Math.max.apply(Math, data), base = Math.min(max, Math.max(min, 0)), basey = this._scaleY(base, min, max), w = Math.round(100 / data.length) - 2, x, y;
        for (var i = 0; i < data.length; i++) {
            x = i * Math.round(100 / data.length) + 1;
            y = this._scaleY(data[i], min, max);
            svg += '<rect x=' + x + '% width=' + w + '% y=' + Math.min(y, basey) + '% height=' + Math.abs(y - basey) + '% />';
        }
        svg += '<rect x=0% width=100% height=1 y=' + basey + '% opacity=.5 />';
        return this._encloseSvg(svg, width, height);
    };
    SparkSvc.prototype._encloseSvg = function (svg, width, height) {
        if (!height)
            height = '100%';
        if (!width)
            width = '100%';
        return '<div style="width:' + width + ';height:' + height + ';box-sizing:border-box;padding:4px">' +
            '<svg width="100%" height="100%" style="stroke:currentColor;stroke-width:2;opacity:.6;overflow:visible"><g>' +
            svg +
            '</g></svg></div>';
    };
    SparkSvc.prototype._scaleY = function (value, min, max) {
        return 100 - Math.round((value - min) / (max - min) * 100);
    };
    SparkSvc = __decorate([
        core_1.Injectable()
    ], SparkSvc);
    return SparkSvc;
}());
exports.SparkSvc = SparkSvc;
//# sourceMappingURL=SparkSvc.js.map