// get app
var app = angular.module('app');

// add controller
app.controller('appCtrl', function ($scope) {

    $scope.items = 'Apple,Apricot,Banana,Blueberry,Cherry,Coconut,Grape,Grapefruit,Lemon,Lime,Mango,Melon,Nectarine,Orange,Peach,Pineapple,Plum,Pomegranate,Raspberry,Tangerine,Watermelon'.split(',');
    $scope.data = [
        { id: 1, fruit: $scope.items[0], qty: 12 },
        { id: 2, fruit: $scope.items[2], qty: 13 },
        { id: 3, fruit: $scope.items[3], qty: 16 },
        { id: 4, fruit: $scope.items[4], qty: 17 },
    ]

});