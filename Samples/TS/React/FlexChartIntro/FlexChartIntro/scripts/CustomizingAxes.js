var CustomizingAxes = React.createClass({
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Customizing Axes"), React.createElement("p", null, "Use axis properties to customize the chart's axes," + ' ' + "including ranges (minimum and maximum), label format, tickmark spacing, and" + ' ' + "gridlines."), React.createElement("p", null, "The ", React.createElement("b", null, "Axis"), " class has boolean properties that allow you to turn features on" + ' ' + "or off (", React.createElement("b", null, "axisLine"), ", ", React.createElement("b", null, "labels"), ", ", React.createElement("b", null, "majorTickMarks"), ", and ", React.createElement("b", null, "majorGrid"), ".)" + ' ' + "You can style the appearance of the features that are turned on using CSS."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#caJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#caJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "caJsx"}, '<Wj.FlexChart\n', '    itemsSource={ Util.getData() }\n', '    axixX={{\n', '        axisLine: true,\n', '        majorGrid: true\n', '    }}\n', '    axisY={{\n', '        axisLine: true,\n', '        majorGrid: true,\n', '        format: \'c0\',\n', '        max: 10000,\n', '        majorUnit: 2000 }}\n', '    bindingX="country"\n', '    series={[\n', '        { name: \'Sales\', binding: \'sales\' },\n', '        { name: \'Expenses\', binding: \'expenses\' },\n', '        { name: \'Downloads\', binding: \'downloads\' }\n', '    ]} />'), React.createElement("div", {className: "tab-pane pane-content", id: "caJs"}, "// no code required")))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexChart, {itemsSource: Util.getData(), axixX: {
            axisLine: true,
            majorGrid: true
        }, axisY: {
            axisLine: true,
            majorGrid: true,
            format: 'c0',
            max: 10000,
            majorUnit: 2000 }, bindingX: "country", series: [
            { name: 'Sales', binding: 'sales' },
            { name: 'Expenses', binding: 'expenses' },
            { name: 'Downloads', binding: 'downloads' }
        ]}))));
    }
});
//# sourceMappingURL=CustomizingAxes.js.map