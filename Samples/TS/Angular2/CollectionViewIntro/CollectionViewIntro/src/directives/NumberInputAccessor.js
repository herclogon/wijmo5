"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var NUMBER_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return NumberInputAccessor; }),
    multi: true
};
var NumberInputAccessor = (function () {
    function NumberInputAccessor(elRef, renderer) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    NumberInputAccessor.prototype.writeValue = function (value) {
        if (value != null) {
            this.renderer.setElementProperty(this.elRef.nativeElement, 'value', value);
        }
    };
    NumberInputAccessor.prototype.doOnChange = function (elt) {
        var val = elt.value;
        var num = wijmo.Globalize.parseInt(val, '');
        if (isNaN(num)) {
            num = 0;
        }
        elt.value = num;
        this.onChange(num);
    };
    NumberInputAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NumberInputAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NumberInputAccessor = __decorate([
        core_1.Directive({
            selector: 'input[number-input]',
            host: { '(input)': 'doOnChange($event.target)' },
            providers: [NUMBER_VALUE_ACCESSOR]
        }),
        __param(0, core_1.Inject(core_1.ElementRef)),
        __param(1, core_1.Inject(core_1.Renderer))
    ], NumberInputAccessor);
    return NumberInputAccessor;
}());
exports.NumberInputAccessor = NumberInputAccessor;
//# sourceMappingURL=NumberInputAccessor.js.map