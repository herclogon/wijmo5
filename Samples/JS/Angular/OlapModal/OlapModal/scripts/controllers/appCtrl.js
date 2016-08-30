'use strict';

// add controller to app
angular.module('app').controller('appCtrl', function appCtrl($scope) {

    // initialize pivot panel
    $scope.initPanel = function (pp, e) {

        // configure panel
        pp.autoGenerateFields = false;
        pp.itemsSource = getData(20000);

        // add fields
        var ng = pp.engine;
        ng.fields.push(new wijmo.olap.PivotField(ng, 'person.name', 'Name'));
        ng.fields.push(new wijmo.olap.PivotField(ng, 'person.first', 'First Name'));
        ng.fields.push(new wijmo.olap.PivotField(ng, 'person.last', 'Last Name'));
        ng.fields.push(new wijmo.olap.PivotField(ng, 'timeInHours', 'Time (hrs)', { format: 'n3', dataType: wijmo.DataType.Number, aggregate: 'Sum' }));
        ng.fields.push(new wijmo.olap.PivotField(ng, 'bug.fogbugzId', 'Fogbugz #', { format: 'F0', dataType: wijmo.DataType.Number }));
        ng.fields.push(new wijmo.olap.PivotField(ng, 'bug.severity', 'Severity', { format: 'F0', dataType: wijmo.DataType.Number }));

        // build initial view
        ng.rowFields.push('Last Name');
        ng.columnFields.push('Severity');
        ng.valueFields.push('Time (hrs)');
    }

    // sample data
    function getData(cnt) {
        var data = [];
        for (var i = 0; i < cnt; i++) {
            var minutes = Math.round(Math.random() * 160);
            var firstNames = 'Liam,Dylan,Jacob,Noah,Jayden,Ethan,Matthew,Sebastian,Alexander,Daniel,Angel'.split(',');
            var lastNames = 'Smith,Lam,Martin,Brown,Roy,Tremblay,Lee,Gagnon,Wilson,Navin'.split(',');
            data.push({
                id: i,
                person: getPerson(i, firstNames, lastNames),
                bug: getBug(i),
                timeInMinutes: minutes,
                timeInHours: minutes / 60,
            });
        }
        return data;
    }
    function getPerson(i, firstNames, lastNames) {
        var first = firstNames[i % firstNames.length];
        var last = lastNames[i % lastNames.length];
        return {
            id: i,
            name: first + ' ' + last,
            first: first,
            last: last,
            email: first[0] + last + '@componentone.com',
            value: Math.random() * 400
        }
    }
    function getBug(i) {
        return {
            id: i,
            fogbugzId: Math.round(100000 + Math.random() * 200000),
            severity: i % 4 == 0 ? 'High' : i % 4 == 1 ? 'Average' : 'Low'
        }
    }

    // sample views
    $scope.viewDefs = [
        {
            name: "Sales by Product",
            def: "{\"showZeros\":false,\"showColumnTotals\":2,\"showRowTotals\":2,\"defaultFilterType\":3,\"fields\":[{\"binding\":\"id\",\"header\":\"Id\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"product\",\"header\":\"Product\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"country\",\"header\":\"Country\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"date\",\"header\":\"Date\",\"dataType\":4,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"format\":\"d\",\"isContentHtml\":false},{\"binding\":\"sales\",\"header\":\"Sales\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"downloads\",\"header\":\"Downloads\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"active\",\"header\":\"Active\",\"dataType\":3,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"discount\",\"header\":\"Discount\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false}],\"rowFields\":{\"items\":[\"Product\"]},\"columnFields\":{\"items\":[]},\"filterFields\":{\"items\":[]},\"valueFields\":{\"items\":[\"Sales\"]}}"
        },
        {
            name: "Sales by Country",
            def: "{\"showZeros\":false,\"showColumnTotals\":2,\"showRowTotals\":2,\"defaultFilterType\":3,\"fields\":[{\"binding\":\"id\",\"header\":\"Id\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"product\",\"header\":\"Product\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"country\",\"header\":\"Country\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"date\",\"header\":\"Date\",\"dataType\":4,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"format\":\"d\",\"isContentHtml\":false},{\"binding\":\"sales\",\"header\":\"Sales\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"downloads\",\"header\":\"Downloads\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"active\",\"header\":\"Active\",\"dataType\":3,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"discount\",\"header\":\"Discount\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false}],\"rowFields\":{\"items\":[\"Country\"]},\"columnFields\":{\"items\":[]},\"filterFields\":{\"items\":[]},\"valueFields\":{\"items\":[\"Sales\"]}}"
        },
        {
            name: "Sales and Downloads by Country",
            def: "{\"showZeros\":false,\"showColumnTotals\":2,\"showRowTotals\":2,\"defaultFilterType\":3,\"fields\":[{\"binding\":\"id\",\"header\":\"Id\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"product\",\"header\":\"Product\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"country\",\"header\":\"Country\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"date\",\"header\":\"Date\",\"dataType\":4,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"format\":\"d\",\"isContentHtml\":false},{\"binding\":\"sales\",\"header\":\"Sales\",\"dataType\":2,\"aggregate\":3,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"downloads\",\"header\":\"Downloads\",\"dataType\":2,\"aggregate\":3,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"active\",\"header\":\"Active\",\"dataType\":3,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"discount\",\"header\":\"Discount\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false}],\"rowFields\":{\"items\":[\"Country\"]},\"columnFields\":{\"items\":[]},\"filterFields\":{\"items\":[]},\"valueFields\":{\"items\":[\"Sales\",\"Downloads\"]}}"
        },
        {
            name: "Sales Trend by Product",
            def: "{\"showZeros\":false,\"showColumnTotals\":0,\"showRowTotals\":0,\"defaultFilterType\":3,\"fields\":[{\"binding\":\"id\",\"header\":\"Id\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"product\",\"header\":\"Product\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"country\",\"header\":\"Country\",\"dataType\":1,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"date\",\"header\":\"Date\",\"dataType\":4,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"format\":\"yyyy \\\"Q\\\"q\",\"isContentHtml\":false},{\"binding\":\"sales\",\"header\":\"Sales\",\"dataType\":2,\"aggregate\":3,\"showAs\":2,\"descending\":false,\"format\":\"p2\",\"isContentHtml\":false},{\"binding\":\"downloads\",\"header\":\"Downloads\",\"dataType\":2,\"aggregate\":3,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false},{\"binding\":\"active\",\"header\":\"Active\",\"dataType\":3,\"aggregate\":2,\"showAs\":0,\"descending\":false,\"isContentHtml\":false},{\"binding\":\"discount\",\"header\":\"Discount\",\"dataType\":2,\"aggregate\":1,\"showAs\":0,\"descending\":false,\"format\":\"n0\",\"isContentHtml\":false}],\"rowFields\":{\"items\":[\"Date\"]},\"columnFields\":{\"items\":[\"Product\"]},\"filterFields\":{\"items\":[]},\"valueFields\":{\"items\":[\"Sales\"]}}"
        }
    ];
});
