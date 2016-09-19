declare var React: any;

var GettingStarted = React.createClass({
    render: function () {
        return <div>
            <h2>
                Getting Started
            </h2>
            <p>
                Steps for getting started with FlexGrid in React applications:
            </p>
            <ol>
                <li>Add references to React, Wijmo, and the Wijmo/React interop module.</li>
                <li>Add FlexGrid controls to your React components using regular JSX markup 
                    (<code>&lt;Wj.FlexGrid&gt;</code>).</li>
                <li>Set the <b>itemsSource</b> attribute to an array that contains the data.</li>
                <li>(Optional) Use CSS to customize the appearance of the controls.</li>
            </ol>
            <p>
                This will create a FlexGrid with default behavior, which includes 
                automatic column generation, column sorting and reordering, editing, 
                and clipboard support.</p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#gsJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#gsJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="gsJsx">
                            {'<Wj.FlexGrid itemsSource={ Util.getData() }/>'}
                        </div>
                        <div className="tab-pane pane-content" id="gsJs">
                            {'function getCountries() {\n'}
                            {'    return \'US,Germany,UK,Japan,Italy,Greece\'.split(\',\');\n'}
                            {'}\n'}
                            {'function getData() {\n'}
                            {'    var countries = getCountries(),\n'}
                            {'        data = [];\n'}
                            {'    for (var i = 0; i < 100; i++) {\n'}
                            {'        data.push({\n'}
                            {'            id: i,\n'}
                            {'            country: countries[i % countries.length],\n'}
                            {'            date: new Date(2014, i % 12, i % 28),\n'}
                            {'            amount: Math.random() * 10000,\n'}
                            {'            active: i % 4 == 0\n'}
                            {'        });\n'}
                            {'    }\n'}
                            {'    return data;\n'}
                            {'}'}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexGrid itemsSource={ Util.getData() }/>
                </div>
            </div>
        </div>;
    }
});
