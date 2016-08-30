'use strict';

// get reference to app module
var app = angular.module('app');
// add controller to app module
app.controller('appCtrl', function appCtrl($scope, $compile) {

    // generate some random data
    function getData(count) {
        var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
            citiesByCountry = {
                US: ['New York', 'Los Angeles', 'Chicago', 'Phoenix', 'Dallas'],
                Germany: ['Berlin', 'Hamburg', 'Munich', 'Cologne', 'Frankfurt'],
                UK: ['London', 'Birmingham', 'Leeds', 'Glasgow', 'Sheffield'],
                Japan: ['Tokyo', 'Kanagawa', 'Osaka', 'Aichi', 'Hokkaido'],
                Italy: ['Rome', 'Milan', 'Naples', 'Turin', 'Palermo'],
                Greece: ['Athens', 'Thessaloniki', 'Patras', 'Heraklion', 'Larissa']
            },
            years = [2010, 2011, 2012, 2013, 2014],
            data = new wijmo.collections.ObservableArray(),
            countriesLen = countries.length,
            country, yearIndex, cityIndex;
        for (var i = 0; i < count; i++) {
            yearIndex = Math.floor(Math.random() * 5);
            cityIndex = Math.floor(Math.random() * 5);
            country = countries[i % countriesLen];
            data.push({
                id: i,
                country: country,
                city: citiesByCountry[country][cityIndex],
                date: new Date(years[yearIndex], i % 12, i % 27 + 1),
                amount: Math.random() * 10000
            });
        }
        return data;
    }
    
    var chartViewPath = [],
        groupNamesMap = { country: 'Country', date: 'Year', city: 'City' },
        levelsColor = ['rgba(136,189,230,0.7)', 'rgba(251,178,88,0.7)', 'rgba(144,205,151,0.7)'];

    $scope.mainView = new wijmo.collections.CollectionView(getData(500));
    $scope.chartView = null;
    $scope.groupBy = 'country,city';
    $scope.aggregation = 'Sum';
    $scope.chartType = 'chart';
    $scope.aggregationText = '';

    $scope.chartProps = {
        itemsSource: null,
        groupChart: null,
        groupPie: null,
        bindx: '',
        bindname: '',
        bindvalue: '',
        palette: []
    };

    $scope.$watch('groupBy', function () {
        var gd, groupName, groupNames = $scope.groupBy.split(',')

        gd = $scope.mainView.groupDescriptions;
        gd.clear();

        for (var i = 0; i < groupNames.length; i++) {
            groupName = groupNames[i];

            if (groupName == 'date') { // group dates by year
                var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                    return item.date.getFullYear();
                });
                gd.push(groupDesc);
            } else { // group country
                var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName);
                gd.push(groupDesc);
            }
        }
        chartViewPath = [];
        $scope.chartView = $scope.mainView.groups;
    });

    $scope.$watch('aggregation', function () {
        updateChart();
    });

    $scope.$watch('chartView', function () {
        updateChart();
    });

    $scope.$watch('chartProps.groupChart', function () {
        var sender = $scope.chartProps.groupChart;
        if (sender && sender.hostElement) {
            chartClick(sender);
            disableTouchToolTip(sender);
        }
    });

    $scope.$watch('chartProps.groupPie', function () {
        var sender = $scope.chartProps.groupPie;
        if (sender && sender.hostElement) {
            chartClick(sender);
            disableTouchToolTip(sender);
            addLegendLinkStyle(sender);
        }
    });

    $scope.changeChartView = function (newChartViewPath) {
        var paths, chartView = $scope.mainView;

        chartViewPath = [];
        if (newChartViewPath === undefined) {
            $scope.chartView = $scope.mainView.groups;
            $scope.chartProps.palette = [levelsColor[chartViewPath.length]];
            return;
        }

        paths = newChartViewPath.toString().split(',');
        if (paths.length <= 0) {
            return;
        }
        for (var i = 0; i < paths.length; i++) {
            chartView = chartView.groups[paths[i]].groups;
            chartViewPath.push(paths[i]);
        }
        $scope.chartView = chartView;
    }

    function updateChart() {
        var groups = $scope.chartView;

        if (groups && groups.length > 0) {
            updateChartItemsSource();
            updateHeader();
            $scope.chartProps.palette = [levelsColor[chartViewPath.length]];
        }
    }

    function updateChartItemsSource() {
        var groups = $scope.chartView, groupItems = [],
            sereiesName = $scope.aggregation;

        if (groups && groups.length > 0) {
            //for year to string: sort the group item(year)
            groups.sort(function (a, b) {
                if (a.name > b.name) {
                    return 1;
                } else {
                    return -1;
                }
            });

            $scope.chartProps.bindname = $scope.chartProps.bindvalue = sereiesName;

            groups.forEach(function (group, idx) {
                var groupName = group.groupDescription.propertyName,
                    groupItem = {},
                    aggregateVal = group.getAggregate(wijmo.Aggregate[$scope.aggregation], 'amount');

                if (idx === 0) {
                    $scope.chartProps.bindx = groupName;
                }
                groupItem[groupName] = group.name.toString();
                groupItem[sereiesName] = aggregateVal;
                groupItems.push(groupItem);
            });
            $scope.chartProps.itemsSource = groupItems;
        }
    }

    function updateHeader() {
        var level = chartViewPath.length,
            groups = $scope.mainView.groups,
            currentGroupDescName = groupNamesMap[$scope.mainView.groupDescriptions[0].propertyName],
            headerEle = document.querySelector('h3'),
            header = $scope.aggregationText + ' By ' + groupNamesMap[$scope.mainView.groupDescriptions[level].propertyName],
            headerLinkTxt, groupIndex, groupName;

        //change header
        if (level > 0) {
            headerLinkTxt = '<a ng-click="changeChartView()">' + currentGroupDescName + '</a>';
            for (var i = 0; i < level; i++) {
                groupIndex = chartViewPath[i];
                groupName = groups[groupIndex].name;
                if (i <= level - 1) {
                    headerLinkTxt += ' \\ ';
                }

                if (i === level - 1) {
                    headerLinkTxt += groupName + ' - ';
                } else {
                    headerLinkTxt += '<a ng-click="changeChartView(' + chartViewPath.slice(0, i + 1).join(',') + ')">' + groupName + '</a>';
                }
                groups = groups[groupIndex].groups;
            }
            header = headerLinkTxt + header;
        }
        if (headerEle) {
            headerEle.innerHTML = header;
            $compile(headerEle)($scope);
        }
    }

    function disableTouchToolTip(sender) {
        if (sender.tooltip) {
            sender.tooltip.content = function (ht) {
                if (sender.isTouching)
                    return null; // no tooltip
                else if (ht.series) { // column chart
                    if (ht.item) {
                    return '<b>' + ht.series.name + '</b><br/>' + ht.x + ' ' + ht.y.toFixed();
                    } else {
                        return null;
                    }
                }
                else
                    return '<b>' + ht.name + '</b><br/>' + ht.value.toFixed();
            };
        }  
    }

    function chartClick(sender) {
        sender.hostElement.addEventListener('click', function (evt) {
            var ht = sender.hitTest(evt), clklgdOnPie = false,
                idx, selectedGroup;

            if ($scope.chartType === "pie" &&
                ht.chartElement == wijmo.chart.ChartElement.Legend) {
                clklgdOnPie = true;
            }

            idx = ht.pointIndex;
            if ((!clklgdOnPie && ht.distance !== 0) || idx < 0) {
                return;
            }
           
            // index is got here.
            selectedGroup = $scope.chartView[idx];
            if (!selectedGroup || (selectedGroup && selectedGroup.isBottomLevel)) {
                return;
            }
            chartViewPath.push(idx);
            $scope.chartView = selectedGroup.groups;
            $scope.$apply('chartView');
        });
    }

    function addLegendLinkStyle(sender) {
        var level, labels, cvpLength;

        if (!sender ||
            (sender && sender.legend && sender.legend.position === "None")) {
            return;
        }

        //add hover style to pie legend            
        sender.rendered.addHandler(function () {
            cvpLength = chartViewPath.length;
            level = $scope.mainView.groupDescriptions.length;
            if (cvpLength >= 0 && cvpLength < level - 1) {
                labels = sender.hostElement.querySelectorAll('.wj-legend .wj-label');
                [].forEach.call(labels, function (label) {
                    wijmo.addClass(label, "labellink");
                });
            }
        });
    }
});
