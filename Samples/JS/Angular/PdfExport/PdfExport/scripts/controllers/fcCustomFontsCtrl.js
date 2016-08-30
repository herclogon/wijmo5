(function () {
    'use strict';
    angular
        .module('app')
        .controller('fcCustomFontsCtrl', function ($scope, dataService) {
            $scope.title = 'Using a custom font';
            $scope.ctx = {
                grid: null,
                data: dataService.getData(5),
            };

            $scope.export = function () {
                wijmo.grid.pdf.FlexGridPdfConverter.export($scope.ctx.grid, 'FlexGrid.pdf', {
                    documentOptions: {
                        header: {
                            declarative: {
                                text: '\t&[Page]\\&[Pages]'
                            }
                        },
                        footer: {
                            declarative: {
                                text: '\t&[Page]\\&[Pages]'
                            }
                        },
                        info: {
                            author: 'C1',
                            title: 'PdfDocument sample',
                            keywords: 'PDF, C1, sample',
                            subject: 'PdfDocument'
                        }
                    },
                    embeddedFonts: [
                        {
                            source: 'resources/fonts/fira/FiraSans-Regular.ttf',
                            name: 'fira',
                            style: 'normal',
                            weight: 'normal',
                            sansSerif: true
                        },
                        {
                            source: 'resources/fonts/fira/FiraSans-Bold.ttf',
                            name: 'fira',
                            style: 'normal',
                            weight: 'bold',
                            sansSerif: true
                        }
                    ],
                    styles: {
                        cellStyle: {
                            backgroundColor: '#ffffff',
                            borderColor: '#c6c6c6',
                            font: {
                                family: 'fira'
                            }
                        },
                        altCellStyle: {
                            backgroundColor: '#f9f9f9'
                        },
                        groupCellStyle: {
                            backgroundColor: '#dddddd'
                        },
                        headerCellStyle: {
                            backgroundColor: '#eaeaea'
                        }
                    }
                });
            };
        });
})();