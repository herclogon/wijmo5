var ToggleSeries = React.createClass({
    getInitialState: function () {
        return {
            seriesVisible: [true, true, true]
        };
    },
    // event handlers
    toggleSeriesVisibility: function (index) {
        var sv = this.state.seriesVisible.slice(0);
        sv[index] = !sv[index];
        this.setState({ seriesVisible: sv });
    },
    getSeriesVisibility: function (index) {
        return this.state.seriesVisible[index] ? 'Visible' : 'Hidden';
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Toggle Series"), React.createElement("p", null, "The ", React.createElement("b", null, "Series"), " class has a ", React.createElement("b", null, "visibility"), " property that allows you to" + ' ' + "determine whether a series should be shown in the chart and in the legend," + ' ' + "only in the legend, or completely hidden."), React.createElement("p", null, "This sample shows how you can use the ", React.createElement("b", null, "visibility"), " property to toggle" + ' ' + "the visibility of a series using two methods:"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#tsJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#tsJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "tsJsx"}, '<Wj.FlexChart\n', '    itemsSource={ Util.getData() }\n', '    legendToggle={ true }\n', '    bindingX="country"\n', '    series={[\n', '        { name: \'Sales\', binding: \'sales\', visibility: this.getSeriesVisibility(0) },\n', '        { name: \'Expenses\', binding: \'expenses\', visibility: this.getSeriesVisibility(1) },\n', '        { name: \'Downloads\', binding: \'downloads\', visibility: this.getSeriesVisibility(2) }\n', '    ]} />\n', '\n', 'Sales <input type="checkbox" \n', '    checked={ this.state.seriesVisible[0] }\n', '    onChange={ this.toggleSeriesVisibility.bind(this, 0) } /><br />\n', 'Expenses <input type="checkbox"\n', '    checked={ this.state.seriesVisible[1] }\n', '    onChange={ this.toggleSeriesVisibility.bind(this, 1) } /><br />\n', 'Downloads <input type="checkbox"\n', '    checked={ this.state.seriesVisible[2] }\n', '    onChange={ this.toggleSeriesVisibility.bind(this, 2) } />'), React.createElement("div", {className: "tab-pane pane-content", id: "tsJs"}, 'getInitialState() {\n', '    return {\n', '        seriesVisible: [true, true, true]\n', '    }\n', '},\n', '\n', '// event handlers\n', 'toggleSeriesVisibility: function (index) {\n', '    var sv = this.state.seriesVisible.slice(0);\n', '    sv[index] = !sv[index];\n', '    this.setState({ seriesVisible: sv });\n', '},\n', 'getSeriesVisibility: function(index) {\n', '    return this.state.seriesVisible[index] ? \'Visible\' : \'Hidden\';\n', '}')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexChart, {itemsSource: Util.getData(), legendToggle: true, bindingX: "country", series: [
            { name: 'Sales', binding: 'sales', visibility: this.getSeriesVisibility(0) },
            { name: 'Expenses', binding: 'expenses', visibility: this.getSeriesVisibility(1) },
            { name: 'Downloads', binding: 'downloads', visibility: this.getSeriesVisibility(2) }
        ]}), "Sales ", React.createElement("input", {type: "checkbox", checked: this.state.seriesVisible[0], onChange: this.toggleSeriesVisibility.bind(this, 0)}), React.createElement("br", null), "Expenses ", React.createElement("input", {type: "checkbox", checked: this.state.seriesVisible[1], onChange: this.toggleSeriesVisibility.bind(this, 1)}), React.createElement("br", null), "Downloads ", React.createElement("input", {type: "checkbox", checked: this.state.seriesVisible[2], onChange: this.toggleSeriesVisibility.bind(this, 2)}), React.createElement("br", null))));
    }
});
//# sourceMappingURL=ToggleSeries.js.map