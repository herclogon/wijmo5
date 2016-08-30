import {Pipe} from '@angular/core';

// Globalize pipe
@Pipe({
    name: 'globalize',
    // stateful pipe
    pure: false
})
export class GlobalizePipe {
    transform(value: any, args: string[]): any {
        if (args) {
            return wijmo.Globalize.format(value, args[0]);
        } else {
            return wijmo.Globalize.format(value, '');
        }

    }
}
