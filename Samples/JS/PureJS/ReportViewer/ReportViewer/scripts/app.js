var reportView = new wijmo.viewer.ReportViewer('#reportViewer'),
    serviceUrl = 'http://demos.componentone.com/aspnet/webapi/',
    reportsCombo = document.querySelector('#reports');

$.get("ReportInfos.xml", function (data) {
    fillReportList(data);
    loadFlexReport();
});

function sortElements(elements, valFunc) {
    return elements.sort(function (a, b) {
        return valFunc(a) === valFunc(b)? 0: valFunc(a) > valFunc(b) ? 1 : -1;
    });
}

function fillReportList(reportInfos) {
    var categories = sortElements($.makeArray($(reportInfos).find("Category")), function (ele) {
        return $(ele).attr("Name")
    });

    for (var i = 0; i < categories.length; i++) {
        var category = categories[i];
        var categoryName = $(category).attr("Name");
        var optGroup = document.createElement('optgroup');
        optGroup.label = categoryName;
        var reports = sortElements($.makeArray($(category).find("Report")), function (ele) {
            return $(ele).find("ReportTitle").text();
        });

        for (var j = 0; j < reports.length; j++) {
            var report = $(reports[j]);
            var option = document.createElement('option');
            option.value = '/ReportsRoot/' + categoryName
                + '/' + report.find("FileName").text();
            $(option).attr("ReportName", report.find("ReportName").text());
            option.innerHTML = report.find("ReportTitle").text();
            optGroup.appendChild(option);
        }
        reportsCombo.appendChild(optGroup);
    }
}

function loadFlexReport() {
    if (reportView) {
        reportView.deferUpdate(function () {
            reportView.serviceUrl = serviceUrl;
            reportView.filePath = $(reportsCombo).val();
            reportView.reportName = $(reportsCombo).find("option:selected").attr("ReportName");
        });
    }
}

reportsCombo.onchange = function () {
    loadFlexReport();
}
