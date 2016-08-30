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
    DataSvc.prototype.getData = function (count) {
        var data = [], countries = 'US,Germany,UK,Japan,Italy,Greece,Spain,Canada,Australia,China,Austria'.split(','), products = 'Widget,Gadget,Doohickey'.split(','), colors = 'Black,White,Red,Green,Blue'.split(','), dt = new Date();
        for (var i = 0; i < count; i++) {
            data.push({
                id: i,
                date: new Date(dt.getFullYear(), i % 12, 25, i % 24, i % 60, i % 60),
                country: countries[Math.floor(Math.random() * countries.length)],
                product: products[Math.floor(Math.random() * products.length)],
                color: colors[Math.floor(Math.random() * colors.length)],
                amount: Math.random() * 10000 - 5000,
                discount: Math.random() / 4,
                active: i % 4 == 0,
            });
        }
        return data;
    };
    DataSvc = __decorate([
        core_1.Injectable()
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map