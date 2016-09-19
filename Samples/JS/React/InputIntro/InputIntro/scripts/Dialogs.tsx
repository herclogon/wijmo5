declare var React: any;

var Dialogs = React.createClass({
    getInitialState: function () {
        return {
            dialogs: {}
        }
    },

    // event handlers
    initDialog: function (s, e) {
        var dlgId = s.hostElement.id;
        this.state.dialogs[dlgId] = s;
    },
    handleClick: function (dlgId) {
        this.state.dialogs[dlgId].show();
    },

    render: function () {
        return <div>
            <h2 id="Menu">Dialogs and Popups</h2>
            <p>
                The <b>Popup</b> control can be used to display arbitrary content as dialogs 
                (AKA modals, centered on the screen, without an owner element), 
                or as popups (AKA popovers, located relative to an owner element).</p>

            <h3>
                Dialogs</h3>
            <p>
                Click the buttons below to see dialogs:</p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#dlgJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#dlgJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="dlgJsx">
                                &lt;p&gt;{'\n'}
                                {'    '}Click to see a modal dialog:{'\n'}
                                {'    '}&lt;button type="button" className="btn" onClick={'{'}this.handleClick.bind(this, 'dlg1')}&gt;{'\n'}
                                {'        '}Click{'\n'}
                                {'    '}&lt;/button&gt;{'\n'}
                                &lt;/p&gt;{'\n'}
                                &lt;Wj.Popup id="dlg1" modal={'{'}true} hide-trigger="None" initialized={'{'}this.initDialog}&gt;{'\n'}
                                {'    '}&lt;TheDialog/&gt;{'\n'}
                                &lt;/Wj.Popup&gt;{'\n'}
                                &lt;p&gt;{'\n'}
                                {'    '}Click to see a modeless dialog:{'\n'}
                                {'    '}&lt;button type="button" className="btn" onClick={'{'}this.handleClick.bind(this, 'dlg2')}&gt;{'\n'}
                                {'        '}Click{'\n'}
                                {'    '}&lt;/button&gt;{'\n'}
                                &lt;/p&gt;{'\n'}
                                &lt;Wj.Popup id="dlg2" modal={'{'}false} initialized={'{'}this.initDialog}&gt;{'\n'}
                                {'    '}&lt;TheDialog/&gt;{'\n'}
                                &lt;/Wj.Popup&gt;{'\n'}
                            </div>
                            <div className="tab-pane pane-content" id="dlgJs">
                                getInitialState: function () {'{'}{'\n'}
                                {'    '}return {'{'}{'\n'}
                                {'        '}dialogs: {'{'}}{'\n'}
                                {'    '}}{'\n'}
                                },{'\n'}
                                {'\n'}
                                // event handlers{'\n'}
                                initDialog: function (s, e) {'{'}{'\n'}
                                {'    '}var dlgId = s.hostElement.id;{'\n'}
                                {'    '}this.state.dialogs[dlgId] = s;{'\n'}
                                },{'\n'}
                                handleClick: function (dlgId) {'{'}{'\n'}
                                {'    '}this.state.dialogs[dlgId].show();{'\n'}
                                }, ...
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <p>
                        Click to see a modal dialog: {' '}
                        <button type="button" className="btn" onClick={this.handleClick.bind(this, 'dlg1')}>
                            Click
                        </button>
                    </p>
                    <Wj.Popup id="dlg1" modal={true} hide-trigger="None" initialized={this.initDialog}>
                        <TheDialog/>
                    </Wj.Popup>
                    <p>
                        Click to see a modeless dialog: {' '}
                        <button type="button" className="btn" onClick={this.handleClick.bind(this, 'dlg2')}>
                            Click
                        </button>
                    </p>
                    <Wj.Popup id="dlg2" modal={false} initialized={this.initDialog}>
                        <TheDialog/>
                    </Wj.Popup>
                </div>
            </div>

            <h3>
                Popups/popovers</h3>
            <p>
                Click the buttons below to see popovers:</p>
            <div className="row">
                <div className="col-md-6">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="active"><a href="#popJsx" role="tab" data-toggle="tab">JSX</a></li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane active pane-content" id="popJsx">
                            {'<p>\n'}
                            {'    Click to open, move focus away to close:\n'}
                            {'    <button id="btn1" type="button" className="btn">\n'}
                            {'        Click\n'}
                            {'    </button>\n'}
                            {'</p>\n'}
                            {'<Wj.Popup className="popover" owner="#btn1" showTrigger="Click" hideTrigger="Blur">\n'}
                            {'    <ThePopup/>\n'}
                            {'</Wj.Popup>\n'}
                            {'<p>\n'}
                            {'    Click to open, click again to close:\n'}
                            {'    <button id="btn2" type="button" className="btn">\n'}
                            {'        Click\n'}
                            {'    </button>\n'}
                            {'</p>\n'}
                            {'<Wj.Popup className="popover" owner="#btn2" showTrigger="Click" hideTrigger="Click">\n'}
                            {'    <ThePopup/>\n'}
                            {'</Wj.Popup>\n'}
                            {'<p>\n'}
                            {'    Click to open, click close button on popup to close:\n'}
                            {'    <button id="btn3" type="button" className="btn">\n'}
                            {'        Click\n'}
                            {'    </button>\n'}
                            {'</p>\n'}
                            {'<Wj.Popup className="popover" owner="#btn3" showTrigger="Click" hideTrigger="None">\n'}
                            {'    <ThePopup/>\n'}
                            {'</Wj.Popup>'}
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <p>
                        Click to open, move focus away to close: {' '}
                        <button id="btn1" type="button" className="btn">
                            Click
                        </button>
                    </p>
                    <Wj.Popup className="popover" owner="#btn1" showTrigger="Click" hideTrigger="Blur">
                        <ThePopup/>
                    </Wj.Popup>
                    <p>
                        Click to open, click again to close: {' '}
                        <button id="btn2" type="button" className="btn">
                            Click
                        </button>
                    </p>
                    <Wj.Popup className="popover" owner="#btn2" showTrigger="Click" hideTrigger="Click">
                        <ThePopup/>
                    </Wj.Popup>
                    <p>
                        Click to open, click close button on popup to close: {' '}
                        <button id="btn3" type="button" className="btn">
                            Click
                        </button>
                    </p>
                    <Wj.Popup className="popover" owner="#btn3" showTrigger="Click" hideTrigger="None">
                        <ThePopup/>
                    </Wj.Popup>
                </div>
            </div>

        </div>;
    }
});

