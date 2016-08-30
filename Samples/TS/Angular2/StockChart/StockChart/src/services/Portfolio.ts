import { Company } from './Company';
import { PortfolioItem } from './PortfolioItem';
import { DataSvc } from './DataSvc';

/**
 * Represents the period to be shown in the chart.
 */
export enum ChartPeriod {
    d1, /** last 1 day. */
    w1, /** last 5 days. */
    m1,  /** Last 1 months. */
    m3,  /** Last 3 months. */
    m6,  /** Last 6 months. */
    YTD, /** This year. */
    y1, /** Last 12 months. */
    y2, /** Last 24 months. */
    y3, /** Last 36 months. */
    All,  /** Show all data. */
    Unknown  /** unknown the period. */
}

/**
 * Represents a portfolio composed of items.
 * Each item corresponds to a company and includes the quote information.
 */
export class Portfolio {
    static STGKEY = 'stockItems';
    static _companyCache = {};
    _items: wijmo.collections.ObservableArray;
    _cv: wijmo.collections.CollectionView;
    _newItemSymbol: string;
    _mainItemSymbol: string;
    _chartPeriod = ChartPeriod.m6;
    _updating: boolean;
    _toChange: number;
    _startDate: Date;
    _endDate: Date;
    _mainQuoteUpdated = true;
    _requestNum: number;
    _dataSvc: DataSvc;

    constructor(dataSvc: DataSvc) {
        this._dataSvc = dataSvc;
        // initialize items collection/view
        this._items = new wijmo.collections.ObservableArray();
        this._cv = new wijmo.collections.CollectionView(this._items);
        this._cv.collectionChanged.addHandler(this.viewChanged.bind(this));

        // load the portfolio from storage
        this.loadItems();

        this._requestNum = 0;
        // if we have no items, add a few now
        if (this._items.length == 0) {
            //The NASDAQ item: used for range selector chart.
            this.addItem('^IXIC');
            this.addItem('MSFT', true, true);
        }

        // save portfolio when unloading
        window.addEventListener('unload', () => {
            this.saveItems();
        });
    }

    // raise event when items change 
    // (on a timeout to avoid too many updates)
    itemsChanged = new wijmo.Event();
    viewChanged() {
        if (this._requestNum > 0) {
            return;
        }
        if (!this._updating) {
            this._updating = true;
            if (this._toChange) {
                clearTimeout(this._toChange);
            }
            this._toChange = setTimeout(() => {
                this.updateChartData();
                this.itemsChanged.raise(this);
                this._cv.refresh();
                this._updating = false;
            }, 250);
        }
    }

    // gets the view with the portfolio items
    get view() {
        return this._cv;
    }

    // gets or sets the chart period
    get chartPeriod(): ChartPeriod {
        return this._chartPeriod;
    }
    set chartPeriod(value: ChartPeriod) {
        if (!value) {
            return;
        }
        this._chartPeriod = value;
        this._startDate = this.getChartStartDate();
        this._endDate = new Date();
        this.updateChartData();
        this.viewChanged();
    }

    get startDate(): Date {
        return this._startDate;
    }
    set startDate(value: Date) {
        this._startDate = value;
        this.viewChanged();
    }

    get endDate(): Date {
        return this._endDate;
    }
    set endDate(value: Date) {
        this._endDate = value;
        this.viewChanged();
    }

    //get the chart displayed series number
    get displayChartSeriesNum() {
        var num = 0;
        for (var i = 1; i < this._items.length; i++) {
            if (this._items[i].chart) {
                num++;
            }
        }
        return num++;
    }

    get requestNum(): number {
        return this._requestNum;
    }

    // the main quote changed or not
    get mainQuoteUpdated(): boolean {
        return this._mainQuoteUpdated;
    }
    set mainQuoteUpdated(value: boolean) {
        this._mainQuoteUpdated = value;
    }

