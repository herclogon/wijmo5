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
            tax: 0.08,
            taxMenuCommand: {
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
        };
    },
    // Wijmo event handlers
    taxChanged: function (s, e) {
        this.setState({ tax: s.value });
    },
    menuItemClicked: function (s, e) {
        alert('You\'ve selected option ' + s.selectedIndex + ' from the ' + s.header + ' menu!');
    },
    render: function () {
        return React.createElement("div", null, React.createElement("h2", null, "Menu"), React.createElement("p", null, "The Menu control allows you to create a simple drop-down list with clickable items. The Menu's" + ' ' + "items can be defined directly or by using the ", React.createElement("b", null, "itemsSource"), " property similar to the ComboBox." + ' ' + "To specify the text displayed on the Menu, you can set the ", React.createElement("b", null, "header"), " property."), React.createElement("p", null, "The Menu control offers two ways to handle user selections, specifying a command on each menu item" + ' ' + "and the ", React.createElement("b", null, "itemClicked"), " event. Unlike the ", React.createElement("b", null, "itemClicked"), " event, commands are objects that" + ' ' + "implement two methods:"), React.createElement("ul", null, React.createElement("li", null, React.createElement("b", null, "executeCommand(param)"), ": A method that executes the command."), React.createElement("li", null, React.createElement("b", null, "canExecuteCommand(param)"), ": A method that returns a Boolean value specifying whether or" + ' ' + "not the command can be executed. If the return value is false, the menu item is disabled automatically.")), React.createElement("p", null, "The example below demonstrates how to use both approaches."), React.createElement("div", {className: "row"}, React.createElement("div", {className: "col-md-6"}, React.createElement("div", null, React.createElement("ul", {className: "nav nav-tabs", role: "tablist"}, React.createElement("li", {className: "active"}, React.createElement("a", {href: "#mnJsx", role: "tab", "data-toggle": "tab"}, "JSX")), React.createElement("li", null, React.createElement("a", {href: "#mnJs", role: "tab", "data-toggle": "tab"}, "JS"))), React.createElement("div", {className: "tab-content"}, React.createElement("div", {className: "tab-pane active pane-content", id: "mnJsx"}, '<div className="app-input-group">\n', '    <label>itemClicked Event: </label>\n', '    <Wj.Menu\n', '        header="File"\n', '        itemsSource={ this.fileMenuOptions }\n', '        itemClicked={ this.menuItemClicked }/>\n', '    <Wj.Menu\n', '        header="Edit"\n', '        itemsSource={ this.editMenuOptions }\n', '        itemClicked={ this.menuItemClicked }/>\n', '</div>\n', '<div className="app-input-group">\n', '    <label>Commands: </label>\n', '    <Wj.Menu\n', '        header="Change Tax"\n', '        displayMemberPath="text"\n', '        itemsSource={ this.taxMenuOptions }\n', '        command={ this.state.taxMenuCommand }\n', '        commandParameterPath="parm"/>\n', '    <Wj.InputNumber\n', '        value={ this.state.tax }\n', '        valueChanged={ this.taxChanged }\n', '        format="p2" min={ 0 } max={ 1 } step={ .005 }/>\n', '</div>'), React.createElement("div", {className: "tab-pane pane-content", id: "mnJs"}, 'getInitialState: function () {\n', '    return {\n', '        tax: 0.08, // current tax level\n', '        taxMenuCommand: { // command in state so we can bind to \'this\'\n', '            executeCommand: function (arg) {\n', '                if (wijmo.isNumber(arg)) {\n', '                    this.state.tax += arg;\n', '                    this.forceUpdate();\n', '                }\n', '            }.bind(this),\n', '            canExecuteCommand: function (arg) {\n', '                if (wijmo.isNumber(arg)) {\n', '                    var val = this.state.tax + arg;\n', '                    return val >= 0 && val <= 1;\n', '                }\n', '                return false;\n', '            }.bind(this)\n', '        }\n', '    }\n', '},\n', '\n', '// Wijmo event handlers\n', 'taxChanged: function (s, e) {\n', '    this.setState({ tax: s.value });\n', '},\n', 'menuItemClicked: function (s, e) {\n', '    alert(\'You\\\'ve selected option \' + s.selectedIndex +\n', '          \' from the \' + s.header + \' menu!\');\n', '}')))), React.createElement("div", {className: "col-md-6"}, React.createElement("h4", null, "Result (live):"), React.createElement("div", {className: "app-input-group"}, React.createElement("label", null, "itemClicked Event: "), React.createElement(Wj.Menu, {header: "File", itemsSource: this.fileMenuOptions, itemClicked: this.menuItemClicked}), React.createElement(Wj.Menu, {header: "Edit", itemsSource: this.editMenuOptions, itemClicked: this.menuItemClicked})), React.createElement("div", {className: "app-input-group"}, React.createElement("label", null, "Commands: "), React.createElement(Wj.Menu, {header: "Change Tax", displayMemberPath: "text", itemsSource: this.taxMenuOptions, command: this.state.taxMenuCommand, commandParameterPath: "parm"}), React.createElement(Wj.InputNumber, {value: this.state.tax, valueChanged: this.taxChanged, format: "p2", min: 0, max: 1, step: .005})))));
    }
});
//# sourceMappingURL=Menu.js.map