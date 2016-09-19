var NullValues = React.createClass({
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Handling Null Values"), React.createElement("p", null, "By default, FlexGrid allows you to enter empty values in columns of type string," + ' ' + "and will not allow empty/null values in columns of any other type."), React.createElement("p", null, "You can change this behavior using the ", React.createElement("b", null, "isRequired"), " property on grid columns." + ' ' + "If you set the ", React.createElement("b", null, "isRequired"), " property to false, the grid will allow you to" + ' ' + "enter empty values in that column, regardless of type. Conversely, if you set" + ' ' + "the ", React.createElement("b", null, "isRequired"), " property to true, the grid will not allow empty values" + ' ' + "even in string columns."), React.createElement("p", null, "Setting ", React.createElement("b", null, "isRequired"), " to null reverts to the default behavior (nulls are" + ' ' + "allowed only in string columns)."), React.createElement("p", null, "The grid below reverts the default behavior. It sets ", React.createElement("b", null, "isRequired"), " to true" + ' ' + "for the first column and to false for the others. You can delete content that" + ' ' + "is not required by entering an empty string or simply by pressing the delete" + ' ' + "key."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#nvJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#nvJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "nvJsx"}, '<Wj.FlexGrid\n', '    autoGenerateColumns={ false }\n', '    itemsSource={ Util.getData() }\n', '    columns={[\n', '        { header: \'Country\', binding: \'country\', width: \'*\', isRequired: true },\n', '        { header: \'Date\', binding: \'date\', isRequired: false },\n', '        { header: \'Revenue\', binding: \'amount\', format: \'n0\', isRequired: false },\n', '        { header: \'Active\', binding: \'active\', isRequired: false }\n', '    ]}/>'), React.createElement("div", {className: "tab-pane pane-content", id: "nvJs"}, 'function getCountries() {\n', '    return \'US,Germany,UK,Japan,Italy,Greece\'.split(\',\');\n', '}\n', 'function getData() {\n', '    var countries = getCountries(),\n', '        data = [];\n', '    for (var i = 0; i < 100; i++) {\n', '        data.push({\n', '            id: i,\n', '            country: countries[i % countries.length],\n', '            date: new Date(2014, i % 12, i % 28),\n', '            amount: Math.random() * 10000,\n', '            active: i % 4 == 0\n', '        });\n', '    }\n', '    return data;\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {autoGenerateColumns: false, itemsSource: Util.getData(), columns: [
            { header: 'Country', binding: 'country', width: '*', isRequired: true },
            { header: 'Date', binding: 'date', isRequired: false },
            { header: 'Revenue', binding: 'amount', format: 'n0', isRequired: false },
            { header: 'Active', binding: 'active', isRequired: false }
        ]}))));
    }
});
//# sourceMappingURL=NullValues.js.map