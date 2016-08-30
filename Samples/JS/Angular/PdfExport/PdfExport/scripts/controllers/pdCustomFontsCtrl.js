(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdCustomFontsCtrl', function ($scope, dataService) {
            $scope.title = 'Embedding a custom font';

            $scope.export = function () {
                var doc = new wijmo.pdf.PdfDocument({
                    ended: function (sender, args) {
                        wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
                    }
                });

                doc.registerFont({
                    source: 'resources/fonts/fira/FiraSans-Regular.ttf',
                    name: 'fira',
                    style: 'normal',
                    weight: 'normal',
                    sansSerif: true
                });

                doc.registerFont({
                    source: 'resources/fonts/fira/FiraSans-Bold.ttf',
                    name: 'fira',
                    style: 'normal',
                    weight: 'bold',
                    sansSerif: true
                });

                doc.drawText('Here is the standard Times font.');

                var font = new wijmo.pdf.PdfFont('fira');
                doc.drawText('Here is the FiraSans-Regular font.', null, null, { font: font });

                font.weight = 'bold';
                doc.drawText('Here is the FiraSans-Bold font.', null, null, { font: font });

                doc.end();
            };
        });
})();