var TheDialog = React.createClass({
    render: function () {
        return <form>
            <h4 className="modal-header">
                Update Account Data
                <button type="button" tabindex="-1" className="close wj-hide" >&times; </button>
            </h4>
            <div className="modal-body">
                <label>
                    Name:
                    <input className="form-control" />
                </label>
                <br />
                <label>
                    Email: <input className="form-control" />
                </label>
                <br />
                <label>
                    Password: <input className="form-control" type="password" />
                </label>
            </div>
            <div className="modal-footer">
                <button className="btn btn-primary wj-hide" >
                    OK
                </button>
            </div>
        </form>;
    }
});

var ThePopup = React.createClass({
    render: function () {
        return <div>
            <h3 className="popover-title">
                Title
            </h3>
            <div className="popover-content">
                <form name="popoverForm">
                    <p>Hello Popup<br/>This is a multiline message!</p>
                    <pre>2 + 3 = <span className="">5</span></pre>
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon">@</div>
                            <input className="form-control" type="email" placeholder="Enter email"/>
                        </div>
                    </div>
                    <div className="form-actions">
                        <button type="button" className="btn btn-danger wj-hide">Close</button>
                        <button type="button" className="btn btn-primary wj-hide">Save changes</button>
                    </div>
                </form>
            </div>
        </div>;
    }
});
