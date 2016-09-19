declare var React: any;

var StylingSeries = React.createClass({
    render: function () {
        return <div>
            <h2>
                Styling Series
            </h2>
            <p>
                The FlexChart automatically picks colors for each series based on a default
                palette, which you can override by setting the <b>palette</b> property.
                But you can also override the default settings by setting the <b>style</b> 
                property of any series to an object that specifies SVG styling attributes, 
                including <b>fill</b>, <b>stroke</b>, <b>strokeThickness</b>, and so on.</p>
            <p>
                The <b>Series.style</b> property is an exception to the general rule that
                all styling in Wijmo is done through CSS. The exception reflects the fact
                that many charts have dynamic series, which would be impossible to style
                in advance. For example, a stock chart may show series selected by the 
                user while running the application.</p>
            <p>
                The chart in this example uses the <b>style</b> and <b>symbolStyle</b> properties 
                to select style attributes for each series:</p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#ssJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#ssJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="ssJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getData() }\n'}
                                {'    bindingX="country"\n'}
                                {'    series={[\n'}
                                {'        {\n'}
                                {'            name: \'Sales\',\n'}
                                {'            binding: \'sales\',\n'}
                                {'            style: { fill:\'green\', stroke:\'darkgreen\', \'stroke-width\': 1 }\n'}
                                {'        }, {\n'}
                                {'            name: \'Expenses\',\n'}
                                {'            binding: \'expenses\',\n'}
                                {'            style: { fill:\'red\', stroke:\'darkred\', \'stroke-width\': 1 }\n'}
                                {'        }, {\n'}
                                {'            name: \'Downloads\',\n'}
                                {'            binding: \'downloads\',\n'}
                                {'            chartType: \'LineSymbols\',\n'}
                                {'            style: { stroke:\'orange\', \'stroke-width\': 5 },\n'}
                                {'            symbolStyle: { fill:\'gold\', stroke:\'gold\' }\n'}
                                {'        }\n'}
                                {'    ]} />'}
                            </div>
                            <div className="tab-pane pane-content" id="ssJs">
                                // no code required
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexChart 
                        itemsSource={ Util.getData() } 
                        bindingX="country"
                        series={[
                            { 
                                name: 'Sales', 
                                binding: 'sales', 
                                style: { fill:'green', stroke:'darkgreen', 'stroke-width': 1 } 
                            }, {
                                name: 'Expenses', 
                                binding: 'expenses', 
                                style: { fill:'red', stroke:'darkred', 'stroke-width': 1 } 
                            }, { 
                                name: 'Downloads', 
                                binding: 'downloads', 
                                chartType: 'LineSymbols', 
                                style: { stroke:'orange', 'stroke-width': 5 },
                                symbolStyle: { fill:'gold', stroke:'gold' }
                            }
                        ]} />
                </div>
            </div>
        </div>;
    }
});
