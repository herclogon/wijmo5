import { ElementRef, Renderer } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare class FormattedModelAccessor implements ControlValueAccessor {
    renderer: Renderer;
    elRef: ElementRef;
    onChange: (_: any) => void;
    onTouched: () => void;
    constructor(renderer: Renderer, elRef: ElementRef);
    writeValue(value: any): void;
    doOnChange(elt: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
}
