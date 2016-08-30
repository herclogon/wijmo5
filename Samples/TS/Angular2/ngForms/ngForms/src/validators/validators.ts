import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';


@Directive({
    selector: '[evenNumber]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => EvenNumberValidator),
            multi: true
        }]
})
export class EvenNumberValidator implements Validator {
    validate(control: AbstractControl): { [key: string]: any } {
        let value = control.value;
        if (value != null) {
            if (typeof (value) === 'number' && value % 2 === 0) {
                return null;
            }

            return { 'evenNumber': 'even number required' };
        }
        return null;
    }
}