declare var React: any;

var Tooltips = React.createClass({
    render: function () {
        return <div>
            <h2>
                Tooltips
            </h2>
            <p>
                The FlexChart has built-in support for tooltips. By default, the control displays
                tooltips when the user touches or hovers the mouse on a data point.</p>
            <p>
                The tooltip content is generated using a template that may contain the following
                parameters:</p>
            <ul>
                <li><b>seriesName</b>: The name of the series that contains the chart element.</li>
                <li><b>pointIndex</b>: The index of the chart element within the series.</li>
                <li><b>x</b>: The <b>x</b> value of the chart element.</li>
                <li><b>y</b>: The <b>y</b> value of the chart element.</li>
            </ul>
            <p>
                By default, the tooltip template is set to 
                {' '}<code>&lt;b&gt;{'{'}seriesName}&lt;/b&gt;&lt;br/&gt;{'{'}x} {'{'}y}</code>.
                You can see how that works in the charts above.
                In this example, we set the tooltip template to 
                {' '}<code>&lt;b&gt;{'{'}seriesName}&lt;/b&gt; &lt;img src='resources/{'{'}x}.png'/&gt;&lt;br/&gt;{'{'}y}</code>,
                which replaces the country name with the country's flag.</p>
            <p>
                You can disable the chart tooltips by setting the template to an empty string.</p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#ttJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#ttJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="ttJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getData() }\n'}
                                {'    tooltip={{ content: \'<img src="resources/{x}.png"/> <b>{seriesName}</b><br/>{y}\' }}\n'}
                                {'    bindingX="country"\n'}
                                {'    series={[\n'}
                                {'        { name: \'Sales\', binding: \'sales\' },\n'}
                                {'        { name: \'Expenses\', binding: \'expenses\' },\n'}
                                {'        { name: \'Downloads\', binding: \'downloads\' }\n'}
                                {'    ]} />'}
                            </div>
                            <div className="tab-pane pane-content" id="ttJs">
                                // no code required
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexChart 
                        itemsSource={ Util.getData() }
                        tooltip={{ content: '<img src="resources/{x}.png"/> <b>{seriesName}</b><br/>{y}' }}
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
