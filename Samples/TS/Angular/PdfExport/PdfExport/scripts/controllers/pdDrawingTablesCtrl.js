(function () {
    'use strict';
    angular
        .module('app')
        .controller('pdDrawingTablesCtrl', function ($scope, dataService) {
            $scope.title = 'Drawing tables';

            $scope.export = function () {
                var doc = new wijmo.pdf.PdfDocument({
                    header: {
                        height: 0
                    },
                    footer: {
                        height: 0
                    },
                    ended: function (sender, args) {
                        wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
                    }
                });

                var colWidth = 100,
                    rowHeight = 18,
                    data = dataService.getData(50),
                    dataKeyMap = ['id', 'product', 'country'],
                    y = 0;

                for (var i = 0; i < 50; i++) {
                    for (var j = 0; j < 3; j++) {
                        var x = j * colWidth;

                        doc.paths
                            .rect(x, y, colWidth, rowHeight)
                            .stroke();

                        doc.drawText(data[i][dataKeyMap[j]] + '', x + 2, y + 2, {
                            height: rowHeight,
                            width: colWidth
                        });
                    }

                    y += rowHeight;

                    if (y >= doc.height) {
                        y = 0;
                        doc.addPage();
                    }
                }

                doc.end();
            }
        });
})();