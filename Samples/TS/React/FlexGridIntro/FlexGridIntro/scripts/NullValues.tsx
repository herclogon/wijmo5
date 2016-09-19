declare var React: any;

var NullValues = React.createClass({
    render: function () {
        return <div>
            <h2>
                Handling Null Values
            </h2>
            <p>
                By default, FlexGrid allows you to enter empty values in columns of type string,
                and will not allow empty/null values in columns of any other type.
            </p>
            <p>
                You can change this behavior using the <b>isRequired</b> property on grid columns.
                If you set the <b>isRequired</b> property to false, the grid will allow you to 
                enter empty values in that column, regardless of type. Conversely, if you set
                the <b>isRequired</b> property to true, the grid will not allow empty values 
                even in string columns.</p>
            <p>
                Setting <b>isRequired</b> to null reverts to the default behavior (nulls are
                allowed only in string columns).</p>
            <p>
                The grid below reverts the default behavior. It sets <b>isRequired</b> to true
                for the first column and to false for the others. You can delete content that
                is not required by entering an empty string or simply by pressing the delete
                key.</p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#nvJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#nvJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="nvJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    autoGenerateColumns={ false }\n'}
                            {'    itemsSource={ Util.getData() }\n'}
                            {'    columns={[\n'}
                            {'        { header: \'Country\', binding: \'country\', width: \'*\', isRequired: true },\n'}
                            {'        { header: \'Date\', binding: \'date\', isRequired: false },\n'}
                            {'        { header: \'Revenue\', binding: \'amount\', format: \'n0\', isRequired: false },\n'}
                            {'        { header: \'Active\', binding: \'active\', isRequired: false }\n'}
                            {'    ]}/>'}
                        </div>
                        <div className="tab-pane pane-content" id="nvJs">
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
                    <Wj.FlexGrid 
                        autoGenerateColumns={ false }
                        itemsSource={ Util.getData() }
                        columns={[
                            { header: 'Country', binding: 'country', width: '*', isRequired: true },
                            { header: 'Date', binding: 'date', isRequired: false },
                            { header: 'Revenue', binding: 'amount', format: 'n0', isRequired: false },
                            { header: 'Active', binding: 'active', isRequired: false }
                        ]}/>
                </div>
            </div>
        </div>;
    }
});
