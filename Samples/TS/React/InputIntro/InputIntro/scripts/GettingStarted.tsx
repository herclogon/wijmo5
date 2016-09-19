declare var React: any;

var GettingStarted = React.createClass({
    render: function () {
        return <div>
            <h2>
                Getting Started
            </h2>
            <p>
                Steps for getting started with Input controls in React applications:
            </p>
            <ol>
                <li>Add references to React, Wijmo, and the Wijmo/React interop module.</li>
                <li>Add wijmo controls to your React components using regular JSX markup.</li>
                <li>(Optional) Use CSS to customize the appearance of the controls.</li>
            </ol>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#gsHtml" role="tab" data-toggle="tab">HTML</a></li>
                            <li><a href="#gsJs" role="tab" data-toggle="tab">JSX</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="gsHtml">
                                {'<!DOCTYPE html>\n'}
                                {'<html>\n'}
                                {'<head>\n'}
                                {'\n'}
                                {'    <!-- React -->\n'}
                                {'    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>\n'}
                                {'    <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>\n'}
                                {'\n'}
                                {'    <!-- Wijmo -->\n'}
                                {'    <link href="css/wijmo.css" rel="stylesheet" />\n'}
                                {'    <script src="scripts/wijmo.js"></script>\n'}
                                {'    <script src="scripts/wijmo.input.js"></script>\n'}
                                {'\n'}
                                {'    <!-- Wijmo/React interop -->\n'}
                                {'    <script src="scripts/wijmo.react.js"></script>\n'}
                                {'\n'}
                                {'</head>\n'}
                                {'<body>\n'}
                                {'    <div id="app"/>\n'}
                                {'    <script>\n'}
                                {'        ReactDOM.render(React.createElement(App), document.getElementById(\'app\'));\n'}
                                {'    </script>\n'}
                                {'</body>\n'}
                                {'</html>'}
                            </div>
                            <div className="tab-pane pane-content" id="gsJs">
                                {'<Wj.InputNumber value={ 3.5 } step={ .5 } format=\'n2\' />'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <Wj.InputNumber value={ 3.5 } step={ .5 } format='n2' />
                </div>
            </div>
        </div>;
    }
});
