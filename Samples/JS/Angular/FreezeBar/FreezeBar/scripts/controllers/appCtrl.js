'use strict';

// define app, include Wijmo 5 directives
var app = angular.module('app', ['wj']);

// controller
app.controller('appCtrl', function ($scope) {

    // create some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < 100; i++) {
        data.push({
            country: countries[i % countries.length],
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }

    // expose data
    $scope.data = data;

    // add freezing handle to the grid
    $scope.initGrid = function (s, e) {
        setTimeout(function () {
            addFreezeBar(s);
        }, 100);
    }

    // add a freezing handle to a FlexGrid
    function addFreezeBar(flex) {

        // create freeze handle
        var freezeBar = document.createElement('div'),
            host = flex.hostElement,
            freeze = -1,
            dragging = false;
        wijmo.addClass(freezeBar, 'freeze-bar');

        // add handle to flex
        var root = host.querySelector('[wj-part="root"]');
        root.parentElement.appendChild(freezeBar);
        positionfreezeBar(flex, freezeBar, flex.frozenColumns);

        // attach event handlers
        flex.columns.collectionChanged.addHandler(function () {
            positionfreezeBar(flex, freezeBar, flex.frozenColumns);
        });
        host.addEventListener('mousedown', function (e) {
            var el = document.elementFromPoint(e.clientX, e.clientY);
            if (el == freezeBar && flex.rows.length > 0 && flex.columns.length > 0) {

                // prepare to freeze
                flex.frozenColumns = 0;
                flex.scrollPosition = new wijmo.Point(0, flex.scrollPosition.y);
                dragging = true;
                freeze = -1;
                host.style.cursor = 'col-resize';

                // done with this event
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
        host.addEventListener('mousemove', function (e) {
            if (dragging) {

                // find closest edge
                var minDist = null;
                for (var i = 0; i <= flex.viewRange.col2; i++) {
                    var rc = flex.getCellBoundingRect(0, i),
                        dist = Math.abs(rc.left - e.clientX);
                    if (minDist == null || dist < minDist) {
                        minDist = dist;
                        freeze = i;
                    }
                }

                // move element to edge
                positionfreezeBar(flex, freezeBar, freeze);

                // done with this event
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);

        // stop dragging when the user releases the mouse button
        host.addEventListener('mouseup', function (e) {
            stopDragging(e);
        }, true);

        // stop dragging when the mouse leaves the control
        host.addEventListener('mouseleave', function (e) {
            if (e.target == host) {
                stopDragging(e);
            }
        }, true);

        // stop dragging when the button is released or when the mouse leaves the control
        function stopDragging(e) {
            if (dragging) {
                dragging = false;
                if (freeze > -1) {
                    flex.frozenColumns = freeze;
                }
                host.style.cursor = '';
                e.preventDefault();
                e.stopPropagation();
            } else {
                positionfreezeBar(flex, freezeBar, flex.frozenColumns);
            }
        }

        // position the freeze bar on the right of the last frozen column
        function positionfreezeBar(flex, div, frozen) {
            var left = -10;
            if (flex.columns.length > 0 && flex.rows.length > 0) {
                left = frozen > 0
                    ? flex.getCellBoundingRect(0, Math.min(frozen, flex.columns.length) - 1).right
                    : flex.getCellBoundingRect(0, 0).left;
            }
            left -= div.parentElement.getBoundingClientRect().left;
            div.style.left = left + 'px';
        }
    }
});