    // gets the chart start date based on the current date and chart period
    getChartStartDate(): Date {
        var dt = new Date();
        switch (this.chartPeriod) {
            case ChartPeriod.m1:
                dt.setMonth(dt.getMonth() - 1);
                return dt;
            case ChartPeriod.m3:
                dt.setMonth(dt.getMonth() - 3);
                return dt;
            case ChartPeriod.m6:
                dt.setMonth(dt.getMonth() - 6);
                return dt;
            case ChartPeriod.YTD:
                return new Date(dt.getFullYear(), 0, 1);
            case ChartPeriod.m6:
                dt.setMonth(dt.getMonth() - 6);
                return dt;
            case ChartPeriod.y1:
                dt.setFullYear(dt.getFullYear() - 1);
                return dt;
            case ChartPeriod.y2:
                dt.setFullYear(dt.getFullYear() - 2);
                return dt;
            case ChartPeriod.y3:
                dt.setFullYear(dt.getFullYear() - 3);
                return dt;
            case ChartPeriod.All:
                return new Date(2005, 0, 1);
        }

        // unknown period, use the last 12 months
        dt.setFullYear(dt.getFullYear() - 1);
        return dt;
    }

    // add main item
    addMainQuote() {
        if (this.mainItemSymbol != null) {
            this.reset();
            this.addSecondItem(this.mainItemSymbol);
            this.mainQuoteUpdated = true;
            this.mainItemSymbol = null;
        }
    }

    // add new item
    addNewItem() {
        if (this.newItemSymbol != null) {
            this.addItem(this.newItemSymbol);
            this.newItemSymbol = null;
        }
    }
    canAddNewItem(): boolean {
        return this.newItemSymbol && this.indexOf(this.newItemSymbol) < 0;
    }
    get newItemSymbol(): string {
        return this._newItemSymbol;
    }
    set newItemSymbol(value: string) {
        this._newItemSymbol = value;
    }

    //add main item
    canAddMainItem(): boolean {
        return this.mainItemSymbol && this.indexOf(this.mainItemSymbol) < 0;
    }
    get mainItemSymbol(): string {
        return this._mainItemSymbol;
    }
    set mainItemSymbol(value: string) {
        this._mainItemSymbol = value;
    }

    // load items from local storage
    loadItems() {
        try {
            var data = localStorage != null ? localStorage[Portfolio.STGKEY] : null;
            if (data != null && JSON != null) {
                data = JSON.parse(data);
                this.chartPeriod = data.chartPeriod;
                for (var i = 0; i < data.items.length; i++) {
                    var item = <PortfolioItem>data.items[i];
                    if (i === 1) {
                        this.addItem(item.symbol, item.chart, true);
                    } else {
                        this.addItem(item.symbol, item.chart);
                    }
                }
                if (data.sort) {
                    var sd = new wijmo.collections.SortDescription(data.sort.property, data.sort.ascending);
                    this.view.sortDescriptions.push(sd);
                }
            }
        } catch (err) { }
    }

    // save items to local storage
    saveItems() {
        try {
            if (localStorage != null && JSON != null) {
                var data = {
                    chartPeriod: this.chartPeriod,
                    sort: null,
                    items: [],
                };
                if (this.view.sortDescriptions.length > 0) {
                    var sd = this.view.sortDescriptions[0];
                    data.sort = { property: sd.property, ascending: sd.ascending };
                }
                for (var i = 0; i < this._cv.items.length; i++) {
                    var item = this._cv.items[i];
                    var newItem = {
                        symbol: item.symbol,
                        chart: item.chart
                    };
                    data.items.push(newItem);
                }
                localStorage[Portfolio.STGKEY] = JSON.stringify(data);
            }
        } catch (err) { }
    }

