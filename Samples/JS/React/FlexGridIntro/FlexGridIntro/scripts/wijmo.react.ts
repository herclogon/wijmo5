// TODO: chart axis, legend; grid cell
declare var React: any;
declare var ReactDOM: any;
declare var wijmo: any;

/**
 * Wijmo interop module for React.
 *
 * This module provides React components that encapsulate Wijmo controls.
 *
 * To use it, your application must include references to the React and 
 * ReactDOM libraries, as well as the regular Wijmo CSS and js files.
 *
 * To add Wijmo controls to React components, include the appropriate
 * tags in your JSX (or TSX) files. For example, the code below adds
 * an @see:InputNumber control to a React component:
 *
 * <pre>&lt;label htmlFor="inputnumber"&gt;Here's an InputNumber control:&lt;/label&gt;
 * &lt;Wj.InputNumber
 *   id="inputNumber"
 *   format="c2"
 *   min={0} max={10} step={.5}
 *   value={this.state.value}
 *   valueChanged={this.valueChanged}/&gt;</pre>
 *
 * The example illustrates the following important points:
 *
 * <ol>
 *   <li>
 *      Wijmo controls have tag names that start with the "Wj" prefix, followed by
 *      the control name.</li>
 * <li>
 *      The tag attribute names match the control's properties and events.</li>
 * <li>
 *      Attribute values enclosed in quotes are interpreted as strings, and
 *      values enclosed in curly braces are interpreted as JavaScript expressions.</li>
 * <li>
 *      React components do not have implicit two-way bindings, so controls that
 *      modify values typically use event handlers to explicitly apply changes to 
 *      the parent component's state.</li>
 * </ol>
 *
 * To illustrate this last point, the component that contains the markup given above
 * would typically implement a "valueChanged" event handler as follows:
 *
 * <pre>valueChanged: function(s, e) {
 *   this.state.value = s.value;
 *   this.forceUpdate();
 * }</pre>
 *
 * The first line of the event handler applies the new control value to the parent
 * component's state.
 * The second line calls React's 
 * <a href="https://facebook.github.io/react/docs/component-api.html">forceUpdate</a>
 * method to ensure the change is reflected on the parent component. This may or may 
 * not be necessary, depending on whether the state change should be reflected on 
 * other parts of the component.
 */
namespace wj.react {

    // ** wijmo.input components

    /**
     * React component that encapsulates the @see:wijmo.input.AutoComplete control.
     */
    export var AutoComplete = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.AutoComplete);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.Calendar control.
     */
    export var Calendar = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.Calendar);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.ColorPicker control.
     */
    export var ColorPicker = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.ColorPicker);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.ComboBox control.
     */
    export var ComboBox = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.ComboBox);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.Menu control.
     */
    export var Menu = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.Menu);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.InputColor control.
     */
    export var InputColor = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.InputColor);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.InputDate control.
     */
    export var InputDate = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.InputDate);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.InputDateTime control.
     */
    export var InputDateTime = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.InputDateTime);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.InputMask control.
     */
    export var InputMask = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.InputMask);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.InputNumber control.
     */
    export var InputNumber = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.InputNumber);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.InputTime control.
     */
    export var InputTime = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.InputTime);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.ListBox control.
     */
    export var ListBox = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.ListBox);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.MultiSelect control.
     */
    export var MultiSelect = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.MultiSelect);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.input.Popup control.
     */
    export var Popup = React.createClass({
        render: function () {
            return React.createElement('div', null, this.props.children);
        },
        componentDidMount: function () {
            _mount(this, wijmo.input.Popup);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });

    // ** wijmo.grid components

    /**
     * React component that encapsulates the @see:wijmo.grid.FlexGrid control.
     */
    export var FlexGrid = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.grid.FlexGrid);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });

    // ** wijmo.chart components

    /**
     * React component that encapsulates the @see:wijmo.chart.FlexChart control.
     */
    export var FlexChart = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.chart.FlexChart);
        },
        componentWillUnmount: function () {
            _unmount(this);
        }
    });

    // ** wijmo.gauge components

    /**
     * React component that encapsulates the @see:wijmo.gauge.LinearGauge control.
     */
    export var LinearGauge = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.gauge.LinearGauge);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.gauge.RadialGauge control.
     */
    export var RadialGauge = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.gauge.RadialGauge);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });
    /**
     * React component that encapsulates the @see:wijmo.gauge.BulletChart control.
     */
    export var BulletChart = React.createClass({
        render: function () {
            return React.createElement('div');
        },
        componentDidMount: function () {
            _mount(this, wijmo.gauge.BulletChart);
        },
        componentWillUnmount: function () {
            _unmount(this);
        },
        shouldComponentUpdate: function (nextProps, nextState) {
            return _updateControl(this, nextProps);
        }
    });

    // ** utilities

    // gets the control associated with a component
    function _getControl(component): any {
        var host = ReactDOM.findDOMNode(component);
        return wijmo.Control.getControl(host);
    }

    // mounts a new control onto a component
    function _mount(component, controlType): any {

        // instantiate the control
        var host = ReactDOM.findDOMNode(component),
            control = new controlType(host),
            cprops = component.props;

        // initialize the control with properties and event handlers,
        // and the host element with the regular HTML properties
        var props = {};
        for (var prop in cprops) {
            if (prop in control) {

                // save property to assign to control later
                props[prop] = cprops[prop];

            } else {

                // assign property to host element
                switch (prop) {
                    case 'className':
                        wijmo.addClass(host, cprops.className);
                        break;
                    case 'style':
                        wijmo.setCss(host, cprops.style);
                        break;
                    default: // id, title, name, etc...
                        if (host[prop] != null) {
                            host[prop] = cprops[prop];
                        }
                        break;
                }
            }
        }

        // apply saved props to control
        control.initialize(props);

        // update 'xxx' properties in response to 'xxxChanged' events
        for (var prop in control) {
            if (!prop.match(/disabled|required/)) { // deprecated properties
                var event = control[prop];
                if (event instanceof Event) {
                    var m = prop.match(/(\w+)Changed/);
                    if (m && m.length) {
                        prop = m[1];
                        if (control[prop] != null && component.props[prop] != null) {
                            event.addHandler(_updateComponent.bind({
                                component: component,
                                control: control,
                                prop: prop
                            }));
                        }
                    }
                }
            }
        }

        // fire initialize event
        if (wijmo.isFunction(cprops.initialized)) {
            cprops.initialized(control);
        }

        // done creating the control
        return control;
    }

    // update component value to match control's
    function _updateComponent() {
        this.component[this.prop] = this.control[this.prop];
    }

    // disposes of the control associated with a component
    function _unmount(component) {
        _getControl(this).dispose();
    }

    // updates the control properties to match its associated component
    function _updateControl(component, nextProps) {
        var ctl = _getControl(component);
        for (var prop in nextProps) {
            var value = nextProps[prop];
            if (prop in ctl && !_sameValue(ctl[prop], value) && wijmo.isPrimitive(value)) {
                ctl[prop] = value;
            }
        }
        return true; // update children if any
    }

    // compares two objects by value
    function _sameValue(v1, v2): boolean {
        return v1 == v2 || wijmo.DateTime.equals(v1, v2);
    }
}

// make components available through the "Wj" prefix, so users can write
// "Wj.FlexGrid" instead of "wijmo.react.FlexGrid":
var Wj = wj.react;