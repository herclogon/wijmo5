'use strict';

import { Component } from '@angular/core';

// Base class for all components demonstrating Gauge controls.
@Component({
    selector: '',
    templateUrl: ''
})

export abstract class GaugeBaseCmp {
	// simple gauge data
    gauge: any;

    // SparkSvc will be passed by derived classes
    constructor() {
		// simple gauge data
        this.gauge = {
            min: 0,
            max: 100,
            value: 25,
            step: 5,
            angles: [
                { start: -45, sweep: 270 },
                { start: 10, sweep: 340 },
                { start: 0, sweep: 90 },
                { start: 45, sweep: 90 }
            ]
        };
    }
}