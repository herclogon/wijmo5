"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var forms_1 = require('@angular/forms');
var EvenNumberValidator = (function () {
    function EvenNumberValidator() {
    }
    EvenNumberValidator.prototype.validate = function (control) {
        var value = control.value;
        if (value != null) {
            if (typeof (value) === 'number' && value % 2 === 0) {
                return null;
            }
            return { 'evenNumber': 'even number required' };
        }
        return null;
    };
    EvenNumberValidator = __decorate([
        core_1.Directive({
            selector: '[evenNumber]',
            providers: [
                {
                    provide: forms_1.NG_VALIDATORS,
                    useExisting: core_1.forwardRef(function () { return EvenNumberValidator; }),
                    multi: true
                }]
        })
    ], EvenNumberValidator);
    return EvenNumberValidator;
}());
exports.EvenNumberValidator = EvenNumberValidator;
//# sourceMappingURL=validators.js.map