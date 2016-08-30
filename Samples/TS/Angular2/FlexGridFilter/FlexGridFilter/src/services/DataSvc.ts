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
        for (var i = 0; i < 1000; i++) {
            data.push({
                id: i,
                date: new Date(2015, i % 12, (i + 1) % 25),
                time: new Date(2015, i % 12, (i + 1) % 25, i % 24, i % 60, i % 60),
                country: countries[i % countries.length],
                countryMapped: i % countries.length,
                downloads: Math.round(Math.random() * 20000),
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000,
                checked: i % 9 == 0
            });
        }
        return data;
    }

    getCountryMap(): { name: string, key: number }[] {
        return [
            { name: 'US', key: 0 },
            { name: 'Germany', key: 1 },
            { name: 'Japan', key: 2 },
            { name: 'Italy', key: 3 },
            { name: 'Greece', key: 4 },
            { name: 'Spain', key: 5 },
            { name: 'Chile', key: 6 },
            { name: 'China', key: 7 },
            { name: 'Canada', key: 8 },
            { name: 'Astralia', key: 9 },
            { name: 'Austria', key: 10 }
        ];
    }
}