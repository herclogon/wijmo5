'use strict';

import { Injectable, Inject } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/Rx';
import {map} from 'rxjs/operator/map';

// Common data service
@Injectable()
export class DataSvc {
    http: Http;

    constructor( @Inject(Http) http: Http) {
        this.http = http;
    }

    // get chart data
    getData() {
        //var data = <any>this.http.get('data/fb.json').map(res => {
        var data = map.call(this.http.get('data/fb.json'), res => {
            var d = res.json(),
                len = d.length,
                i, dateStr;

            for (i = 0; i < len; i++) {
                d[i].date = wijmo.Globalize.parseDate(d[i].date, 'MM/dd/yy');
            }
            return d;
        });
        return data;
    }
    
    // get basic data
    getBasicData() {
        var data = [],
            sales = [
                96, 19, 54, 83, 15, 56, 36, 4, 29, 93,
                38, 71, 50, 77, 69, 13, 79, 57, 29, 62,
                4, 27, 66, 96, 65, 12, 52, 3, 61, 48, 50,
                70, 39, 33, 25, 49, 69, 46, 44, 40, 35,
                72, 64, 10, 66, 63, 78, 19, 96, 26],
            len = sales.length;

        for (var i = 0; i < len; i++) {
            data.push({
                sale: sales[i],
                date: new Date(2014, 0, i),
            });
        }
        return data;
    }

}