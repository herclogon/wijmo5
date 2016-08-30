'use strict';

import { Injectable } from '@angular/core';

// Application navigation menu service.
@Injectable()
export class MenuSvc {

    getMenu(): any[] {
        var ret =
        [
            {
                "section": "Analytics",
                "links": [
                    { "text": "TrendLine", "url": "#/trendline", "alias": "TrendLine" },
                    { "text": "MovingAverage", "url": "#/movingaverage", "alias": "MovingAverage" },
                    { "text": "YFunctionSeries", "url": "#/yfunctionseries", "alias": "YFunctionSeries" },
                    { "text": "Parametric FunctionSeries", "url": "#/parametricfunctionseries", "alias": "ParametricFunctionSeries" },
                    { "text": "Waterfall", "url": "#/waterfall", "alias": "Waterfall" }
                ]
            }];

        return ret;
    }

}