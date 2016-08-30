import { DataSvc } from '../services/DataSvc';
export declare class ProductCatalogCmp {
    products: wijmo.odata.ODataCollectionView;
    categories: wijmo.odata.ODataCollectionView;
    constructor(dataSvc: DataSvc);
    select(view: any, prop: string, val: string): any[];
}
