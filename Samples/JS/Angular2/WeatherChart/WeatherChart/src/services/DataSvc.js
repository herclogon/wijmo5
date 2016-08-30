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
    // get WeatherChart data
    DataSvc.prototype.getData = function () {
        //var data = this.http.get('data/WeatherData.txt').map(res => res.json());
        //var data = <any>this.http.get('data/WeatherData.txt').map(function (res) {
        var data = map_1.map.call(this.http.get('data/WeatherData.txt'), function (res) {
            var strings = res.text().split('\r\n'), len = strings.length, items = [], names = [];
            for (var i = 0; i < len; i++) {
                var sdata = strings[i].split(',');
                var slen = sdata.length;
                if (i == 0) {
                    for (var j = 0; j < slen; j++) {
                        names.push(sdata[j]);
                    }
                }
                else {
                    var item = {};
                    for (var j = 0; j < slen; j++) {
                        if (j == 0) {
                            item[names[j]] = wijmo.Globalize.parseDate(sdata[j], 'yyyy-MM-dd');
                        }
                        else {
                            var num = parseFloat(sdata[j]);
                            item[names[j]] = isNaN(num) ? sdata[j] : num;
                        }
                    }
                    items.push(item);
                }
            }
            return items;
        });
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