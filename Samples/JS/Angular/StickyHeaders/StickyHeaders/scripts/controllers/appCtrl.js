'use strict';

// get reference to app module
var app = angular.module('app', ['wj']);

// define controller
app.controller('appCtrl', function ($scope) {

    // load some data, update scope when loaded
    var url = 'http://services.odata.org/V4/Northwind/Northwind.svc';
    $scope.products = new wijmo.odata.ODataCollectionView(url, 'Products', {
        sortOnServer: false,
        filterOnServer: false,
        loaded: function (s, e) {
            $scope.$apply();
        }
    });

    // define context object to store control references
    $scope.ctx = {};

    // initialize grid's sticky toolbar
    $scope.init = function (s, e) {

        // move header element into grid layout
        var host = s.hostElement,
            hdr = document.querySelector('.grid-header');
        hdr.style.position = 'relative';
        hdr.style.zIndex = 10;
        host.insertBefore(hdr, host.children[0]);

        // make header 'sticky'
        var sticky = s.columnHeaders.hostElement.parentElement;
        s.updatedLayout.addHandler(function () {
            hdr.style.top = sticky.style.top;
            wijmo.toggleClass(hdr, 'wj-state-sticky', wijmo.hasClass(sticky, 'wj-state-sticky'));
        });
    };

    // toggle filter, group panel
    $scope.toggleFilter = function () {
        var filter = $scope.ctx.theFilter;
        filter.showFilterIcons = !filter.showFilterIcons;
    }
    $scope.toggleGroupPanel = function () {
        var style = $scope.ctx.theGroupPanel.hostElement.style;
        style.display = (style.display == 'none' ? '' : 'none');
        $scope.ctx.theGrid.invalidate(); // force layout update
        // wijmo.Control.invalidateAll(); also works, but less efficient...
    }
});
