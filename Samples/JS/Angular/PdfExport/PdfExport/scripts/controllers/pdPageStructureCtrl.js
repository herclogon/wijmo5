(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdPageStructureCtrl', function ($scope, dataService) {
            $scope.title = 'Page structure';

            $scope.export = function () {
                var doc = new wijmo.pdf.PdfDocument({
                    pageSettings: {
                        layout: wijmo.pdf.PdfPageOrientation.Portrait,
                        size: wijmo.pdf.PdfPageSize.Letter,
                        margins: {
                            left: 72,
                            top: 72,
                            right: 72,
                            bottom: 72
                        },
                    },
                    ended: function (sender, args) {
                        wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
                    }
                });

                // stroke areas
                doc.header.paths
                    .rect(0, 0, doc.header.width, doc.header.height)
                    .stroke();

                doc.paths
                    .rect(0, 0, doc.width, doc.height)
                    .stroke();

                doc.footer.paths
                    .rect(0, 0, doc.footer.width, doc.footer.height)
                    .stroke();

                // write descriptions
                doc.header.drawText('Header');
                doc.drawText('Body');
                doc.footer.drawText('Footer')

                doc.end();
            };
        });
})();