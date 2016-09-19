declare var React: any;

var ChartTypes = React.createClass({
    getInitialState: function () {
        return {
            chartType: 'Line', 
            stacking: 'None', 
            rotated: false, 
        }
    },

    // event handlers
    chartTypeChanged: function (s, e) {
        this.setState({ chartType: s.text });
    },
    chartStackingChanged: function(s, e) {
        this.setState({ stacking: s.text });
    },
    rotatedChanged: function(e) {
        this.setState({ rotated: e.target.checked });
    },

    render: function () {
        return <div>
            <h2>
                Chart Types
            </h2>
            <p>
                The FlexChart control has three properties that allow you to customize the chart
                type: </p>
            <ol>
                <li>
                    <b>chartType</b>: Selects the default chart type to be used for all series objects.
                    Individual series objects can override this.</li>
                <li>
                    <b>stacking</b>: Determines whether series objects are plotted independently,
                    stacked, or stacked so their sum is 100%.</li>
                <li>
                    <b>rotated</b>: Flips the X and Y axes so X becomes vertical and Y horizontal.</li>
            </ol>
            <p>
                The example below allows you to see what happens when you change these properties: </p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#ctJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#ctJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="ctJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getData() }\n'}
                                {'    chartType={ this.state.chartType }\n'}
                                {'    stacking={ this.state.stacking }\n'}
                                {'    rotated={ this.state.rotated }\n'}
                                {'    bindingX="country"\n'}
                                {'    series={[\n'}
                                {'        { name: \'Sales\', binding: \'sales\' },\n'}
                                {'        { name: \'Expenses\', binding: \'expenses\' },\n'}
                                {'        { name: \'Downloads\', binding: \'downloads\' }\n'}
                                {'    ]}/>\n'}
                                {'\n'}
                                {'<dl className="dl-horizontal">\n'}
                                {'    <dt>Chart Type</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.ComboBox\n'}
                                {'            itemsSource={ Util.getChartTypes() }\n'}
                                {'            text={ this.state.chartType }\n'}
                                {'            textChanged={ this.chartTypeChanged }/>\n'}
                                {'    </dd>\n'}
                                {'    <dt>Stacking</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.ComboBox\n'}
                                {'            itemsSource={ Util.getStackingOptions() }\n'}
                                {'            text={ this.state.stacking }\n'}
                                {'            textChanged={ this.chartStackingChanged }/>\n'}
                                {'    </dd>\n'}
                                {'    <dt>Rotated</dt>\n'}
                                {'    <dd>\n'}
                                {'        <input type="checkbox" \n'}
                                {'            checked={ this.state.rotated }\n'}
                                {'            onChange={ this.rotatedChanged } />\n'}\n'}
                                {'    </dd>\n'}
                                {'</dl>'}
                            </div>
                            <div className="tab-pane pane-content" id="ctJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        chartType: \'Line\', \n'}
                                {'        stacking: \'None\', \n'}
                                {'        rotated: false, \n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// event handlers\n'}
                                {'chartTypeChanged: function (s, e) {\n'}
                                {'    this.setState({ chartType: s.text });\n'}
                                {'},\n'}
                                {'chartStackingChanged: function(s, e) {\n'}
                                {'    this.setState({ stacking: s.text });\n'}
                                {'},\n'}
                                {'rotatedChanged: function(e) {\n'}
                                {'    this.setState({ rotated: e.target.checked });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexChart 
                        itemsSource={ Util.getData() }
                        chartType={ this.state.chartType }
                        stacking={ this.state.stacking }
                        rotated={ this.state.rotated }
                        bindingX="country"
                        series={[
                            { name: 'Sales', binding: 'sales' },
                            { name: 'Expenses', binding: 'expenses' },
                            { name: 'Downloads', binding: 'downloads' }
                        ]}/>

                    <dl className="dl-horizontal">
                        <dt>Chart Type</dt>
                        <dd>
                            <Wj.ComboBox 
                                itemsSource={ Util.getChartTypes() } 
                                text={ this.state.chartType }
                                textChanged={ this.chartTypeChanged }/>
                        </dd>
                        <dt>Stacking</dt>
                        <dd>
                            <Wj.ComboBox 
                                itemsSource={ Util.getStackingOptions() } 
                                text={ this.state.stacking }
                                textChanged={ this.chartStackingChanged }/>
                        </dd>
                        <dt>Rotated</dt>
                        <dd>
                            <input type="checkbox" checked={ this.state.rotated } onChange={ this.rotatedChanged } />
                        </dd>
                    </dl>
                </div>
            </div>
        </div>;
    }
});
