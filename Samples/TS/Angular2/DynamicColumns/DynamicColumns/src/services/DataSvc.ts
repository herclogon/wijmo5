'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    // data used to generate random items
    getData(count: number): any[] {
        var data = [],
            countries = 'US,Germany,UK,Japan,Italy,Greece,Spain,Canada,Australia,China,Austria'.split(','),
            products = 'Widget,Gadget,Doohickey'.split(','),
            colors = 'Black,White,Red,Green,Blue'.split(','),
            dt = new Date();
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                date: new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                country: countries[Math.floor(Math.random() * countries.length)],
                product: products[Math.floor(Math.random() * products.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                amount: Math.random() * 10000 - 5000,
                discount: Math.random() / 4,
                active: i % 4 == 0,
            });
        }
        return data;
    }

}
