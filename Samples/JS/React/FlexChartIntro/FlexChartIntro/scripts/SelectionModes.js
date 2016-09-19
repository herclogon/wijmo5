var SelectionModes = React.createClass({
    getInitialState: function () {
        return {
            chartType: 'Column',
            selectionMode: 'None',
            selection: null
        };
    },
    // event handlers
    selectionModeChanged: function (s, e) {
        this.setState({ selectionMode: s.text });
    },
    chartTypeChanged: function (s, e) {
        this.setState({ chartType: s.text });
    },
    selectionChanged: function (s, e) {
        this.setState({ selection: s.selection });
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Selection Modes"), React.createElement("p", null, "The FlexChart allows you to select series or data points by clicking or touching them." + ' ' + "Use the ", React.createElement("b", null, "selectionMode"), " property to specify whether you want to allow selection" + ' ' + "by series, by data point, or no selection at all (selection is off by default.)"), React.createElement("p", null, "Setting the ", React.createElement("b", null, "selectionMode"), " property to ", React.createElement("b", null, "Series"), " or ", React.createElement("b", null, "Point"), " causes" + ' ' + "the FlexChart to update the ", React.createElement("b", null, "Selection"), " property when the user clicks the" + ' ' + "mouse, and to apply the \"wj-state-selected\" class to selected chart elements."), React.createElement("p", null, "The ", React.createElement("b", null, "Selection"), " property returns the currently selected series. To get the" + ' ' + "currently selected data point, get the currently selected item within the" + ' ' + "selected series using the ", React.createElement("b", null, "Series.collectionView.currentItem"), " property" + ' ' + "as shown in the example."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#smJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#smJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "smJsx"}, '<Wj.FlexChart\n', '    itemsSource={ Util.getData() }\n', '    bindingX="country"\n', '    tooltip={{ content: \'\' }}\n', '    chartType={ this.state.chartType }\n', '    selectionMode={ this.state.selectionMode }\n', '    selectionChanged={ this.selectionChanged }\n', '    series={[\n', '        { name: \'Sales\', binding: \'sales\' },\n', '        { name: \'Expenses\', binding: \'expenses\' },\n', '        { name: \'Downloads\', binding: \'downloads\' }\n', '    ]} />\n', '<dl className="dl-horizontal">\n', '    <dt>Selection Mode</dt>\n', '    <dd>\n', '        <Wj.ComboBox \n', '            itemsSource={ Util.getSelectionModes() } \n', '            text={ this.state.selectionMode }\n', '            textChanged={ this.selectionModeChanged }/>\n', '    </dd>\n', '    <dt>Chart Type</dt>\n', '    <dd>\n', '        <Wj.ComboBox \n', '            itemsSource={ Util.getChartTypes() } \n', '            text={ this.state.chartType }\n', '            textChanged={ this.chartTypeChanged }/>\n', '    </dd>\n', '</dl>\n', '<ChartSelection\n', '    selectionMode={this.state.selectionMode}\n', '    selection={ this.state.selection } />'), React.createElement("div", {className: "tab-pane pane-content", id: "smJs"}, 'getInitialState: function () {\n', '    return {\n', '        chartType: \'Column\',\n', '        selectionMode: \'None\',\n', '        selection: null\n', '    }\n', '},\n', '\n', '// event handlers\n', 'selectionModeChanged: function (s, e) {\n', '    this.setState({ selectionMode: s.text });\n', '},\n', 'chartTypeChanged: function(s, e) {\n', '    this.setState({ chartType: s.text });\n', '},\n', 'selectionChanged: function(s, e) {\n', '    this.setState({ selection: s.selection });\n', '}')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexChart, {itemsSource: Util.getData(), bindingX: "country", tooltip: { content: '' }, chartType: this.state.chartType, selectionMode: this.state.selectionMode, selectionChanged: this.selectionChanged, series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ]}), React.createElement("dl", {className: "dl-horizontal"}, React.createElement("dt", null, "Selection Mode"), React.createElement("dd", null, React.createElement(Wj.ComboBox, {itemsSource: Util.getSelectionModes(), text: this.state.selectionMode, textChanged: this.selectionModeChanged})), React.createElement("dt", null, "Chart Type"), React.createElement("dd", null, React.createElement(Wj.ComboBox, {itemsSource: Util.getChartTypes(), text: this.state.chartType, textChanged: this.chartTypeChanged}))), React.createElement(ChartSelection, {selectionMode: this.state.selectionMode, selection: this.state.selection}))));
    }
});
var ChartSelection = React.createClass({
    render: function () {
        var mode = this.props.selectionMode, sel = this.props.selection, view = sel ? sel.collectionView : null, item = view && mode == 'Point' ? view.currentItem : {};
        return React.createElement("div", {style: { display: view ? '' : 'none' }}, React.createElement("h4", null, "Current Selection"), React.createElement("p", null, "Series: ", React.createElement("b", null, sel ? sel.name : '')), React.createElement("dl", {className: "dl-horizontal", style: { display: item.country ? '' : 'none' }}, React.createElement("dt", null, "Country"), React.createElement("dd", null, item.country), React.createElement("dt", null, "Sales"), React.createElement("dd", null, Util.format(item.sales, 'c')), React.createElement("dt", null, "Expenses"), React.createElement("dd", null, Util.format(item.expenses, 'c')), React.createElement("dt", null, "Downloads"), React.createElement("dd", null, Util.format(item.downloads, 'n0'))));
    }
});
//# sourceMappingURL=SelectionModes.js.map