(function () {
    'use strict';
    angular
        .module('app')
        .controller('fcExportCtrl', function ($scope, dataService) {
            $scope.title = 'Export FlexGrid to a file';
            $scope.ctx = {
                grid: null,
                data: dataService.getData(25),
                exportMode: wijmo.grid.pdf.ExportMode.All,
                orientation: wijmo.pdf.PdfPageOrientation.Portrait,
                scaleMode: wijmo.grid.pdf.ScaleMode.ActualSize
            };

            $scope.export = function () {
                wijmo.grid.pdf.FlexGridPdfConverter.export($scope.ctx.grid, 'FlexGrid.pdf', {
                    maxPages: 10,
                    exportMode: $scope.ctx.exportMode,
                    scaleMode: $scope.ctx.scaleMode,
                    documentOptions: {
                        pageSettings: {
                            layout: $scope.ctx.orientation
                        },
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
                });
            };

            // update group setting
            $scope.$watch('ctx.grid', function () {
                update();
            });

            // update group setting for the flex grid
            function update() {
                var flex = $scope.ctx.grid,
                    groupNames = ['Product', 'Country', 'Amount'],
                    cv,
                    propName,
                    groupDesc;

                if (flex) {
                    // get the collection view, start update
                    cv = flex.collectionView;
                    cv.beginUpdate();

                    // clear existing groups
                    cv.groupDescriptions.clear();

                    // add new groups
                    for (var i = 0; i < groupNames.length; i++) {
                        propName = groupNames[i].toLowerCase();
                        if (propName == 'amount') {

                            // group amounts in ranges
                            // (could use the mapping function to group countries into continents, 
                            // names into initials, etc)
                            groupDesc = new wijmo.collections.PropertyGroupDescription(propName, function (item, prop) {
                                var value = item[prop];
                                if (value > 1000) return 'Large Amounts';
                                if (value > 100) return 'Medium Amounts';
                                if (value > 0) return 'Small Amounts';
                                return 'Negative';
                            });
                            cv.groupDescriptions.push(groupDesc);
                        } else if (propName) {

                            // group other properties by their specific values
                            groupDesc = new wijmo.collections.PropertyGroupDescription(propName);
                            cv.groupDescriptions.push(groupDesc);
                        }
                    }

                    // done updating
                    cv.endUpdate();
                }
            }
        });
})();