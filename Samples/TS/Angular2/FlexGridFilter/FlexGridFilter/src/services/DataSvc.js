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
    DataSvc.prototype.getData = function () {
        // create some random data
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','), data = [];
        for (var i = 0; i < 1000; i++) {
            data.push({
                id: i,
                date: new Date(2015, i % 12, (i + 1) % 25),
                time: new Date(2015, i % 12, (i + 1) % 25, i % 24, i % 60, i % 60),
                country: countries[i % countries.length],
                countryMapped: i % countries.length,
                downloads: Math.round(Math.random() * 20000),
                sales: Math.random() * 10000,
                expenses: Math.random() * 5000,
                checked: i % 9 == 0
            });
        }
        return data;
    };
    DataSvc.prototype.getCountryMap = function () {
        return [
            { name: 'US', key: 0 },
            { name: 'Germany', key: 1 },
            { name: 'Japan', key: 2 },
            { name: 'Italy', key: 3 },
            { name: 'Greece', key: 4 },
            { name: 'Spain', key: 5 },
            { name: 'Chile', key: 6 },
            { name: 'China', key: 7 },
            { name: 'Canada', key: 8 },
            { name: 'Astralia', key: 9 },
            { name: 'Austria', key: 10 }
        ];
    };
    DataSvc = __decorate([
        core_1.Injectable()
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map