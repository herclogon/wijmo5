module wijmo.data {

    // provide access to breeze
    declare var breeze: any;

    /**
     * Extends @see:CollectionView to support Breeze.
     *
     * Breeze is a JavaScript library that helps you manage data in rich client applications.
     * It makes it easier to  store data in a database, query and save those data as complex object
     * graphs, and share these graphs across multiple screens of your JavaScript client. 
     * You can find out more about BreezeJS at http://www.breezejs.com. 
     */
    export class BreezeCollectionView extends wijmo.collections.CollectionView{        
        _manager: any;
        _entityQuery: any;
        _sortOnServer: boolean;
        _filterOnServer: boolean;
        _pageOnServer: boolean;
        _filterPredicate: any;
        _totalCount: number;
        _isSaving: boolean = false;

         /**
         * Initializes a new instance of an @see:BreezeCollectionView.
         *
         * @param breezeEntityManager Entity manager for breeze service.
         * @param entityQuery Breeze entity query.
         * @param sortOnServer Whether to sort on the server or on the client.
         * @param pageOnServer Whether to page on the server or on the client.
         * @param filterOnServer Whether to filter on the server or on the client.
         */
        constructor(breezeEntityManager: any, entityQuery: any, sortOnServer = false, pageOnServer = false, filterOnServer = false) {
            super();
            this._manager = breezeEntityManager;
            this._entityQuery = entityQuery;
            this._sortOnServer = sortOnServer;
            this._pageOnServer = pageOnServer;
            this._filterOnServer = filterOnServer;
            this.sortDescriptions.collectionChanged.removeAllHandlers();
            this.sortDescriptions.collectionChanged.addHandler(this._sortDescHandler.bind(this));
            this._queryData();
        }
        /**
         * Overridden to get the total number pages.
         */
        get pageCount(): number {
            if (this.pageSize) {
                if (this._pageOnServer) {
                    return Math.ceil(this._totalCount / this.pageSize);
                } else {
                    return Math.ceil(this._view.length / this.pageSize);
                }
            }
            return 1;
        }
        /**
         * Overridden to get or set the number of items to display on a page.
         */
        get pageSize(): number {
            return this._pgSz;
        }
        set pageSize(value: number) {
            if (value != this._pgSz) {
                this._pgSz = wijmo.asInt(value);
                if (this._pageOnServer) {
                    this._queryData();
                } else {
                    this.refresh();
                }
            }
        }
        /**
         * Overridden to move to the page at the specified index.
         *
         * @param index Index of the page to move to.
         * @return True if the page index was changed successfully.
         */
        moveToPage(index: number): boolean {

            if (!this.pageOnServer) {
                return super.moveToPage(index);
            }
            var newIndex = wijmo.clamp(index, 0, this.pageCount - 1);
            if (newIndex != this.pageIndex) {

                // honor canChangePage
                if (!this.canChangePage) {
                    wijmo.assert(false, 'Changing pages not supported.');
                }

                // raise pageChanging
                var e = new wijmo.collections.PageChangingEventArgs(newIndex);
                if (this.onPageChanging(e)) {

                    // change the page
                    this._pgIdx = newIndex;
                    this._idx = 0;
                    this._queryData();
                }
            }
            return this._pgIdx == index;
        }
        /**
         * Overridden to modify the item in the database.
         */
        commitEdit() {
            var editItem = this.currentEditItem;
            super.commitEdit();
            if (editItem) {
                this._saveChanges([editItem]);
            }
        }

        // End of Override properties & methods

        /**
         * Gets or sets a value indicating whether to sort on the server or on the client.
         */
        get sortOnServer(): boolean {
            return this._sortOnServer;
        }
        set sortOnServer(value: boolean) {
            if (value != this.sortOnServer) {
                this._sortOnServer = asBoolean(value);
                this._queryData();
            }
        }
        /**
         * Gets or sets a value indicating whether to perform paging on the server or on the client.
         */
        get pageOnServer(): boolean {
            return this._pageOnServer;
        }
        set pageOnServer(value: boolean) {
            if (value != this.pageOnServer) {
                this._pageOnServer = asBoolean(value);
                this._queryData();
            }
        }
        /**
         * Gets or sets a value indicating whether to perform filtering on the server or on the client.
         */
        get filterOnServer(): boolean {
            return this._filterOnServer;
        }
        set filterOnServer(value: boolean) {
            if (value != this._filterOnServer) {
                this._filterOnServer = asBoolean(value);
                if (!this._filterOnServer) {
                    this.filterPredicate = null;
                }
                this._queryData();
            }
        }
        /**
         * Gets the total count of source items.
         */
        get totalCount(): number {
            return this._totalCount;
        }
        /**
         * Gets or sets the filter definition as a Breeze filter Predicate.
         */
        get filterPredicate(): any {
            return this._filterPredicate;
        }
        set filterPredicate(value: any) {
            if (value != this._filterPredicate) {
                this._filterPredicate = value;
                if (this.filterOnServer) {
                    this._queryData();
                }
            }
        }
        /**
         * Updates the filter definition based on a known filter provider such as the 
         * @see:wijmo.grid.FlexGridFilter.
         *
         * @param filterProvider Known filter provider, typically an instance of a
         * @see:wijmo.grid.filter.FlexGridFilter.
         */
        updateFilterDefinition(filterProvider: any) {
            if (this.filterOnServer && wijmo.grid && wijmo.grid.filter && filterProvider instanceof wijmo.grid.filter.FlexGridFilter) {
                this.filterPredicate = this._asPredicate(filterProvider);
            }
        }

        /**
         * Occurs when the breeze query succeeds.
         */
        querySucceeded = new wijmo.Event();
        /**
         * Raises the @see:querySucceeded event.
         *
         * @param e indicates the query data count.
         */
        onQuerySucceeded(e: QueryEventArgs) {
            this.querySucceeded.raise(this, e);
        }
        /**
         * Occurs when the breeze query fails.
         */
        queryFailed = new wijmo.Event();
        /**
         * Raises the @see:queryFailed event.
         *
         * @param e indicates the fail information.
         */
        onQueryFailed(e: QueryEventArgs) {
            this.queryFailed.raise(this, e);
        }
        /**
         * Occurs when the save request success.
         */
        saveSucceeded = new wijmo.Event();
        /**
         * Raises the @see:onSaveSucceeded event.
         *
         * @param e indicates the success information.
         */
        onSaveSucceeded(e: QueryEventArgs) {
            this.saveSucceeded.raise(this, e);
        }
        /**
         * Occurs when the save request fails.
         */
        saveFailed = new wijmo.Event();
        /**
         * Raises the @see:onSaveFailed event.
         *
         * @param e indicates the fail information.
         */
        onSaveFailed(e: QueryEventArgs) {
            this.saveFailed.raise(this, e);
        }

        // ** implementation

        // gets the list that corresponds to the current page
        _getPageView() {
            return this.pageOnServer
                ? this._view
                : super._getPageView();
        }

        // disable sort and filter on client if we're doing it on the server
        _performRefresh() {

            // save settings
            var canFilter = this._canFilter,
                canSort = this._canSort;

            // perform refresh
            this._canFilter = !this._filterOnServer;
            this._canSort = !this._sortOnServer;
            super._performRefresh();

            // restore settings
            this._canFilter = canFilter;
            this._canSort = canSort;
        }

        // send query for data
        private _queryData(): any {
            var q = this._getServerSortQuery(this._entityQuery);
            q = this._getServerPageQuery(q);
            q = q.inlineCount(true);
            q = this._getServerFilterQuery(q);
            this._manager.executeQuery(q)
                .then(this._querySucceeded.bind(this))
                .fail(this._queryFailed.bind(this));
        }  
        private _querySucceeded(data) {
            if (data.inlineCount !== null && data.inlineCount !== undefined) {
                this._totalCount = data.inlineCount;
            }
            this.sourceCollection = data.results;
            this.onQuerySucceeded(new QueryEventArgs(data.results.length));
        }
        private _queryFailed(error) {
            this.onQueryFailed(new QueryEventArgs(error));
        }        

        // gets the query with server sort
        private _getServerSortQuery(query: any): any {
            var strSort = '',
                sdCount = this.sortDescriptions.length;

            if (!query) {
                return;
            }

            // sort on server
            if (sdCount > 0 && this.canSort && this.sortOnServer) {
                for (var i = 0; i < sdCount; i++) {
                    var sd = <wijmo.collections.SortDescription>this.sortDescriptions[i];
                    strSort += sd.property;
                    if (!sd.ascending) {
                        strSort += ' desc';
                    }
                    if (i != sdCount - 1) {
                        strSort += ',';
                    }
                }
                query = query.orderBy(strSort);
            }

            // return the query
            return query;
        }

        // gets the query with server paging
        private _getServerPageQuery(query: any): any {
            var skip = 0;
            if (!query) {
                return;
            }

            //apply page on server
            if (this._pageOnServer && this.pageSize) {                
                skip = this.pageIndex * this.pageSize;
                if (skip) {
                    query = query.skip(skip);
                }
                query = query.take(this.pageSize);
            }

            return query;
        }

        // get the query with server filtering
        private _getServerFilterQuery(query: any): any {
            return query && this._filterPredicate
                ? query.where(this._filterPredicate)
                : query;
        }

        // handle changes to the sort descriptors
        private _sortDescHandler() {
            var arr = this.sortDescriptions;
            for (var i = 0; i < arr.length; i++) {
                var sd = wijmo.tryCast(arr[i], wijmo.collections.SortDescription);
                if (!sd) {
                    throw 'sortDescriptions array must contain SortDescription objects.';
                }
            }
            if (this.canSort) {
                if (this.sortOnServer) {
                    this._queryData();
                } else {
                    this.refresh();
                }
            }
        }

        // save the changes
        private _saveChanges(entities) {
            if (this._manager.hasChanges()) {
                if (this._isSaving) {
                    setTimeout(this._saveChanges.bind(this), 50);
                    return;
                }
                this._isSaving = true;
                this._manager.saveChanges(entities)
                    .then(this._saveSucceeded.bind(this))
                    .fail(this._saveFailed.bind(this))
                    .fin(this._saveFinished.bind(this));
            }
        }
        private _saveSucceeded(saveResult) {
            this.onSaveSucceeded(new QueryEventArgs(saveResult));
            this._queryData();
        }
        private _saveFailed(error) {
            this.onSaveFailed(new QueryEventArgs(error));
        }
        private _saveFinished() {
            this._isSaving = false;
        }

        // builds a Breeze Predicate based on a filter provider
        _asPredicate(filter: wijmo.grid.filter.FlexGridFilter): any {
            var predicate: any,
                p: any;
            for (var c = 0; c < filter.grid.columns.length; c++) {
                var col = filter.grid.columns[c],
                    cf = filter.getColumnFilter(col, false);
                if (cf && cf.isActive) {
                    if (cf.conditionFilter && cf.conditionFilter.isActive) {
                        p = this._asConditionFilterPredicate(cf.conditionFilter);
                        predicate = predicate ? predicate.and(p) : p;
                    } else if (cf.valueFilter && cf.valueFilter.isActive) {
                        p = this._asValueFilterPredicate(cf.valueFilter);
                        predicate = predicate ? predicate.and(p) : p;
                    }
                }
            }
            return predicate;
        }
        private _asValueFilterPredicate(vf: wijmo.grid.filter.ValueFilter): any {
            var col = vf.column,
                fld = col.binding,
                predicate: any,
                p: any;
            for (var key in vf.showValues) {
                var value = wijmo.changeType(key, col.dataType, col.format);
                if (isDate(value)) { 
                    // special handling for dates (disregarding time); more details here:
                    // http://stackoverflow.com/questions/21601069/breeze-filtering-by-date-only-on-a-datetime-type
                    p = new breeze.Predicate(fld, '>=', value);
                    p = p.and(new breeze.Predicate(fld, '<=', DateTime.addDays(value, 1)));
                } else {
                    p = new breeze.Predicate(fld, '==', value);
                }
                predicate = predicate ? predicate.or(p) : p;
            }
            return predicate;
        }
        private _asConditionFilterPredicate(cf: wijmo.grid.filter.ConditionFilter): any {
            var predicate = this._asConditionPredicate(cf, cf.condition1);
            if (cf.condition2.operator != null) {
                var p = this._asConditionPredicate(cf, cf.condition2);
                if (cf.and) {
                    predicate = predicate.and(p);
                } else {
                    predicate = predicate.or(p);
                }
            }
            return predicate;
        }
        private _asConditionPredicate(cf: wijmo.grid.filter.ConditionFilter, cond: wijmo.grid.filter.FilterCondition): any {
            var op = null,
                not = null;
            switch (cond.operator) {
                case 0: // EQ = 0, 
                    op = breeze.FilterQueryOp.Equals;
                    break;
                case 1: // NE = 1,
                    op = breeze.FilterQueryOp.NotEquals;
                    break;
                case 2: // GT = 2, 
                    op = breeze.FilterQueryOp.GreaterThan;
                    break;
                case 3: // GE = 3, 
                    op = breeze.FilterQueryOp.GreaterThanOrEqual;
                    break;
                case 4: // LT = 4, 
                    op = breeze.FilterQueryOp.LessThan;
                    break;
                case 5: // LE = 5, 
                    op = breeze.FilterQueryOp.LessThanOrEqual;
                    break;
                case 6: // BW = 6, 
                    op = breeze.FilterQueryOp.StartsWith;
                    break;
                case 7: // EW = 7, 
                    op = breeze.FilterQueryOp.EndsWith;
                    break;
                case 8: // CT = 8, 
                    op = breeze.FilterQueryOp.Contains;
                    break;
                case 9: // NC = 9 
                    op = breeze.FilterQueryOp.Contains;
                    not = true;
                    break;
            }
            var p = new breeze.Predicate(cf.column.binding, op, cond.value);
            return not ? breeze.Predicate.not(p) : p;
        }
    }

    export class QueryEventArgs extends wijmo.EventArgs{
        _data: any;

        constructor(data) {
            super();
            this._data = data;
        }

        get data(): any {
            return this._data;
        }
    }
}  