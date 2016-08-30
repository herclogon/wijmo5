import { Company } from './Company';
import { DataSvc } from './DataSvc';
/**
 * Represents the period to be shown in the chart.
 */
export declare enum ChartPeriod {
    d1 = 0,
    w1 = 1,
    m1 = 2,
    m3 = 3,
    m6 = 4,
    YTD = 5,
    y1 = 6,
    y2 = 7,
    y3 = 8,
    All = 9,
    Unknown = 10,
}
/**
 * Represents a portfolio composed of items.
 * Each item corresponds to a company and includes the quote information.
 */
export declare class Portfolio {
    static STGKEY: string;
    static _companyCache: {};
    _items: wijmo.collections.ObservableArray;
    _cv: wijmo.collections.CollectionView;
    _newItemSymbol: string;
    _mainItemSymbol: string;
    _chartPeriod: ChartPeriod;
    _updating: boolean;
    _toChange: number;
    _startDate: Date;
    _endDate: Date;
    _mainQuoteUpdated: boolean;
    _requestNum: number;
    _dataSvc: DataSvc;
    constructor(dataSvc: DataSvc);
    itemsChanged: wijmo.Event;
    viewChanged(): void;
    view: wijmo.collections.CollectionView;
    chartPeriod: ChartPeriod;
    startDate: Date;
    endDate: Date;
    displayChartSeriesNum: number;
    requestNum: number;
    mainQuoteUpdated: boolean;
    getChartStartDate(): Date;
    addMainQuote(): void;
    addNewItem(): void;
    canAddNewItem(): boolean;
    newItemSymbol: string;
    canAddMainItem(): boolean;
    mainItemSymbol: string;
    loadItems(): void;
    saveItems(): void;
    addItem(symbol: string, chart?: boolean, withEvents?: boolean): void;
    addSecondItem(symbol: string, chart?: boolean): void;
    removeItem(symbol: string): void;
    indexOf(symbol: string): number;
    reset(): void;
    getCompany(symbol: string, withEvents?: boolean): Company;
    parseTradeInfos(prices: any): any[];
    updateChartData(): void;
}
