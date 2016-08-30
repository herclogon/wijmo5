'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    private _products = ['Widget', 'Gadget', 'Doohickey'];
    private _countries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'];
    private _colors = ['Black', 'White', 'Red', 'Green', 'Blue'];

    get products(): string[] {
        return this._products;
    }

    get countries(): string[] {
        return this._countries;
    }

    get colors(): string[] {
        return this._colors;
    }

    // get matches for a search term
    getProductOrders(count: number): any[] {
        var data = [],
            i = 0,
            dt = new Date(),
            date: Date,
            countryId: number,
            productId: number,
            colorId: number;

        for (var i = 0; i < count; i++) {
            // constants used to create data items
            date = new Date(dt.getFullYear(), i % 12, 25);
            countryId = Math.floor(Math.random() * this._countries.length);
            productId = Math.floor(Math.random() * this._products.length);
            colorId = Math.floor(Math.random() * this._colors.length);

            // create the item
            var item = {
                id: i,
                start: date,
                end: date,
                country: this._countries[countryId],
                product: this._products[productId],
                color: this._colors[colorId],
                amount: Math.random() * 10000 - 5000,
                amount2: Math.random() * 10000 - 5000,
                discount: Math.random() / 4,
                active: i % 4 == 0,
            };

            // add the item to the list
            data.push(item);
        }

        return data;
    }

    getExpenseItems(): any[] {
        // [5; 10]
        var count = 5 + Math.round(Math.random() * 5),
            ret = [],
            msPerDay = 1000 * 24 * 60 * 60,
            curDate = Date.now() - 60 * msPerDay;
        for (var i = 0; i < count; i++) {
            ret.push(
                {
                    Date: new Date(curDate),
                    Decsription: 'Customer visit',
                    Hotel: 30 + Math.random() * 200,
                    Transport: 10 + Math.random() * 150,
                    Fuel: Math.random() * 50,
                    Meal: 30 + Math.random() * 170,
                    ParkingRate: 3.75,
                    ParkingHours: 8 + Math.round(Math.random() * 16),
                    Misc: Math.random() * 220

                });

            curDate += msPerDay * Math.round(Math.random() * 4);
        }

        return ret;
    }

    getEmployeesWithExpences(): any[] {
        return [
            {
                Id: 'E892659',
                Name: 'Robert King',
                Department: 'Sales',
                Position: 'Sales Representative',
                SSN: 'A37830',
                Manager: 'Andrew Fuller',
                Purpose: 'On business',
                Attachment: true,
                Advance: 1000,
                Expenses: this.getExpenseItems()
            },
            {
                Id: 'E3667093',
                Name: 'John Taylor',
                Department: 'Sales',
                Position: 'Sales Representative',
                SSN: 'A83745',
                Manager: 'Andrew Fuller',
                Purpose: 'On business',
                Attachment: false,
                Advance: 800,
                Expenses: this.getExpenseItems()
            },
            {
                Id: 'E294989',
                Name: 'Gregory Allen',
                Department: 'Sales',
                Position: 'Sales Representative',
                SSN: 'A23927',
                Manager: 'Andrew Fuller',
                Purpose: 'On business',
                Attachment: true,
                Advance: 1200,
                Expenses: this.getExpenseItems()
            },
        ];
    }
}