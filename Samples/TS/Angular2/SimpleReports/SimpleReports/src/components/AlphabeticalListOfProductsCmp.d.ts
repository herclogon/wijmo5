import { DataSvc } from '../services/DataSvc';
export declare class AlphabeticalListOfProductsCmp {
    products: wijmo.odata.ODataCollectionView;
    categories: wijmo.odata.ODataCollectionView;
    today: Date;
    constructor(dataSvc: DataSvc);
    find(view: any, prop: any, val: any): any;
}
