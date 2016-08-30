(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdRichTextCtrl', function ($scope, dataService) {
            $scope.title = 'Rich text';

            $scope.export = function () {
                var doc = new wijmo.pdf.PdfDocument({
                    header: {
                        height: 0 // no header 
                    },
                    footer: {
                        height: 0 // no footer
                    },
                    ended: function (sender, args) {
                        wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
                    }
                }),
                c1 = new wijmo.Color('#3173c0'),
                c2 = new wijmo.Color('#e69500');

                // Use a bigger font to show fills and strokes clearly.
                doc.setFont(new wijmo.pdf.PdfFont('times', 20)); 

                doc.drawText('Lorem ', null, null, {
                    continued: true
                });

                doc.drawText('ipsum ', null, null, {
                    continued: true,
                    stroke: true
                });

                doc.drawText('dolor ', null, null, {
                    continued: true,
                    brush: new wijmo.pdf.PdfSolidBrush(c1),
                    fill: true,
                    // Override the stroke property. The text settings are retained between drawText calls if the continued property is used.
                    stroke: false
                });

                doc.drawText('sit ', null, null, {
                    continued: true,
                    pen: new wijmo.pdf.PdfPen(c2),
                    fill: false,
                    stroke: true
                });

                doc.drawText('amet.', null, null, {
                    // A shorthand equivalent of new wijmo.pdf.PdfSolidBrush(c1)
                    brush: c1,
                    // A shorthand equivalent of new wijmo.pdf.PdfPen(c2)
                    pen: c2,
                    fill: true,
                    stroke: true
                });

                doc.end();
            }
        });
})();