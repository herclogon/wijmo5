declare var React: any;

var Editing = React.createClass({
    render: function () {
        return <div>
            <h2>
                Editing
            </h2>
            <p>
                FlexGrid has built-in support for fast, in-cell editing like you find in Excel. There is no
                need to add extra columns with Edit buttons that switch between display and edit modes.
            </p>
            <p>
                Users can start editing by typing into any cell. This puts the cell in quick-edit mode.
                In this mode, pressing a cursor key finishes the editing and moves the selection to a different cell.
            </p>
            <p>
                Another way to start editing is by pressing F2 or by clicking a cell twice. This puts the cell in
                full-edit mode. In this mode, pressing a cursor key moves the caret within the cell text.
                To finish editing and move to another cell, the user must press the Enter, Tab, or Escape key.
            </p>
            <p>
                Data is automatically coerced to the proper type when editing finishes. If the user enters invalid
                data, the edit is cancelled and the original data remains in place.
            </p>
            <p>
                You can disable editing at the grid, column, or row levels using the <b>isReadOnly</b> property of the
                grid, column, or row objects. In this example, we make the ID column read-only.
            </p>
            <p>
                You can add rop-down lists to cells using the <b>dataMap</b> property of the column objects. In this
                example, we provide a list of valid countries that the user must choose from.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#edJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#edJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="edJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    autoGenerateColumns={ false }\n'}
                            {'    columns={[\n'}
                            {'        { header: \'ID\', binding: \'id\', isReadOnly: true },\n'}
                            {'        { header: \'Country\', binding: \'country\', dataMap: Util.getCountries() },\n'}
                            {'        { header: \'Date\', binding: \'date\' },\n'}
                            {'        { header: \'Revenue\', binding: \'amount\', format: \'n0\' },\n'}
                            {'        { header: \'Active\', binding: \'active\' }\n'}
                            {'    ]}\n'}
                            {'    itemsSource={ Util.getData() }/>\n'}
                        </div>
                        <div className="tab-pane pane-content" id="edJs">
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
                        autoGenerateColumns={false}
                        columns={[
                            { header: 'ID', binding: 'id', isReadOnly: true },
                            { header: 'Country', binding: 'country', dataMap: Util.getCountries() },
                            { header: 'Date', binding: 'date' },
                            { header: 'Revenue', binding: 'amount', format: 'n0' },
                            { header: 'Active', binding: 'active' }
                        ]}
                        itemsSource={ Util.getData() }/>
                </div>
            </div>

        </div>;
    }
});