    // add an item to the portfolio
    addItem(symbol: string, chart = true, withEvents?: boolean) {
        if (symbol) {
            var index = this.indexOf(symbol);
            if (index < 0) {
                var item = new PortfolioItem(this, symbol, chart, withEvents);
                // remove the first compare item when the compared items are more than five.
                if (this._items.length > 6) {
                    this._items.removeAt(2);
                }
                this._items.push(item);
            }
        }
    }

    addSecondItem(symbol: string, chart = true) {
        if (symbol) {
            var item = new PortfolioItem(this, symbol, chart, true);
            this._items[1] = item;
        }
    }

    // remove an item from the portfolio
    removeItem(symbol: string) {
        var index = this.indexOf(symbol);
        if (index > -1) {
            this._items.splice(index, 1);
        }
    }

    // gets the index of an item in the portfolio given a symbol
    indexOf(symbol: string): number {
        if (symbol) {
            symbol = symbol.toUpperCase();
            for (var i = 0; i < this._items.length; i++) {
                if (this._items[i].symbol == symbol) {
                    return i;
                }
            }
        }
        return -1;
    }

    //reset the items, only keep ^IXIC
    reset() {
        var items = this._items;
        if (items && items.length > 1) {
            items.splice(2, items.length - 1);
        }
    }

    // get a company from the global cache or load it if necessary
    getCompany(symbol: string, withEvents?: boolean) {
        var _withEvents = withEvents,
            c: Company = Portfolio._companyCache[symbol],
            dataSvc = this._dataSvc;

        // company not in cache? create now
        if (c == null) {

            // create and store in cache
            c = new Company(symbol);
            Portfolio._companyCache[symbol] = c;

            // get company name
            dataSvc.getStockInfoByName(symbol).subscribe(result => {
                c.name = result;
                this.viewChanged();
                this._requestNum++;
                // get company prices
                dataSvc.getStockInfoByPrices(symbol).subscribe(result => {

                    // store prices
                    var lines = result.split('\\r');
                    for (var i = 0; i < lines.length; i++) {
                        var items = lines[i].split('\\t');
                        if (items.length == 2) {

                            var date = new Date(items[0].trim().replace(/-/g, '/')),
                                prices = this.parseTradeInfos(items[1]);
                            c.prices.push({
                                date: date, volume: prices[0], open: prices[1],
                                high: prices[2], low: prices[3], close: prices[4]
                            });
                        }
                    }
                    //get company events
                    if (_withEvents && result.length > 0) {
                        dataSvc.getStockInfoByEvents(symbol).subscribe(result => {
                            c.events.length = 0;
                            if (!result || result.length === 0) {
                                return;
                            }
                            var events = JSON.parse(result);
                            var eveDate, fmtDate, hasNotAdded;
                            for (var i = 0; i < events.length; i++) {
                                hasNotAdded = true;
                                eveDate = new Date(events[i].date);
                                fmtDate = new Date(eveDate.getFullYear(), eveDate.getMonth(), eveDate.getDate(), 0, 0, 0);
                                // if has some news on same day, will don't push
                                for (var j = 0; j < c.events.length; j++) {
                                    if (fmtDate.getTime() === c.events[j].date.getTime()) {
                                        hasNotAdded = false;
                                        break;
                                    }
                                }
                                if (hasNotAdded) {
                                    c.events.push({
                                        title: events[i].title,
                                        date: fmtDate
                                    });
                                }
                            }
                            this._requestNum--;
                            this.viewChanged();
                        });
                    } else {
                        this._requestNum--;
                        this.viewChanged();
                    }
                });
            });
        }
        return c;
    }

    parseTradeInfos(prices) {
        var items = [], temp = [], infos = prices;
        ['\\o', '\\h', '\\l', '\\c'].forEach((item) => {
            temp = infos.split(item);
            items.push(parseFloat(temp[0]));
            infos = temp[1];
        })
        items.push(parseFloat(infos));
        return items;
    }
    // updates the chart data for all items
    updateChartData() {
        for (var i = 0; i < this._items.length; i++) {
            this._items[i].updateChartData();
        }
    }
}
