
// define app, include Wijmo 5 directives
var app = angular.module('app', ['wj']);

// controller
app.controller('appCtrl', function ($scope) {

    // create some random data
    var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
        data = [];
    for (var i = 0; i < countries.length; i++) {
        data.push({
            country: countries[i],
            downloads: Math.round(Math.random() * 20000),
            sales: Math.random() * 10000,
            expenses: Math.random() * 5000
        });
    }

    // expose data as a CollectionView to get events
    $scope.data = new wijmo.collections.CollectionView(data);
    
    //dynamic styles to generate CSS
    $scope.borderRadius = 4;
    $scope.headerBgColor = "#eaeaea";
    $scope.headerColor = "#444444";
    $scope.contentBgColor = "#ffffff";
    $scope.contentColor = "#333333";
    $scope.selectedBgColor = "#0085c7";
    $scope.selectedColor = "#ffffff";
    $scope.multiSelectedBgColor = "#80ADBF";
    $scope.tooltipBgColor = "#ffffe5";
    $scope.tooltipColor = "#333333";
    $scope.altCellBgColor = "#f9f9f9";
    $scope.cellBorderColor = "#c6c6c6";

    $scope.$watch('selectedBgColor', function (newValue, oldValue) {
        $scope.multiSelectedBgColor = saturate(darken(newValue, 0.05), 0.3);
    });
    $scope.$watch('contentBgColor', function (newValue, oldValue) {
        $scope.altCellBgColor = darken(newValue, 0.025);
        $scope.cellBorderColor = darken(newValue, 0.2);
    });

    function lighten(color, amount) {
        var myColor = new wijmo.Color(color);
        var hsb = myColor.getHsb();
        hsb[2] = hsb[2] + amount <= 1 ? hsb[2] + amount : 1;
        myColor = wijmo.Color.fromHsb(hsb[0], hsb[1], hsb[2]);
        return myColor.toString();
    }

    function darken(color, amount) {
        var myColor = new wijmo.Color(color);
        var hsb = myColor.getHsb();
        hsb[2] = hsb[2] - amount <= 0 ? 0 : hsb[2] - amount;
        myColor = wijmo.Color.fromHsb(hsb[0], hsb[1], hsb[2]);
        return myColor.toString();
    }

    function saturate(color, saturation) {
        var myColor = new wijmo.Color(color);
        var hsb = myColor.getHsb();
        hsb[1] = saturation;
        myColor = wijmo.Color.fromHsb(hsb[0], hsb[1], hsb[2]);
        return myColor.toString();
    }
});