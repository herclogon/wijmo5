var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wijmo;
(function (wijmo) {
    var data;
    (function (data_1) {
        /**
         * Extends @see:CollectionView to support Breeze.
         *
         * Breeze is a JavaScript library that helps you manage data in rich client applications.
         * It makes it easier to  store data in a database, query and save those data as complex object
         * graphs, and share these graphs across multiple screens of your JavaScript client.
         * You can find out more about BreezeJS at http://www.breezejs.com.
         */
        var BreezeCollectionView = (function (_super) {
            __extends(BreezeCollectionView, _super);
            /**
            * Initializes a new instance of an @see:BreezeCollectionView.
            *
            * @param breezeEntityManager Entity manager for breeze service.
            * @param entityQuery Breeze entity query.
            * @param sortOnServer Whether to sort on the server or on the client.
            * @param pageOnServer Whether to page on the server or on the client.
            * @param filterOnServer Whether to filter on the server or on the client.
            */
            function BreezeCollectionView(breezeEntityManager, entityQuery, sortOnServer, pageOnServer, filterOnServer) {
                if (sortOnServer === void 0) { sortOnServer = false; }
                if (pageOnServer === void 0) { pageOnServer = false; }
                if (filterOnServer === void 0) { filterOnServer = false; }
                _super.call(this);
                this._isSaving = false;
                /**
                 * Occurs when the breeze query succeeds.
                 */
                this.querySucceeded = new wijmo.Event();
                /**
                 * Occurs when the breeze query fails.
                 */
                this.queryFailed = new wijmo.Event();
                /**
                 * Occurs when the save request success.
                 */
                this.saveSucceeded = new wijmo.Event();
                /**
                 * Occurs when the save request fails.
                 */
                this.saveFailed = new wijmo.Event();
                this._manager = breezeEntityManager;
                this._entityQuery = entityQuery;
                this._sortOnServer = sortOnServer;
                this._pageOnServer = pageOnServer;
                this._filterOnServer = filterOnServer;
                this.sortDescriptions.collectionChanged.removeAllHandlers();
                this.sortDescriptions.collectionChanged.addHandler(this._sortDescHandler.bind(this));
                this._queryData();
            }
            Object.defineProperty(BreezeCollectionView.prototype, "pageCount", {
                /**
                 * Overridden to get the total number pages.
                 */
                get: function () {
                    if (this.pageSize) {
                        if (this._pageOnServer) {
                            return Math.ceil(this._totalCount / this.pageSize);
                        }
                        else {
                            return Math.ceil(this._view.length / this.pageSize);
                        }
                    }
                    return 1;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BreezeCollectionView.prototype, "pageSize", {
                /**
                 * Overridden to get or set the number of items to display on a page.
                 */
                get: function () {
                    return this._pgSz;
                },
                set: function (value) {
                    if (value != this._pgSz) {
                        this._pgSz = wijmo.asInt(value);
                        if (this._pageOnServer) {
                            this._queryData();
                        }
                        else {
                            this.refresh();
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Overridden to move to the page at the specified index.
             *
             * @param index Index of the page to move to.
             * @return True if the page index was changed successfully.
             */
            BreezeCollectionView.prototype.moveToPage = function (index) {
                if (!this.pageOnServer) {
                    return _super.prototype.moveToPage.call(this, index);
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
            };
            /**
             * Overridden to modify the item in the database.
             */
            BreezeCollectionView.prototype.commitEdit = function () {
                var editItem = this.currentEditItem;
                _super.prototype.commitEdit.call(this);
                if (editItem) {
                    this._saveChanges([editItem]);
                }
            };
            Object.defineProperty(BreezeCollectionView.prototype, "sortOnServer", {
                // End of Override properties & methods
                /**
                 * Gets or sets a value indicating whether to sort on the server or on the client.
                 */
                get: function () {
                    return this._sortOnServer;
                },
                set: function (value) {
                    if (value != this.sortOnServer) {
                        this._sortOnServer = wijmo.asBoolean(value);
                        this._queryData();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BreezeCollectionView.prototype, "pageOnServer", {
                /**
                 * Gets or sets a value indicating whether to perform paging on the server or on the client.
                 */
                get: function () {
                    return this._pageOnServer;
                },
                set: function (value) {
                    if (value != this.pageOnServer) {
                        this._pageOnServer = wijmo.asBoolean(value);
                        this._queryData();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BreezeCollectionView.prototype, "filterOnServer", {
                /**
                 * Gets or sets a value indicating whether to perform filtering on the server or on the client.
                 */
                get: function () {
                    return this._filterOnServer;
                },
                set: function (value) {
                    if (value != this._filterOnServer) {
                        this._filterOnServer = wijmo.asBoolean(value);
                        if (!this._filterOnServer) {
                            this.filterPredicate = null;
                        }
                        this._queryData();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BreezeCollectionView.prototype, "totalCount", {
                /**
                 * Gets the total count of source items.
                 */
                get: function () {
                    return this._totalCount;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(BreezeCollectionView.prototype, "filterPredicate", {
                /**
                 * Gets or sets the filter definition as a Breeze filter Predicate.
                 */
                get: function () {
                    return this._filterPredicate;
                },
                set: function (value) {
                    if (value != this._filterPredicate) {
                        this._filterPredicate = value;
                        if (this.filterOnServer) {
                            this._queryData();
                        }
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Updates the filter definition based on a known filter provider such as the
             * @see:wijmo.grid.FlexGridFilter.
             *
             * @param filterProvider Known filter provider, typically an instance of a
             * @see:wijmo.grid.filter.FlexGridFilter.
             */
            BreezeCollectionView.prototype.updateFilterDefinition = function (filterProvider) {
                if (this.filterOnServer && wijmo.grid && wijmo.grid.filter && filterProvider instanceof wijmo.grid.filter.FlexGridFilter) {
                    this.filterPredicate = this._asPredicate(filterProvider);
                }
            };
            /**
             * Raises the @see:querySucceeded event.
             *
             * @param e indicates the query data count.
             */
            BreezeCollectionView.prototype.onQuerySucceeded = function (e) {
                this.querySucceeded.raise(this, e);
            };
            /**
             * Raises the @see:queryFailed event.
             *
             * @param e indicates the fail information.
             */
            BreezeCollectionView.prototype.onQueryFailed = function (e) {
                this.queryFailed.raise(this, e);
            };
            /**
             * Raises the @see:onSaveSucceeded event.
             *
             * @param e indicates the success information.
             */
            BreezeCollectionView.prototype.onSaveSucceeded = function (e) {
                this.saveSucceeded.raise(this, e);
            };
            /**
             * Raises the @see:onSaveFailed event.
             *
             * @param e indicates the fail information.
             */
            BreezeCollectionView.prototype.onSaveFailed = function (e) {
                this.saveFailed.raise(this, e);
            };
            // ** implementation
            // gets the list that corresponds to the current page
            BreezeCollectionView.prototype._getPageView = function () {
                return this.pageOnServer
                    ? this._view
                    : _super.prototype._getPageView.call(this);
            };
            // disable sort and filter on client if we're doing it on the server
            BreezeCollectionView.prototype._performRefresh = function () {
                // save settings
                var canFilter = this._canFilter, canSort = this._canSort;
                // perform refresh
                this._canFilter = !this._filterOnServer;
                this._canSort = !this._sortOnServer;
                _super.prototype._performRefresh.call(this);
                // restore settings
                this._canFilter = canFilter;
                this._canSort = canSort;
            };
            // send query for data
            BreezeCollectionView.prototype._queryData = function () {
                var q = this._getServerSortQuery(this._entityQuery);
                q = this._getServerPageQuery(q);
                q = q.inlineCount(true);
                q = this._getServerFilterQuery(q);
                this._manager.executeQuery(q)
                    .then(this._querySucceeded.bind(this))
                    .fail(this._queryFailed.bind(this));
            };
            BreezeCollectionView.prototype._querySucceeded = function (data) {
                if (data.inlineCount !== null && data.inlineCount !== undefined) {
                    this._totalCount = data.inlineCount;
                }
                this.sourceCollection = data.results;
                this.onQuerySucceeded(new QueryEventArgs(data.results.length));
            };
            BreezeCollectionView.prototype._queryFailed = function (error) {
                this.onQueryFailed(new QueryEventArgs(error));
            };
            // gets the query with server sort
            BreezeCollectionView.prototype._getServerSortQuery = function (query) {
                var strSort = '', sdCount = this.sortDescriptions.length;
                if (!query) {
                    return;
                }
                // sort on server
                if (sdCount > 0 && this.canSort && this.sortOnServer) {
                    for (var i = 0; i < sdCount; i++) {
                        var sd = this.sortDescriptions[i];
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
            };
            // gets the query with server paging
            BreezeCollectionView.prototype._getServerPageQuery = function (query) {
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
            };
            // get the query with server filtering
            BreezeCollectionView.prototype._getServerFilterQuery = function (query) {
                return query && this._filterPredicate
                    ? query.where(this._filterPredicate)
                    : query;
            };
            // handle changes to the sort descriptors
            BreezeCollectionView.prototype._sortDescHandler = function () {
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
                    }
                    else {
                        this.refresh();
                    }
                }
            };
            // save the changes
            BreezeCollectionView.prototype._saveChanges = function (entities) {
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
            };
            BreezeCollectionView.prototype._saveSucceeded = function (saveResult) {
                this.onSaveSucceeded(new QueryEventArgs(saveResult));
                this._queryData();
            };
            BreezeCollectionView.prototype._saveFailed = function (error) {
                this.onSaveFailed(new QueryEventArgs(error));
            };
            BreezeCollectionView.prototype._saveFinished = function () {
                this._isSaving = false;
            };
            // builds a Breeze Predicate based on a filter provider
            BreezeCollectionView.prototype._asPredicate = function (filter) {
                var predicate, p;
                for (var c = 0; c < filter.grid.columns.length; c++) {
                    var col = filter.grid.columns[c], cf = filter.getColumnFilter(col, false);
                    if (cf && cf.isActive) {
                        if (cf.conditionFilter && cf.conditionFilter.isActive) {
                            p = this._asConditionFilterPredicate(cf.conditionFilter);
                            predicate = predicate ? predicate.and(p) : p;
                        }
                        else if (cf.valueFilter && cf.valueFilter.isActive) {
                            p = this._asValueFilterPredicate(cf.valueFilter);
                            predicate = predicate ? predicate.and(p) : p;
                        }
                    }
                }
                return predicate;
            };
            BreezeCollectionView.prototype._asValueFilterPredicate = function (vf) {
                var col = vf.column, fld = col.binding, predicate, p;
                for (var key in vf.showValues) {
                    var value = wijmo.changeType(key, col.dataType, col.format);
                    if (wijmo.isDate(value)) {
                        // special handling for dates (disregarding time); more details here:
                        // http://stackoverflow.com/questions/21601069/breeze-filtering-by-date-only-on-a-datetime-type
                        p = new breeze.Predicate(fld, '>=', value);
                        p = p.and(new breeze.Predicate(fld, '<=', wijmo.DateTime.addDays(value, 1)));
                    }
                    else {
                        p = new breeze.Predicate(fld, '==', value);
                    }
                    predicate = predicate ? predicate.or(p) : p;
                }
                return predicate;
            };
            BreezeCollectionView.prototype._asConditionFilterPredicate = function (cf) {
                var predicate = this._asConditionPredicate(cf, cf.condition1);
                if (cf.condition2.operator != null) {
                    var p = this._asConditionPredicate(cf, cf.condition2);
                    if (cf.and) {
                        predicate = predicate.and(p);
                    }
                    else {
                        predicate = predicate.or(p);
                    }
                }
                return predicate;
            };
            BreezeCollectionView.prototype._asConditionPredicate = function (cf, cond) {
                var op = null, not = null;
                switch (cond.operator) {
                    case 0:
                        op = breeze.FilterQueryOp.Equals;
                        break;
                    case 1:
                        op = breeze.FilterQueryOp.NotEquals;
                        break;
                    case 2:
                        op = breeze.FilterQueryOp.GreaterThan;
                        break;
                    case 3:
                        op = breeze.FilterQueryOp.GreaterThanOrEqual;
                        break;
                    case 4:
                        op = breeze.FilterQueryOp.LessThan;
                        break;
                    case 5:
                        op = breeze.FilterQueryOp.LessThanOrEqual;
                        break;
                    case 6:
                        op = breeze.FilterQueryOp.StartsWith;
                        break;
                    case 7:
                        op = breeze.FilterQueryOp.EndsWith;
                        break;
                    case 8:
                        op = breeze.FilterQueryOp.Contains;
                        break;
                    case 9:
                        op = breeze.FilterQueryOp.Contains;
                        not = true;
                        break;
                }
                var p = new breeze.Predicate(cf.column.binding, op, cond.value);
                return not ? breeze.Predicate.not(p) : p;
            };
            return BreezeCollectionView;
        }(wijmo.collections.CollectionView));
        data_1.BreezeCollectionView = BreezeCollectionView;
        var QueryEventArgs = (function (_super) {
            __extends(QueryEventArgs, _super);
            function QueryEventArgs(data) {
                _super.call(this);
                this._data = data;
            }
            Object.defineProperty(QueryEventArgs.prototype, "data", {
                get: function () {
                    return this._data;
                },
                enumerable: true,
                configurable: true
            });
            return QueryEventArgs;
        }(wijmo.EventArgs));
        data_1.QueryEventArgs = QueryEventArgs;
    })(data = wijmo.data || (wijmo.data = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=BreezeCollectionView.js.map