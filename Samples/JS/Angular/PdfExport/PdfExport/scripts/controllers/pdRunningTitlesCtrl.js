(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdRunningTitlesCtrl', function ($scope, dataService) {
            $scope.title = 'Customizing headers and footers declaratively';

            $scope.export = function () {
                var doc = new wijmo.pdf.PdfDocument({
                    header: {
                        declarative: {
                            text: '\tTitle\t&[Page]',
                            font: new wijmo.pdf.PdfFont('helvetica', 10, 'normal', 'bold')
                        }
                    },
                    footer: {
                        declarative: {
                            text: '\t&[Page]\\&[Pages]',
                            brush: '#3173c0',
                            font: new wijmo.pdf.PdfFont('helvetica', 10, 'normal', 'bold')
                        }
                    },
                    ended: function (sender, args) {
                        wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
                    }
                });

                doc.drawText('Lorem ipsum');

                doc.addPage();
                doc.drawText('Lorem ipsum');

                doc.end();
            }
        });
})();