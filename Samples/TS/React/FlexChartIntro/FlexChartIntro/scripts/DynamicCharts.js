var DynamicCharts = React.createClass({
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Dynamic Charts"), React.createElement("p", null, "The FlexChart uses an ", React.createElement("b", null, "ICollectionView"), " internally, so any changes you make to" + ' ' + "the data source are automatically reflected in the chart."), React.createElement("p", null, "In this sample, we use a timer to add items to the data source, discarding old items" + ' ' + "to keep the total count at 200. The result is a dynamic chart that scrolls as new" + ' ' + "data arrives."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#dcJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#dcJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "dcJsx"}, '<Wj.FlexChart\n', '    itemsSource={ Util.getTrafficData() }\n', '    chartType="Area"\n', '    stacking="Stacked"\n', '    bindingX="time"\n', '    axisX={{ format: \'mm:ss\' }}\n', '    series={[\n', '        { name: \'Trucks\', binding: \'trucks\' },\n', '        { name: \'Ships\', binding: \'ships\' },\n', '        { name: \'Planes\', binding: \'planes\' }\n', '    ]} />\n', '\n', '<dl className="dl-horizontal">\n', '    <dt>Update Speed</dt>\n', '    <dd>\n', '        <div className="btn-group">\n', '            <button type="button" className="btn btn-default" \n', '                onClick={ Util.setTrafficInterval.bind(this, 1000) }>\n', '                Slow\n', '            </button>\n', '            <button type="button" className="btn btn-default" \n', '                onClick={ Util.setTrafficInterval.bind(this, 500) }>\n', '                Medium\n', '            </button>\n', '            <button type="button" className="btn btn-default" \n', '                onClick={ Util.setTrafficInterval.bind(this, 10) }>\n', '                Fast\n', '            </button>\n', '            <button type="button" className="btn btn-default" \n', '                onClick={ Util.setTrafficInterval.bind(this, 0) }>\n', '                Stop\n', '            </button>\n', '        </div>\n', '    </dd>\n', '</dl>'), React.createElement("div", {className: "tab-pane pane-content", id: "dcJs"}, '// generate some dynamic data\n', 'var trafficInterval,\n', '    trafficData = new wijmo.collections.ObservableArray();\n', 'setTrafficInterval(500);\n', 'function getTrafficData() {\n', '    return trafficData;\n', '}\n', 'function setTrafficInterval(value) {\n', '    clearInterval(trafficInterval);\n', '    if (value) {\n', '        trafficInterval = setInterval(addTrafficItem, value);\n', '    }\n', '};\n', 'function addTrafficItem() { ... }\n')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexChart, {itemsSource: Util.getTrafficData(), chartType: "Area", stacking: "Stacked", bindingX: "time", axisX: { format: 'mm:ss' }, series: [
            { name: 'Trucks', binding: 'trucks' },
            { name: 'Ships', binding: 'ships' },
            { name: 'Planes', binding: 'planes' }
        ]}), React.createElement("dl", {className: "dl-horizontal"}, React.createElement("dt", null, "Update Speed"), React.createElement("dd", null, React.createElement("div", {className: "btn-group"}, React.createElement("button", {type: "button", className: "btn btn-default", onClick: Util.setTrafficInterval.bind(this, 1000)}, "Slow"), React.createElement("button", {type: "button", className: "btn btn-default", onClick: Util.setTrafficInterval.bind(this, 500)}, "Medium"), React.createElement("button", {type: "button", className: "btn btn-default", onClick: Util.setTrafficInterval.bind(this, 50)}, "Fast"), React.createElement("button", {type: "button", className: "btn btn-default", onClick: Util.setTrafficInterval.bind(this, 0)}, "Stop")))))));
    }
});
//# sourceMappingURL=DynamicCharts.js.map