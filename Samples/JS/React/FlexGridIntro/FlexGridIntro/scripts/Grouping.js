var Grouping = React.createClass({
    getInitialState: function () {
        var view = new wijmo.collections.CollectionView(Util.getData());
        var groupByOptions = new wijmo.collections.CollectionView([
            { name: 'no grouping', groups: [] },
            { name: 'Country', groups: ['country'] },
            { name: 'Revenue', groups: ['amount'] },
            { name: 'Date', groups: ['date'] },
            { name: 'Country and Date', groups: ['country', 'date'] },
            { name: 'Country and Revenue', groups: ['country', 'amount'] },
            { name: 'Country, Date and Revenue', groups: ['country', 'date', 'amount'] }
        ]);
        return {
            view: view,
            groupByOptions: groupByOptions
        };
    },
    // Wijmo event handlers
    groupByChanged: function (s, e) {
        var cv = this.state.view, groups = this.state.groupByOptions.currentItem.groups;
        cv.groupDescriptions.clear();
        for (var i = 0; i < groups.length; i++) {
            var groupName = groups[i];
            if (groupName == 'date') {
                var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                    return item.date.getFullYear();
                });
                cv.groupDescriptions.push(groupDesc);
            }
            else if (groupName == 'amount') {
                var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                    return item.amount >= 5000 ? '> 5,000' : item.amount >= 500 ? '500 to 5,000' : '< 500';
                });
                cv.groupDescriptions.push(groupDesc);
            }
            else {
                var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName);
                cv.groupDescriptions.push(groupDesc);
            }
        }
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Grouping"), React.createElement("p", null, "FlexGrid supports grouping through the ", React.createElement("b", null, "ICollectionView"), " interface, which is" + ' ' + "identical to the one in .NET. To enable grouping, add one or more ", React.createElement("b", null, "GroupDescription"), " objects to" + ' ' + "the ", React.createElement("b", null, "CollectionView.groupDescriptions"), " property, and ensure that the grid's ", React.createElement("b", null, "showGroups"), " property" + ' ' + "is set to true (the default value)."), React.createElement("p", null, React.createElement("b", null, "GroupDescription"), " objects are flexible, allowing you to group data based on value or on grouping" + ' ' + "functions. The example below groups dates by year; amounts by range returning three ranges: over 5,000," + ' ' + "500 to 5,000, and under 500; and anything else by value. Use the menu to see the effects of each grouping."), React.createElement("p", null, "Notice that the \"Revenue\" column displays the totals in the group rows. We do this by" + ' ' + "setting the column's ", React.createElement("b", null, "aggregate"), " property to \"Sum.\" The aggregate is automatically" + ' ' + "updated when you edit the values in the column."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#gpJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#gpJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "gpJsx"}, '<Wj.FlexGrid\n', '    autoGenerateColumns={ false }\n', '    columns={[\n', '        { header: \'Country\', binding: \'country\', width: \'*\' },\n', '        { header: \'Date\', binding: \'date\' },\n', '        { header: \'Revenue\', binding: \'amount\', format: \'n0\', aggregate: \'Sum\' }\n', '    ]}\n', '    itemsSource={ this.state.view }/>\n', '<label htmlFor="cmbGrp">\n', '    Group By:</label>\n', '<Wj.ComboBox id="cmbGrp"\n', '    displayMemberPath=\'name\'\n', '    itemsSource={ this.state.groupByOptions }\n', '    textChanged={ this.groupByChanged }/>'), React.createElement("div", {className: "tab-pane pane-content", id: "gpJs"}, 'getInitialState: function () {\n', '    var view = new wijmo.collections.CollectionView(Util.getData());\n', '    var groupByOptions = new wijmo.collections.CollectionView([\n', '        { name: \'no grouping\', groups: [] },\n', '        { name: \'Country\', groups: [\'country\'] },\n', '        { name: \'Revenue\', groups: [\'amount\'] },\n', '        { name: \'Date\', groups: [\'date\'] },\n', '        { name: \'Country and Date\', groups: [\'country\', \'date\'] },\n', '        { name: \'Country and Revenue\', groups: [\'country\', \'amount\'] },\n', '        { name: \'Country, Date and Revenue\', groups: [\'country\', \'date\', \'amount\'] }\n', '    ]);\n', '    return {\n', '        view: view,\n', '        groupByOptions: groupByOptions\n', '    }\n', '},\n', '\n', '// Wijmo event handlers\n', 'groupByChanged: function(s, e) {\n', '    var cv = this.state.view,\n', '        groups = this.state.groupByOptions.currentItem.groups;\n', '    cv.groupDescriptions.clear();\n', '    for (var i = 0; i < groups.length; i++) {\n', '        var groupName = groups[i];\n', '        if (groupName == \'date\') { // group dates by year\n', '            var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {\n', '                return item.date.getFullYear();\n', '            });\n', '            cv.groupDescriptions.push(groupDesc);\n', '        } else if (groupName == \'amount\') { // group amounts in ranges\n', '            var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {\n', '                return item.amount >= 5000 ? \'> 5,000\' : item.amount >= 500 ? \'500 to 5,000\' : \'< 500\';\n', '            });\n', '            cv.groupDescriptions.push(groupDesc);\n', '        } else { // group everything else by value\n', '            var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName);\n', '            cv.groupDescriptions.push(groupDesc);\n', '        }\n', '    }\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {autoGenerateColumns: false, columns: [
            { header: 'Country', binding: 'country', width: '*' },
            { header: 'Date', binding: 'date' },
            { header: 'Revenue', binding: 'amount', format: 'n0', aggregate: 'Sum' }
        ], itemsSource: this.state.view}), React.createElement("label", {htmlFor: "cmbGrp"}, "Group By: "), React.createElement(Wj.ComboBox, {id: "cmbGrp", displayMemberPath: 'name', itemsSource: this.state.groupByOptions, textChanged: this.groupByChanged}))));
    }
});
//# sourceMappingURL=Grouping.js.map