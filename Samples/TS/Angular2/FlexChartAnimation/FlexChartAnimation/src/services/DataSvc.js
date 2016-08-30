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
    // get data by symbol
    DataSvc.prototype.getData = function (count) {
        var data = new wijmo.collections.ObservableArray();
        for (var i = 1; i <= count; i++) {
            data.push(this.getRandomData('random' + this.getRandomValue(1000)));
        }
        return data;
    };
    DataSvc.prototype.getRandomData = function (idx) {
        return {
            //x: getRandomValue(100),
            x: idx,
            y: this.getRandomValue(200),
            y1: this.getRandomValue(400),
            y2: this.getRandomValue(600),
            y3: this.getRandomValue(800),
            y4: this.getRandomValue(1000)
        };
    };
    DataSvc.prototype.getRandomValue = function (max) {
        return Math.round(Math.random() * max);
    };
    DataSvc = __decorate([
        core_1.Injectable()
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map