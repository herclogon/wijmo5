declare var React: any;

var ToggleSeries = React.createClass({
    getInitialState() {
        return {
            seriesVisible: [true, true, true]
        }
    },

    // event handlers
    toggleSeriesVisibility: function (index) {
        var sv = this.state.seriesVisible.slice(0);
        sv[index] = !sv[index];
        this.setState({ seriesVisible: sv });
    },
    getSeriesVisibility: function(index) {
        return this.state.seriesVisible[index] ? 'Visible' : 'Hidden';
    },

    render: function () {
        return <div>
            <h2>
                Toggle Series
            </h2>
            <p>
                The <b>Series</b> class has a <b>visibility</b> property that allows you to
                determine whether a series should be shown in the chart and in the legend,
                only in the legend, or completely hidden.</p>
            <p>
                This sample shows how you can use the <b>visibility</b> property to toggle 
                the visibility of a series using two methods:</p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#tsJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#tsJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="tsJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getData() }\n'}
                                {'    legendToggle={ true }\n'}
                                {'    bindingX="country"\n'}
                                {'    series={[\n'}
                                {'        { name: \'Sales\', binding: \'sales\', visibility: this.getSeriesVisibility(0) },\n'}
                                {'        { name: \'Expenses\', binding: \'expenses\', visibility: this.getSeriesVisibility(1) },\n'}
                                {'        { name: \'Downloads\', binding: \'downloads\', visibility: this.getSeriesVisibility(2) }\n'}
                                {'    ]} />\n'}
                                {'\n'}
                                {'Sales <input type="checkbox" \n'}
                                {'    checked={ this.state.seriesVisible[0] }\n'}
                                {'    onChange={ this.toggleSeriesVisibility.bind(this, 0) } /><br />\n'}
                                {'Expenses <input type="checkbox"\n'}
                                {'    checked={ this.state.seriesVisible[1] }\n'}
                                {'    onChange={ this.toggleSeriesVisibility.bind(this, 1) } /><br />\n'}
                                {'Downloads <input type="checkbox"\n'}
                                {'    checked={ this.state.seriesVisible[2] }\n'}
                                {'    onChange={ this.toggleSeriesVisibility.bind(this, 2) } />'}
                            </div>
                            <div className="tab-pane pane-content" id="tsJs">
                                {'getInitialState() {\n'}
                                {'    return {\n'}
                                {'        seriesVisible: [true, true, true]\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// event handlers\n'}
                                {'toggleSeriesVisibility: function (index) {\n'}
                                {'    var sv = this.state.seriesVisible.slice(0);\n'}
                                {'    sv[index] = !sv[index];\n'}
                                {'    this.setState({ seriesVisible: sv });\n'}
                                {'},\n'}
                                {'getSeriesVisibility: function(index) {\n'}
                                {'    return this.state.seriesVisible[index] ? \'Visible\' : \'Hidden\';\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexChart 
                        itemsSource={ Util.getData() } 
                        legendToggle={ true }
                        bindingX="country"
                        series={[
                            { name: 'Sales', binding: 'sales', visibility: this.getSeriesVisibility(0) },
                            { name: 'Expenses', binding: 'expenses', visibility: this.getSeriesVisibility(1) },
                            { name: 'Downloads', binding: 'downloads', visibility: this.getSeriesVisibility(2) }
                        ]} />

                    Sales <input type="checkbox" 
                        checked={ this.state.seriesVisible[0] }
                        onChange={ this.toggleSeriesVisibility.bind(this, 0) } /><br />
                    Expenses <input type="checkbox"
                        checked={ this.state.seriesVisible[1] }
                        onChange={ this.toggleSeriesVisibility.bind(this, 1) } /><br />
                    Downloads <input type="checkbox"
                        checked={ this.state.seriesVisible[2] }
                        onChange={ this.toggleSeriesVisibility.bind(this, 2) } /><br />
                </div>
            </div>
        </div>;
    }
});
