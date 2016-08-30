'use strict';

import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { GaugeBaseCmp } from './GaugeBaseCmp';
import * as wjNg2Gauge from 'wijmo/wijmo.angular2.gauge';

// Radial gauge sample component.
@Component({
    selector: 'radial-gauge-cmp',
    templateUrl: 'src/components/gauge/radialGaugeCmp.html',
    directives: [wjNg2Gauge.WjRadialGauge, wjNg2Gauge.WjRange, CORE_DIRECTIVES]
})

export class RadialGaugeCmp extends GaugeBaseCmp {

    constructor() {
        super();
    }
}


