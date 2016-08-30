import { DataSvc } from '../services/DataSvc';
export declare class ProductsByCategoryCmp {
    products: wijmo.odata.ODataCollectionView;
    categories: wijmo.odata.ODataCollectionView;
    today: Date;
    constructor(dataSvc: DataSvc);
    select(view: any, prop: string, val: string): any[];
}
