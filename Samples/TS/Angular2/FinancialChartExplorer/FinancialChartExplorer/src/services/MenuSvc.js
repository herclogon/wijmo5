'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Application navigation menu service.
var MenuSvc = (function () {
    function MenuSvc() {
    }
    MenuSvc.prototype.getMenu = function () {
        var ret = [
            {
                "section": "Chart Types",
                "links": [
                    { "text": "Heikin-Ashi", "url": "/charttype/heikinAshi", "alias": "HeikinAshi" },
                    { "text": "Line Break", "url": "/charttype/lineBreak", "alias": "LineBreak" },
                    { "text": "Renko", "url": "/charttype/renko", "alias": "Renko" },
                    { "text": "Kagi", "url": "/charttype/kagi", "alias": "Kagi" },
                    { "text": "ColumnVolume", "url": "/charttype/columnVolume", "alias": "ColumnVolume" },
                    { "text": "EquiVolume", "url": "/charttype/equiVolume", "alias": "EquiVolume" },
                    { "text": "CandleVolume", "url": "/charttype/candleVolume", "alias": "CandleVolume" },
                    { "text": "Arms CandleVolume", "url": "/charttype/armsCandleVolume", "alias": "ArmsCandleVolume" }
                ]
            },
            {
                "section": "Interaction",
                "links": [
                    { "text": "Markers", "url": "/interaction/markers", "alias": "Markers" },
                    { "text": "Range Selector", "url": "/interaction/rangeSelector", "alias": "RangeSelector" }
                ]
            },
            {
                "section": "Analytics",
                "links": [
                    { "text": "Trend Lines", "url": "/analytics/trendLines", "alias": "TrendLines" },
                    { "text": "Moving Averages", "url": "/analytics/movingAverages", "alias": "MovingAverages" },
                    { "text": "Overlays", "url": "/analytics/overlays", "alias": "Overlays" },
                    { "text": "Indicators", "url": "/analytics/indicators", "alias": "Indicators" },
                    { "text": "Event Annotations", "url": "/analytics/eventAnnotations", "alias": "EventAnnotations" },
                    { "text": "Fibonacci Tool", "url": "/analytics/fibonacciTool", "alias": "FibonacciTool" }
                ]
            }];
        return ret;
    };
    MenuSvc = __decorate([
        core_1.Injectable()
    ], MenuSvc);
    return MenuSvc;
}());
exports.MenuSvc = MenuSvc;
//# sourceMappingURL=MenuSvc.js.map