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
        this._products = ['Widget', 'Gadget', 'Doohickey'];
        this._countries = ['US', 'Germany', 'UK', 'Japan', 'Italy', 'Greece'];
        this._colors = ['Black', 'White', 'Red', 'Green', 'Blue'];
    }
    Object.defineProperty(DataSvc.prototype, "products", {
        get: function () {
            return this._products;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSvc.prototype, "countries", {
        get: function () {
            return this._countries;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataSvc.prototype, "colors", {
        get: function () {
            return this._colors;
        },
        enumerable: true,
        configurable: true
    });
    // get matches for a search term
    DataSvc.prototype.getProductOrders = function (count) {
        var data = [], i = 0, dt = new Date(), date, countryId, productId, colorId;
        for (var i = 0; i < count; i++) {
            // constants used to create data items
            date = new Date(dt.getFullYear(), i % 12, 25);
            countryId = Math.floor(Math.random() * this._countries.length);
            productId = Math.floor(Math.random() * this._products.length);
            colorId = Math.floor(Math.random() * this._colors.length);
            // create the item
            var item = {
                id: i,
                start: date,
                end: date,
                country: this._countries[countryId],
                product: this._products[productId],
                color: this._colors[colorId],
                amount: Math.random() * 10000 - 5000,
                amount2: Math.random() * 10000 - 5000,
                discount: Math.random() / 4,
                active: i % 4 == 0,
            };
            // add the item to the list
            data.push(item);
        }
        return data;
    };
    DataSvc.prototype.getExpenseItems = function () {
        // [5; 10]
        var count = 5 + Math.round(Math.random() * 5), ret = [], msPerDay = 1000 * 24 * 60 * 60, curDate = Date.now() - 60 * msPerDay;
        for (var i = 0; i < count; i++) {
            ret.push({
                Date: new Date(curDate),
                Decsription: 'Customer visit',
                Hotel: 30 + Math.random() * 200,
                Transport: 10 + Math.random() * 150,
                Fuel: Math.random() * 50,
                Meal: 30 + Math.random() * 170,
                ParkingRate: 3.75,
                ParkingHours: 8 + Math.round(Math.random() * 16),
                Misc: Math.random() * 220
            });
            curDate += msPerDay * Math.round(Math.random() * 4);
        }
        return ret;
    };
    DataSvc.prototype.getEmployeesWithExpences = function () {
        return [
            {
                Id: 'E892659',
                Name: 'Robert King',
                Department: 'Sales',
                Position: 'Sales Representative',
                SSN: 'A37830',
                Manager: 'Andrew Fuller',
                Purpose: 'On business',
                Attachment: true,
                Advance: 1000,
                Expenses: this.getExpenseItems()
            },
            {
                Id: 'E3667093',
                Name: 'John Taylor',
                Department: 'Sales',
                Position: 'Sales Representative',
                SSN: 'A83745',
                Manager: 'Andrew Fuller',
                Purpose: 'On business',
                Attachment: false,
                Advance: 800,
                Expenses: this.getExpenseItems()
            },
            {
                Id: 'E294989',
                Name: 'Gregory Allen',
                Department: 'Sales',
                Position: 'Sales Representative',
                SSN: 'A23927',
                Manager: 'Andrew Fuller',
                Purpose: 'On business',
                Attachment: true,
                Advance: 1200,
                Expenses: this.getExpenseItems()
            },
        ];
    };
    DataSvc = __decorate([
        core_1.Injectable()
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map