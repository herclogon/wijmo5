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
                dateStr = d[i].date;
                dateStr = dateStr.split('/');
                d[i].date = new Date(dateStr[2], dateStr[0] - 1, dateStr[1]);
            }
            return d;
        });
        return data;
    }

}