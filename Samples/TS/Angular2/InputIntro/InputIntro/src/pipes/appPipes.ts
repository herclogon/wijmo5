import {Pipe} from '@angular/core';

// ToDate pipe - converts date/time string to a Date object
@Pipe({
    name: 'toDate'
})
export class ToDatePipe {
    transform(value: any, args: string[]): any {
        if (value && wijmo.isString(value)) {
            // parse date/time using RFC 3339 pattern
            var dt = wijmo.changeType(value, wijmo.DataType.Date, 'r');
            if (wijmo.isDate(dt)) {
                return dt;
            }
        }
        return value;
    }
}

