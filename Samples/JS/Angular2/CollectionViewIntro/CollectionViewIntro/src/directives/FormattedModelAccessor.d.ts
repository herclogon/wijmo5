import { ControlValueAccessor } from '@angular/common';
import { ElementRef, Renderer } from '@angular/core';
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
