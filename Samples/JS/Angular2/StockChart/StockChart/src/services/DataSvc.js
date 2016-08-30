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
var Portfolio_1 = require('./Portfolio');
// Common data service
var DataSvc = (function () {
    function DataSvc(http) {
        this.http = http;
    }
    // data used to generate random items
    DataSvc.prototype.getData = function () {
        var data = [];
        // fill in data array here
        return data;
    };
    DataSvc.prototype.getStockInfo = function (params) {
        var strs = [];
        for (var k in params) {
            strs.push(k + '=' + params[k]);
        }
        return this._getStockInfo(strs.join('&'));
    };
    DataSvc.prototype.getStockInfoByName = function (name) {
        return this.getStockInfo({ name: name });
        //return this._getStockInfo('name=' + name);
    };
    DataSvc.prototype.getStockInfoByPrices = function (prices) {
        return this.getStockInfo({ prices: prices });
        //return this._getStockInfo('prices=' + prices);
    };
    DataSvc.prototype.getStockInfoByEvents = function (events) {
        return this.getStockInfo({ events: events });
        //return this._getStockInfo('events=' + events);
    };
    DataSvc.prototype._getStockInfo = function (src) {
        //var data = <any>this.http.get('StockInfo.ashx' + (src.length > 0 ? '?' + src : '')).map(res => res.text());
        var data = map_1.map.call(this.http.get('StockInfo.ashx' + (src.length > 0 ? '?' + src : '')), function (res) { return res.text(); });
        return data;
    };
    DataSvc.prototype.getPortfolio = function (dataSvc) {
        return new Portfolio_1.Portfolio(dataSvc);
    };
    DataSvc = __decorate([
        core_1.Injectable(),
        __param(0, core_1.Inject(http_1.Http))
    ], DataSvc);
    return DataSvc;
}());
exports.DataSvc = DataSvc;
//# sourceMappingURL=DataSvc.js.map