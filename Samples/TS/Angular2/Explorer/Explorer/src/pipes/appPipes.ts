import {Pipe, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

// Globalize pipe
@Pipe({
    name: 'glbz',
    // stateful pipe
    pure: false
})
export class GlbzPipe {
    transform(value: any, args: string[]): any {
        return wijmo.Globalize.format(value, args[0]);
    }
}

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

// CellRange pipe
@Pipe({
    name: 'cellRange'
})
export class CellRangePipe {
    transform(value: any, args: string[]): any {
        var rng = '';
        if (value instanceof wijmo.grid.CellRange) {
            rng = '(' + value.row + ';' + value.col + ')';
            if (!value.isSingleCell) {
                rng += '-(' + value.row2 + ';' + value.col2 + ')';
            }
        }
        return rng;
    }
}
//exports
@NgModule({
    //imports: [Pipe],
    declarations: [GlbzPipe, ToDatePipe, CellRangePipe],
    exports: [GlbzPipe,
        ToDatePipe,
        CellRangePipe],
})
export class AppPipesModule {
}
