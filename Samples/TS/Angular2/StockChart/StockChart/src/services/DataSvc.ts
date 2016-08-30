'use strict';

import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/Rx';
import {map} from 'rxjs/operator/map';
import { Portfolio } from './Portfolio';

// Common data service
@Injectable()
export class DataSvc {
    http: Http;

    constructor( @Inject(Http) http: Http) {
        this.http = http;
    }
    // data used to generate random items
    getData(): any[] {
        var data = [];
        // fill in data array here
        return data;
    }

    getStockInfo(params) {
        var strs= [];
        for (var k in params) {
            strs.push(k + '=' + params[k]);
        }
        return this._getStockInfo(strs.join('&'));
    }

    getStockInfoByName(name) {
        return this.getStockInfo({ name: name });
        //return this._getStockInfo('name=' + name);
    }

    getStockInfoByPrices(prices) {
        return this.getStockInfo({ prices: prices });
        //return this._getStockInfo('prices=' + prices);
    }

    getStockInfoByEvents(events) {
        return this.getStockInfo({ events: events });
        //return this._getStockInfo('events=' + events);
    }

    _getStockInfo(src: string) {
        //var data = <any>this.http.get('StockInfo.ashx' + (src.length > 0 ? '?' + src : '')).map(res => res.text());
        var data = map.call(this.http.get('StockInfo.ashx' + (src.length > 0 ? '?' + src : '')), res => res.text());
        return data;
    }

    getPortfolio(dataSvc): Portfolio {
        return new Portfolio(dataSvc);
    }
}