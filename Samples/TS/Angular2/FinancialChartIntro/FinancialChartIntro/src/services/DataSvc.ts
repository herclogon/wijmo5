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
        var data;
        
        //data = this.http.get('data/fb.json').map(res => res.json());
        data = map.call(this.http.get('data/fb.json'), res => res.json());
        return data;
    }
}