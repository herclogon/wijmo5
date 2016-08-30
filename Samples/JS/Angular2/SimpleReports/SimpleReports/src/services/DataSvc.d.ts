export declare class DataSvc {
    products: wijmo.odata.ODataCollectionView;
    categories: wijmo.odata.ODataCollectionView;
    employees: wijmo.odata.ODataCollectionView;
    customers: wijmo.odata.ODataCollectionView;
    productSales: wijmo.odata.ODataCollectionView;
    invoices: wijmo.odata.ODataCollectionView;
    reports: wijmo.collections.CollectionView;
    minInvoiceAmount: number;
    viewsLoaded: number;
    viewsLoadedFun: Function;
    initData(): void;
    viewLoaded(): void;
}
