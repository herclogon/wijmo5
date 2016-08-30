'use strict';

import { Injectable, Inject } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {

    constructor() {
    }

    // get data by symbol
    getData(count: number): wijmo.collections.ObservableArray {
        var data = new wijmo.collections.ObservableArray();

        for (var i = 1; i <= count; i++) {
            data.push(this.getRandomData('random' + this.getRandomValue(1000)));
        }
        return data;
    }

    getRandomData(idx) {
        return {
            //x: getRandomValue(100),
            x: idx,
            y: this.getRandomValue(200),
            y1: this.getRandomValue(400),
            y2: this.getRandomValue(600),
            y3: this.getRandomValue(800),
            y4: this.getRandomValue(1000)
        };
    }
    
    getRandomValue(max) {
        return Math.round(Math.random() * max);
    }
    
}