'use strict';
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
var http_1 = require('@angular/http');
//import 'rxjs/Rx';
var map_1 = require('rxjs/operator/map');
// Common data service
var DataSvc = (function () {
    function DataSvc(http) {
        this.http = http;
    }
    // get chart data
    DataSvc.prototype.getData = function () {
        //var data = <any>this.http.get('data/fb.json').map(res => {
        var data = map_1.map.call(this.http.get('data/fb.json'), function (res) {
            var d = res.json(), len = d.length, i, dateStr;
            for (i = 0; i < len; i++) {
                d[i].date = wijmo.Globalize.parseDate(d[i].date, 'MM/dd/yy');
            }
            return d;
        });
        return data;
    };
    // get basic data
    DataSvc.prototype.getBasicData = function () {
        var data = [], sales = [
            96, 19, 54, 83, 15, 56, 36, 4, 29, 93,
            38, 71, 50, 77, 69, 13, 79, 57, 29, 62,
            4, 27, 66, 96, 65, 12, 52, 3, 61, 48, 50,
            70, 39, 33, 25, 49, 69, 46, 44, 40, 35,
            72, 64, 10, 66, 63, 78, 19, 96, 26], len = sales.length;
        for (var i = 0; i < len; i++) {
            data.push({
                sale: sales[i],
                date: new Date(2014, 0, i),
            });
        }
        return data;
    };
    DataSvc = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http))
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map