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
        // create some data      
        var customers = [];
        var shippers = [
            { id: 0, name: 'Speedy Express', email: 'speedy@gmail.com', phone: '431-3234', express: true },
            { id: 1, name: 'Flash Delivery', email: 'flash@gmail.com', phone: '431-6563', express: true },
            { id: 2, name: 'Logitrax', email: 'logitrax@gmail.com', phone: '431-3981', express: false },
            { id: 3, name: 'Acme Inc', email: 'acme@gmail.com', phone: '431-3113', express: false }
        ];
        var firstNames = 'Aaron,Paul,John,Mark,Sue,Tom,Bill,Joe,Tony,Brad,Frank,Chris,Pat'.split(',');
        var lastNames = 'Smith,Johnson,Richards,Bannon,Wong,Peters,White,Brown,Adams,Jennings'.split(',');
        var cities = 'York,Paris,Rome,Cairo,Florence,Sidney,Hamburg,Vancouver'.split(',');
        var states = 'SP,RS,RN,SC,CS,RT,BC'.split(',');
        for (var i = 0; i < 50; i++) {
            var first = firstNames[this.randBetween(0, firstNames.length - 1)], last = lastNames[this.randBetween(0, lastNames.length - 1)];
            customers.push({
                id: i,
                name: first + ' ' + last,
                address: this.randBetween(100, 10000) + ' ' + lastNames[this.randBetween(0, lastNames.length - 1)] + ' St.',
                city: cities[this.randBetween(0, cities.length - 1)],
                state: states[this.randBetween(0, states.length - 1)],
                zip: wijmo.format('{p1:d5}-{p2:d3}', {
                    p1: this.randBetween(10000, 99999),
                    p2: this.randBetween(100, 999)
                }),
                email: first + '.' + last + '@gmail.com',
                phone: wijmo.format('{p1:d3}-{p2:d4}', {
                    p1: this.randBetween(100, 999),
                    p2: this.randBetween(1000, 9999)
                })
            });
        }
        this.cityMap = new wijmo.grid.DataMap(cities);
        this.orders = [];
        var today = new Date();
        for (var i = 0; i < 20; i++) {
            var shipped = wijmo.DateTime.addDays(today, -this.randBetween(1, 3000));
            this.orders.push({
                id: i,
                date: wijmo.DateTime.addDays(shipped, -this.randBetween(1, 5)),
                shippedDate: shipped,
                amount: this.randBetween(10000, 500000) / 100,
                customer: customers[this.randBetween(0, customers.length - 1)],
                shipper: shippers[this.randBetween(0, shippers.length - 1)]
            });
        }
        this.groupedOrders = new wijmo.collections.CollectionView(this.orders, {
            groupDescriptions: [
                'customer.city'
            ]
        });
        this.pagedOrders = new wijmo.collections.CollectionView(this.orders, {
            pageSize: 4
        });
        // create 'addNewOrders' collection, start with last item selected
        this.addNewOrders = new wijmo.collections.CollectionView(this.orders, {
            newItemCreator: function () {
                return {
                    customer: {},
                    shipper: {}
                };
            },
        });
    }
    DataSvc.prototype.randBetween = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    DataSvc = __decorate([
        core_1.Injectable()
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map