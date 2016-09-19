var SortingTrees = React.createClass({
    // Wijmo event handler
    sortedColumn: function (s, e) {
        // sort top-level items
        var view = s.collectionView;
        if (view && s.childItemsPath) {
            for (var i = 0; i < view.items.length; i++) {
                sortItem(view.items[i], view, s.childItemsPath);
            }
            view.refresh();
        }
        // sort child items
        function sortItem(item, view, childItemsPath) {
            var children = item[childItemsPath];
            if (children && wijmo.isArray(children)) {
                children.sort(view._compareItems());
                for (var i = 0; i < children.length; i++) {
                    sortItem(children[i], view, childItemsPath);
                }
            }
        }
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Sorting Trees"), React.createElement("p", null, "By default, sorting a grid containing hierarchical data only sorts the top-level items." + ' ' + "This is because the ", React.createElement("b", null, "CollectionView"), " does not know about the data hierarchy," + ' ' + "since the ", React.createElement("b", null, "childItemsPath"), " property belongs to the grid and not to the" + ' ' + "underlying ", React.createElement("b", null, "CollectionView"), "."), React.createElement("p", null, "If you do want to sort some or all of the grid's child items, you should handle the" + ' ' + "grid's ", React.createElement("b", null, "sortedColumn"), " event to enumerate the items and perform the additional" + ' ' + "sorting on the child items yourself."), React.createElement("p", null, "This example shows how to do this assuming you want the child items sorted in the same" + ' ' + "order as the top-level items. In this scenario, you can call the ", React.createElement("b", null, "sort"), " method on" + ' ' + "the child items array using the ", React.createElement("b", null, "CollectionView"), "'s ", React.createElement("b", null, "_compareItems"), " method to" + ' ' + "compare the items. This is the same method the ", React.createElement("b", null, "CollectionView"), " uses internally."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#stJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#stJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "stJsx"}, '<Wj.FlexGrid\n', '    className="custom-flex-grid"\n', '    childItemsPath="items"\n', '    allowResizing="None"\n', '    selectionMode="ListBox"\n', '    headersVisibility="Column"\n', '    autoGenerateColumns={ false }\n', '    itemsSource={ Util.getTreeData() }\n', '    columns={[\n', '        { binding: \'name\', width: \'*\' },\n', '        { binding: \'length\', width: 80, align: \'center\' }\n', '    ]}\n', '    sortedColumn={ this.sortedColumn } />'), React.createElement("div", {className: "tab-pane pane-content", id: "stJs"}, 'sortedColumn: function (s, e) {\n', '\n', '    // sort top-level items\n', '    var view = s.collectionView;\n', '    if (view && s.childItemsPath) {\n', '        for (var i = 0; i < view.items.length; i++) {\n', '            sortItem(view.items[i], view, s.childItemsPath);\n', '        }\n', '        view.refresh();\n', '    }\n', '\n', '    // sort child items\n', '    function sortItem(item, view, childItemsPath) {\n', '        var children = item[childItemsPath];\n', '        if (children && wijmo.isArray(children)) {\n', '            children.sort(view._compareItems());\n', '            for (var i = 0; i < children.length; i++) {\n', '                sortItem(children[i], view, childItemsPath);\n', '            }\n', '        }\n', '    }\n', '}'))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexGrid, {className: "custom-flex-grid", childItemsPath: "items", allowResizing: "None", selectionMode: "ListBox", headersVisibility: "Column", autoGenerateColumns: false, itemsSource: Util.getTreeData(), columns: [
            { binding: 'name', width: '*' },
            { binding: 'length', width: 80, align: 'center' }
        ], sortedColumn: this.sortedColumn}))));
    }
});
//# sourceMappingURL=SortingTrees.js.map