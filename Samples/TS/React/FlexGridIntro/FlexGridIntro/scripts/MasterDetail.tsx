declare var React: any;

var MasterDetail = React.createClass({
    getInitialState: function () {
        var view = new wijmo.collections.CollectionView(Util.getData(), {
            onCurrentChanged: (s, e) => {
                this.forceUpdate(); // update detail view when the current item changes
            }
        });
        return {
            view: view,
        }
    },

    render: function () {
        return <div>
            <h2>
                Master Detail
            </h2>
            <p>
                The <b>ICollectionView</b> interface has built-in support for currency, which enables you to
                implement master-detail scenarios with FlexGrid. You can refer to the <b>currentItem</b> and
                use it as a binding source for any elements on the page.
            </p>
            <p>
                Note that you have to update the details view when the current item changes.
                To do that, attach a handler to the <b>ICollectionView.currentChanged</b> event and 
                update the details view as needed.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#mdJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#mdJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="mdJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    autoGenerateColumns={ false }\n'}
                            {'    columns={[\n'}
                            {'        { header: \'Country\', binding: \'country\', width: \'*\' },\n'}
                            {'        { header: \'Date\', binding: \'date\' },\n'}
                            {'    ]}\n'}
                            {'    itemsSource={ this.state.view }/>\n'}
                            {'<DetailView item={ this.state.view.currentItem } />'}
                        </div>
                        <div className="tab-pane pane-content" id="mdJs">
                            {'getInitialState: function () {\n'}
                            {'    var view = new wijmo.collections.CollectionView(Util.getData(), {\n'}
                            {'        onCurrentChanged: (s, e) => {\n'}
                            {'            this.forceUpdate(); // update detail view when the current item changes\n'}
                            {'        }\n'}
                            {'    });\n'}
                            {'    return {\n'}
                            {'        view: view,\n'}
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
                            ]}
                            itemsSource={ this.state.view }/>
                        <DetailView item={ this.state.view.currentItem } />
                </div>
            </div>
        </div>;
    }
});

var DetailView = React.createClass({
    render: function () {
        return <div>
            <dl className="dl-horizontal">
                <dt>ID</dt>
                <dd>{ this.props.item.id }</dd>
                <dt>Country</dt>
                <dd>{ this.props.item.country }</dd>
                <dt>Date</dt>
                <dd>{ Util.format(this.props.item.date, 'D') }</dd>
                <dt>Revenue</dt>
                <dd>{ Util.format(this.props.item.amount, 'c') }</dd>
            </dl>
        </div>;
    }
});
