(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdDrawingTextCtrl', function ($scope, dataService) {
            $scope.title = 'Drawing text';

            $scope.export = function () {
                var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia.',
                    doc = new wijmo.pdf.PdfDocument({
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


                doc.drawText('This text is aligned to left (default):');
                doc.drawText(lorem);
                doc.moveDown();

                doc.drawText('This text is aligned to right:');
                doc.drawText(lorem, null, null, { align: wijmo.pdf.PdfTextHorizontalAlign.Right } );
                doc.moveDown();

                doc.drawText('This text is centered:');
                doc.drawText(lorem, null, null, { align: wijmo.pdf.PdfTextHorizontalAlign.Center });
                doc.moveDown();

                doc.drawText('This text is justified:');
                doc.drawText(lorem, null, null, { align: wijmo.pdf.PdfTextHorizontalAlign.Justify });
                doc.moveDown();

                doc.drawText('This text is wrapped and clipped by a rectangle of dimensions 100x100:');
                doc.drawText(lorem, null, null, { width: 100, height: 100 });

                doc.end();
            };
        });
})();