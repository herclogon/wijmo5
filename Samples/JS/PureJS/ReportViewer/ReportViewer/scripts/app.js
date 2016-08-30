var reportView = new wijmo.viewer.ReportViewer('#reportViewer'),
    serviceUrl = 'http://demos.componentone.com/aspnet/webapi/',
    reportNamesCombo = document.querySelector('#reportNames'),
    reportFilesCombo = document.querySelector('#reportFiles'),
    reportFiles = [{ folder: 'What\'s New', files: ['FlexCommonTasks', 'BorderStyles', 'BoundImages', 'CalculatedFields', 'CascadingParameters', 'CheckBox', 'ComplexText', 'Filtering', 'MultiDataSource', 'MultivalueParameters', 'NewCharts', 'ParagraphField', 'Parameters', 'RTFField', 'Shapes', 'Sorting', 'SubSections', 'UnboundImages'] },
    { folder: 'Featured Reports', files: ['BalanceSheet', 'CrossTab', 'EmployeeExpReport', 'InventoryManagementReport', 'MailMerge', 'MarketingProjectPlan', 'MedicalReport', 'MonthlyBudget', 'MonthlyProjectExpenseTracking', 'OrganizationChart', 'PriceComparison'] },
    { folder: 'Data Binding', files: ['MultiDataSource', 'Nwind', 'StoredProcedure'] },
    { folder: 'Controls', files: ['AllCharts', 'BarcodeProductLabels', 'BarcodeShippingLabels', 'BoundImages', 'Charts', 'CheckBox', 'ColumnarSubreports', 'ComplexText', 'NewCharts', 'PageHeadersInSubreports', 'ParagraphField', 'RTFField', 'Shapes', 'UnboundImages'] },
    { folder: 'Data Calculations', files: ['Aggregates', 'CalculatedFields', 'GroupPageCounts', 'RunningSums'] },
    { folder: 'Data Manipulation', files: ['CascadingParameters', 'MultivalueParameters', 'Parameters', 'Sorting'] },
    { folder: 'Formatting', files: ['AlternateBackground', 'ConditionalFormatting', 'Watermark'] },
    { folder: 'Layout', files: ['ContinuedHeaders', 'CustomPaperSize', 'DynamicPH', 'ForcePageBreaks', 'Gutter', 'Layout', 'SubSections'] }];

for (var i = 0; i < reportFiles.length; i++) {
    var optGroup = document.createElement('optgroup');
    optGroup.label = reportFiles[i].folder;
    for (var j = 0; j < reportFiles[i].files.length; j++) {
        var option = document.createElement('option');
        option.value = '/ReportsRoot/' + reportFiles[i].folder
            + '/' + reportFiles[i].files[j] + '.flxr';
        option.innerHTML = reportFiles[i].files[j];
        optGroup.appendChild(option);
    }
    reportFilesCombo.appendChild(optGroup);
}

function fillReportNames() {
    wijmo.viewer.ReportViewer.getReportNames(serviceUrl, reportFilesCombo.value).then(function (names) {
        while (reportNamesCombo.hasChildNodes()) {
            reportNamesCombo.removeChild(reportNamesCombo.firstChild);
        }
        for (var i = 0; i < names.length; i++) {
            var option = document.createElement('option');
            option.value = names[i];
            option.innerHTML = names[i];
            reportNamesCombo.appendChild(option);
        }
        loadFlexReport();
    });
}

function loadFlexReport() {
    if (reportView) {
        reportView.deferUpdate(function () {
            reportView.serviceUrl = serviceUrl;
            reportView.filePath = reportFilesCombo.value;
            reportView.reportName = reportNamesCombo.value;
        });
    }
}

reportFilesCombo.onchange = function () {
    fillReportNames();
}
reportNamesCombo.onchange = function () {
    loadFlexReport()
}

fillReportNames();