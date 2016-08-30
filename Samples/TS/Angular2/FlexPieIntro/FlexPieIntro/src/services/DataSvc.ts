'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    // data used to generate random items
        getData(): any[] {
        var names = ['Oranges', 'Apples', 'Pears', 'Bananas', 'Pineapples'],
            data = [];

        // populate itemsSource
        for (var i = 0; i < names.length; i++) {
            data.push({
                name: names[i],
                value: Math.round(Math.random() * 100)
            });
        }

        return data;
    }

}