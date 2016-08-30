(function () {
    'use strict';

    angular
        .module('app', ['ngRoute', 'wj'])
        .config(function ($routeProvider) {
            $routeProvider
                // flexGridPdfConverter
                .when('/flexgridpdfconverter/introduction', {
                    templateUrl: 'views/flexGridPdfConverter/introduction.htm',
                    controller: 'fcIntroductionCtrl'
                })
                .when('/flexgridpdfconverter/export', {
                    templateUrl: 'views/flexGridPdfConverter/export.htm',
                    controller: 'fcExportCtrl'
                })
                .when('/flexgridpdfconverter/draw', {
                    templateUrl: 'views/flexGridPdfConverter/draw.htm',
                    controller: 'fcDrawCtrl'
                })
                .when('/flexgridpdfconverter/custom-fonts', {
                    templateUrl: 'views/flexGridPdfConverter/customFonts.htm',
                    controller: 'fcCustomFontsCtrl'
                })
                .when('/flexgridpdfconverter/expenses-report', {
                    templateUrl: 'views/flexGridPdfConverter/expensesReport.htm',
                    controller: 'fcExpensesReportCtrl'
                })
                .when('/flexgridpdfconverter/expense-analysis-report', {
                	templateUrl: 'views/flexGridPdfConverter/expenseAnalysisReport.htm',
                	controller: 'fcExpenseAnalysisReportCtrl'
                })

                // pdfDocument
                .when('/pdfdocument/introduction', {
                    templateUrl: 'views/pdfDocument/introduction.htm',
                    controller: 'pdIntroductionCtrl'
                })
                .when('/pdfdocument/page-structure', {
                    templateUrl: 'views/pdfDocument/pageStructure.htm',
                    controller: 'pdPageStructureCtrl'
                })
                .when('/pdfdocument/drawing-graphics', {
                    templateUrl: 'views/pdfDocument/drawingGraphics.htm',
                    controller: 'pdDrawingGraphicsCtrl'
                })
                .when('/pdfdocument/drawing-text', {
                    templateUrl: 'views/pdfDocument/drawingText.htm',
                    controller: 'pdDrawingTextCtrl'
                })
                .when('/pdfdocument/fonts', {
                    templateUrl: 'views/pdfDocument/fonts.htm',
                    controller: 'pdFontsCtrl'
                })
                .when('/pdfdocument/custom-fonts', {
                    templateUrl: 'views/pdfDocument/customFonts.htm',
                    controller: 'pdCustomFontsCtrl'
                })
                .when('/pdfdocument/rich-text', {
                    templateUrl: 'views/pdfDocument/richText.htm',
                    controller: 'pdRichTextCtrl'
                })
                .when('/pdfdocument/drawing-images', {
                    templateUrl: 'views/pdfDocument/drawingImages.htm',
                    controller: 'pdDrawingImagesCtrl'
                })
                .when('/pdfdocument/running-titles', {
                    templateUrl: 'views/pdfDocument/runningTitles.htm',
                    controller: 'pdRunningTitlesCtrl'
                })
                .when('/pdfdocument/drawing-tables', {
                    templateUrl: 'views/pdfDocument/drawingTables.htm',
                    controller: 'pdDrawingTablesCtrl'
                })
                .when('/pdfdocument/expenses-report', {
                    templateUrl: 'views/pdfDocument/expensesReport.htm',
                    controller: 'pdExpensesReportCtrl'
                })
                .when('/pdfdocument/drawing-flexpie', {
                	templateUrl: 'views/pdfDocument/drawingFlexPie.htm',
                	controller: 'pdDrawingFlexPieCtrl'
                })
                .when('/pdfdocument/drawing-flexpie-svg', {
                	templateUrl: 'views/pdfDocument/drawingFlexPieSvg.htm',
                	controller: 'pdDrawingFlexPieSvgCtrl'
                })

                // default
                .otherwise({ redirectTo: '/flexgridpdfconverter/introduction' });
        });
})();