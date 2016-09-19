declare var React: any;

var ColumnDefinitions = React.createClass({
    render: function () {
        return <div>
            <h2>
                Column Definitions
            </h2>
            <p>
                The Getting Started example did not define any columns, so FlexGrid generated them
                automatically.
            </p>
            <p>
                This example shows how you can define the columns using the FlexGrid's <b>columns</b> property.
                The markup sets the <b>autoGenerateColumns</b> property to false and assigns an array of columns
                to the <b>columns</b> property.
            </p>
            <p>
                Specifying the columns allows you to choose which columns to show, and in what order.
                This also gives you control over each column&#39;s width, heading, formatting, alignment,
                and other properties.
            </p>
            <p>
                In this case, we use star sizing to set the width of the "Country" column. This tells the 
                column to stretch to fill the available width of the grid so there is no empty space.  On 
                the "Revenue" column, we set the format property to "n0", which results in numbers with 
                thousand separators and no decimal digits.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#cdJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#cdJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="cdJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    autoGenerateColumns={ false }\n'}
                            {'    columns={[\n'}
                            {'        { header: \'Country\', binding: \'country\', width: \'*\' },\n'}
                            {'        { header: \'Date\', binding: \'date\' },\n'}
                            {'        { header: \'Revenue\', binding: \'amount\', format: \'n0\' },\n'}
                            {'        { header: \'Active\', binding: \'active\' }\n'}
                            {'    ]}\n'}
                            {'    itemsSource={ Util.getData() } />\n'}
                        </div>
                        <div className="tab-pane pane-content" id="cdJs">
                            {'// generate some random data\n'}
                            {'export function getCountries() {\n'}
                            {'    return \'US,Germany,UK,Japan,Italy,Greece\'.split(\',\');\n'}
                            {'}\n'}
                            {'export function getData() {\n'}
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
                    <Wj.FlexGrid 
                        autoGenerateColumns={ false }
                        columns={[
                            { header: 'Country', binding: 'country', width: '*' },
                            { header: 'Date', binding: 'date' },
                            { header: 'Revenue', binding: 'amount', format: 'n0' },
                            { header: 'Active', binding: 'active' }
                        ]}
                        itemsSource={ Util.getData() } />
                </div>
            </div>
        </div>;
    }
});
