/// <reference path="../typings/globals/core-js/index.d.ts" />
import { NgForm } from '@angular/forms';
export declare class AppCmp {
    form1: NgForm;
    active: boolean;
    num: number;
    num1: number;
    valueComboValue: string;
    indexComboValue: number;
    data: {
        name: string;
        lastPrice: number;
    }[];
    defaultData: {
        input1: number;
        inputNumber1: number;
        valueCombo: string;
        indexCombo: number;
    };
    resetForm(): void;
}
export declare class AppModule {
}
