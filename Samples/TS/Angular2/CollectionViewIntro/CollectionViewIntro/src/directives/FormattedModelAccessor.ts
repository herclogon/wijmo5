import { CORE_DIRECTIVES, DefaultValueAccessor, NG_VALUE_ACCESSOR, ControlValueAccessor} from '@angular/common';
import { Directive, forwardRef, Provider, ElementRef, Inject, Renderer} from '@angular/core';


const DATE_VALUE_ACCESSOR = new Provider(
    NG_VALUE_ACCESSOR, { useExisting: forwardRef(() => FormattedModelAccessor), multi: true });

@Directive({
    selector: 'input[formatted-model]',
    host: { '(input)': 'doOnChange($event.target)' },
    providers: [DATE_VALUE_ACCESSOR]
})
export class FormattedModelAccessor implements ControlValueAccessor {
    onChange = (_) => { };
    onTouched = () => { };
    constructor( @Inject(Renderer) public renderer: Renderer, @Inject(ElementRef) public elRef: ElementRef) {

    }

    writeValue(value: any): void {
        this.renderer.setElementProperty(this.elRef.nativeElement, 'value', wijmo.Globalize.format(value, ''));
    }

    doOnChange(elt) {
        var val = elt.value;
        this.onChange(val);
    }
    registerOnChange(fn: (_: any) => void): void { this.onChange = fn; }
    registerOnTouched(fn: () => void): void { this.onTouched = fn; }
}