(function () {
    // create collectionview, grid, the navigation buttons' elements
    var cvPaging = new wijmo.collections.CollectionView(getData(55)),
        pagingGrid = new wijmo.grid.FlexGrid('#pagingGrid'),
        btnFirstPage = document.getElementById('btnMoveToFirstPage'),
        btnPreviousPage = document.getElementById('btnMoveToPreviousPage'),
        btnNextPage = document.getElementById('btnMoveToNextPage'),
        btnLastPage = document.getElementById('btnMoveToLastPage'),
        btnCurrentPage = document.getElementById('btnCurrentPage');

    // initialize grid
    pagingGrid.initialize({
        isReadOnly: true,
        itemsSource: cvPaging
    });

    // initialize the page size with 10.
    cvPaging.pageSize = 10;

    // initialize the input value.
    document.getElementById('pagingInput').value = cvPaging.pageSize;

    // init the button status.
    updateNaviagteButtons();

    // update the collectionview's pagesize according to the user's input.
    document.getElementById('pagingInput').addEventListener('blur', function () {
        var pagesize = this.value;

        if (!pagesize) {
            pagesize = 0;
        } else {
            pagesize = wijmo.Globalize.parseInt(pagesize);
        }

        cvPaging.pageSize = pagesize;
        updateNaviagteButtons();
    });

    // update the navigation buttons' status
    function updateNaviagteButtons() {
        if (cvPaging.pageSize <= 0) {
            document.getElementById('naviagtionPage').style.display = 'none';
            return;
        }

        document.getElementById('naviagtionPage').style.display = 'block';

        if (cvPaging.pageIndex === 0) {
            btnFirstPage.setAttribute('disabled', 'disabled');
            btnPreviousPage.setAttribute('disabled', 'disabled');
            btnNextPage.removeAttribute('disabled');
            btnLastPage.removeAttribute('disabled');
        } else if (cvPaging.pageIndex === (cvPaging.pageCount - 1)) {
            btnFirstPage.removeAttribute('disabled');
            btnPreviousPage.removeAttribute('disabled');
            btnLastPage.setAttribute('disabled', 'disabled');
            btnNextPage.setAttribute('disabled', 'disabled');
        } else {
            btnFirstPage.removeAttribute('disabled');
            btnPreviousPage.removeAttribute('disabled');
            btnNextPage.removeAttribute('disabled');
            btnLastPage.removeAttribute('disabled');
        }

        btnCurrentPage.innerHTML = (cvPaging.pageIndex + 1) + ' / ' + cvPaging.pageCount;
    }

    // commands: moving page.
    btnFirstPage.addEventListener('click', function () {
        // move to the first page.
        cvPaging.moveToFirstPage();
        updateNaviagteButtons();
    });

    btnPreviousPage.addEventListener('click', function () {
        // move to the previous page.
        cvPaging.moveToPreviousPage();
        updateNaviagteButtons();
    });

    btnNextPage.addEventListener('click', function () {
        // move to the next page.
        cvPaging.moveToNextPage();
        updateNaviagteButtons();
    });

    btnLastPage.addEventListener('click', function () {
        // move to the last page.
        cvPaging.moveToLastPage();
        updateNaviagteButtons();
    });
})();