'use strict';

import { Injectable } from '@angular/core';

// Application navigation menu service.
@Injectable()
export class MenuSvc {

    getMenu(): any[] {
        var ret =
        [
            {
                "section": "Animation",
                "links": [
                    { "text": "FlexChart", "url": "#/flexChartAnimation", "alias": "FlexChartAnimation" },
                    { "text": "FlexPie", "url": "#/flexPieAnimation", "alias": "FlexPieAnimation" }
                ]
            }];

        return ret;
    }

}