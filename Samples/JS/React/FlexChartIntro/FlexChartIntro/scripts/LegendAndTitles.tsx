declare var React: any;

var LegendAndTitles = React.createClass({
    getInitialState: function () {
        return {
            header: 'Sample Chart',
            footer: 'copyright (c) ComponentOne',
            titleX: 'country',
            titleY: 'amount',
            legendPosition: 'Right'
        }
    },

    // event handlers
    headerChanged: function(e) {
        this.setState({ header: e.target.value });
    },
    footerChanged: function(e) {
        this.setState({ footer: e.target.value });
    },
    titleXChanged: function(e) {
        this.setState({ titleX: e.target.value });
    },
    titleYChanged: function(e) {
        this.setState({ titleY: e.target.value });
    },
    legendPositionChanged: function(s, e) {
        this.setState({ legendPosition: s.text });
    },

    render: function () {
        return <div>
            <h2>
                Legend and Titles
            </h2>
            <p>
                Use the <b>legend</b> properties to customize the appearance of the chart legend, and
                the <b>header</b>, <b>footer</b>, and axis <b>title</b> properties to add titles
                to your charts.</p>
            <p>
                You can style the legend and titles using CSS. The CSS tab below shows the rules
                used to customize the appearance of the legend and titles. Notice that these are
                SVG elements, so you have to use CSS attributes such as "fill" instead of "color."</p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#ltJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#ltJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="ltJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getData() } \n'}
                                {'    bindingX="country"\n'}
                                {'    header={ this.state.header }\n'}
                                {'    footer={ this.state.footer }\n'}
                                {'    axisX={{ title: this.state.titleX }}\n'}
                                {'    axisY={{ title: this.state.titleY }}\n'}
                                {'    legend={{ position: this.state.legendPosition }}\n'}
                                {'    series={[\n'}
                                {'        { name: \'Sales\', binding: \'sales\' },\n'}
                                {'        { name: \'Expenses\', binding: \'expenses\' },\n'}
                                {'        { name: \'Downloads\', binding: \'downloads\' }\n'}
                                {'    ]} />\n'}
                                {'<dl className="dl-horizontal">\n'}
                                {'    <dt>Header</dt>\n'}
                                {'    <dd>\n'}
                                {'        <input className="form-control" value={ this.state.header } onChange={ this.headerChanged }/>\n'}
                                {'    </dd>\n'}
                                {'    <dt>Footer</dt>\n'}
                                {'    <dd>\n'}
                                {'        <input className="form-control" value={ this.state.footer } onChange={ this.footerChanged }/>\n'}
                                {'    </dd>\n'}
                                {'    <dt>X-Axis Title</dt>\n'}
                                {'    <dd>\n'}
                                {'        <input className="form-control" value={ this.state.titleX } onChange={ this.titleXChanged }/>\n'}
                                {'    </dd>\n'}
                                {'    <dt>Y-Axis Title</dt>\n'}
                                {'    <dd>\n'}
                                {'        <input className="form-control" value={ this.state.titleY } onChange={ this.titleYChanged } />\n'}
                                {'    </dd>\n'}
                                {'    <dt>Legend Position</dt>\n'}
                                {'    <dd>\n'}
                                {'        <Wj.ComboBox\n'}
                                {'            itemsSource={ Util.getLegendPositions() }\n'}
                                {'            text={ this.state.legendPosition }\n'}
                                {'            textChanged={ this.legendPositionChanged } />\n'}
                                {'    </dd>\n'}
                                {'</dl>'}
                            </div>
                            <div className="tab-pane pane-content" id="ltJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        header: \'Sample Chart\',\n'}
                                {'        footer: \'copyright (c) ComponentOne\',\n'}
                                {'        titleX: \'country\',\n'}
                                {'        titleY: \'amount\',\n'}
                                {'        legendPosition: \'Right\'\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// event handlers\n'}\n'}
                                {'headerChanged: function(e) {\n'}
                                {'    this.setState({ header: e.target.value });\n'}
                                {'},\n'}
                                {'footerChanged: function(e) {\n'}
                                {'    this.setState({ footer: e.target.value });\n'}
                                {'},\n'}
                                {'titleXChanged: function(e) {\n'}
                                {'    this.setState({ titleX: e.target.value });\n'}
                                {'},\n'}
                                {'titleYChanged: function(e) {\n'}
                                {'    this.setState({ titleY: e.target.value });\n'}
                                {'},\n'}
                                {'legendPositionChanged: function(s, e) {\n'}
                                {'    this.setState({ legendPosition: s.text });\n'}
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
                        header={ this.state.header }
                        footer={ this.state.footer }
                        axisX={{ title: this.state.titleX }}
                        axisY={{ title: this.state.titleY }}
                        legend={{ position: this.state.legendPosition }}
                        series={[
                            { name: 'Sales', binding: 'sales' },
                            { name: 'Expenses', binding: 'expenses' },
                            { name: 'Downloads', binding: 'downloads' }
                        ]} />
                    <dl className="dl-horizontal">
                        <dt>Header</dt>
                        <dd>
                            <input className="form-control" value={ this.state.header } onChange={ this.headerChanged }/>
                        </dd>
                        <dt>Footer</dt>
                        <dd>
                            <input className="form-control" value={ this.state.footer } onChange={ this.footerChanged }/>
                        </dd>
                        <dt>X-Axis Title</dt>
                        <dd>
                            <input className="form-control" value={ this.state.titleX } onChange={ this.titleXChanged }/>
                        </dd>
                        <dt>Y-Axis Title</dt>
                        <dd>
                            <input className="form-control" value={ this.state.titleY } onChange={ this.titleYChanged } />
                        </dd>
                        <dt>Legend Position</dt>
                        <dd>
                            <Wj.ComboBox
                                itemsSource={ Util.getLegendPositions() }
                                text={ this.state.legendPosition }
                                textChanged={ this.legendPositionChanged } />
                        </dd>
                    </dl>
                </div>
            </div>
        </div>;
    }
});
