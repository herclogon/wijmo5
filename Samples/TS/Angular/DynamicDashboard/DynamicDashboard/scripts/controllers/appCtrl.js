// get application
var app = angular.module('app');

// add controller
// note: the controller provides data and creates tiles
// the drag/drop code used to re-order tiles
app.controller('appCtrl', function appCtrl($scope, $compile) {

    // define tile types
    var tileTypes = 'Grid,Radial Gauge,Linear Gauge,Bar Chart,Column Chart,Line Chart,Bubble Chart,Bullet Graph,Blank'.split(',');

    // expose tile types to scope
    $scope.tileTypes = new wijmo.collections.CollectionView(tileTypes);

    // expose some random data to show in the tiles
    $scope.data = getData();

    // enable drag-drop within dashboard element
    var dashboard = document.querySelector('.dashboard');
    dashboard.addEventListener('dragstart', handleDragStart);
    dashboard.addEventListener('dragover', handleDragOver);
    dashboard.addEventListener('drop', handleDrop);
    dashboard.addEventListener('dragend', handleDragEnd);

    // add a tile of a given type to the dashboard
    $scope.addTile = function (tileType) {

        // get the html fragment for a new tile
        var htmlTile = wijmo.httpRequest('./partials/tile.htm', { async: false }).responseText,
            htmlContent = wijmo.httpRequest('./partials/' + tileType.replace(' ', '') + '.htm', { async: false }).responseText;

        // initialize tile header and content
        htmlTile = htmlTile.replace('{{header}}', tileType);
        htmlTile = htmlTile.replace('{{content}}', htmlContent);

        // compile tile to instantiate controls
        // this steps converts directives added to the tile into controls
        var tile = wijmo.createElement(htmlTile);
        tile = $compile(tile.outerHTML)($scope)[0];
        
        // append it to the dashboard
        dashboard.appendChild(tile);
        tile.focus();
    }

    // add some tiles to start with
    for (var i = 0; i < tileTypes.length && i < 4; i++) {
        $scope.addTile(tileTypes[i]);
    }

    // drag-drop event handlers
    var dragSource = null,
        dropTarget = null;
    function handleDragStart(e) {
        var target = wijmo.closest(e.target, '.tile');
        if (target && target.parentElement == dashboard) {
            dragSource = target;
            wijmo.addClass(dragSource, 'drag-source');
            var dt = e.dataTransfer;
            dt.effectAllowed = 'move';
            dt.setData('text', dragSource.innerHTML);
        }
    }
    function handleDragOver(e) {
        if (dragSource) {
            var tile = wijmo.closest(e.target, '.tile');
            if (tile == dragSource) {
                tile = null;
            }
            if (dragSource && tile && tile != dragSource) {
                e.preventDefault();
                e.dataTransfer.dropEffect = 'move';
            }
            if (dropTarget != tile) {
                wijmo.removeClass(dropTarget, 'drag-over');
                dropTarget = tile;
                wijmo.addClass(dropTarget, 'drag-over');
            }
        }
    }
    function handleDragEnd(e) {
        wijmo.removeClass(dragSource, 'drag-source');
        wijmo.removeClass(dropTarget, 'drag-over');
        dragSource = dropTarget = null;
    }
    function handleDrop(e) {
        if (dragSource && dropTarget) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            e.preventDefault();
            var srcIndex = getIndex(dragSource),
                dstIndex = getIndex(dropTarget),
                refChild = srcIndex > dstIndex ? dropTarget : dropTarget.nextElementSibling;
            dragSource.parentElement.insertBefore(dragSource, refChild);

            // focus and view on the tile that was dragged
            dragSource.focus();

            // invalidate Wijmo controls after layout updates
            wijmo.Control.invalidateAll();
        }
    }
    function getIndex(e) {
        var p = e.parentElement;
        for (var i = 0; i < p.children.length; i++) {
            if (p.children[i] == e) return i;
        }
        return -1;
    }

    // handle tile buttons
    dashboard.addEventListener('click', function (e) {
        if (wijmo.closest(e.target, '.glyphicon-remove') != null) {
            var tile = wijmo.closest(e.target, '.tile');
            if (tile != null) {
                dashboard.removeChild(tile);
            }
        }
        if (wijmo.closest(e.target, '.glyphicon-pencil') != null) {
            var tile = wijmo.closest(e.target, '.tile');
            if (tile != null) {
                alert('edit tile parameters...')
            }
        }
    });

    // some random data
    function getData(count) {
        var data = [],
            today = new Date();
        for (var i = 0; i < 12; i++) {
            var sales = 100 + Math.random() * 800 + i * 50,
                expenses = 50 + Math.random() * 300 + i * 5;
            data.push({
                id: i,
                date: wijmo.DateTime.addMonths(today, 12 - i),
                sales: sales,
                expenses: expenses,
                profit: sales - expenses
            });
        }
        return new wijmo.collections.CollectionView(data);
    }
});
