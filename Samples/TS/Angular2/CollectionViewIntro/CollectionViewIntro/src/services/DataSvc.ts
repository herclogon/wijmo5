'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {

    static countries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'];
    static products = ['Widget', 'Gadget', 'Doohickey'];
    static colors = ['Black', 'White', 'Red', 'Green', 'Blue'];


    // data used to generate random items
    getData(count: number): any[] {
        var data = [], dt = new Date();

        // add count items
        for (var i = 0; i < count; i++) {
            // constants used to create data items
            var date = new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                countryId = Math.floor(Math.random() * DataSvc.countries.length),
                productId = Math.floor(Math.random() * DataSvc.products.length),
                colorId = Math.floor(Math.random() * DataSvc.colors.length);

            // create the item
            var item = {
                id: i,
                start: date,
                end: date,
                country: DataSvc.countries[countryId],
                product: DataSvc.products[productId],
                color: DataSvc.colors[colorId],
                amount: Math.random() * 10000 - 5000,
                active: i % 4 === 0,
            };

            // add the item to the list
            data.push(item);
        }

        return data;
    }

    getNames(): string[] {
        return ['id', 'start', 'end', 'country', 'product', 'color', 'amount', 'active'];
    }
}
