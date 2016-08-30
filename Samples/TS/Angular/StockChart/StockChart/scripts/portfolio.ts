module stockchart {

    /**
     * Represents the period to be shown in the chart.
     */
    export enum ChartPeriod {
        d1, /** last 1 day. */
        w1, /** last 5 dyas. */
        m1,  /** Last 1 months. */
        m3,  /** Last 3 months. */
        m6,  /** Last 6 months. */
        YTD, /** This year. */
        y1, /** Last 12 months. */
        y2, /** Last 24 months. */
        y3, /** Last 36 months. */
        All,  /** Show all data. */
        Unkonw  /** unknow the period. */
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

        constructor() {

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
            var self = this;
            window.addEventListener('unload', function () {
                self.saveItems();
            });
        }

        // raise event when items change 
        // (on a timeout to avoid too many updates)
        itemsChanged = new wijmo.Event();
        viewChanged() {
            var self = this;
            if (self._requestNum > 0) {
                return;
            }
            if (!self._updating) {
                self._updating = true;
                if (self._toChange) {
                    clearTimeout(self._toChange);
                }
                self._toChange = setTimeout(function () {
                    self.updateChartData();
                    self.itemsChanged.raise(self);
                    self._cv.refresh();
                    self._updating = false;
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

        //get the chart displayed series num
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
            var self = this, _withEvents = withEvents,
                c: Company = Portfolio._companyCache[symbol];

            // company not in cache? create now
            if (c == null) {

                // create and store in cache
                c = new Company(symbol);
                Portfolio._companyCache[symbol] = c;

                // get company name
                $.get('StockInfo.ashx?name=' + symbol, function (result) {
                    c.name = result;
                    self.viewChanged();
                    self._requestNum++;
                    // get company prices
                    $.get('StockInfo.ashx?prices=' + symbol, function (result) {

                        // store prices
                        var lines = result.split('\\r');
                        for (var i = 0; i < lines.length; i++) {
                            var items = lines[i].split('\\t');
                            if (items.length == 2) {

                                var date = new Date($.trim(items[0]).replace(/-/g, '/')),
                                    prices = self.parseTradeInfos(items[1]);
                                c.prices.push({
                                    date: date, volume: prices[0], open: prices[1],
                                    high: prices[2], low: prices[3], close: prices[4]
                                });
                            }
                        }
                        //get company events
                        if (_withEvents) {
                            $.get('StockInfo.ashx?events=' + symbol, function (result) {
                                c.events.length = 0;
                                if (!result || result.length === 0) {
                                    return;
                                }
                                var events = $.parseJSON(result);
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
                                self._requestNum--;
                                self.viewChanged();
                            })
                        } else {
                            self._requestNum--;
                            self.viewChanged();
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

    /**
     * Represents a portfolio item.
     * Each item corresponds to a company and includes quote infotmation.
     */
    export class PortfolioItem {
        _portfolio: Portfolio;
        _company: Company;
        _chart: boolean;
        _chartData = [];
        _fullChartData = [];
        _analysisData = [];

        constructor(portfolio: Portfolio, symbol: string, chart: boolean, withEvent?: boolean) {
            this._portfolio = portfolio;
            this._chart = chart;
            this._company = portfolio.getCompany(symbol, withEvent);
        }

        get symbol(): string {
            return this._company.symbol;
        }
        get name(): string {
            return this._company.name;
        }
        get color(): string {
            return this._company.color;
        }
        get chart(): boolean {
            return this._chart;
        }
        set chart(value: boolean) {
            if (this._chart != value) {
                this._chart = value;
                this._portfolio.viewChanged();
            }
        }
        get events(): any {
            return this._company.events;
        }
        get chartData(): any[] {
            return this._chartData;
        }

        get fullChartData(): any[] {
            return this._fullChartData;
        }
        get analysisData(): any[] {
            return this._analysisData;
        }


        // updates the data to be shown on the chart
        updateChartData() {
            var
                firstValue = null,
                preLoadAnalysisData = false,
                chartData = [], analysisData = [],
                prices = this._company.prices,
                startDate = this._portfolio.startDate,
                endDate = this._portfolio.endDate;

            // calculate prices as variation relative to the first value
            // note: prices array starts with the current date
            for (var i = prices.length - 1; i >= 0; i--) {
                var p = prices[i];

                //when it's NASDAQ item, need to get all chart data.
                if (this.symbol === '^IXIC' && this._fullChartData.length < prices.length) {
                    this._fullChartData.push({ date: p.date, price: p.price, close: p.close });
                }

                // skip entries that are not within the period
                if (p.date < startDate || p.date > endDate) {
                    continue;
                }

                // set price
                if (firstValue == null) {
                    firstValue = prices[i].close;
                }

                //retrieve the analysis data
                if (!preLoadAnalysisData) {
                    var idx;
                    for (var j = 200; j > 0; j--) {
                        idx = i + j;
                        if (idx < prices.length) {
                            analysisData.push({ date: prices[idx].date, close: prices[idx].close, closeChg: (prices[idx].close - firstValue) / firstValue });
                        }
                    }
                    preLoadAnalysisData = true;
                }
                analysisData.push({ date: p.date, close: p.close, closeChg: (p.close - firstValue) / firstValue });
                chartData.push({
                    date: p.date, volume: p.volume,
                    high: p.high, low: p.low, open: p.open, close: p.close,
                    highChg: (p.high - firstValue) / firstValue,
                    lowChg: (p.low - firstValue) / firstValue,
                    openChg: (p.open - firstValue) / firstValue,
                    closeChg: (p.close - firstValue) / firstValue
                });
            }
            // save chart data
            this._chartData = chartData;
            this._analysisData = analysisData;
        }
    }

    /**
     * Represents a publicly traded company.
     * The class contains the company name, ticker symbol, price history, 
     * and the color used to represent the company in the UI.
     */
    export class Company {
        name: string;
        symbol: string;
        color: string;
        prices = [];
        events = [];

        static _palette = [
        // Google
            '#FFA500', '#FFA500', '#DC3912', '#109618', '#990099', '#3B3EAC', '#0099C6',
            '#DD4477', '#66AA00', '#B82E2E', '#316395', '#994499', '#22AA99', '#AAAA11',
            '#6633CC', '#E67300', '#8B0707', '#329262', '#5574A6', '#3B3EAC', '#000000',
        // Office
            '#FFBE00', '#94D752', '#00B652', '#00B6EF', '#0075C6', '#002263', '#73359C', // Standard
            '#B53D9C', '#BD3D6B', '#AD65BD', '#DE6D33', '#FFB638', '#CE6DA5', '#FF8E38', // Opulent
            '#525D6B', '#FF8633', '#739ADE', '#B52B15', '#F7CF2B', '#ADBAD6', '#737D84', // Oriel
            '#424452', '#737DA5', '#9CBACE', '#D6DB7B', '#FFDB7B', '#BD8673', '#8C726B', // Origin
            '#424C22', '#A5B694', '#F7A642', '#E7BE2B', '#D692A5', '#9C86C6', '#849EC6', // Paper
            '#4A2215', '#3892A5', '#FFBA00', '#C62B2B', '#84AA33', '#944200', '#42598C', // Solstice
            '#383838', '#6BA2B5', '#CEAE00', '#8C8AA5', '#738663', '#9C9273', '#7B868C', // Technic
            '#15487B', '#4A82BD', '#C6504A', '#9CBA5A', '#8465A5', '#4AAEC6', '#F79642', // Office
            '#6B656B', '#CEBA63', '#9CB284', '#6BB2CE', '#6386CE', '#7B69CE', '#A578BD', // Apex
            '#332E33', '#F77D00', '#382733', '#15597B', '#4A8642', '#63487B', '#C69A5A', // Aspect
            '#636984', '#D6604A', '#CEB600', '#28AEAD', '#8C7873', '#8CB28C', '#0E924A'  // Civic
        ];
        static _ctr = 0;

        constructor(symbol: string) {
            this.symbol = symbol;
            this.color = Company._palette[Company._ctr % Company._palette.length];
            Company._ctr++;
        }
    }
}