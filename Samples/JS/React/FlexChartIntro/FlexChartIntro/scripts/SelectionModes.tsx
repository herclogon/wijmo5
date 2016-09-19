declare var React: any;

var SelectionModes = React.createClass({
    getInitialState: function () {
        return {
            chartType: 'Column',
            selectionMode: 'None',
            selection: null
        }
    },

    // event handlers
    selectionModeChanged: function (s, e) {
        this.setState({ selectionMode: s.text });
    },
    chartTypeChanged: function(s, e) {
        this.setState({ chartType: s.text });
    },
    selectionChanged: function(s, e) {
        this.setState({ selection: s.selection });
    },

    render: function () {
        return <div>
            <h2>
                Selection Modes
            </h2>
            <p>
                The FlexChart allows you to select series or data points by clicking or touching them.
                Use the <b>selectionMode</b> property to specify whether you want to allow selection 
                by series, by data point, or no selection at all (selection is off by default.)</p>
            <p>
                Setting the <b>selectionMode</b> property to <b>Series</b> or <b>Point</b> causes
                the FlexChart to update the <b>Selection</b> property when the user clicks the
                mouse, and to apply the "wj-state-selected" class to selected chart elements.</p>
            <p>
                The <b>Selection</b> property returns the currently selected series. To get the
                currently selected data point, get the currently selected item within the 
                selected series using the <b>Series.collectionView.currentItem</b> property
                as shown in the example.</p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#smJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#smJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="smJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getData() }\n'}
                                {'    bindingX="country"\n'}
                                {'    tooltip={{ content: \'\' }}\n'}
                                {'    chartType={ this.state.chartType }\n'}
                                {'    selectionMode={ this.state.selectionMode }\n'}
                                {'    selectionChanged={ this.selectionChanged }\n'}
                                {'    series={[\n'}
                                {'        { name: \'Sales\', binding: \'sales\' },\n'}
                                {'        { name: \'Expenses\', binding: \'expenses\' },\n'}
                                {'        { name: \'Downloads\', binding: \'downloads\' }\n'}
                                {'    ]} />\n'}
                                {'<dl className="dl-horizontal">\n'}
                                {'    <dt>Selection Mode</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.ComboBox \n'}
                                {'            itemsSource={ Util.getSelectionModes() } \n'}
                                {'            text={ this.state.selectionMode }\n'}
                                {'            textChanged={ this.selectionModeChanged }/>\n'}
                                {'    </dd>\n'}
                                {'    <dt>Chart Type</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.ComboBox \n'}
                                {'            itemsSource={ Util.getChartTypes() } \n'}
                                {'            text={ this.state.chartType }\n'}
                                {'            textChanged={ this.chartTypeChanged }/>\n'}
                                {'    </dd>\n'}
                                {'</dl>\n'}
                                {'<ChartSelection\n'}
                                {'    selectionMode={this.state.selectionMode}\n'}
                                {'    selection={ this.state.selection } />'}
                            </div>
                            <div className="tab-pane pane-content" id="smJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        chartType: \'Column\',\n'}
                                {'        selectionMode: \'None\',\n'}
                                {'        selection: null\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// event handlers\n'}
                                {'selectionModeChanged: function (s, e) {\n'}
                                {'    this.setState({ selectionMode: s.text });\n'}
                                {'},\n'}
                                {'chartTypeChanged: function(s, e) {\n'}
                                {'    this.setState({ chartType: s.text });\n'}
                                {'},\n'}
                                {'selectionChanged: function(s, e) {\n'}
                                {'    this.setState({ selection: s.selection });\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexChart
                        itemsSource={ Util.getData() }
                        bindingX="country"
                        tooltip={{ content: '' }}
                        chartType={ this.state.chartType }
                        selectionMode={ this.state.selectionMode }
                        selectionChanged={ this.selectionChanged }
                        series={[
                            { name: 'Sales', binding: 'sales' },
                            { name: 'Expenses', binding: 'expenses' },
                            { name: 'Downloads', binding: 'downloads' }
                        ]} />
                    <dl className="dl-horizontal">
                        <dt>Selection Mode</dt>
                        <dd>
                            <Wj.ComboBox 
                                itemsSource={ Util.getSelectionModes() } 
                                text={ this.state.selectionMode }
                                textChanged={ this.selectionModeChanged }/>
                        </dd>
                        <dt>Chart Type</dt>
                        <dd>
                            <Wj.ComboBox 
                                itemsSource={ Util.getChartTypes() } 
                                text={ this.state.chartType }
                                textChanged={ this.chartTypeChanged }/>
                        </dd>
                    </dl>
                    <ChartSelection selectionMode={this.state.selectionMode} selection={ this.state.selection } />
                </div>
            </div>
        </div>;
    }
});

var ChartSelection = React.createClass({
    render: function () {
        var mode = this.props.selectionMode,
            sel = this.props.selection,
            view = sel ? sel.collectionView: null,
            item = view && mode == 'Point' ? view.currentItem : {};

        return <div style={{ display: view ? '' : 'none' }}>
            <h4>
                Current Selection
            </h4>
            <p>
                Series: <b>{ sel ? sel.name : '' }</b>
            </p>
            <dl className="dl-horizontal" style={{ display: item.country ? '' : 'none' }}>
                <dt>Country</dt>
                <dd>{ item.country }</dd>
                <dt>Sales</dt>
                <dd>{ Util.format(item.sales, 'c') }</dd>
                <dt>Expenses</dt>
                <dd>{ Util.format(item.expenses, 'c') }</dd>
                <dt>Downloads</dt>
                <dd>{ Util.format(item.downloads, 'n0') }</dd>
            </dl>
        </div>;
    }
});
