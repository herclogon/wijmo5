(function () {
    'use strict';

    /**
     * Define the main application module.
     */
    angular
        .module('app', ['ionic', 'wj'])     // include ionic, wijmo, and services modules
        .run(function ($ionicPlatform, $ionicLoading, $rootScope) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs).
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }

                if (window.StatusBar) {
                    StatusBar.styleDefault();
                }
            });

            //*** Show loading indicator between page transitions - mostly for when deployed
            $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
                $ionicLoading.show({
                    template: '<i class="icon ion-loading-b"></i>'
                });
            });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                $ionicLoading.hide();
            });
        });
})();