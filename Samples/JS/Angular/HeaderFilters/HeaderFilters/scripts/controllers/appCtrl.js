'use strict';

// get reference to app module
var app = angular.module('app');

// add controller to app module
app.controller('appCtrl', function appCtrl($scope) {

    // customize FlexGrid control headers
    $scope.flex = null;
    $scope.$watch('flex', function () {
        var flex = $scope.flex;
        if (flex) {

            // enable merging
            flex.allowMerging = wijmo.grid.AllowMerging.ColumnHeaders;

            // add extra column header row
            var row = new wijmo.grid.Row(),
                ch = flex.columnHeaders;

            // initialize header cells
            row.allowMerging = true;
            for (var i = 0; i < flex.columns.length; i++) {
                flex.columns[i].allowMerging = true;
            }
            ch.rows.insert(0, row);
            setHeader(ch, 0, 0, 1, 0, 'Sales');
            setHeader(ch, 0, 1, 0, 2, 'Book');
            setHeader(ch, 0, 3, 0, 3, 'Price');
            setHeader(ch, 1, 3, 1, 3, '');
            setHeader(ch, 0, 4, 0, 5, 'Delivery Terms');
            setHeader(ch, 1, 4, 1, 4, 'In Store');
            setHeader(ch, 1, 5, 1, 5, 'Shipping');
            setHeader(ch, 0, 6, 1, 6, 'Bestseller');
            setHeader(ch, 0, 7, 1, 7, 'Publication Date');
            ch.rows[1].height = ch.rows.defaultSize + 12;

            // enable custom item formatter
            flex.itemFormatter = itemFormatter;

            // create DataMap for 'shipping' column
            var shippingValues = [
                { key: 1, val: '1 hour' },
                { key: 12, val: '12 hours' },
                { key: 24, val: '24 hours' },
                { key: 24, val: '1 day' },
                { key: 48, val: '2 days' },
                { key: 7 * 24, val: '1 week' },
                { key: -1, val: 'pickup' },
                { key: null, val: 'na' }
            ];
            flex.columns.getColumn('shipping').dataMap = new wijmo.grid.DataMap(shippingValues, 'key', 'val');
        }
    });

    // expose book data as a CollectionView
    $scope.books = new wijmo.collections.CollectionView(getBooks());

    // keep list of authors for filtering
    $scope.authors = new wijmo.collections.ObservableArray();
    $scope.books.collectionChanged.addHandler(function () {
        updateAuthors();
    });
    updateAuthors();

    // update author list
    function updateAuthors() {
        var authors = $scope.authors;
        authors.beginUpdate();

        // populate avoiding duplicates
        authors.clear();
        var items = $scope.books.sourceCollection;
        for (var i = 0; i < items.length; i++) {
            var a = items[i].author;
            if (authors.indexOf(a) < 0) {
                authors.push(a);
            }
        }

        // sort authors
        authors.sort();

        // insert item to remove filter at the first position
        authors.splice(0, 0, '(all authors)');

        // done updating
        authors.endUpdate();
    }

    // initialize filter
    $scope.filter = {
        title: '',
        author: '',
        price: null
    };

    // apply filter
    $scope.books.filter = function (item) {

        // filter by title, author, price
        var ft = $scope.filter.title;
        if (ft && item.title.toLowerCase().indexOf(ft.toLowerCase()) < 0) {
            return false;
        }
        var fa = $scope.filter.author;
        if (fa && fa.indexOf('(all') < 0 && item.author.toLowerCase().indexOf(fa.toLowerCase()) < 0) {
            return false;
        }
        var fp = $scope.filter.price;
        if (fp != null && item.price > fp) {
            return false;
        }

        // all passed
        return true;
    };

    // watch filter, refresh collection 300ms after the last change
    var toFilter = null;
    function updateFilter(part, value) {
        if ($scope.filter[part] != value) {

            // update filter
            $scope.filter[part] = value;

            // reschedule update
            if (toFilter) clearTimeout(toFilter);
            toFilter = setTimeout(function () {

                // refresh view, keep focused element
                var focused = document.activeElement;
                $scope.books.refresh();
                setTimeout(function () {
                    if (focused) {
                        focused.focus();
                    }
                }, 10);
            }, 600);
        }
    }

    // title filter
    var cmbTitle = new wijmo.input.ComboBox(document.createElement('div'), {
        placeholder: 'title',
        textChanged: function (s, e) {
            updateFilter('title', s.text);
        }
    });
    stopPropagation(cmbTitle);
    watchFocus(cmbTitle, 'title');

    // author filter
    var cmbAuth = new wijmo.input.ComboBox(document.createElement('div'), {
        placeholder: 'author',
        itemsSource: $scope.authors,
        textChanged: function (s, e) {
            updateFilter('author', s.text);
        }
    });
    stopPropagation(cmbAuth);
    watchFocus(cmbAuth, 'author');

    // price filter
    var inPrice = new wijmo.input.InputNumber(document.createElement('div'), {
        required: false,
        value: null,
        placeholder: 'max price',
        valueChanged: function (s, e) {
            updateFilter('price', s.value);
        }
    });
    stopPropagation(inPrice);
    watchFocus(inPrice, 'price');

    // stop propagation of mouse and keyboard events in order to
    // prevent the grid from responding to these events.
    function stopPropagation(ctl) {
        ctl.hostElement.style.fontWeight = 'normal';
        var events = ['mousedown', 'keypress', 'keydown'];
        for (var i = 0; i < events.length; i++) {
            ctl.hostElement.addEventListener(events[i], function (e) {
                e.stopPropagation();
            });
        }
    }

    // scroll the grid when the header editors get the focus
    function watchFocus(ctl, binding) {
        ctl.hostElement.addEventListener('focus', function () {
            var col = $scope.flex.columns.getColumn(binding);
            $scope.flex.scrollIntoView(-1, col.index);
        }, true);
    }

    // item formatter
    function itemFormatter(panel, r, c, cell) {
        var flex = panel.grid,
            row = flex.rows[r],
            col = flex.columns[c],
            sel = flex.selection,
            editCell = flex.activeEditor && sel.row == r && sel.col == c;

        // add filters to column headers
        if (panel.cellType == wijmo.grid.CellType.ColumnHeader && r == 1) {
            switch (col.binding) {

                // title filter
                case 'title':
                    cell.innerHTML = '';
                    cell.appendChild(cmbTitle.hostElement);
                    break;

                // author filter
                case 'author':
                    cell.innerHTML = '';
                    cell.appendChild(cmbAuth.hostElement);
                    break;

                // price filter
                case 'price':
                    cell.innerHTML = '';
                    cell.appendChild(inPrice.hostElement);
                    break;
            }
        }

        // customize data cells
        if (panel.cellType == wijmo.grid.CellType.Cell && !editCell) {
            switch (col.binding) {

                // use links for titles
                case 'title':
                    cell.innerHTML = wijmo.format('<a href="{url}" target="_blank">{title}</a>', row.dataItem);
                    break;

                // use color and icons for sales
                case 'sales':
                    cell.innerHTML = wijmo.format('<span style="color:{color}"><span class="wj-glyph-{dir}" style="float:left;margin:6px"></span> {sales:n0}</span>', {
                        color: row.dataItem.sales > 0 ? 'green' : 'red',
                        dir: row.dataItem.sales > 0 ? 'up' : 'down',
                        sales: row.dataItem.sales
                    });
                    break;
            }
        }
    }

    // set cell header
    function setHeader(p, r1, c1, r2, c2, hdr) {
        for (var r = r1; r <= r2; r++) {
            for (var c = c1; c <= c2; c++) {
                p.setCellData(r, c, hdr);
            }
        }
    }

    // create book data
    function getBooks() {
        return [
            { sales: -100, title: 'Boris Godunov', url: 'http://en.wikipedia.org/wiki/Boris_Godunov', author: 'Alexandr Pushkin', price: 7.15, instore: true, shipping: 1, bestseller: false, pub: new Date(1999, 1, 1) },
            { sales: -200, title: 'The Rainmaker', url: 'http://en.wikipedia.org/wiki/The_Rainmaker_(John_Grisham)', author: 'John Grisham', price: 7.99, instore: false, shipping: 48, bestseller: false, pub: new Date(2001, 12, 1) },
            { sales: 350, title: 'The Green Mile', url: 'http://en.wikipedia.org/wiki/The_Green_Mile_(novel)', author: 'Stephen King', price: 11.1, instore: true, shipping: 24, bestseller: false, pub: new Date(1992, 1, 1) },
            { sales: 700, title: 'Misery', url: 'http://en.wikipedia.org/wiki/Misery_(novel)', author: 'Stephen King', price: 7.7, instore: false, shipping: null, bestseller: false, pub: new Date(2003, 1, 1) },
            { sales: -1200, title: 'The Dark Half', url: 'http://en.wikipedia.org/wiki/The_Dark_Half', author: 'Stephen King', price: 0, instore: false, shipping: 48, bestseller: false, pub: new Date(1999, 10, 30) },
            { sales: 1500, title: 'The Partner', url: 'http://en.wikipedia.org/wiki/The_Partner', author: 'John Grisham', price: 12.99, instore: true, shipping: 48, bestseller: true, pub: new Date(2005, 1, 1) },
            { sales: 500, title: 'It', url: 'http://en.wikipedia.org/wiki/It_(novel)', author: 'Stephen King', price: 9.7, instore: false, shipping: null, bestseller: false, pub: new Date(2001, 10, 15) },
            { sales: 400, title: 'Cousin Bette', url: 'http://en.wikipedia.org/wiki/Cousin_Bette', author: 'Honore de Balzac', price: 0, instore: true, shipping: 1, bestseller: false, pub: new Date(1991, 12, 1) },
            { sales: 1500, title: 'The Testament', url: 'http://en.wikipedia.org/wiki/The_Testament', author: 'John Grisham', price: 19.1, instore: true, shipping: 48, bestseller: false, pub: new Date(1999, 12, 17) },
            { sales: 800, title: 'Eugene Onegin', url: 'http://en.wikipedia.org/wiki/Eugene_Onegin', author: 'Alexandr Pushkin', price: 11.2, instore: true, shipping: 24, bestseller: false, pub: new Date(2005, 9, 27) },
            { sales: -300, title: 'Dark Avenues', url: 'http://en.wikipedia.org/wiki/Dark_Avenues', author: 'Ivan Bunin', price: 14.96, instore: true, shipping: 1, bestseller: false, pub: new Date(2008, 10, 1) },
            { sales: 150, title: 'Father Goriot', url: 'http://en.wikipedia.org/wiki/Le_P%C3%A8re_Goriot', author: 'Honore de Balzac', price: 9.99, instore: false, shipping: 48, bestseller: false, pub: new Date(2010, 6, 6) },
            { sales: 650, title: 'The Captain\'s Daughter', url: 'http://en.wikipedia.org/wiki/The_Captain\'s_Daughter', author: 'Alexandr Pushkin', price: 10.21, instore: false, shipping: 48, bestseller: false, pub: new Date(2001, 3, 1) },
            { sales: -100, title: 'Hamlet', url: 'http://en.wikipedia.org/wiki/Hamlet', author: 'William Shakespeare', price: 5.99, instore: true, shipping: 1, bestseller: false, pub: new Date(2003, 4, 15) },
            { sales: 1300, title: 'The Village', url: 'http://en.wikipedia.org/wiki/The_Village_(Bunin_novel)', author: 'Ivan Bunin', price: 11.66, instore: false, shipping: 24, bestseller: false, pub: new Date(2010, 1, 2) },
            { sales: 700, title: 'The Winter\'s', url: 'http://en.wikipedia.org/wiki/The_Winter', author: 'William Shakespeare', price: 19.31, instore: true, shipping: 1, bestseller: false, pub: new Date(2010, 2, 12) },
            { sales: 250, title: 'The Black Sheep', url: 'http://en.wikipedia.org/wiki/Black_sheep', author: 'Honore de Balzac', price: 16, instore: true, shipping: 1, bestseller: false, pub: new Date(1976, 8, 28) },
            { sales: -80, title: 'Lost Illusions', url: 'http://en.wikipedia.org/wiki/Illusions_perdues', author: 'Honore de Balzac', price: 8.1, instore: true, shipping: null, bestseller: false, pub: new Date(2010, 7, 10) }
        ];
    }
});
