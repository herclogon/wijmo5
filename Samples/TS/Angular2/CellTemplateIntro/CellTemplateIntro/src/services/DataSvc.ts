'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    // data used to generate random items
    getData(): any[] {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            data = [];
        for (var i = 0; i < 30; i++) {
            data.push({
                id: i,
                date: new Date(2015, Math.floor(i / countries.length) % 12, (Math.floor(i / countries.length) + 1) % 28),
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

    getCv(data: any[]): wijmo.collections.CollectionView {
        var dataCv = new wijmo.collections.CollectionView(data);
        dataCv.sortDescriptions.push(new wijmo.collections.SortDescription('date', true));
        dataCv.groupDescriptions.push(new wijmo.collections.PropertyGroupDescription('country'));
        return dataCv;
    }
}
