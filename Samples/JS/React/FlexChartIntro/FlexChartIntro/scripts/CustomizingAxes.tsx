declare var React: any;

var CustomizingAxes = React.createClass({
    render: function () {
        return <div>
            <h2>
                Customizing Axes
            </h2>
            <p>
                Use axis properties to customize the chart's axes,
                including ranges (minimum and maximum), label format, tickmark spacing, and
                gridlines.</p>
            <p>
                The <b>Axis</b> class has boolean properties that allow you to turn features on
                or off (<b>axisLine</b>, <b>labels</b>, <b>majorTickMarks</b>, and <b>majorGrid</b>.)
                You can style the appearance of the features that are turned on using CSS.</p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#caJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#caJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="caJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getData() }\n'}
                                {'    axixX={{\n'}
                                {'        axisLine: true,\n'}
                                {'        majorGrid: true\n'}
                                {'    }}\n'}
                                {'    axisY={{\n'}
                                {'        axisLine: true,\n'}
                                {'        majorGrid: true,\n'}
                                {'        format: \'c0\',\n'}
                                {'        max: 10000,\n'}
                                {'        majorUnit: 2000 }}\n'}
                                {'    bindingX="country"\n'}
                                {'    series={[\n'}
                                {'        { name: \'Sales\', binding: \'sales\' },\n'}
                                {'        { name: \'Expenses\', binding: \'expenses\' },\n'}
                                {'        { name: \'Downloads\', binding: \'downloads\' }\n'}
                                {'    ]} />'}
                            </div>
                            <div className="tab-pane pane-content" id="caJs">
                                // no code required
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexChart 
                        itemsSource={ Util.getData() } 
                        axixX={{ 
                            axisLine: true, 
                            majorGrid: true 
                        }} 
                        axisY={{ 
                            axisLine: true, 
                            majorGrid: true, 
                            format: 'c0', 
                            max: 10000, 
                            majorUnit: 2000 }} 
                        bindingX="country"
                        series={[
                            { name: 'Sales', binding: 'sales' },
                            { name: 'Expenses', binding: 'expenses' },
                            { name: 'Downloads', binding: 'downloads' }
                        ]} />
                </div>
            </div>
        </div>;
    }
});
