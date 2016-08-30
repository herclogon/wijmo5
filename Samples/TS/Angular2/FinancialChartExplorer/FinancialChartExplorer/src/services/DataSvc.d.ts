import { Http } from '@angular/http';
export declare class DataSvc {
    http: Http;
    constructor(http: Http);
    getData(symbol: string, strings?: boolean): any;
    getDataList(): any[];
    getIndicatorList(): any[];
    getOverlayList(): any[];
    findApproxRange(min: any, max: any, percent?: any): {
        min: number;
        max: number;
    };
    findRenderedYRange(data: any, xmin: any, xmax: any): {
        min: any;
        max: any;
    };
}
