(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdDrawingImagesCtrl', function ($scope, dataService) {
            $scope.title = 'Drawing images';

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
                });

                var image = 'resources/wijmo1.png';

                doc.drawText('This image is rendered in its original size:');
                doc.drawImage(image);
                doc.moveDown();

                doc.drawText('This image is scaled to fit the width of 100:');
                doc.drawImage(image, null, null, { width: 100 });
                doc.moveDown();

                doc.drawText('This image is scaled to fit the height of 25:');
                doc.drawImage(image, null, null, { height: 25 });
                doc.moveDown();

                doc.drawText('This image is stretched to fit a rectangle of dimensions 100x25:');
                doc.paths.rect(doc.x, doc.y, 100, 25).stroke();
                doc.drawImage(image, null, null, {
                    width: 100,
                    height: 25
                });
                doc.moveDown();

                doc.drawText('This image is centered and stretched proportionally to fit a rectangle of dimensions 100x25:');
                doc.paths.rect(doc.x, doc.y, 100, 25).stroke();
                doc.drawImage(image, null, null, {
                    width: 100,
                    height: 25,
                    stretchProportionally: true,
                    align: wijmo.pdf.PdfImageHorizontalAlign.Center
                });

                doc.end();
            };
        });
})();