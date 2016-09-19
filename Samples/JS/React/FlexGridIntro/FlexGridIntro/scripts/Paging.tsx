declare var React: any;

var Paging = React.createClass({
    getInitialState: function () {
        var view = new wijmo.collections.CollectionView(Util.getData(), {
            pageSize: 10
        });
        return {
            view: view
        }
    },

    render: function () {
        return <div>
            <h2>
                Paging
            </h2>
            <p>
                The FlexGrid supports paging through the <b>IPagedCollectionView</b> interface, 
                which is nearly identical to the one in .NET. To enable paging, set 
                the <b>IPagedCollectionView.pageSize</b> property to the number
                of items you want on each page, and provide a UI for navigating the pages.
            </p>
            <p>
                In this example, we use JavaScript to show 10 items per page. We add navigation buttons, 
                and call IPagedCollectionView methods when a button is clicked. Note that we use 
                the <strong>pageIndex</strong> and <strong>pageCount</strong> properties to show the 
                current page and total number of pages.
            </p>

            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#pgJsx" role="tab" data-toggle="tab">JSX</a></li>
                        <li><a href="#pgJs" role="tab" data-toggle="tab">JS</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="pgJsx">
                            {'<Wj.FlexGrid\n'}
                            {'    style={{ height: \'auto\' }} // size grid to its content\n'}
                            {'    itemsSource={ this.state.view } />\n'}
                            {'<Paginator view={ this.state.view } />\n'}
                        </div>
                        <div className="tab-pane pane-content" id="pgJs">
                            {'getInitialState: function () {\n'}
                            {'    var view = new wijmo.collections.CollectionView(Util.getData(), {\n'}
                            {'        pageSize: 10\n'}
                            {'    });\n'}
                            {'    return {\n'}
                            {'        view: view\n'}
                            {'    }\n'}
                            {'}'}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.FlexGrid 
                        style={{ height: 'auto' }} // size grid to its content
                        itemsSource={ this.state.view } />
                    <Paginator view={ this.state.view } />
                </div>
            </div>
        </div>;
    }
});

// CollectionView paginator component
var Paginator = React.createClass({
    moveFirst: function() {
        this.props.view.moveToFirstPage();
        this.forceUpdate();
    },
    movePrev: function() {
        this.props.view.moveToPreviousPage();
        this.forceUpdate();
    },
    moveNext: function() {
        this.props.view.moveToNextPage();
        this.forceUpdate();
    },
    moveLast: function() {
        this.props.view.moveToLastPage();
        this.forceUpdate();
    },

    render: function () {
        return <div className="btn-group">
            <button type="button" className="btn btn-default"
                onClick={ this.moveFirst }
                disabled={ this.props.view.pageIndex <= 0 }>
                <span className="glyphicon glyphicon-fast-backward"></span>
            </button>
            <button type="button" className="btn btn-default"
                onClick={ this.movePrev }
                disabled={ this.props.view.pageIndex <= 0 }>
                <span className="glyphicon glyphicon-step-backward"></span>
            </button>
            <button type="button" className="btn btn-default" disabled style={{ width: '100px' }}>
                {this.props.view.pageIndex + 1} / {this.props.view.pageCount}
            </button>
            <button type="button" className="btn btn-default"
                onClick={ this.moveNext }
                disabled={ this.props.view.pageIndex >= this.props.view.pageCount - 1 }>
                <span className="glyphicon glyphicon-step-forward"></span>
            </button>
            <button type="button" className="btn btn-default"
                onClick={ this.moveLast }
                disabled={ this.props.view.pageIndex >= this.props.view.pageCount - 1 }>
                <span className="glyphicon glyphicon-fast-forward"></span>
            </button>
        </div>;
    }
});
