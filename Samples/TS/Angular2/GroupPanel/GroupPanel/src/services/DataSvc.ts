'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    // data used to generate random items
    getData(): any[] {
        // create some random data
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = [];
        for (var i = 0; i < 10; i++) {
            data.push({
                id: i,
                name: countries[i % countries.length],
                date: new Date(2015, i % 12, (i + 1) % 25),
                time: new Date(2015, i % 12, (i + 1) % 25, i % 24, i % 60, i % 60),
                country: countries[i % countries.length],
                downloads: Math.round(Math.random() * 20000),
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000,
                checked: i % 9 == 0
            });
        }
        return data;
    }

}