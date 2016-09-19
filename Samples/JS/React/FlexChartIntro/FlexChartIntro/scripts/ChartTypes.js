var ChartTypes = React.createClass({
    getInitialState: function () {
        return {
            chartType: 'Line',
            stacking: 'None',
            rotated: false,
        };
    },
    // event handlers
    chartTypeChanged: function (s, e) {
        this.setState({ chartType: s.text });
    },
    chartStackingChanged: function (s, e) {
        this.setState({ stacking: s.text });
    },
    rotatedChanged: function (e) {
        this.setState({ rotated: e.target.checked });
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Chart Types"), React.createElement("p", null, "The FlexChart control has three properties that allow you to customize the chart" + ' ' + "type: "), React.createElement("ol", null, React.createElement("li", null, React.createElement("b", null, "chartType"), ": Selects the default chart type to be used for all series objects." + ' ' + "Individual series objects can override this."), React.createElement("li", null, React.createElement("b", null, "stacking"), ": Determines whether series objects are plotted independently," + ' ' + "stacked, or stacked so their sum is 100%."), React.createElement("li", null, React.createElement("b", null, "rotated"), ": Flips the X and Y axes so X becomes vertical and Y horizontal.")), React.createElement("p", null, "The example below allows you to see what happens when you change these properties: "), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#ctJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#ctJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "ctJsx"}, '<Wj.FlexChart\n', '    itemsSource={ Util.getData() }\n', '    chartType={ this.state.chartType }\n', '    stacking={ this.state.stacking }\n', '    rotated={ this.state.rotated }\n', '    bindingX="country"\n', '    series={[\n', '        { name: \'Sales\', binding: \'sales\' },\n', '        { name: \'Expenses\', binding: \'expenses\' },\n', '        { name: \'Downloads\', binding: \'downloads\' }\n', '    ]}/>\n', '\n', '<dl className="dl-horizontal">\n', '    <dt>Chart Type</dt>\n', '    <dd>\n', '        <Wj.ComboBox\n', '            itemsSource={ Util.getChartTypes() }\n', '            text={ this.state.chartType }\n', '            textChanged={ this.chartTypeChanged }/>\n', '    </dd>\n', '    <dt>Stacking</dt>\n', '    <dd>\n', '        <Wj.ComboBox\n', '            itemsSource={ Util.getStackingOptions() }\n', '            text={ this.state.stacking }\n', '            textChanged={ this.chartStackingChanged }/>\n', '    </dd>\n', '    <dt>Rotated</dt>\n', '    <dd>\n', '        <input type="checkbox" \n', '            checked={ this.state.rotated }\n', '            onChange={ this.rotatedChanged } />\n', "\\n'}", '    </dd>\n', '</dl>'), React.createElement("div", {className: "tab-pane pane-content", id: "ctJs"}, 'getInitialState: function () {\n', '    return {\n', '        chartType: \'Line\', \n', '        stacking: \'None\', \n', '        rotated: false, \n', '    }\n', '},\n', '\n', '// event handlers\n', 'chartTypeChanged: function (s, e) {\n', '    this.setState({ chartType: s.text });\n', '},\n', 'chartStackingChanged: function(s, e) {\n', '    this.setState({ stacking: s.text });\n', '},\n', 'rotatedChanged: function(e) {\n', '    this.setState({ rotated: e.target.checked });\n', '}')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexChart, {itemsSource: Util.getData(), chartType: this.state.chartType, stacking: this.state.stacking, rotated: this.state.rotated, bindingX: "country", series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ]}), React.createElement("dl", {className: "dl-horizontal"}, React.createElement("dt", null, "Chart Type"), React.createElement("dd", null, React.createElement(Wj.ComboBox, {itemsSource: Util.getChartTypes(), text: this.state.chartType, textChanged: this.chartTypeChanged})), React.createElement("dt", null, "Stacking"), React.createElement("dd", null, React.createElement(Wj.ComboBox, {itemsSource: Util.getStackingOptions(), text: this.state.stacking, textChanged: this.chartStackingChanged})), React.createElement("dt", null, "Rotated"), React.createElement("dd", null, React.createElement("input", {type: "checkbox", checked: this.state.rotated, onChange: this.rotatedChanged}))))));
    }
});
//# sourceMappingURL=ChartTypes.js.map