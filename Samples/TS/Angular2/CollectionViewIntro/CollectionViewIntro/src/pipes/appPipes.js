"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Globalize pipe
var GlobalizePipe = (function () {
    function GlobalizePipe() {
    }
    GlobalizePipe.prototype.transform = function (value, args) {
        if (args) {
            return wijmo.Globalize.format(value, args[0]);
        }
        else {
            return wijmo.Globalize.format(value, '');
        }
    };
    GlobalizePipe = __decorate([
        core_1.Pipe({
            name: 'globalize',
            // stateful pipe
            pure: false
        })
    ], GlobalizePipe);
    return GlobalizePipe;
}());
exports.GlobalizePipe = GlobalizePipe;
//# sourceMappingURL=appPipes.js.map