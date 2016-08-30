'use strict';

import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GaugeBaseCmp } from './GaugeBaseCmp';
import * as wjNg2Gauge from 'wijmo/wijmo.angular2.gauge';

// Linear gauge sample component.
@Component({
    selector: 'linear-gauge-cmp',
    templateUrl: 'src/components/gauge/linearGaugeCmp.html',
    directives: [wjNg2Gauge.WjLinearGauge, wjNg2Gauge.WjRange, CORE_DIRECTIVES]
})

export class LinearGaugeCmp extends GaugeBaseCmp {

    constructor() {
        super();
    }
}


