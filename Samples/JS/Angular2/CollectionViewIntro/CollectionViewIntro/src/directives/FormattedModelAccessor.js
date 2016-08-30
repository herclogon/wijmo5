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
var common_1 = require('@angular/common');
var core_1 = require('@angular/core');
var DATE_VALUE_ACCESSOR = new core_1.Provider(common_1.NG_VALUE_ACCESSOR, { useExisting: core_1.forwardRef(function () { return FormattedModelAccessor; }), multi: true });
var FormattedModelAccessor = (function () {
    function FormattedModelAccessor(renderer, elRef) {
        this.renderer = renderer;
        this.elRef = elRef;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    FormattedModelAccessor.prototype.writeValue = function (value) {
        this.renderer.setElementProperty(this.elRef.nativeElement, 'value', wijmo.Globalize.format(value, ''));
    };
    FormattedModelAccessor.prototype.doOnChange = function (elt) {
        var val = elt.value;
        this.onChange(val);
    };
    FormattedModelAccessor.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    FormattedModelAccessor.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    FormattedModelAccessor = __decorate([
        core_1.Directive({
            selector: 'input[formatted-model]',
            host: { '(input)': 'doOnChange($event.target)' },
            providers: [DATE_VALUE_ACCESSOR]
        }),
        __param(0, core_1.Inject(core_1.Renderer)),
        __param(1, core_1.Inject(core_1.ElementRef))
    ], FormattedModelAccessor);
    return FormattedModelAccessor;
}());
exports.FormattedModelAccessor = FormattedModelAccessor;
//# sourceMappingURL=FormattedModelAccessor.js.map