/*
    * Copyright(c) GrapeCity, Inc.  All rights reserved.
    */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// initialize viewer resources
wijmo.culture.Viewer = {
    // for ViewerBase
    cancel: 'Cancel',
    ok: 'OK',
    bottom: 'Bottom:',
    top: 'Top:',
    right: 'Right:',
    left: 'Left:',
    margins: 'Margins(inches)',
    orientation: 'Orientation:',
    paperKind: 'Paper Kind:',
    pageSetup: 'Page Setup',
    landscape: 'Landscape',
    portrait: 'Portrait',
    pageNumber: 'Page Number',
    zoomFactor: 'Zoom Factor',
    print: 'Print',
    search: 'Search',
    matchCase: 'Match case',
    wholeWord: 'Match whole word only',
    searchResults: 'Search Results',
    previousPage: 'Previous Page',
    nextPage: 'Next Page',
    pageCount: 'Page Count',
    continuousMode: 'Continuous Page View',
    singleMode: 'Single Page View',
    wholePage: 'Fit Whole Page',
    pageWidth: 'Fit Page Width',
    zoomOut: 'Zoom Out',
    zoomIn: 'Zoom In',
    exports: 'Export',
    thumbnails: 'Page Thumbnails',
    outlines: 'Document Map',
    loading: 'Loading...',
    //for ReportViewerBase
    parameters: 'Parameters',
    requiringParameters: 'Please input parameters.',
    nullParameterError: 'Value cannot be null.',
    invalidParameterError: 'Invalid input.',
    parameterNoneItemsSelected: '(none)',
    parameterAllItemsSelected: '(all)',
    parameterSelectAllItemText: '(Select All)',
    selectParameterValue: '(select value)',
    apply: 'Apply'
};
/**
* Defines a series of classes, interfaces and functions related to the viewer controls.
*/
var wijmo;
(function (wijmo) {
    var viewer;
    (function (viewer) {
        'use strict';
        var local = wijmo.culture.Viewer, icons = {
            print: '<rect x="5" y= "1" class="st0" width="14" height="4" />' +
                '<polygon class="st0" points= "22,8 22,7 19,7 19,6 5,6 5,7 2,7 2,8 1,8 1,11 1,20 2,20 2,21 5,21 5,11 19,11 19,21 22,21 22,20 23,20 23, 11 23, 8 "/>' +
                '<path class="st0" d="M6,12v11h12V12H6z M16,21H8v-1h8V21z M16,18H8v-1h8V18z M16,15H8v-1h8V15z" />',
            exports: '<path d="M19.6,23"/>' +
                '<polyline points="5,19 5,2 13,2 13,7 14.3,7 15,7 18,7 18,9 20,9 20,7 20,6.4 20,5 20,4 19,4 19,5 15,5 15,2 15,1 16,1 16,0 15,0 5,0 3,0 3,2 3,19 3,21 5,21 "/>' +
                '<rect x="18" y="3" width="1" height="1"/>' +
                '<rect x="17" y="2" width="1" height="1"/>' +
                '<rect x="16" y="1" width="1" height="1"/>' +
                '<polygon class="st0" points="17,16.6 20,14.1 17,11.6 17,13.6 13,13.6 13,14.6 17,14.6 "/>' +
                '<rect x="3" y="20.9" width="2" height="3.1"/>' +
                '<rect x="4.5" y="22" width="15.6" height="2"/>' +
                '<rect x="18" y="8.4" width="2" height="1.6"/>' +
                '<rect x="18" y="18" width="2.1" height="6"/>',
            portrait: '<path d="M19,0L19,0L5,0v0H3v24h0.1H5h14h1.7H21V0H19z M12.5,23h-1v-1h1V23z M19,21H5V2h14V21z"/>',
            landscape: '<path d="M24,19L24,19l0-14h0V3H0v0.1V5v14v1.7V21h24V19z M1,12.5v-1h1v1H1z M3,19V5h19v14H3z"/>',
            pageSetup: '<rect x="18" y="1" width="1" height="1"/>' +
                '<rect x="19" y="2" width="1" height="1"/>' +
                '<rect x="20" y="3" width="1" height="1"/>' +
                '<polygon points="22,5 22,4 21,4 21,5 20.4,5 20,5 17,5 17,2 17,1.3 17,1 18,1 18,0 17,0 17,0 7,0 6,0 5,0 5,5 7,5 7,2 15,2 15,7 16,7 17,7 20,7 20,22.1 7,22.1 7,19 5,19 5,24 5.9,24 7,24 20,24 21.1,24 22,24 22,5 "/>' +
                '<rect x="5" y="7" width="2" height="2"/>' +
                '<rect x="5" y="11" width="2" height="2"/>' +
                '<rect x="5" y="15" width="2" height="2"/>' +
                '<rect x="9" y="11" width="2" height="2"/>' +
                '<rect x="1" y="11" width="2" height="2"/>' +
                '<polygon points="9,8 9,8 8,8 8,9 9,9 9,10 10,10 10,8 "/>' +
                '<polygon points="2,9 2,9 2,10 3,10 3,9 4,9 4,8 2,8 "/>' +
                '<polygon points="3,16 3,16 4,16 4,15 3,15 3,14 2,14 2,16 "/>' +
                '<polygon points="10,15 10,15 10,14 9,14 9,15 8,15 8,16 10,16 "/>',
            previousPage: '<circle opacity=".25" cx="12" cy="12" r="12"/><polygon points="5.6,10.7 12,4.4 18.4,10.7 18.4,15 13.5,10.1 13.5,19.6 10.4,19.6 10.4,10.1 5.6,15 " />',
            nextPage: '<circle opacity=".25" cx="12" cy="12" r="12"/><polygon points="18.4,13.3 12,19.6 5.6,13.3 5.6,9 10.5,13.9 10.5,4.4 13.6,4.4 13.6,13.9 18.4,9 " />',
            continuousView: '<polygon points="22,0 22,5 9,5 9,0 7,0 7,5 7,7 7,7 24,7 24,7 24,5 24,0 "/>' +
                '<polygon points="23,15 19,15 19,11 20,11 20,10 19,10 18,10 17,10 9,10 7.4,10 7,10 7,24 9,24 9,12 17,12 17,15 17,16.6 17,17 22,17 22,24 24,24 24,17 24,15.1 24,15 24,15 24,14 23,14 "/>' +
                '<rect x="22" y="13" class="st0" width="1" height="1"/>' +
                '<polygon points="20.9,12 20.9,13 22,13 22,12 21,12 21,11 20,11 20,12 "/>' +
                '<polygon points="4.9,5.2 2.5,2.2 0,5.2 2,5.2 2,9.2 3,9.2 3,5.2 "/>' +
                '<polygon points="2.9,19.2 2.9,15.2 1.9,15.2 1.9,19.2 0,19.2 2.5,22.1 4.9,19.2 "/>',
            singleView: '<rect x="16" y="1" class="st0" width="1" height="1"/>' +
                '<rect x="17" y="2" width="1" height="1"/>' +
                '<rect x="18" y="3" width="1" height="1"/>' +
                '<path class="st0" d="M20,5V4h-1v1h-0.6H18h-3V2V1.3V1h1V0h-1h0H5H4H3v24h2v0h13h1.1H20L20,5L20,5z M5,22.1V2h8v5h1h1h3v15.1H5z"/>',
            fitWholePage: '<rect x="16" y="1" width="1" height="1"/>' +
                '<rect x="17" y="2" width="1" height="1"/>' +
                '<rect x="18" y="3" width="1" height="1"/>' +
                '<path d="M20,5V4h-1v1h-0.6H18h-3V2V1.3V1h1V0h-1h0H5H4H3v24h2v0h13h1.1H20L20,5L20,5z M18,22.1H5V2h8v5h1h1h3V22.1z"/>' +
                '<polygon points="17,13.5 15,11 15,13 13,13 13,14 15,14 15,16 "/>' +
                '<polygon points="6,13.5 8,16 8,14 10,14 10,13 8,13 8,11 "/>' +
                '<polygon points="11.5,7 9,9 11,9 11,11 12,11 12,9 14,9 "/>' +
                '<polygon points="11.5,20 14,18 12,18 12,16 11,16 11,18 9,18 "/>',
            fitPageWidth: '<rect x="16" y="1" width="1" height="1"/>' +
                '<rect x="17" y="2" width="1" height="1"/>' +
                '<rect x="18" y="3" width="1" height="1"/>' +
                '<path d="M20,5V4h-1v1h-0.6H18h-3V2V1.3V1h1V0h-1h0H5H4H3v24h2v0h13h1.1H20L20,5L20,5z M5,22.1V2h8v5h1h1h3v15.1H5z"/>' +
                '<polygon points="14,15.5 17,13 14,10.6 14,12.6 13,12.6 13,13.6 14,13.6 "/>' +
                '<polyline points="6,13.1 9,15.6 9,13.6 10,13.6 10,12.6 9,12.6 9,10.6 6,13.1 "/>',
            zoomOut: '<circle opacity=".25" cx="12" cy="12" r="12"/><rect opacity=".75" x="5" y="10" width="14" height="3"/>',
            zoomIn: '<circle opacity=".25" cx="12" cy="12" r="12"/><polygon opacity=".75" points="19,10 13.5,10 13.5,4.5 10.5,4.5 10.5,10 5,10 5,13 10.5,13 10.5,18.5 13.5,18.5 13.5,13 19,13 " />',
            thumbnails: '<path d="M20,2h-5h-2v2v5v2v0h2v0h5v0h2v0V9V4V2H20z M20,9h-5V4h5V9z"/>' +
                '<path d="M20,13h-5h-2v2v5v2v0h2v0h5v0h2v0v-2v-5v-2H20z M20,20h-5v-5h5V20z"/>' +
                '<path d="M9,13H4H2v2v5v2v0h2v0h5v0h2v0v-2v-5v-2H9z M9,20H4v-5h5V20z"/>' +
                '<rect x="2" y="2" width="9" height="9"/>',
            outlines: '<path d="M22,0H2H0v2v20v2h2h20h2v-2V2V0H22z M2,2h12v20H2V2z M22,22h-6V2h6V22z"/>' +
                '<rect x="17.5" y="5" width="3" height="1" />' +
                '<rect x="17.5" y="8" width="3" height="1"/>' +
                '<rect x="17.5" y="11" width="3" height="1"/>',
            search: '<mask id="wj-viewer-search-mask"><rect width="100%" height="100%" opacity="1" fill="white"/><circle cx="9.5" cy="9.5" r="6.5"/></mask>' +
                '<circle cx="9.5" cy="9.5" r="8.5" mask="url(#wj-viewer-search-mask)"/>' +
                '<rect x="16.9" y="13.7" transform="matrix(-0.7193 0.6947 -0.6947 -0.7193 44.3315 18.4942)" width="3" height="9"/>',
            searchNext: '<polygon points="12,12.6 4,4.5 4,11.4 12,19.5 20,11.4 20,4.5 "/>',
            searchPrevious: '<polygon points="12,11.4 20,19.5 20,12.6 12,4.5 4,12.6 4,19.5 "/>'
        }, _svgStart = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox = "0 0 24 24" xml: space = "preserve" >', _svgEnd = '</svg>';
        /** Defines the view modes. */
        (function (ViewMode) {
            /** The single view mode. */
            ViewMode[ViewMode["Single"] = 0] = "Single";
            /** The continuouse view mode. */
            ViewMode[ViewMode["Continuous"] = 1] = "Continuous";
        })(viewer.ViewMode || (viewer.ViewMode = {}));
        var ViewMode = viewer.ViewMode;
        /**
         * Defines an abstract class for the viewer controls.
         */
        var ViewerBase = (function (_super) {
            __extends(ViewerBase, _super);
            /**
             * Initializes a new instance of a @see:ViewerBase control.
             *
             * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
             * @param options JavaScript object containing initialization data for the control.
             */
            function ViewerBase(element, options) {
                _super.call(this, element, options, true);
                this._initialTop = 0;
                this._initialLeft = 0;
                this._isScrolling = true;
                this._pageNumberChangedByScrolling = false;
                this._preFetchPageCount = 3;
                this._pages = [];
                this._pageNumber = 1;
                this._zoomFactor = 1;
                this._viewMode = ViewMode.Single;
                this._needBind = false;
                /** Occurs after the document source changes. */
                this._documentSourceChanged = new wijmo.Event();
                /**
                 * Occurs after the page number is changed.
                 */
                this.pageNumberChanged = new wijmo.Event();
                /**
                 * Occurs after the view mode is changed.
                 */
                this.viewModeChanged = new wijmo.Event();
                /**
                 * Occurs after the zoom factor is changed.
                 */
                this.zoomFactorChanged = new wijmo.Event();
                this._documentEventKey = new Date().getTime().toString();
                this._init(options);
            }
            Object.defineProperty(ViewerBase.prototype, "serviceUrl", {
                /**
                 * Gets or sets the service url.
                 */
                get: function () {
                    return this._serviceUrl;
                },
                set: function (value) {
                    if (value != this._serviceUrl) {
                        this._serviceUrl = value;
                        this._needBindDocumentSource();
                        this.invalidate();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ViewerBase.prototype, "filePath", {
                /**
                 * Gets or sets the document path.
                 */
                get: function () {
                    return this._filePath;
                },
                set: function (value) {
                    if (value != this._filePath) {
                        this._filePath = value;
                        this._needBindDocumentSource();
                        this.invalidate();
                    }
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Refreshes the control.
             *
             * @param fullUpdate Whether to update the control layout as well as the content.
             */
            ViewerBase.prototype.refresh = function (fullUpdate) {
                if (fullUpdate === void 0) { fullUpdate = true; }
                _super.prototype.refresh.call(this, fullUpdate);
                if (this._needBind) {
                    this._setDocumentSource(this._getSource());
                }
            };
            // Create a _DocumentSource object and return it.
            ViewerBase.prototype._getSource = function () {
                return new viewer._DocumentSource({
                    serviceUrl: this._serviceUrl,
                    filePath: this._filePath
                });
            };
            ViewerBase.prototype._needBindDocumentSource = function () {
                this._needBind = true;
            };
            ViewerBase.prototype._init = function (options) {
                var _this = this;
                this._createChildren();
                this._resetViewContainerWidth();
                this._bindEvents();
                this.deferUpdate(function () {
                    _this.initialize(options);
                });
            };
            ViewerBase.prototype._bindEvents = function () {
                var _this = this;
                var viewerScrollingTimer;
                _addEvent(this._viewContainer, 'click', function (e) {
                    _this._viewContainer.focus();
                });
                _addEvent(window, 'unload', function () {
                    if (_this._documentSource) {
                        _this._documentSource.dispose();
                    }
                });
                _addEvent(window, 'resize', function () { return _this._resetViewContainerWidth(); });
                _addEvent(this._viewContainer, 'scroll', function () {
                    if (viewerScrollingTimer !== null) {
                        clearTimeout(viewerScrollingTimer);
                    }
                    viewerScrollingTimer = setTimeout(function () {
                        _this._isScrolling = true;
                        _this._onViewScrolling();
                    }, 200);
                });
            };
            ViewerBase.prototype._goToBookmark = function (name) {
                var _this = this;
                if (!this._documentSource) {
                    return;
                }
                this._documentSource.getBookmark(name).then(function (bookmark) {
                    if (bookmark) {
                        _this._scrollToPosition(bookmark);
                    }
                });
            };
            ViewerBase.prototype._onViewScrolling = function () {
                var self = this, scrollTop, pageMargin, pageHeight, currentPageIndex;
                //only do the changes if it is continuous mode and invoked by scrolling the scrollbar.
                if (self.viewMode === ViewMode.Single || self._documentSource.pageCount <= self._preFetchPageCount || !self._isScrolling) {
                    self._isScrolling = true;
                    return;
                }
                scrollTop = self._viewContainer.scrollTop;
                pageMargin = 30;
                pageHeight = self._documentSource.pageSettings.height.valueInPixel * self._zoomFactor;
                currentPageIndex = Math.round(scrollTop / (pageHeight + pageMargin));
                if (self._pageNumber !== currentPageIndex + 1) {
                    self._pageNumberChangedByScrolling = true;
                    self.moveToPage(currentPageIndex + 1);
                }
            };
            ViewerBase.prototype._createChildren = function () {
                // instantiate and apply template
                var tpl = this.getTemplate();
                this.applyTemplate('wj-viewer wj-control', tpl, {
                    _viewContainer: 'view-container',
                    _viewWrapper: 'view-wrapper',
                    _toolbar: 'toolbar',
                    _leftPanel: 'report-left-panel',
                    _sidePanel: 'side-panel',
                    _reportContainer: 'report-container',
                    _splitter: 'splitter'
                });
                this._initToolbar();
                this._initSidePanel();
                this._initSplitter();
            };
            ViewerBase.prototype._initSplitter = function () {
                var _this = this;
                _addEvent(this._splitter, 'click', function () { return _this._toggleSplitter(); });
            };
            ViewerBase.prototype._toggleSplitter = function (collapsed) {
                var leftCss = 'wj-glyph-left', rightCss = 'wj-glyph-right', arrow = this._splitter.querySelector('span'), tabs = wijmo.Control.getControl(this._sidePanel);
                if (collapsed === true) {
                    if (wijmo.hasClass(arrow, rightCss)) {
                        return;
                    }
                }
                else if (collapsed === false) {
                    if (wijmo.hasClass(arrow, leftCss)) {
                        return;
                    }
                }
                else {
                    collapsed = wijmo.hasClass(arrow, leftCss);
                }
                if (!collapsed) {
                    arrow.className = leftCss;
                    tabs.expand();
                }
                else {
                    tabs.collapse();
                    arrow.className = rightCss;
                }
                this._resetViewContainerWidth();
            };
            ViewerBase.prototype._resetViewContainerWidth = function () {
                var self = this;
                self._viewContainer.style.width = self._reportContainer.getBoundingClientRect().width -
                    self._splitter.getBoundingClientRect().width - self._leftPanel.getBoundingClientRect().width + 'px';
            };
            ViewerBase.prototype._initSidePanel = function () {
                var _this = this;
                var sideTabs = new _SideTabs(this._sidePanel);
                sideTabs.collapse();
                sideTabs.collapsed.addHandler(function () {
                    _this._toggleSplitter(true);
                });
                sideTabs.expanded.addHandler(function () {
                    _this._toggleSplitter(false);
                });
                this._initSidePanelThumbnails();
                this._initSidePanelOutlines();
                this._initSidePanelSearch();
            };
            ViewerBase.prototype._highlightPosition = function (pageIndex, boundsList) {
                var _this = this;
                this.moveToPage(pageIndex + 1).then(function (_) {
                    var self = _this, g, viewPage, preHighlights, viewPages;
                    switch (self.viewMode) {
                        case (ViewMode.Continuous):
                            viewPages = self._viewWrapper.querySelectorAll('.wj-view-page');
                            viewPage = viewPages.item(pageIndex);
                            break;
                        case (ViewMode.Single):
                            viewPage = self._viewWrapper.querySelector('.wj-view-page');
                            break;
                    }
                    g = viewPage.querySelector('g');
                    preHighlights = self._viewWrapper.querySelectorAll('.highlight');
                    for (var i = 0; i < preHighlights.length; i++) {
                        preHighlights.item(i).parentNode.removeChild(preHighlights.item(i));
                    }
                    for (var i = 0; i < boundsList.length; i++) {
                        var rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                        rect.setAttributeNS(null, 'x', viewer._twipToPixel(boundsList[i].x).toString());
                        rect.setAttributeNS(null, 'y', viewer._twipToPixel(boundsList[i].y).toString());
                        rect.setAttributeNS(null, 'height', viewer._twipToPixel(boundsList[i].height).toString());
                        rect.setAttributeNS(null, 'width', viewer._twipToPixel(boundsList[i].width).toString());
                        rect.setAttributeNS(null, 'class', 'highlight');
                        g.appendChild(rect);
                    }
                    if (boundsList.length > 0) {
                        self._scrollToPosition({ pageBounds: boundsList[0], pageIndex: pageIndex });
                    }
                });
            };
            ViewerBase.prototype._scrollToPosition = function (position) {
                var pageIndex = position.pageIndex || 0, bound = position.pageBounds, zoomFactor = this.zoomFactor, heightOffset, widthOffset;
                heightOffset = viewer._twipToPixel(bound.y) * zoomFactor + 30;
                widthOffset = viewer._twipToPixel(bound.x) * zoomFactor + 30;
                this._initialTop = heightOffset;
                this._initialLeft = widthOffset;
                if (this._pageNumber !== pageIndex + 1) {
                    this.moveToPage(pageIndex + 1);
                }
                else {
                    if (this.viewMode === ViewMode.Continuous) {
                        this._scrollToCurrentPage();
                    }
                    else {
                        this._scrollToInitialPosition();
                    }
                }
            };
            ViewerBase.prototype._initSidePanelSearch = function () {
                var _this = this;
                var sideTabs = wijmo.Control.getControl(this._sidePanel);
                sideTabs.addPage(local.search, icons.search).format(function (t) {
                    var settingsHtml = '<div class="wj-searchcontainer">' +
                        '<input class="wj-searchbox" wj-part="search-box" type="text"/>' +
                        '<div class="wj-btn-group">' +
                        '<button class="wj-btn wj-btn-searchpre">' + _createSvgBtn(icons.searchPrevious).innerHTML + '</button>' +
                        '<button class="wj-btn wj-btn-searchnext">' + _createSvgBtn(icons.searchNext).innerHTML + '</button>' +
                        '</div>' +
                        '</div>' +
                        '<div class="wj-searchoption">' +
                        '<label >&nbsp;&nbsp;&nbsp;' + local.matchCase + '<input type="checkbox" wj-part="match-case"/></label>' +
                        '</div>' +
                        '<div class="wj-searchoption">' +
                        '<label>&nbsp;&nbsp;&nbsp;' + local.wholeWord + '<input type="checkbox" wj-part="whole-word"/></label>' +
                        '</div>' +
                        '<h3 class="wj-searchresult">' + local.searchResults + '</h3>', settingsElement = _toDOMs(settingsHtml), searchResults;
                    t.outContent.querySelector('.wj-tabtitle-wrapper').appendChild(settingsElement);
                    var matchCaseCheckBox = t.outContent.querySelectorAll('input[type="checkbox"]')[0], wholeWordCheckBox = t.outContent.querySelectorAll('input[type="checkbox"]')[1], input = t.outContent.querySelector('input[type="text"]'), preBtn = t.outContent.querySelector('.wj-btn-searchpre'), nextBtn = t.outContent.querySelector('.wj-btn-searchnext');
                    wijmo.addClass(t.content.parentElement, 'search-wrapper');
                    wijmo.addClass(t.content, 'wj-searchresultlist');
                    var list = new wijmo.input.ListBox(t.content), isSettingItemsSource = false, highlighting = false;
                    list.formatItem.addHandler(function (sender, e) {
                        var searchItem = e.item, data = e.data, searchPageNumberDiv = document.createElement('div'), searchTextDiv = document.createElement('div');
                        searchItem.innerHTML = '';
                        searchTextDiv.innerHTML = data.nearText;
                        searchTextDiv.className = 'wj-search-text';
                        searchPageNumberDiv.innerHTML = 'Page ' + (data.pageIndex + 1);
                        searchPageNumberDiv.className = 'wj-search-page';
                        wijmo.addClass(searchItem, 'wj-search-item');
                        searchItem.setAttribute('tabIndex', '-1');
                        searchItem.appendChild(searchTextDiv);
                        searchItem.appendChild(searchPageNumberDiv);
                    });
                    var highlightIndex = -1, highlight = function (index) {
                        if (isSettingItemsSource || highlighting) {
                            return;
                        }
                        var currentResults = (searchResults || list.itemsSource);
                        if (index === -1 || !currentResults || !currentResults.length) {
                            highlightIndex = -1;
                            list.selectedIndex = -1;
                            return;
                        }
                        highlightIndex = index;
                        var result = currentResults[highlightIndex];
                        if (!result) {
                            return;
                        }
                        highlighting = true;
                        list.selectedIndex = index;
                        _this._highlightPosition(result.pageIndex, result.boundsList);
                        highlighting = false;
                    };
                    list.selectedIndexChanged.addHandler(function () { return highlight(list.selectedIndex); });
                    var clearResult = function () {
                        searchResults = null;
                    }, callSearch = function () {
                        var p = new viewer._Promise();
                        if (searchResults) {
                            p.resolve(searchResults);
                            return p;
                        }
                        if (!_this._documentSource) {
                            p.reject('Cannot search without document source.');
                            return p;
                        }
                        if (!input.value) {
                            return p;
                        }
                        highlightIndex = -1;
                        return _this._documentSource.search(input.value, matchCaseCheckBox.checked, wholeWordCheckBox.checked).then(function (v) {
                            searchResults = v;
                            isSettingItemsSource = true;
                            list.itemsSource = v;
                            isSettingItemsSource = false;
                        });
                    }, search = function (pre) {
                        callSearch().then(function (v) {
                            if (!v || !v.length) {
                                return;
                            }
                            var index = highlightIndex;
                            if (pre) {
                                index--;
                                if (index < 0) {
                                    index = v.length - 1;
                                }
                            }
                            else {
                                index++;
                                if (index >= v.length) {
                                    index = 0;
                                }
                            }
                            index = Math.max(Math.min(index, v.length - 1), 0);
                            highlight(index);
                        });
                    }, reset = function () {
                        clearResult();
                        list.itemsSource = null;
                        matchCaseCheckBox.checked = false;
                        wholeWordCheckBox.checked = false;
                        input.value = '';
                    };
                    _this._documentSourceChanged.addHandler(function () {
                        if (_this._documentSource) {
                            _addWjHandler(_this._documentEventKey, _this._documentSource.loadCompleted, reset);
                        }
                        reset();
                    });
                    _addEvent(matchCaseCheckBox, 'click', clearResult);
                    _addEvent(wholeWordCheckBox, 'click', clearResult);
                    _addEvent(input, 'input', clearResult);
                    _addEvent(input, 'keyup', function (e) {
                        var event = e || window.event;
                        if (event.keyCode === wijmo.Key.Enter) {
                            search(event.shiftKey);
                        }
                    });
                    _addEvent(nextBtn, 'click', function () { return search(); });
                    _addEvent(preBtn, 'click', function () { return search(true); });
                    _addEvent(t.header, 'keydown', function (e) {
                        var next, toolbar = _this._toolbar;
                        if (e.keyCode === wijmo.Key.Tab) {
                            next = toolbar.querySelector('[tabIndex=0]')
                                || toolbar.querySelector('input:not([type="hidden"])')
                                || toolbar;
                            if (next && next['focus']) {
                                next.focus();
                                e.preventDefault();
                            }
                        }
                    });
                });
            };
            ViewerBase.prototype._initSidePanelOutlines = function () {
                var _this = this;
                var sideTabs = wijmo.Control.getControl(this._sidePanel);
                sideTabs.addPage(local.outlines, icons.outlines).format(function (t) {
                    wijmo.addClass(t.content, 'wj-outlines-tree');
                    var tree = new wijmo.grid.FlexGrid(t.content);
                    tree.initialize({
                        autoGenerateColumns: false,
                        columns: [
                            { binding: 'caption', width: '*' }
                        ],
                        isReadOnly: true,
                        childItemsPath: 'children',
                        allowResizing: wijmo.grid.AllowResizing.None,
                        headersVisibility: wijmo.grid.HeadersVisibility.None
                    });
                    tree.itemFormatter = function (panel, r, c, cell) {
                        var itemHeader;
                        if (cell.firstElementChild) {
                            itemHeader = cell.firstElementChild.outerHTML;
                        }
                        else {
                            itemHeader = '&nbsp;&nbsp;&nbsp;&nbsp;';
                        }
                        var position = panel.rows[r].dataItem['position'];
                        cell.innerHTML = itemHeader + '<a>' + panel.rows[r].dataItem['caption'] + '</a>';
                    };
                    var updatingOutlineSource = false;
                    tree.selectionChanged.addHandler(function (flexGrid, e) {
                        if (updatingOutlineSource) {
                            return;
                        }
                        var row = e.panel.rows[e.row];
                        if (row) {
                            _this._scrollToPosition(row.dataItem['position']);
                        }
                    });
                    var isTreeRefreshed = false, refreshTree = function () {
                        if (isTreeRefreshed)
                            return;
                        if (sideTabs.isCollapsed || !t.isActived || t.isHidden) {
                            return;
                        }
                        tree.refresh();
                        isTreeRefreshed = true;
                    }, toggleTab = function () {
                        if (!_this._documentSource) {
                            tree.itemsSource = null;
                            sideTabs.hide(t);
                            return;
                        }
                        var update = function () {
                            if (!_this._documentSource.hasOutlines) {
                                tree.itemsSource = null;
                                sideTabs.hide(t);
                                return;
                            }
                            _this._documentSource.getOutlines().then(function (items) {
                                isTreeRefreshed = false;
                                tree.itemsSource = items;
                                sideTabs.show(t);
                                refreshTree();
                            });
                        };
                        _addWjHandler(_this._documentEventKey, _this._documentSource.loadCompleted, update);
                        update();
                    };
                    _this._documentSourceChanged.addHandler(toggleTab);
                    sideTabs.expanded.addHandler(refreshTree);
                    sideTabs.tabPageActived.addHandler(refreshTree);
                    toggleTab();
                });
            };
            ViewerBase.prototype._initSidePanelThumbnails = function () {
                var _this = this;
                var sideTabs = wijmo.Control.getControl(this._sidePanel);
                sideTabs.addPage(local.thumbnails, icons.thumbnails).format(function (t) {
                    wijmo.addClass(t.content, 'wj-thumbnaillist');
                    var list = new wijmo.input.ListBox(t.content), pngUrls = null, isItemsSourceSetting = false;
                    list.formatItem.addHandler(function (sender, e) {
                        var item = e.item, data = e.data, img = document.createElement('img'), indexDiv = document.createElement('div');
                        item.innerHTML = '';
                        wijmo.addClass(item, 'wj-thumbnail-item');
                        img.setAttribute('tabIndex', '-1');
                        img.className = 'wj-pagethumbnail';
                        img.src = data;
                        item.appendChild(img);
                        indexDiv.className = 'page-index';
                        indexDiv.innerHTML = (e.index + 1).toString();
                        item.appendChild(indexDiv);
                    });
                    list.selectedIndexChanged.addHandler(function () {
                        if (isItemsSourceSetting || list.selectedIndex < 0) {
                            return;
                        }
                        _this.moveToPage(list.selectedIndex + 1);
                    });
                    _this.pageNumberChanged.addHandler(function () { return list.selectedIndex = _this._pageNumber - 1; });
                    var createThumbnails = function () {
                        if (!_this._documentSource || !_this._documentSource.isLoadCompleted) {
                            return null;
                        }
                        var urls = [];
                        for (var i = 0; i < _this._documentSource.pageCount; i++) {
                            urls.push(_this._documentSource.getRenderToFilterUrl({ format: 'png', resolution: 50, outputRange: i + 1 }));
                        }
                        return urls;
                    }, updateItems = function () {
                        if (sideTabs.isCollapsed || !t.isActived) {
                            return;
                        }
                        if (!pngUrls) {
                            pngUrls = createThumbnails();
                        }
                        if (t.isActived && list.itemsSource !== pngUrls) {
                            list.deferUpdate(function () {
                                isItemsSourceSetting = true;
                                list.itemsSource = pngUrls;
                                list.selectedIndex = _this._pageNumber - 1;
                                isItemsSourceSetting = false;
                            });
                        }
                    }, resetItems = function () {
                        pngUrls = null;
                        updateItems();
                    }, bindEvents = function () {
                        if (!_this._documentSource) {
                            list.itemsSource = null;
                            return;
                        }
                        _addWjHandler(_this._documentEventKey, _this._documentSource.loadCompleted, resetItems);
                        _addWjHandler(_this._documentEventKey, _this._documentSource.pageCountChanged, resetItems);
                        _addWjHandler(_this._documentEventKey, _this._documentSource.pageSettingsChanged, resetItems);
                        updateItems();
                    };
                    _this._documentSourceChanged.addHandler(bindEvents);
                    bindEvents();
                    sideTabs.expanded.addHandler(updateItems);
                    sideTabs.tabPageActived.addHandler(updateItems);
                    updateItems();
                });
            };
            ViewerBase.prototype._scrollToCurrentPage = function () {
                var self = this, pageMargin, pageHeight;
                if (self.viewMode === ViewMode.Single) {
                    return;
                }
                if (self._pageNumberChangedByScrolling) {
                    self._pageNumberChangedByScrolling = false;
                    return;
                }
                pageMargin = 30;
                if (self._documentSource.pageSettings) {
                    pageHeight = self._documentSource.pageSettings.height.valueInPixel * self._zoomFactor;
                }
                self._isScrolling = false;
                self._viewContainer.scrollTop = (self._pageNumber - 1) * (pageHeight + pageMargin);
                self._scrollToInitialPosition();
            };
            ViewerBase.prototype._scrollToInitialPosition = function () {
                switch (this.viewMode) {
                    case ViewMode.Continuous:
                        this._viewContainer.scrollTop += this._initialTop;
                        this._viewContainer.scrollLeft = this._initialLeft;
                        this._initialTop = 0;
                        this._initialLeft = 0;
                        break;
                    case ViewMode.Single:
                        this._viewContainer.scrollTop = this._initialTop;
                        this._viewContainer.scrollLeft = this._initialLeft;
                        this._initialTop = 0;
                        this._initialLeft = 0;
                        break;
                }
            };
            ViewerBase.prototype._initToolbar = function () {
                var self = this, toolbar = new _Toolbar(self._toolbar);
                toolbar.addSvgButton(local.print, icons.print, function () {
                    if (self._documentSource) {
                        self._documentSource.print();
                    }
                });
                self._initToolbarExport();
                toolbar.addSeparator();
                self._initToolbarPageSettings();
                toolbar.addSeparator();
                self._initToolbarPageNavigation();
                self._initToolbarViewMode();
                toolbar.addSeparator();
                self._initToolbarZoom();
            };
            ViewerBase.prototype._initToolbarZoom = function () {
                var _this = this;
                var self = this, toolbar = wijmo.Control.getControl(self._toolbar), zoomOutBtn, zoomInBtn, zoomDiv = document.createElement('div'), zoomValueCombo, temp, i, j, zoomValues = ViewerBase._defaultZoomValues, minValue, maxValue, updateZoomElements = function () {
                    minValue = zoomValues[0].value,
                        maxValue = zoomValues[zoomValues.length - 1].value;
                    _disableImageButton(zoomOutBtn, self.zoomFactor <= minValue);
                    _disableImageButton(zoomInBtn, self.zoomFactor >= maxValue);
                    zoomValueCombo.isDroppedDown = false;
                    zoomValueCombo.text = wijmo.Globalize.format(_this.zoomFactor, 'p0');
                };
                toolbar.addSvgButton(local.wholePage, icons.fitWholePage, function () { return self.zoomToView(); });
                toolbar.addSvgButton(local.pageWidth, icons.fitPageWidth, function () { return self.zoomToViewWidth(); });
                zoomOutBtn = toolbar.addSvgButton(local.zoomOut, icons.zoomOut, function () { return self._zoomBtnClicked(false, zoomValues); });
                zoomInBtn = toolbar.addSvgButton(local.zoomOut, icons.zoomIn, function () { return self._zoomBtnClicked(true, zoomValues); });
                zoomDiv.className = 'wj-input-zoom';
                toolbar.addCustomItem(zoomDiv);
                zoomValueCombo = new wijmo.input.ComboBox(zoomDiv);
                zoomValueCombo.deferUpdate(function () {
                    for (i = 0; i < zoomValues.length; i++) {
                        for (j = i + 1; j < zoomValues.length; j++) {
                            if (zoomValues[i].value > zoomValues[j].value) {
                                temp = zoomValues[i];
                                zoomValues[i] = zoomValues[j];
                                zoomValues[j] = temp;
                            }
                        }
                    }
                    zoomValueCombo.itemsSource = zoomValues;
                    zoomValueCombo.isEditable = true;
                    zoomValueCombo.displayMemberPath = 'name';
                    zoomValueCombo.selectedValuePath = 'value';
                    zoomValueCombo.selectedValue = 1;
                });
                updateZoomElements();
                zoomValueCombo.selectedIndexChanged.addHandler(function () {
                    if (zoomValueCombo.isDroppedDown) {
                        var zoomFactor = zoomValueCombo.selectedValue;
                        if (zoomFactor == null) {
                            var zoomFactorText = zoomValueCombo.text.replace(",", "");
                            zoomFactor = parseFloat(zoomFactorText);
                            if (isNaN(zoomFactor)) {
                                zoomFactor = 100;
                            }
                            zoomFactor = zoomFactor * 0.01;
                        }
                        self.zoomFactor = zoomFactor;
                    }
                });
                self.zoomFactorChanged.addHandler(updateZoomElements);
                _addEvent(zoomDiv, 'keypress', function (e) {
                    var event = e || window.event, zoomText = zoomValueCombo.text, zoomFactor;
                    if (event.keyCode === wijmo.Key.Enter) {
                        if (zoomText.lastIndexOf('%') === zoomText.length - 1) {
                            zoomText = zoomText.substring(0, zoomValueCombo.text.length - 1);
                        }
                        zoomText = zoomText.replace(",", "");
                        zoomFactor = parseFloat(zoomText);
                        if (!isNaN(zoomFactor)) {
                            self.zoomFactor = zoomFactor * 0.01;
                        }
                        else {
                            zoomValueCombo.text = wijmo.Globalize.format(self.zoomFactor, 'p0');
                        }
                    }
                });
                _addEvent(zoomDiv.querySelector('.wj-form-control'), 'blur', function (e) {
                    zoomValueCombo.text = wijmo.Globalize.format(self.zoomFactor, 'p0');
                });
            };
            ViewerBase.prototype._initToolbarPageSettings = function () {
                var _this = this;
                var self = this, landscape, toolbar = wijmo.Control.getControl(self._toolbar), btnPortrait = toolbar.addSvgButton(local.portrait, icons.portrait, function () { return self._setPageLandscape(false); }), btnLandscape = toolbar.addSvgButton(local.landscape, icons.landscape, function () { return self._setPageLandscape(true); }), updatePageSettingBtns = function () {
                    if (self._documentSource && self._documentSource.pageSettings) {
                        landscape = self._documentSource.pageSettings.landscape;
                        _checkImageButton(btnLandscape, landscape);
                        _checkImageButton(btnPortrait, !landscape);
                    }
                }, sourceChanged = function () {
                    if (!self._documentSource) {
                        _disableImageButton(btnLandscape, true);
                        _disableImageButton(btnPortrait, true);
                        return;
                    }
                    _disableImageButton(btnLandscape, false);
                    _disableImageButton(btnPortrait, false);
                    updatePageSettingBtns();
                    _addWjHandler(_this._documentEventKey, _this._documentSource.pageSettingsChanged, updatePageSettingBtns);
                };
                toolbar.addSvgButton(local.pageSetup, icons.pageSetup, function () { return self.showPageSetupDialog(); });
                if (self._documentSource) {
                    sourceChanged();
                }
                self._documentSourceChanged.addHandler(sourceChanged);
            };
            ViewerBase.prototype._initToolbarViewMode = function () {
                var self = this, toolbar = wijmo.Control.getControl(self._toolbar), continuousBtn = toolbar.addSvgButton(local.continuousMode, icons.continuousView, function () { return self.viewMode = ViewMode.Continuous; }), singleBtn = toolbar.addSvgButton(local.singleMode, icons.singleView, function () { return self.viewMode = ViewMode.Single; }), update = function () {
                    _checkImageButton(continuousBtn, self.viewMode == ViewMode.Continuous);
                    _checkImageButton(singleBtn, self.viewMode == ViewMode.Single);
                };
                update();
                self.viewModeChanged.addHandler(update);
            };
            ViewerBase.prototype._initToolbarPageNavigation = function () {
                var _this = this;
                var self = this, toolbar = wijmo.Control.getControl(self._toolbar), btnPrePage = toolbar.addSvgButton(local.previousPage, icons.previousPage, function () { return self.moveToPage(self._pageNumber - 1); }), btnNextPage = toolbar.addSvgButton(local.nextPage, icons.nextPage, function () { return self.moveToPage(self._pageNumber + 1); }), pageNumberDiv = document.createElement('div'), pageCountSpan = document.createElement('span'), pageNumberInput, docSource, updatePageNav = function () {
                    docSource = self._documentSource;
                    if (!docSource || docSource.pageCount == null) {
                        _disableImageButton(btnNextPage, true);
                        _disableImageButton(btnPrePage, true);
                        return;
                    }
                    _disableImageButton(btnPrePage, self._pageNumber <= 1);
                    _disableImageButton(btnNextPage, self._pageNumber >= docSource.pageCount);
                    pageNumberInput.value = self._pageNumber;
                }, updatePageCount = function () {
                    docSource = self._documentSource;
                    if (!docSource || docSource.pageCount == null) {
                        return;
                    }
                    pageCountSpan.innerHTML = docSource.pageCount.toString();
                    pageNumberInput.max = docSource.pageCount;
                    pageNumberInput.min = Math.min(docSource.pageCount, 1);
                    updatePageNav();
                }, sourceChanged = function () {
                    docSource = self._documentSource;
                    if (!docSource) {
                        return;
                    }
                    updatePageCount();
                    _addWjHandler(_this._documentEventKey, _this._documentSource.pageCountChanged, updatePageCount);
                };
                pageNumberDiv.className = 'wj-pagenumber';
                toolbar.addCustomItem(pageNumberDiv);
                pageNumberInput = new wijmo.input.InputNumber(pageNumberDiv);
                pageNumberInput.format = 'n';
                _addEvent(pageNumberDiv, 'keyup', function (e) {
                    var event = e || window.event;
                    if (event.keyCode === wijmo.Key.Enter) {
                        self.moveToPage(pageNumberInput.value);
                    }
                });
                toolbar.addCustomItem('<span class="slash">/</span>');
                pageCountSpan.className = 'wj-pagecount';
                toolbar.addCustomItem(pageCountSpan);
                self.pageNumberChanged.addHandler(updatePageNav);
                if (self._documentSource) {
                    sourceChanged();
                }
                self._documentSourceChanged.addHandler(sourceChanged);
            };
            ViewerBase.prototype._onExportClicked = function (menu) {
                var self = this, item = menu.selectedItem, iframe;
                if (self._documentSource && self._documentSource.pageCount >= 0) {
                    var url = self._documentSource.getRenderToFilterUrl({ format: item.format }), iframe = document.querySelector('#viewDownloader');
                    if (!iframe) {
                        iframe = document.createElement('iframe');
                        iframe.id = 'viewDownloader';
                        iframe.style.display = 'none';
                        document.body.appendChild(iframe);
                    }
                    iframe.src = url;
                }
            };
            ViewerBase.prototype._initToolbarExport = function () {
                var _this = this;
                var self = this, toolbar = wijmo.Control.getControl(self._toolbar), exportDiv = document.createElement('div'), exportMenu, btn, sourceChanged = function () {
                    if (self._documentSource) {
                        exportMenu.itemsSource = self._documentSource.supportedExportProviders;
                        exportMenu.displayMemberPath = 'name';
                        exportMenu.selectedValuePath = 'format';
                    }
                };
                exportDiv.style.display = 'none';
                exportMenu = new wijmo.input.Menu(exportDiv);
                exportMenu.showDropDownButton = false;
                exportMenu.itemClicked.addHandler(self._onExportClicked, self);
                btn = toolbar.addSvgButton(local.exports, icons.exports, function (e) {
                    exportMenu.selectedIndex = -1;
                    wijmo.showPopup(exportMenu.dropDown, btn);
                    exportMenu.dropDown.style.color = _this.hostElement.style.color;
                    exportMenu.dropDown.focus();
                });
                exportMenu.owner = btn;
                sourceChanged();
                self._documentSourceChanged.addHandler(sourceChanged);
            };
            /**
             * Shows the page setup dialog.
             */
            ViewerBase.prototype.showPageSetupDialog = function () {
                if (!this._pageSetupDialog) {
                    this._createPageSetupDialog();
                }
                this._pageSetupDialog.showWithValue(this._documentSource.pageSettings);
            };
            ViewerBase.prototype._createPageSetupDialog = function () {
                var self = this, ele = document.createElement("div");
                ele.style.display = 'none';
                self.hostElement.appendChild(ele);
                self._pageSetupDialog = new _PageSetupDialog(ele);
                self._pageSetupDialog.applied.addHandler(function () { return self._setPageSettings(self._pageSetupDialog.pageSettings); });
            };
            /**
             * Stretches page to show the whole page in viewer.
             */
            ViewerBase.prototype.zoomToView = function () {
                var self = this, doc = self._documentSource, viewHeight, viewWidth, pageHeight, pageWidth;
                if (!doc || !doc.pageSettings) {
                    return;
                }
                viewHeight = self._getViewPortHeight();
                viewWidth = self._getViewPortWidth();
                pageHeight = doc.pageSettings.height.valueInPixel;
                pageWidth = doc.pageSettings.width.valueInPixel;
                self.zoomFactor = Math.min(viewHeight / pageHeight, viewWidth / pageWidth);
            };
            /**
             * Stretches page to fit the width of viewer.
             */
            ViewerBase.prototype.zoomToViewWidth = function () {
                var self = this, doc = self._documentSource, viewHeight, viewWidth, pageHeight, pageWidth;
                if (!doc || !doc.pageSettings) {
                    return;
                }
                viewHeight = self._getViewPortHeight();
                viewWidth = self._getViewPortWidth();
                pageHeight = doc.pageSettings.height.valueInPixel;
                pageWidth = doc.pageSettings.width.valueInPixel;
                if (viewWidth / pageWidth > viewHeight / (pageHeight * (self.viewMode === ViewMode.Continuous ? self._documentSource.pageCount : 1))) {
                    viewWidth -= self._getScrollbarWidth();
                }
                self.zoomFactor = viewWidth / pageWidth;
            };
            ViewerBase.prototype._getScrollbarWidth = function () {
                var self = this, parent, child;
                if (!self._scrollbarWidth) {
                    parent = document.createElement('div');
                    parent.style.width = '50px';
                    parent.style.height = '50px';
                    parent.style.overflow = 'auto';
                    document.body.appendChild(parent);
                    child = document.createElement('div');
                    child.style.height = '60px';
                    parent.appendChild(child);
                    self._scrollbarWidth = parent.offsetWidth - parent.clientWidth;
                    document.body.removeChild(parent);
                }
                return self._scrollbarWidth;
            };
            ViewerBase.prototype._getViewPortHeight = function () {
                var self = this, style = self._viewWrapper['currentStyle'] || window.getComputedStyle(self._viewWrapper);
                return self._viewContainer.offsetHeight - parseFloat(style.marginBottom) - parseFloat(style.marginTop);
                ;
            };
            ViewerBase.prototype._getViewPortWidth = function () {
                var self = this, style = self._viewWrapper['currentStyle'] || window.getComputedStyle(self._viewWrapper);
                return self._viewContainer.offsetWidth - parseFloat(style.marginLeft) - parseFloat(style.marginRight);
            };
            ViewerBase.prototype._setPageLandscape = function (landscape) {
                var self = this, pageSettings = this._documentSource.pageSettings;
                _setLandscape(pageSettings, landscape);
                self._setPageSettings(pageSettings);
            };
            ViewerBase.prototype._setPageSettings = function (pageSettings) {
                var _this = this;
                return this._documentSource.setPageSettings(pageSettings).then(function () {
                    _this._resetDocument();
                    var loadingDivList = _this._viewContainer.querySelectorAll('.wj-loading');
                    if (loadingDivList && loadingDivList.length > 0) {
                        for (var i = 0; i < loadingDivList.length; i++) {
                            loadingDivList.item(i).innerHTML = local.loading;
                        }
                    }
                    _this._reRenderDocument();
                });
            };
            ViewerBase.prototype._reRenderDocument = function () {
                if (this._documentSource) {
                    this._documentSource.load();
                }
            };
            ViewerBase.prototype._zoomBtnClicked = function (zoomIn, zoomValues) {
                var self = this, i, zoomIndex, isFixedValue;
                for (i = 0; i < zoomValues.length; i++) {
                    if (zoomValues[i].value > self._zoomFactor) {
                        zoomIndex = i - 0.5;
                        break;
                    }
                    else if (zoomValues[i].value === self._zoomFactor) {
                        zoomIndex = i;
                        break;
                    }
                }
                if (zoomIndex == null) {
                    zoomIndex = zoomValues.length - 0.5;
                }
                if (zoomIndex <= 0 && !zoomIn) {
                    return;
                }
                if (zoomIndex >= zoomValues.length - 1 && zoomIn) {
                    return;
                }
                if (zoomIn) {
                    zoomIndex = Math.floor(zoomIndex) + 1;
                }
                else {
                    zoomIndex = Math.ceil(zoomIndex) - 1;
                }
                self.zoomFactor = zoomValues[zoomIndex].value;
            };
            // Gets the document source of the viewer.
            ViewerBase.prototype._getDocumentSource = function () {
                return this._documentSource;
            };
            // Sets the document source of the viewer.
            ViewerBase.prototype._setDocumentSource = function (value) {
                this._loadDocument(value);
            };
            ViewerBase.prototype._loadDocument = function (value) {
                var _this = this;
                var promise = new viewer._Promise();
                if (this._documentSource === value) {
                    return promise;
                }
                this._disposeDocument();
                this._documentSource = value;
                if (value) {
                    _addWjHandler(this._documentEventKey, value.loadCompleted, this._onDocumentSourceLoadCompleted, this);
                    if (!value.isLoadCompleted) {
                        value.load().then(function (v) {
                            _this._keepServiceConnection();
                            promise.resolve(v);
                        });
                    }
                    else {
                        this._onDocumentSourceLoadCompleted();
                        this._keepServiceConnection();
                        promise.resolve();
                    }
                }
                this._onDocumentSourceChanged();
                return promise;
            };
            ViewerBase.prototype._onDocumentSourceLoadCompleted = function () {
                var errorList = this._documentSource.errors;
                if (this._documentSource.isLoadCompleted) {
                    this._pages.length = 0;
                    for (var i = 0; i < this._documentSource.pageCount; i++) {
                        this._pages.push(null);
                    }
                    if (this._documentSource.pageCount <= 0) {
                        return;
                    }
                    this._pageNumber = 1;
                    this._updateViewPage();
                    if (errorList && errorList.length > 0) {
                        var errors = "";
                        for (var i = 0; i < errorList.length; i++) {
                            errors += errorList[i] + "\r\n";
                        }
                    }
                }
            };
            ViewerBase.prototype._renderSinglePage = function (viewPage, pageNumber) {
                var _this = this;
                var pageNum = pageNumber || this._pageNumber, loadingDiv, pageIndex, promise = new viewer._Promise(), documentSource = this._documentSource;
                pageNum = pageNum <= 0 ? 1 : pageNum;
                pageIndex = pageNum - 1;
                if (!documentSource || !viewPage) {
                    promise.reject('Cannot render page without documentsource and view page.');
                    return promise;
                }
                _removeChildren(viewPage);
                if (documentSource.pageSettings) {
                    viewPage.style.height = documentSource.pageSettings.height.valueInPixel * this.zoomFactor + 'px';
                    viewPage.style.width = documentSource.pageSettings.width.valueInPixel * this.zoomFactor + 'px';
                }
                if (this._pages[pageIndex]) {
                    viewPage.appendChild(this._pages[pageIndex]);
                    this._changePageZoom(viewPage);
                    if (this.viewMode === ViewMode.Single) {
                        this._scrollToInitialPosition();
                    }
                    promise.resolve(pageIndex + 1);
                    return promise;
                }
                loadingDiv = document.createElement('div');
                loadingDiv.className = 'wj-loading';
                loadingDiv.style.height = viewPage.style.height;
                loadingDiv.style.lineHeight = viewPage.style.height;
                loadingDiv.innerHTML = local.loading;
                viewPage.appendChild(loadingDiv);
                documentSource.renderToFilter({ format: 'html', outputRange: pageNum.toString() }).then(function (data) {
                    if (_this._documentSource !== documentSource) {
                        return;
                    }
                    var tempDiv = document.createElement('div'), svg, g;
                    tempDiv.innerHTML = data.responseText;
                    svg = tempDiv.querySelector('svg');
                    g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    while (svg.hasChildNodes()) {
                        g.appendChild(svg.firstChild);
                    }
                    svg.appendChild(g);
                    _this._pages[pageIndex] = svg;
                    _removeChildren(viewPage);
                    viewPage.appendChild(_this._pages[pageIndex]);
                    _this._changePageZoom(viewPage);
                    _this._replaceBookmarkLink(svg);
                    if (_this.viewMode === ViewMode.Single) {
                        _this._scrollToInitialPosition();
                    }
                    promise.resolve(pageIndex + 1);
                });
                return promise;
            };
            ViewerBase.prototype._replaceBookmarkLink = function (svg) {
                var aList = svg.querySelectorAll('a'), self = this;
                for (var i = 0; i < aList.length; i++) {
                    var a = aList.item(i);
                    var url = a.href ? a.href.baseVal : '';
                    if (url.indexOf('navigate') > 0) {
                        var result = ViewerBase._bookmarkReg.exec(url);
                        if (result && result[1]) {
                            a.href.baseVal = '#';
                            a.setAttribute(ViewerBase._bookmarkAttr, result[1]);
                            _addEvent(a, 'click', function () {
                                self._goToBookmark(this.getAttribute(ViewerBase._bookmarkAttr));
                            });
                        }
                    }
                }
            };
            ViewerBase.prototype._changePageZoom = function (viewPage) {
                var self = this, zoomFactor = self.zoomFactor, g, svg;
                if (!viewPage) {
                    return;
                }
                viewPage.style.height = self._documentSource.pageSettings.height.valueInPixel * zoomFactor + 'px';
                viewPage.style.width = self._documentSource.pageSettings.width.valueInPixel * zoomFactor + 'px';
                g = viewPage.querySelector('g');
                if (g) {
                    g.parentNode.setAttribute('height', self._documentSource.pageSettings.height.valueInPixel * zoomFactor + 'px');
                    g.parentNode.setAttribute('width', self._documentSource.pageSettings.width.valueInPixel * zoomFactor + 'px');
                    g.setAttribute('transform', 'scale(' + zoomFactor + ')');
                    // In IE, if we set the transform attribute of G element, the element in the G element maybe displayed incorrectly(144673), 
                    // to fix it, we have to redraw the svg element: remove the G element and append it to svg again.
                    if (ViewerBase._isIE) {
                        svg = g.parentNode;
                        svg.removeChild(g);
                        svg.appendChild(g);
                    }
                }
            };
            ViewerBase.prototype._renderContinuousPage = function () {
                var self = this, pageNumber = self._pageNumber, pageCount = self._documentSource.pageCount, start = pageNumber - self._preFetchPageCount, end = pageNumber + self._preFetchPageCount, promises = [];
                start = start < 1 ? 1 : start;
                end = end > pageCount ? pageCount : end;
                for (var i = start; i <= end; i++) {
                    promises.push(self._renderSinglePage(self._viewWrapper.getElementsByClassName('wj-view-page').item(i - 1), i));
                }
                return new viewer._CompositedPromise(promises);
            };
            ViewerBase.prototype._clearKeepSerConnTimer = function () {
                if (this._keepSerConnTimer != null) {
                    clearTimeout(this._keepSerConnTimer);
                }
            };
            ViewerBase.prototype._keepServiceConnection = function () {
                var _this = this;
                this._clearKeepSerConnTimer();
                var documentSource = this._documentSource;
                if (!documentSource) {
                    return;
                }
                this._keepSerConnTimer = setTimeout(function () {
                    if (_this._documentSource !== documentSource) {
                        return;
                    }
                    _this._documentSource.getDocumentStatus().then(function (v) { return _this._keepServiceConnection(); });
                }, this._getExpiredTime());
            };
            ViewerBase.prototype._getExpiredTime = function () {
                return 6000;
            };
            ViewerBase.prototype._disposeDocument = function () {
                if (this._documentSource) {
                    _removeAllWjHandlers(this._documentEventKey, this._documentSource.disposed);
                    _removeAllWjHandlers(this._documentEventKey, this._documentSource.pageCountChanged);
                    _removeAllWjHandlers(this._documentEventKey, this._documentSource.pageSettingsChanged);
                    _removeAllWjHandlers(this._documentEventKey, this._documentSource.loadCompleted);
                    this._documentSource.dispose();
                }
                this._resetDocument();
            };
            ViewerBase.prototype._resetDocument = function () {
                this._pages.length = 0;
                this._addSinglePage();
                this._pageNumber = 1;
            };
            ViewerBase.prototype._addContinuousPage = function () {
                var self = this;
                _removeChildren(self._viewWrapper);
                for (var i = 0; i < self._documentSource.pageCount; i++) {
                    var viewPage = document.createElement('div');
                    viewPage.className = 'wj-view-page';
                    viewPage.style.height = self._documentSource.pageSettings.height.valueInPixel * self.zoomFactor + 'px';
                    viewPage.style.width = self._documentSource.pageSettings.width.valueInPixel * self.zoomFactor + 'px';
                    self._viewWrapper.appendChild(viewPage);
                }
            };
            ViewerBase.prototype._addSinglePage = function () {
                var self = this;
                _removeChildren(self._viewWrapper);
                var viewPage = document.createElement('div');
                viewPage.className = 'wj-view-page';
                self._viewWrapper.appendChild(viewPage);
                return viewPage;
            };
            ///** Gets or sets the page number. */
            //get pageNumber(): number {
            //    return this._pageNumber;
            //}
            //set pageNumber(value: number) {
            //    this._setPageNumber(value);
            //}
            /**
             * Moves to the page at the specified index.
             *
             * @param index Index of the page to move to.
             * @return An @see:wijmo.viewer.IPromise object.
             */
            ViewerBase.prototype.moveToPage = function (index) {
                return this._setPageNumber(index);
            };
            ViewerBase.prototype._setPageNumber = function (value) {
                var promise = new viewer._Promise();
                if (!this._documentSource) {
                    promise.reject('Cannot set page number without document source.');
                    return promise;
                }
                if (!this._documentSource.isLoadCompleted) {
                    promise.reject('Cannot set page number when document source is not loaded completely.');
                    return promise;
                }
                value = Math.min(this._documentSource.pageCount, Math.max(value, 1));
                if (this._pageNumber === value) {
                    promise.resolve(value);
                    return promise;
                }
                this._updatePageNumber(value);
                var renderPromise;
                switch (this.viewMode) {
                    case ViewMode.Continuous:
                        this._scrollToCurrentPage();
                        renderPromise = this._renderContinuousPage();
                        break;
                    case ViewMode.Single:
                        var viewPage = this._viewWrapper.querySelector('.wj-view-page');
                        renderPromise = this._renderSinglePage(viewPage, value);
                        break;
                }
                return renderPromise;
            };
            ViewerBase.prototype._updatePageNumber = function (value) {
                if (!this._documentSource) {
                    return;
                }
                value = Math.min(this._documentSource.pageCount, Math.max(value, 1));
                if (this._pageNumber === value) {
                    return;
                }
                this._pageNumber = value;
                this.onPageNumberChanged();
            };
            Object.defineProperty(ViewerBase.prototype, "zoomFactor", {
                /**
                 * Gets or sets the zoom factor.
                 */
                get: function () {
                    return this._zoomFactor;
                },
                set: function (value) {
                    value = Math.max(0.05, Math.min(10, value));
                    if (value === this._zoomFactor) {
                        return;
                    }
                    this._zoomFactor = value;
                    this._changeViewerZoom();
                    this.onZoomFactorChanged();
                },
                enumerable: true,
                configurable: true
            });
            ViewerBase.prototype._changeViewerZoom = function () {
                var viewPages, viewPage;
                switch (this.viewMode) {
                    case (ViewMode.Continuous):
                        viewPages = this._viewWrapper.querySelectorAll('.wj-view-page');
                        for (var i = 0; i < viewPages.length; i++) {
                            this._changePageZoom(viewPages.item(i));
                        }
                        break;
                    case (ViewMode.Single):
                        viewPage = this._viewWrapper.querySelector('.wj-view-page');
                        this._changePageZoom(viewPage);
                        break;
                }
            };
            Object.defineProperty(ViewerBase.prototype, "viewMode", {
                /** Gets or sets the view mode. */
                get: function () {
                    return this._viewMode;
                },
                set: function (value) {
                    if (this._viewMode === value) {
                        return;
                    }
                    this._viewMode = value;
                    this._updateViewPage();
                    this.onViewModeChanged();
                },
                enumerable: true,
                configurable: true
            });
            ViewerBase.prototype._updateViewPage = function () {
                if (this._documentSource && this._documentSource.isLoadCompleted) {
                    switch (this.viewMode) {
                        case ViewMode.Continuous:
                            this._addContinuousPage();
                            this._renderContinuousPage();
                            this._scrollToCurrentPage();
                            break;
                        case ViewMode.Single:
                            var viewPage = this._addSinglePage();
                            this._renderSinglePage(viewPage, this._pageNumber);
                            break;
                    }
                }
            };
            /**
             * Raises the @see:_documentSourceChanged event.
             *
             * @param e The event arguments.
             */
            ViewerBase.prototype._onDocumentSourceChanged = function (e) {
                this._documentSourceChanged.raise(this, e || new wijmo.EventArgs());
            };
            /**
             * Raises the @see:pageNumberChanged event.
             *
             * @param e The event arguments.
             */
            ViewerBase.prototype.onPageNumberChanged = function (e) {
                this.pageNumberChanged.raise(this, e || new wijmo.EventArgs());
            };
            /**
             * Raises the @see:viewModeChanged event.
             *
             * @param e The event arguments.
             */
            ViewerBase.prototype.onViewModeChanged = function (e) {
                this.viewModeChanged.raise(this, e || new wijmo.EventArgs());
            };
            /**
             * Raises the @see:zoomFactorChanged event.
             *
             * @param e The event arguments.
             */
            ViewerBase.prototype.onZoomFactorChanged = function (e) {
                this.zoomFactorChanged.raise(this, e || new wijmo.EventArgs());
            };
            ViewerBase._bookmarkAttr = 'bookmark';
            ViewerBase._isIE = !!navigator.userAgent.match(/MSIE |Trident\/|Edge\//);
            ViewerBase._bookmarkReg = /javascript\:navigate\(['|"](.*)['|"]\)/;
            ViewerBase._defaultZoomValues = [{ name: wijmo.Globalize.format(0.05, 'p0'), value: 0.05 }, { name: wijmo.Globalize.format(0.25, 'p0'), value: 0.25 },
                { name: wijmo.Globalize.format(0.5, 'p0'), value: 0.5 },
                { name: wijmo.Globalize.format(0.75, 'p0'), value: 0.75 }, { name: wijmo.Globalize.format(1, 'p0'), value: 1 },
                { name: wijmo.Globalize.format(2, 'p0'), value: 2 }, { name: wijmo.Globalize.format(3, 'p0'), value: 3 }, { name: wijmo.Globalize.format(4, 'p0'), value: 4 },
                { name: wijmo.Globalize.format(8, 'p0'), value: 8 }, { name: wijmo.Globalize.format(10, 'p0'), value: 10 }];
            /**
             * Gets or sets the template used to instantiate the Viewer controls.
             */
            ViewerBase.controlTemplate = '<div class="wj-viewerouter wj-content">' +
                '<div wj-part="toolbar"></div>' +
                '<div class="wj-reportcontainer" wj-part="report-container">' +
                '<div class="wj-reportleftpanel" wj-part="report-left-panel">' +
                '<div class="wj-tabsleft" wj-part="side-panel">' +
                '</div>' +
                '</div>' +
                '<div class="wj-splitter" wj-part="splitter">' +
                '<button class="wj-btn wj-btn-default" type="button">' +
                '<span class="wj-glyph-right"></span>' +
                '</button>' +
                '</div>' +
                '<div class="wj-viewcontainer" wj-part="view-container" tabIndex="-1">' +
                '<div class="wj-viewwrapper" wj-part="view-wrapper">' +
                '</div>' +
                '</div>' +
                '</div>' +
                '</div>';
            return ViewerBase;
        }(wijmo.Control));
        viewer.ViewerBase = ViewerBase;
        var _SideTabs = (function (_super) {
            __extends(_SideTabs, _super);
            function _SideTabs(element) {
                _super.call(this, element);
                this._idCounter = 0;
                this._tabPages = [];
                this._tabPageDic = {};
                this.tabPageActived = new wijmo.Event();
                this.expanded = new wijmo.Event();
                this.collapsed = new wijmo.Event();
                var tpl = this.getTemplate();
                this.applyTemplate('wj-control', tpl, {
                    _headersContainer: 'wj-headers',
                    _contentsContainer: 'wj-contents'
                });
            }
            _SideTabs.prototype.applyTemplate = function (css, tpl, parts) {
                var host = this.hostElement;
                wijmo.addClass(host, css);
                host.appendChild(_toDOMs(tpl));
                // bind control variables to template parts
                if (parts) {
                    for (var part in parts) {
                        var wjPart = parts[part];
                        this[part] = host.querySelector('[wj-part="' + wjPart + '"]');
                        // look in the root as well (querySelector doesn't...)
                        if (this[part] == null && host.getAttribute('wj-part') == wjPart) {
                            this[part] = tpl;
                        }
                        // make sure we found the part
                        if (this[part] == null) {
                            throw 'Missing template part: "' + wjPart + '"';
                        }
                    }
                }
                return host;
            };
            Object.defineProperty(_SideTabs.prototype, "tabPages", {
                get: function () {
                    return this._tabPages;
                },
                enumerable: true,
                configurable: true
            });
            _SideTabs.prototype.getTabPage = function (id) {
                return this._tabPageDic[id];
            };
            _SideTabs.prototype.getFirstShownTabPage = function (except) {
                var first;
                this._tabPages.some(function (i) {
                    if (!i.isHidden && i !== except) {
                        first = i;
                        return true;
                    }
                    return false;
                });
                return first;
            };
            Object.defineProperty(_SideTabs.prototype, "activedTabPage", {
                get: function () {
                    var first;
                    this._tabPages.some(function (i) {
                        if (i.isActived) {
                            first = i;
                            return true;
                        }
                        return false;
                    });
                    return first;
                },
                enumerable: true,
                configurable: true
            });
            _SideTabs.prototype.removePage = function (page) {
                var tabPage;
                tabPage = typeof page === 'string' ? this.getTabPage(page) : page;
                if (!tabPage) {
                    return;
                }
                var id = tabPage.id;
                var index = this._tabPages.indexOf(tabPage);
                if (index < 0) {
                    return;
                }
                this._tabPages.splice(index, 1);
                this._tabPageDic[id] = void (0);
                if (!this.isCollapsed && tabPage.isActived) {
                    var first = this.getFirstShownTabPage();
                    if (first) {
                        this.active(first);
                    }
                    else {
                        this.collapse();
                    }
                }
                this._headersContainer.removeChild(tabPage.header);
                this._contentsContainer.removeChild(tabPage.outContent);
            };
            _SideTabs.prototype.addPage = function (title, svgIcon, index) {
                var _this = this;
                var id = this._getNewTabPageId(), header = document.createElement('li'), outContentHtml = '<div class="wj-tabpane">' +
                    '<div class="wj-tabtitle-wrapper"><h3 class="wj-tabtitle">' + title + '<span class="wj-close">×</span></h3></div>' +
                    '<div class="wj-tabcontent-wrapper"><div class="wj-tabcontent-inner"></div></div>' +
                    '</div>', outContent = _toDOM(outContentHtml);
                var icon = _createSvgBtn(svgIcon);
                header.appendChild(icon);
                index = index == null ? this._tabPages.length : index;
                index = Math.min(Math.max(index, 0), this._tabPages.length);
                if (index >= this._tabPages.length) {
                    this._headersContainer.appendChild(header);
                    this._contentsContainer.appendChild(outContent);
                }
                else {
                    this._headersContainer.insertBefore(header, this._tabPages[index].header);
                    this._contentsContainer.insertBefore(outContent, this._tabPages[index].outContent);
                }
                _addEvent(outContent.querySelector('.wj-close'), 'click', function () {
                    _this.collapse();
                });
                _addEvent(header.querySelector('a'), 'click,keydown', function (e) {
                    var currentTab = _this.getTabPage(id);
                    if (!currentTab) {
                        return;
                    }
                    var needExe = (e.type === 'keydown' && e.keyCode === wijmo.Key.Enter) || e.type === 'click';
                    if (!needExe) {
                        return;
                    }
                    _this.active(currentTab);
                });
                var tabPage = new _TabPage(outContent, header, id);
                if (index >= this._tabPages.length) {
                    this._tabPages.push(tabPage);
                }
                else {
                    this._tabPages.splice(index, 0, tabPage);
                }
                this._tabPageDic[id] = tabPage;
                if (!this.isCollapsed) {
                    var actived = this.activedTabPage;
                    if (!actived) {
                        this.active(tabPage);
                    }
                }
                return tabPage;
            };
            Object.defineProperty(_SideTabs.prototype, "isCollapsed", {
                get: function () {
                    return wijmo.hasClass(this.hostElement, _SideTabs._collapsedCss);
                },
                enumerable: true,
                configurable: true
            });
            _SideTabs.prototype.hide = function (page) {
                var tabPage = typeof page === 'string' ? this.getTabPage(page) : page;
                if (!tabPage) {
                    return;
                }
                if (wijmo.hasClass(tabPage.header, _SideTabs._hiddenCss)) {
                    return;
                }
                wijmo.addClass(tabPage.header, _SideTabs._hiddenCss);
                this.deactive(tabPage);
            };
            _SideTabs.prototype.show = function (page) {
                var tabPage = typeof page === 'string' ? this.getTabPage(page) : page;
                if (!tabPage) {
                    return;
                }
                if (!wijmo.hasClass(tabPage.header, _SideTabs._hiddenCss)) {
                    return;
                }
                wijmo.removeClass(tabPage.header, _SideTabs._hiddenCss);
                if (!this.isCollapsed) {
                    var actived = this.activedTabPage;
                    if (!actived) {
                        this.active(tabPage);
                    }
                }
            };
            _SideTabs.prototype.deactive = function (page) {
                var tabPage = typeof page === 'string' ? this.getTabPage(page) : page;
                if (!tabPage || !tabPage.isActived) {
                    return;
                }
                wijmo.removeClass(tabPage.outContent, _SideTabs._activedCss);
                _checkImageButton(tabPage.header.querySelector('a'), false);
                var shown = this.getFirstShownTabPage(tabPage);
                if (shown) {
                    this.active(shown);
                }
                else {
                    this.collapse();
                }
            };
            _SideTabs.prototype.active = function (page) {
                var tabPage = typeof page === 'string' ? this.getTabPage(page) : page;
                if (!tabPage) {
                    return;
                }
                this.expand();
                if (tabPage.isActived) {
                    return;
                }
                this._tabPages.forEach(function (i) {
                    wijmo.removeClass(i.outContent, _SideTabs._activedCss);
                    _checkImageButton(i.header.querySelector('a'), false);
                });
                this.show(tabPage);
                wijmo.addClass(tabPage.outContent, _SideTabs._activedCss);
                _checkImageButton(tabPage.header.querySelector('a'), true);
                this.onTabPageActived();
            };
            _SideTabs.prototype.onTabPageActived = function () {
                this.tabPageActived.raise(this, new wijmo.EventArgs());
            };
            _SideTabs.prototype.onExpanded = function () {
                this.expanded.raise(this, new wijmo.EventArgs());
            };
            _SideTabs.prototype.onCollapsed = function () {
                this.collapsed.raise(this, new wijmo.EventArgs());
            };
            _SideTabs.prototype.collapse = function () {
                if (this.isCollapsed) {
                    return;
                }
                wijmo.addClass(this.hostElement, _SideTabs._collapsedCss);
                this.onCollapsed();
            };
            _SideTabs.prototype.expand = function () {
                if (!this.isCollapsed) {
                    return;
                }
                wijmo.removeClass(this.hostElement, _SideTabs._collapsedCss);
                if (!this.activedTabPage) {
                    var shown = this.getFirstShownTabPage();
                    if (shown) {
                        this.active(shown);
                    }
                }
                this.onExpanded();
            };
            _SideTabs.prototype._getNewTabPageId = function () {
                while (this._tabPageDic[(this._idCounter++).toString()]) {
                }
                return this._idCounter.toString();
            };
            _SideTabs._hiddenCss = 'hidden';
            _SideTabs._activedCss = 'active';
            _SideTabs._collapsedCss = 'collapsed';
            _SideTabs.controlTemplate = '<ul class="wj-nav wj-btn-group" wj-part="wj-headers"></ul>' +
                '<div class="wj-tabcontent" wj-part="wj-contents"></div>';
            return _SideTabs;
        }(wijmo.Control));
        viewer._SideTabs = _SideTabs;
        var _TabPage = (function () {
            function _TabPage(outContent, header, id) {
                this._header = header;
                this._outContent = outContent;
                this._content = outContent.querySelector('.wj-tabcontent-inner');
                this._id = id;
            }
            Object.defineProperty(_TabPage.prototype, "isActived", {
                get: function () {
                    return wijmo.hasClass(this.outContent, _SideTabs._activedCss);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_TabPage.prototype, "isHidden", {
                get: function () {
                    return wijmo.hasClass(this.header, _SideTabs._hiddenCss);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_TabPage.prototype, "id", {
                get: function () {
                    return this._id;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_TabPage.prototype, "header", {
                get: function () {
                    return this._header;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_TabPage.prototype, "content", {
                get: function () {
                    return this._content;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_TabPage.prototype, "outContent", {
                get: function () {
                    return this._outContent;
                },
                enumerable: true,
                configurable: true
            });
            _TabPage.prototype.format = function (customizer) {
                customizer(this);
            };
            return _TabPage;
        }());
        viewer._TabPage = _TabPage;
        var _Toolbar = (function (_super) {
            __extends(_Toolbar, _super);
            function _Toolbar(element) {
                _super.call(this, element);
                wijmo.addClass(this.hostElement, 'wj-toolbar');
                wijmo.addClass(this.hostElement, 'wj-btn-group');
            }
            _Toolbar.prototype.addSeparator = function () {
                var element = document.createElement('span');
                element.className = 'wj-separator';
                this.hostElement.appendChild(element);
                return element;
            };
            _Toolbar.prototype.addCustomItem = function (element) {
                if (wijmo.isString(element)) {
                    element = _toDOM(element);
                }
                this.hostElement.appendChild(element);
            };
            _Toolbar.prototype.addSvgButton = function (title, svgContent, command) {
                var button = _createSvgBtn(svgContent);
                button.title = title;
                this.hostElement.appendChild(button);
                if (command) {
                    _addEvent(button, 'click,keydown', function (event) {
                        var e = event || window.event, needExe = (e.type === 'keydown' && e.keyCode === wijmo.Key.Enter) || e.type === 'click';
                        if (!needExe || _isDisabledImageButton(button) || _isCheckedImageButton(button)) {
                            return;
                        }
                        command(event);
                    });
                }
                return button;
            };
            return _Toolbar;
        }(wijmo.Control));
        viewer._Toolbar = _Toolbar;
        function _createSvgBtn(svgContent) {
            var svg = _toDOM(_svgStart + svgContent + _svgEnd);
            wijmo.addClass(svg, 'wj-svg-btn');
            var btn = document.createElement('a');
            btn.appendChild(svg);
            wijmo.addClass(btn, 'wj-btn');
            btn.tabIndex = 0;
            return btn;
        }
        viewer._createSvgBtn = _createSvgBtn;
        var _PageSetupDialog = (function (_super) {
            __extends(_PageSetupDialog, _super);
            function _PageSetupDialog(ele) {
                _super.call(this, ele);
                this._uiUpdating = false;
                this.applied = new wijmo.Event();
                // check dependencies
                var depErr = 'Missing dependency: _PageSetupDialog requires ';
                wijmo.assert(wijmo.input.ComboBox != null, depErr + 'wijmo.input.');
                var tpl;
                this.modal = true;
                this.hideTrigger = wijmo.input.PopupTrigger.None;
                // instantiate and apply template
                tpl = this.getTemplate();
                this.applyTemplate('wj-control wj-content', tpl, {
                    _divPaperKind: 'div-paper-kind',
                    _divOrientation: 'div-page-orientation',
                    _divMarginsLeft: 'div-margins-left',
                    _divMarginsRight: 'div-margins-right',
                    _divMarginsTop: 'div-margins-top',
                    _divMarginsBottom: 'div-margins-bottom',
                    _btnApply: 'btn-apply',
                    _btnCancel: 'btn-cancel',
                    _btnClose: 'a-close'
                });
                this._numMarginsLeft = new wijmo.input.InputNumber(this._divMarginsLeft);
                this._numMarginsLeft.valueChanged.addHandler(this._updateValue, this);
                this._numMarginsRight = new wijmo.input.InputNumber(this._divMarginsRight);
                this._numMarginsRight.valueChanged.addHandler(this._updateValue, this);
                this._numMarginsTop = new wijmo.input.InputNumber(this._divMarginsTop);
                this._numMarginsTop.valueChanged.addHandler(this._updateValue, this);
                this._numMarginsBottom = new wijmo.input.InputNumber(this._divMarginsBottom);
                this._numMarginsBottom.valueChanged.addHandler(this._updateValue, this);
                this._cmbPaperKind = new wijmo.input.ComboBox(this._divPaperKind, {
                    itemsSource: _enumToArray(viewer._PaperKind),
                    displayMemberPath: 'text',
                    selectedValuePath: 'value',
                    isEditable: false
                });
                this._cmbPaperKind.selectedIndexChanged.addHandler(this._updateValue, this);
                this._cmbOrientation = new wijmo.input.ComboBox(this._divOrientation, {
                    itemsSource: [local.portrait, local.landscape],
                    isEditable: false
                });
                this._cmbOrientation.selectedIndexChanged.addHandler(this._updateValue, this);
                this._addEvents();
            }
            _PageSetupDialog.prototype._addEvents = function () {
                var self = this;
                _addEvent(self._btnClose, 'click', function () {
                    self.hide();
                });
                _addEvent(self._btnCancel, 'click', function () {
                    self.hide();
                });
                _addEvent(self._btnApply, 'click', function () {
                    self._apply();
                    self.hide();
                });
            };
            _PageSetupDialog.prototype._apply = function () {
                this.onApplied();
            };
            _PageSetupDialog.prototype._updateValue = function () {
                if (this._uiUpdating) {
                    return;
                }
                var pageSettings = this.pageSettings;
                if (pageSettings) {
                    pageSettings.bottomMargin = new viewer._Unit(this._numMarginsBottom.value, viewer._UnitType.Inch);
                    pageSettings.leftMargin = new viewer._Unit(this._numMarginsLeft.value, viewer._UnitType.Inch);
                    pageSettings.rightMargin = new viewer._Unit(this._numMarginsRight.value, viewer._UnitType.Inch);
                    pageSettings.topMargin = new viewer._Unit(this._numMarginsTop.value, viewer._UnitType.Inch);
                    pageSettings.paperSize = this._cmbPaperKind.selectedValue;
                    _setLandscape(pageSettings, this._cmbOrientation.text === local.landscape);
                    this._updateUI();
                }
            };
            _PageSetupDialog.prototype.onApplied = function () {
                this.applied.raise(this, new wijmo.EventArgs);
            };
            _PageSetupDialog.prototype.onShowing = function (e) {
                this._updateUI();
                return _super.prototype.onShowing.call(this, e);
            };
            _PageSetupDialog.prototype._updateUI = function () {
                this._uiUpdating = true;
                var pageSettings = this.pageSettings, setMargin = function (input, unit) {
                    input.value = viewer._Unit.convertValue(unit.value, unit.units, viewer._UnitType.Inch);
                };
                if (pageSettings) {
                    this._cmbPaperKind.selectedValue = pageSettings.paperSize;
                    this._cmbOrientation.text = pageSettings.landscape ? local.landscape : local.portrait;
                    setMargin(this._numMarginsLeft, pageSettings.leftMargin);
                    setMargin(this._numMarginsRight, pageSettings.rightMargin);
                    setMargin(this._numMarginsTop, pageSettings.topMargin);
                    setMargin(this._numMarginsBottom, pageSettings.bottomMargin);
                }
                this._uiUpdating = false;
            };
            _PageSetupDialog.prototype.onShown = function (e) {
                this._cmbPaperKind.focus();
                _super.prototype.onShown.call(this, e);
            };
            _PageSetupDialog.prototype.showWithValue = function (pageSettings) {
                var value = _clonePageSettings(pageSettings);
                this.pageSettings = value;
                _super.prototype.show.call(this);
            };
            _PageSetupDialog.controlTemplate = '<div>' +
                // header
                '<div class="wj-dialog-header">' +
                local.pageSetup +
                '<a class="wj-hide" wj-part="a-close" style="float:right;outline:none;text-decoration:none;padding:0px 6px" href="" tabindex="-1" draggable="false">&times;</a>' +
                '</div>' +
                // body
                '<div style="padding:12px;">' +
                '<table style="table-layout:fixed">' +
                '<tr>' +
                '<td>' + local.paperKind + '</td><td><div wj-part="div-paper-kind"></div></td>' +
                '</tr>' +
                '<tr>' +
                '<td>' + local.orientation + '</td><td><div wj-part="div-page-orientation"></div></td>' +
                '</tr>' +
                '</table>' +
                '<fieldset style="margin-top: 12px">' +
                '<legend>' + local.margins + '</legend>' +
                '<table style="table-layout:fixed">' +
                '<tr>' +
                '<td>' + local.left + '</td><td><div wj-part="div-margins-left"></div></td>' +
                '</tr>' +
                '<tr>' +
                '<td>' + local.right + '</td><td><div wj-part="div-margins-right"></div></td>' +
                '</tr>' +
                '<tr>' +
                '<td>' + local.top + '</td><td><div wj-part="div-margins-top"></div></td>' +
                '</tr>' +
                '<tr>' +
                '<td>' + local.bottom + '</td><td><div wj-part="div-margins-bottom"></div></td>' +
                '</tr>' +
                '</table>' +
                '</fieldset>' +
                // footer
                '<div class="wj-dialog-footer">' +
                '<a class="wj-hide" wj-part="btn-apply" href="" tabindex="-1" draggable="false">' + local.ok + '</a>&nbsp;&nbsp;' +
                '<a class="wj-hide" wj-part="btn-cancel" href="" tabindex="-1" draggable="false">' + local.cancel + '</a>' +
                '</div>' +
                '</div>' +
                '</div>';
            return _PageSetupDialog;
        }(wijmo.input.Popup));
        viewer._PageSetupDialog = _PageSetupDialog;
        function _setLandscape(pageSettings, landscape) {
            if (pageSettings.landscape === landscape) {
                return;
            }
            pageSettings.landscape = landscape;
            var width = pageSettings.width;
            pageSettings.width = pageSettings.height;
            pageSettings.height = width;
            var left = pageSettings.leftMargin;
            if (landscape) {
                pageSettings.leftMargin = pageSettings.bottomMargin;
                pageSettings.bottomMargin = pageSettings.rightMargin;
                pageSettings.rightMargin = pageSettings.topMargin;
                pageSettings.topMargin = left;
            }
            else {
                pageSettings.leftMargin = pageSettings.topMargin;
                pageSettings.topMargin = pageSettings.rightMargin;
                pageSettings.rightMargin = pageSettings.bottomMargin;
                pageSettings.bottomMargin = left;
            }
        }
        viewer._setLandscape = _setLandscape;
        function _clonePageSettings(src) {
            if (!src) {
                return null;
            }
            var result = {};
            result.height = src.height ? new viewer._Unit(src.height) : null;
            result.width = src.width ? new viewer._Unit(src.width) : null;
            result.bottomMargin = src.bottomMargin ? new viewer._Unit(src.bottomMargin) : null;
            result.leftMargin = src.leftMargin ? new viewer._Unit(src.leftMargin) : null;
            result.rightMargin = src.rightMargin ? new viewer._Unit(src.rightMargin) : null;
            result.topMargin = src.topMargin ? new viewer._Unit(src.topMargin) : null;
            result.landscape = src.landscape;
            result.paperSize = src.paperSize;
            return result;
        }
        viewer._clonePageSettings = _clonePageSettings;
        function _enumToArray(enumType) {
            var items = [];
            for (var i in enumType) {
                if (!i || !i.length || i[0] == "_" || isNaN(parseInt(i)))
                    continue;
                items.push({ text: enumType[i], value: i });
            }
            return items;
        }
        viewer._enumToArray = _enumToArray;
        function _removeChildren(node) {
            if (!node) {
                return;
            }
            while (node.hasChildNodes()) {
                node.removeChild(node.firstChild);
            }
        }
        viewer._removeChildren = _removeChildren;
        function _toDOMs(html) {
            var node, container = document.createElement("div"), f = document.createDocumentFragment();
            container.innerHTML = html;
            while (node = container.firstChild)
                f.appendChild(node);
            return f;
        }
        viewer._toDOMs = _toDOMs;
        function _toDOM(html) {
            return _toDOMs(html).firstChild;
        }
        viewer._toDOM = _toDOM;
        function _addEvent(elm, evType, fn, useCapture) {
            var types = evType.split(","), type;
            for (var i = 0; i < types.length; i++) {
                type = types[i].trim();
                if (elm.addEventListener) {
                    elm.addEventListener(type, fn, useCapture);
                }
                else if (elm.attachEvent) {
                    elm.attachEvent('on' + type, fn);
                }
                else {
                    elm['on' + type] = fn;
                }
            }
        }
        viewer._addEvent = _addEvent;
        var _checkedCss = 'wj-state-active', _disabledCss = 'wj-state-disabled';
        function _checkImageButton(button, checked) {
            if (checked) {
                wijmo.addClass(button, _checkedCss);
                return;
            }
            wijmo.removeClass(button, _checkedCss);
        }
        viewer._checkImageButton = _checkImageButton;
        function _disableImageButton(button, disabled) {
            if (disabled) {
                wijmo.addClass(button, _disabledCss);
                return;
            }
            wijmo.removeClass(button, _disabledCss);
        }
        viewer._disableImageButton = _disableImageButton;
        function _isDisabledImageButton(button) {
            return wijmo.hasClass(button, _disabledCss);
        }
        viewer._isDisabledImageButton = _isDisabledImageButton;
        function _isCheckedImageButton(button) {
            return wijmo.hasClass(button, _checkedCss);
        }
        viewer._isCheckedImageButton = _isCheckedImageButton;
        var wjEventsName = '__wjEvents';
        function _addWjHandler(key, event, func, self) {
            if (key) {
                var handlersDic = event[wjEventsName];
                if (!handlersDic) {
                    handlersDic = event[wjEventsName] = {};
                }
                var handlers = handlersDic[key];
                if (!handlers) {
                    handlers = handlersDic[key] = [];
                }
                handlers.push(func);
            }
            event.addHandler(func, self);
        }
        viewer._addWjHandler = _addWjHandler;
        function _removeAllWjHandlers(key, event) {
            if (!key) {
                return;
            }
            var handlersDic = event[wjEventsName];
            if (!handlersDic) {
                return;
            }
            var handlers = handlersDic[key];
            if (!handlers) {
                return;
            }
            handlers.forEach(function (h) { return event.removeHandler(h); });
        }
        viewer._removeAllWjHandlers = _removeAllWjHandlers;
    })(viewer = wijmo.viewer || (wijmo.viewer = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=ViewerBase.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wijmo;
(function (wijmo) {
    var viewer;
    (function (viewer) {
        'use strict';
        var local = wijmo.culture.Viewer, parametersIcon = '<path d="M24,11.9v-2h-4V7h0V5h0h-1h-5V2h0V0h0h-1H1H0h0v2h0v11h0v1h0h1h5v4h0v1h0h1h3v4h0v1h0h1h2.1v-1H11V12h2.1v-2H11h-1h0v2h0v6H7V7h12v2.9h-1v2h5V23h-4.9v1H23h1h0v-1h0L24,11.9L24,11.9z M6,5L6,5l0,2h0v6H1V2h12v3H7H6z"/>' +
            '<path d="M20,20v-3v-1h-1h-1v-1v-1h-1h-3h-1v1v3v1h1h1v2h0h1h3h1h0L20,20L20,20z M14,18v-3h3v1h-1h-1v1v1H14z M17,17v1h-1v-1H17z M16,20v-1h1h1v-1v-1h1v3H16z"/>';
        /**
         * Defines a base and abstract class for the report viewer controls.
         */
        var ReportViewerBase = (function (_super) {
            __extends(ReportViewerBase, _super);
            /**
             * Initializes a new instance of a @see:ReportViewerBase control.
             *
             * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
             * @param options JavaScript object containing initialization data for the control.
             */
            function ReportViewerBase(element, options) {
                _super.call(this, element, options);
                this._initSidePanelParameters();
            }
            ReportViewerBase._isRequiringParameters = function (parameters) {
                for (var i = 0; i < parameters.length; i++) {
                    if ((parameters[i].value === null || parameters[i].value === undefined) && !parameters[i].nullable) {
                        return true;
                    }
                }
                return false;
            };
            ReportViewerBase.prototype._initSidePanelParameters = function () {
                var _this = this;
                var sideTabs = wijmo.Control.getControl(this._sidePanel);
                sideTabs.addPage(local.parameters, parametersIcon, 2).format(function (t) {
                    var paramsEditor = new _ParametersEditor(t.content);
                    paramsEditor.commit.addHandler(function () {
                        if (!_this._innerDocumentSource || !_this._innerDocumentSource.hasParameters) {
                            return;
                        }
                        _this._innerDocumentSource.setParameters(paramsEditor.parameters).then(function (v) {
                            var newParams = (v || []);
                            var hasError = newParams.some(function (p) { return !!p.error; });
                            if (hasError) {
                                paramsEditor.itemsSource = newParams;
                            }
                            else {
                                _this._resetDocument();
                                var loadingDivList = _this._viewContainer.querySelectorAll('.wj-loading');
                                if (loadingDivList && loadingDivList.length > 0) {
                                    for (var i = 0; i < loadingDivList.length; i++) {
                                        loadingDivList.item(i).innerHTML = local.loading;
                                    }
                                }
                                _this._renderDocumentSource();
                            }
                        });
                    });
                    paramsEditor.validate.addHandler(function () {
                        if (!_this._innerDocumentSource || !_this._innerDocumentSource.hasParameters) {
                            return;
                        }
                        _this._innerDocumentSource.setParameters(paramsEditor.parameters).then(function (v) {
                            paramsEditor.itemsSource = v;
                        });
                    });
                    var updateParametersPanel = function () {
                        if (_this._innerDocumentSource.status === viewer._ExecutionStatus.Cleared ||
                            _this._innerDocumentSource.status === viewer._ExecutionStatus.NotFound) {
                            viewer._removeChildren(t.content);
                            return;
                        }
                        if (_this._innerDocumentSource.status !== viewer._ExecutionStatus.Loaded) {
                            return;
                        }
                        if (!_this._innerDocumentSource.hasParameters) {
                            sideTabs.hide(t);
                            return;
                        }
                        sideTabs.show(t);
                        sideTabs.active(t);
                        _this._innerDocumentSource.getParameters().then(function (v) {
                            paramsEditor.itemsSource = v;
                            if (ReportViewerBase._isRequiringParameters(v)) {
                                _this._updateLoadingDivContent(local.requiringParameters);
                            }
                            else {
                                _this._renderDocumentSource();
                            }
                        });
                    }, update = function () {
                        if (!_this._innerDocumentSource) {
                            return;
                        }
                        viewer._addWjHandler(_this._documentEventKey, _this._innerDocumentSource.statusChanged, updateParametersPanel);
                        updateParametersPanel();
                    };
                    _this._documentSourceChanged.addHandler(update);
                    update();
                });
            };
            ReportViewerBase.prototype._updateLoadingDivContent = function (content) {
                var self = this, viewPage = this._viewContainer.querySelector('.wj-view-page'), loadingDiv, loadingDivList = this._viewContainer.querySelectorAll('.wj-loading');
                if (loadingDivList && loadingDivList.length > 0) {
                    for (var i = 0; i < loadingDivList.length; i++) {
                        loadingDivList.item(i).innerHTML = content;
                    }
                }
                else {
                    loadingDiv = document.createElement('div');
                    loadingDiv.className = 'wj-loading';
                    loadingDiv.style.height = viewPage.offsetHeight + 'px';
                    loadingDiv.style.lineHeight = viewPage.offsetHeight + 'px';
                    loadingDiv.innerHTML = content;
                    viewPage.appendChild(loadingDiv);
                }
            };
            ReportViewerBase.prototype._getExpiredTime = function () {
                var documentSource = this._innerDocumentSource;
                if (!documentSource || !documentSource.expiredDateTime || !documentSource.executionDateTime) {
                    return _super.prototype._getExpiredTime.call(this);
                }
                var expiredTime = documentSource.expiredDateTime.getTime() - documentSource.executionDateTime.getTime();
                return Math.max(expiredTime - 120000, 0);
            };
            Object.defineProperty(ReportViewerBase.prototype, "_innerDocumentSource", {
                get: function () {
                    return this._getDocumentSource();
                },
                enumerable: true,
                configurable: true
            });
            ReportViewerBase.prototype._loadDocument = function (value) {
                var isChanged = this._innerDocumentSource !== value;
                var promise = _super.prototype._loadDocument.call(this, value);
                if (isChanged) {
                    viewer._addWjHandler(this._documentEventKey, value.statusChanged, this._onDocumentStatusChanged, this);
                }
                return promise;
            };
            ReportViewerBase.prototype._reRenderDocument = function () {
                this._renderDocumentSource();
            };
            ReportViewerBase.prototype._onDocumentStatusChanged = function () {
                if (!this._innerDocumentSource
                    || this._innerDocumentSource.status !== viewer._ExecutionStatus.Loaded
                    || this._innerDocumentSource.hasParameters) {
                    return;
                }
                this._renderDocumentSource();
            };
            ReportViewerBase.prototype._renderDocumentSource = function () {
                var _this = this;
                if (!this._innerDocumentSource) {
                    return;
                }
                this._innerDocumentSource.render().then(function (v) { return _this._getStatusUtilCompleted(); });
            };
            ReportViewerBase.prototype._getStatusUtilCompleted = function () {
                var _this = this;
                if (!this._innerDocumentSource || this._innerDocumentSource.isLoadCompleted) {
                    return;
                }
                var documentSource = this._innerDocumentSource;
                this._innerDocumentSource.getDocumentStatus().then(function (v) {
                    if (_this._innerDocumentSource !== documentSource) {
                        return;
                    }
                    setTimeout(function () { return _this._getStatusUtilCompleted(); }, 100);
                });
            };
            ReportViewerBase.prototype._disposeDocument = function () {
                if (this._innerDocumentSource) {
                    viewer._removeAllWjHandlers(this._documentEventKey, this._innerDocumentSource.statusChanged);
                }
                _super.prototype._disposeDocument.call(this);
            };
            ReportViewerBase.prototype._getSource = function () {
                return new viewer._ReportBase({
                    serviceUrl: this.serviceUrl,
                    filePath: this.filePath
                });
            };
            return ReportViewerBase;
        }(viewer.ViewerBase));
        viewer.ReportViewerBase = ReportViewerBase;
        var _ParametersEditor = (function (_super) {
            __extends(_ParametersEditor, _super);
            function _ParametersEditor(element) {
                _super.call(this, element);
                this._parameters = {};
                this._errors = [];
                this._errorsVisible = false;
                this.commit = new wijmo.Event();
                this.validate = new wijmo.Event();
                wijmo.addClass(this.hostElement, 'wj-parameterscontainer');
                this._updateErrorsVisible();
            }
            _ParametersEditor.prototype._setErrors = function (value) {
                this._errors = value;
                this._updateErrorDiv();
            };
            Object.defineProperty(_ParametersEditor.prototype, "parameters", {
                get: function () {
                    return this._parameters;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_ParametersEditor.prototype, "itemsSource", {
                get: function () {
                    return this._itemSources;
                },
                set: function (value) {
                    this._itemSources = value;
                    this._render();
                    var errors = [];
                    (value || []).forEach(function (v) {
                        if (v.error) {
                            errors.push({ key: v.name, value: v.error });
                        }
                    });
                    this._setErrors(errors);
                },
                enumerable: true,
                configurable: true
            });
            _ParametersEditor.prototype._setErrorsVisible = function (value) {
                this._errorsVisible = value;
                this._updateErrorsVisible();
            };
            _ParametersEditor.prototype._updateErrorsVisible = function () {
                if (this._errorsVisible) {
                    wijmo.removeClass(this.hostElement, _ParametersEditor._errorsHiddenCss);
                }
                else {
                    wijmo.addClass(this.hostElement, _ParametersEditor._errorsHiddenCss);
                }
            };
            _ParametersEditor.prototype.onCommit = function () {
                this.commit.raise(this, new wijmo.EventArgs());
            };
            _ParametersEditor.prototype.onValidate = function () {
                this.validate.raise(this, new wijmo.EventArgs());
                this._setErrorsVisible(false);
            };
            _ParametersEditor.prototype._updateErrorDiv = function () {
                var errorList = this._errors || [], errorDivList = this.hostElement.querySelectorAll('.error');
                for (var i = 0; i < errorDivList.length; i++) {
                    errorDivList[i].parentNode.removeChild(errorDivList[i]);
                }
                for (var i = 0; i < errorList.length; i++) {
                    var errorMessageDiv, element = this.hostElement.querySelector('*[' + _ParametersEditor._paramIdAttr + '="' + errorList[i].key + '"]'), message = errorList[i].value;
                    if (element) {
                        errorMessageDiv = document.createElement('div');
                        errorMessageDiv.innerHTML = message;
                        errorMessageDiv.className = 'error';
                        element.appendChild(errorMessageDiv);
                    }
                }
            };
            _ParametersEditor.prototype._render = function () {
                var _this = this;
                viewer._removeChildren(this.hostElement);
                var parameters = this._itemSources;
                if (!parameters) {
                    return;
                }
                var parentParams = {};
                for (var i = 0; i < parameters.length; i++) {
                    if (parameters[i].dependentParameters && parameters[i].dependentParameters.length > 0) {
                        for (var j = 0; j < parameters[i].dependentParameters.length; j++) {
                            parentParams[parameters[i].dependentParameters[j]] = null;
                        }
                    }
                }
                for (var i = 0; i < parameters.length; i++) {
                    if (!!parameters[i].hidden) {
                        continue;
                    }
                    var parameterContainer = document.createElement('div'), parameterLabel = document.createElement('span'), parameterControl = null, control, isParentParam = false;
                    parameterContainer.className = 'wj-parametercontainer';
                    parameterLabel.className = 'wj-parameterhead';
                    parameterLabel.innerHTML = parameters[i].prompt || parameters[i].name;
                    isParentParam = parentParams.hasOwnProperty(parameters[i].name);
                    if (wijmo.isArray(parameters[i].allowedValues)) {
                        parameterControl = this._generateComboEditor(parameters[i], isParentParam);
                    }
                    else {
                        switch (parameters[i].dataType) {
                            case viewer._ParameterType.Boolean:
                                parameterControl = this._generateBoolEditor(parameters[i], isParentParam);
                                break;
                            case viewer._ParameterType.DateTime:
                            case viewer._ParameterType.Time:
                                parameterControl = this._generateDateTimeEditor(parameters[i], isParentParam);
                                break;
                            case viewer._ParameterType.Integer:
                            case viewer._ParameterType.Float:
                                parameterControl = this._generateNumberEditor(parameters[i], isParentParam);
                                break;
                            case viewer._ParameterType.String:
                                parameterControl = this._generateStringEditor(parameters[i], isParentParam);
                                break;
                        }
                    }
                    if (parameterControl) {
                        parameterControl.className += ' wj-parametercontrol';
                        parameterContainer.setAttribute(_ParametersEditor._paramIdAttr, parameters[i].name);
                        parameterContainer.appendChild(parameterLabel);
                        parameterContainer.appendChild(parameterControl);
                        this.hostElement.appendChild(parameterContainer);
                    }
                }
                var applyBtn = document.createElement('input');
                applyBtn.type = 'button';
                applyBtn.value = local.apply;
                applyBtn.className = 'wj-applybutton';
                viewer._addEvent(applyBtn, 'click', function () {
                    if (_this._validateParameters()) {
                        _this._errors = [];
                        _this.onCommit();
                    }
                    _this._setErrorsVisible(true);
                });
                this.hostElement.appendChild(applyBtn);
            };
            _ParametersEditor.prototype._validateParameters = function () {
                var textareas = this.hostElement.querySelectorAll('textarea'), element, errorList = [], parameters = this.itemsSource;
                for (var i = 0; i < parameters.length; i++) {
                    element = this.hostElement.querySelector('[' + _ParametersEditor._paramIdAttr + '="' + parameters[i].name + '"]');
                    if (!parameters[i].nullable && !this.parameters.hasOwnProperty(parameters[i].name) && !this.parameters[parameters[i].name]
                        && (parameters[i].value === null || parameters[i].value === undefined || parameters[i].value === "")) {
                        if (element) {
                            errorList.push({ key: parameters[i].name, value: local.nullParameterError });
                        }
                    }
                }
                //check input text's format.
                for (var i = 0; i < textareas.length; i++) {
                    var textarea = textareas.item(i), dataType, values = [], currentResult = true;
                    dataType = parseInt(textarea.getAttribute('data-type'));
                    switch (dataType) {
                        case viewer._ParameterType.DateTime:
                        case viewer._ParameterType.Time:
                            currentResult = _ParametersEditor._checkValueType(textarea.value, wijmo.isDate);
                            break;
                        case viewer._ParameterType.Float:
                            currentResult = _ParametersEditor._checkValueType(textarea.value, _ParametersEditor._isFloat);
                            break;
                        case viewer._ParameterType.Integer:
                            currentResult = _ParametersEditor._checkValueType(textarea.value, wijmo.isInt);
                            break;
                    }
                    if (!currentResult) {
                        errorList.push({ key: textarea.parentElement.id, value: local.invalidParameterError });
                    }
                }
                this._setErrors(errorList);
                return errorList.length <= 0;
            };
            _ParametersEditor._isFloat = function (value) {
                return !isNaN(parseFloat(value));
            };
            _ParametersEditor._checkValueType = function (value, isSpecificType) {
                var values = value.split('\n');
                for (var i = 0; i < values.length; i++) {
                    if (values[i].trim().length <= 0 || isSpecificType(values[i].trim())) {
                        continue;
                    }
                    else {
                        return false;
                    }
                }
                return true;
            };
            _ParametersEditor.prototype._generateComboEditor = function (parameter, isParentParam) {
                var _this = this;
                var combo, itemsSource = [], element = document.createElement('div'), multiSelect, values, checkedItems = [], isChildParameter = parameter.dependentParameters && parameter.dependentParameters.length > 0, isParameterResolved = !isChildParameter || (parameter.allowedValues && parameter.allowedValues.length > 0);
                if (parameter.multiValue) {
                    combo = new _MultiSelectEx(element);
                }
                else {
                    combo = new wijmo.input.ComboBox(element);
                    if (parameter.nullable) {
                        itemsSource.push({ name: local.parameterNoneItemsSelected, value: null });
                    }
                    else if (parameter.value == null && isParameterResolved) {
                        itemsSource.push({ name: local.selectParameterValue, value: null });
                    }
                }
                combo.isEditable = false;
                combo.displayMemberPath = 'name';
                combo.selectedValuePath = 'value';
                if (isChildParameter && (!parameter.allowedValues || parameter.allowedValues.length <= 0)) {
                    combo.disabled = true;
                }
                for (var i = 0; i < parameter.allowedValues.length; i++) {
                    itemsSource.push({ name: parameter.allowedValues[i].key, value: parameter.allowedValues[i].value });
                }
                combo.itemsSource = itemsSource;
                if (parameter.multiValue) {
                    multiSelect = combo;
                    if (!isParameterResolved) {
                        multiSelect.checkedItems = [];
                    }
                    else if (parameter.value) {
                        for (var i = 0; i < parameter.value.length; i++) {
                            for (var j = 0; j < multiSelect.itemsSource.length; j++) {
                                if (multiSelect.itemsSource[j].value === parameter.value[i]) {
                                    checkedItems.push(multiSelect.itemsSource[j]);
                                    break;
                                }
                            }
                        }
                        multiSelect.checkedItems = checkedItems;
                    }
                    multiSelect.checkedItemsChanged.addHandler(function () {
                        values = [];
                        for (var i = 0; i < multiSelect.checkedItems.length; i++) {
                            values.push(multiSelect.checkedItems[i]['value']);
                        }
                        _this._updateParameters(parameter, values);
                        if (isParentParam) {
                            _this.onValidate();
                        }
                        if (values.length > 0 && !parameter.nullable) {
                            _this._validateNullValueOfParameter(element);
                        }
                    });
                }
                else {
                    if (!isParameterResolved) {
                        combo.selectedValue = null;
                    }
                    else {
                        combo.selectedValue = parameter.value;
                    }
                    var updating = false;
                    combo.selectedIndexChanged.addHandler(function (sender) {
                        if (updating) {
                            return;
                        }
                        _this._updateParameters(parameter, sender.selectedValue);
                        if (sender.selectedValue && sender.itemsSource[0]['name'] === local.selectParameterValue) {
                            setTimeout(function () {
                                updating = true;
                                var value = sender.selectedValue;
                                var index = sender.selectedIndex;
                                sender.itemsSource.shift();
                                sender.collectionView.refresh();
                                sender.selectedValue = value;
                                sender.selectedIndex = index - 1;
                                updating = false;
                            });
                        }
                        if (isParentParam) {
                            _this.onValidate();
                        }
                        _this._validateNullValueOfParameter(element);
                    });
                }
                return element;
            };
            _ParametersEditor.prototype._updateParameters = function (parameter, value) {
                var spliteNewLine = function (value, multiValues) {
                    if (multiValues && !wijmo.isArray(value)) {
                        return value.split(/[\r\n]+/);
                    }
                    else {
                        return value;
                    }
                }, item;
                this.itemsSource.some(function (v) {
                    if (v.name === parameter.name) {
                        item = v;
                        return true;
                    }
                    return false;
                });
                this._parameters[parameter.name] = item.value = parameter.value = spliteNewLine(value, parameter.multiValue);
            };
            _ParametersEditor.prototype._generateBoolEditor = function (parameter, isParentParam) {
                var _this = this;
                var checkEditor, itemsSource = [], element;
                if (parameter.nullable) {
                    element = document.createElement('div');
                    checkEditor = new wijmo.input.ComboBox(element);
                    checkEditor.isEditable = false;
                    checkEditor.displayMemberPath = 'name';
                    checkEditor.selectedValuePath = 'value';
                    itemsSource.push({ name: 'None', value: null });
                    itemsSource.push({ name: 'True', value: true });
                    itemsSource.push({ name: 'False', value: false });
                    checkEditor.itemsSource = itemsSource;
                    checkEditor.selectedValue = parameter.value;
                    checkEditor.selectedIndexChanged.addHandler(function (sender) {
                        _this._updateParameters(parameter, sender.selectedValue);
                        if (isParentParam) {
                            _this.onValidate();
                        }
                    });
                }
                else {
                    element = document.createElement('input');
                    element.type = 'checkbox';
                    element.checked = parameter.value;
                    viewer._addEvent(element, 'click', function () {
                        _this._updateParameters(parameter, element.checked);
                        if (isParentParam) {
                            _this.onValidate();
                        }
                    });
                }
                return element;
            };
            _ParametersEditor.prototype._generateStringEditor = function (parameter, isParentParam) {
                var self = this, element;
                if (parameter.multiValue) {
                    element = self._createTextarea(parameter.value, parameter.dataType);
                }
                else {
                    element = document.createElement('input');
                    element.type = 'text';
                    if (parameter.value) {
                        element.value = parameter.value;
                    }
                }
                self._bindTextChangedEvent(element, parameter, isParentParam);
                return element;
            };
            _ParametersEditor.prototype._createTextarea = function (value, dataType) {
                var textarea = document.createElement('textarea'), format, dates = [];
                if (dataType === viewer._ParameterType.DateTime || dataType === viewer._ParameterType.Time) {
                    format = 'MM/dd/yyyy HH:mm';
                }
                if (value && value.length > 0) {
                    if (format) {
                        for (var i = 0; i < value.length; i++) {
                            dates.push(wijmo.Globalize.formatDate(new Date(value[i]), format));
                        }
                        textarea.value = dates.join('\n');
                    }
                    else {
                        textarea.value = value.join('\n');
                    }
                }
                textarea.wrap = 'off';
                textarea.setAttribute('data-type', dataType.toString());
                return textarea;
            };
            _ParametersEditor.prototype._bindTextChangedEvent = function (element, parameter, isParentParam) {
                var _this = this;
                viewer._addEvent(element, 'change,keyup,paste,input', function () {
                    _this._updateParameters(parameter, element.value);
                    if (isParentParam) {
                        _this.onValidate();
                    }
                    if (element.value && !parameter.nullable) {
                        _this._validateNullValueOfParameter(element);
                    }
                });
            };
            _ParametersEditor.prototype._generateNumberEditor = function (parameter, isParentParam) {
                var self = this, element, inputNumber;
                if (parameter.multiValue) {
                    element = self._createTextarea(parameter.value, parameter.dataType);
                    self._bindTextChangedEvent(element, parameter, isParentParam);
                }
                else {
                    element = document.createElement('div');
                    inputNumber = new wijmo.input.InputNumber(element);
                    inputNumber.format = parameter.dataType === viewer._ParameterType.Integer ? 'n0' : 'n2';
                    inputNumber.required = !parameter.nullable;
                    if (parameter.value) {
                        inputNumber.value = parameter.dataType === viewer._ParameterType.Integer ? parseInt(parameter.value) : parseFloat(parameter.value);
                    }
                    inputNumber.valueChanged.addHandler(function (sender) {
                        self._updateParameters(parameter, sender.value);
                        if (isParentParam) {
                            this.onValidate();
                        }
                    });
                }
                return element;
            };
            _ParametersEditor.prototype._generateDateTimeEditor = function (parameter, isParentParam) {
                var _this = this;
                var element, input;
                if (parameter.multiValue) {
                    element = this._createTextarea(parameter.value, parameter.dataType);
                    element.title = 'MM/dd/yyyy HH:mm';
                    this._bindTextChangedEvent(element, parameter, isParentParam);
                }
                else {
                    element = document.createElement('div');
                    if (parameter.dataType === viewer._ParameterType.DateTime) {
                        input = new wijmo.input.InputDate(element);
                    }
                    else {
                        input = new wijmo.input.InputTime(element);
                        input.step = 60;
                    }
                    input.required = !parameter.nullable;
                    if (parameter.value) {
                        input.value = new Date(parameter.value);
                    }
                    input.valueChanged.addHandler(function (sender) {
                        _this._updateParameters(parameter, input.value.toJSON());
                        if (isParentParam) {
                            _this.onValidate();
                        }
                    });
                }
                return element;
            };
            _ParametersEditor.prototype._validateNullValueOfParameter = function (element) {
                var errors = this._errors;
                if (!errors || !errors.length) {
                    return;
                }
                for (var i = 0; i < errors.length; i++) {
                    if (errors[i].key !== element.parentElement.getAttribute(_ParametersEditor._paramIdAttr)) {
                        continue;
                    }
                    var errorDiv = element.parentElement.querySelector('.error');
                    if (!errorDiv) {
                        continue;
                    }
                    element.parentElement.removeChild(errorDiv);
                    errors.splice(i, 1);
                    break;
                }
            };
            _ParametersEditor._paramIdAttr = 'param-id';
            _ParametersEditor._errorsHiddenCss = 'wj-parametererrors-hidden';
            return _ParametersEditor;
        }(wijmo.Control));
        viewer._ParametersEditor = _ParametersEditor;
        // Extends MultiSelect control with Select All function.
        var _MultiSelectEx = (function () {
            function _MultiSelectEx(element) {
                this._selectedAll = false;
                this._innerCheckedItemsChanged = false;
                this.checkedItemsChanged = new wijmo.Event();
                var self = this, multiSelect = new wijmo.input.MultiSelect(element);
                self._multiSelect = multiSelect;
                multiSelect.checkedItemsChanged.addHandler(self.onCheckedItemsChanged, self);
                multiSelect.isDroppedDownChanged.addHandler(self.onIsDroppedDownChanged, self);
                multiSelect.headerFormatter = function () { return self._updateHeader(); };
            }
            _MultiSelectEx.prototype._updateHeader = function () {
                var self = this, checkedItems = self.checkedItems || [], texts = [], displayMemberPath = self.displayMemberPath;
                if (!checkedItems.length) {
                    return local.parameterNoneItemsSelected;
                }
                if (self._selectedAll) {
                    return local.parameterAllItemsSelected;
                }
                if (displayMemberPath) {
                    for (var i = 0; i < checkedItems.length; i++) {
                        texts[i] = checkedItems[i][displayMemberPath];
                    }
                    return texts.join(', ');
                }
                return checkedItems.join(', ');
            };
            _MultiSelectEx.prototype.onIsDroppedDownChanged = function () {
                if (!this._multiSelect.isDroppedDown) {
                    return;
                }
                this._updateSelectedAll();
            };
            _MultiSelectEx.prototype.onCheckedItemsChanged = function (sender, e) {
                var self = this;
                if (self._innerCheckedItemsChanged) {
                    return;
                }
                if (!self._selectAllItem) {
                    self.checkedItemsChanged.raise(self, e);
                    return;
                }
                self._updateSelectedAll();
                self.checkedItemsChanged.raise(self, e);
            };
            Object.defineProperty(_MultiSelectEx.prototype, "isEditable", {
                get: function () {
                    return this._multiSelect.isEditable;
                },
                set: function (value) {
                    this._multiSelect.isEditable = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_MultiSelectEx.prototype, "disabled", {
                get: function () {
                    return this._multiSelect.disabled;
                },
                set: function (value) {
                    this._multiSelect.disabled = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_MultiSelectEx.prototype, "displayMemberPath", {
                get: function () {
                    return this._multiSelect.displayMemberPath;
                },
                set: function (value) {
                    this._multiSelect.displayMemberPath = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_MultiSelectEx.prototype, "selectedValuePath", {
                get: function () {
                    return this._multiSelect.selectedValuePath;
                },
                set: function (value) {
                    this._multiSelect.selectedValuePath = value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_MultiSelectEx.prototype, "itemsSource", {
                get: function () {
                    return this._itemsSource;
                },
                set: function (value) {
                    var self = this, displayMemberPath = self.displayMemberPath || 'name';
                    self._itemsSource = value;
                    var innerSources = [];
                    if (value) {
                        if (value.length > 1) {
                            self._selectAllItem = {};
                            self._selectAllItem[displayMemberPath] = local.parameterSelectAllItemText;
                            innerSources.push(self._selectAllItem);
                        }
                        else {
                            self._selectAllItem = null;
                        }
                        innerSources = innerSources.concat(value);
                    }
                    self._multiSelect.itemsSource = innerSources;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_MultiSelectEx.prototype, "checkedItems", {
                get: function () {
                    var self = this, items = [];
                    if (self._multiSelect.checkedItems) {
                        items = self._multiSelect.checkedItems.slice();
                    }
                    var index = items.indexOf(self._selectAllItem);
                    if (index > -1) {
                        items.splice(index, 1);
                    }
                    return items;
                },
                set: function (value) {
                    var self = this;
                    self._multiSelect.checkedItems = value;
                    self._selectedAll = false;
                    self._updateSelectedAll();
                },
                enumerable: true,
                configurable: true
            });
            _MultiSelectEx.prototype._updateSelectedAll = function () {
                var self = this;
                if (!self._selectAllItem) {
                    return;
                }
                var checkedItems = self._multiSelect.checkedItems || [], selectedAllIndex = checkedItems.indexOf(self._selectAllItem), selectedAll = selectedAllIndex > -1, selectAllItemChanged = self._selectedAll !== selectedAll;
                if (selectAllItemChanged) {
                    self._selectedAll = selectedAll;
                    self._innerCheckedItemsChanged = true;
                    if (self._selectedAll) {
                        self._multiSelect.checkedItems = self._multiSelect.itemsSource.slice();
                    }
                    else {
                        self._multiSelect.checkedItems = [];
                    }
                    self._innerCheckedItemsChanged = false;
                    return;
                }
                self._selectedAll = checkedItems && self._itemsSource &&
                    (checkedItems.length - (selectedAll ? 1 : 0) === self._itemsSource.length);
                if (self._selectedAll === selectedAll) {
                    return;
                }
                self._innerCheckedItemsChanged = true;
                if (self._selectedAll) {
                    self._multiSelect.checkedItems = checkedItems.concat(self._selectAllItem);
                }
                else {
                    checkedItems = checkedItems.slice();
                    checkedItems.splice(selectedAllIndex, 1);
                    self._multiSelect.checkedItems = checkedItems;
                }
                self._innerCheckedItemsChanged = false;
            };
            return _MultiSelectEx;
        }());
        viewer._MultiSelectEx = _MultiSelectEx;
    })(viewer = wijmo.viewer || (wijmo.viewer = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=ReportViewerBase.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wijmo;
(function (wijmo) {
    var viewer;
    (function (viewer) {
        'use strict';
        /**
         * Defines the report viewer control for displaying a FlexReport document source.
         */
        var ReportViewer = (function (_super) {
            __extends(ReportViewer, _super);
            /**
             * Initializes a new instance of a @see:ReportViewer control.
             *
             * @param element The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').
             * @param options JavaScript object containing initialization data for the control.
             */
            function ReportViewer(element, options) {
                _super.call(this, element, options);
            }
            Object.defineProperty(ReportViewer.prototype, "reportName", {
                /**
                 * Gets or sets the report name.
                 */
                get: function () {
                    return this._reportName;
                },
                set: function (value) {
                    if (value != this._reportName) {
                        this._reportName = value;
                        this._needBindDocumentSource();
                        this.invalidate();
                    }
                },
                enumerable: true,
                configurable: true
            });
            ReportViewer.prototype._getSource = function () {
                return new viewer._FlexReport({
                    serviceUrl: this.serviceUrl,
                    filePath: this.filePath,
                    reportName: this.reportName
                });
            };
            /**
             * Gets the report names defined in the specified report file.
             *
             * @param serviceUrl The root url of service.
             * @param reportFilePath The report file path.
             * @return An @see:wijmo.viewer.IPromise object with a string array which contians the report names.
             */
            ReportViewer.getReportNames = function (serviceUrl, reportFilePath) {
                return viewer._FlexReport.getReportNames(serviceUrl, reportFilePath);
            };
            return ReportViewer;
        }(viewer.ReportViewerBase));
        viewer.ReportViewer = ReportViewer;
    })(viewer = wijmo.viewer || (wijmo.viewer = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=ReportViewer.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wijmo;
(function (wijmo) {
    var viewer;
    (function (viewer) {
        'use strict';
        /**
         * Defines an abstract document source class.
         */
        var _DocumentSource = (function () {
            /**
             * Creates the document source.
             *
             * @param options The document service information.
             */
            function _DocumentSource(options) {
                this._hasOutlines = false;
                this._pageCount = 0;
                this._supportedExportProviders = [];
                this._isLoadCompleted = false;
                this._isDisposed = false;
                this._errors = [];
                /**
                 * Occurs after the page count changes.
                 */
                this.pageCountChanged = new wijmo.Event();
                /**
                 * Occurs after the document is disposed.
                 */
                this.disposed = new wijmo.Event();
                /**
                 * Occurs when the pageSettings property value changes.
                 */
                this.pageSettingsChanged = new wijmo.Event();
                /**
                 * Occurs when the document is loaded completed.
                 */
                this.loadCompleted = new wijmo.Event();
                this._service = this._createDocumentService(options);
            }
            _DocumentSource.prototype._updateIsLoadCompleted = function (value) {
                if (this._isLoadCompleted === value) {
                    return;
                }
                this._isLoadCompleted = value;
                this.onLoadCompleted();
            };
            _DocumentSource.prototype._updateIsDisposed = function (value) {
                if (this._isDisposed === value) {
                    return;
                }
                this._isDisposed = value;
                this.onDisposed();
            };
            _DocumentSource.prototype._checkHasOutlines = function (responseData) {
                throw 'It is an abstract method, please implement it.';
            };
            _DocumentSource.prototype._checkIsLoadCompleted = function (responseData) {
                throw 'It is an abstract method, please implement it.';
            };
            _DocumentSource.prototype._checkIsDisposed = function (responseData) {
                throw 'It is an abstract method, please implement it.';
            };
            Object.defineProperty(_DocumentSource.prototype, "errors", {
                /** Gets the errors of this document. */
                get: function () {
                    return this._errors;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_DocumentSource.prototype, "isLoadCompleted", {
                /** Gets a boolean value indicates if this document is loaded completed. */
                get: function () {
                    return this._isLoadCompleted;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_DocumentSource.prototype, "isDisposed", {
                /** Gets a boolean value indicates if this document is disposed. */
                get: function () {
                    return this._isDisposed;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_DocumentSource.prototype, "pageSettings", {
                /** Gets the page settings. */
                get: function () {
                    return this._pageSettings;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Raises the @see:pageSettingsChanged event.
             *
             * @param e The event arguments.
             */
            _DocumentSource.prototype.onPageSettingsChanged = function (e) {
                this.pageSettingsChanged.raise(this, e || new wijmo.EventArgs());
            };
            /**
             * Raises the @see:loadCompleted event.
             *
             * @param e The event arguments.
             */
            _DocumentSource.prototype.onLoadCompleted = function (e) {
                this.loadCompleted.raise(this, e || new wijmo.EventArgs());
            };
            /**
             * Raises the @see:disposed event.
             *
             * @param e The event arguments.
             */
            _DocumentSource.prototype.onDisposed = function (e) {
                this.disposed.raise(this, e || new wijmo.EventArgs());
            };
            /**
             * Set the page settings.
             *
             * @param pageSettings page settings for the report.
             * @return An @see:IPromise object with @see:_IPageSettings.
             */
            _DocumentSource.prototype.setPageSettings = function (pageSettings) {
                var _this = this;
                return this._innerService.setPageSettings(pageSettings).then(function (v) { return _this._updatePageSettings(v.pageSettings); });
            };
            _DocumentSource.prototype._updatePageSettings = function (newValue) {
                this._pageSettings = newValue;
                this.onPageSettingsChanged();
            };
            Object.defineProperty(_DocumentSource.prototype, "_innerService", {
                get: function () {
                    return this._service;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_DocumentSource.prototype, "supportedExportProviders", {
                /**
                 * Gets the array of @see:_IExportProvider of current document source.
                 */
                get: function () {
                    return this._supportedExportProviders;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_DocumentSource.prototype, "hasOutlines", {
                /** Gets a boolean value indicats whether current document has outlines or not. */
                get: function () {
                    return this._hasOutlines;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_DocumentSource.prototype, "pageCount", {
                /** Gets the page count of the document. */
                get: function () {
                    return this._pageCount;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_DocumentSource.prototype, "service", {
                /** Gets the service information of the document source.*/
                get: function () {
                    return this._service;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Gets the bookmark by bookmark's name.
             *
             * @param name Name of the bookmark to look for.
             * @return An @see:IPromise object with @see:_IDocumentPosition.
             */
            _DocumentSource.prototype.getBookmark = function (name) {
                return this._innerService.getBookmark(name);
            };
            /**
             * Gets an array of outline of current document source.
             *
             * @return An @see:IPromise object with an @see:_IOutlineNode array.
             */
            _DocumentSource.prototype.getOutlines = function () {
                return this._innerService.getOutlines();
            };
            /**
             * Disposes the current document source instance from service.
             *
             * @return An @see:IPromise object with information of document.
             */
            _DocumentSource.prototype.dispose = function () {
                var _this = this;
                return this._innerService.dispose().then(function (v) { return _this._update(v); });
            };
            /**
             * Loads the current document source from service.
             *
             * @return An @see:IPromise object with information of document.
             */
            _DocumentSource.prototype.load = function () {
                var _this = this;
                return this._innerService.load().then(function (v) { return _this._update(v); });
            };
            _DocumentSource.prototype._update = function (data) {
                this._hasOutlines = this._checkHasOutlines(data);
                this._updatePageCount(this._getPageCount(data));
                this._updateIsLoadCompleted(this._checkIsLoadCompleted(data));
                this._updateIsDisposed(this._checkIsDisposed(data));
            };
            _DocumentSource.prototype._getPageCount = function (data) {
                throw 'It is an abstract method, please implement it.';
            };
            _DocumentSource.prototype._updatePageCount = function (value) {
                if (this._pageCount === value) {
                    return;
                }
                this._pageCount = value;
                this.onPageCountChanged();
            };
            /**
             * Gets the document status.
             */
            _DocumentSource.prototype.getDocumentStatus = function () {
                return this._innerService.getDocumentStatus();
            };
            _DocumentSource.prototype._createDocumentService = function (options) {
                throw 'It is an abstract method, please implement it.';
            };
            /**
             * Raises the @see:pageCountChanged event.
             *
             * @param e @see:EventArgs that contains the event data.
             */
            _DocumentSource.prototype.onPageCountChanged = function (e) {
                this.pageCountChanged.raise(this, e || new wijmo.EventArgs());
            };
            /**
             * Prints the current report.
             */
            _DocumentSource.prototype.print = function () {
                var doc = new wijmo.PrintDocument({
                    title: 'Document'
                });
                this.renderToFilter({ format: 'html' }).then(function (xhr) {
                    doc.append(xhr.responseText);
                    doc.print();
                });
            };
            /**
             * Renders the report into an export filter object.
             *
             * @param options Options of the export.
             * @return An @see:IPromise object with XMLHttpRequest.
             */
            _DocumentSource.prototype.renderToFilter = function (options) {
                return this._innerService.renderToFilter(options);
            };
            /**
             * Gets the file url of rendering the report into an export filter object.
             *
             * @param options Options of the export.
             * @return The file url of rendering the report into an export filter object.
             */
            _DocumentSource.prototype.getRenderToFilterUrl = function (options) {
                return this._innerService.getRenderToFilterUrl(options);
            };
            /**
             * Gets an array of Search by search options.
             *
             * @param text The text to match.
             * @param matchCase Whether to ignore case during the match.
             * @param wholeWord Whether to match the whole word, or just match the text.
             * @return An @see:IPromise object with an @see:_ISearchResult array.
             */
            _DocumentSource.prototype.search = function (text, matchCase, wholeWord) {
                return this._innerService.search(text, matchCase, wholeWord);
            };
            return _DocumentSource;
        }());
        viewer._DocumentSource = _DocumentSource;
        var _DocumentService = (function () {
            function _DocumentService(options) {
                this._url = '';
                this._url = options.serviceUrl || '';
                this._documentPath = options.filePath;
            }
            Object.defineProperty(_DocumentService.prototype, "serviceUrl", {
                get: function () {
                    return this._url;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_DocumentService.prototype, "filePath", {
                get: function () {
                    return this._documentPath;
                },
                enumerable: true,
                configurable: true
            });
            _DocumentService.prototype.getDocumentStatus = function () {
                throw 'It is an abstract method, please implement it.';
            };
            // Return an IPromise with IPageSettings.
            _DocumentService.prototype.setPageSettings = function (pageSettings) {
                throw 'It is an abstract method, please implement it.';
            };
            // Return an IPromise with _IDocumentPosition.
            _DocumentService.prototype.getBookmark = function (name) {
                throw 'It is an abstract method, please implement it.';
            };
            _DocumentService.prototype.load = function () {
                throw 'It is an abstract method, please implement it.';
            };
            _DocumentService.prototype.dispose = function () {
                throw 'It is an abstract method, please implement it.';
            };
            // Return an IPromise with _IOutlineNode[].
            _DocumentService.prototype.getOutlines = function () {
                throw 'It is an abstract method, please implement it.';
            };
            // Return an IPromise with XMLHttpRequest.
            _DocumentService.prototype.renderToFilter = function (options) {
                throw 'It is an abstract method, please implement it.';
            };
            // Return an IPromise with _ISearchResult[].
            _DocumentService.prototype.search = function (text, matchCase, wholeWord) {
                throw 'It is an abstract method, please implement it.';
            };
            _DocumentService.prototype.getRenderToFilterUrl = function (options) {
                throw 'It is an abstract method, please implement it.';
            };
            return _DocumentService;
        }());
        viewer._DocumentService = _DocumentService;
        function _pageSettingsJsonReviver(k, v) {
            if (wijmo.isString(v)) {
                if (k === 'width' || k === 'height' || _strEndsWith(k, 'Margin')) {
                    return new _Unit(v);
                }
            }
            return v;
        }
        viewer._pageSettingsJsonReviver = _pageSettingsJsonReviver;
        function _strEndsWith(text, suffix) {
            return text.slice(-suffix.length) === suffix;
        }
        viewer._strEndsWith = _strEndsWith;
        function _appendQueryString(url, queries) {
            queries = queries || {};
            var queryList = [];
            for (var k in queries) {
                queryList.push(k + '=' + queries[k]);
            }
            if (queryList.length) {
                var sep = url.indexOf('?') < 0 ? '?' : '&';
                url += sep + queryList.join('&');
            }
            return url;
        }
        viewer._appendQueryString = _appendQueryString;
        function _joinUrl() {
            var data = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                data[_i - 0] = arguments[_i];
            }
            var urlParts = [];
            for (var i = 0, l = data.length; i < l; i++) {
                var item = data[i];
                if (typeof item !== 'string') {
                    urlParts = urlParts.concat(_joinStringUrl(item));
                }
                else {
                    urlParts.push(_prepareStringUrl(item).join('/'));
                }
            }
            return urlParts.join('/');
        }
        viewer._joinUrl = _joinUrl;
        function _joinStringUrl(data) {
            var urlParts = [];
            for (var i = 0, l = data.length; i < l; i++) {
                urlParts = urlParts.concat(_prepareStringUrl(data[i]));
            }
            return urlParts;
        }
        viewer._joinStringUrl = _joinStringUrl;
        function _prepareStringUrl(data) {
            var paramParts = data.split('/');
            if (paramParts.length > 0 && !paramParts[paramParts.length - 1].length) {
                paramParts.splice(paramParts.length - 1);
            }
            return paramParts;
        }
        viewer._prepareStringUrl = _prepareStringUrl;
        function _httpRequest(url, settings) {
            if (!settings || !settings.cache) {
                url = _disableCache(url);
            }
            if (settings && settings.data) {
                var method = (settings.method || 'GET').toUpperCase();
                if (method !== 'GET') {
                    var dataStr = _objToParams(settings.data);
                    if (dataStr != null) {
                        settings.data = dataStr;
                        if (!settings.requestHeaders) {
                            settings.requestHeaders = { 'Content-Type': 'application/x-www-form-urlencoded' };
                        }
                    }
                }
            }
            return wijmo.httpRequest(url, settings);
        }
        viewer._httpRequest = _httpRequest;
        function _objToParams(obj) {
            var paramList = [];
            obj = obj || {};
            for (var key in obj) {
                if (obj[key] !== null && obj[key] !== undefined) {
                    if (wijmo.isArray(obj[key])) {
                        if (obj[key].length > 0) {
                            for (var i = 0; i < obj[key].length; i++) {
                                paramList.push(key + '=' + obj[key][i]);
                            }
                        }
                        else {
                            paramList.push(key + '=');
                        }
                    }
                    else {
                        paramList.push(key + '=' + obj[key]);
                    }
                }
            }
            return paramList.join('&');
        }
        viewer._objToParams = _objToParams;
        function _disableCache(url) {
            return url + (url.indexOf('?') == -1 ? '?' : '&') + '_=' + new Date().getTime();
        }
        viewer._disableCache = _disableCache;
        function _twipToPixel(value) {
            return _Unit.convertValue(value, _UnitType.Twip, _UnitType.Dip);
        }
        viewer._twipToPixel = _twipToPixel;
        /**
         * Enumerates units of measurement.
         */
        (function (_UnitType) {
            /** Specifies the document unit (1/300 inch) as the unit of measure. */
            _UnitType[_UnitType["Document"] = 0] = "Document";
            /** Specifies the inch as the unit of measure. */
            _UnitType[_UnitType["Inch"] = 1] = "Inch";
            /** Specifies the millimeter as the unit of measure. */
            _UnitType[_UnitType["Mm"] = 2] = "Mm";
            /** Specifies the pica unit (1/6 inch) as the unit of measure. */
            _UnitType[_UnitType["Pica"] = 3] = "Pica";
            /** Specifies a printer's point (1/72 inch) as the unit of measure. */
            _UnitType[_UnitType["Point"] = 4] = "Point";
            /** Specifies a twip (1/1440 inch) as the unit of measure. */
            _UnitType[_UnitType["Twip"] = 5] = "Twip";
            /** Specifies a hundredths of an inch as the unit of measure. */
            _UnitType[_UnitType["InHs"] = 6] = "InHs";
            /** Specifies 1/75 inch as the unit of measure. */
            _UnitType[_UnitType["Display"] = 7] = "Display";
            /** Specifies centimetre's as the unit of measure. */
            _UnitType[_UnitType["Cm"] = 8] = "Cm";
            /** Specifies DIP's 1/96 inch as the unit of measure. */
            _UnitType[_UnitType["Dip"] = 9] = "Dip";
        })(viewer._UnitType || (viewer._UnitType = {}));
        var _UnitType = viewer._UnitType;
        /** A utility structure specifying some values related to units of measurement. */
        var _Unit = (function () {
            /**
             * Creates a _Unit instance.
             * @param value The value.
             * @param units The units of the value. If it is not passed, it is Dip for default.
             */
            function _Unit(value, units) {
                if (units === void 0) { units = _UnitType.Dip; }
                _Unit._initUnitTypeDic();
                if (wijmo.isObject(value)) {
                    var obj = value;
                    value = obj.value;
                    units = obj.units;
                }
                else if (wijmo.isString(value)) {
                    var numValue = parseFloat(value);
                    if (!isNaN(numValue)) {
                        units = _Unit._unitTypeDic[value.substr(numValue.toString().length)];
                        value = numValue;
                    }
                }
                this._value = value;
                this._units = units;
                this._valueInPixel = _Unit.convertValue(value, units, _UnitType.Dip);
            }
            _Unit._initUnitTypeDic = function () {
                if (_Unit._unitTypeDic) {
                    return;
                }
                _Unit._unitTypeDic = {};
                for (var k in _Unit._unitTypes) {
                    _Unit._unitTypeDic[_Unit._unitTypeDic[k] = _Unit._unitTypes[k]] = k;
                }
            };
            Object.defineProperty(_Unit.prototype, "value", {
                /** Gets the value of the current unit. */
                get: function () {
                    return this._value;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_Unit.prototype, "units", {
                /** Gets the unit of measurement of the current unit. */
                get: function () {
                    return this._units;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_Unit.prototype, "valueInPixel", {
                /** Gets the value in pixel. */
                get: function () {
                    return this._valueInPixel;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Convert to string.
             *
             * @return The string of converting result.
             */
            _Unit.prototype.toString = function () {
                return _Unit.toString(this);
            };
            /**
             * Convert the unit to string.
             *
             * @param unit The unit used to convert.
             * @return The string of converting result.
             */
            _Unit.toString = function (unit) {
                return unit.value + _Unit._unitTypeDic[unit.units];
            };
            /**
             * Convert the value from one kind of unit to another.
             *
             * @param value The value used to convert.
             * @param from The units of the value.
             * @param to The units which is converted to.
             * @return The number of converting result.
             */
            _Unit.convertValue = function (value, from, to) {
                if (from === to) {
                    return value;
                }
                var valueInInch;
                switch (from) {
                    case _UnitType.Document:
                        valueInInch = value / _Unit._DocumentUnitsPerInch;
                        break;
                    case _UnitType.Inch:
                        valueInInch = value;
                        break;
                    case _UnitType.Mm:
                        valueInInch = value / _Unit._MmPerInch;
                        break;
                    case _UnitType.Pica:
                        valueInInch = value / _Unit._PicaPerInch;
                        break;
                    case _UnitType.Point:
                        valueInInch = value / _Unit._PointsPerInch;
                        break;
                    case _UnitType.Twip:
                        valueInInch = value / _Unit._TwipsPerInch;
                        break;
                    case _UnitType.InHs:
                        valueInInch = value / 100;
                        break;
                    case _UnitType.Display:
                        valueInInch = value / _Unit._DisplayPerInch;
                        break;
                    case _UnitType.Cm:
                        valueInInch = value / _Unit._CmPerInch;
                        break;
                    case _UnitType.Dip:
                        valueInInch = value / _Unit._DipPerInch;
                        break;
                    default:
                        throw 'Invalid from _UnitType: ' + from;
                }
                switch (to) {
                    case _UnitType.Document:
                        return valueInInch * _Unit._DocumentUnitsPerInch;
                    case _UnitType.Inch:
                        return valueInInch;
                    case _UnitType.Mm:
                        return valueInInch * _Unit._MmPerInch;
                    case _UnitType.Pica:
                        return valueInInch * _Unit._PicaPerInch;
                    case _UnitType.Point:
                        return valueInInch * _Unit._PointsPerInch;
                    case _UnitType.Twip:
                        return valueInInch * _Unit._TwipsPerInch;
                    case _UnitType.InHs:
                        return valueInInch * 100;
                    case _UnitType.Display:
                        return valueInInch * _Unit._DisplayPerInch;
                    case _UnitType.Cm:
                        return valueInInch * _Unit._CmPerInch;
                    case _UnitType.Dip:
                        return valueInInch * _Unit._DipPerInch;
                    default:
                        throw 'Invalid to _UnitType: ' + to;
                }
            };
            /** Millimeters per inch. */
            _Unit._MmPerInch = 25.4;
            /** Document units per inch. */
            _Unit._DocumentUnitsPerInch = 300;
            /** Points per inch. */
            _Unit._PointsPerInch = 72;
            /** Twips per inch. */
            _Unit._TwipsPerInch = 1440;
            /** Picas per inch. */
            _Unit._PicaPerInch = 6;
            /** Centimeters per inch. */
            _Unit._CmPerInch = _Unit._MmPerInch / 10;
            /** Display units per inch. */
            _Unit._DisplayPerInch = 75;
            /** DIP units per inch. */
            _Unit._DipPerInch = 96;
            _Unit._unitTypes = {
                doc: _UnitType.Document,
                in: _UnitType.Inch,
                mm: _UnitType.Mm,
                pc: _UnitType.Pica,
                pt: _UnitType.Point,
                tw: _UnitType.Twip,
                inhs: _UnitType.InHs,
                dsp: _UnitType.Display,
                cm: _UnitType.Cm,
                dip: _UnitType.Dip
            };
            return _Unit;
        }());
        viewer._Unit = _Unit;
        var _Promise = (function () {
            function _Promise() {
                this._callbacks = [];
            }
            _Promise.prototype.then = function (onFulfilled, onRejected) {
                this._callbacks.push({ onFulfilled: onFulfilled, onRejected: onRejected });
                return this;
            };
            _Promise.prototype.catch = function (onRejected) {
                return this.then(null, onRejected);
            };
            _Promise.prototype.resolve = function (value) {
                var _this = this;
                setTimeout(function () {
                    try {
                        _this.onFulfilled(value);
                    }
                    catch (e) {
                        _this.onRejected(e);
                    }
                }, 0);
            };
            _Promise.prototype.reject = function (reason) {
                var _this = this;
                setTimeout(function () {
                    _this.onRejected(reason);
                }, 0);
            };
            _Promise.prototype.onFulfilled = function (value) {
                var callback;
                while (callback = this._callbacks.shift()) {
                    if (callback.onFulfilled) {
                        var newValue = callback.onFulfilled(value);
                        if (newValue !== undefined) {
                            value = newValue;
                        }
                    }
                }
            };
            _Promise.prototype.onRejected = function (reason) {
                var callback;
                while (callback = this._callbacks.shift()) {
                    if (callback.onRejected) {
                        var value = callback.onRejected(reason);
                        this.onFulfilled(value);
                        return;
                    }
                }
                throw reason;
            };
            return _Promise;
        }());
        viewer._Promise = _Promise;
        var _CompositedPromise = (function (_super) {
            __extends(_CompositedPromise, _super);
            function _CompositedPromise(promises) {
                _super.call(this);
                this._promises = promises;
                this._init();
            }
            _CompositedPromise.prototype._init = function () {
                var _this = this;
                if (!this._promises || !this._promises.length) {
                    this.reject('No promises in current composited promise.');
                    return;
                }
                var length = this._promises.length, i = 0, values = [], isRejected = false;
                this._promises.some(function (p) {
                    p.then(function (v) {
                        if (isRejected) {
                            return;
                        }
                        values.push(v);
                        if (++i >= length) {
                            _this.resolve(values);
                        }
                    }).catch(function (r) {
                        isRejected = true;
                        _this.reject(r);
                    });
                    return isRejected;
                });
            };
            return _CompositedPromise;
        }(_Promise));
        viewer._CompositedPromise = _CompositedPromise;
        /**
         * Specifies the standard paper sizes.
         */
        (function (_PaperKind) {
            /**  The paper size is defined by the user.*/
            _PaperKind[_PaperKind["Custom"] = 0] = "Custom";
            /** Letter paper (8.5 in. by 11 in.).*/
            _PaperKind[_PaperKind["Letter"] = 1] = "Letter";
            /** Letter small paper (8.5 in. by 11 in.).*/
            _PaperKind[_PaperKind["LetterSmall"] = 2] = "LetterSmall";
            /** Tabloid paper (11 in. by 17 in.).*/
            _PaperKind[_PaperKind["Tabloid"] = 3] = "Tabloid";
            /** Ledger paper (17 in. by 11 in.).*/
            _PaperKind[_PaperKind["Ledger"] = 4] = "Ledger";
            /** Legal paper (8.5 in. by 14 in.).*/
            _PaperKind[_PaperKind["Legal"] = 5] = "Legal";
            /** Statement paper (5.5 in. by 8.5 in.).*/
            _PaperKind[_PaperKind["Statement"] = 6] = "Statement";
            /** Executive paper (7.25 in. by 10.5 in.).*/
            _PaperKind[_PaperKind["Executive"] = 7] = "Executive";
            /** A3 paper (297 mm by 420 mm).*/
            _PaperKind[_PaperKind["A3"] = 8] = "A3";
            /** A4 paper (210 mm by 297 mm).*/
            _PaperKind[_PaperKind["A4"] = 9] = "A4";
            /** A4 small paper (210 mm by 297 mm).*/
            _PaperKind[_PaperKind["A4Small"] = 10] = "A4Small";
            /** A5 paper (148 mm by 210 mm).*/
            _PaperKind[_PaperKind["A5"] = 11] = "A5";
            /** B4 paper (250 mm by 353 mm).*/
            _PaperKind[_PaperKind["B4"] = 12] = "B4";
            /** B5 paper (176 mm by 250 mm).*/
            _PaperKind[_PaperKind["B5"] = 13] = "B5";
            /** Folio paper (8.5 in. by 13 in.).*/
            _PaperKind[_PaperKind["Folio"] = 14] = "Folio";
            /**  Quarto paper (215 mm by 275 mm).*/
            _PaperKind[_PaperKind["Quarto"] = 15] = "Quarto";
            /** Standard paper (10 in. by 14 in.).*/
            _PaperKind[_PaperKind["Standard10x14"] = 16] = "Standard10x14";
            /** Standard paper (11 in. by 17 in.).*/
            _PaperKind[_PaperKind["Standard11x17"] = 17] = "Standard11x17";
            /** Note paper (8.5 in. by 11 in.).*/
            _PaperKind[_PaperKind["Note"] = 18] = "Note";
            /**  #9 envelope (3.875 in. by 8.875 in.).*/
            _PaperKind[_PaperKind["Number9Envelope"] = 19] = "Number9Envelope";
            /** #10 envelope (4.125 in. by 9.5 in.).*/
            _PaperKind[_PaperKind["Number10Envelope"] = 20] = "Number10Envelope";
            /** #11 envelope (4.5 in. by 10.375 in.).*/
            _PaperKind[_PaperKind["Number11Envelope"] = 21] = "Number11Envelope";
            /** #12 envelope (4.75 in. by 11 in.).*/
            _PaperKind[_PaperKind["Number12Envelope"] = 22] = "Number12Envelope";
            /** #14 envelope (5 in. by 11.5 in.).*/
            _PaperKind[_PaperKind["Number14Envelope"] = 23] = "Number14Envelope";
            /** C paper (17 in. by 22 in.).*/
            _PaperKind[_PaperKind["CSheet"] = 24] = "CSheet";
            /** D paper (22 in. by 34 in.).*/
            _PaperKind[_PaperKind["DSheet"] = 25] = "DSheet";
            /** E paper (34 in. by 44 in.).*/
            _PaperKind[_PaperKind["ESheet"] = 26] = "ESheet";
            /** DL envelope (110 mm by 220 mm).*/
            _PaperKind[_PaperKind["DLEnvelope"] = 27] = "DLEnvelope";
            /**  C5 envelope (162 mm by 229 mm).*/
            _PaperKind[_PaperKind["C5Envelope"] = 28] = "C5Envelope";
            /** C3 envelope (324 mm by 458 mm). */
            _PaperKind[_PaperKind["C3Envelope"] = 29] = "C3Envelope";
            /** C4 envelope (229 mm by 324 mm). */
            _PaperKind[_PaperKind["C4Envelope"] = 30] = "C4Envelope";
            /** C6 envelope (114 mm by 162 mm). */
            _PaperKind[_PaperKind["C6Envelope"] = 31] = "C6Envelope";
            /** C65 envelope (114 mm by 229 mm). */
            _PaperKind[_PaperKind["C65Envelope"] = 32] = "C65Envelope";
            /** B4 envelope (250 mm by 353 mm). */
            _PaperKind[_PaperKind["B4Envelope"] = 33] = "B4Envelope";
            /** B5 envelope (176 mm by 250 mm). */
            _PaperKind[_PaperKind["B5Envelope"] = 34] = "B5Envelope";
            /**  B6 envelope (176 mm by 125 mm). */
            _PaperKind[_PaperKind["B6Envelope"] = 35] = "B6Envelope";
            /** Italy envelope (110 mm by 230 mm). */
            _PaperKind[_PaperKind["ItalyEnvelope"] = 36] = "ItalyEnvelope";
            /** Monarch envelope (3.875 in. by 7.5 in.). */
            _PaperKind[_PaperKind["MonarchEnvelope"] = 37] = "MonarchEnvelope";
            /** 6 3/4 envelope (3.625 in. by 6.5 in.). */
            _PaperKind[_PaperKind["PersonalEnvelope"] = 38] = "PersonalEnvelope";
            /** US standard fanfold (14.875 in. by 11 in.). */
            _PaperKind[_PaperKind["USStandardFanfold"] = 39] = "USStandardFanfold";
            /** German standard fanfold (8.5 in. by 12 in.). */
            _PaperKind[_PaperKind["GermanStandardFanfold"] = 40] = "GermanStandardFanfold";
            /** German legal fanfold (8.5 in. by 13 in.). */
            _PaperKind[_PaperKind["GermanLegalFanfold"] = 41] = "GermanLegalFanfold";
            /** ISO B4 (250 mm by 353 mm). */
            _PaperKind[_PaperKind["IsoB4"] = 42] = "IsoB4";
            /** Japanese postcard (100 mm by 148 mm). */
            _PaperKind[_PaperKind["JapanesePostcard"] = 43] = "JapanesePostcard";
            /** Standard paper (9 in. by 11 in.). */
            _PaperKind[_PaperKind["Standard9x11"] = 44] = "Standard9x11";
            /** Standard paper (10 in. by 11 in.). */
            _PaperKind[_PaperKind["Standard10x11"] = 45] = "Standard10x11";
            /** Standard paper (15 in. by 11 in.). */
            _PaperKind[_PaperKind["Standard15x11"] = 46] = "Standard15x11";
            /** Invitation envelope (220 mm by 220 mm). */
            _PaperKind[_PaperKind["InviteEnvelope"] = 47] = "InviteEnvelope";
            /** Letter extra paper (9.275 in. by 12 in.). This value is specific to the PostScript
              *  driver and is used only by Linotronic printers in order to conserve paper. */
            _PaperKind[_PaperKind["LetterExtra"] = 50] = "LetterExtra";
            /** Legal extra paper (9.275 in. by 15 in.). This value is specific to the PostScript
              *  driver and is used only by Linotronic printers in order to conserve paper. */
            _PaperKind[_PaperKind["LegalExtra"] = 51] = "LegalExtra";
            /** Tabloid extra paper (11.69 in. by 18 in.). This value is specific to the
             *   PostScript driver and is used only by Linotronic printers in order to conserve
             *   paper. */
            _PaperKind[_PaperKind["TabloidExtra"] = 52] = "TabloidExtra";
            /** A4 extra paper (236 mm by 322 mm). This value is specific to the PostScript
             *    driver and is used only by Linotronic printers to help save paper. */
            _PaperKind[_PaperKind["A4Extra"] = 53] = "A4Extra";
            /** Letter transverse paper (8.275 in. by 11 in.). */
            _PaperKind[_PaperKind["LetterTransverse"] = 54] = "LetterTransverse";
            /** A4 transverse paper (210 mm by 297 mm). */
            _PaperKind[_PaperKind["A4Transverse"] = 55] = "A4Transverse";
            /** Letter extra transverse paper (9.275 in. by 12 in.). */
            _PaperKind[_PaperKind["LetterExtraTransverse"] = 56] = "LetterExtraTransverse";
            /** SuperA/SuperA/A4 paper (227 mm by 356 mm). */
            _PaperKind[_PaperKind["APlus"] = 57] = "APlus";
            /** SuperB/SuperB/A3 paper (305 mm by 487 mm). */
            _PaperKind[_PaperKind["BPlus"] = 58] = "BPlus";
            /** Letter plus paper (8.5 in. by 12.69 in.). */
            _PaperKind[_PaperKind["LetterPlus"] = 59] = "LetterPlus";
            /** A4 plus paper (210 mm by 330 mm). */
            _PaperKind[_PaperKind["A4Plus"] = 60] = "A4Plus";
            /** A5 transverse paper (148 mm by 210 mm). */
            _PaperKind[_PaperKind["A5Transverse"] = 61] = "A5Transverse";
            /** JIS B5 transverse paper (182 mm by 257 mm). */
            _PaperKind[_PaperKind["B5Transverse"] = 62] = "B5Transverse";
            /** A3 extra paper (322 mm by 445 mm). */
            _PaperKind[_PaperKind["A3Extra"] = 63] = "A3Extra";
            /** A5 extra paper (174 mm by 235 mm). */
            _PaperKind[_PaperKind["A5Extra"] = 64] = "A5Extra";
            /** ISO B5 extra paper (201 mm by 276 mm). */
            _PaperKind[_PaperKind["B5Extra"] = 65] = "B5Extra";
            /** A2 paper (420 mm by 594 mm). */
            _PaperKind[_PaperKind["A2"] = 66] = "A2";
            /** A3 transverse paper (297 mm by 420 mm). */
            _PaperKind[_PaperKind["A3Transverse"] = 67] = "A3Transverse";
            /** A3 extra transverse paper (322 mm by 445 mm). */
            _PaperKind[_PaperKind["A3ExtraTransverse"] = 68] = "A3ExtraTransverse";
            /** Japanese double postcard (200 mm by 148 mm). Requires Windows 98, Windows
             *    NT 4.0, or later. */
            _PaperKind[_PaperKind["JapaneseDoublePostcard"] = 69] = "JapaneseDoublePostcard";
            /** A6 paper (105 mm by 148 mm). Requires Windows 98, Windows NT 4.0, or later. */
            _PaperKind[_PaperKind["A6"] = 70] = "A6";
            /** Japanese Kaku #2 envelope. Requires Windows 98, Windows NT 4.0, or later. */
            _PaperKind[_PaperKind["JapaneseEnvelopeKakuNumber2"] = 71] = "JapaneseEnvelopeKakuNumber2";
            /** Japanese Kaku #3 envelope. Requires Windows 98, Windows NT 4.0, or later. */
            _PaperKind[_PaperKind["JapaneseEnvelopeKakuNumber3"] = 72] = "JapaneseEnvelopeKakuNumber3";
            /** Japanese Chou #3 envelope. Requires Windows 98, Windows NT 4.0, or later. */
            _PaperKind[_PaperKind["JapaneseEnvelopeChouNumber3"] = 73] = "JapaneseEnvelopeChouNumber3";
            /** Japanese Chou #4 envelope. Requires Windows 98, Windows NT 4.0, or later. */
            _PaperKind[_PaperKind["JapaneseEnvelopeChouNumber4"] = 74] = "JapaneseEnvelopeChouNumber4";
            /** Letter rotated paper (11 in. by 8.5 in.). */
            _PaperKind[_PaperKind["LetterRotated"] = 75] = "LetterRotated";
            /** A3 rotated paper (420 mm by 297 mm). */
            _PaperKind[_PaperKind["A3Rotated"] = 76] = "A3Rotated";
            /**  A4 rotated paper (297 mm by 210 mm). Requires Windows 98, Windows NT 4.0,
             *   or later. */
            _PaperKind[_PaperKind["A4Rotated"] = 77] = "A4Rotated";
            /** A5 rotated paper (210 mm by 148 mm). Requires Windows 98, Windows NT 4.0,
             *   or later. */
            _PaperKind[_PaperKind["A5Rotated"] = 78] = "A5Rotated";
            /** JIS B4 rotated paper (364 mm by 257 mm). Requires Windows 98, Windows NT
             *   4.0, or later. */
            _PaperKind[_PaperKind["B4JisRotated"] = 79] = "B4JisRotated";
            /** JIS B5 rotated paper (257 mm by 182 mm). Requires Windows 98, Windows NT
             *   4.0, or later. */
            _PaperKind[_PaperKind["B5JisRotated"] = 80] = "B5JisRotated";
            /** Japanese rotated postcard (148 mm by 100 mm). Requires Windows 98, Windows
             *   NT 4.0, or later.*/
            _PaperKind[_PaperKind["JapanesePostcardRotated"] = 81] = "JapanesePostcardRotated";
            /** Japanese rotated double postcard (148 mm by 200 mm). Requires Windows 98,
             *  Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["JapaneseDoublePostcardRotated"] = 82] = "JapaneseDoublePostcardRotated";
            /** A6 rotated paper (148 mm by 105 mm). Requires Windows 98, Windows NT 4.0,
             *   or later.*/
            _PaperKind[_PaperKind["A6Rotated"] = 83] = "A6Rotated";
            /** Japanese rotated Kaku #2 envelope. Requires Windows 98, Windows NT 4.0, or
             *   later.*/
            _PaperKind[_PaperKind["JapaneseEnvelopeKakuNumber2Rotated"] = 84] = "JapaneseEnvelopeKakuNumber2Rotated";
            /** Japanese rotated Kaku #3 envelope. Requires Windows 98, Windows NT 4.0, or
             *   later.*/
            _PaperKind[_PaperKind["JapaneseEnvelopeKakuNumber3Rotated"] = 85] = "JapaneseEnvelopeKakuNumber3Rotated";
            /** Japanese rotated Chou #3 envelope. Requires Windows 98, Windows NT 4.0, or
             *   later.*/
            _PaperKind[_PaperKind["JapaneseEnvelopeChouNumber3Rotated"] = 86] = "JapaneseEnvelopeChouNumber3Rotated";
            /** Japanese rotated Chou #4 envelope. Requires Windows 98, Windows NT 4.0, or
             *   later.*/
            _PaperKind[_PaperKind["JapaneseEnvelopeChouNumber4Rotated"] = 87] = "JapaneseEnvelopeChouNumber4Rotated";
            /** JIS B6 paper (128 mm by 182 mm). Requires Windows 98, Windows NT 4.0, or
             *   later.*/
            _PaperKind[_PaperKind["B6Jis"] = 88] = "B6Jis";
            /** JIS B6 rotated paper (182 mm by 128 mm). Requires Windows 98, Windows NT
             *   4.0, or later.*/
            _PaperKind[_PaperKind["B6JisRotated"] = 89] = "B6JisRotated";
            /** Standard paper (12 in. by 11 in.). Requires Windows 98, Windows NT 4.0, or
             *   later.*/
            _PaperKind[_PaperKind["Standard12x11"] = 90] = "Standard12x11";
            /** Japanese You #4 envelope. Requires Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["JapaneseEnvelopeYouNumber4"] = 91] = "JapaneseEnvelopeYouNumber4";
            /** Japanese You #4 rotated envelope. Requires Windows 98, Windows NT 4.0, or
             *   later.*/
            _PaperKind[_PaperKind["JapaneseEnvelopeYouNumber4Rotated"] = 92] = "JapaneseEnvelopeYouNumber4Rotated";
            /** People's Republic of China 16K paper (146 mm by 215 mm). Requires Windows
                98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["Prc16K"] = 93] = "Prc16K";
            /** People's Republic of China 32K paper (97 mm by 151 mm). Requires Windows
                98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["Prc32K"] = 94] = "Prc32K";
            /** People's Republic of China 32K big paper (97 mm by 151 mm). Requires Windows
             *   98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["Prc32KBig"] = 95] = "Prc32KBig";
            /** People's Republic of China #1 envelope (102 mm by 165 mm). Requires Windows
             *   98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber1"] = 96] = "PrcEnvelopeNumber1";
            /** People's Republic of China #2 envelope (102 mm by 176 mm). Requires Windows
                98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber2"] = 97] = "PrcEnvelopeNumber2";
            /** People's Republic of China #3 envelope (125 mm by 176 mm). Requires Windows
             *   98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber3"] = 98] = "PrcEnvelopeNumber3";
            /** People's Republic of China #4 envelope (110 mm by 208 mm). Requires Windows
             *   98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber4"] = 99] = "PrcEnvelopeNumber4";
            /** People's Republic of China #5 envelope (110 mm by 220 mm). Requires Windows
                98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber5"] = 100] = "PrcEnvelopeNumber5";
            /** People's Republic of China #6 envelope (120 mm by 230 mm). Requires Windows
             *   98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber6"] = 101] = "PrcEnvelopeNumber6";
            /** People's Republic of China #7 envelope (160 mm by 230 mm). Requires Windows
             *   98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber7"] = 102] = "PrcEnvelopeNumber7";
            /** People's Republic of China #8 envelope (120 mm by 309 mm). Requires Windows
             *   98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber8"] = 103] = "PrcEnvelopeNumber8";
            /** People's Republic of China #9 envelope (229 mm by 324 mm). Requires Windows
             *   98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber9"] = 104] = "PrcEnvelopeNumber9";
            /** People's Republic of China #10 envelope (324 mm by 458 mm). Requires Windows
             *   98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber10"] = 105] = "PrcEnvelopeNumber10";
            /** People's Republic of China 16K rotated paper (146 mm by 215 mm). Requires
             *   Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["Prc16KRotated"] = 106] = "Prc16KRotated";
            /** People's Republic of China 32K rotated paper (97 mm by 151 mm). Requires
             *   Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["Prc32KRotated"] = 107] = "Prc32KRotated";
            /** People's Republic of China 32K big rotated paper (97 mm by 151 mm). Requires
             *   Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["Prc32KBigRotated"] = 108] = "Prc32KBigRotated";
            /**  People's Republic of China #1 rotated envelope (165 mm by 102 mm). Requires
             *    Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber1Rotated"] = 109] = "PrcEnvelopeNumber1Rotated";
            /** People's Republic of China #2 rotated envelope (176 mm by 102 mm). Requires
             *  Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber2Rotated"] = 110] = "PrcEnvelopeNumber2Rotated";
            /** People's Republic of China #3 rotated envelope (176 mm by 125 mm). Requires
             *   Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber3Rotated"] = 111] = "PrcEnvelopeNumber3Rotated";
            /** People's Republic of China #4 rotated envelope (208 mm by 110 mm). Requires
             *   Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber4Rotated"] = 112] = "PrcEnvelopeNumber4Rotated";
            /** People's Republic of China Envelope #5 rotated envelope (220 mm by 110 mm).
             *   Requires Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber5Rotated"] = 113] = "PrcEnvelopeNumber5Rotated";
            /** People's Republic of China #6 rotated envelope (230 mm by 120 mm). Requires
             *   Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber6Rotated"] = 114] = "PrcEnvelopeNumber6Rotated";
            /** People's Republic of China #7 rotated envelope (230 mm by 160 mm). Requires
                Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber7Rotated"] = 115] = "PrcEnvelopeNumber7Rotated";
            /** People's Republic of China #8 rotated envelope (309 mm by 120 mm). Requires
             *   Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber8Rotated"] = 116] = "PrcEnvelopeNumber8Rotated";
            /** People's Republic of China #9 rotated envelope (324 mm by 229 mm). Requires
             *   Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber9Rotated"] = 117] = "PrcEnvelopeNumber9Rotated";
            /** People's Republic of China #10 rotated envelope (458 mm by 324 mm). Requires
             *   Windows 98, Windows NT 4.0, or later.*/
            _PaperKind[_PaperKind["PrcEnvelopeNumber10Rotated"] = 118] = "PrcEnvelopeNumber10Rotated";
        })(viewer._PaperKind || (viewer._PaperKind = {}));
        var _PaperKind = viewer._PaperKind;
    })(viewer = wijmo.viewer || (wijmo.viewer = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=_DocumentSource.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wijmo;
(function (wijmo) {
    var viewer;
    (function (viewer) {
        'use strict';
        /**
         * Defines an abstract report class.
         */
        var _ReportBase = (function (_super) {
            __extends(_ReportBase, _super);
            function _ReportBase() {
                _super.apply(this, arguments);
                this._hasParameters = false;
                this._status = _ExecutionStatus.NotFound;
                /**
                * Occurs when the status property value changes.
                */
                this.statusChanged = new wijmo.Event();
            }
            Object.defineProperty(_ReportBase.prototype, "executionDateTime", {
                /** The execution date time of the running report. */
                get: function () {
                    return this._executionDateTime;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_ReportBase.prototype, "hasParameters", {
                /** Gets a boolean value indicates whether current report has parameters. */
                get: function () {
                    return this._hasParameters;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_ReportBase.prototype, "status", {
                /** Gets the status of current report. */
                get: function () {
                    return this._status;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_ReportBase.prototype, "expiredDateTime", {
                /** The expired date time of the cache. */
                get: function () {
                    return this._expiredDateTime;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Loads the current document source from service.
             *
             * @return An @see:wijmo.viewer.IPromise object with @see:_IExecutionInfo.
             */
            _ReportBase.prototype.load = function () {
                return _super.prototype.load.call(this);
            };
            _ReportBase.prototype._getPageCount = function (data) {
                return data.completedPageCount;
            };
            _ReportBase.prototype._checkHasOutlines = function (data) {
                return data.hasOutlines;
            };
            _ReportBase.prototype._updateStatus = function (newValue) {
                if (this._status === newValue) {
                    return;
                }
                this._status = newValue;
                this.onStatusChanged();
            };
            /**
             * Stops the rendering of current document source.
             *
             * @return An @see:wijmo.viewer.IPromise object with @see:_IExecutionInfo.
             */
            _ReportBase.prototype.cancel = function () {
                var _this = this;
                return this._innerService.cancel().then(function (v) { return _this._update(v); });
            };
            /**
             * Raises the @see:statusChanged event.
             *
             * @param e The event arguments.
             */
            _ReportBase.prototype.onStatusChanged = function (e) {
                this.statusChanged.raise(this, e || new wijmo.EventArgs());
            };
            /**
             * Gets the status of cached report in server.
             *
             * @return An @see:wijmo.viewer.IPromise object with @see:_IExecutionInfo.
             */
            _ReportBase.prototype.getDocumentStatus = function () {
                var _this = this;
                return this._innerService.getDocumentStatus().then(function (v) { return _this._update(v); });
            };
            /**
             * Remove the current document source from service.
             *
             * @return An @see:wijmo.viewer.IPromise object with @see:_IExecutionInfo.
             */
            _ReportBase.prototype.dispose = function () {
                return _super.prototype.dispose.call(this);
            };
            /**
             * Set the parameters.
             *
             * @param parameters Parameters for the report.
             * @return An @see:wijmo.viewer.IPromise object with an @see:_IParameter array.
             */
            _ReportBase.prototype.setParameters = function (parameters) {
                var _this = this;
                return this._innerService.setParameters(parameters).then(function (v) { return void (_this._parameters = v); });
            };
            /**
             * Gets an array of parameter of current document source.
             *
             * @return An @see:wijmo.viewer.IPromise object with an @see:_IParameter array.
             */
            _ReportBase.prototype.getParameters = function () {
                var _this = this;
                if (this._parameters && this._parameters.length) {
                    var promise = new viewer._Promise();
                    promise.resolve(this._parameters);
                    return promise;
                }
                return this._innerService.getParameters().then(function (v) { return void (_this._parameters = v); });
            };
            _ReportBase.prototype._update = function (data) {
                this._updatePageSettings(data.pageSettings);
                this._executionDateTime = data.executionDateTime;
                this._expiredDateTime = data.expiredDateTime;
                this._hasParameters = !!data.hasParameters;
                this._updateStatus(data.status);
                _super.prototype._update.call(this, data);
            };
            _ReportBase.prototype._checkIsLoadCompleted = function (data) {
                return data.status === _ExecutionStatus.Completed
                    || data.status === _ExecutionStatus.Stopped
                    || data.status === _ExecutionStatus.Cleared;
            };
            _ReportBase.prototype._checkIsDisposed = function (data) {
                return this.isDisposed || data.status === _ExecutionStatus.Cleared;
            };
            _ReportBase.prototype._createDocumentService = function (options) {
                throw 'It is an abstract method, please implement it.';
            };
            Object.defineProperty(_ReportBase.prototype, "_innerService", {
                get: function () {
                    return this.service;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * Render the report.
             *
             * @return An @see:wijmo.viewer.IPromise object with @see:_IExecutionInfo.
             */
            _ReportBase.prototype.render = function () {
                var _this = this;
                return this._innerService.render().then(function (v) { return _this._update(v); });
            };
            return _ReportBase;
        }(viewer._DocumentSource));
        viewer._ReportBase = _ReportBase;
        var _ReportService = (function (_super) {
            __extends(_ReportService, _super);
            function _ReportService() {
                _super.apply(this, arguments);
            }
            //Returns IPromise with _IExecutionInfo.
            _ReportService.prototype.cancel = function () {
                throw 'It is an abstract method, please implement it.';
            };
            //Returns IPromise with _IExecutionInfo.
            _ReportService.prototype.dispose = function () {
                throw 'It is an abstract method, please implement it.';
            };
            //Returns IPromise with _IExecutionInfo.
            _ReportService.prototype.load = function () {
                throw 'It is an abstract method, please implement it.';
            };
            //Returns IPromise with _IExecutionInfo.
            _ReportService.prototype.render = function () {
                throw 'It is an abstract method, please implement it.';
            };
            //Returns IPromise with _IParameter[].
            _ReportService.prototype.setParameters = function (parameters) {
                throw 'It is an abstract method, please implement it.';
            };
            //Returns IPromise with _IParameter[].
            _ReportService.prototype.getParameters = function () {
                throw 'It is an abstract method, please implement it.';
            };
            //Returns IPromise with _IExecutionInfo.
            _ReportService.prototype.getDocumentStatus = function () {
                throw 'It is an abstract method, please implement it.';
            };
            return _ReportService;
        }(viewer._DocumentService));
        viewer._ReportService = _ReportService;
        function _parseExecutionInfo(json) {
            return JSON.parse(json, _executionInfoJsonReviver);
        }
        viewer._parseExecutionInfo = _parseExecutionInfo;
        function _executionInfoJsonReviver(k, v) {
            if (wijmo.isString(v)) {
                if (viewer._strEndsWith(k, 'DateTime')) {
                    return new Date(v);
                }
                if (k === 'width' || k === 'height' || viewer._strEndsWith(k, 'Margin')) {
                    return new viewer._Unit(v);
                }
            }
            return v;
        }
        viewer._executionInfoJsonReviver = _executionInfoJsonReviver;
        /**
         * Describes the status of the Execution.
         */
        (function (_ExecutionStatus) {
            /**
             * The report is Loaded.
             */
            _ExecutionStatus[_ExecutionStatus["Loaded"] = 0] = "Loaded";
            /**
             * The report is rendering.
             */
            _ExecutionStatus[_ExecutionStatus["Rendering"] = 1] = "Rendering";
            /**
             * The report is rendered.
             */
            _ExecutionStatus[_ExecutionStatus["Completed"] = 2] = "Completed";
            /**
             * The report rendering is stopped.
             */
            _ExecutionStatus[_ExecutionStatus["Stopped"] = 3] = "Stopped";
            /**
             * The report is cleared.
             */
            _ExecutionStatus[_ExecutionStatus["Cleared"] = 4] = "Cleared";
            /**
             * The execution is not found.
             */
            _ExecutionStatus[_ExecutionStatus["NotFound"] = 5] = "NotFound";
        })(viewer._ExecutionStatus || (viewer._ExecutionStatus = {}));
        var _ExecutionStatus = viewer._ExecutionStatus;
        /**
         * Specifies the type of a value.
         */
        (function (_ParameterType) {
            /**
             * Bool type.
             */
            _ParameterType[_ParameterType["Boolean"] = 0] = "Boolean";
            /**
             * Date time type.
             */
            _ParameterType[_ParameterType["DateTime"] = 1] = "DateTime";
            /**
             * Time type.
             */
            _ParameterType[_ParameterType["Time"] = 2] = "Time";
            /**
             * Int type.
             */
            _ParameterType[_ParameterType["Integer"] = 3] = "Integer";
            /**
             * Float type.
             */
            _ParameterType[_ParameterType["Float"] = 4] = "Float";
            /**
             * String type
             */
            _ParameterType[_ParameterType["String"] = 5] = "String";
        })(viewer._ParameterType || (viewer._ParameterType = {}));
        var _ParameterType = viewer._ParameterType;
    })(viewer = wijmo.viewer || (wijmo.viewer = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=_ReportBase.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var wijmo;
(function (wijmo) {
    var viewer;
    (function (viewer) {
        'use strict';
        /**
         * Defines the _FlexReport class.
         */
        var _FlexReport = (function (_super) {
            __extends(_FlexReport, _super);
            /**
             * Creates a _FlexReport instance.
             *
             * @param options The flex report service information.
             */
            function _FlexReport(options) {
                _super.call(this, options);
            }
            Object.defineProperty(_FlexReport.prototype, "reportName", {
                /** Gets the report name. */
                get: function () {
                    return this._innerService ? this._innerService.reportName : null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_FlexReport.prototype, "supportedExportProviders", {
                /**
                 * Gets the array of @see:wijmo.viewer._IExportProvider of current DocumentSource.
                 */
                get: function () {
                    return _FlexReport._supportedExportProviders;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(_FlexReport.prototype, "_innerService", {
                get: function () {
                    return this.service;
                },
                enumerable: true,
                configurable: true
            });
            _FlexReport.prototype._createDocumentService = function (options) {
                return new _FlexReportService(options);
            };
            /**
             * Gets the report names defined in the specified report file.
             *
             * @param serviceUrl The root url of service.
             * @param reportFilePath The report file path.
             * @return An @see:wijmo.viewer.IPromise object with a string array which contians the report names.
             */
            _FlexReport.getReportNames = function (serviceUrl, reportFilePath) {
                return _FlexReportService.getReportNames(serviceUrl, reportFilePath);
            };
            _FlexReport._supportedExportProviders = [{
                    'name': 'Adobe PDF', 'format': 'pdf',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'embedFonts', 'type': 'bool', 'defaultValue': 'false' },
                        { 'name': 'pdfACompatible', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'useCompression', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'useOutlines', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'allowCopyContent', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'allowEditAnnotations', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'allowEditContent', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'allowPrint', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'ownerPassword', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'userPassword', 'type': 'string', 'defaultValue': '' },
                        {
                            'name': 'encryptionType', 'type': 'string', 'defaultValue': 'Standard40',
                            'allowedValues': ['NotPermit', 'Standard40', 'Standard128', 'Aes128']
                        },
                        {
                            'name': 'outputRange', 'type': 'string', 'defaultValue': 'All',
                            'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...']
                        },
                        { 'name': 'none', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'title', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'author', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'subject', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'creator', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'keywords', 'type': 'string', 'defaultValue': '' }]
                },
                {
                    'name': 'HTML document', 'format': 'html',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'paged', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'outputRange', 'type': 'string', 'defaultValue': 'All', 'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...'] }]
                },
                {
                    'name': 'RTF document', 'format': 'rtf',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'paged', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'outputRange', 'type': 'string', 'defaultValue': 'All', 'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...'] },
                        { 'name': 'openXml', 'type': 'bool', 'defaultValue': 'false' }, { 'name': 'shapesWord2007Compatible', 'type': 'bool', 'defaultValue': 'true' }]
                },
                {
                    'name': 'Open XML Word', 'format': 'docx',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'paged', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'outputRange', 'type': 'string', 'defaultValue': 'All', 'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...'] },
                        { 'name': 'openXml', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'none', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'title', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'author', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'operator', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'manager', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'company', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'subject', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'comment', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'creationTime', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'revisionTime', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'creator', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'keywords', 'type': 'string', 'defaultValue': '' }]
                },
                {
                    'name': 'Microsoft Excel', 'format': 'xls',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'tolerance', 'type': 'int', 'defaultValue': '0' },
                        { 'name': 'pictureLayer', 'type': 'bool', 'defaultValue': 'false' },
                        { 'name': 'openXml', 'type': 'bool', 'defaultValue': 'false' },
                        { 'name': 'sheetName', 'type': 'string', 'defaultValue': 'Sheet1' },
                        { 'name': 'none', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'author', 'type': 'string', 'defaultValue': '' }]
                },
                {
                    'name': 'Open XML Excel', 'format': 'xlsx',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'tolerance', 'type': 'int', 'defaultValue': '0' },
                        { 'name': 'pictureLayer', 'type': 'bool', 'defaultValue': 'false' },
                        { 'name': 'openXml', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'sheetName', 'type': 'string', 'defaultValue': 'Sheet1' },
                        { 'name': 'none', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'author', 'type': 'string', 'defaultValue': '' }]
                },
                {
                    'name': 'Compressed metafiles', 'format': 'zip',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'metafileType', 'type': 'string', 'defaultValue': 'EmfPlusDual', 'allowedValues': ['EmfOnly', 'EmfPlusOnly', 'EmfPlusDual'] },
                        { 'name': 'outputRange', 'type': 'string', 'defaultValue': 'All', 'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...'] }]
                },
                {
                    'name': 'TIFF images', 'format': 'tiff',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'monochrome', 'type': 'bool', 'defaultValue': 'true' },
                        { 'name': 'resolution', 'type': 'float', 'defaultValue': '300' },
                        { 'name': 'outputRange', 'type': 'string', 'defaultValue': 'All', 'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...'] }]
                },
                {
                    'name': 'BMP images', 'format': 'bmp',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'resolution', 'type': 'float', 'defaultValue': '300' },
                        { 'name': 'outputRange', 'type': 'string', 'defaultValue': 'All', 'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...'] }]
                },
                {
                    'name': 'PNG images', 'format': 'png',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'resolution', 'type': 'float', 'defaultValue': '300' },
                        { 'name': 'outputRange', 'type': 'string', 'defaultValue': 'All', 'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...'] }]
                },
                {
                    'name': 'JPEG images', 'format': 'jpg',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'resolution', 'type': 'float', 'defaultValue': '300' },
                        { 'name': 'outputRange', 'type': 'string', 'defaultValue': 'All', 'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...'] }]
                },
                {
                    'name': 'GIF images', 'format': 'gif',
                    'optionsDescription': [{ 'name': 'fileName', 'type': 'string', 'defaultValue': '' },
                        { 'name': 'resolution', 'type': 'float', 'defaultValue': '300' },
                        { 'name': 'outputRange', 'type': 'string', 'defaultValue': 'All', 'allowedValues': ['All', 'AllInverted', '{number}', '{number}-{number}', '{number},{number}...'] }]
                }];
            return _FlexReport;
        }(viewer._ReportBase));
        viewer._FlexReport = _FlexReport;
        var _FlexReportService = (function (_super) {
            __extends(_FlexReportService, _super);
            // Create a document service with options.
            function _FlexReportService(options) {
                _super.call(this, options);
                this._reportName = options.reportName;
            }
            // Gets the report names defined in the specified report file.
            //
            // @param serviceUrl The root url of service.
            // @param reportUrl The report url of service.
            // @return An @see:IPromise object with a string array of report names.
            _FlexReportService.getReportNames = function (serviceUrl, reportFilePath) {
                var promise = new viewer._Promise(), url = viewer._joinUrl(serviceUrl, _FlexReportService._apiPrefix, _FlexReportService._reportsController, reportFilePath);
                viewer._httpRequest(url, {
                    success: function (xhr) {
                        promise.resolve(JSON.parse(xhr.responseText));
                    }
                });
                return promise;
            };
            Object.defineProperty(_FlexReportService.prototype, "reportName", {
                // Gets the report name.
                get: function () {
                    return this._reportName;
                },
                enumerable: true,
                configurable: true
            });
            _FlexReportService.prototype.getBookmark = function (name) {
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                viewer._httpRequest(this._getReportCacheUrl(_FlexReportService._bookmarkAction), {
                    success: function (xhr) {
                        promise.resolve(JSON.parse(xhr.responseText));
                    },
                    data: { 'name': name }
                });
                return promise;
            };
            _FlexReportService.prototype.getDocumentStatus = function () {
                return this._getReportCache();
            };
            _FlexReportService.prototype._getReportCache = function () {
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                viewer._httpRequest(this._getReportCacheUrl(), {
                    success: function (xhr) {
                        promise.resolve(viewer._parseExecutionInfo(xhr.responseText));
                    }
                });
                return promise;
            };
            _FlexReportService.prototype.getParameters = function () {
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                viewer._httpRequest(this._getReportCacheUrl(_FlexReportService._parametersAction), {
                    success: function (xhr) {
                        promise.resolve(JSON.parse(xhr.responseText));
                    }
                });
                return promise;
            };
            _FlexReportService.prototype._getReportUrl = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                return viewer._joinUrl(this.serviceUrl, _FlexReportService._apiPrefix, _FlexReportService._reportController, this.filePath, this.reportName, params);
            };
            _FlexReportService.prototype._getReportCacheUrl = function () {
                var params = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    params[_i - 0] = arguments[_i];
                }
                return viewer._joinUrl(this.serviceUrl, _FlexReportService._apiPrefix, _FlexReportService._reportCacheController, this._cacheId, params);
            };
            _FlexReportService.prototype._checkReportController = function (promise) {
                if (this.serviceUrl != null && this.reportName && this.filePath) {
                    return true;
                }
                if (promise) {
                    promise.reject(_FlexReportService._invalidReportControllerError);
                }
                return false;
            };
            _FlexReportService.prototype._checkReportCacheController = function (promise) {
                if (this.serviceUrl != null && this._cacheId) {
                    return true;
                }
                if (promise) {
                    promise.reject(_FlexReportService._invalidReportCacheControllerError);
                }
                return false;
            };
            _FlexReportService.prototype.render = function () {
                var _this = this;
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                viewer._httpRequest(this._getReportCacheUrl(_FlexReportService._renderAction), {
                    success: function (xhr) {
                        promise.resolve(viewer._parseExecutionInfo(xhr.responseText));
                    }
                });
                return promise.then(function (v) {
                    _this._status = v.status;
                });
            };
            _FlexReportService.prototype.load = function () {
                var _this = this;
                var promise = new viewer._Promise();
                if (!this._checkReportController(promise)) {
                    return promise;
                }
                viewer._httpRequest(this._getReportUrl(_FlexReportService._loadAction), {
                    success: function (xhr) {
                        promise.resolve(viewer._parseExecutionInfo(xhr.responseText));
                    }
                });
                return promise.then(function (v) {
                    _this._cacheId = v.cacheId;
                    _this._status = v.status;
                });
            };
            _FlexReportService.prototype.cancel = function () {
                var _this = this;
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                if (this._status !== viewer._ExecutionStatus.Rendering) {
                    promise.reject('Cannot execute cancel when the report is not rendering.');
                    return promise;
                }
                viewer._httpRequest(this._getReportCacheUrl(_FlexReportService._cancelAction), {
                    success: function (xhr) {
                        promise.resolve(viewer._parseExecutionInfo(xhr.responseText));
                    }
                });
                promise.then(function (v) { return void (_this._status = v.status); });
                return promise;
            };
            _FlexReportService.prototype.dispose = function () {
                var _this = this;
                var promise = new viewer._Promise();
                // The reason of not passing promise to _checkReportCacheController is:
                // do nothing When cacheId is not generated.
                if (!this._checkReportCacheController()) {
                    return promise;
                }
                viewer._httpRequest(this._getReportCacheUrl(), {
                    method: 'DELETE',
                    success: function (xhr) {
                        var info = JSON.parse(xhr.responseText);
                        _this._status = info.status;
                        _this._cacheId = '';
                        promise.resolve(info);
                    }
                });
                return promise;
            };
            _FlexReportService.prototype.getOutlines = function () {
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                viewer._httpRequest(this._getReportCacheUrl(_FlexReportService._outlinesAction), {
                    success: function (xhr) {
                        promise.resolve(JSON.parse(xhr.responseText));
                    }
                });
                return promise;
            };
            _FlexReportService.prototype.renderToFilter = function (options) {
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                viewer._httpRequest(this.getRenderToFilterUrl(options), {
                    cache: true,
                    success: function (xhr) {
                        promise.resolve(xhr);
                    }
                });
                return promise;
            };
            _FlexReportService.prototype.getRenderToFilterUrl = function (options) {
                if (!this._checkReportCacheController()) {
                    return null;
                }
                var url = this._getReportCacheUrl(_FlexReportService._exportAction);
                url = viewer._disableCache(url);
                return viewer._appendQueryString(url, options);
            };
            _FlexReportService.prototype.search = function (text, matchCase, wholeWord) {
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                viewer._httpRequest(this._getReportCacheUrl(_FlexReportService._searchAction), {
                    success: function (xhr) {
                        promise.resolve(JSON.parse(xhr.responseText));
                    },
                    data: {
                        'text': text,
                        'matchCase': !!matchCase,
                        'wholeWord': !!wholeWord
                    }
                });
                return promise;
            };
            _FlexReportService.prototype.setPageSettings = function (pageSettings) {
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                ;
                var url = this._getReportCacheUrl(_FlexReportService._pageSettingsAction);
                viewer._httpRequest(url, {
                    method: 'POST',
                    data: pageSettings,
                    success: function (xhr) {
                        promise.resolve(JSON.parse(xhr.responseText, viewer._pageSettingsJsonReviver));
                    }
                });
                return promise;
            };
            _FlexReportService.prototype.setParameters = function (parameters) {
                var promise = new viewer._Promise();
                if (!this._checkReportCacheController(promise)) {
                    return promise;
                }
                ;
                var url = this._getReportCacheUrl(_FlexReportService._parametersAction);
                viewer._httpRequest(url, {
                    method: 'POST',
                    data: parameters,
                    success: function (xhr) {
                        promise.resolve(JSON.parse(xhr.responseText));
                    }
                });
                return promise;
            };
            _FlexReportService._apiPrefix = 'api';
            _FlexReportService._renderAction = 'render';
            _FlexReportService._loadAction = 'load';
            _FlexReportService._searchAction = 'search';
            _FlexReportService._cancelAction = 'stop';
            _FlexReportService._outlinesAction = 'outlines';
            _FlexReportService._exportAction = 'export';
            _FlexReportService._reportsController = 'reports';
            _FlexReportService._reportController = 'report';
            _FlexReportService._reportCacheController = 'reportcache';
            _FlexReportService._parametersAction = 'parameters';
            _FlexReportService._bookmarkAction = 'bookmark';
            _FlexReportService._pageSettingsAction = 'pagesettings';
            _FlexReportService._invalidReportControllerError = 'Cannot call the service without service url, document path or report name.';
            _FlexReportService._invalidReportCacheControllerError = 'Cannot call the service when service url is not set or the report is not loaded.';
            return _FlexReportService;
        }(viewer._DocumentService));
        viewer._FlexReportService = _FlexReportService;
    })(viewer = wijmo.viewer || (wijmo.viewer = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=_FlexReport.js.map
