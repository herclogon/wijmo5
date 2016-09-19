declare var React: any;

var Grouping = React.createClass({
    getInitialState: function () {
        var view = new wijmo.collections.CollectionView(Util.getData());
        var groupByOptions = new wijmo.collections.CollectionView([
            { name: 'no grouping', groups: [] },
            { name: 'Country', groups: ['country'] },
            { name: 'Revenue', groups: ['amount'] },
            { name: 'Date', groups: ['date'] },
            { name: 'Country and Date', groups: ['country', 'date'] },
            { name: 'Country and Revenue', groups: ['country', 'amount'] },
            { name: 'Country, Date and Revenue', groups: ['country', 'date', 'amount'] }
        ]);
        return {
            view: view,
            groupByOptions: groupByOptions
        }
    },

    // Wijmo event handlers
    groupByChanged: function(s, e) {
        var cv = this.state.view,
            groups = this.state.groupByOptions.currentItem.groups;
        cv.groupDescriptions.clear();
        for (var i = 0; i < groups.length; i++) {
            var groupName = groups[i];
            if (groupName == 'date') { // group dates by year
                var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                    return item.date.getFullYear();
                });
                cv.groupDescriptions.push(groupDesc);
            } else if (groupName == 'amount') { // group amounts in ranges
                var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {
                    return item.amount >= 5000 ? '> 5,000' : item.amount >= 500 ? '500 to 5,000' : '< 500';
                });
                cv.groupDescriptions.push(groupDesc);
            } else { // group everything else by value
                var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName);
                cv.groupDescriptions.push(groupDesc);
            }
        }
    },

    render: function () {
        return <div>
            <h2>
                Grouping
            </h2>
            <p>
                FlexGrid supports grouping through the <b>ICollectionView</b> interface, which is 
                identical to the one in .NET. To enable grouping, add one or more <b>GroupDescription</b> objects to 
                the <b>CollectionView.groupDescriptions</b> property, and ensure that the grid's <b>showGroups</b> property
                is set to true (the default value).
            </p>
            <p>
                <b>GroupDescription</b> objects are flexible, allowing you to group data based on value or on grouping
                functions. The example below groups dates by year; amounts by range returning three ranges: over 5,000,
                500 to 5,000, and under 500; and anything else by value. Use the menu to see the effects of each grouping.
            </p>
            <p>
                Notice that the "Revenue" column displays the totals in the group rows. We do this by
                setting the column's <b>aggregate</b> property to "Sum." The aggregate is automatically
                updated when you edit the values in the column.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#gpJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#gpJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="gpJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    autoGenerateColumns={ false }\n'}
                            {'    columns={[\n'}
                            {'        { header: \'Country\', binding: \'country\', width: \'*\' },\n'}
                            {'        { header: \'Date\', binding: \'date\' },\n'}
                            {'        { header: \'Revenue\', binding: \'amount\', format: \'n0\', aggregate: \'Sum\' }\n'}
                            {'    ]}\n'}
                            {'    itemsSource={ this.state.view }/>\n'}
                            {'<label htmlFor="cmbGrp">\n'}
                            {'    Group By:</label>\n'}
                            {'<Wj.ComboBox id="cmbGrp"\n'}
                            {'    displayMemberPath=\'name\'\n'}
                            {'    itemsSource={ this.state.groupByOptions }\n'}
                            {'    textChanged={ this.groupByChanged }/>'}
                        </div>
                        <div className="tab-pane pane-content" id="gpJs">
                            {'getInitialState: function () {\n'}
                            {'    var view = new wijmo.collections.CollectionView(Util.getData());\n'}
                            {'    var groupByOptions = new wijmo.collections.CollectionView([\n'}
                            {'        { name: \'no grouping\', groups: [] },\n'}
                            {'        { name: \'Country\', groups: [\'country\'] },\n'}
                            {'        { name: \'Revenue\', groups: [\'amount\'] },\n'}
                            {'        { name: \'Date\', groups: [\'date\'] },\n'}
                            {'        { name: \'Country and Date\', groups: [\'country\', \'date\'] },\n'}
                            {'        { name: \'Country and Revenue\', groups: [\'country\', \'amount\'] },\n'}
                            {'        { name: \'Country, Date and Revenue\', groups: [\'country\', \'date\', \'amount\'] }\n'}
                            {'    ]);\n'}
                            {'    return {\n'}
                            {'        view: view,\n'}
                            {'        groupByOptions: groupByOptions\n'}
                            {'    }\n'}
                            {'},\n'}
                            {'\n'}
                            {'// Wijmo event handlers\n'}
                            {'groupByChanged: function(s, e) {\n'}
                            {'    var cv = this.state.view,\n'}
                            {'        groups = this.state.groupByOptions.currentItem.groups;\n'}
                            {'    cv.groupDescriptions.clear();\n'}
                            {'    for (var i = 0; i < groups.length; i++) {\n'}
                            {'        var groupName = groups[i];\n'}
                            {'        if (groupName == \'date\') { // group dates by year\n'}
                            {'            var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {\n'}
                            {'                return item.date.getFullYear();\n'}
                            {'            });\n'}
                            {'            cv.groupDescriptions.push(groupDesc);\n'}
                            {'        } else if (groupName == \'amount\') { // group amounts in ranges\n'}
                            {'            var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName, function (item, prop) {\n'}
                            {'                return item.amount >= 5000 ? \'> 5,000\' : item.amount >= 500 ? \'500 to 5,000\' : \'< 500\';\n'}
                            {'            });\n'}
                            {'            cv.groupDescriptions.push(groupDesc);\n'}
                            {'        } else { // group everything else by value\n'}
                            {'            var groupDesc = new wijmo.collections.PropertyGroupDescription(groupName);\n'}
                            {'            cv.groupDescriptions.push(groupDesc);\n'}
                            {'        }\n'}
                            {'    }\n'}
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
                                { header: 'Revenue', binding: 'amount', format: 'n0', aggregate: 'Sum' }
                            ]}
                            itemsSource={ this.state.view }/>
                        <label htmlFor="cmbGrp">
                            Group By:&nbsp;</label>
                        <Wj.ComboBox id="cmbGrp"
                            displayMemberPath='name'
                            itemsSource={ this.state.groupByOptions }
                            textChanged={ this.groupByChanged }/>
                </div>
            </div>
        </div>;
    }
});
