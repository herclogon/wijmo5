declare var React: any;

var DynamicCharts = React.createClass({
    render: function () {
        return <div>
            <h2>
                Dynamic Charts
            </h2>
            <p>
                The FlexChart uses an <b>ICollectionView</b> internally, so any changes you make to
                the data source are automatically reflected in the chart.</p>
            <p>
                In this sample, we use a timer to add items to the data source, discarding old items 
                to keep the total count at 200. The result is a dynamic chart that scrolls as new 
                data arrives.</p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#dcJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#dcJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="dcJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getTrafficData() }\n'}
                                {'    chartType="Area"\n'}
                                {'    stacking="Stacked"\n'}
                                {'    bindingX="time"\n'}
                                {'    axisX={{ format: \'mm:ss\' }}\n'}
                                {'    series={[\n'}
                                {'        { name: \'Trucks\', binding: \'trucks\' },\n'}
                                {'        { name: \'Ships\', binding: \'ships\' },\n'}
                                {'        { name: \'Planes\', binding: \'planes\' }\n'}
                                {'    ]} />\n'}
                                {'\n'}
                                {'<dl className="dl-horizontal">\n'}
                                {'    <dt>Update Speed</dt>\n'}
                                {'    <dd>\n'}
                                {'        <div className="btn-group">\n'}
                                {'            <button type="button" className="btn btn-default" \n'}
                                {'                onClick={ Util.setTrafficInterval.bind(this, 1000) }>\n'}
                                {'                Slow\n'}
                                {'            </button>\n'}
                                {'            <button type="button" className="btn btn-default" \n'}
                                {'                onClick={ Util.setTrafficInterval.bind(this, 500) }>\n'}
                                {'                Medium\n'}
                                {'            </button>\n'}
                                {'            <button type="button" className="btn btn-default" \n'}
                                {'                onClick={ Util.setTrafficInterval.bind(this, 10) }>\n'}
                                {'                Fast\n'}
                                {'            </button>\n'}
                                {'            <button type="button" className="btn btn-default" \n'}
                                {'                onClick={ Util.setTrafficInterval.bind(this, 0) }>\n'}
                                {'                Stop\n'}
                                {'            </button>\n'}
                                {'        </div>\n'}
                                {'    </dd>\n'}
                                {'</dl>'}
                            </div>
                            <div className="tab-pane pane-content" id="dcJs">
                                {'// generate some dynamic data\n'}
                                {'var trafficInterval,\n'}
                                {'    trafficData = new wijmo.collections.ObservableArray();\n'}
                                {'setTrafficInterval(500);\n'}
                                {'function getTrafficData() {\n'}
                                {'    return trafficData;\n'}
                                {'}\n'}
                                {'function setTrafficInterval(value) {\n'}
                                {'    clearInterval(trafficInterval);\n'}
                                {'    if (value) {\n'}
                                {'        trafficInterval = setInterval(addTrafficItem, value);\n'}
                                {'    }\n'}
                                {'};\n'}
                                {'function addTrafficItem() { ... }\n'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexChart
                        itemsSource={ Util.getTrafficData() }
                        chartType="Area"
                        stacking="Stacked"
                        bindingX="time"
                        axisX={{ format: 'mm:ss' }}
                        series={[
                            { name: 'Trucks', binding: 'trucks' },
                            { name: 'Ships', binding: 'ships' },
                            { name: 'Planes', binding: 'planes' }
                        ]} />

                    <dl className="dl-horizontal">
                        <dt>Update Speed</dt>
                        <dd>
                            <div className="btn-group">
                                <button type="button" className="btn btn-default" 
                                    onClick={ Util.setTrafficInterval.bind(this, 1000) }>
                                    Slow
                                </button>
                                <button type="button" className="btn btn-default" 
                                    onClick={ Util.setTrafficInterval.bind(this, 500) }>
                                    Medium
                                </button>
                                <button type="button" className="btn btn-default" 
                                    onClick={ Util.setTrafficInterval.bind(this, 50) }>
                                    Fast
                                </button>
                                <button type="button" className="btn btn-default" 
                                    onClick={ Util.setTrafficInterval.bind(this, 0) }>
                                    Stop
                                </button>
                            </div>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>;
    }
});
