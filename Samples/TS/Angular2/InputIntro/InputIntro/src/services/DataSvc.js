'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
// Common data service
var DataSvc = (function () {
    function DataSvc() {
    }
    // data used to generate random items
    DataSvc.prototype.getMusicians = function () {
        var names = 'Paul,Mark,Pete,Ringo,Luke,Jacob,John,Nate,Zym,George,Toom,Crash,Boom,Dewd'.split(','), musicians = [];
        for (var i = 0; i < names.length; i++) {
            var item = {
                id: i,
                name: names[i],
                photo: '|Paul|John|George|Ringo|'
                    .indexOf('|' + names[i] + '|') >= 0
                    ? 'resources/' + names[i] + '.png'
                    : null
            };
            musicians.push(item);
        }
        return musicians;
    };
    DataSvc = __decorate([
        core_1.Injectable()
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map