import { Validator, AbstractControl } from '@angular/forms';
export declare class EvenNumberValidator implements Validator {
    validate(control: AbstractControl): {
        [key: string]: any;
    };
}
