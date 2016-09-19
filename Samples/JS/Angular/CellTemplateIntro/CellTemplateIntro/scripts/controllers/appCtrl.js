'use strict';

// get reference to app module
var app = angular.module('app');

// add controller to app module
app.controller('appCtrl', function appCtrl($scope) {
    // create some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < 30; i++) {
        data.push({
            id: i,
            date: new Date(2015, Math.floor(i / countries.length) % 12, (Math.floor(i / countries.length) + 1) % 28),
            country: countries[i % countries.length],
            countryMapped: i % countries.length,
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000,
            checked: i % 9 == 0
        });
    }
    var getCv = function (data) {
        return new wijmo.collections.CollectionView(data, {
            sortDescriptions: [ 'date' ], // sort by date
            groupDescriptions: [ 'country' ] // group by country
        });
    }

    $scope.data1 = getCv(data);
    $scope.data2 = getCv(data);
    $scope.data3 = getCv(data);

    $scope.countries = countries;

    $scope.statisticsColumns = [
        {
            binding: 'downloads',
            header: 'Downloads',
            width: '230',
            align: 'center',
            format: 'N0',
            columnHeaderTemplateUrl: 'scripts/CellTemplates/statHeaderTemplate.html',
            groupTemplateUrl: 'scripts/CellTemplates/statGroupTemplate.html',
            reportType: 'Chart',
            isAvailable: true
        },
        {
            binding: 'sales',
            header: 'Sales',
            width: '230',
            align: 'center',
            format: 'N2',
            columnHeaderTemplateUrl: 'scripts/CellTemplates/statHeaderTemplate.html',
            groupTemplateUrl: 'scripts/CellTemplates/statGroupTemplate.html',
            reportType: 'Chart',
            isAvailable: false
        },
        {
            binding: 'expenses',
            header: 'Expenses',
            width: '230',
            align: 'center',
            format: 'N2',
            columnHeaderTemplateUrl: 'scripts/CellTemplates/statHeaderTemplate.html',
            groupTemplateUrl: 'scripts/CellTemplates/statGroupTemplate.html',
            reportType: 'Table',
            isAvailable: true
        },
    ];


    $scope.customTopLeft = true;
    $scope.customRowHeader = true;
    $scope.customRowHeaderEdit = true;
    $scope.customCell = true;
    $scope.customCellEdit = true;
    $scope.customColumnHeader = true;
    $scope.customGroupHeader = true;
    $scope.customGroup = true;
    $scope.customColumnFooter = true;
    $scope.customBottomLeft = true;

    $scope.uiCtx = {
        highlightDownloads: true,
    };

    $scope.addFooterRow = function(s) {
        s.columnFooters.rows.push(new wijmo.grid.GroupRow());
    }

    $scope.dynaColumnsFlexInit = function (flex) {
        flex.collapseGroupsToLevel(0);
        flex.columnHeaders.rows.defaultSize = 36;
        flex.cells.rows.defaultSize = 156;
    }
});
