var SelectionModes = React.createClass({
    getInitialState: function () {
        return {
            selModes: 'None,Cell,CellRange,Row,RowRange,ListBox'.split(','),
            selMode: 'CellRange'
        };
    },
    // Wijmo event handlers
    selModeChanged: function (s, e) {
        this.setState({ selMode: s.text });
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Selection Modes"), React.createElement("p", null, "By default, FlexGrid allows you to select a range of cells with the mouse or keyboard," + ' ' + "just like Excel. The ", React.createElement("b", null, "selectionMode"), " property allows you to change that so that you" + ' ' + "can select a row, a range of rows, non-contiguous rows (like in a list-box), a single cell," + ' ' + "or disable selection altogether."), React.createElement("p", null, "This example allows you to pick the ", React.createElement("b", null, "selectionMode"), " from a Wijmo Menu control."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#smJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#smJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "smJsx"}, '<Wj.FlexGrid\n', '    selectionMode={ this.state.selMode }\n', '    itemsSource={ Util.getData() }/>\n', '<label htmlFor="cmbSel">\n', '    SelectionMode: &nbsp; </label>\n', '<Wj.ComboBox\n', '    id="cmbSel"\n', '    itemsSource={ this.state.selModes }\n', '    text={ this.state.selMode }\n', '    textChanged={ this.selModeChanged }/>'), React.createElement("div", {className: "tab-pane pane-content", id: "smJs"}, 'getInitialState: function () {\n', '    return {\n', '        selModes: \'None,Cell,CellRange,Row,RowRange,ListBox\'.split(\',\'),\n', '        selMode: \'CellRange\'\n', '    }\n', '},\n', '\n', '// Wijmo event handlers\n', 'selModeChanged: function(s, e) {\n', '    this.setState({ selMode: s.text });\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {selectionMode: this.state.selMode, itemsSource: Util.getData()}), React.createElement("label", {htmlFor: "cmbSel"}, "SelectionMode:  "), React.createElement(Wj.ComboBox, {id: "cmbSel", itemsSource: this.state.selModes, text: this.state.selMode, textChanged: this.selModeChanged}))));
    }
});
//# sourceMappingURL=SelectionModes.js.map