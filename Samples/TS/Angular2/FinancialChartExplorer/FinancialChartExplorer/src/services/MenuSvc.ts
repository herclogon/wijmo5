'use strict';

import { Injectable } from '@angular/core';

// Application navigation menu service.
@Injectable()
export class MenuSvc {

    getMenu(): any[] {
        var ret =
        [
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
    }

}