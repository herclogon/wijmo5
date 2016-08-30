(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdFontsCtrl', function ($scope, dataService) {
            $scope.title = 'Fonts';

            $scope.export = function () {
                var doc = new wijmo.pdf.PdfDocument({
                        ended: function (sender, args) {
                            wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
                        }
                    });

                doc.drawText('This text uses the default document font, Times 10.');

                doc.drawText('This text uses Times Bold Oblique 20.', null, null, { font: new wijmo.pdf.PdfFont('times', 20, 'oblique', 'bold') });

                doc.setFont(new wijmo.pdf.PdfFont('helvetica'));
                doc.drawText('This text uses Helvetica 10.');
                doc.drawText('This text also uses Helvetica 10.');

                doc.end();
            };
        });
})();