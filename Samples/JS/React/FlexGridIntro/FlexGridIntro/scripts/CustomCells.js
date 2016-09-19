var CustomCells = React.createClass({
    // Wijmo event handler
    formatItem: function (s, e) {
        var flex = s;
        if (e.panel == flex.cells && flex.columns[e.col].binding == 'country') {
            e.cell.innerHTML = wijmo.format('<img src="resources/{country}.png"> {country}', flex.rows[e.row].dataItem);
        }
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Custom Cells"), React.createElement("p", null, "FlexGrid has a ", React.createElement("b", null, "formatItem"), " event that gives you complete control over" + ' ' + "the contents of the cells. The event handler can get all the information it" + ' ' + "needs from the grid, and then modify the cell element accordingly."), React.createElement("p", null, "The example below uses the ", React.createElement("b", null, "formatItem"), " event to add a flag to the" + ' ' + "content of the 'Country' column:"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#ccJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#ccJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "ccJsx"}, '<Wj.FlexGrid\n', '    itemsSource={ Util.getData() }\n', '    formatItem={ this.formatItem } />'), React.createElement("div", {className: "tab-pane pane-content", id: "ccJs"}, 'formatItem: function(s, e) {\n', '    var flex = s;\n', '    if (e.panel == flex.cells && flex.columns[e.col].binding == \'country\') {\n', '        e.cell.innerHTML = wijmo.format(\n', '            \'<img src="resources/{country}.png"> {country}\', \n', '            flex.rows[e.row].dataItem);\n', '    }\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {itemsSource: Util.getData(), formatItem: this.formatItem}))));
    }
});
//# sourceMappingURL=CustomCells.js.map