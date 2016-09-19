declare var React: any;

var MixedChartTypes = React.createClass({
    render: function () {
        return <div>
            <h2>
                Mixed Chart Types
            </h2>
            <p>
                You can use different chart types for each chart series by setting the <b>chartType</b>
                property on the series itself. This overrides the chart's default chart type.</p>
            <p>
                In the example below, the chart's <b>chartType</b> property is set to <b>Column</b>,
                but the <b>Downloads</b> series overrides that to use the <b>LineAndSymbol</b>
                chart type:</p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#mctJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#mctJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="mctJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getData() } \n'}
                                {'    bindingX="country"\n'}
                                {'    series={[\n'}
                                {'        { name: \'Sales\', binding: \'sales\' },\n'}
                                {'        { name: \'Expenses\', binding: \'expenses\' },\n'}
                                {'        { name: \'Downloads\', binding: \'downloads\', chartType: \'LineSymbols\' }\n'}
                                {'    ]} />'}
                            </div>
                            <div className="tab-pane pane-content" id="mctJs">
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
                            { name: 'Sales', binding: 'sales' },
                            { name: 'Expenses', binding: 'expenses' },
                            { name: 'Downloads', binding: 'downloads', chartType: 'LineSymbols' }
                        ]} />
                </div>
            </div>
        </div>;
    }
});
