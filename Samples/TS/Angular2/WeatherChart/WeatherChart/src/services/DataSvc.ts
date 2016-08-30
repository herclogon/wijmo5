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

    // get WeatherChart data
    getData() {
        //var data = this.http.get('data/WeatherData.txt').map(res => res.json());
        //var data = <any>this.http.get('data/WeatherData.txt').map(function (res) {
        var data = map.call(this.http.get('data/WeatherData.txt'), res => {
            var strings = res.text().split('\r\n'),
                len = strings.length,
                items = [],
                names = [];
            for (var i = 0; i < len; i++) {
                var sdata = strings[i].split(',');
                var slen = sdata.length;
                if (i == 0) {
                    for (var j = 0; j < slen; j++) {
                        names.push(sdata[j]);
                    }
                } else {
                    var item = {};
                    for (var j = 0; j < slen; j++) {
                        if (j == 0) {
                            item[names[j]] = wijmo.Globalize.parseDate(sdata[j], 'yyyy-MM-dd');
                        } else {
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
    }

}