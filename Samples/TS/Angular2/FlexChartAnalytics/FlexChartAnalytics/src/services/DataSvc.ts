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
            data.push({
                x: i,
                y: Math.floor(Math.random() * 100)
            });
        }
        return data;
    }

    getWaterfallData(): wijmo.collections.ObservableArray {
        var names = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            data = new wijmo.collections.ObservableArray();

        for (var i = 0, len = names.length; i < len; i++) {
            data.push({
                name: names[i],
                value: Math.round((0.5 - Math.random()) * 1000)
            });
        }
        return data;
    }
}