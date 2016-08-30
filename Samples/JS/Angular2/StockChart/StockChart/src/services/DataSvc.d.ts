import { Http } from '@angular/http';
import { Portfolio } from './Portfolio';
export declare class DataSvc {
    http: Http;
    constructor(http: Http);
    getData(): any[];
    getStockInfo(params: any): any;
    getStockInfoByName(name: any): any;
    getStockInfoByPrices(prices: any): any;
    getStockInfoByEvents(events: any): any;
    _getStockInfo(src: string): any;
    getPortfolio(dataSvc: any): Portfolio;
}
