declare var React: any;

var Theming = React.createClass({
    render: function () {
        return <div>
            <h2>
                Theming
            </h2>
            <p>
                The appearance of the FlexChart is defined in CSS. In addition to the default theme, we 
                include about a dozen professionally designed themes that customize the appearance of
                all Wijmo controls to achieve a consistent, attractive look.</p>
            <p>
                To customize the appearance of the chart, inspect the elements you want to style and 
                create some CSS rules that apply to those elements.</p>
            <p>
                For example, if you right-click one of the labels on the X axis in IE or Chrome, you 
                will see that it is an element with the "wj-label" class, that it is contained in an 
                element with the "wj-axis-x" class, which is contained in the the top-level control 
                element, which has the "wj-flexchart" class. The first CSS rule in this example uses
                this information to customize the X labels. The rule selector adds the additional 
                requirement that the parent element must be have the "wj-flexchart" <b>and</b> the
                "custom-flex-chart" classes. Without this, the rule would apply to all charts on the
                page.</p>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#thmJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#thmCss" role="tab" data-toggle="tab">CSS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="thmJsx">
                                {'<Wj.FlexChart\n'}
                                {'    className="custom-flex-chart"\n'}
                                {'    itemsSource={ Util.getData() }\n'}
                                {'    bindingX="country"\n'}
                                {'    series={[\n'}
                                {'        { name: \'Sales\', binding: \'sales\' },\n'}
                                {'        { name: \'Expenses\', binding: \'expenses\' },\n'}
                                {'        { name: \'Downloads\', binding: \'downloads\' }\n'}
                                {'    ]} />'}
                            </div>
                            <div className="tab-pane pane-content" id="thmCss">
                                {'.custom-flex-chart.wj-flexchart .wj-axis-x .wj-label {\n'}
                                {'    font-family: Courier New, Courier, monospace;\n'}
                                {'    font-weight: bold;\n'}
                                {'}\n'}
                                {'.custom-flex-chart.wj-flexchart .wj-legend .wj-label {\n'}
                                {'    font-family: Courier New, Courier, monospace;\n'}
                                {'    font-weight: bold;\n'}
                                {'}\n'}
                                {'.custom-flex-chart.wj-flexchart .wj-legend > rect {\n'}
                                {'    fill: #f8f8f8;\n'}
                                {'    stroke: #c0c0c0;\n'}
                                {'}\n'}
                                {'.custom-flex-chart.wj-flexchart .wj-plot-area > rect {\n'}
                                {'    fill: #f8f8f8;\n'}
                                {'    stroke: #c0c0c0;\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexChart 
                        className="custom-flex-chart"
                        itemsSource={ Util.getData() } 
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
