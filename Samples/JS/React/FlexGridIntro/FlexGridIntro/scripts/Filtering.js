var Filtering = React.createClass({
    getInitialState: function () {
        // create view with a filter function
        var view = new wijmo.collections.CollectionView(Util.getData(), {
            filter: function (item) {
                var rx = this.state ? this.state.filterRx : null;
                return rx == null || rx.test(item.country);
            }.bind(this)
        });
        return {
            view: view,
            filterRx: null
        };
    },
    // apply the new filter with some debouncing so user can type a little
    toFilter: null,
    filterChanged: function (e) {
        var _this = this;
        clearTimeout(this.toFilter);
        var filterText = e.target.value;
        this.setState({ filterRx: filterText ? new RegExp(filterText, 'i') : null });
        this.toFilter = setTimeout(function () {
            _this.state.view.refresh();
        }, 500);
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Filtering"), React.createElement("p", null, "The FlexGrid supports filtering through the ", React.createElement("b", null, "ICollectionView"), " interface, which is identical to the" + ' ' + "one in .NET. To enable filtering, set the ", React.createElement("b", null, "CollectionView.filter"), " property to a function that" + ' ' + "determines which objects to include in the view."), React.createElement("p", null, "In this example, we create a filter for the country, and get the filter value from the input control."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#flJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#flJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "flJsx"}, '<Wj.FlexGrid itemsSource={ this.state.view }/>\n', '<div className="input-group">\n', '    <span className="input-group-addon">\n', '        <span className="glyphicon glyphicon-filter"></span>\n', '    </span>\n', '    <input type="text" className="form-control" placeholder="filter"\n', '        onChange={ this.filterChanged } />\n', '</div>'), React.createElement("div", {className: "tab-pane pane-content", id: "flJs"}, 'getInitialState: function () {\n', '\n', '    // create view with a filter function\n', '    var view = new wijmo.collections.CollectionView(Util.getData(), {\n', '        filter: function (item) {\n', '            var rx = this.state ? this.state.filterRx : null;\n', '            return rx == null || rx.test(item.country);\n', '        }.bind(this)\n', '    });\n', '    return {\n', '        view: view,\n', '        filterRx: null\n', '    }\n', '},\n', '\n', '// apply the new filter with some debouncing so user can type a little\n', 'toFilter: null,\n', 'filterChanged: function(e) {\n', '    clearTimeout(this.toFilter);\n', '    var filterText = e.target.value;\n', '    this.setState({ filterRx: filterText ? new RegExp(filterText, \'i\') : null });\n', '    this.toFilter = setTimeout(() => {\n', '        this.state.view.refresh();\n', '    }, 500);\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {itemsSource: this.state.view}), React.createElement("div", {className: "input-group"}, React.createElement("span", {className: "input-group-addon"}, React.createElement("span", {className: "glyphicon glyphicon-filter"})), React.createElement("input", {type: "text", className: "form-control", placeholder: "filter", onChange: this.filterChanged})))), React.createElement("p", null, "The ", React.createElement("b", null, "FlexGridFilter"), " extension provides per-column filtering for the ", React.createElement("b", null, "FlexGrid"), ". It adds" + ' ' + "filter buttons to the column headers. When users click the filter buttons, a popup shows an Excel-style" + ' ' + "UI with filtering options that include by-value and by-condition filters." + ' ' + "The ", React.createElement("b", null, "FlexGridFilter"), " extension is packaged as a separate module (", React.createElement("b", null, "wijmo.grid.filter"), ") and" + ' ' + "requires the ", React.createElement("b", null, "wijmo.input"), " module."), React.createElement("p", null, "The example below demonstrates this option:"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#ftJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#ftJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "ftJsx"}, '<Wj.FlexGrid\n', '    itemsSource={ Util.getData() }\n', '    initialized={ function(s, e) { // when the grid is initialized\n', '        new wijmo.grid.filter.FlexGridFilter(s); // add a FlexGridFilter to it\n', '    }}/>\n'), React.createElement("div", {className: "tab-pane pane-content", id: "ftJs"}, "// no code required"))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {itemsSource: Util.getData(), initialized: function (s, e) {
            new wijmo.grid.filter.FlexGridFilter(s); // add a FlexGridFilter to it
        }}))));
    }
});
//# sourceMappingURL=Filtering.js.map