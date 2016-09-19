var StylingSeries = React.createClass({
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Styling Series"), React.createElement("p", null, "The FlexChart automatically picks colors for each series based on a default" + ' ' + "palette, which you can override by setting the ", React.createElement("b", null, "palette"), " property." + ' ' + "But you can also override the default settings by setting the ", React.createElement("b", null, "style"), "property of any series to an object that specifies SVG styling attributes," + ' ' + "including ", React.createElement("b", null, "fill"), ", ", React.createElement("b", null, "stroke"), ", ", React.createElement("b", null, "strokeThickness"), ", and so on."), React.createElement("p", null, "The ", React.createElement("b", null, "Series.style"), " property is an exception to the general rule that" + ' ' + "all styling in Wijmo is done through CSS. The exception reflects the fact" + ' ' + "that many charts have dynamic series, which would be impossible to style" + ' ' + "in advance. For example, a stock chart may show series selected by the" + ' ' + "user while running the application."), React.createElement("p", null, "The chart in this example uses the ", React.createElement("b", null, "style"), " and ", React.createElement("b", null, "symbolStyle"), " properties" + ' ' + "to select style attributes for each series:"), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#ssJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#ssJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "ssJsx"}, '<Wj.FlexChart\n', '    itemsSource={ Util.getData() }\n', '    bindingX="country"\n', '    series={[\n', '        {\n', '            name: \'Sales\',\n', '            binding: \'sales\',\n', '            style: { fill:\'green\', stroke:\'darkgreen\', \'stroke-width\': 1 }\n', '        }, {\n', '            name: \'Expenses\',\n', '            binding: \'expenses\',\n', '            style: { fill:\'red\', stroke:\'darkred\', \'stroke-width\': 1 }\n', '        }, {\n', '            name: \'Downloads\',\n', '            binding: \'downloads\',\n', '            chartType: \'LineSymbols\',\n', '            style: { stroke:\'orange\', \'stroke-width\': 5 },\n', '            symbolStyle: { fill:\'gold\', stroke:\'gold\' }\n', '        }\n', '    ]} />'), React.createElement("div", {className: "tab-pane pane-content", id: "ssJs"}, "// no code required")))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement(Wj.FlexChart, {itemsSource: Util.getData(), bindingX: "country", series: [
            {
                name: 'Sales',
                binding: 'sales',
                style: { fill: 'green', stroke: 'darkgreen', 'stroke-width': 1 }
            }, {
                name: 'Expenses',
                binding: 'expenses',
                style: { fill: 'red', stroke: 'darkred', 'stroke-width': 1 }
            }, {
                name: 'Downloads',
                binding: 'downloads',
                chartType: 'LineSymbols',
                style: { stroke: 'orange', 'stroke-width': 5 },
                symbolStyle: { fill: 'gold', stroke: 'gold' }
            }
        ]}))));
    }
});
//# sourceMappingURL=StylingSeries.js.map