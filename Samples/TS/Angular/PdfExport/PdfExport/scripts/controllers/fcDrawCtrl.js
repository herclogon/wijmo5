(function () {
    'use strict';
    angular
        .module('app')
        .controller('fcDrawCtrl', function ($scope, dataService) {
            $scope.title = 'Export FlexGrid to the PdfDocument instance';
            $scope.ctx = {
                grid: null,
                data: dataService.getData(10),
            };

            $scope.export = function () {
                var doc = new wijmo.pdf.PdfDocument({
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
                    ended: function (sender, args) {
                        wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf')
                    }
                }),
                settings = {
                    styles: {
                        cellStyle: {
                            backgroundColor: '#ffffff',
                            borderColor: '#c6c6c6'
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
                };

                doc.drawText('This grid is scaled to fit the width of 200 and drawn using the draw method.', null, null, { width: 200 });
                doc.moveDown();
                wijmo.grid.pdf.FlexGridPdfConverter.draw($scope.ctx.grid, doc, 200, null, settings);

                doc.drawText('This grid is drawn in its original size using the drawToPosition method.', 220, 0);
                doc.moveDown();
                wijmo.grid.pdf.FlexGridPdfConverter.drawToPosition($scope.ctx.grid, doc, new wijmo.Point(220, doc.y), null, null, settings);

                doc.drawText('This grid is drawn in its original size using the draw method and is split into multiple pages.', 0, 400);
                doc.moveDown();
                wijmo.grid.pdf.FlexGridPdfConverter.draw($scope.ctx.grid, doc, null, null, settings);

                doc.end();
            }
        });
})();