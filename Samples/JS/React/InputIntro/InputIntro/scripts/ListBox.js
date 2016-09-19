var ListBox = React.createClass({
    getInitialState: function () {
        var countries = Util.getCountries();
        return {
            countries: countries,
            selectedIndex: 0,
            selectedValue: countries[0]
        };
    },
    // Wijmo event handlers
    selChanged: function (s, e) {
        this.setState({
            selectedIndex: s.selectedIndex,
            selectedValue: s.selectedValue
        });
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "ListBox"), React.createElement("p", null, "The ListBox control displays a list of items and allows you to select items using your" + ' ' + "mouse and keyboard. Like the AutoComplete and ComboBox controls, you must specify the" + ' ' + "ListBox's ", React.createElement("b", null, "itemsSource"), " property in order to use the control."), React.createElement("p", null, "The example below allows you to select an item within the ListBox control, and also displays" + ' ' + "the control's ", React.createElement("b", null, "selectedIndex"), " and ", React.createElement("b", null, "selectedValue"), " properties."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#lbJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#lbJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "lbJsx"}, '<div className="app-input-group">\n', '    <Wj.ListBox\n', '        style={{ width: \'250px\', height: \'150px\' }}\n', '        itemsSource={ this.state.countries }\n', '        selectedIndexChanged={ this.selChanged }/>\n', '    <p>\n', '        <b>selectedIndex: { this.state.selectedIndex }</b>\n', '    </p>\n', '    <p>\n', '        <b>selectedValue: { this.state.selectedValue }</b>\n', '    </p>\n', '</div>'), React.createElement("div", {className: "tab-pane pane-content", id: "lbJs"}, 'getInitialState: function () {\n', '    var countries = Util.getCountries();\n', '    return {\n', '        countries: countries,\n', '        selectedIndex: 0,\n', '        selectedValue: countries[0]\n', '    }\n', '},\n', '\n', '// Wijmo event handlers\n', 'selChanged: function(s, e) {\n', '    this.setState({\n', '        selectedIndex: s.selectedIndex,\n', '        selectedValue: s.selectedValue\n', '    });\n', '}')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement("div", {className: "app-input-group"}, React.createElement(Wj.ListBox, {style: { width: '250px', height: '150px' }, itemsSource: this.state.countries, selectedIndexChanged: this.selChanged}), React.createElement("p", null, React.createElement("b", null, "selectedIndex: ", this.state.selectedIndex)), React.createElement("p", null, React.createElement("b", null, "selectedValue: ", this.state.selectedValue))))));
    }
});
//# sourceMappingURL=ListBox.js.map