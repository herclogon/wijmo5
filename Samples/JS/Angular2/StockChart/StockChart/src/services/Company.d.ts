/**
* Represents a publicly traded company.
* The class contains the company name, ticker symbol, price history,
* and the color used to represent the company in the UI.
*/
export declare class Company {
    name: string;
    symbol: string;
    color: string;
    prices: any[];
    events: any[];
    static _palette: string[];
    static _ctr: number;
    constructor(symbol: string);
}
