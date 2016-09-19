declare var React: any;

var GettingStarted = React.createClass({
    render: function () {
        return <div>
            <h2>
                Getting Started
            </h2>
            <p>
                Steps for getting started with FlexChart in React applications:
            </p>
            <ol>
                <li>Add references to React, Wijmo, and the Wijmo/React interop module.</li>
                <li>Add FlexChart controls to your React components using regular JSX markup 
                    (<code>&lt;Wj.FlexChart&gt;</code>).</li>
                <li>Set the <b>itemsSource</b> attribute to an array that contains the data.</li>
                <li>Add one or more <b>chartSeries</b> to the chart's <b>series</b> collection.</li>
                <li>(Optional) Use CSS to customize the appearance of the controls.</li>
            </ol>

            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#gsJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#gsJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="gsJsx">
                                {'<Wj.FlexChart\n'}
                                {'    itemsSource={ Util.getData() } \n'}
                                {'    bindingX="country"\n'}
                                {'    series={[\n'}
                                {'        { name: \'Sales\', binding: \'sales\' },\n'}
                                {'        { name: \'Expenses\', binding: \'expenses\' },\n'}
                                {'        { name: \'Downloads\', binding: \'downloads\' }\n'}
                                {'    ]} />'}
                            </div>
                            <div className="tab-pane pane-content" id="gsJs">
                                {'export function getCountries() {\n'}
                                {'    return \'US,Germany,UK,Japan,Italy,Greece\'.split(\',\');\n'}
                                {'}\n'}
                                {'export function getData() {\n'}
                                {'    var countries = getCountries(),\n'}
                                {'        data = [];\n'}
                                {'    for (var i = 0; i < countries.length; i++) {\n'}
                                {'        data.push({\n'}
                                {'            country: countries[i],\n'}
                                {'            downloads: Math.round(Math.random() * 20000),\n'}
                                {'            sales: Math.random() * 10000,\n'}
                                {'            expenses: Math.random() * 5000\n'}
                                {'        });\n'}
                                {'    }\n'}
                                {'    return data;\n'}
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
