import { ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class NumberInputAccessor implements ControlValueAccessor {
    elRef: ElementRef;
    renderer: Renderer;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(elRef: ElementRef, renderer: Renderer);
    writeValue(value: any): void;
    doOnChange(elt: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
