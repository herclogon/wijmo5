'use strict';

import { Injectable } from '@angular/core';

// Common data service
@Injectable()
export class DataSvc {
    // data used to generate random items
    getData(): any[] {
        var data = [
            { id: 0, name: 'Paul', age: 22 },
            { id: 1, name: 'Ringo', age: 23 },
            { id: 2, name: 'George', age: 24 },
            { id: 3, name: 'John', age: 25 }
        ]
        return data;
    }

}
