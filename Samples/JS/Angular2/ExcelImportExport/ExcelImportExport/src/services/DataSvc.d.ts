export declare class DataSvc {
    private _products;
    private _countries;
    private _colors;
    products: string[];
    countries: string[];
    colors: string[];
    getProductOrders(count: number): any[];
    getExpenseItems(): any[];
    getEmployeesWithExpences(): any[];
}
