declare var React: any;

var Menu = React.createClass({

    // menu options
    fileMenuOptions: [
        '<i class="fa fa-file-o"></i>&nbsp;&nbsp;<b>New</b><br><small><i>create a new file</i></small>',
        '<i class="fa fa-folder-open-o"></i>&nbsp;&nbsp;<b>Open</b><br><small><i>open an existing file or folder</i></small>',
        '<i class="fa fa-save"></i>&nbsp;&nbsp;<b>Save</b><br><small><i>save the current file</i></small>',
        '<span class="wj-separator"></span>',
        '<i class="fa fa-times"></i>&nbsp;&nbsp;<b>Exit</b><br><small><i>exit the application</i></small>'
    ],
    editMenuOptions: [
        '<i class="fa fa-cut"></i>&nbsp;&nbsp;<b>Cut</b><br><small><i>move the current selection to the clipboard</i></small>',
        '<i class="fa fa-copy"></i>&nbsp;&nbsp;<b>Copy</b><br><small><i>copy the current selection to the clipboard</i></small>',
        '<i class="fa fa-paste"></i>&nbsp;&nbsp;<b>Paste</b><br><small><i>insert clipboard content at the cursor position</i></small>'
    ],
    taxMenuOptions: [
        { text: '+ 25%', parm: .25 },
        { text: '+ 10%', parm: .10 },
        { text: '+ 5%', parm: .05 },
        { text: '+ 1%', parm: .01 },
        { text: '<span class="wj-separator"></span>' },
        { text: '- 1%', parm: -.01 },
        { text: '- 5%', parm: -.05 },
        { text: '- 10%', parm: -.10 },
        { text: '- 25%', parm: -.25 }
    ],

    // state
    getInitialState: function () {
        return {
            tax: 0.08, // current tax level
            taxMenuCommand: { // command in state so we can bind to 'this'
                executeCommand: function (arg) {
                    if (wijmo.isNumber(arg)) {
                        this.state.tax += arg;
                        this.forceUpdate();
                    }
                }.bind(this),
                canExecuteCommand: function (arg) {
                    if (wijmo.isNumber(arg)) {
                        var val = this.state.tax + arg;
                        return val >= 0 && val <= 1;
                    }
                    return false;
                }.bind(this)
            }
        }
    },

    // Wijmo event handlers
    taxChanged: function (s, e) {
        this.setState({ tax: s.value });
    },
    menuItemClicked: function (s, e) {
        alert('You\'ve selected option ' + s.selectedIndex + ' from the ' + s.header + ' menu!');
    },

    render: function () {
        return <div>
            <h2>
                Menu
            </h2>
            <p>
                The Menu control allows you to create a simple drop-down list with clickable items. The Menu's
                items can be defined directly or by using the <b>itemsSource</b> property similar to the ComboBox.
                To specify the text displayed on the Menu, you can set the <b>header</b> property.
            </p>
            <p>
                The Menu control offers two ways to handle user selections, specifying a command on each menu item
                and the <b>itemClicked</b> event. Unlike the <b>itemClicked</b> event, commands are objects that
                implement two methods:
            </p>
            <ul>
                <li>
                    <b>executeCommand(param)</b>: A method that executes the command.
                </li>
                <li>
                    <b>canExecuteCommand(param)</b>: A method that returns a Boolean value specifying whether or
                    not the command can be executed. If the return value is false, the menu item is disabled automatically.
                </li>
            </ul>
            <p>
                The example below demonstrates how to use both approaches.
            </p>
            <div className="row">
                <div className="col-md-6">
                    <div>
                        <ul className="nav nav-tabs" role="tablist">
                            <li className="active"><a href="#mnJsx" role="tab" data-toggle="tab">JSX</a></li>
                            <li><a href="#mnJs" role="tab" data-toggle="tab">JS</a></li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane active pane-content" id="mnJsx">
                                {'<div className="app-input-group">\n'}
                                {'    <label>itemClicked Event: </label>\n'}
                                {'    <Wj.Menu\n'}
                                {'        header="File"\n'}
                                {'        itemsSource={ this.fileMenuOptions }\n'}
                                {'        itemClicked={ this.menuItemClicked }/>\n'}
                                {'    <Wj.Menu\n'}
                                {'        header="Edit"\n'}
                                {'        itemsSource={ this.editMenuOptions }\n'}
                                {'        itemClicked={ this.menuItemClicked }/>\n'}
                                {'</div>\n'}
                                {'<div className="app-input-group">\n'}
                                {'    <label>Commands: </label>\n'}
                                {'    <Wj.Menu\n'}
                                {'        header="Change Tax"\n'}
                                {'        displayMemberPath="text"\n'}
                                {'        itemsSource={ this.taxMenuOptions }\n'}
                                {'        command={ this.state.taxMenuCommand }\n'}
                                {'        commandParameterPath="parm"/>\n'}
                                {'    <Wj.InputNumber\n'}
                                {'        value={ this.state.tax }\n'}
                                {'        valueChanged={ this.taxChanged }\n'}
                                {'        format="p2" min={ 0 } max={ 1 } step={ .005 }/>\n'}
                                {'</div>'}
                            </div>
                            <div className="tab-pane pane-content" id="mnJs">
                                {'getInitialState: function () {\n'}
                                {'    return {\n'}
                                {'        tax: 0.08, // current tax level\n'}
                                {'        taxMenuCommand: { // command in state so we can bind to \'this\'\n'}
                                {'            executeCommand: function (arg) {\n'}
                                {'                if (wijmo.isNumber(arg)) {\n'}
                                {'                    this.state.tax += arg;\n'}
                                {'                    this.forceUpdate();\n'}
                                {'                }\n'}
                                {'            }.bind(this),\n'}
                                {'            canExecuteCommand: function (arg) {\n'}
                                {'                if (wijmo.isNumber(arg)) {\n'}
                                {'                    var val = this.state.tax + arg;\n'}
                                {'                    return val >= 0 && val <= 1;\n'}
                                {'                }\n'}
                                {'                return false;\n'}
                                {'            }.bind(this)\n'}
                                {'        }\n'}
                                {'    }\n'}
                                {'},\n'}
                                {'\n'}
                                {'// Wijmo event handlers\n'}
                                {'taxChanged: function (s, e) {\n'}
                                {'    this.setState({ tax: s.value });\n'}
                                {'},\n'}
                                {'menuItemClicked: function (s, e) {\n'}
                                {'    alert(\'You\\\'ve selected option \' + s.selectedIndex +\n'}
                                {'          \' from the \' + s.header + \' menu!\');\n'}
                                {'}'}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <h4>Result (live):</h4>
                    <div className="app-input-group">
                        <label>itemClicked Event: </label>
                        <Wj.Menu
                            header="File"
                            itemsSource={ this.fileMenuOptions }
                            itemClicked={ this.menuItemClicked }/>
                        <Wj.Menu
                            header="Edit"
                            itemsSource={ this.editMenuOptions }
                            itemClicked={ this.menuItemClicked }/>
                    </div>
                    <div className="app-input-group">
                        <label>Commands: </label>
                        <Wj.Menu
                            header="Change Tax"
                            displayMemberPath="text"
                            itemsSource={ this.taxMenuOptions }
                            command={ this.state.taxMenuCommand }
                            commandParameterPath="parm"/>
                        <Wj.InputNumber
                            value={ this.state.tax }
                            valueChanged={ this.taxChanged }
                            format="p2" min={ 0 } max={ 1 } step={ .005 }/>
                    </div>
                </div>
            </div>
        </div>;
    }
});
