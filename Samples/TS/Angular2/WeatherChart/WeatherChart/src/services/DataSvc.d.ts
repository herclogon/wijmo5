import { Http } from '@angular/http';
export declare class DataSvc {
    http: Http;
    constructor(http: Http);
    getData(): any;
}
