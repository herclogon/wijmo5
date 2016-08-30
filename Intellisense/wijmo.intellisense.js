function _wjMerge(f, t) {
   if (f && t) for (var k in f) t[k] = f[k];
   return t;
}
var wijmo = wijmo || { _wjModule: true };
wijmo.getVersion = function() {
/// <summary>Gets the version of the Wijmo library that is currently loaded.</summary>
/// <returns type="String"></returns>
}
wijmo.Key = {
// The backspace key.
Back: 8,
// The tab key.
Tab: 9,
// The enter key.
Enter: 13,
// The escape key.
Escape: 27,
// The space key.
Space: 32,
// The page up key.
PageUp: 33,
// The page down key.
PageDown: 34,
// The end key.
End: 35,
// The home key.
Home: 36,
// The left arrow key.
Left: 37,
// The up arrow key.
Up: 38,
// The right arrow key.
Right: 39,
// The down arrow key.
Down: 40,
// The delete key.
Delete: 46,
// The F1 key.
F1: 112,
// The F2 key.
F2: 113,
// The F3 key.
F3: 114,
// The F4 key.
F4: 115,
// The F5 key.
F5: 116,
// The F6 key.
F6: 117,
// The F7 key.
F7: 118,
// The F8 key.
F8: 119,
// The F9 key.
F9: 120,
// The F10 key.
F10: 121,
// The F11 key.
F11: 122,
// The F12 key.
F12: 123,
_wjEnum: true
};

intellisense.annotate(wijmo, {
// Specifies constants that represent keyboard codes.
// 
// This enumeration is useful when handling <b>keyDown</b> events.
Key: undefined
});

wijmo.DataType = {
// Object (anything).
Object: 0,
// String.
String: 1,
// Number.
Number: 2,
// Boolean.
Boolean: 3,
// Date (date and time).
Date: 4,
// Array.
Array: 5,
_wjEnum: true
};

intellisense.annotate(wijmo, {
// Specifies constants that represent data types.
// 
// Use the @see:getType method to get a @see:DataType from a value.
DataType: undefined
});

wijmo.tryCast = function(value, type) {
/// <summary>Casts a value to a type if possible.</summary>
/// <param name="value" type="Object" optional="false">Value to cast.</param>
/// <param name="type" type="Object" optional="false">Type or interface name to cast to.</param>
/// <returns type="Object">The value passed in if the cast was successful, null otherwise.</returns>
}
wijmo.isPrimitive = function(value) {
/// <summary>Determines whether an object is a primitive type (string, number, boolean, or date).</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isString = function(value) {
/// <summary>Determines whether an object is a string.</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isNullOrWhiteSpace = function(value) {
/// <summary>Determines whether a string is null, empty, or whitespace only.</summary>
/// <param name="value" type="String" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isNumber = function(value) {
/// <summary>Determines whether an object is a number.</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isInt = function(value) {
/// <summary>Determines whether an object is an integer.</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isBoolean = function(value) {
/// <summary>Determines whether an object is a Boolean.</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isFunction = function(value) {
/// <summary>Determines whether an object is a function.</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isUndefined = function(value) {
/// <summary>Determines whether an object is undefined.</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isDate = function(value) {
/// <summary>Determines whether an object is a Date.</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isArray = function(value) {
/// <summary>Determines whether an object is an Array.</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.isObject = function(value) {
/// <summary>Determines whether a value is an object
/// (as opposed to a value type, an array, or a Date).</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.mouseToPage = function(e) {
/// <summary>Converts mouse or touch event arguments into a @see:Point in page coordinates.</summary>
/// <param name="e" type="Object" optional="false"></param>
/// <returns type="wijmo.Point"></returns>
}
wijmo.getType = function(value) {
/// <summary>Gets the type of a value.</summary>
/// <param name="value" type="Object" optional="false">Value to test.</param>
/// <returns type="wijmo.DataType">A @see:DataType value representing the type of the value passed in.</returns>
}
wijmo.changeType = function(value, type, format) {
/// <summary>Changes the type of a value.
/// 
/// If the conversion fails, the original value is returned. To check if a
/// conversion succeeded, you should check the type of the returned value.</summary>
/// <param name="value" type="Object" optional="false">Value to convert.</param>
/// <param name="type" type="wijmo.DataType" optional="false">@see:DataType to convert the value to.</param>
/// <param name="format" type="String" optional="false">Format to use when converting to or from strings.</param>
/// <returns type="Object">The converted value, or the original value if a conversion was not possible.</returns>
}
wijmo.toFixed = function(value, prec, truncate) {
/// <summary>Rounds or truncates a number to a specified precision.</summary>
/// <param name="value" type="Number" optional="false">Value to round or truncate.</param>
/// <param name="prec" type="Number" optional="false">Number of decimal digits for the result.</param>
/// <param name="truncate" type="Boolean" optional="false">Whether to truncate or round the original value.</param>
/// <returns type="Number"></returns>
}
wijmo.format = function(format, data, formatFunction) {
/// <summary>Replaces each format item in a specified string with the text equivalent of an
/// object's value.
/// 
/// The function works by replacing parts of the <b>formatString</b> with the pattern
/// '{name:format}' with properties of the <b>data</b> parameter. For example:
/// 
/// <pre>
/// var data = { name: 'Joe', amount: 123456 };
/// var msg = wijmo.format('Hello {name}, you won {amount:n2}!', data);
/// </pre>
/// 
/// The optional <b>formatFunction</b> allows you to customize the content by providing
/// context-sensitive formatting. If provided, the format function gets called for each
/// format element and gets passed the data object, the parameter name, the format,
/// and the value; it should return an output string. For example:
/// 
/// <pre>
/// var data = { name: 'Joe', amount: 123456 };
/// var msg = wijmo.format('Hello {name}, you won {amount:n2}!', data,
///             function (data, name, fmt, val) {
///               if (wijmo.isString(data[name])) {
///                   val = wijmo.escapeHtml(data[name]);
///               }
///               return val;
///             });
/// </pre></summary>
/// <param name="format" type="String" optional="false">A composite format string.</param>
/// <param name="data" type="Object" optional="false">The data object used to build the string.</param>
/// <param name="formatFunction" type="Function" optional="true">An optional function used to format items in context.</param>
/// <returns type="String">The formatted string.</returns>
}
wijmo.clamp = function(value, min, max) {
/// <summary>Clamps a value between a minimum and a maximum.</summary>
/// <param name="value" type="Number" optional="false">Original value.</param>
/// <param name="min" type="Number" optional="false">Minimum allowed value.</param>
/// <param name="max" type="Number" optional="false">Maximum allowed value.</param>
/// <returns type="Number"></returns>
}
wijmo.copy = function(dst, src) {
/// <summary>Copies properties from an object to another.
/// 
/// This method is typically used to initialize controls and other Wijmo objects
/// by setting their properties and assigning event handlers.
/// 
/// The destination object must define all the properties defined in the source,
/// or an error will be thrown.</summary>
/// <param name="dst" type="Object" optional="false">The destination object.</param>
/// <param name="src" type="Object" optional="false">The source object.</param>
}
wijmo.assert = function(condition, msg) {
/// <summary>Throws an exception if a condition is false.</summary>
/// <param name="condition" type="Boolean" optional="false">Condition expected to be true.</param>
/// <param name="msg" type="String" optional="false">Message of the exception if the condition is not true.</param>
}
wijmo._deprecated = function(oldMember, newMember) {
/// <summary>Outputs a message to indicate a member has been deprecated.</summary>
/// <param name="oldMember" type="String" optional="false">Member that has been deprecated.</param>
/// <param name="newMember" type="String" optional="false">Member that replaces the one that has been deprecated.</param>
}
wijmo.asString = function(value, nullOK) {
/// <summary>Asserts that a value is a string.</summary>
/// <param name="value" type="String" optional="false">Value supposed to be a string.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <returns type="String">The string passed in.</returns>
}
wijmo.asNumber = function(value, nullOK, positive) {
/// <summary>Asserts that a value is a number.</summary>
/// <param name="value" type="Number" optional="false">Value supposed to be numeric.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <param name="positive" type="Boolean" optional="true">Whether to accept only positive numeric values.</param>
/// <returns type="Number">The number passed in.</returns>
}
wijmo.asInt = function(value, nullOK, positive) {
/// <summary>Asserts that a value is an integer.</summary>
/// <param name="value" type="Number" optional="false">Value supposed to be an integer.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <param name="positive" type="Boolean" optional="true">Whether to accept only positive integers.</param>
/// <returns type="Number">The number passed in.</returns>
}
wijmo.asBoolean = function(value, nullOK) {
/// <summary>Asserts that a value is a Boolean.</summary>
/// <param name="value" type="Boolean" optional="false">Value supposed to be Boolean.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <returns type="Boolean">The Boolean passed in.</returns>
}
wijmo.asDate = function(value, nullOK) {
/// <summary>Asserts that a value is a Date.</summary>
/// <param name="value" type="Date" optional="false">Value supposed to be a Date.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <returns type="Date">The Date passed in.</returns>
}
wijmo.asFunction = function(value, nullOK) {
/// <summary>Asserts that a value is a function.</summary>
/// <param name="value" type="Object" optional="false">Value supposed to be a function.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <returns type="Function">The function passed in.</returns>
}
wijmo.asArray = function(value, nullOK) {
/// <summary>Asserts that a value is an array.</summary>
/// <param name="value" type="Object" optional="false">Value supposed to be an array.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <returns type="Object[]">The array passed in.</returns>
}
wijmo.asType = function(value, type, nullOK) {
/// <summary>Asserts that a value is an instance of a given type.</summary>
/// <param name="value" type="Object" optional="false">Value to be checked.</param>
/// <param name="type" type="Object" optional="false">Type of value expected.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <returns type="Object">The value passed in.</returns>
}
wijmo.asEnum = function(value, enumType, nullOK) {
/// <summary>Asserts that a value is a valid setting for an enumeration.</summary>
/// <param name="value" type="Number" optional="false">Value supposed to be a member of the enumeration.</param>
/// <param name="enumType" type="Object" optional="false">Enumeration to test for.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <returns type="Number">The value passed in.</returns>
}
wijmo.asCollectionView = function(value, nullOK) {
/// <summary>Asserts that a value is an @see:ICollectionView or an Array.</summary>
/// <param name="value" type="Object" optional="false">Array or @see:ICollectionView.</param>
/// <param name="nullOK" type="Boolean" optional="true">Whether null values are acceptable.</param>
/// <returns type="wijmo.collections.ICollectionView">The @see:ICollectionView that was passed in or a @see:CollectionView
/// created from the array that was passed in.</returns>
}
wijmo.hasItems = function(value) {
/// <summary>Checks whether an @see:ICollectionView is defined and not empty.</summary>
/// <param name="value" type="wijmo.collections.ICollectionView" optional="false">@see:ICollectionView to check.</param>
}
wijmo.toHeaderCase = function(text) {
/// <summary>Converts a camel-cased string into a header-type string by capitalizing the first letter
/// and adding spaces before uppercase characters preceded by lower-case characters.
/// 
/// For example, 'somePropertyName' becomes 'Some Property Name'.</summary>
/// <param name="text" type="String" optional="false">String to convert to header case.</param>
/// <returns type="String"></returns>
}
wijmo.escapeHtml = function(text) {
/// <summary>Escapes a string by replacing HTML characters as text entities.
/// 
/// Strings entered by uses should always be escaped before they are displayed
/// in HTML pages. This ensures page integrity and prevents HTML/javascript
/// injection attacks.</summary>
/// <param name="text" type="String" optional="false">Text to escape.</param>
}
wijmo.hasClass = function(e, className) {
/// <summary>Checks whether an element has a class.</summary>
/// <param name="e" type="HTMLElement" optional="false">Element to check.</param>
/// <param name="className" type="String" optional="false">Class to check for.</param>
/// <returns type="Boolean"></returns>
}
wijmo.removeClass = function(e, className) {
/// <summary>Removes a class from an element.</summary>
/// <param name="e" type="HTMLElement" optional="false">Element that will have the class removed.</param>
/// <param name="className" type="String" optional="false">Class to remove form the element.</param>
}
wijmo.addClass = function(e, className) {
/// <summary>Adds a class to an element.</summary>
/// <param name="e" type="HTMLElement" optional="false">Element that will have the class added.</param>
/// <param name="className" type="String" optional="false">Class to add to the element.</param>
}
wijmo.toggleClass = function(e, className, addOrRemove) {
/// <summary>Adds or removes a class to or from an element.</summary>
/// <param name="e" type="HTMLElement" optional="false">Element that will have the class added.</param>
/// <param name="className" type="String" optional="false">Class to add or remove.</param>
/// <param name="addOrRemove" type="Boolean" optional="false">Whether to add or remove the class.
/// Use true to add class to element and false to remove class from element.</param>
}
wijmo.setSelectionRange = function(e, start, end) {
/// <summary>Sets the start and end positions of a selection in a text field.
/// 
/// This method is similar to the native @see:setSelectionRange method
/// in HTMLInputElement objects, except it checks for conditions that
/// may cause exceptions (element not in the DOM, disabled, or hidden).</summary>
/// <param name="e" type="HTMLInputElement" optional="false"></param>
/// <param name="start" type="Number" optional="false">Offset into the text field for the start of the selection.</param>
/// <param name="end" type="Number" optional="true">Offset into the text field for the end of the selection.</param>
}
wijmo.getActiveElement = function() {
/// <summary>Gets a reference to the element that contains the focus,
/// accounting for shadow document fragments.</summary>
}
wijmo.moveFocus = function(parent, offset) {
/// <summary>Moves the focus to the next/previous/first focusable child element.</summary>
/// <param name="parent" type="HTMLElement" optional="false">Parent element.</param>
/// <param name="offset" type="Number" optional="false">Offset to use when moving the focus (use zero to focus on the first focusable child).</param>
}
wijmo.getElement = function(selector) {
/// <summary>Gets an element from a jQuery-style selector.</summary>
/// <param name="selector" type="Object" optional="false">An element, a query selector string, or a jQuery object.</param>
/// <returns type="HTMLElement"></returns>
}
wijmo.createElement = function(html, appendTo) {
/// <summary>Creates an element from an HTML string.</summary>
/// <param name="html" type="String" optional="false">HTML fragment to convert into an HTMLElement.</param>
/// <param name="appendTo" type="HTMLElement" optional="true">Optional HTMLElement to append the new element to.</param>
/// <returns type="HTMLElement">The new element.</returns>
}
wijmo.setText = function(e, text) {
/// <summary>Sets the text content of an element.</summary>
/// <param name="e" type="HTMLElement" optional="false">Element that will have its content updated.</param>
/// <param name="text" type="String" optional="false">Plain text to be assigned to the element.</param>
}
wijmo.contains = function(parent, child) {
/// <summary>Checks whether an HTML element contains another.</summary>
/// <param name="parent" type="Object" optional="false">Parent element.</param>
/// <param name="child" type="Object" optional="false">Child element.</param>
/// <returns type="Boolean">True if the parent element contains the child element.</returns>
}
wijmo.closest = function(e, selector) {
/// <summary>Finds the closest ancestor that satisfies a selector.</summary>
/// <param name="e" type="Object" optional="false">Element where the search should start.</param>
/// <param name="selector" type="String" optional="false">A string containing a selector expression to match elements against.</param>
/// <returns type="Node">The closest ancestor that satisfies the selector (including the original element), or null if not found.</returns>
}
wijmo.enable = function(e, value) {
/// <summary>Enables or disables an element.</summary>
/// <param name="e" type="HTMLElement" optional="false">Element to enable or disable.</param>
/// <param name="value" type="Boolean" optional="false">Whether to enable or disable the element.</param>
}
wijmo.getElementRect = function(e) {
/// <summary>Gets the bounding rectangle of an element in page coordinates.
/// 
/// This is similar to the <b>getBoundingClientRect</b> function,
/// except that uses window coordinates, which change when the
/// document scrolls.</summary>
/// <param name="e" type="Element" optional="false"></param>
/// <returns type="wijmo.Rect"></returns>
}
wijmo.setCss = function(e, css) {
/// <summary>Modifies the style of an element by applying the properties specified in an object.</summary>
/// <param name="e" type="HTMLElement" optional="false">Element whose style will be modified.</param>
/// <param name="css" type="Object" optional="false">Object containing the style properties to apply to the element.</param>
}
wijmo.animate = function(apply, duration, step) {
/// <summary>Calls a function on a timer with a parameter varying between zero and one.
/// 
/// Use this function to create animations by modifying document properties
/// or styles on a timer.
/// 
/// For example, the code below changes the opacity of an element from zero
/// to one in one second:
/// <pre>var element = document.getElementById('someElement');
/// animate(function(pct) {
///   element.style.opacity = pct;
/// }, 1000);</pre>
/// 
/// The function returns an interval ID that you can use to stop the
/// animation. This is typically done when you are starting a new animation
/// and wish to suspend other on-going animations on the same element.
/// For example, the code below keeps track of the interval ID and clears
/// if before starting a new animation:
/// <pre>var element = document.getElementById('someElement');
/// if (this._animInterval) {
///   clearInterval(this._animInterval);
/// }
/// var self = this;
/// self._animInterval = animate(function(pct) {
///   element.style.opacity = pct;
///   if (pct == 1) {
///     self._animInterval = null;
///   }
/// }, 1000);</pre></summary>
/// <param name="apply" type="Function" optional="false">Callback function that modifies the document.
/// The function takes a single parameter that represents a percentage.</param>
/// <param name="duration" type="Number" optional="true">The duration of the animation, in milliseconds.</param>
/// <param name="step" type="Number" optional="true">The interval between animation frames, in milliseconds.</param>
/// <returns type="Number">An interval id that you can use to suspend the animation.</returns>
}
wijmo.Point = function(x, y) {
/// <summary>Initializes a new instance of the @see:Point class.</summary>
/// <param name="x" type="Number" optional="true">X coordinate of the new Point.</param>
/// <param name="y" type="Number" optional="true">Y coordinate of the new Point.</param>
/// <returns type="wijmo.Point"></returns>
/// <field name="x" type="Number">Gets or sets the x coordinate of this @see:Point.</field>
/// <field name="y" type="Number">Gets or sets the y coordinate of this @see:Point.</field>
this._wjClassName = 'wijmo.Point';
_wjReownEvents(this);
}
wijmo.Point.prototype.equals = function(pt) {
/// <summary>Returns true if a @see:Point has the same coordinates as this @see:Point.</summary>
/// <param name="pt" type="wijmo.Point" optional="false">@see:Point to compare to this @see:Point.</param>
/// <returns type="Boolean"></returns>
}
wijmo.Point.prototype.clone = function() {
/// <summary>Creates a copy of this @see:Point.</summary>
/// <returns type="wijmo.Point"></returns>
}
wijmo.Point._wjDict = _wjMerge({}, {});
wijmo.Point._wjClass = true;
wijmo.Size = function(width, height) {
/// <summary>Initializes a new instance of the @see:Size class.</summary>
/// <param name="width" type="Number" optional="true">Width of the new @see:Size.</param>
/// <param name="height" type="Number" optional="true">Height of the new @see:Size.</param>
/// <returns type="wijmo.Size"></returns>
/// <field name="width" type="Number">Gets or sets the width of this @see:Size.</field>
/// <field name="height" type="Number">Gets or sets the height of this @see:Size.</field>
this._wjClassName = 'wijmo.Size';
_wjReownEvents(this);
}
wijmo.Size.prototype.equals = function(sz) {
/// <summary>Returns true if a @see:Size has the same dimensions as this @see:Size.</summary>
/// <param name="sz" type="wijmo.Size" optional="false">@see:Size to compare to this @see:Size.</param>
/// <returns type="Boolean"></returns>
}
wijmo.Size.prototype.clone = function() {
/// <summary>Creates a copy of this @see:Size.</summary>
/// <returns type="wijmo.Size"></returns>
}
wijmo.Size._wjDict = _wjMerge({}, {});
wijmo.Size._wjClass = true;
wijmo.Rect = function(left, top, width, height) {
/// <summary>Initializes a new instance of the @see:Rect class.</summary>
/// <param name="left" type="Number" optional="false">Left coordinate of the new @see:Rect.</param>
/// <param name="top" type="Number" optional="false">Top coordinate of the new @see:Rect.</param>
/// <param name="width" type="Number" optional="false">Width of the new @see:Rect.</param>
/// <param name="height" type="Number" optional="false">Height of the new @see:Rect.</param>
/// <returns type="wijmo.Rect"></returns>
/// <field name="left" type="Number">Gets or sets the left coordinate of this @see:Rect.</field>
/// <field name="top" type="Number">Gets or sets the top coordinate of this @see:Rect.</field>
/// <field name="width" type="Number">Gets or sets the width of this @see:Rect.</field>
/// <field name="height" type="Number">Gets or sets the height of this @see:Rect.</field>
/// <field name="right" type="Number">Gets the right coordinate of this @see:Rect.</field>
/// <field name="bottom" type="Number">Gets the bottom coordinate of this @see:Rect.</field>
this._wjClassName = 'wijmo.Rect';
_wjReownEvents(this);
}
wijmo.Rect.prototype.equals = function(rc) {
/// <summary>Returns true if a @see:Rect has the same coordinates and dimensions
/// as this @see:Rect.</summary>
/// <param name="rc" type="wijmo.Rect" optional="false">@see:Rect to compare to this @see:Rect.</param>
/// <returns type="Boolean"></returns>
}
wijmo.Rect.prototype.clone = function() {
/// <summary>Creates a copy of this @see:Rect.</summary>
/// <returns type="wijmo.Rect"></returns>
}
wijmo.Rect.fromBoundingRect = function(rc) {
/// <summary>Creates a @see:Rect from <b>ClientRect</b> or <b>SVGRect</b> objects.</summary>
/// <param name="rc" type="Object" optional="false">Rectangle obtained by a call to the DOM's <b>getBoundingClientRect</b>
/// or <b>GetBoundingBox</b> methods.</param>
/// <returns type="wijmo.Rect"></returns>
}
wijmo.Rect.union = function(rc1, rc2) {
/// <summary>Gets a rectangle that represents the union of two rectangles.</summary>
/// <param name="rc1" type="wijmo.Rect" optional="false">First rectangle.</param>
/// <param name="rc2" type="wijmo.Rect" optional="false">Second rectangle.</param>
/// <returns type="wijmo.Rect"></returns>
}
wijmo.Rect.intersection = function(rc1, rc2) {
/// <summary>Gets a rectangle that represents the intersection of two rectangles.</summary>
/// <param name="rc1" type="wijmo.Rect" optional="false">First rectangle.</param>
/// <param name="rc2" type="wijmo.Rect" optional="false">Second rectangle.</param>
/// <returns type="wijmo.Rect"></returns>
}
wijmo.Rect.prototype.contains = function(pt) {
/// <summary>Determines whether the rectangle contains a given point or rectangle.</summary>
/// <param name="pt" type="Object" optional="false">The @see:Point or @see:Rect to ckeck.</param>
/// <returns type="Boolean"></returns>
}
wijmo.Rect.prototype.inflate = function(dx, dy) {
/// <summary>Creates a rectangle that results from expanding or shrinking a rectangle by the specified amounts.</summary>
/// <param name="dx" type="Number" optional="false">The amount by which to expand or shrink the left and right sides of the rectangle.</param>
/// <param name="dy" type="Number" optional="false">The amount by which to expand or shrink the top and bottom sides of the rectangle.</param>
/// <returns type="wijmo.Rect"></returns>
}
wijmo.Rect._wjDict = _wjMerge({}, {right:2,bottom:2});
wijmo.Rect._wjClass = true;
wijmo.DateTime = function() {
/// <summary>Provides date and time utilities.</summary>
/// <returns type="wijmo.DateTime"></returns>
this._wjClassName = 'wijmo.DateTime';
_wjReownEvents(this);
}
wijmo.DateTime.addDays = function(value, days) {
/// <summary>Gets a new Date that adds the specified number of days to a given Date.</summary>
/// <param name="value" type="Date" optional="false">Original date.</param>
/// <param name="days" type="Number" optional="false">Number of days to add to the given date.</param>
/// <returns type="Date"></returns>
}
wijmo.DateTime.addMonths = function(value, months) {
/// <summary>Gets a new Date that adds the specified number of months to a given Date.</summary>
/// <param name="value" type="Date" optional="false">Original date.</param>
/// <param name="months" type="Number" optional="false">Number of months to add to the given date.</param>
/// <returns type="Date"></returns>
}
wijmo.DateTime.addYears = function(value, years) {
/// <summary>Gets a new Date that adds the specified number of years to a given Date.</summary>
/// <param name="value" type="Date" optional="false">Original date.</param>
/// <param name="years" type="Number" optional="false">Number of years to add to the given date.</param>
/// <returns type="Date"></returns>
}
wijmo.DateTime.addHours = function(value, hours) {
/// <summary>Gets a new Date that adds the specified number of hours to a given Date.</summary>
/// <param name="value" type="Date" optional="false">Original date.</param>
/// <param name="hours" type="Number" optional="false">Number of hours to add to the given date.</param>
/// <returns type="Date"></returns>
}
wijmo.DateTime.addMinutes = function(value, minutes) {
/// <summary>Gets a new Date that adds the specified number of minutes to a given Date.</summary>
/// <param name="value" type="Date" optional="false">Original date.</param>
/// <param name="minutes" type="Number" optional="false">Number of minutes to add to the given date.</param>
/// <returns type="Date"></returns>
}
wijmo.DateTime.addSeconds = function(value, seconds) {
/// <summary>Gets a new Date that adds the specified number of seconds to a given Date.</summary>
/// <param name="value" type="Date" optional="false">Original date.</param>
/// <param name="seconds" type="Number" optional="false">Number of seconds to add to the given date.</param>
/// <returns type="Date"></returns>
}
wijmo.DateTime.sameDate = function(d1, d2) {
/// <summary>Returns true if two Date objects refer to the same date (ignoring time).</summary>
/// <param name="d1" type="Date" optional="false">First date.</param>
/// <param name="d2" type="Date" optional="false">Second date.</param>
/// <returns type="Boolean"></returns>
}
wijmo.DateTime.sameTime = function(d1, d2) {
/// <summary>Returns true if two Date objects refer to the same time (ignoring date).</summary>
/// <param name="d1" type="Date" optional="false">First date.</param>
/// <param name="d2" type="Date" optional="false">Second date.</param>
/// <returns type="Boolean"></returns>
}
wijmo.DateTime.equals = function(d1, d2) {
/// <summary>Returns true if two Date objects refer to the same date and time.</summary>
/// <param name="d1" type="Date" optional="false">First date.</param>
/// <param name="d2" type="Date" optional="false">Second date.</param>
/// <returns type="Boolean"></returns>
}
wijmo.DateTime.fromDateTime = function(date, time) {
/// <summary>Gets a Date object with the date and time set on two Date objects.</summary>
/// <param name="date" type="Date" optional="false">Date object that contains the date (day/month/year).</param>
/// <param name="time" type="Date" optional="false">Date object that contains the time (hour:minute:second).</param>
/// <returns type="Date"></returns>
}
wijmo.DateTime.toFiscal = function(date, govt) {
/// <summary>Converts a calendar date to a fiscal date using the current culture.</summary>
/// <param name="date" type="Date" optional="false">Calendar date.</param>
/// <param name="govt" type="Boolean" optional="false">Whether to use the government or corporate fiscal year.</param>
}
wijmo.DateTime.fromFiscal = function(date, govt) {
/// <summary>Converts a fiscal year date to a calendar date using the current culture.</summary>
/// <param name="date" type="Date" optional="false">Fiscal year date.</param>
/// <param name="govt" type="Boolean" optional="false">Whether to use the government or corporate fiscal year.</param>
}
wijmo.DateTime.newDate = function() {
/// <summary>Gets a new Date object set to today's date and no time portion.</summary>
/// <returns type="Date"></returns>
}
wijmo.DateTime.clone = function(date) {
/// <summary>Creates a copy of a given Date object.</summary>
/// <param name="date" type="Date" optional="false">Date object to copy.</param>
/// <returns type="Date"></returns>
}
wijmo.DateTime._wjDict = _wjMerge({}, {});
wijmo.DateTime._wjClass = true;
wijmo.httpRequest = function(url, settings) {
/// <summary>Performs HTTP requests.</summary>
/// <param name="url" type="String" optional="false">String containing the URL to which the request is sent.</param>
/// <param name="settings" type="Object" optional="true">An optional object used to configure the request.
/// 
/// The <b>settings</b> object may contain the following:
/// 
/// <table>
/// <tr>
///   <td><b>method</b></td>
///   <td>The HTTP method to use for the request (e.g. "POST", "GET", "PUT").
///       The default is "GET".</td>
/// </tr>
/// <tr>
///   <td><b>data</b></td>
///   <td>Data to be sent to the server. It is appended to the url for GET requests,
///       and converted to a string for other requests.</td>
/// </tr>
/// <tr>
///   <td><b>async</b></td>
///   <td>By default, all requests are sent asynchronously (i.e. this is set to true by default).
///       If you need synchronous requests, set this option to false.</td>
/// </tr>
/// <tr>
///   <td><b>success</b></td>
///   <td>A function to be called if the request succeeds.
///       The function gets passed a single parameter of type <b>XMLHttpRequest</b>.</td>
/// </tr>
/// <tr>
///   <td><b>error</b></td>
///   <td>A function to be called if the request fails.
///       The function gets passed a single parameter of type <b>XMLHttpRequest</b>.</td>
/// </tr>
/// <tr>
///   <td><b>complete</b></td>
///   <td>A function to be called when the request finishes (after success and error callbacks are executed).
///       The function gets passed a single parameter of type <b>XMLHttpRequest</b>.</td>
/// </tr>
/// <tr>
///   <td><b>beforeSend</b></td>
///   <td>A function to be called immediately before the request us sent.
///       The function gets passed a single parameter of type <b>XMLHttpRequest</b>.</td>
/// </tr>
/// <tr>
///   <td><b>requestHeaders</b></td>
///   <td>A JavaScript object containing key/value pairs to be added to the request
///       headers.</td>
/// </tr>
/// <tr>
///   <td><b>user</b></td>
///   <td>A username to be used with <b>XMLHttpRequest</b> in response to an HTTP access
///       authentication request.</td>
/// </tr>
/// <tr>
///   <td><b>password</b></td>
///   <td>A password to be used with <b>XMLHttpRequest</b> in response to an HTTP access
///       authentication request.</td>
/// </tr>
/// </table>
/// 
/// Use the <b>success</b> to obtain the result of the request which is provided in
/// the callback's <b>XMLHttpRequest</b> parameter. For example, the code below uses
/// the @see:httpRequest method to retrieve a list of customers from an OData service:
/// 
/// <pre>wijmo.httpRequest('http://services.odata.org/Northwind/Northwind.svc/Customers?$format=json', {
///   success: function (xhr) {
///     var response = JSON.parse(xhr.response),
///         customers = response.value;
///     // do something with the customers...
///   }
/// });</pre></param>
/// <returns type="XMLHttpRequest">The <b>XMLHttpRequest</b> object used to perform the request.</returns>
}
wijmo.culture = undefined;
intellisense.annotate(wijmo, {
// Gets or sets an object that contains all localizable strings in the Wijmo library.
// 
// The culture selector is a two-letter string that represents an
// <a href='http://en.wikipedia.org/wiki/List_of_ISO_639-1_codes'>ISO 639 culture</a>.
culture: undefined
});
wijmo.Globalize = function() {
/// <summary>Class that implements formatting and parsing of numbers and Dates.
/// By default, @see:Globalize uses the American English culture.
/// To switch cultures, include the appropriate <b>wijmo.culture.*.js</b>
/// file after the wijmo files.</summary>
/// <returns type="wijmo.Globalize"></returns>
this._wjClassName = 'wijmo.Globalize';
_wjReownEvents(this);
}
wijmo.Globalize.format = function(value, format, trim, truncate) {
/// <summary>Formats a number or a date.
/// 
/// The format strings used with the @see:format function are similar to
/// the ones used by <b>Globalize.js</b> and by the .NET Globalization
/// library. The tables below contains links that describe the formats
/// available:
/// 
/// <ul>
/// <li><a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx">
///      Standard Numeric Format Strings</a></li>
/// <li><a href="http://msdn.microsoft.com/en-us/library/az4se3k1(v=vs.110).aspx">
///      Standard Date and Time Format Strings</a></li>
/// <li><a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx">
///      Custom Date and Time Format Strings</a></li>
/// </ul></summary>
/// <param name="value" type="Object" optional="false">Number or Date to format (all other types are converted to strings).</param>
/// <param name="format" type="String" optional="false">Format string to use when formatting numbers or dates.</param>
/// <param name="trim" type="Boolean" optional="true">Whether to remove trailing zeros from numeric results.</param>
/// <param name="truncate" type="Boolean" optional="true">Whether to truncate the numeric values rather than round them.</param>
/// <returns type="String">A string representation of the given value.</returns>
}
wijmo.Globalize.formatNumber = function(value, format, trim, truncate) {
/// <summary>Formats a number using the current culture.
/// 
/// The @see:formatNumber method accepts most .NET-style
/// <a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx">
/// Standard Numeric Format Strings</a>, except for the 'e' and 'x' formats
/// (scientific notation and hexadecimal) which are not supported.
/// 
/// Numeric format strings takes the form <i>Axxccss</i>, where:
/// <ul>
/// <li>
///  <i>A</i> is a single case-insensitive alphabetic character called the
///  format specifier.</li>
/// <li>
///  <i>xx</i> is an optional integer called the precision specifier.
///  The precision specifier affects the number of digits in the result.</li>
/// <li>
///  <i>cc</i> is an optional string used to override the currency symbol
///  when formatting currency values. This is useful when formatting
///  currency values for cultures different than the current default
///  (for example, when formatting Euro or Yen values in applications
///  that use the English culture).</li>
/// <li>
///  <i>ss</i> is an optional string used to scale the number. If provided,
///  it must consist of commas. The number is divided by 1000 for each comma
///  specified.</li>
/// </ul>
/// 
/// The following table describes the standard numeric format specifiers and
/// displays sample output produced by each format specifier for the default
/// culture.
/// 
/// <b>n</b> Number: <code>formatNumber(1234.5, 'n2') => '1,234.50'</code><br/>
/// <b>f</b> Fixed-point: <code>formatNumber(1234.5, 'f2') => '1234.50'</code><br/>
/// <b>g</b> General (no trailing zeros): <code>formatNumber(1234.5, 'g2') => '1,234.5'</code><br/>
/// <b>d</b> Decimal (integers): <code>formatNumber(-1234, 'd6') => '-001234'</code><br/>
/// <b>x</b> Hexadecimal (integers): <code>formatNumber(1234, 'x6') => '0004d2'</code><br/>
/// <b>c</b> Currency: <code>formatNumber(1234, 'c') => '$ 1,234.00'</code><br/>
/// <b>p</b> Percent: <code>formatNumber(0.1234, 'p2') => '12.34 %'</code>
/// 
/// The scaling specifier is especially useful when charting large values. For
/// example, the markup below creates a chart that plots population versus GDP.
/// The raw data expresses the population is units and the GDP in millions.
/// The scaling specified in the axes formats causes the chart to show population
/// in millions and GDP in trillions:
/// 
/// <pre>&lt;wj-flex-chart
///   items-source="countriesGDP" binding-x="pop" chart-type="Scatter"&gt;
///   &lt;wj-flex-chart-series
///     name="GDP" binding="gdp"&gt;&lt;/wj-flex-chart-series&gt;
///   &lt;wj-flex-chart-axis
///     wj-property="axisX" title="Population (millions)"
///     format="n0,,"&gt;
///   &lt;/wj-flex-chart-axis&gt;
///   &lt;wj-flex-chart-axis
///     wj-property="axisY" title="GDP (US$ trillions)"
///     format="c0,,"&gt;
///   &lt;/wj-flex-chart-axis&gt;
/// &lt;/wj-flex-chart&gt;</pre></summary>
/// <param name="value" type="Number" optional="false">Number to format.</param>
/// <param name="format" type="String" optional="false">.NET-style standard numeric format string (e.g. 'n2', 'c4', 'p0', 'g2', 'd2').</param>
/// <param name="trim" type="Boolean" optional="true">Whether to remove trailing zeros from the result.</param>
/// <param name="truncate" type="Boolean" optional="true">Whether to truncate the value rather than round it.</param>
/// <returns type="String">A string representation of the given number.</returns>
}
wijmo.Globalize.formatDate = function(value, format) {
/// <summary>Formats a date using the current culture.
/// 
/// The @see:format parameter contains a .NET-style
/// <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx">Date format string</a>
/// with the following additions:
/// <ul>
///  <li><i>Q, q</i> Calendar quarter.</li>
///  <li><i>U</i> Fiscal quarter (government).</li>
///  <li><i>u</i> Fiscal quarter (private sector).</li>
///  <li><i>EEEE, EEE, EE, E</i> Fiscal year (government).</li>
///  <li><i>eeee, eee, ee, e</i> Fiscal year (private sector).</li>
/// </ul>
/// 
/// For example:
/// 
/// <pre>
/// var d = new Date(2015, 9, 1); // Oct 1, 2015
/// console.log(wijmo.Globalize.format(d, '"FY"EEEE"Q"U') + ' (US culture)');
/// &gt; FY2016Q1 (US culture)
/// </pre></summary>
/// <param name="value" type="Date" optional="false">Number or Date to format.</param>
/// <param name="format" type="String" optional="false">.NET-style Date format string.</param>
/// <returns type="String">A string representation of the given date.</returns>
}
wijmo.Globalize.parseInt = function(value, format) {
/// <summary>Parses a string into an integer.</summary>
/// <param name="value" type="String" optional="false">String to convert to an integer.</param>
/// <param name="format" type="String" optional="true">Format to use when parsing the number.</param>
/// <returns type="Number">The integer represented by the given string,
/// or <b>NaN</b> if the string cannot be parsed into an integer.</returns>
}
wijmo.Globalize.parseFloat = function(value, format) {
/// <summary>Parses a string into a floating point number.</summary>
/// <param name="value" type="String" optional="false">String to convert to a number.</param>
/// <param name="format" type="String" optional="true">Format to use when parsing the number.</param>
/// <returns type="Number">The floating point number represented by the given string,
/// or <b>NaN</b> if the string cannot be parsed into a floating point number.</returns>
}
wijmo.Globalize.parseDate = function(value, format) {
/// <summary>Parses a string into a Date.</summary>
/// <param name="value" type="String" optional="false">String to convert to a Date.</param>
/// <param name="format" type="String" optional="false">Format string used to parse the date.</param>
/// <returns type="Date">The date represented by the given string, or null if the string
/// cannot be parsed into a Date.</returns>
}
wijmo.Globalize.getFirstDayOfWeek = function() {
/// <summary>Gets the first day of the week according to the current culture.
/// 
/// The value returned is between zero (Sunday) and six (Saturday).</summary>
/// <returns type="Number"></returns>
}
wijmo.Globalize.getNumberDecimalSeparator = function() {
/// <summary>Gets the symbol used as a decimal separator in numbers.</summary>
/// <returns type="String"></returns>
}
wijmo.Globalize._wjDict = _wjMerge({}, {});
wijmo.Globalize._wjClass = true;
wijmo.Binding = function(path) {
/// <summary>Initializes a new instance of the @see:Binding class.</summary>
/// <param name="path" type="String" optional="false">Name of the property to bind to.</param>
/// <returns type="wijmo.Binding"></returns>
/// <field name="path" type="String">Gets or sets the path for the binding.
/// 
/// In the simplest case, the path is the name of the property of the source
/// object to use for the binding (e.g. 'street').
/// 
/// Sub-properties of a property can be specified by a syntax similar to that
/// used in JavaScript (e.g. 'address.street').</field>
this._wjClassName = 'wijmo.Binding';
_wjReownEvents(this);
}
wijmo.Binding.prototype.getValue = function(object) {
/// <summary>Gets the binding value for a given object.
/// 
/// If the object does not contain the property specified by the
/// binding @see:path, the method returns null.</summary>
/// <param name="object" type="Object" optional="false">The object that contains the data to be retrieved.</param>
/// <returns type="Object"></returns>
}
wijmo.Binding.prototype.setValue = function(object, value) {
/// <summary>Sets the binding value on a given object.
/// 
/// If the object does not contain the property specified by the
/// binding @see:path, the value is not set.</summary>
/// <param name="object" type="Object" optional="false">The object that contains the data to be set.</param>
/// <param name="value" type="Object" optional="false">Data value to set.</param>
}
wijmo.Binding._wjDict = _wjMerge({}, {path:2});
wijmo.Binding._wjClass = true;
wijmo.Event = function() {
/// <summary>Represents an event.
/// Wijmo events are similar to .NET events. Any class may define events by
/// declaring them as fields. Any class may subscribe to events using the
/// event's @see:addHandler method and unsubscribe using the @see:removeHandler
/// method.
/// Wijmo event handlers take two parameters: <i>sender</i> and <i>args</i>.
/// The first is the object that raised the event, and the second is an object
/// that contains the event parameters.
/// Classes that define events follow the .NET pattern where for every event
/// there is an <i>on[EVENTNAME]</i> method that raises the event. This pattern
/// allows derived classes to override the <i>on[EVENTNAME]</i> method and
/// handle the event before and/or after the base class raises the event.
/// Derived classes may even suppress the event by not calling the base class
/// implementation.
/// For example, the TypeScript code below overrides the <b>onValueChanged</b>
/// event for a control to perform some processing before and after the
/// <b>valueChanged</b> event fires:
/// <pre>// override base class
/// onValueChanged(e: EventArgs) {
///   // execute some code before the event fires
///   console.log('about to fire valueChanged');
///   // optionally, call base class to fire the event
///   super.onValueChanged(e);
///   // execute some code after the event fired
///   console.log('valueChanged event just fired');
/// }</pre></summary>
/// <returns type="wijmo.Event"></returns>
/// <field name="hasHandlers" type="Boolean">Gets a value that indicates whether this event has any handlers.</field>
if (arguments[0]) {
   this._wjArgType = arguments[0];
   this._wjArg = new (_wjGetProp(this._wjArgType))();
}
this._wjClassName = 'wijmo.Event';
_wjReownEvents(this);
}
wijmo.Event.prototype.addHandler = function(handler, self) {
/// <summary>Adds a handler to this event.</summary>
/// <param name="handler" type="Function(sender, args)" optional="false">Function invoked when the event is raised.</param>
/// <param name="self" type="Object" optional="true">Object that defines the event handler
/// (accessible as 'this' from the handler code).</param>
if (typeof handler === 'function') handler.call(self || this._wjOwner, this._wjOwner, this._wjArg);
}
wijmo.Event.prototype.removeHandler = function(handler, self) {
/// <summary>Removes a handler from this event.</summary>
/// <param name="handler" type="Function(sender, args)" optional="false">Function invoked when the event is raised.</param>
/// <param name="self" type="Object" optional="true">Object that defines the event handler (accessible as 'this' from the handler code).</param>
}
wijmo.Event.prototype.removeAllHandlers = function() {
/// <summary>Removes all handlers associated with this event.</summary>
}
wijmo.Event.prototype.raise = function(sender, args) {
/// <summary>Raises this event, causing all associated handlers to be invoked.</summary>
/// <param name="sender" type="Object" optional="false">Source object.</param>
/// <param name="args" type="Object" optional="true">Event parameters.</param>
}
wijmo.Event._wjDict = _wjMerge({}, {hasHandlers:2});
wijmo.Event._wjClass = true;
wijmo.EventArgs = function() {
/// <summary>Base class for event arguments.</summary>
/// <returns type="wijmo.EventArgs"></returns>
this._wjClassName = 'wijmo.EventArgs';
_wjReownEvents(this);
}
wijmo.EventArgs.empty = undefined;
intellisense.annotate(wijmo.EventArgs, {
// Provides a value to use with events that do not have event data.
empty: undefined
});
wijmo.EventArgs._wjDict = _wjMerge({}, {});
wijmo.EventArgs._wjClass = true;
wijmo.CancelEventArgs = function() {
/// <summary>Provides arguments for cancellable events.</summary>
/// <returns type="wijmo.CancelEventArgs"></returns>
/// <field name="cancel" type="Boolean">Gets or sets a value that indicates whether the event should be canceled.</field>
this._wjClassName = 'wijmo.CancelEventArgs';
_wjReownEvents(this);
}
wijmo.CancelEventArgs.prototype = new wijmo.EventArgs();
wijmo.CancelEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {});
wijmo.CancelEventArgs._wjClass = true;
wijmo.PropertyChangedEventArgs = function(propertyName, oldValue, newValue) {
/// <summary>Initializes a new instance of the @see:PropertyChangedEventArgs class.</summary>
/// <param name="propertyName" type="String" optional="false">The name of the property whose value changed.</param>
/// <param name="oldValue" type="Object" optional="false">The old value of the property.</param>
/// <param name="newValue" type="Object" optional="false">The new value of the property.</param>
/// <returns type="wijmo.PropertyChangedEventArgs"></returns>
/// <field name="propertyName" type="String">Gets the name of the property whose value changed.</field>
/// <field name="oldValue" type="Object">Gets the old value of the property.</field>
/// <field name="newValue" type="Object">Gets the new value of the property.</field>
this._wjClassName = 'wijmo.PropertyChangedEventArgs';
_wjReownEvents(this);
}
wijmo.PropertyChangedEventArgs.prototype = new wijmo.EventArgs();
wijmo.PropertyChangedEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {propertyName:2,oldValue:2,newValue:2});
wijmo.PropertyChangedEventArgs._wjClass = true;
wijmo.RequestErrorEventArgs = function(xhr) {
/// <summary>Initializes a new instance of the @see:RequestErrorEventArgs class.</summary>
/// <param name="xhr" type="XMLHttpRequest" optional="false">The @see:XMLHttpRequest that detected the error.
/// The status and statusText properties of the request object
/// contain details about the error.</param>
/// <returns type="wijmo.RequestErrorEventArgs"></returns>
/// <field name="request" type="XMLHttpRequest">Gets a reference to the @see:XMLHttpRequest that detected the error.
/// 
/// The status and statusText properties of the request object contain
/// details about the error.</field>
this._wjClassName = 'wijmo.RequestErrorEventArgs';
_wjReownEvents(this);
}
wijmo.RequestErrorEventArgs.prototype = new wijmo.CancelEventArgs();
wijmo.RequestErrorEventArgs._wjDict = _wjMerge(wijmo.CancelEventArgs._wjDict, {request:2});
wijmo.RequestErrorEventArgs._wjClass = true;
wijmo.Control = function(element, options, invalidateOnResize) {
/// <summary>Initializes a new instance of the @see:Control class and attaches it to a DOM element.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the control.</param>
/// <param name="invalidateOnResize" type="Boolean" optional="true">Whether the control should be invalidated when it is resized.</param>
/// <returns type="wijmo.Control"></returns>
/// <field name="hostElement" type="HTMLElement">Gets the DOM element that is hosting the control.</field>
/// <field name="isUpdating" type="Boolean">Gets a value that indicates whether the control is currently being updated.</field>
/// <field name="isTouching" type="Boolean">Gets a value that indicates whether the control is currently handling a touch event.</field>
/// <field name="isDisabled" type="Boolean">Gets or sets a value that determines whether the control is disabled.
/// 
/// Disabled controls cannot get mouse or keyboard events.</field>
/// <field name="gotFocus" type="wijmo.Event">Occurs when the control gets the focus.</field>
/// <field name="lostFocus" type="wijmo.Event">Occurs when the control loses the focus.</field>
this._wjClassName = 'wijmo.Control';
this.gotFocus = new wijmo.Event('wijmo.EventArgs');
this.lostFocus = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.Control.prototype.getTemplate = function() {
/// <summary>Gets the HTML template used to create instances of the control.
/// 
/// This method traverses up the class hierarchy to find the nearest ancestor that
/// specifies a control template. For example, if you specify a prototype for the
/// @see:ComboBox control, it will override the template defined by the @see:DropDown
/// base class.</summary>
/// <returns type="String"></returns>
}
wijmo.Control.prototype.applyTemplate = function(classNames, template, parts, namePart) {
/// <summary>Applies the template to a new instance of a control, and returns the root element.
/// 
/// This method should be called by constructors of templated controls.
/// It is responsible for binding the template parts to the
/// corresponding control members.
/// 
/// For example, the code below applies a template to an instance
/// of an @see:InputNumber control. The template must contain elements
/// with the 'wj-part' attribute set to 'input', 'btn-inc', and 'btn-dec'.
/// The control members '_tbx', '_btnUp', and '_btnDn' will be assigned
/// references to these elements.
/// 
/// <pre>this.applyTemplate('wj-control wj-inputnumber', template, {
///   _tbx: 'input',
///   _btnUp: 'btn-inc',
///   _btnDn: 'btn-dec'
/// }, 'input');</pre></summary>
/// <param name="classNames" type="String" optional="false">Names of classes to add to the control's host element.</param>
/// <param name="template" type="String" optional="false">An HTML string that defines the control template.</param>
/// <param name="parts" type="Object" optional="false">A dictionary of part variables and their names.</param>
/// <param name="namePart" type="String" optional="true">Name of the part to be named after the host element. This
/// determines how the control submits data when used in forms.</param>
/// <returns type="HTMLElement"></returns>
}
wijmo.Control.prototype.dispose = function() {
/// <summary>Disposes of the control by removing its association with the host element.
/// 
/// The @see:dispose method automatically removes any event listeners added
/// with the @see:addEventListener method.
/// 
/// Calling the @see:dispose method is important in applications that create
/// and remove controls dynamically. Failing to dispose of the controls may
/// cause memory leaks.</summary>
}
wijmo.Control.getControl = function(element) {
/// <summary>Gets the control that is hosted in a given DOM element.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that is hosting the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <returns type="wijmo.Control"></returns>
}
wijmo.Control.prototype.focus = function() {
/// <summary>Sets the focus to this control.</summary>
}
wijmo.Control.prototype.containsFocus = function() {
/// <summary>Checks whether this control contains the focused element.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.Control.prototype.invalidate = function(fullUpdate) {
/// <summary>Invalidates the control causing an asynchronous refresh.</summary>
/// <param name="fullUpdate" type="Boolean" optional="true">Whether to update the control layout as well as the content.</param>
}
wijmo.Control.prototype.refresh = function(fullUpdate) {
/// <summary>Refreshes the control.</summary>
/// <param name="fullUpdate" type="Boolean" optional="true">Whether to update the control layout as well as the content.</param>
}
wijmo.Control.invalidateAll = function(e) {
/// <summary>Invalidates all Wijmo controls contained in an HTML element.
/// 
/// Use this method when your application has dynamic panels that change
/// the control's visibility or dimensions. For example, splitters, accordions,
/// and tab controls usually change the visibility of its content elements.
/// In this case, failing to notify the controls contained in the element
/// may cause them to stop working properly.
/// 
/// If this happens, you must handle the appropriate event in the dynamic
/// container and call the @see:Control.invalidateAll method so the contained
/// Wijmo controls will update their layout information properly.</summary>
/// <param name="e" type="HTMLElement" optional="true">Container element. If set to null, all Wijmo controls
/// on the page will be invalidated.</param>
}
wijmo.Control.refreshAll = function(e) {
/// <summary>Refreshes all Wijmo controls contained in an HTML element.
/// 
/// This method is similar to @see:invalidateAll, except the controls
/// are updated immediately rather than after an interval.</summary>
/// <param name="e" type="HTMLElement" optional="true">Container element. If set to null, all Wijmo controls
/// on the page will be invalidated.</param>
}
wijmo.Control.disposeAll = function(e) {
/// <summary>Disposes of all Wijmo controls contained in an HTML element.</summary>
/// <param name="e" type="HTMLElement" optional="true">Container element.</param>
}
wijmo.Control.prototype.beginUpdate = function() {
/// <summary>Suspends notifications until the next call to @see:endUpdate.</summary>
}
wijmo.Control.prototype.endUpdate = function() {
/// <summary>Resumes notifications suspended by calls to @see:beginUpdate.</summary>
}
wijmo.Control.prototype.deferUpdate = function(fn) {
/// <summary>Executes a function within a @see:beginUpdate/@see:endUpdate block.
/// 
/// The control will not be updated until the function has been executed.
/// This method ensures @see:endUpdate is called even if the function throws
/// an exception.</summary>
/// <param name="fn" type="Function" optional="false">Function to be executed.</param>
}
wijmo.Control.prototype.initialize = function(options) {
/// <summary>Initializes the control by copying the properties from a given object.
/// 
/// This method allows you to initialize controls using plain data objects
/// instead of setting the value of each property in code.
/// 
/// For example:
/// <pre>
/// grid.initialize({
///   itemsSource: myList,
///   autoGenerateColumns: false,
///   columns: [
///     { binding: 'id', header: 'Code', width: 130 },
///     { binding: 'name', header: 'Name', width: 60 }
///   ]
/// });
/// // is equivalent to
/// grid.itemsSource = myList;
/// grid.autoGenerateColumns = false;
/// // etc.
/// </pre>
/// 
/// The initialization data is type-checked as it is applied. If the
/// initialization object contains unknown property names or invalid
/// data types, this method will throw.</summary>
/// <param name="options" type="Object" optional="false">Object that contains the initialization data.</param>
}
wijmo.Control.prototype.addEventListener = function(target, type, fn, capture) {
/// <summary>Adds an event listener to an element owned by this @see:Control.
/// 
/// The control keeps a list of attached listeners and their handlers,
/// making it easier to remove them when the control is disposed (see the
/// @see:dispose and @see:removeEventListener method).
/// 
/// Failing to remove event listeners may cause memory leaks.</summary>
/// <param name="target" type="EventTarget" optional="false">Target element for the event.</param>
/// <param name="type" type="String" optional="false">String that specifies the event.</param>
/// <param name="fn" type="Object" optional="false">Function to execute when the event occurs.</param>
/// <param name="capture" type="Boolean" optional="true">Whether the listener is capturing.</param>
}
wijmo.Control.prototype.removeEventListener = function(target, type, capture) {
/// <summary>Removes one or more event listeners attached to elements owned by this @see:Control.</summary>
/// <param name="target" type="EventTarget" optional="true">Target element for the event. If null, removes listeners attached to all targets.</param>
/// <param name="type" type="String" optional="true">String that specifies the event. If null, removes listeners attached to all events.</param>
/// <param name="capture" type="Boolean" optional="true">Whether the listener is capturing. If null, removes capturing and non-capturing listeners.</param>
/// <returns type="Number">The number of listeners removed.</returns>
}
wijmo.Control.prototype.onGotFocus = function(e) {
/// <summary>Raises the @see:gotFocus event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.Control.prototype.onLostFocus = function(e) {
/// <summary>Raises the @see:lostFocus event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.Control._wjDict = _wjMerge({}, {hostElement:2,isUpdating:2,isTouching:2,isDisabled:2,gotFocus:1,lostFocus:1});
wijmo.Control._wjClass = true;
wijmo.Aggregate = {
// No aggregate.
None: 0,
// Returns the sum of the numeric values in the group.
Sum: 1,
// Returns the count of non-null values in the group.
Cnt: 2,
// Returns the average value of the numeric values in the group.
Avg: 3,
// Returns the maximum value in the group.
Max: 4,
// Returns the minimum value in the group.
Min: 5,
// Returns the difference between the maximum and minimum numeric values in the group.
Rng: 6,
// Returns the sample standard deviation of the numeric values in the group
// (uses the formula based on n-1).
Std: 7,
// Returns the sample variance of the numeric values in the group
// (uses the formula based on n-1).
Var: 8,
// Returns the population standard deviation of the values in the group
// (uses the formula based on n).
StdPop: 9,
// Returns the population variance of the values in the group
// (uses the formula based on n).
VarPop: 10,
_wjEnum: true
};

intellisense.annotate(wijmo, {
// Specifies the type of aggregate to calculate over a group of values.
Aggregate: undefined
});

wijmo.getAggregate = function(aggType, items, binding) {
/// <summary>Calculates an aggregate value from the values in an array.</summary>
/// <param name="aggType" type="wijmo.Aggregate" optional="false">Type of aggregate to calculate.</param>
/// <param name="items" type="Object[]" optional="false">Array with the items to aggregate.</param>
/// <param name="binding" type="String" optional="true">Name of the property to aggregate on (in case the items are not simple values).</param>
}
wijmo.collections = wijmo.collections || { _wjModule: true };
wijmo.collections.NotifyCollectionChangedAction = {
// An item was added to the collection.
Add: 0,
// An item was removed from the collection.
Remove: 1,
// An item was changed or replaced.
Change: 2,
// Several items changed simultaneously
// (for example, the collection was sorted, filtered, or grouped).
Reset: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.collections, {
// Describes the action that caused the @see:INotifyCollectionChanged.collectionChanged
// event to fire.
NotifyCollectionChangedAction: undefined
});

wijmo.collections.NotifyCollectionChangedEventArgs = function(action, item, index) {
/// <summary>Initializes a new instance of the @see:NotifyCollectionChangedEventArgs class.</summary>
/// <param name="action" type="Object" optional="true">Type of action that caused the event to fire.</param>
/// <param name="item" type="Object" optional="true">Item that was added or changed.</param>
/// <param name="index" type="Number" optional="true">Index of the item.</param>
/// <returns type="wijmo.collections.NotifyCollectionChangedEventArgs"></returns>
/// <field name="action" type="wijmo.collections.NotifyCollectionChangedAction">Gets the action that caused the event to fire.</field>
/// <field name="item" type="Object">Gets the item that was added, removed, or changed.</field>
/// <field name="index" type="Number">Gets the index at which the change occurred.</field>
this._wjClassName = 'wijmo.collections.NotifyCollectionChangedEventArgs';
_wjReownEvents(this);
}
wijmo.collections.NotifyCollectionChangedEventArgs.prototype = new wijmo.EventArgs();
wijmo.collections.NotifyCollectionChangedEventArgs.reset = undefined;
intellisense.annotate(wijmo.collections.NotifyCollectionChangedEventArgs, {
// Provides a reset notification.
reset: undefined
});
wijmo.collections.NotifyCollectionChangedEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {});
wijmo.collections.NotifyCollectionChangedEventArgs._wjClass = true;
wijmo.collections.SortDescription = function(property, ascending) {
/// <summary>Initializes a new instance of the @see:SortDescription class.</summary>
/// <param name="property" type="String" optional="false">Name of the property to sort on.</param>
/// <param name="ascending" type="Boolean" optional="false">Whether to sort in ascending order.</param>
/// <returns type="wijmo.collections.SortDescription"></returns>
/// <field name="property" type="String">Gets the name of the property used to sort.</field>
/// <field name="ascending" type="Boolean">Gets a value that determines whether to sort the values in ascending order.</field>
this._wjClassName = 'wijmo.collections.SortDescription';
_wjReownEvents(this);
}
wijmo.collections.SortDescription._wjDict = _wjMerge({}, {property:2,ascending:2});
wijmo.collections.SortDescription._wjClass = true;
wijmo.collections.PageChangingEventArgs = function(newIndex) {
/// <summary>Initializes a new instance of the @see:PageChangingEventArgs class.</summary>
/// <param name="newIndex" type="Number" optional="false">Index of the page that is about to become current.</param>
/// <returns type="wijmo.collections.PageChangingEventArgs"></returns>
/// <field name="newPageIndex" type="Number">Gets the index of the page that is about to become current.</field>
this._wjClassName = 'wijmo.collections.PageChangingEventArgs';
_wjReownEvents(this);
}
wijmo.collections.PageChangingEventArgs.prototype = new wijmo.CancelEventArgs();
wijmo.collections.PageChangingEventArgs._wjDict = _wjMerge(wijmo.CancelEventArgs._wjDict, {});
wijmo.collections.PageChangingEventArgs._wjClass = true;
wijmo.collections.GroupDescription = function() {
/// <summary>Represents a base class for types defining grouping conditions.
/// The concrete class which is commonly used for this purpose is
/// @see:PropertyGroupDescription.</summary>
/// <returns type="wijmo.collections.GroupDescription"></returns>
this._wjClassName = 'wijmo.collections.GroupDescription';
_wjReownEvents(this);
}
wijmo.collections.GroupDescription.prototype.groupNameFromItem = function(item, level) {
/// <summary>Returns the group name for the given item.</summary>
/// <param name="item" type="Object" optional="false">The item to get group name for.</param>
/// <param name="level" type="Number" optional="false">The zero-based group level index.</param>
/// <returns type="Object">The name of the group the item belongs to.</returns>
}
wijmo.collections.GroupDescription.prototype.namesMatch = function(groupName, itemName) {
/// <summary>Returns a value that indicates whether the group name and the item name
/// match (which implies that the item belongs to the group).</summary>
/// <param name="groupName" type="Object" optional="false">The name of the group.</param>
/// <param name="itemName" type="Object" optional="false">The name of the item.</param>
/// <returns type="Boolean">True if the names match; otherwise, false.</returns>
}
wijmo.collections.GroupDescription._wjDict = _wjMerge({}, {});
wijmo.collections.GroupDescription._wjClass = true;
wijmo.collections.PropertyGroupDescription = function(property, converter) {
/// <summary>Initializes a new instance of the @see:PropertyGroupDescription class.</summary>
/// <param name="property" type="String" optional="false">The name of the property that specifies
/// which group an item belongs to.</param>
/// <param name="converter" type="Function" optional="true">A callback function that takes an item and
/// a property name and returns the group name. If not specified,
/// the group name is the property value for the item.</param>
/// <returns type="wijmo.collections.PropertyGroupDescription"></returns>
this._wjClassName = 'wijmo.collections.PropertyGroupDescription';
_wjReownEvents(this);
}
wijmo.collections.PropertyGroupDescription.prototype = new wijmo.collections.GroupDescription();
wijmo.collections.PropertyGroupDescription.prototype.groupNameFromItem = function(item, level) {
/// <summary>Returns the group name for the given item.</summary>
/// <param name="item" type="Object" optional="false">The item to get group name for.</param>
/// <param name="level" type="Number" optional="false">The zero-based group level index.</param>
/// <returns type="Object">The name of the group the item belongs to.</returns>
}
wijmo.collections.PropertyGroupDescription.prototype.namesMatch = function(groupName, itemName) {
/// <summary>Returns a value that indicates whether the group name and the item name
/// match (which implies that the item belongs to the group).</summary>
/// <param name="groupName" type="Object" optional="false">The name of the group.</param>
/// <param name="itemName" type="Object" optional="false">The name of the item.</param>
/// <returns type="Boolean">True if the names match; otherwise, false.</returns>
}
wijmo.collections.PropertyGroupDescription._wjDict = _wjMerge(wijmo.collections.GroupDescription._wjDict, {});
wijmo.collections.PropertyGroupDescription._wjClass = true;
wijmo.collections.ArrayBase = function() {
/// <summary>Initializes a new instance of the @see:ArrayBase class.</summary>
/// <returns type="wijmo.collections.ArrayBase"></returns>
this._wjClassName = 'wijmo.collections.ArrayBase';
_wjReownEvents(this);
}
wijmo.collections.ArrayBase._wjDict = _wjMerge({}, {});
wijmo.collections.ArrayBase._wjClass = true;
wijmo.collections.ObservableArray = function(data) {
/// <summary>Initializes a new instance of the @see:ObservableArray class.</summary>
/// <param name="data" type="Object[]" optional="true">Array containing items used to populate the @see:ObservableArray.</param>
/// <returns type="wijmo.collections.ObservableArray"></returns>
/// <field name="isUpdating" type="Object">Gets a value that indicates whether notifications are currently suspended
/// (see @see:beginUpdate and @see:endUpdate).</field>
/// <field name="collectionChanged" type="wijmo.Event">Occurs when the collection changes.</field>
this._wjClassName = 'wijmo.collections.ObservableArray';
this.collectionChanged = new wijmo.Event('wijmo.collections.NotifyCollectionChangedEventArgs');
_wjReownEvents(this);
}
wijmo.collections.ObservableArray.prototype = new wijmo.collections.ArrayBase();
wijmo.collections.ObservableArray.prototype.push = function(item) {
/// <summary>Adds one or more items to the end of the array.</summary>
/// <param name="item" type="Object[]" optional="false">One or more items to add to the array.</param>
/// <returns type="Number">The new length of the array.</returns>
}
wijmo.collections.ObservableArray.prototype.splice = function(index, count, item) {
/// <summary>Removes and/or adds items to the array.</summary>
/// <param name="index" type="Number" optional="false">Position where items will be added or removed.</param>
/// <param name="count" type="Number" optional="false">Number of items to remove from the array.</param>
/// <param name="item" type="Object" optional="true">Item to add to the array.</param>
/// <returns type="Object[]">An array containing the removed elements.</returns>
}
wijmo.collections.ObservableArray.prototype.slice = function(begin, end) {
/// <summary>Creates a shallow copy of a portion of an array.</summary>
/// <param name="begin" type="Number" optional="true">Position where the copy starts.</param>
/// <param name="end" type="Number" optional="true">Position where the copy ends.</param>
/// <returns type="Object[]">A shallow copy of a portion of an array.</returns>
}
wijmo.collections.ObservableArray.prototype.indexOf = function(searchElement, fromIndex) {
/// <summary>Searches for an item in the array.</summary>
/// <param name="searchElement" type="Object" optional="false">Element to locate in the array.</param>
/// <param name="fromIndex" type="Number" optional="true">The index where the search should start.</param>
/// <returns type="Number">The index of the item in the array, or -1 if the item was not found.</returns>
}
wijmo.collections.ObservableArray.prototype.sort = function(compareFn) {
/// <summary>Sorts the elements of the array in place.</summary>
/// <param name="compareFn" type="Function" optional="true">Specifies a function that defines the sort order.
/// If specified, the function should take two arguments and should return
/// -1, +1, or 0 to indicate the first argument is smaller, greater than,
/// or equal to the second argument.
/// If omitted, the array is sorted in dictionary order according to the
/// string conversion of each element.</param>
/// <returns type="Object[]">A copy of the sorted array.</returns>
}
wijmo.collections.ObservableArray.prototype.insert = function(index, item) {
/// <summary>Inserts an item at a specific position in the array.</summary>
/// <param name="index" type="Number" optional="false">Position where the item will be added.</param>
/// <param name="item" type="Object" optional="false">Item to add to the array.</param>
}
wijmo.collections.ObservableArray.prototype.remove = function(item) {
/// <summary>Removes an item from the array.</summary>
/// <param name="item" type="Object" optional="false">Item to remove.</param>
/// <returns type="Boolean">True if the item was removed, false if it wasn't found in the array.</returns>
}
wijmo.collections.ObservableArray.prototype.removeAt = function(index) {
/// <summary>Removes an item at a specific position in the array.</summary>
/// <param name="index" type="Number" optional="false">Position of the item to remove.</param>
}
wijmo.collections.ObservableArray.prototype.setAt = function(index, item) {
/// <summary>Assigns an item at a specific position in the array.</summary>
/// <param name="index" type="Number" optional="false">Position where the item will be assigned.</param>
/// <param name="item" type="Object" optional="false">Item to assign to the array.</param>
}
wijmo.collections.ObservableArray.prototype.clear = function() {
/// <summary>Removes all items from the array.</summary>
}
wijmo.collections.ObservableArray.prototype.beginUpdate = function() {
/// <summary>Suspends notifications until the next call to @see:endUpdate.</summary>
}
wijmo.collections.ObservableArray.prototype.endUpdate = function() {
/// <summary>Resumes notifications suspended by a call to @see:beginUpdate.</summary>
}
wijmo.collections.ObservableArray.prototype.deferUpdate = function(fn) {
/// <summary>Executes a function within a @see:beginUpdate/@see:endUpdate block.
/// 
/// The collection will not be refreshed until the function finishes.
/// This method ensures @see:endUpdate is called even if the function throws
/// an exception.</summary>
/// <param name="fn" type="Function" optional="false">Function to be executed without updates.</param>
}
wijmo.collections.ObservableArray.prototype.implementsInterface = function(interfaceName) {
/// <summary>Returns true if the caller queries for a supported interface.</summary>
/// <param name="interfaceName" type="String" optional="false">Name of the interface to look for.</param>
/// <returns type="Boolean">True if the caller queries for a supported interface.</returns>
}
wijmo.collections.ObservableArray.prototype.onCollectionChanged = function(e) {
/// <summary>Raises the @see:collectionChanged event.</summary>
/// <param name="e" type="Object" optional="true">Contains a description of the change.</param>
}
wijmo.collections.ObservableArray._wjDict = _wjMerge(wijmo.collections.ArrayBase._wjDict, {isUpdating:2,collectionChanged:1});
wijmo.collections.ObservableArray._wjClass = true;
wijmo.collections.CollectionView = function(sourceCollection, options) {
/// <summary>Initializes a new instance of the @see:CollectionView class.</summary>
/// <param name="sourceCollection" type="Object" optional="true">Array that serves as a source for this
/// @see:CollectionView.</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.collections.CollectionView"></returns>
/// <field name="newItemCreator" type="Function">Gets or sets a function that creates new items for the collection.
/// 
/// If the creator function is not supplied, the @see:CollectionView
/// will try to create an uninitialized item of the appropriate type.
/// 
/// If the creator function is supplied, it should be a function that
/// takes no parameters and returns an initialized object of the proper
/// type for the collection.</field>
/// <field name="sortConverter" type="Function">Gets or sets a function used to convert values when sorting.
/// 
/// If provided, the function should take as parameters a
/// @see:SortDescription, a data item, and a value to convert,
/// and should return the converted value.
/// 
/// This property provides a way to customize sorting. For example,
/// the @see:FlexGrid control uses it to sort mapped columns by
/// display value instead of by raw value.
/// 
/// For example, the code below causes a @see:CollectionView to
/// sort the 'country' property, which contains country code integers,
/// using the corresponding country names:
/// 
/// <pre>var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(',');
/// collectionView.sortConverter = function (sd, item, value) {
///   if (sd.property == 'countryMapped') {
///     value = countries[value]; // convert country id into name
///   }
///   return value;
/// }</pre></field>
/// <field name="sortComparer" type="Function">Gets or sets a function used to compare values when sorting.
/// 
/// If provided, the sort comparer function should take as parameters
/// two values of any type, and should return -1, 0, or +1 to indicate
/// whether the first value is smaller than, equal to, or greater than
/// the second. If the sort comparer returns null, the standard built-in
/// comparer is used.
/// 
/// This @see:sortComparer property allows you to use custom comparison
/// algorithms that in some cases result in sorting sequences that are
/// more consistent with user's expectations than plain string comparisons.
/// 
/// For example, see <a href="http://www.davekoelle.com/alphanum.html">Dave Koele's Alphanum algorithm</a>.
/// It breaks up strings into chunks composed of strings or numbers, then
/// sorts number chunks in value order and string chunks in ASCII order.
/// Dave calls the result a "natural sorting order".
/// 
/// The example below shows a typical use for the @see:sortComparer property:
/// <pre>// create a CollectionView with a custom sort comparer
/// var dataCustomSort = new wijmo.collections.CollectionView(data, {
///   sortComparer: function (a, b) {
///     return wijmo.isString(a) && wijmo.isString(b)
///       ? alphanum(a, b) // custom comparer used for strings
///       : null; // use default comparer used for everything else
///   }
/// });</pre></field>
/// <field name="useStableSort" type="Boolean">Gets or sets whether to use a stable sort algorithm.
/// 
/// Stable sorting algorithms maintain the relative order of records with equal keys.
/// For example, consider a collection of objects with an "Amount" field.
/// If you sort the collection by "Amount", a stable sort will keep the original
/// order of records with the same Amount value.
/// 
/// This property is false by default, which causes the @see:CollectionView to use
/// JavaScript's built-in sort method, which is very fast but not stable. Setting
/// the @see:useStableSort property to true increases sort times by 30% to 50%, which
/// can be significant for large collections.</field>
/// <field name="trackChanges" type="Boolean">Gets or sets a value that determines whether the control should
/// track changes to the data.
/// 
/// If @see:trackChanges is set to true, the @see:CollectionView keeps
/// track of changes to the data and exposes them through the
/// @see:itemsAdded, @see:itemsRemoved, and @see:itemsEdited collections.
/// 
/// Tracking changes is useful in situations where you need to update
/// the server after the user has confirmed that the modifications are
/// valid.
/// 
/// After committing or cancelling changes, use the @see:clearChanges method
/// to clear the @see:itemsAdded, @see:itemsRemoved, and @see:itemsEdited
/// collections.
/// 
/// The @see:CollectionView only tracks changes made when the proper
/// @see:CollectionView methods are used (@see:editItem/@see:commitEdit,
/// @see:addNew/@see:commitNew, and @see:remove).
/// Changes made directly to the data are not tracked.</field>
/// <field name="itemsAdded" type="wijmo.collections.ObservableArray">Gets an @see:ObservableArray containing the records that were added to
/// the collection since @see:trackChanges was enabled.</field>
/// <field name="itemsRemoved" type="wijmo.collections.ObservableArray">Gets an @see:ObservableArray containing the records that were removed from
/// the collection since @see:trackChanges was enabled.</field>
/// <field name="itemsEdited" type="wijmo.collections.ObservableArray">Gets an @see:ObservableArray containing the records that were edited in
/// the collection since @see:trackChanges was enabled.</field>
/// <field name="collectionChanged" type="wijmo.Event">Occurs when the collection changes.</field>
/// <field name="sourceCollectionChanging" type="wijmo.Event">Occurs before the value of the @see:sourceCollection property changes.</field>
/// <field name="sourceCollectionChanged" type="wijmo.Event">Occurs after the value of the @see:sourceCollection property changes.</field>
/// <field name="canFilter" type="Boolean">Gets a value that indicates whether this view supports filtering via the
/// @see:filter property.</field>
/// <field name="canGroup" type="Boolean">Gets a value that indicates whether this view supports grouping via the
/// @see:groupDescriptions property.</field>
/// <field name="canSort" type="Boolean">Gets a value that indicates whether this view supports sorting via the
/// @see:sortDescriptions property.</field>
/// <field name="currentItem" type="Object">Gets or sets the current item in the view.</field>
/// <field name="currentPosition" type="Number">Gets the ordinal position of the current item in the view.</field>
/// <field name="filter" type="wijmo.collections.IPredicate">Gets or sets a callback used to determine if an item is suitable for
/// inclusion in the view.
/// 
/// The callback function should return true if the item passed in as a
/// parameter should be included in the view.
/// 
/// NOTE: If the filter function needs a scope (i.e. a meaningful 'this'
/// value) remember to set the filter using the 'bind' function to specify
/// the 'this' object. For example:
/// <pre>
///   collectionView.filter = this._filter.bind(this);
/// </pre></field>
/// <field name="groupDescriptions" type="wijmo.collections.ObservableArray">Gets a collection of @see:GroupDescription objects that describe how the
/// items in the collection are grouped in the view.</field>
/// <field name="groups" type="wijmo.collections.CollectionViewGroup[]">Gets an array of @see:CollectionViewGroup objects that represents the
/// top-level groups.</field>
/// <field name="isEmpty" type="Boolean">Gets a value that indicates whether this view contains no items.</field>
/// <field name="sortDescriptions" type="wijmo.collections.ObservableArray">Gets a collection of @see:SortDescription objects that describe how the items
/// in the collection are sorted in the view.</field>
/// <field name="sourceCollection" type="Object">Gets or sets the underlying (unfiltered and unsorted) collection.</field>
/// <field name="currentChanged" type="wijmo.Event">Occurs after the current item changes.</field>
/// <field name="currentChanging" type="wijmo.Event">Occurs before the current item changes.</field>
/// <field name="items" type="Object[]">Gets items in the view.</field>
/// <field name="isUpdating" type="Object">Gets a value that indicates whether notifications are currently suspended
/// (see @see:beginUpdate and @see:endUpdate).</field>
/// <field name="canAddNew" type="Boolean">Gets a value that indicates whether a new item can be added to the collection.</field>
/// <field name="canCancelEdit" type="Boolean">Gets a value that indicates whether the collection view can discard pending changes
/// and restore the original values of an edited object.</field>
/// <field name="canRemove" type="Boolean">Gets a value that indicates whether items can be removed from the collection.</field>
/// <field name="currentAddItem" type="Object">Gets the item that is being added during the current add transaction.</field>
/// <field name="currentEditItem" type="Object">Gets the item that is being edited during the current edit transaction.</field>
/// <field name="isAddingNew" type="Boolean">Gets a value that indicates whether an add transaction is in progress.</field>
/// <field name="isEditingItem" type="Boolean">Gets a value that indicates whether an edit transaction is in progress.</field>
/// <field name="canChangePage" type="Boolean">Gets a value that indicates whether the @see:pageIndex value can change.</field>
/// <field name="isPageChanging" type="Boolean">Gets a value that indicates whether the page index is changing.</field>
/// <field name="itemCount" type="Number">Gets the total number of items in the view taking paging into account.</field>
/// <field name="pageIndex" type="Number">Gets the zero-based index of the current page.</field>
/// <field name="pageSize" type="Number">Gets or sets the number of items to display on a page.</field>
/// <field name="totalItemCount" type="Number">Gets the total number of items in the view before paging is applied.</field>
/// <field name="pageCount" type="Number">Gets the total number of pages.</field>
/// <field name="pageChanged" type="wijmo.Event">Occurs after the page index changes.</field>
/// <field name="pageChanging" type="wijmo.Event">Occurs before the page index changes.</field>
this._wjClassName = 'wijmo.collections.CollectionView';
this.collectionChanged = new wijmo.Event('wijmo.collections.NotifyCollectionChangedEventArgs');
this.sourceCollectionChanging = new wijmo.Event('wijmo.CancelEventArgs');
this.sourceCollectionChanged = new wijmo.Event('wijmo.EventArgs');
this.currentChanged = new wijmo.Event('wijmo.EventArgs');
this.currentChanging = new wijmo.Event('wijmo.CancelEventArgs');
this.pageChanged = new wijmo.Event('wijmo.EventArgs');
this.pageChanging = new wijmo.Event('wijmo.collections.PageChangingEventArgs');
_wjReownEvents(this);
}
wijmo.collections.CollectionView.prototype.getAggregate = function(aggType, binding) {
/// <summary>Calculates an aggregate value for the items in this collection.</summary>
/// <param name="aggType" type="wijmo.Aggregate" optional="false">Type of aggregate to calculate.</param>
/// <param name="binding" type="String" optional="false">Property to aggregate on.</param>
}
wijmo.collections.CollectionView.prototype.implementsInterface = function(interfaceName) {
/// <summary>Returns true if the caller queries for a supported interface.</summary>
/// <param name="interfaceName" type="String" optional="false">Name of the interface to look for.</param>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.clearChanges = function() {
/// <summary>Clears all changes by removing all items in the @see:itemsAdded,
/// @see:itemsRemoved, and @see:itemsEdited collections.
/// 
/// Call this method after committing changes to the server or
/// after refreshing the data from the server.</summary>
}
wijmo.collections.CollectionView.prototype.onCollectionChanged = function(e) {
/// <summary>Raises the @see:collectionChanged event.</summary>
/// <param name="e" type="Object" optional="true">Contains a description of the change.</param>
}
wijmo.collections.CollectionView.prototype.onSourceCollectionChanging = function(e) {
/// <summary>Raises the @see:sourceCollectionChanging event.</summary>
/// <param name="e" type="wijmo.CancelEventArgs" optional="false">@see:CancelEventArgs that contains the event data.</param>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.onSourceCollectionChanged = function(e) {
/// <summary>Raises the @see:sourceCollectionChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.collections.CollectionView.prototype.contains = function(item) {
/// <summary>Returns a value indicating whether a given item belongs to this view.</summary>
/// <param name="item" type="Object" optional="false">Item to seek.</param>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.moveCurrentTo = function(item) {
/// <summary>Sets the specified item to be the current item in the view.</summary>
/// <param name="item" type="Object" optional="false">Item that will become current.</param>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.moveCurrentToFirst = function() {
/// <summary>Sets the first item in the view as the current item.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.moveCurrentToLast = function() {
/// <summary>Sets the last item in the view as the current item.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.moveCurrentToPrevious = function() {
/// <summary>Sets the item before the current item in the view as the current item.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.moveCurrentToNext = function() {
/// <summary>Sets the item after the current item in the view as the current item.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.moveCurrentToPosition = function(index) {
/// <summary>Sets the item at the specified index in the view as the current item.</summary>
/// <param name="index" type="Number" optional="false">Index of the item that will become current.</param>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.refresh = function() {
/// <summary>Re-creates the view using the current sort, filter, and group parameters.</summary>
}
wijmo.collections.CollectionView.prototype.onCurrentChanged = function(e) {
/// <summary>Raises the @see:currentChanged event.</summary>
/// <param name="e" type="Object" optional="true"></param>
}
wijmo.collections.CollectionView.prototype.onCurrentChanging = function(e) {
/// <summary>Raises the @see:currentChanging event.</summary>
/// <param name="e" type="wijmo.CancelEventArgs" optional="false">@see:CancelEventArgs that contains the event data.</param>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView.prototype.beginUpdate = function() {
/// <summary>Suspend refreshes until the next call to @see:endUpdate.</summary>
}
wijmo.collections.CollectionView.prototype.endUpdate = function() {
/// <summary>Resume refreshes suspended by a call to @see:beginUpdate.</summary>
}
wijmo.collections.CollectionView.prototype.deferUpdate = function(fn) {
/// <summary>Executes a function within a @see:beginUpdate/@see:endUpdate block.
/// 
/// The collection will not be refreshed until the function finishes.
/// This method ensures @see:endUpdate is called even if the function throws
/// an exception.</summary>
/// <param name="fn" type="Function" optional="false">Function to be executed without updates.</param>
}
wijmo.collections.CollectionView.prototype.addNew = function() {
/// <summary>Creates a new item and adds it to the collection.
/// 
/// This method takes no parameters. It creates a new item, adds it to the
/// collection, and prevents refresh operations until the new item is
/// committed using the @see:commitNew method or canceled using the
/// @see:cancelNew method.
/// 
/// The code below shows how the @see:addNew method is typically used:
/// 
/// <pre>
/// // create the new item, add it to the collection
/// var newItem = view.addNew();
/// // initialize the new item
/// newItem.id = getFreshId();
/// newItem.name = 'New Customer';
/// // commit the new item so the view can be refreshed
/// view.commitNew();
/// </pre>
/// 
/// You can also add new items by pushing them into the @see:sourceCollection
/// and then calling the @see:refresh method. The main advantage of @see:addNew
/// is in user-interactive scenarios (like adding new items in a data grid),
/// because it gives users the ability to cancel the add operation. It also
/// prevents the new item from being sorted or filtered out of view until the
/// add operation is committed.</summary>
/// <returns type="Object">The item that was added to the collection.</returns>
}
wijmo.collections.CollectionView.prototype.cancelEdit = function() {
/// <summary>Ends the current edit transaction and, if possible,
/// restores the original value to the item.</summary>
}
wijmo.collections.CollectionView.prototype.cancelNew = function() {
/// <summary>Ends the current add transaction and discards the pending new item.</summary>
}
wijmo.collections.CollectionView.prototype.commitEdit = function() {
/// <summary>Ends the current edit transaction and saves the pending changes.</summary>
}
wijmo.collections.CollectionView.prototype.commitNew = function() {
/// <summary>Ends the current add transaction and saves the pending new item.</summary>
}
wijmo.collections.CollectionView.prototype.editItem = function(item) {
/// <summary>Begins an edit transaction of the specified item.</summary>
/// <param name="item" type="Object" optional="false">Item to be edited.</param>
}
wijmo.collections.CollectionView.prototype.remove = function(item) {
/// <summary>Removes the specified item from the collection.</summary>
/// <param name="item" type="Object" optional="false">Item to be removed from the collection.</param>
}
wijmo.collections.CollectionView.prototype.removeAt = function(index) {
/// <summary>Removes the item at the specified index from the collection.</summary>
/// <param name="index" type="Number" optional="false">Index of the item to be removed from the collection.
/// The index is relative to the view, not to the source collection.</param>
}
wijmo.collections.CollectionView.prototype.moveToFirstPage = function() {
/// <summary>Sets the first page as the current page.</summary>
/// <returns type="Boolean">True if the page index was changed successfully.</returns>
}
wijmo.collections.CollectionView.prototype.moveToLastPage = function() {
/// <summary>Sets the last page as the current page.</summary>
/// <returns type="Boolean">True if the page index was changed successfully.</returns>
}
wijmo.collections.CollectionView.prototype.moveToNextPage = function() {
/// <summary>Moves to the page after the current page.</summary>
/// <returns type="Boolean">True if the page index was changed successfully.</returns>
}
wijmo.collections.CollectionView.prototype.moveToPage = function(index) {
/// <summary>Moves to the page at the specified index.</summary>
/// <param name="index" type="Number" optional="false">Index of the page to move to.</param>
/// <returns type="Boolean">True if the page index was changed successfully.</returns>
}
wijmo.collections.CollectionView.prototype.moveToPreviousPage = function() {
/// <summary>Moves to the page before the current page.</summary>
/// <returns type="Boolean">True if the page index was changed successfully.</returns>
}
wijmo.collections.CollectionView.prototype.onPageChanged = function(e) {
/// <summary>Raises the @see:pageChanged event.</summary>
/// <param name="e" type="Object" optional="true"></param>
}
wijmo.collections.CollectionView.prototype.onPageChanging = function(e) {
/// <summary>Raises the @see:pageChanging event.</summary>
/// <param name="e" type="wijmo.collections.PageChangingEventArgs" optional="false">@see:PageChangingEventArgs that contains the event data.</param>
/// <returns type="Boolean"></returns>
}
wijmo.collections.CollectionView._wjDict = _wjMerge({}, {newItemCreator:2,sortConverter:2,sortComparer:2,useStableSort:2,trackChanges:2,itemsAdded:2,itemsRemoved:2,itemsEdited:2,collectionChanged:1,sourceCollectionChanging:1,sourceCollectionChanged:1,canFilter:2,canGroup:2,canSort:2,currentItem:2,currentPosition:2,filter:2,groupDescriptions:2,groups:2,isEmpty:2,sortDescriptions:2,sourceCollection:2,currentChanged:1,currentChanging:1,items:2,isUpdating:2,canAddNew:2,canCancelEdit:2,canRemove:2,currentAddItem:2,currentEditItem:2,isAddingNew:2,isEditingItem:2,canChangePage:2,isPageChanging:2,itemCount:2,pageIndex:2,pageSize:2,totalItemCount:2,pageCount:2,pageChanged:1,pageChanging:1});
wijmo.collections.CollectionView._wjClass = true;
wijmo.collections.CollectionViewGroup = function(groupDescription, name, level, isBottomLevel) {
/// <summary>Initializes a new instance of the @see:CollectionViewGroup class.</summary>
/// <param name="groupDescription" type="wijmo.collections.GroupDescription" optional="false">@see:GroupDescription that owns the new group.</param>
/// <param name="name" type="String" optional="false">Name of the new group.</param>
/// <param name="level" type="Number" optional="false">Level of the new group.</param>
/// <param name="isBottomLevel" type="Boolean" optional="false">Whether this group has any subgroups.</param>
/// <returns type="wijmo.collections.CollectionViewGroup"></returns>
this._wjClassName = 'wijmo.collections.CollectionViewGroup';
_wjReownEvents(this);
}
wijmo.collections.CollectionViewGroup.prototype.getAggregate = function(aggType, binding, view) {
/// <summary>Calculates an aggregate value for the items in this group.</summary>
/// <param name="aggType" type="wijmo.Aggregate" optional="false">Type of aggregate to calculate.</param>
/// <param name="binding" type="String" optional="false">Property to aggregate on.</param>
/// <param name="view" type="wijmo.collections.ICollectionView" optional="true">CollectionView that owns this group.</param>
}
wijmo.collections.CollectionViewGroup._wjDict = _wjMerge({}, {});
wijmo.collections.CollectionViewGroup._wjClass = true;
wijmo.Tooltip = function(options) {
/// <summary>Initializes a new instance of the @see:Tooltip class.</summary>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the @see:Tooltip.</param>
/// <returns type="wijmo.Tooltip"></returns>
/// <field name="isVisible" type="Boolean">Gets whether the tooltip is currently visible.</field>
/// <field name="isContentHtml" type="Boolean">Gets or sets a value that determines whether the tooltip contents
/// should be displayed as plain text or as HTML.</field>
/// <field name="gap" type="Number">Gets or sets the distance between the tooltip and the target element.</field>
/// <field name="showAtMouse" type="Boolean">Gets or sets a value that determines whether the tooltip should be
/// positioned with respect to the mouse position rather than the
/// target element.</field>
/// <field name="showDelay" type="Number">Gets or sets the delay, in milliseconds, before showing the tooltip after the
/// mouse enters the target element.</field>
/// <field name="hideDelay" type="Number">Gets or sets the delay, in milliseconds, before hiding the tooltip after the
/// mouse leaves the target element.</field>
/// <field name="popup" type="wijmo.Event">Occurs before the tooltip content is displayed.
/// 
/// The event handler may customize the tooltip content or suppress the
/// tooltip display by changing the event parameters.</field>
this._wjClassName = 'wijmo.Tooltip';
this.popup = new wijmo.Event('wijmo.TooltipEventArgs');
_wjReownEvents(this);
}
wijmo.Tooltip.prototype.setTooltip = function(element, content) {
/// <summary>Assigns tooltip content to a given element on the page.
/// 
/// The same tooltip may be used to display information for any number
/// of elements on the page. To remove the tooltip from an element,
/// call @see:setTooltip and specify null for the content.</summary>
/// <param name="element" type="Object" optional="false">Element, element ID, or control that the tooltip explains.</param>
/// <param name="content" type="String" optional="false">Tooltip content or ID of the element that contains the tooltip content.</param>
}
wijmo.Tooltip.prototype.show = function(element, content, bounds) {
/// <summary>Shows the tooltip with the specified content, next to the specified element.</summary>
/// <param name="element" type="Object" optional="false">Element, element ID, or control that the tooltip explains.</param>
/// <param name="content" type="String" optional="false">Tooltip content or ID of the element that contains the tooltip content.</param>
/// <param name="bounds" type="wijmo.Rect" optional="true">Optional element that defines the bounds of the area that the tooltip
/// targets. If not provided, the bounds of the element are used (as reported by the
/// <b>getBoundingClientRect</b> method).</param>
}
wijmo.Tooltip.prototype.hide = function() {
/// <summary>Hides the tooltip if it is currently visible.</summary>
}
wijmo.Tooltip.prototype.onPopup = function(e) {
/// <summary>Raises the @see:popup event.</summary>
/// <param name="e" type="wijmo.TooltipEventArgs" optional="false">@see:TooltipEventArgs that contains the event data.</param>
}
wijmo.Tooltip._wjDict = _wjMerge({}, {isVisible:2,isContentHtml:2,gap:2,showAtMouse:2,showDelay:2,hideDelay:2,popup:1});
wijmo.Tooltip._wjClass = true;
wijmo.TooltipEventArgs = function(content) {
/// <summary>Initializes a new instance of the @see:TooltipEventArgs class.</summary>
/// <param name="content" type="String" optional="false">String to show in the tooltip.</param>
/// <returns type="wijmo.TooltipEventArgs"></returns>
/// <field name="content" type="String">Gets or sets the content to show in the tooltip.
/// 
/// This parameter can be used while handling the @see:Tooltip.popup
/// event to modify the content of the tooltip.</field>
this._wjClassName = 'wijmo.TooltipEventArgs';
_wjReownEvents(this);
}
wijmo.TooltipEventArgs.prototype = new wijmo.CancelEventArgs();
wijmo.TooltipEventArgs._wjDict = _wjMerge(wijmo.CancelEventArgs._wjDict, {content:2});
wijmo.TooltipEventArgs._wjClass = true;
wijmo.Color = function(color) {
/// <summary>Initializes a new @see:Color from a CSS color specification.</summary>
/// <param name="color" type="String" optional="false">CSS color specification.</param>
/// <returns type="wijmo.Color"></returns>
/// <field name="r" type="Number">Gets or sets the red component of this @see:Color,
/// in a range from 0 to 255.</field>
/// <field name="g" type="Number">Gets or sets the green component of this @see:Color,
/// in a range from 0 to 255.</field>
/// <field name="b" type="Number">Gets or sets the blue component of this @see:Color,
/// in a range from 0 to 255.</field>
/// <field name="a" type="Number">Gets or sets the alpha component of this @see:Color,
/// in a range from 0 to 1 (zero is transparent, one is solid).</field>
this._wjClassName = 'wijmo.Color';
_wjReownEvents(this);
}
wijmo.Color.prototype.equals = function(clr) {
/// <summary>Returns true if a @see:Color has the same value as this @see:Color.</summary>
/// <param name="clr" type="wijmo.Color" optional="false">@see:Color to compare to this @see:Color.</param>
/// <returns type="Boolean"></returns>
}
wijmo.Color.prototype.toString = function() {
/// <summary>Gets a string representation of this @see:Color.</summary>
/// <returns type="String"></returns>
}
wijmo.Color.fromRgba = function(r, g, b, a) {
/// <summary>Creates a new @see:Color using the specified RGBA color channel values.</summary>
/// <param name="r" type="Number" optional="false">Value for the red channel, from 0 to 255.</param>
/// <param name="g" type="Number" optional="false">Value for the green channel, from 0 to 255.</param>
/// <param name="b" type="Number" optional="false">Value for the blue channel, from 0 to 255.</param>
/// <param name="a" type="Number" optional="true">Value for the alpha channel, from 0 to 1.</param>
/// <returns type="wijmo.Color"></returns>
}
wijmo.Color.fromHsb = function(h, s, b, a) {
/// <summary>Creates a new @see:Color using the specified HSB values.</summary>
/// <param name="h" type="Number" optional="false">Hue value, from 0 to 1.</param>
/// <param name="s" type="Number" optional="false">Saturation value, from 0 to 1.</param>
/// <param name="b" type="Number" optional="false">Brightness value, from 0 to 1.</param>
/// <param name="a" type="Number" optional="true">Alpha value, from 0 to 1.</param>
/// <returns type="wijmo.Color"></returns>
}
wijmo.Color.fromHsl = function(h, s, l, a) {
/// <summary>Creates a new @see:Color using the specified HSL values.</summary>
/// <param name="h" type="Number" optional="false">Hue value, from 0 to 1.</param>
/// <param name="s" type="Number" optional="false">Saturation value, from 0 to 1.</param>
/// <param name="l" type="Number" optional="false">Lightness value, from 0 to 1.</param>
/// <param name="a" type="Number" optional="true">Alpha value, from 0 to 1.</param>
/// <returns type="wijmo.Color"></returns>
}
wijmo.Color.fromString = function(value) {
/// <summary>Creates a new @see:Color from a CSS color string.</summary>
/// <param name="value" type="String" optional="false">String containing a CSS color specification.</param>
/// <returns type="wijmo.Color">A new @see:Color, or null if the string cannot be parsed into a color.</returns>
}
wijmo.Color.prototype.getHsb = function() {
/// <summary>Gets an array with this color's HSB components.</summary>
/// <returns type="Number[]"></returns>
}
wijmo.Color.prototype.getHsl = function() {
/// <summary>Gets an array with this color's HSL components.</summary>
/// <returns type="Number[]"></returns>
}
wijmo.Color.interpolate = function(c1, c2, pct) {
/// <summary>Creates a @see:Color by interpolating between two colors.</summary>
/// <param name="c1" type="wijmo.Color" optional="false">First color.</param>
/// <param name="c2" type="wijmo.Color" optional="false">Second color.</param>
/// <param name="pct" type="Number" optional="false">Value between zero and one that determines how close the
/// interpolation should be to the second color.</param>
/// <returns type="wijmo.Color"></returns>
}
wijmo.Color.toOpaque = function(c, bkg) {
/// <summary>Gets the closest opaque color to a given color.</summary>
/// <param name="c" type="Object" optional="false">@see:Color to be converted to an opaque color
/// (the color may also be specified as a string).</param>
/// <param name="bkg" type="Object" optional="true">Background color to use when removing the transparency
/// (defaults to white).</param>
/// <returns type="wijmo.Color"></returns>
}
wijmo.Color._hslToRgb = function(h, s, l) {
/// <summary>Converts an HSL color value to RGB.</summary>
/// <param name="h" type="Number" optional="false">The hue (between zero and one).</param>
/// <param name="s" type="Number" optional="false">The saturation (between zero and one).</param>
/// <param name="l" type="Number" optional="false">The lightness (between zero and one).</param>
/// <returns type="Number[]">An array containing the R, G, and B values (between zero and 255).</returns>
}
wijmo.Color._rgbToHsl = function(r, g, b) {
/// <summary>Converts an RGB color value to HSL.</summary>
/// <param name="r" type="Number" optional="false">The value of the red channel (between zero and 255).</param>
/// <param name="g" type="Number" optional="false">The value of the green channel (between zero and 255).</param>
/// <param name="b" type="Number" optional="false">The value of the blue channel (between zero and 255).</param>
/// <returns type="Number[]">An array containing the H, S, and L values (between zero and one).</returns>
}
wijmo.Color._rgbToHsb = function(r, g, b) {
/// <summary>Converts an RGB color value to HSB.</summary>
/// <param name="r" type="Number" optional="false">The value of the red channel (between zero and 255).</param>
/// <param name="g" type="Number" optional="false">The value of the green channel (between zero and 255).</param>
/// <param name="b" type="Number" optional="false">The value of the blue channel (between zero and 255).</param>
/// <returns type="Number[]">An array containing the H, S, and B values (between zero and one).</returns>
}
wijmo.Color._hsbToRgb = function(h, s, b) {
/// <summary>Converts an HSB color value to RGB.</summary>
/// <param name="h" type="Number" optional="false">The hue (between zero and one).</param>
/// <param name="s" type="Number" optional="false">The saturation (between zero and one).</param>
/// <param name="b" type="Number" optional="false">The brightness (between zero and one).</param>
/// <returns type="Number[]">An array containing the R, G, and B values (between zero and 255).</returns>
}
wijmo.Color._hsbToHsl = function(h, s, b) {
/// <summary>Converts an HSB color value to HSL.</summary>
/// <param name="h" type="Number" optional="false">The hue (between zero and one).</param>
/// <param name="s" type="Number" optional="false">The saturation (between zero and one).</param>
/// <param name="b" type="Number" optional="false">The brightness (between zero and one).</param>
/// <returns type="Number[]">An array containing the H, S, and L values (between zero and one).</returns>
}
wijmo.Color._hslToHsb = function(h, s, l) {
/// <summary>Converts an HSL color value to HSB.</summary>
/// <param name="h" type="Number" optional="false">The hue (between zero and one).</param>
/// <param name="s" type="Number" optional="false">The saturation (between zero and one).</param>
/// <param name="l" type="Number" optional="false">The lightness (between zero and one).</param>
/// <returns type="Number[]">An array containing the H, S, and B values (between zero and one).</returns>
}
wijmo.Color._wjDict = _wjMerge({}, {r:2,g:2,b:2,a:2});
wijmo.Color._wjClass = true;
wijmo.Clipboard = function() {
/// <summary>Static class that provides utility methods for clipboard operations.
/// The @see:Clipboard class provides static @see:copy and @see:paste methods
/// that can be used by controls to customize the clipboard content during
/// clipboard operations.
/// For example, the code below shows how a control could intercept the
/// clipboard shortcut keys and provide custom clipboard handling:
/// <pre>
/// rootElement.addEventListener('keydown', function(e) {
///   // copy: ctrl+c or ctrl+Insert
///   if (e.ctrlKey && (e.keyCode == 67 || e.keyCode == 45)) {
///     var text = this.getClipString();
///     Clipboard.copy(text);
///     return;
///   }
///   // paste: ctrl+v or shift+Insert
///   if ((e.ctrlKey && e.keyCode == 86) || (e.shiftKey && e.keyCode == 45)) {
///     Clipboard.paste(function (text) {
///       this.setClipString(text);
///     });
///     return;
///   }
/// });</pre></summary>
/// <returns type="wijmo.Clipboard"></returns>
this._wjClassName = 'wijmo.Clipboard';
_wjReownEvents(this);
}
wijmo.Clipboard.copy = function(text) {
/// <summary>Copies a string to the clipboard.
/// 
/// This method only works if invoked immediately after the user
/// pressed a clipboard copy command (such as ctrl+c).</summary>
/// <param name="text" type="String" optional="false">Text to copy to the clipboard.</param>
}
wijmo.Clipboard.paste = function(callback) {
/// <summary>Gets a string from the clipboard.
/// 
/// This method only works if invoked immediately after the user
/// pressed a clipboard paste command (such as ctrl+v).</summary>
/// <param name="callback" type="Function" optional="false">Function called when the clipboard content
/// has been retrieved. The function receives the clipboard
/// content as a parameter.</param>
}
wijmo.Clipboard._wjDict = _wjMerge({}, {});
wijmo.Clipboard._wjClass = true;
wijmo.showPopup = function(popup, ref, above, fadeIn, copyStyles) {
/// <summary>Shows an element as a popup.
/// 
/// The popup element becomes a child of the body element,
/// and is positioned above or below a reference rectangle,
/// depending on how much room is available.
/// 
/// The reference rectangle may be specified as one of the following:
/// 
/// <dl class="dl-horizontal">
///   <dt>HTMLElement</dt>
///   <dd>The bounding rectangle of the element.</dd>
///   <dt>MouseEvent</dt>
///   <dd>The bounding rectangle of the event's target element.</dd>
///   <dt>Rect</dt>
///   <dd>The given rectangle.</dd>
///   <dt>null</dt>
///   <dd>No reference rectangle; the popup is centered on the window.</dd>
/// </dl>
/// 
/// Call the @see:hidePopup method to hide the popup.</summary>
/// <param name="popup" type="HTMLElement" optional="false">Element to show as a popup.</param>
/// <param name="ref" type="Object" optional="true">Reference element or rectangle used to position the popup.</param>
/// <param name="above" type="Boolean" optional="true">Position popup above the reference rectangle if possible.</param>
/// <param name="fadeIn" type="Boolean" optional="true">Use a fade-in animation to make the popup appear gradually.</param>
/// <param name="copyStyles" type="Boolean" optional="true">Copy font and color styles from reference element.</param>
}
wijmo.hidePopup = function(popup, remove, fadeOut) {
/// <summary>Hides a popup element previously displayed with the @see:showPopup
/// method.</summary>
/// <param name="popup" type="HTMLElement" optional="false">Popup element to hide.</param>
/// <param name="remove" type="Boolean" optional="true">Whether to remove the popup from the DOM or just
/// to hide it.</param>
/// <param name="fadeOut" type="Boolean" optional="true">Whether to use a fade-out animation to make the
/// popup disappear gradually.</param>
}
wijmo.PrintDocument = function(options) {
/// <summary>Initializes a new instance of the @see:PrintDocument class.</summary>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the @see:PrintDocument.</param>
/// <returns type="wijmo.PrintDocument"></returns>
/// <field name="title" type="String">Gets or sets the document title.</field>
/// <field name="copyCss" type="Boolean">Gets or sets a value that determines whether the @see:PrintDocument should include the CSS
/// style sheets defined in the main document.</field>
this._wjClassName = 'wijmo.PrintDocument';
_wjReownEvents(this);
}
wijmo.PrintDocument.prototype.addCSS = function(href) {
/// <summary>Adds a CSS style sheet to the document.</summary>
/// <param name="href" type="String" optional="false">URL of the CSS file that should be added to the document.</param>
}
wijmo.PrintDocument.prototype.append = function(child) {
/// <summary>Appends an HTML element or string to the document.</summary>
/// <param name="child" type="Object" optional="false">HTML element or string to append to the document.</param>
}
wijmo.PrintDocument.prototype.print = function() {
/// <summary>Prints the document.</summary>
}
wijmo.PrintDocument._wjDict = _wjMerge({}, {title:2,copyCss:2});
wijmo.PrintDocument._wjClass = true;
wijmo._MaskProvider = function(input, mask, promptChar) {
/// <summary>Initializes a new instance of the @see:_MaskProvider class.</summary>
/// <param name="input" type="HTMLInputElement" optional="false">Input element to be masked.</param>
/// <param name="mask" type="Object" optional="true">Input mask.</param>
/// <param name="promptChar" type="String" optional="true">Character used to indicate input positions.</param>
/// <returns type="wijmo._MaskProvider"></returns>
/// <field name="input" type="HTMLInputElement">Gets or sets the Input element to be masked.</field>
/// <field name="mask" type="String">Gets or sets the input mask used to validate input.</field>
/// <field name="promptChar" type="String">Gets or sets the input mask used to validate input.</field>
/// <field name="maskFull" type="Boolean">Gets a value that indicates whether the mask has been completely filled.</field>
this._wjClassName = 'wijmo._MaskProvider';
_wjReownEvents(this);
}
wijmo._MaskProvider.prototype.getMaskRange = function() {
/// <summary>Gets an array with the position of the first and last wildcard characters in the mask.</summary>
/// <returns type="Number[]"></returns>
}
wijmo._MaskProvider.prototype.getRawValue = function() {
/// <summary>Gets the raw value of the editor, excluding prompts and literals.</summary>
/// <returns type="String"></returns>
}
wijmo._MaskProvider.prototype.refresh = function() {
/// <summary>Updates the control mask and content.</summary>
}
wijmo._MaskProvider._wjDict = _wjMerge({}, {input:2,mask:2,promptChar:2,maskFull:2});
wijmo._MaskProvider._wjClass = true;
wijmo._MaskElement = function(wildcardOrLiteral, charCase) {
/// <summary>Initializes a new instance of the @see:_MaskElement class.</summary>
/// <param name="wildcardOrLiteral" type="String" optional="false">Wildcard or literal character</param>
/// <param name="charCase" type="String" optional="true">Whether to convert wildcard matches to upper or lowercase.</param>
/// <returns type="wijmo._MaskElement"></returns>
this._wjClassName = 'wijmo._MaskElement';
_wjReownEvents(this);
}
wijmo._MaskElement._wjDict = _wjMerge({}, {});
wijmo._MaskElement._wjClass = true;
wijmo.grid = wijmo.grid || { _wjModule: true };
wijmo.grid.HeadersVisibility = {
// No header cells are displayed.
None: 0,
// Only column header cells are displayed.
Column: 1,
// Only row header cells are displayed.
Row: 2,
// Both column and row header cells are displayed.
All: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies constants that define the visibility of row and column headers.
HeadersVisibility: undefined
});

wijmo.grid.FlexGrid = function(element, options) {
/// <summary>Initializes a new instance of the @see:FlexGrid class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.grid.FlexGrid"></returns>
/// <field name="headersVisibility" type="wijmo.grid.HeadersVisibility">Gets or sets a value that determines whether the row and column headers
/// are visible.</field>
/// <field name="stickyHeaders" type="Boolean">Gets or sets a value that determines whether column headers should remain
/// visible when the user scrolls the document.</field>
/// <field name="preserveSelectedState" type="Boolean">Gets or sets a value that determines whether the grid should preserve
/// the selected state of rows when the data is refreshed.</field>
/// <field name="preserveOutlineState" type="Boolean">Gets or sets a value that determines whether the grid should preserve
/// the expanded/collapsed state of nodes when the data is refreshed.</field>
/// <field name="autoGenerateColumns" type="Boolean">Gets or sets a value that determines whether the grid should generate columns
/// automatically based on the @see:itemsSource.
/// 
/// The column generation depends on the @see:itemsSource property containing
/// at least one item. This data item is inspected and a column is created and
/// bound to each property that contains a primitive value (number, string,
/// Boolean, or Date).
/// 
/// Properties set to null do not generate columns, because the grid would
/// have no way of guessing the appropriate type. In this type of scenario,
/// you should set the @see:autoGenerateColumns property to false and create
/// the columns explicitly. For example:
/// 
/// <pre>var grid = new wijmo.grid.FlexGrid('#theGrid', {
///   autoGenerateColumns: false, // data items may contain null values
///   columns: [                  // so define columns explicitly
///     { binding: 'name', header: 'Name', type: 'String' },
///     { binding: 'amount', header: 'Amount', type: 'Number' },
///     { binding: 'date', header: 'Date', type: 'Date' },
///     { binding: 'active', header: 'Active', type: 'Boolean' }
///   ],
///   itemsSource: customers
/// });</pre></field>
/// <field name="autoClipboard" type="Boolean">Gets or sets a value that determines whether the grid should handle
/// clipboard shortcuts.
/// 
/// The clipboard shortcuts are as follows:
/// 
/// <dl class="dl-horizontal">
///   <dt>ctrl+C, ctrl+Ins</dt>    <dd>Copy grid selection to clipboard.</dd>
///   <dt>ctrl+V, shift+Ins</dt>   <dd>Paste clipboard text to grid selection.</dd>
/// </dl>
/// 
/// Only visible rows and columns are included in clipboard operations.
/// 
/// Read-only cells are not affected by paste operations.</field>
/// <field name="columnLayout" type="String">Gets or sets a JSON string that defines the current column layout.
/// 
/// The column layout string represents an array with the columns and their
/// properties. It can be used to persist column layouts defined by users so
/// they are preserved across sessions, and can also be used to implement undo/redo
/// functionality in applications that allow users to modify the column layout.
/// 
/// The column layout string does not include <b>dataMap</b> properties, because
/// data maps are not serializable.</field>
/// <field name="isReadOnly" type="Boolean">Gets or sets a value that determines whether the user can modify
/// cell values using the mouse and keyboard.</field>
/// <field name="imeEnabled" type="Boolean">Gets or sets a value that determines whether the grid should support
/// Input Method Editors (IME) while not in edit mode.
/// 
/// This property is relevant only for sites/applications in Japanese,
/// Chinese, Korean, and other languages that require IME support.</field>
/// <field name="allowResizing" type="wijmo.grid.AllowResizing">Gets or sets a value that determines whether users may resize
/// rows and/or columns with the mouse.
/// 
/// If resizing is enabled, users can resize columns by dragging
/// the right edge of column header cells, or rows by dragging the
/// bottom edge of row header cells.
/// 
/// Users may also double-click the edge of the header cells to
/// automatically resize rows and columns to fit their content.
/// The auto-size behavior can be customized using the @see:autoSizeMode
/// property.</field>
/// <field name="deferResizing" type="Boolean">Gets or sets a value that determines whether row and column resizing
/// should be deferred until the user releases the mouse button.
/// 
/// By default, @see:deferResizing is set to false, causing rows and columns
/// to be resized as the user drags the mouse. Setting this property to true
/// causes the grid to show a resizing marker and to resize the row or column
/// only when the user releases the mouse button.</field>
/// <field name="autoSizeMode" type="wijmo.grid.AutoSizeMode">Gets or sets which cells should be taken into account when auto-sizing a
/// row or column.
/// 
/// This property controls what happens when users double-click the edge of
/// a column header.
/// 
/// By default, the grid will automatically set the column width based on the
/// content of the header and data cells in the column. This property allows
/// you to change that to include only the headers or only the data.</field>
/// <field name="allowSorting" type="Boolean">Gets or sets a value that determines whether users are allowed to sort columns
/// by clicking the column header cells.</field>
/// <field name="allowAddNew" type="Boolean">Gets or sets a value that indicates whether the grid should provide a new row
/// template so users can add items to the source collection.
/// 
/// The new row template will not be displayed if the @see:isReadOnly property
/// is set to true.</field>
/// <field name="allowDelete" type="Boolean">Gets or sets a value that indicates whether the grid should delete
/// selected rows when the user presses the Delete key.
/// 
/// Selected rows will not be deleted if the @see:isReadOnly property
/// is set to true.</field>
/// <field name="allowMerging" type="wijmo.grid.AllowMerging">Gets or sets which parts of the grid provide cell merging.</field>
/// <field name="showSelectedHeaders" type="wijmo.grid.HeadersVisibility">Gets or sets a value that indicates whether the grid should
/// add class names to indicate selected header cells.</field>
/// <field name="showMarquee" type="Boolean">Gets or sets a value that indicates whether the grid should
/// display a marquee element around the current selection.</field>
/// <field name="showSort" type="Boolean">Gets or sets a value that determines whether the grid should display
/// sort indicators in the column headers.
/// 
/// Sorting is controlled by the @see:ICollectionView.sortDescriptions
/// property of the @see:ICollectionView object used as a the grid's
/// @see:itemsSource.</field>
/// <field name="showGroups" type="Boolean">Gets or sets a value that determines whether the grid should insert group
/// rows to delimit data groups.
/// 
/// Data groups are created by modifying the @see:ICollectionView.groupDescriptions
/// property of the @see:ICollectionView object used as a the grid's @see:itemsSource.</field>
/// <field name="showAlternatingRows" type="Boolean">Gets or sets a value that determines whether the grid should add the 'wj-alt'
/// class to cells in alternating rows.
/// 
/// Setting this property to false disables alternate row styles without any
/// changes to the CSS.</field>
/// <field name="groupHeaderFormat" type="String">Gets or sets the format string used to create the group header content.
/// 
/// The string may contain any text, plus the following replacement strings:
/// <ul>
///   <li><b>{name}</b>: The name of the property being grouped on.</li>
///   <li><b>{value}</b>: The value of the property being grouped on.</li>
///   <li><b>{level}</b>: The group level.</li>
///   <li><b>{count}</b>: The total number of items in this group.</li>
/// </ul>
/// 
/// If a column is bound to the grouping property, the column header is used
/// to replace the <code>{name}</code> parameter, and the column's format and
/// data maps are used to calculate the <code>{value}</code> parameter.
/// If no column is available, the group information is used instead.
/// 
/// You may add invisible columns bound to the group properties in order to
/// customize the formatting of the group header cells.
/// 
/// The default value for this property is<br/>
/// <code>'{name}: &lt;b&gt;{value}&lt;/b&gt;({count:n0} items)'</code>,
/// which creates group headers similar to<br/>
/// <code>'Country: <b>UK</b> (12 items)'</code> or<br/>
/// <code>'Country: <b>Japan</b> (8 items)'</code>.</field>
/// <field name="allowDragging" type="wijmo.grid.AllowDragging">Gets or sets a value that determines whether users are allowed to drag
/// rows and/or columns with the mouse.</field>
/// <field name="itemsSource" type="Object">Gets or sets the array or @see:ICollectionView that contains items shown on the grid.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView that contains the grid data.</field>
/// <field name="childItemsPath" type="Object">Gets or sets the name of the property (or properties) used to generate
/// child rows in hierarchical grids.
/// 
/// Set this property to a string to specify the name of the property that
/// contains an item's child items (e.g. <code>'items'</code>).
/// 
/// If items at different levels child items with different names, then
/// set this property to an array containing the names of the properties
/// that contain child items et each level
/// (e.g. <code>[ 'accounts', 'checks', 'earnings' ]</code>).
/// 
/// @fiddle:t0ncmjwp</field>
/// <field name="cells" type="wijmo.grid.GridPanel">Gets the @see:GridPanel that contains the data cells.</field>
/// <field name="columnHeaders" type="wijmo.grid.GridPanel">Gets the @see:GridPanel that contains the column header cells.</field>
/// <field name="rowHeaders" type="wijmo.grid.GridPanel">Gets the @see:GridPanel that contains the row header cells.</field>
/// <field name="topLeftCells" type="wijmo.grid.GridPanel">Gets the @see:GridPanel that contains the top left cells.</field>
/// <field name="rows" type="wijmo.grid.RowCollection">Gets the grid's row collection.</field>
/// <field name="columns" type="wijmo.grid.ColumnCollection">Gets the grid's column collection.</field>
/// <field name="frozenRows" type="Number">Gets or sets the number of frozen rows.
/// 
/// Frozen rows do not scroll, but the cells they contain
/// may be selected and edited.</field>
/// <field name="frozenColumns" type="Number">Gets or sets the number of frozen columns.
/// 
/// Frozen columns do not scroll, but the cells they contain
/// may be selected and edited.</field>
/// <field name="sortRowIndex" type="Number">Gets or sets the index of row in the column header panel that
/// shows and changes the current sort.
/// 
/// This property is set to null by default, causing the last row
/// in the @see:columnHeaders panel to act as the sort row.</field>
/// <field name="scrollPosition" type="wijmo.Point">Gets or sets a @see:Point that represents the value of the grid's scrollbars.</field>
/// <field name="clientSize" type="wijmo.Size">Gets the client size of the control (control size minus headers and scrollbars).</field>
/// <field name="controlRect" type="wijmo.Rect">Gets the bounding rectangle of the control in page coordinates.</field>
/// <field name="scrollSize" type="wijmo.Size">Gets the size of the grid content in pixels.</field>
/// <field name="viewRange" type="wijmo.grid.CellRange">Gets the range of cells currently in view.</field>
/// <field name="cellFactory" type="wijmo.grid.CellFactory">Gets or sets the @see:CellFactory that creates and updates cells for this grid.</field>
/// <field name="itemFormatter" type="Function">Gets or sets a formatter function used to customize cells on this grid.
/// 
/// The formatter function can add any content to any cell. It provides
/// complete flexibility over the appearance and behavior of grid cells.
/// 
/// If specified, the function should take four parameters: the @see:GridPanel
/// that contains the cell, the row and column indices of the cell, and the
/// HTML element that represents the cell. The function will typically change
/// the <b>innerHTML</b> property of the cell element.
/// 
/// For example:
/// <pre>
/// flex.itemFormatter = function(panel, r, c, cell) {
///   if (panel.cellType == CellType.Cell) {
///     // draw sparklines in the cell
///     var col = panel.columns[c];
///     if (col.name == 'sparklines') {
///       cell.innerHTML = getSparklike(panel, r, c);
///     }
///   }
/// }
/// </pre>
/// 
/// Note that the FlexGrid recycles cells, so if your @see:itemFormatter
/// modifies the cell's style attributes, you must make sure that it resets
/// these attributes for cells that should not have them. For example:
/// 
/// <pre>
/// flex.itemFormatter = function(panel, r, c, cell) {
///   // reset attributes we are about to customize
///   var s = cell.style;
///   s.color = '';
///   s.backgroundColor = '';
///   // customize color and backgroundColor attributes for this cell
///   ...
/// }
/// </pre>
/// 
/// If you have a scenario where multiple clients may want to customize the
/// grid rendering (for example when creating directives or re-usable libraries),
/// consider using the @see:formatItem event instead. The event allows multiple
/// clients to attach their own handlers.</field>
/// <field name="treeIndent" type="Number">Gets or sets the indent used to offset row groups of different levels.</field>
/// <field name="selectionMode" type="wijmo.grid.SelectionMode">Gets or sets the current selection mode.</field>
/// <field name="selection" type="wijmo.grid.CellRange">Gets or sets the current selection.</field>
/// <field name="selectedRows" type="Object[]">Gets or sets an array containing the rows that are currently selected.
/// 
/// Note: this property can be read in all selection modes, but it can be
/// set only when @see:selectionMode is set to <b>SelectionMode.ListBox</b>.</field>
/// <field name="selectedItems" type="Object[]">Gets or sets an array containing the data items that are currently selected.
/// 
/// Note: this property can be read in all selection modes, but it can be
/// set only when @see:selectionMode is set to <b>SelectionMode.ListBox</b>.</field>
/// <field name="activeEditor" type="HTMLInputElement">Gets the <b>HTMLInputElement</b> that represents the cell editor currently active.</field>
/// <field name="editRange" type="wijmo.grid.CellRange">Gets a @see:CellRange that identifies the cell currently being edited.</field>
/// <field name="mergeManager" type="wijmo.grid.MergeManager">Gets or sets the @see:MergeManager object responsible for determining how cells
/// should be merged.</field>
/// <field name="itemsSourceChanged" type="wijmo.Event">Occurs after the grid has been bound to a new items source.</field>
/// <field name="scrollPositionChanged" type="wijmo.Event">Occurs after the control has scrolled.</field>
/// <field name="selectionChanging" type="wijmo.Event">Occurs before selection changes.</field>
/// <field name="selectionChanged" type="wijmo.Event">Occurs after selection changes.</field>
/// <field name="loadingRows" type="wijmo.Event">Occurs before the grid rows are bound to items in the data source.</field>
/// <field name="loadedRows" type="wijmo.Event">Occurs after the grid rows have been bound to items in the data source.</field>
/// <field name="updatingLayout" type="wijmo.Event">Occurs before the grid updates its internal layout.</field>
/// <field name="updatedLayout" type="wijmo.Event">Occurs after the grid has updated its internal layout.</field>
/// <field name="resizingColumn" type="wijmo.Event">Occurs as columns are resized.</field>
/// <field name="resizedColumn" type="wijmo.Event">Occurs when the user finishes resizing a column.</field>
/// <field name="autoSizingColumn" type="wijmo.Event">Occurs before the user auto-sizes a column by double-clicking the
/// right edge of a column header cell.</field>
/// <field name="autoSizedColumn" type="wijmo.Event">Occurs after the user auto-sizes a column by double-clicking the
/// right edge of a column header cell.</field>
/// <field name="draggingColumn" type="wijmo.Event">Occurs when the user starts dragging a column.</field>
/// <field name="draggedColumn" type="wijmo.Event">Occurs when the user finishes dragging a column.</field>
/// <field name="resizingRow" type="wijmo.Event">Occurs as rows are resized.</field>
/// <field name="resizedRow" type="wijmo.Event">Occurs when the user finishes resizing rows.</field>
/// <field name="autoSizingRow" type="wijmo.Event">Occurs before the user auto-sizes a row by double-clicking the
/// bottom edge of a row header cell.</field>
/// <field name="autoSizedRow" type="wijmo.Event">Occurs after the user auto-sizes a row by double-clicking the
/// bottom edge of a row header cell.</field>
/// <field name="draggingRow" type="wijmo.Event">Occurs when the user starts dragging a row.</field>
/// <field name="draggedRow" type="wijmo.Event">Occurs when the user finishes dragging a row.</field>
/// <field name="groupCollapsedChanging" type="wijmo.Event">Occurs when a group is about to be expanded or collapsed.</field>
/// <field name="groupCollapsedChanged" type="wijmo.Event">Occurs after a group has been expanded or collapsed.</field>
/// <field name="sortingColumn" type="wijmo.Event">Occurs before the user applies a sort by clicking on a column header.</field>
/// <field name="sortedColumn" type="wijmo.Event">Occurs after the user applies a sort by clicking on a column header.</field>
/// <field name="beginningEdit" type="wijmo.Event">Occurs before a cell enters edit mode.</field>
/// <field name="prepareCellForEdit" type="wijmo.Event">Occurs when an editor cell is created and before it becomes active.</field>
/// <field name="cellEditEnding" type="wijmo.Event">Occurs when a cell edit is ending.</field>
/// <field name="cellEditEnded" type="wijmo.Event">Occurs when a cell edit has been committed or canceled.</field>
/// <field name="rowEditEnding" type="wijmo.Event">Occurs when a row edit is ending, before the changes are committed or canceled.</field>
/// <field name="rowEditEnded" type="wijmo.Event">Occurs when a row edit has been committed or canceled.</field>
/// <field name="rowAdded" type="wijmo.Event">Occurs when the user creates a new item by editing the new row template
/// (see the @see:allowAddNew property).
/// 
/// The event handler may customize the content of the new item or cancel
/// the new item creation.</field>
/// <field name="deletingRow" type="wijmo.Event">Occurs when the user is deleting a selected row by pressing the Delete
/// key (see the @see:allowDelete property).
/// 
/// The event handler may cancel the row deletion.</field>
/// <field name="deletedRow" type="wijmo.Event">Occurs after the user has deleted a row by pressing the Delete
/// key (see the @see:allowDelete property).</field>
/// <field name="copying" type="wijmo.Event">Occurs when the user is copying the selection content to the
/// clipboard by pressing one of the clipboard shortcut keys
/// (see the @see:autoClipboard property).
/// 
/// The event handler may cancel the copy operation.</field>
/// <field name="copied" type="wijmo.Event">Occurs after the user has copied the selection content to the
/// clipboard by pressing one of the clipboard shortcut keys
/// (see the @see:autoClipboard property).</field>
/// <field name="pasting" type="wijmo.Event">Occurs when the user is pasting content from the clipboard
/// by pressing one of the clipboard shortcut keys
/// (see the @see:autoClipboard property).
/// 
/// The event handler may cancel the copy operation.</field>
/// <field name="pasted" type="wijmo.Event">Occurs after the user has pasted content from the
/// clipboard by pressing one of the clipboard shortcut keys
/// (see the @see:autoClipboard property).</field>
/// <field name="pastingCell" type="wijmo.Event">Occurs when the user is pasting content from the clipboard
/// into a cell (see the @see:autoClipboard property).
/// 
/// The event handler may cancel the copy operation.</field>
/// <field name="pastedCell" type="wijmo.Event">Occurs after the user has pasted content from the
/// clipboard into a cell (see the @see:autoClipboard property).</field>
/// <field name="formatItem" type="wijmo.Event">Occurs when an element representing a cell has been created.
/// 
/// This event can be used to format cells for display. It is similar
/// in purpose to the @see:itemFormatter property, but has the advantage
/// of allowing multiple independent handlers.
/// 
/// For example, this code removes the 'wj-wrap' class from cells in
/// group rows:
/// 
/// <pre>flex.formatItem.addHandler(function (s, e) {
///   if (flex.rows[e.row] instanceof wijmo.grid.GroupRow) {
///     wijmo.removeClass(e.cell, 'wj-wrap');
///   }
/// });</pre></field>
/// <field name="updatingView" type="wijmo.Event">Occurs when the grid starts creating/updating the elements that
/// make up the current view.</field>
/// <field name="updatedView" type="wijmo.Event">Occurs when the grid finishes creating/updating the elements that
/// make up the current view.
/// 
/// The grid updates the view in response to several actions, including:
/// 
/// <ul>
/// <li>refreshing the grid or its data source,</li>
/// <li>adding, removing, or changing rows or columns,</li>
/// <li>resizing or scrolling the grid,</li>
/// <li>changing the selection.</li>
/// </ul></field>
this._wjClassName = 'wijmo.grid.FlexGrid';
this.itemsSourceChanged = new wijmo.Event('wijmo.EventArgs');
this.scrollPositionChanged = new wijmo.Event('wijmo.EventArgs');
this.selectionChanging = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.selectionChanged = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.loadingRows = new wijmo.Event('wijmo.CancelEventArgs');
this.loadedRows = new wijmo.Event('wijmo.EventArgs');
this.updatingLayout = new wijmo.Event('wijmo.CancelEventArgs');
this.updatedLayout = new wijmo.Event('wijmo.EventArgs');
this.resizingColumn = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.resizedColumn = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.autoSizingColumn = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.autoSizedColumn = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.draggingColumn = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.draggedColumn = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.resizingRow = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.resizedRow = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.autoSizingRow = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.autoSizedRow = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.draggingRow = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.draggedRow = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.groupCollapsedChanging = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.groupCollapsedChanged = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.sortingColumn = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.sortedColumn = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.beginningEdit = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.prepareCellForEdit = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.cellEditEnding = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.cellEditEnded = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.rowEditEnding = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.rowEditEnded = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.rowAdded = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.deletingRow = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.deletedRow = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.copying = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.copied = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.pasting = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.pasted = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.pastingCell = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.pastedCell = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.formatItem = new wijmo.Event('wijmo.grid.FormatItemEventArgs');
this.updatingView = new wijmo.Event('wijmo.CancelEventArgs');
this.updatedView = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.grid.FlexGrid.prototype = new wijmo.Control();
wijmo.grid.FlexGrid.prototype.getColumn = function(name) {
/// <summary>Gets a column by name or by binding.
/// 
/// The method searches the column by name. If a column with the given name
/// is not found, it searches by binding. The searches are case-sensitive.</summary>
/// <param name="name" type="String" optional="false">The name or binding to find.</param>
/// <returns type="wijmo.grid.Column">The column with the specified name or binding, or null if not found.</returns>
}
wijmo.grid.FlexGrid.prototype.getCellData = function(r, c, formatted) {
/// <summary>Gets the value stored in a cell in the scrollable area of the grid.</summary>
/// <param name="r" type="Number" optional="false">Index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">Index of the column that contains the cell.</param>
/// <param name="formatted" type="Boolean" optional="false">Whether to format the value for display.</param>
/// <returns type="Object"></returns>
}
wijmo.grid.FlexGrid.prototype.getCellBoundingRect = function(r, c, raw) {
/// <summary>Gets a the bounds of a cell element in viewport coordinates.
/// 
/// This method returns the bounds of cells in the @see:cells
/// panel (scrollable data cells). To get the bounds of cells
/// in other panels, use the @see:getCellBoundingRect method
/// in the appropriate @see:GridPanel object.
/// 
/// The returned value is a @see:Rect object which contains the
/// position and dimensions of the cell in viewport coordinates.
/// The viewport coordinates are the same used by the
/// <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element.getBoundingClientRect">getBoundingClientRect</a>
/// method.</summary>
/// <param name="r" type="Number" optional="false">Index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">Index of the column that contains the cell.</param>
/// <param name="raw" type="Boolean" optional="true">Whether to return the rectangle in raw panel coordinates as opposed to viewport coordinates.</param>
/// <returns type="wijmo.Rect"></returns>
}
wijmo.grid.FlexGrid.prototype.setCellData = function(r, c, value, coerce, invalidate) {
/// <summary>Sets the value of a cell in the scrollable area of the grid.</summary>
/// <param name="r" type="Number" optional="false">Index of the row that contains the cell.</param>
/// <param name="c" type="Object" optional="false">Index, name, or binding of the column that contains the cell.</param>
/// <param name="value" type="Object" optional="false">Value to store in the cell.</param>
/// <param name="coerce" type="Boolean" optional="true">Whether to change the value automatically to match the column's data type.</param>
/// <param name="invalidate" type="Boolean" optional="true">Whether to invalidate the grid to show the change.</param>
/// <returns type="Boolean">True if the value was stored successfully, false otherwise.</returns>
}
wijmo.grid.FlexGrid.prototype.hitTest = function(pt, y) {
/// <summary>Gets a @see:HitTestInfo object with information about a given point.
/// 
/// For example:
/// 
/// <pre>// hit test a point when the user clicks on the grid
/// flex.hostElement.addEventListener('click', function (e) {
///   var ht = flex.hitTest(e.pageX, e.pageY);
///   console.log('you clicked a cell of type "' +
///     wijmo.grid.CellType[ht.cellType] + '".');
/// });</pre></summary>
/// <param name="pt" type="Object" optional="false">@see:Point to investigate, in page coordinates, or a MouseEvent object, or x coordinate of the point.</param>
/// <param name="y" type="Number" optional="true">Y coordinate of the point in page coordinates (if the first parameter is a number).</param>
/// <returns type="wijmo.grid.HitTestInfo">A @see:HitTestInfo object with information about the point.</returns>
}
wijmo.grid.FlexGrid.prototype.getClipString = function(rng) {
/// <summary>Gets the content of a @see:CellRange as a string suitable for
/// copying to the clipboard.
/// 
/// Hidden rows and columns are not included in the clip string.</summary>
/// <param name="rng" type="wijmo.grid.CellRange" optional="true">@see:CellRange to copy. If omitted, the current selection is used.</param>
/// <returns type="String"></returns>
}
wijmo.grid.FlexGrid.prototype.setClipString = function(text, rng) {
/// <summary>Parses a string into rows and columns and applies the content to a given range.
/// 
/// Hidden rows and columns are skipped.</summary>
/// <param name="text" type="String" optional="false">Tab and newline delimited text to parse into the grid.</param>
/// <param name="rng" type="wijmo.grid.CellRange" optional="true">@see:CellRange to copy. If omitted, the current selection is used.</param>
}
wijmo.grid.FlexGrid.prototype.focus = function() {
/// <summary>Overridden to set the focus to the grid without scrolling the whole grid into view.</summary>
}
wijmo.grid.FlexGrid.prototype.containsFocus = function() {
/// <summary>Checks whether this control contains the focused element.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.grid.FlexGrid.prototype.dispose = function() {
/// <summary>Disposes of the control by removing its association with the host element.</summary>
}
wijmo.grid.FlexGrid.prototype.refresh = function(fullUpdate) {
/// <summary>Refreshes the grid display.</summary>
/// <param name="fullUpdate" type="Boolean" optional="true">Whether to update the grid layout and content, or just the content.</param>
}
wijmo.grid.FlexGrid.prototype.refreshCells = function(fullUpdate, recycle, state) {
/// <summary>Refreshes the grid display.</summary>
/// <param name="fullUpdate" type="Boolean" optional="false">Whether to update the grid layout and content, or just the content.</param>
/// <param name="recycle" type="Boolean" optional="true">Whether to recycle existing elements.</param>
/// <param name="state" type="Boolean" optional="true">Whether to keep existing elements and update their state.</param>
}
wijmo.grid.FlexGrid.prototype.autoSizeColumn = function(c, header, extra) {
/// <summary>Resizes a column to fit its content.</summary>
/// <param name="c" type="Number" optional="false">Index of the column to resize.</param>
/// <param name="header" type="Boolean" optional="true">Whether the column index refers to a regular or a header row.</param>
/// <param name="extra" type="Number" optional="true">Extra spacing, in pixels.</param>
}
wijmo.grid.FlexGrid.prototype.autoSizeColumns = function(firstColumn, lastColumn, header, extra) {
/// <summary>Resizes a range of columns to fit their content.
/// 
/// The grid will always measure all rows in the current view range, plus up to 2,000 rows
/// not currently in view. If the grid contains a large amount of data (say 50,000 rows),
/// then not all rows will be measured since that could potentially take a long time.</summary>
/// <param name="firstColumn" type="Number" optional="true">Index of the first column to resize (defaults to the first column).</param>
/// <param name="lastColumn" type="Number" optional="true">Index of the last column to resize (defaults to the last column).</param>
/// <param name="header" type="Boolean" optional="true">Whether the column indices refer to regular or header columns.</param>
/// <param name="extra" type="Number" optional="true">Extra spacing, in pixels.</param>
}
wijmo.grid.FlexGrid.prototype.autoSizeRow = function(r, header, extra) {
/// <summary>Resizes a row to fit its content.</summary>
/// <param name="r" type="Number" optional="false">Index of the row to resize.</param>
/// <param name="header" type="Boolean" optional="true">Whether the row index refers to a regular or a header row.</param>
/// <param name="extra" type="Number" optional="true">Extra spacing, in pixels.</param>
}
wijmo.grid.FlexGrid.prototype.autoSizeRows = function(firstRow, lastRow, header, extra) {
/// <summary>Resizes a range of rows to fit their content.</summary>
/// <param name="firstRow" type="Number" optional="true">Index of the first row to resize.</param>
/// <param name="lastRow" type="Number" optional="true">Index of the last row to resize.</param>
/// <param name="header" type="Boolean" optional="true">Whether the row indices refer to regular or header rows.</param>
/// <param name="extra" type="Number" optional="true">Extra spacing, in pixels.</param>
}
wijmo.grid.FlexGrid.prototype.collapseGroupsToLevel = function(level) {
/// <summary>Collapses all the group rows to a given level.</summary>
/// <param name="level" type="Number" optional="false">Maximum group level to show.</param>
}
wijmo.grid.FlexGrid.prototype.select = function(rng, show) {
/// <summary>Selects a cell range and optionally scrolls it into view.</summary>
/// <param name="rng" type="Object" optional="false">Range to select.</param>
/// <param name="show" type="Object" optional="true">Whether to scroll the new selection into view.</param>
}
wijmo.grid.FlexGrid.prototype.getSelectedState = function(r, c) {
/// <summary>Gets a @see:SelectedState value that indicates the selected state of a cell.</summary>
/// <param name="r" type="Number" optional="false">Row index of the cell to inspect.</param>
/// <param name="c" type="Number" optional="false">Column index of the cell to inspect.</param>
/// <returns type="wijmo.grid.SelectedState"></returns>
}
wijmo.grid.FlexGrid.prototype.scrollIntoView = function(r, c) {
/// <summary>Scrolls the grid to bring a specific cell into view.</summary>
/// <param name="r" type="Number" optional="false">Index of the row to scroll into view.</param>
/// <param name="c" type="Number" optional="false">Index of the column to scroll into view.</param>
/// <returns type="Boolean">True if the grid scrolled.</returns>
}
wijmo.grid.FlexGrid.prototype.isRangeValid = function(rng) {
/// <summary>Checks whether a given CellRange is valid for this grid's row and column collections.</summary>
/// <param name="rng" type="wijmo.grid.CellRange" optional="false">Range to check.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.FlexGrid.prototype.startEditing = function(fullEdit, r, c, focus) {
/// <summary>Starts editing a given cell.
/// 
/// Editing in the @see:FlexGrid is similar to editing in Excel:
/// Pressing F2 or double-clicking a cell puts the grid in <b>full-edit</b> mode.
/// In this mode, the cell editor remains active until the user presses Enter, Tab,
/// or Escape, or until he moves the selection with the mouse. In full-edit mode,
/// pressing the cursor keys does not cause the grid to exit edit mode.
/// 
/// Typing text directly into a cell puts the grid in <b>quick-edit mode</b>.
/// In this mode, the cell editor remains active until the user presses Enter,
/// Tab, or Escape, or any arrow keys.
/// 
/// Full-edit mode is normally used to make changes to existing values.
/// Quick-edit mode is normally used for entering new data quickly.
/// 
/// While editing, the user can toggle between full and quick modes by
/// pressing the F2 key.</summary>
/// <param name="fullEdit" type="Boolean" optional="true">Whether to stay in edit mode when the user presses the cursor keys. Defaults to false.</param>
/// <param name="r" type="Number" optional="true">Index of the row to be edited. Defaults to the currently selected row.</param>
/// <param name="c" type="Number" optional="true">Index of the column to be edited. Defaults to the currently selected column.</param>
/// <param name="focus" type="Boolean" optional="true">Whether to give the editor the focus when editing starts. Defaults to true.</param>
/// <returns type="Boolean">True if the edit operation started successfully.</returns>
}
wijmo.grid.FlexGrid.prototype.finishEditing = function(cancel) {
/// <summary>Commits any pending edits and exits edit mode.</summary>
/// <param name="cancel" type="Boolean" optional="true">Whether pending edits should be canceled or committed.</param>
/// <returns type="Boolean">True if the edit operation finished successfully.</returns>
}
wijmo.grid.FlexGrid.prototype.getMergedRange = function(p, r, c, clip) {
/// <summary>Gets a @see:CellRange that specifies the merged extent of a cell
/// in a @see:GridPanel.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">The @see:GridPanel that contains the range.</param>
/// <param name="r" type="Number" optional="false">Index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">Index of the column that contains the cell.</param>
/// <param name="clip" type="Boolean" optional="true">Whether to clip the merged range to the grid's current view range.</param>
/// <returns type="wijmo.grid.CellRange">A @see:CellRange that specifies the merged range, or null if the cell is not merged.</returns>
}
wijmo.grid.FlexGrid.prototype.onItemsSourceChanged = function(e) {
/// <summary>Raises the @see:itemsSourceChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.grid.FlexGrid.prototype.onScrollPositionChanged = function(e) {
/// <summary>Raises the @see:scrollPositionChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.grid.FlexGrid.prototype.onSelectionChanging = function(e) {
/// <summary>Raises the @see:selectionChanging event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onSelectionChanged = function(e) {
/// <summary>Raises the @see:selectionChanged event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onLoadingRows = function(e) {
/// <summary>Raises the @see:loadingRows event.</summary>
/// <param name="e" type="wijmo.CancelEventArgs" optional="false">@see:CancelEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onLoadedRows = function(e) {
/// <summary>Raises the @see:loadedRows event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.grid.FlexGrid.prototype.onUpdatingLayout = function(e) {
/// <summary>Raises the @see:updatingLayout event.</summary>
/// <param name="e" type="wijmo.CancelEventArgs" optional="false">@see:CancelEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onUpdatedLayout = function(e) {
/// <summary>Raises the @see:updatedLayout event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.grid.FlexGrid.prototype.onResizingColumn = function(e) {
/// <summary>Raises the @see:resizingColumn event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onResizedColumn = function(e) {
/// <summary>Raises the @see:resizedColumn event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onAutoSizingColumn = function(e) {
/// <summary>Raises the @see:autoSizingColumn event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onAutoSizedColumn = function(e) {
/// <summary>Raises the @see:autoSizedColumn event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onDraggingColumn = function(e) {
/// <summary>Raises the @see:draggingColumn event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onDraggedColumn = function(e) {
/// <summary>Raises the @see:draggedColumn event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onResizingRow = function(e) {
/// <summary>Raises the @see:resizingRow event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onResizedRow = function(e) {
/// <summary>Raises the @see:resizedRow event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onAutoSizingRow = function(e) {
/// <summary>Raises the @see:autoSizingRow event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onAutoSizedRow = function(e) {
/// <summary>Raises the @see:autoSizedRow event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onDraggingRow = function(e) {
/// <summary>Raises the @see:draggingRow event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onDraggedRow = function(e) {
/// <summary>Raises the @see:draggedRow event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onGroupCollapsedChanging = function(e) {
/// <summary>Raises the @see:groupCollapsedChanging event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onGroupCollapsedChanged = function(e) {
/// <summary>Raises the @see:groupCollapsedChanged event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onSortingColumn = function(e) {
/// <summary>Raises the @see:sortingColumn event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onSortedColumn = function(e) {
/// <summary>Raises the @see:sortedColumn event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onBeginningEdit = function(e) {
/// <summary>Raises the @see:beginningEdit event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onPrepareCellForEdit = function(e) {
/// <summary>Raises the @see:prepareCellForEdit event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onCellEditEnding = function(e) {
/// <summary>Raises the @see:cellEditEnding event.
/// 
/// You can use this event to perform validation and prevent invalid edits.
/// For example, the code below prevents users from entering values that
/// do not contain the letter 'a'. The code demonstrates how you can obtain
/// the old and new values before the edits are applied.
/// 
/// <pre>function cellEditEnding (sender, e) {
///   // get old and new values
///   var flex = sender,
///       oldVal = flex.getCellData(e.row, e.col),
///       newVal = flex.activeEditor.value;
///   // cancel edits if newVal doesn't contain 'a'
///   e.cancel = newVal.indexOf('a') &lt; 0;
/// }</pre></summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onCellEditEnded = function(e) {
/// <summary>Raises the @see:cellEditEnded event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onRowEditEnding = function(e) {
/// <summary>Raises the @see:rowEditEnding event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onRowEditEnded = function(e) {
/// <summary>Raises the @see:rowEditEnded event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onRowAdded = function(e) {
/// <summary>Raises the @see:rowAdded event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onDeletingRow = function(e) {
/// <summary>Raises the @see:deletingRow event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onDeletedRow = function(e) {
/// <summary>Raises the @see:deletedRow event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onCopying = function(e) {
/// <summary>Raises the @see:copying event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onCopied = function(e) {
/// <summary>Raises the @see:copied event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onPasting = function(e) {
/// <summary>Raises the @see:pasting event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onPasted = function(e) {
/// <summary>Raises the @see:pasted event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onPastingCell = function(e) {
/// <summary>Raises the @see:pastingCell event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onPastedCell = function(e) {
/// <summary>Raises the @see:pastedCell event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false">@see:CellRangeEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onFormatItem = function(e) {
/// <summary>Raises the @see:formatItem event.</summary>
/// <param name="e" type="wijmo.grid.FormatItemEventArgs" optional="false">@see:FormatItemEventArgs that contains the event data.</param>
}
wijmo.grid.FlexGrid.prototype.onUpdatingView = function(e) {
/// <summary>Raises the @see:updatingView event.</summary>
/// <param name="e" type="wijmo.CancelEventArgs" optional="false">@see:CancelEventArgs that contains the event data.</param>
/// <returns type="Boolean">True if the event was not canceled.</returns>
}
wijmo.grid.FlexGrid.prototype.onUpdatedView = function(e) {
/// <summary>Raises the @see:updatedView event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.grid.FlexGrid.controlTemplate = undefined;
intellisense.annotate(wijmo.grid.FlexGrid, {
// Gets or sets the template used to instantiate @see:FlexGrid controls.
controlTemplate: undefined
});
wijmo.grid.FlexGrid._wjDict = _wjMerge(wijmo.Control._wjDict, {headersVisibility:2,stickyHeaders:2,preserveSelectedState:2,preserveOutlineState:2,autoGenerateColumns:2,autoClipboard:2,columnLayout:2,isReadOnly:2,imeEnabled:2,allowResizing:2,deferResizing:2,autoSizeMode:2,allowSorting:2,allowAddNew:2,allowDelete:2,allowMerging:2,showSelectedHeaders:2,showMarquee:2,showSort:2,showGroups:2,showAlternatingRows:2,groupHeaderFormat:2,allowDragging:2,itemsSource:2,collectionView:2,childItemsPath:2,cells:2,columnHeaders:2,rowHeaders:2,topLeftCells:2,rows:2,columns:2,frozenRows:2,frozenColumns:2,sortRowIndex:2,scrollPosition:2,clientSize:2,controlRect:2,scrollSize:2,viewRange:2,cellFactory:2,itemFormatter:2,treeIndent:2,selectionMode:2,selection:2,selectedRows:2,selectedItems:2,activeEditor:2,editRange:2,mergeManager:2,itemsSourceChanged:1,scrollPositionChanged:1,selectionChanging:1,selectionChanged:1,loadingRows:1,loadedRows:1,updatingLayout:1,updatedLayout:1,resizingColumn:1,resizedColumn:1,autoSizingColumn:1,autoSizedColumn:1,draggingColumn:1,draggedColumn:1,resizingRow:1,resizedRow:1,autoSizingRow:1,autoSizedRow:1,draggingRow:1,draggedRow:1,groupCollapsedChanging:1,groupCollapsedChanged:1,sortingColumn:1,sortedColumn:1,beginningEdit:1,prepareCellForEdit:1,cellEditEnding:1,cellEditEnded:1,rowEditEnding:1,rowEditEnded:1,rowAdded:1,deletingRow:1,deletedRow:1,copying:1,copied:1,pasting:1,pasted:1,pastingCell:1,pastedCell:1,formatItem:1,updatingView:1,updatedView:1});
wijmo.grid.FlexGrid._wjClass = true;
wijmo.grid.CellRangeEventArgs = function(p, rng, data) {
/// <summary>Initializes a new instance of the @see:CellRangeEventArgs class.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">@see:GridPanel that contains the range.</param>
/// <param name="rng" type="wijmo.grid.CellRange" optional="false">Range of cells affected by the event.</param>
/// <param name="data" type="String" optional="true">Data related to the event.</param>
/// <returns type="wijmo.grid.CellRangeEventArgs"></returns>
/// <field name="panel" type="wijmo.grid.GridPanel">Gets the @see:GridPanel affected by this event.</field>
/// <field name="range" type="wijmo.grid.CellRange">Gets the @see:CellRange affected by this event.</field>
/// <field name="row" type="Number">Gets the row affected by this event.</field>
/// <field name="col" type="Number">Gets the column affected by this event.</field>
/// <field name="data" type="Object">Gets or sets the data associated with the event.</field>
this._wjClassName = 'wijmo.grid.CellRangeEventArgs';
_wjReownEvents(this);
}
wijmo.grid.CellRangeEventArgs.prototype = new wijmo.CancelEventArgs();
wijmo.grid.CellRangeEventArgs._wjDict = _wjMerge(wijmo.CancelEventArgs._wjDict, {panel:2,range:2,row:2,col:2,data:2});
wijmo.grid.CellRangeEventArgs._wjClass = true;
wijmo.grid.FormatItemEventArgs = function(p, rng, cell) {
/// <summary>Initializes a new instance of the @see:FormatItemEventArgs class.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">@see:GridPanel that contains the range.</param>
/// <param name="rng" type="wijmo.grid.CellRange" optional="false">Range of cells affected by the event.</param>
/// <param name="cell" type="HTMLElement" optional="false">Element that represents the grid cell to be formatted.</param>
/// <returns type="wijmo.grid.FormatItemEventArgs"></returns>
/// <field name="cell" type="HTMLElement">Gets a reference to the element that represents the grid cell to be formatted.</field>
this._wjClassName = 'wijmo.grid.FormatItemEventArgs';
_wjReownEvents(this);
}
wijmo.grid.FormatItemEventArgs.prototype = new wijmo.grid.CellRangeEventArgs();
wijmo.grid.FormatItemEventArgs._wjDict = _wjMerge(wijmo.grid.CellRangeEventArgs._wjDict, {cell:2});
wijmo.grid.FormatItemEventArgs._wjClass = true;
wijmo.grid.CellType = {
// Unknown or invalid cell type.
None: 0,
// Regular data cell.
Cell: 1,
// Column header cell.
ColumnHeader: 2,
// Row header cell.
RowHeader: 3,
// Top-left cell.
TopLeft: 4,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies constants that define the type of cell in a @see:GridPanel.
CellType: undefined
});

wijmo.grid.GridPanel = function(g, cellType, rows, cols, element) {
/// <summary>Initializes a new instance of the @see:GridPanel class.</summary>
/// <param name="g" type="wijmo.grid.FlexGrid" optional="false">The @see:FlexGrid object that owns the panel.</param>
/// <param name="cellType" type="wijmo.grid.CellType" optional="false">The type of cell in the panel.</param>
/// <param name="rows" type="wijmo.grid.RowCollection" optional="false">The rows displayed in the panel.</param>
/// <param name="cols" type="wijmo.grid.ColumnCollection" optional="false">The columns displayed in the panel.</param>
/// <param name="element" type="HTMLElement" optional="false">The HTMLElement that hosts the cells in the control.</param>
/// <returns type="wijmo.grid.GridPanel"></returns>
/// <field name="grid" type="wijmo.grid.FlexGrid">Gets the grid that owns the panel.</field>
/// <field name="cellType" type="wijmo.grid.CellType">Gets the type of cell contained in the panel.</field>
/// <field name="viewRange" type="wijmo.grid.CellRange">Gets a @see:CellRange that indicates the range of cells currently visible on the panel.</field>
/// <field name="width" type="Number">Gets the total width of the content in the panel.</field>
/// <field name="height" type="Number">Gets the total height of the content in this panel.</field>
/// <field name="rows" type="wijmo.grid.RowCollection">Gets the panel's row collection.</field>
/// <field name="columns" type="wijmo.grid.ColumnCollection">Gets the panel's column collection.</field>
/// <field name="hostElement" type="HTMLElement">Gets the host element for the panel.</field>
this._wjClassName = 'wijmo.grid.GridPanel';
_wjReownEvents(this);
}
wijmo.grid.GridPanel.prototype.getCellData = function(r, c, formatted) {
/// <summary>Gets the value stored in a cell in the panel.</summary>
/// <param name="r" type="Number" optional="false">The row index of the cell.</param>
/// <param name="c" type="Object" optional="false">The index, name, or binding of the column that contains the cell.</param>
/// <param name="formatted" type="Boolean" optional="false">Whether to format the value for display.</param>
/// <returns type="Object"></returns>
}
wijmo.grid.GridPanel.prototype.setCellData = function(r, c, value, coerce, invalidate) {
/// <summary>Sets the content of a cell in the panel.</summary>
/// <param name="r" type="Number" optional="false">The index of the row that contains the cell.</param>
/// <param name="c" type="Object" optional="false">The index, name, or binding of the column that contains the cell.</param>
/// <param name="value" type="Object" optional="false">The value to store in the cell.</param>
/// <param name="coerce" type="Boolean" optional="true">Whether to change the value automatically to match the column's data type.</param>
/// <param name="invalidate" type="Boolean" optional="true">Whether to invalidate the grid to show the change.</param>
/// <returns type="Boolean">Returns true if the value is stored successfully, false otherwise (failed cast).</returns>
}
wijmo.grid.GridPanel.prototype.getCellBoundingRect = function(r, c, raw) {
/// <summary>Gets a cell's bounds in viewport coordinates.
/// 
/// The returned value is a @see:Rect object which contains the position and dimensions
/// of the cell in viewport coordinates.
/// The viewport coordinates are the same as those used by the
/// <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element.getBoundingClientRect"
/// target="_blank">getBoundingClientRect</a> method.</summary>
/// <param name="r" type="Number" optional="false">The index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">The index of the column that contains the cell.</param>
/// <param name="raw" type="Boolean" optional="true">Whether to return the rectangle in raw panel coordinates as opposed to viewport coordinates.</param>
/// <returns type="wijmo.Rect"></returns>
}
wijmo.grid.GridPanel.prototype.getSelectedState = function(r, c, rng) {
/// <summary>Gets a @see:SelectedState value that indicates the selected state of a cell.</summary>
/// <param name="r" type="Number" optional="false">Row index of the cell to inspect.</param>
/// <param name="c" type="Number" optional="false">Column index of the cell to inspect.</param>
/// <param name="rng" type="wijmo.grid.CellRange" optional="false">@see:CellRange that contains the cell to inspect.</param>
/// <returns type="wijmo.grid.SelectedState"></returns>
}
wijmo.grid.GridPanel._wjDict = _wjMerge({}, {grid:2,cellType:2,viewRange:2,width:2,height:2,rows:2,columns:2,hostElement:2});
wijmo.grid.GridPanel._wjClass = true;
wijmo.grid.CellFactory = function() {
/// <summary>Creates HTML elements that represent cells within a @see:FlexGrid control.</summary>
/// <returns type="wijmo.grid.CellFactory"></returns>
this._wjClassName = 'wijmo.grid.CellFactory';
_wjReownEvents(this);
}
wijmo.grid.CellFactory.prototype.updateCell = function(p, r, c, cell, rng, updateContent) {
/// <summary>Creates or updates a cell in the grid.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">The @see:GridPanel that contains the cell.</param>
/// <param name="r" type="Number" optional="false">The index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">The index of the column that contains the cell.</param>
/// <param name="cell" type="HTMLElement" optional="false">The element that represents the cell.</param>
/// <param name="rng" type="wijmo.grid.CellRange" optional="true">The @see:CellRange object that contains the cell's
/// merged range, or null if the cell is not merged.</param>
/// <param name="updateContent" type="Boolean" optional="true">Whether to update the cell's content as
/// well as its position and style.</param>
}
wijmo.grid.CellFactory.prototype.disposeCell = function(cell) {
/// <summary>Disposes of a cell element and releases all resources associated with it.</summary>
/// <param name="cell" type="HTMLElement" optional="false">The element that represents the cell.</param>
}
wijmo.grid.CellFactory._wjDict = _wjMerge({}, {});
wijmo.grid.CellFactory._wjClass = true;
wijmo.grid.CellRange = function(r, c, r2, c2) {
/// <summary>Initializes a new instance of the @see:CellRange class.</summary>
/// <param name="r" type="Number" optional="true">The index of the first row in the range (defaults to -1).</param>
/// <param name="c" type="Number" optional="true">The index of the first column in the range (defaults to -1).</param>
/// <param name="r2" type="Number" optional="true">The index of the last row in the range (defaults to <b>r</b>).</param>
/// <param name="c2" type="Number" optional="true">The index of the last column in the range (defaults to <b>c</b>).</param>
/// <returns type="wijmo.grid.CellRange"></returns>
/// <field name="row" type="Number">Gets or sets the index of the first row in the range.</field>
/// <field name="col" type="Number">Gets or sets the index of the first column in the range.</field>
/// <field name="row2" type="Number">Gets or sets the index of the second row in the range.</field>
/// <field name="col2" type="Number">Gets or sets the index of the second column in the range.</field>
/// <field name="rowSpan" type="Number">Gets the number of rows in the range.</field>
/// <field name="columnSpan" type="Number">Gets the number of columns in the range.</field>
/// <field name="topRow" type="Number">Gets the index of the top row in the range.</field>
/// <field name="bottomRow" type="Number">Gets the index of the bottom row in the range.</field>
/// <field name="leftCol" type="Number">Gets the index of the leftmost column in the range.</field>
/// <field name="rightCol" type="Number">Gets the index of the rightmost column in the range.</field>
/// <field name="isValid" type="Boolean">Checks whether the range contains valid row and column indices
/// (row and column values are zero or greater).</field>
/// <field name="isSingleCell" type="Boolean">Checks whether this range corresponds to a single cell (beginning and ending rows have
/// the same index, and beginning and ending columns have the same index).</field>
this._wjClassName = 'wijmo.grid.CellRange';
_wjReownEvents(this);
}
wijmo.grid.CellRange.prototype.setRange = function(r, c, r2, c2) {
/// <summary>Initializes an existing @see:CellRange.</summary>
/// <param name="r" type="Number" optional="true">The index of the first row in the range (defaults to -1).</param>
/// <param name="c" type="Number" optional="true">The index of the first column in the range (defaults to -1).</param>
/// <param name="r2" type="Number" optional="true">The index of the last row in the range (defaults to <b>r</b>).</param>
/// <param name="c2" type="Number" optional="true">The index of the last column in the range (defaults to <b>c</b>).</param>
}
wijmo.grid.CellRange.prototype.clone = function() {
/// <summary>Creates a copy of the range.</summary>
/// <returns type="wijmo.grid.CellRange"></returns>
}
wijmo.grid.CellRange.prototype.contains = function(r, c) {
/// <summary>Checks whether the range contains another range or a specific cell.</summary>
/// <param name="r" type="Object" optional="false">The CellRange object or row index to find.</param>
/// <param name="c" type="Number" optional="true">The column index (required if the r parameter is not a CellRange object).</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.CellRange.prototype.containsRow = function(r) {
/// <summary>Checks whether the range contains a given row.</summary>
/// <param name="r" type="Number" optional="false">The index of the row to find.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.CellRange.prototype.containsColumn = function(c) {
/// <summary>Checks whether the range contains a given column.</summary>
/// <param name="c" type="Number" optional="false">The index of the column to find.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.CellRange.prototype.intersects = function(rng) {
/// <summary>Checks whether the range intersects another range.</summary>
/// <param name="rng" type="wijmo.grid.CellRange" optional="false">The CellRange object to check.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.CellRange.prototype.intersectsRow = function(rng) {
/// <summary>Checks whether the range intersects the rows in another range.</summary>
/// <param name="rng" type="wijmo.grid.CellRange" optional="false">The CellRange object to check.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.CellRange.prototype.intersectsColumn = function(rng) {
/// <summary>Checks whether the range intersects the columns in another range.</summary>
/// <param name="rng" type="wijmo.grid.CellRange" optional="false">The CellRange object to check.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.CellRange.prototype.getRenderSize = function(p) {
/// <summary>Gets the rendered size of this range.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">The @see:GridPanel object that contains the range.</param>
/// <returns type="wijmo.Size">A @see:Size object that represents the sum of row heights and column widths in the range.</returns>
}
wijmo.grid.CellRange.prototype.equals = function(rng) {
/// <summary>Checks whether the range equals another range.</summary>
/// <param name="rng" type="wijmo.grid.CellRange" optional="false">The CellRange object to compare to this range.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.CellRange._wjDict = _wjMerge({}, {row:2,col:2,row2:2,col2:2,rowSpan:2,columnSpan:2,topRow:2,bottomRow:2,leftCol:2,rightCol:2,isValid:2,isSingleCell:2});
wijmo.grid.CellRange._wjClass = true;
wijmo.grid.RowColFlags = {
// The row or column is visible.
Visible: 1,
// The row or column can be resized.
AllowResizing: 2,
// The row or column can be dragged to a new position with the mouse.
AllowDragging: 4,
// The row or column can contain merged cells.
AllowMerging: 8,
// The column can be sorted by clicking its header with the mouse.
AllowSorting: 16,
// The column was generated automatically.
AutoGenerated: 32,
// The group row is collapsed.
Collapsed: 64,
// The row has a parent group that is collapsed.
ParentCollapsed: 128,
// The row or column is selected.
Selected: 256,
// The row or column is read-only (cannot be edited).
ReadOnly: 512,
// Cells in this row or column contain HTML text.
HtmlContent: 1024,
// Cells in this row or column may contain wrapped text.
WordWrap: 2048,
// Default settings for new rows.
RowDefault: Visible | AllowResizing,
// Default settings for new columns.
ColumnDefault: Visible | AllowDragging | AllowResizing | AllowSorting,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies flags that represent the state of a grid row or column.
RowColFlags: undefined
});

wijmo.grid.RowCol = function() {
/// <summary>An abstract class that serves as a base for the @see:Row and @see:Column classes.</summary>
/// <returns type="wijmo.grid.RowCol"></returns>
/// <field name="visible" type="Boolean">Gets or sets a value that indicates whether the row or column is visible.</field>
/// <field name="isVisible" type="Boolean">Gets a value that indicates whether the row or column is visible and not collapsed.
/// 
/// This property is read-only. To change the visibility of a
/// row or column, use the @see:visible property instead.</field>
/// <field name="pos" type="Number">Gets the position of the row or column.</field>
/// <field name="index" type="Number">Gets the index of the row or column in the parent collection.</field>
/// <field name="size" type="Number">Gets or sets the size of the row or column.
/// Setting this property to null or negative values causes the element to use the
/// parent collection's default size.</field>
/// <field name="renderSize" type="Number">Gets the render size of the row or column.
/// This property accounts for visibility, default size, and min and max sizes.</field>
/// <field name="allowResizing" type="Boolean">Gets or sets a value that indicates whether the user can resize the row or column with the mouse.</field>
/// <field name="allowDragging" type="Boolean">Gets or sets a value that indicates whether the user can move the row or column to a new position with the mouse.</field>
/// <field name="allowMerging" type="Boolean">Gets or sets a value that indicates whether cells in the row or column can be merged.</field>
/// <field name="isSelected" type="Boolean">Gets or sets a value that indicates whether the row or column is selected.</field>
/// <field name="isReadOnly" type="Boolean">Gets or sets a value that indicates whether cells in the row or column can be edited.</field>
/// <field name="isContentHtml" type="Boolean">Gets or sets a value that indicates whether cells in this row or column
/// contain HTML content rather than plain text.</field>
/// <field name="wordWrap" type="Boolean">Gets or sets a value that indicates whether cells in the row or column wrap their content.</field>
/// <field name="cssClass" type="String">Gets or sets a CSS class name to use when rendering
/// non-header cells in the row or column.</field>
/// <field name="grid" type="wijmo.grid.FlexGrid">Gets the @see:FlexGrid that owns the row or column.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView bound to this row or column.</field>
this._wjClassName = 'wijmo.grid.RowCol';
_wjReownEvents(this);
}
wijmo.grid.RowCol.prototype.onPropertyChanged = function() {
/// <summary>Marks the owner list as dirty and refreshes the owner grid.</summary>
}
wijmo.grid.RowCol._wjDict = _wjMerge({}, {visible:2,isVisible:2,pos:2,index:2,size:2,renderSize:2,allowResizing:2,allowDragging:2,allowMerging:2,isSelected:2,isReadOnly:2,isContentHtml:2,wordWrap:2,cssClass:2,grid:2,collectionView:2});
wijmo.grid.RowCol._wjClass = true;
wijmo.grid.Column = function(options) {
/// <summary>Initializes a new instance of the @see:Column class.</summary>
/// <param name="options" type="Object" optional="true">Initialization options for the column.</param>
/// <returns type="wijmo.grid.Column"></returns>
/// <field name="name" type="String">Gets or sets the name of the column.
/// 
/// The column name can be used to retrieve the column using the
/// @see:FlexGrid.getColumn method.</field>
/// <field name="dataType" type="wijmo.DataType">Gets or sets the type of value stored in the column.
/// 
/// Values are coerced into the proper type when editing the grid.</field>
/// <field name="isRequired" type="Boolean">Gets or sets a value that determines whether values in the column
/// are required.
/// 
/// By default, this property is set to null, which means values
/// are required, but string columns may contain empty strings.
/// 
/// When set to true, values are required and empty strings are
/// not allowed.
/// 
/// When set to false, null values and empty strings are allowed.</field>
/// <field name="showDropDown" type="Boolean">Gets or sets a value that indicates whether the grid adds drop-down buttons to the
/// cells in this column.
/// 
/// The drop-down buttons are shown only if the column has a @see:dataMap
/// set and is editable. Clicking on the drop-down buttons causes the grid
/// to show a list where users can select the value for the cell.
/// 
/// Cell drop-downs require the wijmo.input module to be loaded.</field>
/// <field name="dropDownCssClass" type="String">Gets or sets a CSS class name to add to drop-downs in this column.
/// 
/// The drop-down buttons are shown only if the column has a @see:dataMap
/// set and is editable. Clicking on the drop-down buttons causes the grid
/// to show a list where users can select the value for the cell.
/// 
/// Cell drop-downs require the wijmo.input module to be loaded.</field>
/// <field name="inputType" type="String">Gets or sets the "type" attribute of the HTML input element used to edit values
/// in this column.
/// 
/// By default, this property is set to "tel" for numeric columns, and to "text" for
/// all other non-boolean column types. The "tel" input type causes mobile devices
/// to show a numeric keyboard that includes a negative sign and a decimal separator.
/// 
/// Use this property to change the default setting if the default does not work well
/// for the current culture, device, or application. In these cases, try setting the
/// property to "number" or simply "text."</field>
/// <field name="mask" type="String">Gets or sets a mask to use while editing values in this column.
/// 
/// The mask format is the same used by the @see:wijmo.input.InputMask
/// control.
/// 
/// If specified, the mask must be compatible with the value of
/// the @see:format property. For example, the mask '99/99/9999' can
/// be used for entering dates formatted as 'MM/dd/yyyy'.</field>
/// <field name="binding" type="String">Gets or sets the name of the property the column is bound to.</field>
/// <field name="sortMemberPath" type="String">Gets or sets the name of the property to use when sorting this column.
/// 
/// Use this property in cases where you want the sorting to be performed
/// based on values other than the ones specified by the @see:binding property.
/// 
/// Setting this property is null causes the grid to use the value of the
/// @see:binding property to sort the column.</field>
/// <field name="width" type="Object">Gets or sets the width of the column.
/// 
/// Column widths may be positive numbers (sets the column width in pixels),
/// null or negative numbers (uses the collection's default column width), or
/// strings in the format '{number}*' (star sizing).
/// 
/// The star-sizing option performs a XAML-style dynamic sizing where column
/// widths are proportional to the number before the star. For example, if
/// a grid has three columns with widths "100", "*", and "3*", the first column
/// will be 100 pixels wide, the second will take up 1/4th of the remaining
/// space, and the last will take up the remaining 3/4ths of the remaining space.
/// 
/// Star-sizing allows you to define columns that automatically stretch to fill
/// the width available. For example, set the width of the last column to "*"
/// and it will automatically extend to fill the entire grid width so there's
/// no empty space. You may also want to set the column's @see:minWidth property
/// to prevent the column from getting too narrow.</field>
/// <field name="minWidth" type="Number">Gets or sets the minimum width of the column.</field>
/// <field name="maxWidth" type="Number">Gets or sets the maximum width of the column.</field>
/// <field name="renderWidth" type="Number">Gets the render width of the column.
/// 
/// The value returned takes into account the column's visibility, default size, and min and max sizes.</field>
/// <field name="align" type="String">Gets or sets the horizontal alignment of items in the column.
/// 
/// The default value for this property is null, which causes the grid to select
/// the alignment automatically based on the column's @see:dataType (numbers are
/// right-aligned, Boolean values are centered, and other types are left-aligned).
/// 
/// If you want to override the default alignment, set this property
/// to 'left,' 'right,' or 'center,'</field>
/// <field name="header" type="String">Gets or sets the text displayed in the column header.</field>
/// <field name="dataMap" type="wijmo.grid.DataMap">Gets or sets the @see:DataMap used to convert raw values into display
/// values for the column.
/// 
/// Columns with an associated @see:dataMap show drop-down buttons that
/// can be used for quick editing. If you do not want to show the drop-down
/// buttons, set the column's @see:showDropDown property to false.
/// 
/// Cell drop-downs require the wijmo.input module to be loaded.</field>
/// <field name="format" type="String">Gets or sets the format string used to convert raw values into display
/// values for the column (see @see:Globalize).</field>
/// <field name="allowSorting" type="Boolean">Gets or sets a value that indicates whether the user can sort the column by clicking its header.</field>
/// <field name="currentSort" type="String">Gets a string that describes the current sorting applied to the column.
/// Possible values are '+' for ascending order, '-' for descending order, or
/// null for unsorted columns.</field>
/// <field name="aggregate" type="wijmo.Aggregate">Gets or sets the @see:Aggregate to display in the group header rows
/// for the column.</field>
this._wjClassName = 'wijmo.grid.Column';
_wjReownEvents(this);
}
wijmo.grid.Column.prototype = new wijmo.grid.RowCol();
wijmo.grid.Column.prototype.getAlignment = function() {
/// <summary>Gets the actual column alignment.
/// 
/// Returns the value of the @see:align property if it is not null, or
/// selects the alignment based on the column's @see:dataType.</summary>
/// <returns type="String"></returns>
}
wijmo.grid.Column._wjDict = _wjMerge(wijmo.grid.RowCol._wjDict, {name:2,dataType:2,isRequired:2,showDropDown:2,dropDownCssClass:2,inputType:2,mask:2,binding:2,sortMemberPath:2,width:2,minWidth:2,maxWidth:2,renderWidth:2,align:2,header:2,dataMap:2,format:2,allowSorting:2,currentSort:2,aggregate:2});
wijmo.grid.Column._wjClass = true;
wijmo.grid.Row = function(dataItem) {
/// <summary>Initializes a new instance of the @see:Row class.</summary>
/// <param name="dataItem" type="Object" optional="true">The data item that this row is bound to.</param>
/// <returns type="wijmo.grid.Row"></returns>
/// <field name="dataItem" type="Object">Gets or sets the item in the data collection that the item is bound to.</field>
/// <field name="height" type="Number">Gets or sets the height of the row.
/// Setting this property to null or negative values causes the element to use the
/// parent collection's default size.</field>
/// <field name="renderHeight" type="Number">Gets the render height of the row.
/// 
/// The value returned takes into account the row's visibility, default size, and min and max sizes.</field>
this._wjClassName = 'wijmo.grid.Row';
_wjReownEvents(this);
}
wijmo.grid.Row.prototype = new wijmo.grid.RowCol();
wijmo.grid.Row._wjDict = _wjMerge(wijmo.grid.RowCol._wjDict, {dataItem:2,height:2,renderHeight:2});
wijmo.grid.Row._wjClass = true;
wijmo.grid.GroupRow = function() {
/// <summary>Initializes a new instance of the @see:GroupRow class.</summary>
/// <returns type="wijmo.grid.GroupRow"></returns>
/// <field name="level" type="Number">Gets or sets the hierarchical level of the group associated with the GroupRow.</field>
/// <field name="hasChildren" type="Boolean">Gets a value that indicates whether the group row has child rows.</field>
/// <field name="isCollapsed" type="Boolean">Gets or sets a value that indicates whether the GroupRow is collapsed
/// (child rows are hidden) or expanded (child rows are visible).</field>
this._wjClassName = 'wijmo.grid.GroupRow';
_wjReownEvents(this);
}
wijmo.grid.GroupRow.prototype = new wijmo.grid.Row();
wijmo.grid.GroupRow.prototype.getGroupHeader = function() {
/// <summary>Gets the header text for this @see:GroupRow.</summary>
/// <returns type="String"></returns>
}
wijmo.grid.GroupRow.prototype.getCellRange = function() {
/// <summary>Gets a CellRange object that contains all of the rows in the group represented
/// by the GroupRow and all of the columns in the grid.</summary>
/// <returns type="wijmo.grid.CellRange"></returns>
}
wijmo.grid.GroupRow._wjDict = _wjMerge(wijmo.grid.Row._wjDict, {level:2,hasChildren:2,isCollapsed:2});
wijmo.grid.GroupRow._wjClass = true;
wijmo.grid.RowColCollection = function(g, defaultSize) {
/// <summary>Initializes a new instance of the @see:RowColCollection class.</summary>
/// <param name="g" type="wijmo.grid.FlexGrid" optional="false">The @see:FlexGrid that owns the collection.</param>
/// <param name="defaultSize" type="Number" optional="false">The default size of the elements in the collection.</param>
/// <returns type="wijmo.grid.RowColCollection"></returns>
/// <field name="defaultSize" type="Number">Gets or sets the default size of elements in the collection.</field>
/// <field name="frozen" type="Number">Gets or sets the number of frozen rows or columns in the collection.
/// 
/// Frozen rows and columns do not scroll, and instead remain at the top or left of
/// the grid, next to the fixed cells. Unlike fixed cells, however, frozen
/// cells may be selected and edited like regular cells.</field>
/// <field name="minSize" type="Number">Gets or sets the minimum size of elements in the collection.</field>
/// <field name="maxSize" type="Number">Gets or sets the maximum size of elements in the collection.</field>
this._wjClassName = 'wijmo.grid.RowColCollection';
_wjReownEvents(this);
}
wijmo.grid.RowColCollection.prototype = new wijmo.collections.ObservableArray();
wijmo.grid.RowColCollection.prototype.isFrozen = function(index) {
/// <summary>Checks whether a row or column is frozen.</summary>
/// <param name="index" type="Number" optional="false">The index of the row or column to check.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.RowColCollection.prototype.getTotalSize = function() {
/// <summary>Gets the total size of the elements in the collection.</summary>
/// <returns type="Number"></returns>
}
wijmo.grid.RowColCollection.prototype.getItemAt = function(position) {
/// <summary>Gets the index of the element at a given physical position.</summary>
/// <param name="position" type="Number" optional="false">Position of the item in the collection, in pixels.</param>
/// <returns type="Number"></returns>
}
wijmo.grid.RowColCollection.prototype.getNextCell = function(index, move, pageSize) {
/// <summary>Finds the next visible cell for a selection change.</summary>
/// <param name="index" type="Number" optional="false">Starting index for the search.</param>
/// <param name="move" type="wijmo.grid.SelMove" optional="false">Type of move (size and direction).</param>
/// <param name="pageSize" type="Number" optional="false">Size of a page (in case the move is a page up/down).</param>
}
wijmo.grid.RowColCollection.prototype.canMoveElement = function(src, dst) {
/// <summary>Checks whether an element can be moved from one position to another.</summary>
/// <param name="src" type="Number" optional="false">The index of the element to move.</param>
/// <param name="dst" type="Number" optional="false">The position to which to move the element, or specify -1 to append the element.</param>
/// <returns type="Boolean">Returns true if the move is valid, false otherwise.</returns>
}
wijmo.grid.RowColCollection.prototype.moveElement = function(src, dst) {
/// <summary>Moves an element from one position to another.</summary>
/// <param name="src" type="Number" optional="false">Index of the element to move.</param>
/// <param name="dst" type="Number" optional="false">Position where the element should be moved to (-1 to append).</param>
}
wijmo.grid.RowColCollection.prototype.onCollectionChanged = function(e) {
/// <summary>Keeps track of dirty state and invalidate grid on changes.</summary>
/// <param name="e" type="Object" optional="true"></param>
}
wijmo.grid.RowColCollection.prototype.push = function(item) {
/// <summary>Appends an item to the array.</summary>
/// <param name="item" type="Object" optional="false">Item to add to the array.</param>
/// <returns type="Number">The new length of the array.</returns>
}
wijmo.grid.RowColCollection.prototype.splice = function(index, count, item) {
/// <summary>Removes or adds items to the array.</summary>
/// <param name="index" type="Number" optional="false">Position where items are added or removed.</param>
/// <param name="count" type="Number" optional="false">Number of items to remove from the array.</param>
/// <param name="item" type="Object" optional="true">Item to add to the array.</param>
/// <returns type="Object[]">An array containing the removed elements.</returns>
}
wijmo.grid.RowColCollection.prototype.beginUpdate = function() {
/// <summary>Suspends notifications until the next call to @see:endUpdate.</summary>
}
wijmo.grid.RowColCollection._wjDict = _wjMerge(wijmo.collections.ObservableArray._wjDict, {defaultSize:2,frozen:2,minSize:2,maxSize:2});
wijmo.grid.RowColCollection._wjClass = true;
wijmo.grid.ColumnCollection = function() {
/// <summary>Represents a collection of @see:Column objects in a @see:FlexGrid control.</summary>
/// <returns type="wijmo.grid.ColumnCollection"></returns>
/// <field name="firstVisibleIndex" type="Object">Gets the index of the first visible column (where the outline tree is displayed).</field>
this._wjClassName = 'wijmo.grid.ColumnCollection';
_wjReownEvents(this);
}
wijmo.grid.ColumnCollection.prototype = new wijmo.grid.RowColCollection();
wijmo.grid.ColumnCollection.prototype.getColumn = function(name) {
/// <summary>Gets a column by name or by binding.
/// 
/// The method searches the column by name. If a column with the given name
/// is not found, it searches by binding. The searches are case-sensitive.</summary>
/// <param name="name" type="String" optional="false">The name or binding to find.</param>
/// <returns type="wijmo.grid.Column">The column with the specified name or binding, or null if not found.</returns>
}
wijmo.grid.ColumnCollection.prototype.indexOf = function(name) {
/// <summary>Gets the index of a column by name or binding.
/// 
/// The method searches the column by name. If a column with the given name
/// is not found, it searches by binding. The searches are case-sensitive.</summary>
/// <param name="name" type="Object" optional="false">The name or binding to find.</param>
/// <returns type="Number">The index of column with the specified name or binding, or -1 if not found.</returns>
}
wijmo.grid.ColumnCollection._wjDict = _wjMerge(wijmo.grid.RowColCollection._wjDict, {firstVisibleIndex:2});
wijmo.grid.ColumnCollection._wjClass = true;
wijmo.grid.RowCollection = function() {
/// <summary>Represents a collection of @see:Row objects in a @see:FlexGrid control.</summary>
/// <returns type="wijmo.grid.RowCollection"></returns>
/// <field name="maxGroupLevel" type="Number">Gets the maximum group level in the grid.</field>
this._wjClassName = 'wijmo.grid.RowCollection';
_wjReownEvents(this);
}
wijmo.grid.RowCollection.prototype = new wijmo.grid.RowColCollection();
wijmo.grid.RowCollection._wjDict = _wjMerge(wijmo.grid.RowColCollection._wjDict, {maxGroupLevel:2});
wijmo.grid.RowCollection._wjClass = true;
wijmo.grid.HitTestInfo = function(g, pt) {
/// <summary>Initializes a new instance of the @see:HitTestInfo class.</summary>
/// <param name="g" type="Object" optional="false">The @see:FlexGrid control or @see:GridPanel to investigate.</param>
/// <param name="pt" type="Object" optional="false">The @see:Point object in page coordinates to investigate.</param>
/// <returns type="wijmo.grid.HitTestInfo"></returns>
/// <field name="point" type="wijmo.Point">Gets the point in control coordinates that the HitTestInfo refers to.</field>
/// <field name="cellType" type="wijmo.grid.CellType">Gets the cell type at the specified position.</field>
/// <field name="panel" type="wijmo.grid.GridPanel">Gets the grid panel at the specified position.</field>
/// <field name="row" type="Number">Gets the row index of the cell at the specified position.</field>
/// <field name="col" type="Number">Gets the column index of the cell at the specified position.</field>
/// <field name="range" type="wijmo.grid.CellRange">Gets the cell range at the specified position.</field>
/// <field name="edgeLeft" type="Boolean">Gets a value that indicates whether the mouse is near the left edge of the cell.</field>
/// <field name="edgeTop" type="Boolean">Gets a value that indicates whether the mouse is near the top edge of the cell.</field>
/// <field name="edgeRight" type="Boolean">Gets a value that indicates whether the mouse is near the right edge of the cell.</field>
/// <field name="edgeBottom" type="Boolean">Gets a value that indicates whether the mouse is near the bottom edge of the cell.</field>
this._wjClassName = 'wijmo.grid.HitTestInfo';
_wjReownEvents(this);
}
wijmo.grid.HitTestInfo._wjDict = _wjMerge({}, {point:2,cellType:2,panel:2,row:2,col:2,range:2,edgeLeft:2,edgeTop:2,edgeRight:2,edgeBottom:2});
wijmo.grid.HitTestInfo._wjClass = true;
wijmo.grid.AllowMerging = {
// No merging.
None: 0,
// Merge scrollable cells.
Cells: 1,
// Merge column headers.
ColumnHeaders: 2,
// Merge row headers.
RowHeaders: 4,
// Merge column and row headers.
AllHeaders: ColumnHeaders | RowHeaders,
// Merge all areas.
All: Cells | AllHeaders,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies constants that define which areas of the grid support cell merging.
AllowMerging: undefined
});

wijmo.grid.MergeManager = function(g) {
/// <summary>Initializes a new instance of the @see:MergeManager class.</summary>
/// <param name="g" type="wijmo.grid.FlexGrid" optional="false">The @see:FlexGrid object that owns this @see:MergeManager.</param>
/// <returns type="wijmo.grid.MergeManager"></returns>
this._wjClassName = 'wijmo.grid.MergeManager';
_wjReownEvents(this);
}
wijmo.grid.MergeManager.prototype.getMergedRange = function(p, r, c, clip) {
/// <summary>Gets a @see:CellRange that specifies the merged extent of a cell
/// in a @see:GridPanel.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">The @see:GridPanel that contains the range.</param>
/// <param name="r" type="Number" optional="false">The index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">The index of the column that contains the cell.</param>
/// <param name="clip" type="Boolean" optional="true">Whether to clip the merged range to the grid's current view range.</param>
/// <returns type="wijmo.grid.CellRange">A @see:CellRange that specifies the merged range, or null if the cell is not merged.</returns>
}
wijmo.grid.MergeManager._wjDict = _wjMerge({}, {});
wijmo.grid.MergeManager._wjClass = true;
wijmo.grid.DataMap = function(itemsSource, selectedValuePath, displayMemberPath) {
/// <summary>Initializes a new instance of the @see:DataMap class.</summary>
/// <param name="itemsSource" type="Object" optional="false">An array or @see:ICollectionView that contains the items to map.</param>
/// <param name="selectedValuePath" type="String" optional="true">The name of the property that contains the keys (data values).</param>
/// <param name="displayMemberPath" type="String" optional="true">The name of the property to use as the visual representation of the items.</param>
/// <returns type="wijmo.grid.DataMap"></returns>
/// <field name="sortByDisplayValues" type="Boolean">Gets or sets a value that determines whether to use mapped (display)
/// or raw values when sorting the data.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView object that contains the map data.</field>
/// <field name="selectedValuePath" type="String">Gets the name of the property to use as a key for the item (data value).</field>
/// <field name="displayMemberPath" type="String">Gets the name of the property to use as the visual representation of the item.</field>
/// <field name="isEditable" type="Boolean">Gets or sets a value that indicates whether users should be allowed to enter
/// values that are not present on the @see:DataMap.
/// 
/// In order for a @see:DataMap to be editable, the @see:selectedValuePath and
/// @see:displayMemberPath must be set to the same value.</field>
/// <field name="mapChanged" type="wijmo.Event">Occurs when the map data changes.</field>
this._wjClassName = 'wijmo.grid.DataMap';
this.mapChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.grid.DataMap.prototype.getKeyValue = function(displayValue) {
/// <summary>Gets the key that corresponds to a given display value.</summary>
/// <param name="displayValue" type="String" optional="false">The display value of the item to retrieve.</param>
/// <returns type="Object"></returns>
}
wijmo.grid.DataMap.prototype.getDisplayValue = function(key) {
/// <summary>Gets the display value that corresponds to a given key.</summary>
/// <param name="key" type="Object" optional="false">The key of the item to retrieve.</param>
/// <returns type="Object"></returns>
}
wijmo.grid.DataMap.prototype.getDisplayValues = function() {
/// <summary>Gets an array with all of the display values on the map.</summary>
/// <returns type="String[]"></returns>
}
wijmo.grid.DataMap.prototype.getKeyValues = function() {
/// <summary>Gets an array with all of the keys on the map.</summary>
/// <returns type="String[]"></returns>
}
wijmo.grid.DataMap.prototype.onMapChanged = function(e) {
/// <summary>Raises the @see:mapChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.grid.DataMap._wjDict = _wjMerge({}, {sortByDisplayValues:2,collectionView:2,selectedValuePath:2,displayMemberPath:2,isEditable:2,mapChanged:1});
wijmo.grid.DataMap._wjClass = true;
wijmo.grid.SelectionMode = {
// The user cannot select cells using the mouse or keyboard.
None: 0,
// The user can select only a single cell at a time.
Cell: 1,
// The user can select contiguous blocks of cells.
CellRange: 2,
// The user can select a single row at a time.
Row: 3,
// The user can select contiguous rows.
RowRange: 4,
// The user can select non-contiguous rows.
ListBox: 5,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies constants that define the selection behavior.
SelectionMode: undefined
});

wijmo.grid.SelectedState = {
// The cell is not selected.
None: 0,
// The cell is selected but is not the active cell.
Selected: 1,
// The cell is selected and is the active cell.
Cursor: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies constants that represent the selected state of a cell.
SelectedState: undefined
});

wijmo.grid.SelMove = {
// Do not change the selection.
None: 0,
// Select the next visible cell.
Next: 1,
// Select the previous visible cell.
Prev: 2,
// Select the first visible cell in the next page.
NextPage: 3,
// Select the first visible cell in the previous page.
PrevPage: 4,
// Select the first visible cell.
Home: 5,
// Select the last visible cell.
End: 6,
// Select the next visible cell skipping rows if necessary.
NextCell: 7,
// Select the previous visible cell skipping rows if necessary.
PrevCell: 8,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies constants that represent a type of movement for the selection.
SelMove: undefined
});

wijmo.grid._SelectionHandler = function(g) {
/// <summary>Initializes a new instance of the @see:_SelectionHandler class.</summary>
/// <param name="g" type="wijmo.grid.FlexGrid" optional="false">@see:FlexGrid that owns this @see:_SelectionHandler.</param>
/// <returns type="wijmo.grid._SelectionHandler"></returns>
/// <field name="selectionMode" type="wijmo.grid.SelectionMode">Gets or sets the current selection mode.</field>
/// <field name="selection" type="wijmo.grid.CellRange">Gets or sets the current selection.</field>
this._wjClassName = 'wijmo.grid._SelectionHandler';
_wjReownEvents(this);
}
wijmo.grid._SelectionHandler.prototype.select = function(rng, show) {
/// <summary>Selects a cell range and optionally scrolls it into view.</summary>
/// <param name="rng" type="Object" optional="false">Range to select.</param>
/// <param name="show" type="Object" optional="true">Whether to scroll the new selection into view.</param>
}
wijmo.grid._SelectionHandler.prototype.moveSelection = function(rowMove, colMove, extend) {
/// <summary>Moves the selection by a specified amount in the vertical and horizontal directions.</summary>
/// <param name="rowMove" type="wijmo.grid.SelMove" optional="false">How to move the row selection.</param>
/// <param name="colMove" type="wijmo.grid.SelMove" optional="false">How to move the column selection.</param>
/// <param name="extend" type="Boolean" optional="false">Whether to extend the current selection or start a new one.</param>
}
wijmo.grid._SelectionHandler._wjDict = _wjMerge({}, {selectionMode:2,selection:2});
wijmo.grid._SelectionHandler._wjClass = true;
wijmo.grid._KeyboardHandler = function(g) {
/// <summary>Initializes a new instance of the @see:_KeyboardHandler class.</summary>
/// <param name="g" type="wijmo.grid.FlexGrid" optional="false">@see:FlexGrid that owns this @see:_KeyboardHandler.</param>
/// <returns type="wijmo.grid._KeyboardHandler"></returns>
this._wjClassName = 'wijmo.grid._KeyboardHandler';
_wjReownEvents(this);
}
wijmo.grid._KeyboardHandler._wjDict = _wjMerge({}, {});
wijmo.grid._KeyboardHandler._wjClass = true;
wijmo.grid.AllowResizing = {
// The user may not resize rows or columns.
None: 0,
// The user may resize columns by dragging the edge of the column headers.
Columns: 1,
// The user may resize rows by dragging the edge of the row headers.
Rows: 2,
// The user may resize rows and columns by dragging the edge of the headers.
Both: Rows | Columns,
// The user may resize columns by dragging the edge of any cell.
ColumnsAllCells: Columns | _AR_ALLCELLS,
// The user may resize rows by dragging the edge of any cell.
RowsAllCells: Rows | _AR_ALLCELLS,
// The user may resize rows and columns by dragging the edge of any cell.
BothAllCells: Both | _AR_ALLCELLS ,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies constants that define the row/column sizing behavior.
AllowResizing: undefined
});

wijmo.grid.AutoSizeMode = {
// Autosizing is disabled.
None: 0,
// Autosizing accounts for header cells.
Headers: 1,
// Autosizing accounts for data cells.
Cells: 2,
// Autosizing accounts for header and data cells.
Both: Headers | Cells,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies constants that define the row/column auto-sizing behavior.
AutoSizeMode: undefined
});

wijmo.grid.AllowDragging = {
// The user may not drag rows or columns.
None: 0,
// The user may drag columns.
Columns: 1,
// The user may drag rows.
Rows: 2,
// The user may drag rows and columns.
Both: Rows | Columns,
_wjEnum: true
};

intellisense.annotate(wijmo.grid, {
// Specifies constants that define the row/column dragging behavior.
AllowDragging: undefined
});

wijmo.grid._MouseHandler = function(g) {
/// <summary>Initializes a new instance of the @see:_MouseHandler class.</summary>
/// <param name="g" type="wijmo.grid.FlexGrid" optional="false">@see:FlexGrid that owns this @see:_MouseHandler.</param>
/// <returns type="wijmo.grid._MouseHandler"></returns>
this._wjClassName = 'wijmo.grid._MouseHandler';
_wjReownEvents(this);
}
wijmo.grid._MouseHandler.prototype.resetMouseState = function() {
/// <summary>Resets the mouse state.</summary>
}
wijmo.grid._MouseHandler._wjDict = _wjMerge({}, {});
wijmo.grid._MouseHandler._wjClass = true;
wijmo.grid._EditHandler = function(g) {
/// <summary>Initializes a new instance of the @see:_EditHandler class.</summary>
/// <param name="g" type="wijmo.grid.FlexGrid" optional="false">@see:FlexGrid that owns this @see:_EditHandler.</param>
/// <returns type="wijmo.grid._EditHandler"></returns>
/// <field name="activeEditor" type="HTMLInputElement">Gets the <b>HTMLInputElement</b> that represents the cell editor currently active.</field>
/// <field name="editRange" type="wijmo.grid.CellRange">Gets a @see:CellRange that identifies the cell currently being edited.</field>
this._wjClassName = 'wijmo.grid._EditHandler';
_wjReownEvents(this);
}
wijmo.grid._EditHandler.prototype.startEditing = function(fullEdit, r, c, focus) {
/// <summary>Starts editing a given cell.</summary>
/// <param name="fullEdit" type="Boolean" optional="true">Whether to stay in edit mode when the user presses the cursor keys. Defaults to false.</param>
/// <param name="r" type="Number" optional="true">Index of the row to be edited. Defaults to the currently selected row.</param>
/// <param name="c" type="Number" optional="true">Index of the column to be edited. Defaults to the currently selected column.</param>
/// <param name="focus" type="Boolean" optional="true">Whether to give the editor the focus. Defaults to true.</param>
/// <returns type="Boolean">True if the edit operation started successfully.</returns>
}
wijmo.grid._EditHandler.prototype.finishEditing = function(cancel) {
/// <summary>Commits any pending edits and exits edit mode.</summary>
/// <param name="cancel" type="Boolean" optional="true">Whether pending edits should be canceled or committed.</param>
/// <returns type="Boolean">True if the edit operation finished successfully.</returns>
}
wijmo.grid._EditHandler._wjDict = _wjMerge({}, {activeEditor:2,editRange:2});
wijmo.grid._EditHandler._wjClass = true;
wijmo.grid._AddNewHandler = function(g) {
/// <summary>Initializes a new instance of the @see:_AddNewHandler class.</summary>
/// <param name="g" type="wijmo.grid.FlexGrid" optional="false">@see:FlexGrid that owns this @see:_AddNewHandler.</param>
/// <returns type="wijmo.grid._AddNewHandler"></returns>
this._wjClassName = 'wijmo.grid._AddNewHandler';
_wjReownEvents(this);
}
wijmo.grid._AddNewHandler.prototype.updateNewRowTemplate = function() {
/// <summary>Updates the new row template to ensure it's visible only if the grid is
/// bound to a data source that supports adding new items, and that it is
/// in the right position.</summary>
}
wijmo.grid._AddNewHandler._wjDict = _wjMerge({}, {});
wijmo.grid._AddNewHandler._wjClass = true;
wijmo.grid._NewRowTemplate = function() {
/// <summary>Represents a row template used to add items to the source collection.</summary>
/// <returns type="wijmo.grid._NewRowTemplate"></returns>
this._wjClassName = 'wijmo.grid._NewRowTemplate';
_wjReownEvents(this);
}
wijmo.grid._NewRowTemplate.prototype = new wijmo.grid.Row();
wijmo.grid._NewRowTemplate._wjDict = _wjMerge(wijmo.grid.Row._wjDict, {});
wijmo.grid._NewRowTemplate._wjClass = true;
wijmo.grid._ImeHandler = function(g) {
/// <summary>Initializes a new instance of the @see:_ImeHandler class and attaches it to a @see:FlexGrid.</summary>
/// <param name="g" type="wijmo.grid.FlexGrid" optional="false">@see:FlexGrid that this @see:_ImeHandler will be attached to.</param>
/// <returns type="wijmo.grid._ImeHandler"></returns>
this._wjClassName = 'wijmo.grid._ImeHandler';
_wjReownEvents(this);
}
wijmo.grid._ImeHandler.prototype.dispose = function() {
/// <summary>Disposes of this @see:_ImeHandler.</summary>
}
wijmo.grid._ImeHandler._wjDict = _wjMerge({}, {});
wijmo.grid._ImeHandler._wjClass = true;
wijmo.grid.filter = wijmo.grid.filter || { _wjModule: true };
wijmo.grid.filter.ValueFilter = function(column) {
/// <summary>Initializes a new instance of the @see:ValueFilter class.</summary>
/// <param name="column" type="wijmo.grid.Column" optional="false">The column to filter.</param>
/// <returns type="wijmo.grid.filter.ValueFilter"></returns>
/// <field name="showValues" type="Object">Gets or sets an object with all the formatted values that should be shown on the value list.</field>
/// <field name="filterText" type="String">Gets or sets a string used to filter the list of display values.</field>
/// <field name="maxValues" type="Number">Gets or sets the maximum number of elements on the list of display values.
/// 
/// Adding too many items to the list makes searching difficult and hurts
/// performance. This property limits the number of items displayed at any time,
/// but users can still use the search box to filter the items they are
/// interested in.
/// 
/// This property is set to 250 by default.
/// 
/// This code changes the value to 1,000,000, effectively listing all unique
/// values for the field:
/// 
/// <pre>// change the maxItems property for the 'id' column:
/// var f = new wijmo.grid.filter.FlexGridFilter(s);
/// f.getColumnFilter('id').valueFilter.maxValues = 1000000;</pre></field>
/// <field name="uniqueValues" type="Object[]">Gets or sets an array containing the unique values to be displayed on the list.
/// 
/// If this property is set to null, the list will be filled based on the grid data.
/// 
/// Explicitly assigning the list of unique values is more efficient than building
/// the list from the data, and is required for value filters to work properly when
/// the data is filtered on the server (because in this case some values might not
/// be present on the client so the list will be incomplete).
/// 
/// By default, the filter editor will sort the unique values when displaying them
/// to the user. If you want to prevent that and show the values in the order you
/// provided, set the @see:sortValues property to false.
/// 
/// For example, the code below provides a list of countries to be used in the
/// @see:ValueFilter for the column bound to the 'country' field:
/// 
/// <pre>// create filter for a FlexGrid
/// var filter = new wijmo.grid.filter.FlexGridFilter(grid);
/// // assign list of unique values to country filter
/// var cf = filter.getColumnFilter('country');
/// cf.valueFilter.uniqueValues = countries;</pre></field>
/// <field name="sortValues" type="Boolean">Gets or sets a value that determines whether the values should be sorted
/// when displayed in the editor.
/// 
/// This property is especially useful when you are using the @see:uniqueValues
/// to provide a custom list of values property and you would like to preserve
/// the order of the values.</field>
/// <field name="column" type="wijmo.grid.Column">Gets the @see:Column to filter.</field>
/// <field name="isActive" type="Boolean">Gets a value that indicates whether the filter is active.
/// 
/// The filter is active if there is at least one value is selected.</field>
this._wjClassName = 'wijmo.grid.filter.ValueFilter';
_wjReownEvents(this);
}
wijmo.grid.filter.ValueFilter.prototype.apply = function(value) {
/// <summary>Gets a value that indicates whether a value passes the filter.</summary>
/// <param name="value" type="Object" optional="false">The value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.filter.ValueFilter.prototype.clear = function() {
/// <summary>Clears the filter.</summary>
}
wijmo.grid.filter.ValueFilter.prototype.implementsInterface = function(interfaceName) {
/// <summary>Returns true if the caller queries for a supported interface.</summary>
/// <param name="interfaceName" type="String" optional="false">Name of the interface to look for.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.filter.ValueFilter._wjDict = _wjMerge({}, {showValues:2,filterText:2,maxValues:2,uniqueValues:2,sortValues:2,column:2,isActive:2});
wijmo.grid.filter.ValueFilter._wjClass = true;
wijmo.grid.filter.ValueFilterEditor = function(element, filter) {
/// <summary>Initializes a new instance of the @see:ValueFilterEditor class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector
/// for the host element (e.g. '#theCtrl').</param>
/// <param name="filter" type="wijmo.grid.filter.ValueFilter" optional="false">The @see:ValueFilter to edit.</param>
/// <returns type="wijmo.grid.filter.ValueFilterEditor"></returns>
/// <field name="filter" type="wijmo.grid.filter.ValueFilter">Gets a reference to the @see:ValueFilter being edited.</field>
this._wjClassName = 'wijmo.grid.filter.ValueFilterEditor';
_wjReownEvents(this);
}
wijmo.grid.filter.ValueFilterEditor.prototype = new wijmo.Control();
wijmo.grid.filter.ValueFilterEditor.prototype.updateEditor = function() {
/// <summary>Updates editor with current filter settings.</summary>
}
wijmo.grid.filter.ValueFilterEditor.prototype.clearEditor = function() {
/// <summary>Clears the editor without applying changes to the filter.</summary>
}
wijmo.grid.filter.ValueFilterEditor.prototype.updateFilter = function() {
/// <summary>Updates filter to reflect the current editor values.</summary>
}
wijmo.grid.filter.ValueFilterEditor.controlTemplate = undefined;
intellisense.annotate(wijmo.grid.filter.ValueFilterEditor, {
// Gets or sets the template used to instantiate @see:ColumnFilterEditor controls.
controlTemplate: undefined
});
wijmo.grid.filter.ValueFilterEditor._wjDict = _wjMerge(wijmo.Control._wjDict, {filter:2});
wijmo.grid.filter.ValueFilterEditor._wjClass = true;
wijmo.grid.filter.ConditionFilter = function(column) {
/// <summary>Initializes a new instance of the @see:ConditionFilter class.</summary>
/// <param name="column" type="wijmo.grid.Column" optional="false">The column to filter.</param>
/// <returns type="wijmo.grid.filter.ConditionFilter"></returns>
/// <field name="condition1" type="wijmo.grid.filter.FilterCondition">Gets the first condition in the filter.</field>
/// <field name="condition2" type="wijmo.grid.filter.FilterCondition">Gets the second condition in the filter.</field>
/// <field name="and" type="Boolean">Gets a value that indicates whether to combine the two conditions
/// with an AND or an OR operator.</field>
/// <field name="column" type="wijmo.grid.Column">Gets the @see:Column to filter.</field>
/// <field name="isActive" type="Boolean">Gets a value that indicates whether the filter is active.
/// 
/// The filter is active if at least one of the two conditions
/// has its operator and value set to a valid combination.</field>
this._wjClassName = 'wijmo.grid.filter.ConditionFilter';
_wjReownEvents(this);
}
wijmo.grid.filter.ConditionFilter.prototype.apply = function(value) {
/// <summary>Returns a value indicating whether a value passes this filter.</summary>
/// <param name="value" type="Object" optional="false">The value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.filter.ConditionFilter.prototype.clear = function() {
/// <summary>Clears the filter.</summary>
}
wijmo.grid.filter.ConditionFilter.prototype.implementsInterface = function(interfaceName) {
/// <summary>Returns true if the caller queries for a supported interface.</summary>
/// <param name="interfaceName" type="String" optional="false">Name of the interface to look for.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.filter.ConditionFilter._wjDict = _wjMerge({}, {condition1:2,condition2:2,and:2,column:2,isActive:2});
wijmo.grid.filter.ConditionFilter._wjClass = true;
wijmo.grid.filter.ConditionFilterEditor = function(element, filter) {
/// <summary>Initializes a new instance of the @see:ConditionFilterEditor class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector
/// for the host element (e.g. '#theCtrl').</param>
/// <param name="filter" type="wijmo.grid.filter.ConditionFilter" optional="false">The @see:ConditionFilter to edit.</param>
/// <returns type="wijmo.grid.filter.ConditionFilterEditor"></returns>
/// <field name="filter" type="wijmo.grid.filter.ConditionFilter">Gets a reference to the @see:ConditionFilter being edited.</field>
this._wjClassName = 'wijmo.grid.filter.ConditionFilterEditor';
_wjReownEvents(this);
}
wijmo.grid.filter.ConditionFilterEditor.prototype = new wijmo.Control();
wijmo.grid.filter.ConditionFilterEditor.prototype.updateEditor = function() {
/// <summary>Updates editor with current filter settings.</summary>
}
wijmo.grid.filter.ConditionFilterEditor.prototype.clearEditor = function() {
/// <summary>Clears the editor without applying changes to the filter.</summary>
}
wijmo.grid.filter.ConditionFilterEditor.prototype.updateFilter = function() {
/// <summary>Updates filter to reflect the current editor values.</summary>
}
wijmo.grid.filter.ConditionFilterEditor.controlTemplate = undefined;
intellisense.annotate(wijmo.grid.filter.ConditionFilterEditor, {
// Gets or sets the template used to instantiate @see:ConditionFilterEditor controls.
controlTemplate: undefined
});
wijmo.grid.filter.ConditionFilterEditor._wjDict = _wjMerge(wijmo.Control._wjDict, {filter:2});
wijmo.grid.filter.ConditionFilterEditor._wjClass = true;
wijmo.grid.filter.FilterCondition = function() {
/// <summary>Defines a filter condition.
/// This class is used by the @see:FlexGridFilter class; you will rarely have to use it directly.</summary>
/// <returns type="wijmo.grid.filter.FilterCondition"></returns>
/// <field name="operator" type="wijmo.grid.filter.Operator">Gets or sets the operator used by this @see:FilterCondition.</field>
/// <field name="value" type="Object">Gets or sets the value used by this @see:FilterCondition.</field>
/// <field name="isActive" type="Boolean">Gets a value that indicates whether the condition is active.</field>
this._wjClassName = 'wijmo.grid.filter.FilterCondition';
_wjReownEvents(this);
}
wijmo.grid.filter.FilterCondition.prototype.clear = function() {
/// <summary>Clears the condition.</summary>
}
wijmo.grid.filter.FilterCondition.prototype.apply = function(value) {
/// <summary>Returns a value that determines whether the given value passes this
/// @see:FilterCondition.</summary>
/// <param name="value" type="Object" optional="false">The value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.filter.FilterCondition._wjDict = _wjMerge({}, {operator:2,value:2,isActive:2});
wijmo.grid.filter.FilterCondition._wjClass = true;
wijmo.grid.filter.Operator = {
// Equals.
EQ: 0,
// Does not equal.
NE: 1,
// Greater than.
GT: 2,
// Greater than or equal to.
GE: 3,
// Less than.
LT: 4,
// Less than or equal to.
LE: 5,
// Begins with.
BW: 6,
// Ends with.
EW: 7,
// Contains.
CT: 8,
// Does not contain.
NC: 9 ,
_wjEnum: true
};

intellisense.annotate(wijmo.grid.filter, {
// Specifies filter condition operators.
Operator: undefined
});

wijmo.grid.filter.ColumnFilter = function(owner, column) {
/// <summary>Initializes a new instance of the @see:ColumnFilter class.</summary>
/// <param name="owner" type="wijmo.grid.filter.FlexGridFilter" optional="false">The @see:FlexGridFilter that owns this column filter.</param>
/// <param name="column" type="wijmo.grid.Column" optional="false">The @see:Column to filter.</param>
/// <returns type="wijmo.grid.filter.ColumnFilter"></returns>
/// <field name="filterType" type="wijmo.grid.filter.FilterType">Gets or sets the types of filtering provided by this filter.
/// 
/// Setting this property to null causes the filter to use the value
/// defined by the owner filter's @see:FlexGridFilter.defaultFilterType
/// property.</field>
/// <field name="valueFilter" type="wijmo.grid.filter.ValueFilter">Gets the @see:ValueFilter in this @see:ColumnFilter.</field>
/// <field name="conditionFilter" type="wijmo.grid.filter.ConditionFilter">Gets the @see:ConditionFilter in this @see:ColumnFilter.</field>
/// <field name="column" type="wijmo.grid.Column">Gets the @see:Column being filtered.</field>
/// <field name="isActive" type="Boolean">Gets a value that indicates whether the filter is active.</field>
this._wjClassName = 'wijmo.grid.filter.ColumnFilter';
_wjReownEvents(this);
}
wijmo.grid.filter.ColumnFilter.prototype.apply = function(value) {
/// <summary>Gets a value that indicates whether a value passes the filter.</summary>
/// <param name="value" type="Object" optional="false">The value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.filter.ColumnFilter.prototype.clear = function() {
/// <summary>Clears the filter.</summary>
}
wijmo.grid.filter.ColumnFilter.prototype.implementsInterface = function(interfaceName) {
/// <summary>Returns true if the caller queries for a supported interface.</summary>
/// <param name="interfaceName" type="String" optional="false">Name of the interface to look for.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.filter.ColumnFilter._wjDict = _wjMerge({}, {filterType:2,valueFilter:2,conditionFilter:2,column:2,isActive:2});
wijmo.grid.filter.ColumnFilter._wjClass = true;
wijmo.grid.filter.ColumnFilterEditor = function(element, filter, sortButtons) {
/// <summary>Initializes a new instance of the @see:ColumnFilterEditor class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector
/// for the host element (e.g. '#theCtrl').</param>
/// <param name="filter" type="wijmo.grid.filter.ColumnFilter" optional="false">The @see:ColumnFilter to edit.</param>
/// <param name="sortButtons" type="Boolean" optional="true">Whether to show sort buttons in the editor.</param>
/// <returns type="wijmo.grid.filter.ColumnFilterEditor"></returns>
/// <field name="filter" type="wijmo.grid.filter.ColumnFilter">Gets a reference to the @see:ColumnFilter being edited.</field>
/// <field name="filterChanged" type="wijmo.Event">Occurs after the filter is modified.</field>
/// <field name="buttonClicked" type="wijmo.Event">Occurs when one of the editor buttons is clicked.</field>
this._wjClassName = 'wijmo.grid.filter.ColumnFilterEditor';
this.filterChanged = new wijmo.Event('wijmo.EventArgs');
this.buttonClicked = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.grid.filter.ColumnFilterEditor.prototype = new wijmo.Control();
wijmo.grid.filter.ColumnFilterEditor.prototype.updateEditor = function() {
/// <summary>Updates editor with current filter settings.</summary>
}
wijmo.grid.filter.ColumnFilterEditor.prototype.updateFilter = function() {
/// <summary>Updates filter with current editor settings.</summary>
}
wijmo.grid.filter.ColumnFilterEditor.prototype.onFilterChanged = function(e) {
/// <summary>Raises the @see:filterChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.grid.filter.ColumnFilterEditor.prototype.onButtonClicked = function(e) {
/// <summary>Raises the @see:buttonClicked event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.grid.filter.ColumnFilterEditor.controlTemplate = undefined;
intellisense.annotate(wijmo.grid.filter.ColumnFilterEditor, {
// Gets or sets the template used to instantiate @see:ColumnFilterEditor controls.
controlTemplate: undefined
});
wijmo.grid.filter.ColumnFilterEditor._wjDict = _wjMerge(wijmo.Control._wjDict, {filter:2,filterChanged:1,buttonClicked:1});
wijmo.grid.filter.ColumnFilterEditor._wjClass = true;
wijmo.grid.filter.FilterType = {
// No filter.
None: 0,
// A filter based on two conditions.
Condition: 1,
// A filter based on a set of values.
Value: 2,
// A filter that combines condition and value filters.
Both: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.grid.filter, {
// Specifies types of column filter.
FilterType: undefined
});

wijmo.grid.filter.FlexGridFilter = function(grid) {
/// <summary>Initializes a new instance of the @see:FlexGridFilter class.</summary>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="false">The @see:FlexGrid to filter.</param>
/// <returns type="wijmo.grid.filter.FlexGridFilter"></returns>
/// <field name="grid" type="wijmo.grid.FlexGrid">Gets a reference to the @see:FlexGrid that owns this filter.</field>
/// <field name="filterColumns" type="String[]">Gets or sets an array containing the names or bindings of the columns
/// that have filters.
/// 
/// Setting this property to null or to an empty array adds filters to
/// all columns.</field>
/// <field name="showFilterIcons" type="Boolean">Gets or sets a value indicating whether the @see:FlexGridFilter adds filter
/// editing buttons to the grid's column headers.
/// 
/// If you set this property to false, then you are responsible for providing
/// a way for users to edit, clear, and apply the filters.</field>
/// <field name="showSortButtons" type="Boolean">Gets or sets a value indicating whether the filter editor should include
/// sort buttons.
/// 
/// By default, the editor shows sort buttons like Excel does. But since users
/// can sort columns by clicking their headers, sort buttons in the filter editor
/// may not be desirable in some circumstances.</field>
/// <field name="defaultFilterType" type="wijmo.grid.filter.FilterType">Gets or sets the default filter type to use.
/// 
/// This value can be overridden in filters for specific columns.
/// For example, the code below creates a filter that filters by
/// conditions on all columns except the "ByValue" column:
/// 
/// <pre>
/// var f = new wijmo.grid.filter.FlexGridFilter(flex);
/// f.defaultFilterType = wijmo.grid.filter.FilterType.Condition;
/// var col = flex.columns.getColumn('ByValue'),
///     cf = f.getColumnFilter(col);
/// cf.filterType = wijmo.grid.filter.FilterType.Value;
/// </pre></field>
/// <field name="filterDefinition" type="String">Gets or sets the current filter definition as a JSON string.</field>
/// <field name="filterApplied" type="wijmo.Event">Occurs after the filter is applied.</field>
/// <field name="filterChanging" type="wijmo.Event">Occurs when a column filter is about to be edited by the user.
/// 
/// Use this event to customize the column filter if you want to
/// override the default settings for the filter.
/// 
/// For example, the code below sets the operator used by the filter
/// conditions to 'contains' if they are null:
/// 
/// <pre>filter.filterChanging.addHandler(function (s, e) {
///   var cf = filter.getColumnFilter(e.col);
///   if (!cf.valueFilter.isActive && cf.conditionFilter.condition1.operator == null) {
///     cf.filterType = wijmo.grid.filter.FilterType.Condition;
///     cf.conditionFilter.condition1.operator = wijmo.grid.filter.Operator.CT;
///   }
/// });</pre></field>
/// <field name="filterChanged" type="wijmo.Event">Occurs after a column filter has been edited by the user.
/// 
/// Use the event parameters to determine the column that owns
/// the filter and whether changes were applied or canceled.</field>
this._wjClassName = 'wijmo.grid.filter.FlexGridFilter';
this.filterApplied = new wijmo.Event('wijmo.EventArgs');
this.filterChanging = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
this.filterChanged = new wijmo.Event('wijmo.grid.CellRangeEventArgs');
_wjReownEvents(this);
}
wijmo.grid.filter.FlexGridFilter.prototype.getColumnFilter = function(col, create) {
/// <summary>Gets the filter for the given column.</summary>
/// <param name="col" type="Object" optional="false">The @see:Column that the filter applies to (or column name or index).</param>
/// <param name="create" type="Boolean" optional="true">Whether to create the filter if it does not exist.</param>
/// <returns type="wijmo.grid.filter.ColumnFilter"></returns>
}
wijmo.grid.filter.FlexGridFilter.prototype.editColumnFilter = function(col, ht) {
/// <summary>Shows the filter editor for the given grid column.</summary>
/// <param name="col" type="Object" optional="false">The @see:Column that contains the filter to edit.</param>
/// <param name="ht" type="wijmo.grid.HitTestInfo" optional="true">A @see:HitTestInfo object containing the range of the cell that triggered the filter display.</param>
}
wijmo.grid.filter.FlexGridFilter.prototype.closeEditor = function() {
/// <summary>Closes the filter editor.</summary>
}
wijmo.grid.filter.FlexGridFilter.prototype.apply = function() {
/// <summary>Applies the current column filters to the grid.</summary>
}
wijmo.grid.filter.FlexGridFilter.prototype.clear = function() {
/// <summary>Clears all column filters.</summary>
}
wijmo.grid.filter.FlexGridFilter.prototype.onFilterApplied = function(e) {
/// <summary>Raises the @see:filterApplied event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.grid.filter.FlexGridFilter.prototype.onFilterChanging = function(e) {
/// <summary>Raises the @see:filterChanging event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false"></param>
}
wijmo.grid.filter.FlexGridFilter.prototype.onFilterChanged = function(e) {
/// <summary>Raises the @see:filterChanged event.</summary>
/// <param name="e" type="wijmo.grid.CellRangeEventArgs" optional="false"></param>
}
wijmo.grid.filter.FlexGridFilter._wjDict = _wjMerge({}, {grid:2,filterColumns:2,showFilterIcons:2,showSortButtons:2,defaultFilterType:2,filterDefinition:2,filterApplied:1,filterChanging:1,filterChanged:1});
wijmo.grid.filter.FlexGridFilter._wjClass = true;
wijmo.grid.grouppanel = wijmo.grid.grouppanel || { _wjModule: true };
wijmo.grid.grouppanel.GroupPanel = function(element, options) {
/// <summary>Initializes a new instance of the @see:GroupPanel class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.grid.grouppanel.GroupPanel"></returns>
/// <field name="hideGroupedColumns" type="Boolean">Gets or sets a value indicating whether the panel hides grouped columns in the owner grid.
/// 
/// The @see:FlexGrid displays grouping information in row headers, so it is
/// usually a good idea to hide grouped columns since they display redundant
/// information.</field>
/// <field name="maxGroups" type="Number">Gets or sets the maximum number of groups allowed.</field>
/// <field name="placeholder" type="String">Gets or sets a string to display in the control when it contains no groups.</field>
/// <field name="grid" type="wijmo.grid.FlexGrid">Gets or sets the @see:FlexGrid that is connected to this @see:GroupPanel.
/// 
/// Once a grid is connected to the panel, the panel displays the groups
/// defined in the grid's data source. Users can drag grid columns
/// into the panel to create new groups, drag groups within the panel to
/// re-arrange the groups, or delete items in the panel to remove the groups.</field>
this._wjClassName = 'wijmo.grid.grouppanel.GroupPanel';
_wjReownEvents(this);
}
wijmo.grid.grouppanel.GroupPanel.prototype = new wijmo.Control();
wijmo.grid.grouppanel.GroupPanel.prototype.refresh = function() {
/// <summary>Updates the panel to show the current groups.</summary>
}
wijmo.grid.grouppanel.GroupPanel.controlTemplate = undefined;
intellisense.annotate(wijmo.grid.grouppanel.GroupPanel, {
// Gets or sets the template used to instantiate @see:GroupPanel controls.
controlTemplate: undefined
});
wijmo.grid.grouppanel.GroupPanel._wjDict = _wjMerge(wijmo.Control._wjDict, {hideGroupedColumns:2,maxGroups:2,placeholder:2,grid:2});
wijmo.grid.grouppanel.GroupPanel._wjClass = true;
wijmo.grid.detail = wijmo.grid.detail || { _wjModule: true };
wijmo.grid.detail.DetailVisibilityMode = {
// Details are shown or hidden in code, using the
// @see:FlexGridDetailProvider.showDetail and
// @see:FlexGridDetailProvider.hideDetail methods.
Code: 0,
// Details are shown for the row that is currently selected.
Selection: 1,
// Details are shown or hidden using buttons added to the row headers.
// Only one row may be expanded at a time.
ExpandSingle: 2,
// Details are shown or hidden using buttons added to the row headers.
// Multiple rows may be expanded at a time.
ExpandMulti: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.grid.detail, {
// Specifies when and how the row details are displayed.
DetailVisibilityMode: undefined
});

wijmo.grid.detail.FlexGridDetailProvider = function(grid) {
/// <summary>Initializes a new instance of the @see:FlexGridDetailProvider class.</summary>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="false">@see:FlexGrid that will receive detail rows.</param>
/// <returns type="wijmo.grid.detail.FlexGridDetailProvider"></returns>
/// <field name="grid" type="wijmo.grid.FlexGrid">Gets the @see:FlexGrid that owns this @see:FlexGridDetailProvider.</field>
/// <field name="detailVisibilityMode" type="wijmo.grid.detail.DetailVisibilityMode">Gets or sets a value that determines when row details are displayed.</field>
/// <field name="maxHeight" type="Number">Gets or sets the maximum height of the detail rows, in pixels.</field>
/// <field name="createDetailCell" type="Function">Gets or sets the callback function that creates detail cells.
/// 
/// The callback function takes a @see:Row as a parameter and
/// returns an HTML element representing the row details.
/// For example:
/// 
/// <pre>// create detail cells for a given row
/// dp.createDetailCell = function (row) {
///   var cell = document.createElement('div');
///   var detailGrid = new wijmo.grid.FlexGrid(cell, {
///     itemsSource: getProducts(row.dataItem.CategoryID),
///     headersVisibility: wijmo.grid.HeadersVisibility.Column
///   });
///   return cell;
/// };</pre></field>
/// <field name="disposeDetailCell" type="Function">Gets or sets the callback function that disposes of detail cells.
/// 
/// The callback function takes a @see:Row as a parameter and
/// disposes of any resources associated with the detail cell.
/// 
/// This function is optional. Use it in cases where the
/// @see:createDetailCell function allocates resources that are not
/// automatically garbage-collected.</field>
/// <field name="rowHasDetail" type="Function">Gets or sets the callback function that determines whether a row
/// has details.
/// 
/// The callback function takes a @see:Row as a parameter and
/// returns a boolean value that indicates whether the row has
/// details. For example:
/// 
/// <pre>// remove details from items with odd CategoryID
/// dp.rowHasDetail = function (row) {
///   return row.dataItem.CategoryID % 2 == 0;
/// };</pre>
/// 
/// Setting this property to null indicates all rows have details.</field>
this._wjClassName = 'wijmo.grid.detail.FlexGridDetailProvider';
_wjReownEvents(this);
}
wijmo.grid.detail.FlexGridDetailProvider.prototype.isDetailVisible = function(row) {
/// <summary>Gets a value that determines if a row's details are visible.</summary>
/// <param name="row" type="Object" optional="false">Row or index of the row to investigate.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.detail.FlexGridDetailProvider.prototype.isDetailAvailable = function(row) {
/// <summary>Gets a value that determines if a row has details to show.</summary>
/// <param name="row" type="Object" optional="false">Row or index of the row to investigate.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.detail.FlexGridDetailProvider.prototype.hideDetail = function(row) {
/// <summary>Hides the detail row for a given row.</summary>
/// <param name="row" type="Object" optional="true">Row or index of the row that will have its details hidden.
/// This parameter is optional. If not provided, all detail rows are hidden.</param>
}
wijmo.grid.detail.FlexGridDetailProvider.prototype.showDetail = function(row, hideOthers) {
/// <summary>Shows the detail row for a given row.</summary>
/// <param name="row" type="Object" optional="false">Row or index of the row that will have its details shown.</param>
/// <param name="hideOthers" type="Boolean" optional="true">Whether to hide details for all other rows.</param>
}
wijmo.grid.detail.FlexGridDetailProvider._wjDict = _wjMerge({}, {grid:2,detailVisibilityMode:2,maxHeight:2,createDetailCell:2,disposeDetailCell:2,rowHasDetail:2});
wijmo.grid.detail.FlexGridDetailProvider._wjClass = true;
wijmo.grid.detail.DetailMergeManager = function(grid) {
/// <summary>Initializes a new instance of the @see:DetailMergeManager class.</summary>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="false">The @see:FlexGrid object that owns this @see:DetailMergeManager.</param>
/// <returns type="wijmo.grid.detail.DetailMergeManager"></returns>
this._wjClassName = 'wijmo.grid.detail.DetailMergeManager';
_wjReownEvents(this);
}
wijmo.grid.detail.DetailMergeManager.prototype = new wijmo.grid.MergeManager();
wijmo.grid.detail.DetailMergeManager.prototype.getMergedRange = function(p, r, c, clip) {
/// <summary>Gets a @see:CellRange that specifies the merged extent of a cell
/// in a @see:GridPanel.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">The @see:GridPanel that contains the range.</param>
/// <param name="r" type="Number" optional="false">The index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">The index of the column that contains the cell.</param>
/// <param name="clip" type="Boolean" optional="true">Whether to clip the merged range to the grid's current view range.</param>
/// <returns type="wijmo.grid.CellRange">A @see:CellRange that specifies the merged range, or null if the cell is not merged.</returns>
}
wijmo.grid.detail.DetailMergeManager._wjDict = _wjMerge(wijmo.grid.MergeManager._wjDict, {});
wijmo.grid.detail.DetailMergeManager._wjClass = true;
wijmo.grid.detail.DetailRow = function(parentRow) {
/// <summary>Initializes a new instance of the @see:DetailRow class.</summary>
/// <param name="parentRow" type="wijmo.grid.Row" optional="false">@see:Row that this @see:DetailRow provides details for.</param>
/// <returns type="wijmo.grid.detail.DetailRow"></returns>
/// <field name="detail" type="HTMLElement">Gets or sets the HTML element that represents the detail cell in this @see:DetailRow.</field>
this._wjClassName = 'wijmo.grid.detail.DetailRow';
_wjReownEvents(this);
}
wijmo.grid.detail.DetailRow.prototype = new wijmo.grid.Row();
wijmo.grid.detail.DetailRow._wjDict = _wjMerge(wijmo.grid.Row._wjDict, {detail:2});
wijmo.grid.detail.DetailRow._wjClass = true;
wijmo.grid.xlsx = wijmo.grid.xlsx || { _wjModule: true };
wijmo.grid.xlsx.FlexGridXlsxConverter = function() {
/// <summary>This class provides static <b>load</b> and <b>save</b> methods for loading and saving of the @see:FlexGrid control
/// from/to Excel xlsx files.</summary>
/// <returns type="wijmo.grid.xlsx.FlexGridXlsxConverter"></returns>
this._wjClassName = 'wijmo.grid.xlsx.FlexGridXlsxConverter';
_wjReownEvents(this);
}
wijmo.grid.xlsx.FlexGridXlsxConverter.save = function(grid, options, fileName) {
/// <summary>Save the @see:FlexGrid instance to @see:Workbook instance.
/// 
/// For example:
/// <pre>// This sample exports FlexGrid content to an xlsx
/// // click.
/// &nbsp;
/// // HTML
/// &lt;button
///     onclick="saveXlsx('FlexGrid.xlsx')"&gt;
///     Save
/// &lt;/button&gt;
/// &nbsp;
/// // JavaScript
/// function saveXlsx(fileName) {
///     // Save the flexGrid to xlsx file.
///     wijmo.grid.xlsx.FlexGridXlsxConverter.save(flexGrid,
///             { includeColumnHeaders: true }, fileName);
/// }</pre></summary>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="false">FlexGrid that will be saved.</param>
/// <param name="options" type="wijmo.grid.xlsx.IFlexGridXlsxOptions" optional="true">Options to use when saving the grid (including whether to save row and column headers, sheet name, etc)</param>
/// <param name="fileName" type="Object" optional="true">Name of the file that will be generated.</param>
/// <returns type="wijmo.xlsx.Workbook">A @see:Workbook object that can be used to customize the workbook before saving it (with the Workbook.save method).</returns>
}
wijmo.grid.xlsx.FlexGridXlsxConverter.load = function(grid, workbook, options) {
/// <summary>Loads an @see:Workbook instance or a Blob object containing xlsx file content to @see:FlexGrid instance.
/// 
/// For example:
/// <pre>// This sample opens an xlsx file chosen via Open File
/// // dialog and fills FlexGrid with the content of the first
/// // sheet.
/// &nbsp;
/// // HTML
/// &lt;input type="file"
///     id="importFile"
///     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
/// /&gt;
/// &lt;div id="flexHost"&gt;&lt;/&gt;
/// &nbsp;
/// // JavaScript
/// var flexGrid = new wijmo.grid.FlexGrid("#flexHost"),
///     importFile = document.getElementById('importFile');
/// &nbsp;
/// importFile.addEventListener('change', function () {
///     loadWorkbook();
/// });
/// &nbsp;
/// function loadWorkbook() {
///     var reader,
///         file = importFile.files[0];
///     if (file) {
///         reader = new FileReader();
///         reader.onload = function (e) {
///             wijmo.grid.xlsx.FlexGridXlsxConverter.load(flexGrid, reader.result,
///                 { includeColumnHeaders: true });
///         };
///         reader.readAsArrayBuffer(file);
///     }
/// }</pre></summary>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="false">FlexGrid that will load the workBook object.</param>
/// <param name="workbook" type="Object" optional="false">An Workbook instance or a Blob instance or a base 64 stirng or an ArrayBuffer containing xlsx file content.</param>
/// <param name="options" type="wijmo.grid.xlsx.IFlexGridXlsxOptions" optional="true">Options to use when load the workBook object to @see:FlexGrid instance (including whether to save row and column headers, sheet name, etc)</param>
}
wijmo.grid.xlsx.FlexGridXlsxConverter._wjDict = _wjMerge({}, {});
wijmo.grid.xlsx.FlexGridXlsxConverter._wjClass = true;
wijmo.grid.multirow = wijmo.grid.multirow || { _wjModule: true };
wijmo.grid.multirow._MultiRow = function(dataItem, dataIndex, recordIndex) {
/// <summary>Initializes a new instance of the @see:Row class.</summary>
/// <param name="dataItem" type="Object" optional="false">The data item that this row is bound to.</param>
/// <param name="dataIndex" type="Number" optional="false">The index of the record within the items source.</param>
/// <param name="recordIndex" type="Number" optional="false">The index of this row within the record (data item).</param>
/// <returns type="wijmo.grid.multirow._MultiRow"></returns>
/// <field name="recordIndex" type="Number">Gets the index of this row within the record (data item) it represents.</field>
/// <field name="dataIndex" type="Number">Gets the index of this row within the data source collection.</field>
this._wjClassName = 'wijmo.grid.multirow._MultiRow';
_wjReownEvents(this);
}
wijmo.grid.multirow._MultiRow.prototype = new wijmo.grid.Row();
wijmo.grid.multirow._MultiRow._wjDict = _wjMerge(wijmo.grid.Row._wjDict, {recordIndex:2,dataIndex:2});
wijmo.grid.multirow._MultiRow._wjClass = true;
wijmo.grid.multirow._Cell = function(options) {
/// <summary>Initializes a new instance of the @see:_Cell class.</summary>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the @see:_Cell.</param>
/// <returns type="wijmo.grid.multirow._Cell"></returns>
/// <field name="colspan" type="Number">Gets or sets the number of physical columns spanned by this @see:_Cell.</field>
this._wjClassName = 'wijmo.grid.multirow._Cell';
_wjReownEvents(this);
}
wijmo.grid.multirow._Cell.prototype = new wijmo.grid.Column();
wijmo.grid.multirow._Cell._wjDict = _wjMerge(wijmo.grid.Column._wjDict, {colspan:2});
wijmo.grid.multirow._Cell._wjClass = true;
wijmo.grid.multirow._CellGroup = function(grid, options) {
/// <summary>Initializes a new instance of the @see:_CellGroup class.</summary>
/// <param name="grid" type="wijmo.grid.multirow.MultiRow" optional="false">@see:MultiRow that owns this @see:_CellGroup.</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the new @see:_CellGroup.</param>
/// <returns type="wijmo.grid.multirow._CellGroup"></returns>
this._wjClassName = 'wijmo.grid.multirow._CellGroup';
_wjReownEvents(this);
}
wijmo.grid.multirow._CellGroup.prototype = new wijmo.grid.multirow._Cell();
wijmo.grid.multirow._CellGroup._wjDict = _wjMerge(wijmo.grid.multirow._Cell._wjDict, {});
wijmo.grid.multirow._CellGroup._wjClass = true;
wijmo.grid.multirow._MergeManager = function() {
/// <summary>Provides custom merging for @see:MultiRow controls.</summary>
/// <returns type="wijmo.grid.multirow._MergeManager"></returns>
this._wjClassName = 'wijmo.grid.multirow._MergeManager';
_wjReownEvents(this);
}
wijmo.grid.multirow._MergeManager.prototype = new wijmo.grid.MergeManager();
wijmo.grid.multirow._MergeManager.prototype.getMergedRange = function(p, r, c, clip) {
/// <summary>Gets a @see:CellRange that specifies the merged extent of a cell
/// in a @see:GridPanel.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">The @see:GridPanel that contains the range.</param>
/// <param name="r" type="Number" optional="false">The index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">The index of the column that contains the cell.</param>
/// <param name="clip" type="Boolean" optional="true">Whether to clip the merged range to the grid's current view range.</param>
/// <returns type="wijmo.grid.CellRange">A @see:CellRange that specifies the merged range, or null if the cell is not merged.</returns>
}
wijmo.grid.multirow._MergeManager._wjDict = _wjMerge(wijmo.grid.MergeManager._wjDict, {});
wijmo.grid.multirow._MergeManager._wjClass = true;
wijmo.grid.multirow._AddNewHandler = function(grid) {
/// <summary>Initializes a new instance of the @see:_AddNewHandler class.</summary>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="false">@see:FlexGrid that owns this @see:_AddNewHandler.</param>
/// <returns type="wijmo.grid._AddNewHandler"></returns>
this._wjClassName = 'wijmo.grid.multirow._AddNewHandler';
_wjReownEvents(this);
}
wijmo.grid.multirow._AddNewHandler.prototype = new wijmo.grid._AddNewHandler();
wijmo.grid.multirow._AddNewHandler.prototype.updateNewRowTemplate = function() {
/// <summary>Updates the new row template to ensure it's visible only if the grid is
/// bound to a data source that supports adding new items, and that it is
/// in the right position.</summary>
}
wijmo.grid.multirow._AddNewHandler._wjDict = _wjMerge(wijmo.grid._AddNewHandler._wjDict, {});
wijmo.grid.multirow._AddNewHandler._wjClass = true;
wijmo.grid.multirow._NewRowTemplate = function() {
/// <summary>Represents a row template used to add items to the source collection.</summary>
/// <returns type="wijmo.grid._NewRowTemplate"></returns>
this._wjClassName = 'wijmo.grid.multirow._NewRowTemplate';
_wjReownEvents(this);
}
wijmo.grid.multirow._NewRowTemplate.prototype = new wijmo.grid._NewRowTemplate();
wijmo.grid.multirow._NewRowTemplate._wjDict = _wjMerge(wijmo.grid._NewRowTemplate._wjDict, {});
wijmo.grid.multirow._NewRowTemplate._wjClass = true;
wijmo.grid.multirow.MultiRow = function(element, options) {
/// <summary>Initializes a new instance of the @see:MultiRow class.
/// 
/// In most cases, the <b>options</b> parameter will include the value for the
/// @see:layoutDefinition property.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.grid.multirow.MultiRow"></returns>
/// <field name="layoutDefinition" type="Object[]">Gets or sets an array that defines the layout of the rows used to display each data item.
/// 
/// The array contains a list of cell group objects which have the following properties:
/// 
/// <ul>
/// <li><b>header</b>: Group header (shown when the headers are collapsed)</li>
/// <li><b>colspan</b>: Number of grid columns spanned by the group</li>
/// <li><b>cells</b>: Array of cell objects, which extend @see:Column with a <b>colspan</b> property.</li>
/// </ul>
/// 
/// When the @see:layoutDefinition property is set, the grid scans the cells in each
/// group as follows:
/// 
/// <ol>
/// <li>The grid calculates the group's colspan as the max between the group's own colspan
/// and the widest cell in the group.</li>
/// <li>If the cell fits the current row within the group, it is added to the current row.</li>
/// <li>If it doesn't fit, it is added to a new row.</li>
/// </ol>
/// 
/// When all groups are ready, the grid calculates the number of rows per record to the maximum
/// rowspan of all groups, and adds rows to each group to pad their height as needed.
/// 
/// This scheme is simple and flexible. For example:
/// <pre>{ header: 'Group 1', cells: [{ binding: 'c1' }, { bnding: 'c2'}, { binding: 'c3' }]}</pre>
/// 
/// The group has colspan 1, so there will be one cell per column. The result is:
/// <pre>
/// | C1 |
/// | C2 |
/// | C3 |
/// </pre>
/// 
/// To create a group with two columns, set the group's colspan property:
/// 
/// <pre>{ header: 'Group 1', colspan: 2, cells:[{ binding: 'c1' }, { binding: 'c2'}, { binding: 'c3' }]}</pre>
/// 
/// The cells will wrap as follows:
/// <pre>
/// | C1  | C2 |
/// | C3       |
/// </pre>
/// 
/// Note that the last cell spans two columns (to fill the group).
/// 
/// You can also specify the colspan on individual cells rather than on the group:
/// 
/// <pre>{ header: 'Group 1', cells: [{binding: 'c1', colspan: 2 }, { bnding: 'c2'}, { binding: 'c3' }]}</pre>
/// 
/// Now the first cell has colspan 2, so the result is:
/// <pre>
/// | C1       |
/// | C2 |  C3 |
/// </pre>
/// 
/// Because cells extend the @see:Column class, you can add all the usual @see:Column
/// properties to any cells:
/// <pre>
/// { header: 'Group 1', cells: [
///    { binding: 'c1', colspan: 2 },
///    { bnding: 'c2'},
///    { binding: 'c3', format: 'n0', required: false, etc... }
/// ]}</pre></field>
/// <field name="rowsPerItem" type="Number">Gets the number of rows used do display each item.
/// 
/// This value is calculated automatically based on the value
/// of the @see:layoutDefinition property.</field>
/// <field name="centerHeadersVertically" type="Boolean">Gets or sets a value that determines whether the content of cells
/// that span multiple rows should be vertically centered.</field>
/// <field name="collapsedHeaders" type="Boolean">Gets or sets a value that determines whether column headers
/// should be collapsed and displayed as a single row displaying
/// the group headers.
/// 
/// If you set the @see:collapsedHeaders property to true,
/// remember to set the header property of every group in order
/// to avoid empty headers.</field>
/// <field name="showHeaderCollapseButton" type="Boolean">Gets or sets a value that determines whether the grid should display
/// a button in the column header panel to allow users to collapse and
/// expand the column headers.
/// 
/// If the button is visible, clicking on it will cause the grid to
/// toggle the value of the @see:collapsedHeaders property.</field>
this._wjClassName = 'wijmo.grid.multirow.MultiRow';
_wjReownEvents(this);
}
wijmo.grid.multirow.MultiRow.prototype = new wijmo.grid.FlexGrid();
wijmo.grid.multirow.MultiRow.prototype.getBindingColumn = function(p, r, c) {
/// <summary>Gets the @see:Column object used to bind a data item to a grid cell.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">@see:GridPanel that contains the cell.</param>
/// <param name="r" type="Number" optional="false">Index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">Index of the column that contains the cell.</param>
/// <returns type="wijmo.grid.Column"></returns>
}
wijmo.grid.multirow.MultiRow._wjDict = _wjMerge(wijmo.grid.FlexGrid._wjDict, {layoutDefinition:2,rowsPerItem:2,centerHeadersVertically:2,collapsedHeaders:2,showHeaderCollapseButton:2});
wijmo.grid.multirow.MultiRow._wjClass = true;
wijmo.input = wijmo.input || { _wjModule: true };
wijmo.input.DropDown = function(element, options) {
/// <summary>Initializes a new instance of the @see:DropDown class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.DropDown"></returns>
/// <field name="text" type="String">Gets or sets the text shown on the control.</field>
/// <field name="inputElement" type="HTMLInputElement">Gets the HTML input element hosted by the control.
/// 
/// Use this property in situations where you want to customize the
/// attributes of the input element.</field>
/// <field name="isReadOnly" type="Boolean">Gets or sets a value that indicates whether the user can modify
/// the control value using the mouse and keyboard.</field>
/// <field name="isRequired" type="Boolean">Gets or sets a value that determines whether the control value must be set to
/// a non-null value or whether it can be set to null
/// (by deleting the content of the control).</field>
/// <field name="placeholder" type="String">Gets or sets the string shown as a hint when the control is empty.</field>
/// <field name="isDroppedDown" type="Boolean">Gets or sets a value that indicates whether the drop down is currently visible.</field>
/// <field name="dropDown" type="HTMLElement">Gets the drop down element shown when the @see:isDroppedDown
/// property is set to true.</field>
/// <field name="dropDownCssClass" type="String">Gets or sets a CSS class name to add to the control's drop-down element.
/// 
/// This property is useful when styling the drop-down element, because it is
/// shown as a child of the document body rather than as a child of the control
/// itself, which prevents using CSS selectors based on the parent control.</field>
/// <field name="showDropDownButton" type="Boolean">Gets or sets a value that indicates whether the control should display a drop-down button.</field>
/// <field name="autoExpandSelection" type="Boolean">Gets or sets a value that indicates whether the control should automatically expand the
/// selection to whole words/numbers when the control is clicked.</field>
/// <field name="textChanged" type="wijmo.Event">Occurs when the value of the @see:text property changes.</field>
/// <field name="isDroppedDownChanging" type="wijmo.Event">Occurs before the drop down is shown or hidden.</field>
/// <field name="isDroppedDownChanged" type="wijmo.Event">Occurs after the drop down is shown or hidden.</field>
this._wjClassName = 'wijmo.input.DropDown';
this.textChanged = new wijmo.Event('wijmo.EventArgs');
this.isDroppedDownChanging = new wijmo.Event('wijmo.CancelEventArgs');
this.isDroppedDownChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.DropDown.prototype = new wijmo.Control();
wijmo.input.DropDown.prototype.selectAll = function() {
/// <summary>Sets the focus to the control and selects all its content.</summary>
}
wijmo.input.DropDown.prototype.onTextChanged = function(e) {
/// <summary>Raises the @see:textChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.DropDown.prototype.onIsDroppedDownChanging = function(e) {
/// <summary>Raises the @see:isDroppedDownChanging event.</summary>
/// <param name="e" type="wijmo.CancelEventArgs" optional="false"></param>
/// <returns type="Boolean"></returns>
}
wijmo.input.DropDown.prototype.onIsDroppedDownChanged = function(e) {
/// <summary>Raises the @see:isDroppedDownChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.DropDown.controlTemplate = undefined;
intellisense.annotate(wijmo.input.DropDown, {
// Gets or sets the template used to instantiate @see:DropDown controls.
controlTemplate: undefined
});
wijmo.input.DropDown._wjDict = _wjMerge(wijmo.Control._wjDict, {text:2,inputElement:2,isReadOnly:2,isRequired:2,placeholder:2,isDroppedDown:2,dropDown:2,dropDownCssClass:2,showDropDownButton:2,autoExpandSelection:2,textChanged:1,isDroppedDownChanging:1,isDroppedDownChanged:1});
wijmo.input.DropDown._wjClass = true;
wijmo.input.DateSelectionMode = {
// The user cannot change the current value using the mouse or keyboard.
None: 0,
// The user can select days.
Day: 1,
// The user can select months.
Month: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.input, {
// Specifies constants that define the date selection behavior.
DateSelectionMode: undefined
});

wijmo.input.Calendar = function(element, options) {
/// <summary>Initializes a new instance of the @see:Calendar class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.Calendar"></returns>
/// <field name="value" type="Date">Gets or sets the currently selected date.</field>
/// <field name="min" type="Date">Gets or sets the earliest date that the user can select in the calendar.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="max" type="Date">Gets or sets the latest date that the user can select in the calendar.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="selectionMode" type="wijmo.input.DateSelectionMode">Gets or sets a value that indicates whether users can select
/// days, months, or no values at all.</field>
/// <field name="isReadOnly" type="Boolean">Gets or sets a value that indicates whether the user can modify
/// the control value using the mouse and keyboard.</field>
/// <field name="firstDayOfWeek" type="Number">Gets or sets a value that represents the first day of the week,
/// the one displayed in the first column of the calendar.
/// 
/// Setting this property to null causes the calendar to use the default
/// for the current culture. In the English culture, the first day of the
/// week is Sunday (0); in most European cultures, the first day of the
/// week is Monday (1).</field>
/// <field name="displayMonth" type="Date">Gets or sets the month displayed in the calendar.</field>
/// <field name="showHeader" type="Boolean">Gets or sets a value indicating whether the control displays the header
/// area with the current month and navigation buttons.</field>
/// <field name="monthView" type="Boolean">Gets or sets a value indicating whether the calendar displays a month or a year.</field>
/// <field name="itemFormatter" type="Function">Gets or sets a formatter function to customize dates in the calendar.
/// 
/// The formatter function can add any content to any date. It allows
/// complete customization of the appearance and behavior of the calendar.
/// 
/// If specified, the function takes two parameters:
/// <ul>
///     <li>the date being formatted </li>
///     <li>the HTML element that represents the date</li>
/// </ul>
/// 
/// For example, the code below shows weekends with a yellow background:
/// <pre>
/// calendar.itemFormatter = function(date, element) {
///   var day = date.getDay();
///   element.style.backgroundColor = day == 0 || day == 6 ? 'yellow' : '';
/// }
/// </pre></field>
/// <field name="itemValidator" type="Function">Gets or sets a validator function to determine whether dates are valid for selection.
/// 
/// If specified, the validator function should take one parameter representing the
/// date to be tested, and should return false if the date is invalid and should not
/// be selectable.
/// 
/// For example, the code below shows weekends in a disabled state and prevents users
/// from selecting those dates:
/// <pre>
/// calendar.itemValidator = function(date) {
///   var weekday = date.getDay();
///   return weekday != 0 && weekday != 6;
/// }
/// </pre></field>
/// <field name="valueChanged" type="wijmo.Event">Occurs after a new date is selected.</field>
/// <field name="displayMonthChanged" type="wijmo.Event">Occurs after the @see:displayMonth property changes.</field>
/// <field name="formatItem" type="wijmo.Event">Occurs when an element representing a day in the calendar has been created.
/// 
/// This event can be used to format calendar items for display. It is similar
/// in purpose to the @see:itemFormatter property, but has the advantage
/// of allowing multiple independent handlers.
/// 
/// For example, the code below uses the @see:formatItem event to disable weekends
/// so they appear dimmed in the calendar:
/// 
/// <pre>// disable Sundays and Saturdays
/// calendar.formatItem.addHandler(function (s, e) {
///   var day = e.data.getDay();
///   if (day == 0 || day == 6) {
///     wijmo.addClass(e.item, 'wj-state-disabled');
///   }
/// });</pre></field>
this._wjClassName = 'wijmo.input.Calendar';
this.valueChanged = new wijmo.Event('wijmo.EventArgs');
this.displayMonthChanged = new wijmo.Event('wijmo.EventArgs');
this.formatItem = new wijmo.Event('wijmo.grid.FormatItemEventArgs');
_wjReownEvents(this);
}
wijmo.input.Calendar.prototype = new wijmo.Control();
wijmo.input.Calendar.prototype.onValueChanged = function(e) {
/// <summary>Raises the @see:valueChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.Calendar.prototype.onDisplayMonthChanged = function(e) {
/// <summary>Raises the @see:displayMonthChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.Calendar.prototype.onFormatItem = function(e) {
/// <summary>Raises the @see:formatItem event.</summary>
/// <param name="e" type="wijmo.grid.FormatItemEventArgs" optional="false">@see:FormatItemEventArgs that contains the event data.</param>
}
wijmo.input.Calendar.prototype.refresh = function(fullUpdate) {
/// <summary>Refreshes the control.</summary>
/// <param name="fullUpdate" type="Boolean" optional="true">Indicates whether to update the control layout as well as the content.</param>
}
wijmo.input.Calendar.controlTemplate = undefined;
intellisense.annotate(wijmo.input.Calendar, {
// Gets or sets the template used to instantiate @see:Calendar controls.
controlTemplate: undefined
});
wijmo.input.Calendar._wjDict = _wjMerge(wijmo.Control._wjDict, {value:2,min:2,max:2,selectionMode:2,isReadOnly:2,firstDayOfWeek:2,displayMonth:2,showHeader:2,monthView:2,itemFormatter:2,itemValidator:2,valueChanged:1,displayMonthChanged:1,formatItem:1});
wijmo.input.Calendar._wjClass = true;
wijmo.input.ColorPicker = function(element, options) {
/// <summary>Initializes a new instance of the @see:ColorPicker class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.ColorPicker"></returns>
/// <field name="showAlphaChannel" type="Boolean">Gets or sets a value indicating whether the @see:ColorPicker allows users
/// to edit the color's alpha channel (transparency).</field>
/// <field name="showColorString" type="Boolean">Gets or sets a value indicating whether the @see:ColorPicker shows a string representation
/// of the current color.</field>
/// <field name="value" type="String">Gets or sets the currently selected color.</field>
/// <field name="palette" type="String[]">Gets or sets an array that contains the colors in the palette.
/// 
/// The palette contains ten colors, represented by an array with
/// ten strings. The first two colors are usually white and black.</field>
/// <field name="valueChanged" type="wijmo.Event">Occurs when the color changes.</field>
this._wjClassName = 'wijmo.input.ColorPicker';
this.valueChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.ColorPicker.prototype = new wijmo.Control();
wijmo.input.ColorPicker.prototype.onValueChanged = function(e) {
/// <summary>Raises the @see:valueChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.ColorPicker.controlTemplate = undefined;
intellisense.annotate(wijmo.input.ColorPicker, {
// Gets or sets the template used to instantiate @see:ColorPicker controls.
controlTemplate: undefined
});
wijmo.input.ColorPicker._wjDict = _wjMerge(wijmo.Control._wjDict, {showAlphaChannel:2,showColorString:2,value:2,palette:2,valueChanged:1});
wijmo.input.ColorPicker._wjClass = true;
wijmo.input.ListBox = function(element, options) {
/// <summary>Initializes a new instance of the @see:ListBox class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.ListBox"></returns>
/// <field name="itemsSource" type="Object">Gets or sets the array or @see:ICollectionView object that contains the list items.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView object used as the item source.</field>
/// <field name="isContentHtml" type="Boolean">Gets or sets a value indicating whether items contain plain text or HTML.</field>
/// <field name="itemFormatter" type="Function">Gets or sets a function used to customize the values shown on the list.
/// The function takes two arguments, the item index and the default text or html, and
/// returns the new text or html to display.
/// 
/// If the formatting function needs a scope (i.e. a meaningful 'this'
/// value), then remember to set the filter using the 'bind' function to
/// specify the 'this' object. For example:
/// 
/// <pre>
///   listBox.itemFormatter = customItemFormatter.bind(this);
///   function customItemFormatter(index, content) {
///     if (this.makeItemBold(index)) {
///       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
///     }
///     return content;
///   }
/// </pre></field>
/// <field name="displayMemberPath" type="String">Gets or sets the name of the property to use as the visual representation of the items.</field>
/// <field name="selectedValuePath" type="String">Gets or sets the name of the property used to get the @see:selectedValue
/// from the @see:selectedItem.</field>
/// <field name="checkedMemberPath" type="Object">Gets or sets the name of the property used to control the CheckBoxes
/// placed next to each item.
/// 
/// Use this property to create multi-select LisBoxes.
/// When an item is checked or unchecked, the control raises the @see:itemChecked event.
/// Use the @see:selectedItem property to retrieve the item that was checked or unchecked,
/// or use the @see:checkedItems property to retrieve the list of items that are currently
/// checked.</field>
/// <field name="selectedIndex" type="Number">Gets or sets the index of the currently selected item.</field>
/// <field name="selectedItem" type="Object">Gets or sets the item that is currently selected.</field>
/// <field name="selectedValue" type="Object">Gets or sets the value of the @see:selectedItem obtained using the @see:selectedValuePath.</field>
/// <field name="maxHeight" type="Number">Gets or sets the maximum height of the list.</field>
/// <field name="checkedItems" type="Object[]">Gets or sets an array containing the items that are currently checked.</field>
/// <field name="selectedIndexChanged" type="wijmo.Event">Occurs when the value of the @see:selectedIndex property changes.</field>
/// <field name="itemsChanged" type="wijmo.Event">Occurs when the list of items changes.</field>
/// <field name="loadingItems" type="wijmo.Event">Occurs before the list items are generated.</field>
/// <field name="loadedItems" type="wijmo.Event">Occurs after the list items are generated.</field>
/// <field name="itemChecked" type="wijmo.Event">Occurs when the current item is checked or unchecked by the user.
/// 
/// This event is raised when the @see:checkedMemberPath is set to the name of a
/// property to add CheckBoxes to each item in the control.
/// 
/// Use the @see:selectedItem property to retrieve the item that was checked or
/// unchecked.</field>
/// <field name="checkedItemsChanged" type="wijmo.Event">Occurs when the value of the @see:checkedItems property changes.</field>
/// <field name="formatItem" type="wijmo.Event">Occurs when an element representing a list item has been created.
/// 
/// This event can be used to format list items for display. It is similar
/// in purpose to the @see:itemFormatter property, but has the advantage
/// of allowing multiple independent handlers.</field>
this._wjClassName = 'wijmo.input.ListBox';
this.selectedIndexChanged = new wijmo.Event('wijmo.EventArgs');
this.itemsChanged = new wijmo.Event('wijmo.EventArgs');
this.loadingItems = new wijmo.Event('wijmo.EventArgs');
this.loadedItems = new wijmo.Event('wijmo.EventArgs');
this.itemChecked = new wijmo.Event('wijmo.EventArgs');
this.checkedItemsChanged = new wijmo.Event('wijmo.EventArgs');
this.formatItem = new wijmo.Event('wijmo.grid.FormatItemEventArgs');
_wjReownEvents(this);
}
wijmo.input.ListBox.prototype = new wijmo.Control();
wijmo.input.ListBox.prototype.refresh = function() {
/// <summary>Refreshes the list.</summary>
}
wijmo.input.ListBox.prototype.getDisplayValue = function(index) {
/// <summary>Gets the string displayed for the item at a given index.
/// 
/// The string may be plain text or HTML, depending on the setting
/// of the @see:isContentHtml property.</summary>
/// <param name="index" type="Number" optional="false">The index of the item.</param>
/// <returns type="String"></returns>
}
wijmo.input.ListBox.prototype.getDisplayText = function(index) {
/// <summary>Gets the text displayed for the item at a given index (as plain text).</summary>
/// <param name="index" type="Number" optional="false">The index of the item.</param>
/// <returns type="String"></returns>
}
wijmo.input.ListBox.prototype.showSelection = function() {
/// <summary>Highlights the selected item and scrolls it into view.</summary>
}
wijmo.input.ListBox.prototype.getItemChecked = function(index) {
/// <summary>Gets the checked state of an item on the list.
/// 
/// This method is applicable only on multi-select ListBoxes
/// (see the @see:checkedMemberPath property).</summary>
/// <param name="index" type="Number" optional="false">Item index.</param>
/// <returns type="Boolean"></returns>
}
wijmo.input.ListBox.prototype.setItemChecked = function(index, checked) {
/// <summary>Sets the checked state of an item on the list.
/// 
/// This method is applicable only on multi-select ListBoxes
/// (see the @see:checkedMemberPath property).</summary>
/// <param name="index" type="Number" optional="false">Item index.</param>
/// <param name="checked" type="Boolean" optional="false">Item's new checked state.</param>
}
wijmo.input.ListBox.prototype.toggleItemChecked = function(index) {
/// <summary>Toggles the checked state of an item on the list.
/// This method is applicable only to multi-select ListBoxes
/// (see the @see:checkedMemberPath property).</summary>
/// <param name="index" type="Number" optional="false">Item index.</param>
}
wijmo.input.ListBox.prototype.onSelectedIndexChanged = function(e) {
/// <summary>Raises the @see:selectedIndexChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.ListBox.prototype.onItemsChanged = function(e) {
/// <summary>Raises the @see:itemsChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.ListBox.prototype.onLoadingItems = function(e) {
/// <summary>Raises the @see:loadingItems event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.ListBox.prototype.onLoadedItems = function(e) {
/// <summary>Raises the @see:loadedItems event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.ListBox.prototype.onItemChecked = function(e) {
/// <summary>Raises the @see:itemChecked event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.ListBox.prototype.onCheckedItemsChanged = function(e) {
/// <summary>Raises the @see:checkedItemsChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.ListBox.prototype.onFormatItem = function(e) {
/// <summary>Raises the @see:formatItem event.</summary>
/// <param name="e" type="wijmo.grid.FormatItemEventArgs" optional="false">@see:FormatItemEventArgs that contains the event data.</param>
}
wijmo.input.ListBox._wjDict = _wjMerge(wijmo.Control._wjDict, {itemsSource:2,collectionView:2,isContentHtml:2,itemFormatter:2,displayMemberPath:2,selectedValuePath:2,checkedMemberPath:2,selectedIndex:2,selectedItem:2,selectedValue:2,maxHeight:2,checkedItems:2,selectedIndexChanged:1,itemsChanged:1,loadingItems:1,loadedItems:1,itemChecked:1,checkedItemsChanged:1,formatItem:1});
wijmo.input.ListBox._wjClass = true;
wijmo.input.FormatItemEventArgs = function(index, data, item) {
/// <summary>Initializes a new instance of the @see:FormatItemEventArgs class.</summary>
/// <param name="index" type="Number" optional="false">Index of the item being formatted.</param>
/// <param name="data" type="Object" optional="false">Data item being formatted.</param>
/// <param name="item" type="HTMLElement" optional="false">Element that represents the list item to be formatted.</param>
/// <returns type="wijmo.grid.FormatItemEventArgs"></returns>
/// <field name="index" type="Number">Gets the index of the data item in the list.</field>
/// <field name="data" type="Object">Gets the data item being formatted.</field>
/// <field name="item" type="HTMLElement">Gets a reference to the element that represents the list item to be formatted.</field>
this._wjClassName = 'wijmo.input.FormatItemEventArgs';
_wjReownEvents(this);
}
wijmo.input.FormatItemEventArgs.prototype = new wijmo.EventArgs();
wijmo.input.FormatItemEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {index:2,data:2,item:2});
wijmo.input.FormatItemEventArgs._wjClass = true;
wijmo.input.ComboBox = function(element, options) {
/// <summary>Initializes a new instance of the @see:ComboBox class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.ComboBox"></returns>
/// <field name="itemsSource" type="Object">Gets or sets the array or @see:ICollectionView object that contains the items to select from.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView object used as the item source.</field>
/// <field name="displayMemberPath" type="String">Gets or sets the name of the property to use as the visual representation of the items.</field>
/// <field name="headerPath" type="String">Gets or sets the name of a property to use for getting the value displayed in the
/// control's input element.
/// 
/// The default value for this property is null, which causes the control to display
/// the same content in the input element as in the selected item of the drop-down list.
/// 
/// Use this property if you want to de-couple the value shown in the input element
/// from the values shown in the drop-down list. For example, the input element could
/// show an item's name and the drop-down list could show additional detail.</field>
/// <field name="selectedValuePath" type="String">Gets or sets the name of the property used to get the
/// @see:selectedValue from the @see:selectedItem.</field>
/// <field name="isContentHtml" type="Boolean">Gets or sets a value indicating whether the drop-down list displays
/// items as plain text or as HTML.</field>
/// <field name="itemFormatter" type="Function">Gets or sets a function used to customize the values shown in the
/// drop-down list.
/// The function takes two arguments, the item index and the default
/// text or html, and returns the new text or html to display.
/// 
/// If the formatting function needs a scope (i.e. a meaningful 'this'
/// value), then remember to set the filter using the 'bind' function to
/// specify the 'this' object. For example:
/// 
/// <pre>
///   comboBox.itemFormatter = customItemFormatter.bind(this);
///   function customItemFormatter(index, content) {
///     if (this.makeItemBold(index)) {
///       content = '&lt;b&gt;' + content + '&lt;/b&gt;';
///     }
///     return content;
///   }
/// </pre></field>
/// <field name="selectedIndex" type="Number">Gets or sets the index of the currently selected item in the drop-down list.</field>
/// <field name="selectedItem" type="Object">Gets or sets the item that is currently selected in the drop-down list.</field>
/// <field name="selectedValue" type="Object">Gets or sets the value of the @see:selectedItem, obtained using the @see:selectedValuePath.</field>
/// <field name="isEditable" type="Boolean">Gets or sets a value that enables or disables editing of the text
/// in the input element of the @see:ComboBox (defaults to false).</field>
/// <field name="maxDropDownHeight" type="Number">Gets or sets the maximum height of the drop-down list.</field>
/// <field name="maxDropDownWidth" type="Number">Gets or sets the maximum width of the drop-down list.
/// 
/// The width of the drop-down list is also limited by the width of
/// the control itself (that value represents the drop-down's minimum width).</field>
/// <field name="selectedIndexChanged" type="wijmo.Event">Occurs when the value of the @see:selectedIndex property changes.</field>
/// <field name="listBox" type="wijmo.input.ListBox">Gets the @see:ListBox control shown in the drop-down.</field>
this._wjClassName = 'wijmo.input.ComboBox';
this.selectedIndexChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.ComboBox.prototype = new wijmo.input.DropDown();
wijmo.input.ComboBox.prototype.getDisplayText = function(index) {
/// <summary>Gets the string displayed in the input element for the item at a
/// given index (always plain text).</summary>
/// <param name="index" type="Number" optional="true">The index of the item to retrieve the text for.</param>
/// <returns type="String"></returns>
}
wijmo.input.ComboBox.prototype.onSelectedIndexChanged = function(e) {
/// <summary>Raises the @see:selectedIndexChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.ComboBox.prototype.indexOf = function(text, fullMatch) {
/// <summary>Gets the index of the first item that matches a given string.</summary>
/// <param name="text" type="String" optional="false">The text to search for.</param>
/// <param name="fullMatch" type="Boolean" optional="false">Whether to look for a full match or just the start of the string.</param>
/// <returns type="Number">The index of the item, or -1 if not found.</returns>
}
wijmo.input.ComboBox._wjDict = _wjMerge(wijmo.input.DropDown._wjDict, {itemsSource:2,collectionView:2,displayMemberPath:2,headerPath:2,selectedValuePath:2,isContentHtml:2,itemFormatter:2,selectedIndex:2,selectedItem:2,selectedValue:2,isEditable:2,maxDropDownHeight:2,maxDropDownWidth:2,selectedIndexChanged:1,listBox:2});
wijmo.input.ComboBox._wjClass = true;
wijmo.input.AutoComplete = function(element, options) {
/// <summary>Initializes a new instance of the @see:AutoComplete class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.AutoComplete"></returns>
/// <field name="minLength" type="Number">Gets or sets the minimum input length to trigger auto-complete suggestions.</field>
/// <field name="maxItems" type="Number">Gets or sets the maximum number of items to display in the drop-down list.</field>
/// <field name="delay" type="Number">Gets or sets the delay, in milliseconds, between when a keystroke occurs
/// and when the search is performed.</field>
/// <field name="searchMemberPath" type="String">Gets or sets a string containing a comma-separated list of properties to use
/// when searching for items.
/// 
/// By default, the @see:AutoComplete control searches for matches against the
/// property specified by the @see:displayMemberPath property. The @see:searchMemberPath
/// property allows you to search using additional properties.
/// 
/// For example, the code below would cause the control to display the company name
/// and search by company name, symbol, and country:
/// 
/// <pre>var ac = new wijmo.input.AutoComplete('#autoComplete', {
///   itemsSource: companies,
///   displayMemberPath: 'name',
///   searchMemberPath: 'symbol,country'
/// });</pre></field>
/// <field name="itemsSourceFunction" type="Function">Gets or sets a function that provides list items dynamically as the user types.
/// 
/// The function takes three parameters:
/// <ul>
///     <li>the query string typed by the user</li>
///     <li>the maximum number of items to return</li>
///     <li>the callback function to call when the results become available</li>
/// </ul>
/// 
/// For example:
/// <pre>
/// autoComplete.itemsSourceFunction = function (query, max, callback) {
///   // get results from the server
///   var params = { query: query, max: max };
///   $.getJSON('companycatalog.ashx', params, function (response) {
///     // return results to the control
///     callback(response);
///   });
/// };
/// </pre></field>
/// <field name="cssMatch" type="String">Gets or sets the name of the CSS class used to highlight any parts
/// of the content that match the search terms.</field>
this._wjClassName = 'wijmo.input.AutoComplete';
_wjReownEvents(this);
}
wijmo.input.AutoComplete.prototype = new wijmo.input.ComboBox();
wijmo.input.AutoComplete._wjDict = _wjMerge(wijmo.input.ComboBox._wjDict, {minLength:2,maxItems:2,delay:2,searchMemberPath:2,itemsSourceFunction:2,cssMatch:2});
wijmo.input.AutoComplete._wjClass = true;
wijmo.input.Menu = function(element, options) {
/// <summary>Initializes a new instance of the @see:Menu class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.Menu"></returns>
/// <field name="header" type="String">Gets or sets the HTML text shown in the @see:Menu element.</field>
/// <field name="command" type="Object">Gets or sets the command to execute when an item is clicked.
/// 
/// Commands are objects that implement two methods:
/// <ul>
///  <li><b>executeCommand(parameter)</b> This method executes the command.</li>
///  <li><b>canExecuteCommand(parameter)</b> This method returns a Boolean value
///      that determines whether the controller can execute the command.
///      If this method returns false, the menu option is disabled.</li>
/// </ul>
/// 
/// You can also set commands on individual items using the @see:commandPath
/// property.</field>
/// <field name="commandPath" type="String">Gets or sets the name of the property that contains the command to
/// execute when the user clicks an item.
/// 
/// Commands are objects that implement two methods:
/// <ul>
///  <li><b>executeCommand(parameter)</b> This method executes the command.</li>
///  <li><b>canExecuteCommand(parameter)</b> This method returns a Boolean value
///      that determines whether the controller can execute the command.
///      If this method returns false, the menu option is disabled.</li>
/// </ul></field>
/// <field name="commandParameterPath" type="String">Gets or sets the name of the property that contains a parameter to use with
/// the command specified by the @see:commandPath property.</field>
/// <field name="isButton" type="Boolean">Gets or sets a value that determines whether this @see:Menu should act
/// as a split button instead of a regular menu.
/// 
/// The difference between regular menus and split buttons is what happens
/// when the user clicks the menu header.
/// In regular menus, clicking the header shows or hides the menu options.
/// In split buttons, clicking the header raises the @see:Menu.itemClicked
/// event and/or invokes the command associated with the last option selected by
/// the user as if the user had picked the item from the drop-down list.
/// 
/// If you want to differentiate between clicks on menu items and the button
/// part of a split button, check the value of the @see:Menu.isDroppedDown property
/// of the event sender. If that is true, then a menu item was clicked; if it
/// is false, then the button was clicked.
/// 
/// For example, the code below implements a split button that uses the drop-down
/// list only to change the default item/command, and triggers actions only when
/// the button is clicked:
/// 
/// <pre>&lt;-- view --&gt;
/// &lt;wj-menu is-button="true" header="Run" value="browser"
///   item-clicked="itemClicked(s, e)"&gt;
///   &lt;wj-menu-item value="'Internet Explorer'"&gt;Internet Explorer&lt;/wj-menu-item&gt;
///   &lt;wj-menu-item value="'Chrome'"&gt;Chrome&lt;/wj-menu-item&gt;
///   &lt;wj-menu-item value="'FireFox'"&gt;FireFox&lt;/wj-menu-item&gt;
///   &lt;wj-menu-item value="'Safari'"&gt;Safari&lt;/wj-menu-item&gt;
///   &lt;wj-menu-item value="'Opera'"&gt;Opera&lt;/wj-menu-item&gt;
/// &lt;/wj-menu&gt;
/// 
/// // controller
/// $scope.browser = 'Internet Explorer';
/// $scope.itemClicked = function (s, e) {
///   // if not dropped down, click was on the button
///   if (!s.isDroppedDown) {
///     alert('running ' + $scope.browser);
///   }
/// }</pre></field>
/// <field name="owner" type="HTMLElement">Gets or sets the element that owns this @see:Menu.
/// 
/// This variable is set by the wj-context-menu directive in case a single
/// menu is used as a context menu for several different elements.</field>
/// <field name="itemClicked" type="wijmo.Event">Occurs when the user picks an item from the menu.
/// 
/// The handler can determine which item was picked by reading the event sender's
/// @see:selectedIndex property.</field>
this._wjClassName = 'wijmo.input.Menu';
this.itemClicked = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.Menu.prototype = new wijmo.input.ComboBox();
wijmo.input.Menu.prototype.onItemClicked = function(e) {
/// <summary>Raises the @see:itemClicked event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.Menu._wjDict = _wjMerge(wijmo.input.ComboBox._wjDict, {header:2,command:2,commandPath:2,commandParameterPath:2,isButton:2,owner:2,itemClicked:1});
wijmo.input.Menu._wjClass = true;
wijmo.input.MultiSelect = function(element, options) {
/// <summary>Initializes a new instance of the @see:MultiSelect class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.MultiSelect"></returns>
/// <field name="checkedMemberPath" type="String">Gets or sets the name of the property used to control the checkboxes
/// placed next to each item.</field>
/// <field name="maxHeaderItems" type="Number">Gets or sets the maximum number of items to display on the control header.
/// 
/// If no items are selected, the header displays the text specified by the
/// @see:placeholder property.
/// 
/// If the number of selected items is smaller than or equal to the value of the
/// @see:maxHeaderItems property, the selected items are shown in the header.
/// 
/// If the number of selected items is greater than @see:maxHeaderItems, the
/// header displays the selected item count instead.</field>
/// <field name="headerFormat" type="String">Gets or sets the format string used to create the header content
/// when the control has more than @see:maxHeaderItems items checked.
/// 
/// The format string may contain the '{count}' replacement string
/// which gets replaced with the number of items currently checked.
/// The default value for this property in the English culture is
/// '{count:n0} items selected'.</field>
/// <field name="headerFormatter" type="Function">Gets or sets a function that gets the HTML in the control header.
/// 
/// By default, the control header content is determined based on the
/// @see:placeholder, @see:maxHeaderItems, and on the current selection.
/// 
/// You may customize the header content by specifying a function that
/// returns a custom string based on whatever criteria your application
/// requires.</field>
/// <field name="checkedItems" type="Object[]">Gets or sets an array containing the items that are currently checked.</field>
/// <field name="checkedItemsChanged" type="wijmo.Event">Occurs when the value of the @see:checkedItems property changes.</field>
this._wjClassName = 'wijmo.input.MultiSelect';
this.checkedItemsChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.MultiSelect.prototype = new wijmo.input.ComboBox();
wijmo.input.MultiSelect.prototype.onCheckedItemsChanged = function(e) {
/// <summary>Raises the @see:checkedItemsChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.MultiSelect._wjDict = _wjMerge(wijmo.input.ComboBox._wjDict, {checkedMemberPath:2,maxHeaderItems:2,headerFormat:2,headerFormatter:2,checkedItems:2,checkedItemsChanged:1});
wijmo.input.MultiSelect._wjClass = true;
wijmo.input.PopupTrigger = {
// No triggers; popups must be shown and hidden using code.
None: 0,
// Show or hide when the owner element is clicked.
Click: 1,
// Hide the popup when it loses focus.
Blur: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.input, {
// Specifies actions that trigger showing and hiding @see:Popup controls.
PopupTrigger: undefined
});

wijmo.input.Popup = function(element, options) {
/// <summary>Initializes a new instance of the @see:Popup class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.Popup"></returns>
/// <field name="owner" type="HTMLElement">Gets or sets the element that owns this @see:Popup.
/// 
/// If the @see:owner is null, the @see:Popup behaves like a dialog.
/// It is centered on the screen and must be shown using the
/// @see:show method.</field>
/// <field name="content" type="HTMLElement">Gets or sets the HTML element contained in this @see:Popup.</field>
/// <field name="showTrigger" type="wijmo.input.PopupTrigger">Gets or sets the actions that show the @see:Popup.
/// 
/// By default, the @see:showTrigger property is set to @see:PopupTrigger.Click,
/// which causes the popup to appear when the user clicks the owner element.
/// 
/// If you set the @see:showTrigger property to @see:PopupTrigger.None, the popup
/// will be shown only when the @see:show method is called.</field>
/// <field name="hideTrigger" type="wijmo.input.PopupTrigger">Gets or sets the actions that hide the @see:Popup.
/// 
/// By default, the @see:hideTrigger property is set to @see:PopupTrigger.Blur,
/// which hides the popup when it loses focus.
/// 
/// If you set the @see:hideTrigger property to @see:PopupTrigger.Click, the popup
/// will be hidden only when the owner element is clicked.
/// 
/// If you set the @see:hideTrigger property to @see:PopupTrigger.None, the popup
/// will be hidden only when the @see:hide method is called.</field>
/// <field name="fadeIn" type="Boolean">Gets or sets a value that determines whether the @see:Popup should
/// use a fade-out animation when it is shown.</field>
/// <field name="fadeOut" type="Boolean">Gets or sets a value that determines whether the @see:Popup should
/// use a fade-out animation when it is hidden.</field>
/// <field name="modal" type="Boolean">Gets or sets a value that determines whether the @see:Popup should
/// be displayed as a modal dialog.
/// 
/// Modal dialogs show a dark backdrop that makes the @see:Popup stand
/// out from other content on the page.
/// 
/// If you want to make a dialog truly modal, also set the @see:Popup.hideTrigger
/// property to @see:PopupTrigger.None, so users won't be able to click the
/// backdrop to dismiss the dialog. In this case, the dialog will close only
/// if the @see:Popup.hide method is called or if the user presses the Escape
/// key.</field>
/// <field name="dialogResult" type="Object">Gets or sets a value that can be used for handling the content of the @see:Popup
/// after it is hidden.
/// 
/// This property is set to null when the @see:Popup is displayed, and it can be
/// set in response to button click events or in the call to the @see:hide method.</field>
/// <field name="dialogResultEnter" type="Object">Gets or sets a value to be used as a @see:dialogResult when the user presses
/// the Enter key while the @see:Popup is visible.
/// 
/// If the user presses Enter and the @see:dialogResultEnter property is not null,
/// the popup checks whether all its child elements are in a valid state.
/// If so, the popup is closed and the @see:dialogResult property is set to
/// the value of the @see:dialogResultEnter property.
/// 
/// If the @see:Popup contains a submit button, pressing the Enter key also checks
/// for validity and closes the dialog, returning 'submit' as the @see:dialogResult.</field>
/// <field name="isVisible" type="Boolean">Gets a value that determines whether the @see:Popup is currently visible.</field>
/// <field name="showing" type="wijmo.Event">Occurs before the @see:Popup is shown.</field>
/// <field name="shown" type="wijmo.Event">Occurs after the @see:Popup has been shown.</field>
/// <field name="hiding" type="wijmo.Event">Occurs before the @see:Popup is hidden.</field>
/// <field name="hidden" type="wijmo.Event">Occurs after the @see:Popup has been hidden.</field>
this._wjClassName = 'wijmo.input.Popup';
this.showing = new wijmo.Event('wijmo.CancelEventArgs');
this.shown = new wijmo.Event('wijmo.EventArgs');
this.hiding = new wijmo.Event('wijmo.CancelEventArgs');
this.hidden = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.Popup.prototype = new wijmo.Control();
wijmo.input.Popup.prototype.show = function(modal, handleResult) {
/// <summary>Shows the @see:Popup.</summary>
/// <param name="modal" type="Boolean" optional="true">Whether to show the popup as a modal dialog. If provided, this
/// sets the value of the @see:modal property.</param>
/// <param name="handleResult" type="Function" optional="true">Callback invoked when the popup is hidden. If provided,
/// this should be a function that receives the popup as a parameter.
/// 
/// The <b>handleResult</b> callback allows callers to handle the result of modal
/// dialogs without attaching handlers to the @see:hidden event. For example,
/// the code below shows a dialog used to edit the current item in a
/// @see:CollectionView. The edits are committed or canceled depending on the
/// @see:Popup.dialogResult value. For example:
/// 
/// <pre>$scope.editCurrentItem = function () {
///   $scope.data.editItem($scope.data.currentItem);
///   $scope.itemEditor.show(true, function (e) {
///     if (e.dialogResult == 'wj-hide-ok') {
///       $scope.data.commitEdit();
///     } else {
///       $scope.data.cancelEdit();
///     }
///   });
/// }</pre></param>
}
wijmo.input.Popup.prototype.hide = function(dialogResult) {
/// <summary>Hides the @see:Popup.</summary>
/// <param name="dialogResult" type="Object" optional="true">Optional value assigned to the @see:dialogResult property
/// before closing the @see:Popup.</param>
}
wijmo.input.Popup.prototype.onShowing = function(e) {
/// <summary>Raises the @see:showing event.</summary>
/// <param name="e" type="wijmo.CancelEventArgs" optional="false"></param>
/// <returns type="Boolean"></returns>
}
wijmo.input.Popup.prototype.onShown = function(e) {
/// <summary>Raises the @see:shown event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.Popup.prototype.onHiding = function(e) {
/// <summary>Raises the @see:hiding event.</summary>
/// <param name="e" type="wijmo.CancelEventArgs" optional="false"></param>
/// <returns type="Boolean"></returns>
}
wijmo.input.Popup.prototype.onHidden = function(e) {
/// <summary>Raises the @see:hidden event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.Popup._wjDict = _wjMerge(wijmo.Control._wjDict, {owner:2,content:2,showTrigger:2,hideTrigger:2,fadeIn:2,fadeOut:2,modal:2,dialogResult:2,dialogResultEnter:2,isVisible:2,showing:1,shown:1,hiding:1,hidden:1});
wijmo.input.Popup._wjClass = true;
wijmo.input.InputDate = function(element, options) {
/// <summary>Initializes a new instance of the @see:InputDate class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.InputDate"></returns>
/// <field name="value" type="Date">Gets or sets the current date.</field>
/// <field name="text" type="String">Gets or sets the text shown on the control.</field>
/// <field name="selectionMode" type="wijmo.input.DateSelectionMode">Gets or sets a value that indicates whether users can select
/// days, months, or no values at all.
/// 
/// This property affects the behavior of the drop-down calendar,
/// but not the format used to display dates.
/// If you set @see:selectionMode to 'Month', you should normally
/// set the @see:format property to 'MMM yyyy' or some format that
/// does not include the day. For example:
/// 
/// <pre>var inputDate = new wijmo.input.InputDate('#el, {
///   selectionMode: 'Month',
///   format: 'MMM yyyy'
/// });</pre></field>
/// <field name="min" type="Date">Gets or sets the earliest date that the user can enter.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="max" type="Date">Gets or sets the latest date that the user can enter.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="format" type="String">Gets or sets the format used to display the selected date.
/// 
/// The format string is expressed as a .NET-style
/// <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
/// Date format string</a>.</field>
/// <field name="mask" type="String">Gets or sets a mask to use while editing.
/// 
/// The mask format is the same one that the @see:wijmo.input.InputMask
/// control uses.
/// 
/// If specified, the mask must be compatible with the value of
/// the @see:format property. For example, the mask '99/99/9999' can
/// be used for entering dates formatted as 'MM/dd/yyyy'.</field>
/// <field name="calendar" type="wijmo.input.Calendar">Gets a reference to the @see:Calendar control shown in the drop-down box.</field>
/// <field name="inputElement" type="HTMLInputElement">Gets the HTML input element hosted by the control.
/// 
/// Use this property in situations where you want to customize the
/// attributes of the input element.</field>
/// <field name="inputType" type="String">Gets or sets the "type" attribute of the HTML input element hosted by the control.
/// 
/// By default, this property is set to "tel", a value that causes mobile devices to
/// show a numeric keypad that includes a negative sign and a decimal separator.
/// 
/// Use this property to change the default setting if the default does not work well
/// for the current culture, device, or application. In those cases, try changing
/// the value to "number" or "text."
/// 
/// Note that input elements with type "number" prevent selection in Chrome and therefore
/// is not recommended. For more details, see this link:
/// http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome</field>
/// <field name="itemValidator" type="Function">Gets or sets a validator function to determine whether dates are valid for selection.
/// 
/// If specified, the validator function should take one parameter representing the
/// date to be tested, and should return false if the date is invalid and should not
/// be selectable.
/// 
/// For example, the code below prevents users from selecting dates that fall on
/// weekends:
/// <pre>
/// inputDate.itemValidator = function(date) {
///   var weekday = date.getDay();
///   return weekday != 0 && weekday != 6;
/// }
/// </pre></field>
/// <field name="itemFormatter" type="Function">Gets or sets a formatter function to customize dates in the drop-down calendar.
/// 
/// The formatter function can add any content to any date. It allows
/// complete customization of the appearance and behavior of the calendar.
/// 
/// If specified, the function takes two parameters:
/// <ul>
///     <li>the date being formatted </li>
///     <li>the HTML element that represents the date</li>
/// </ul>
/// 
/// For example, the code below shows weekends with a yellow background:
/// <pre>
/// inputDate.itemFormatter = function(date, element) {
///   var day = date.getDay();
///   element.style.backgroundColor = day == 0 || day == 6 ? 'yellow' : '';
/// }
/// </pre></field>
/// <field name="valueChanged" type="wijmo.Event">Occurs after a new date is selected.</field>
this._wjClassName = 'wijmo.input.InputDate';
this.valueChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.InputDate.prototype = new wijmo.input.DropDown();
wijmo.input.InputDate.prototype.onValueChanged = function(e) {
/// <summary>Raises the @see:valueChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.InputDate._wjDict = _wjMerge(wijmo.input.DropDown._wjDict, {value:2,text:2,selectionMode:2,min:2,max:2,format:2,mask:2,calendar:2,inputElement:2,inputType:2,itemValidator:2,itemFormatter:2,valueChanged:1});
wijmo.input.InputDate._wjClass = true;
wijmo.input.InputTime = function(element, options) {
/// <summary>Initializes a new instance of the @see:InputTime class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.InputTime"></returns>
/// <field name="inputElement" type="HTMLInputElement">Gets the HTML input element hosted by the control.
/// 
/// Use this property in situations where you want to customize the
/// attributes of the input element.</field>
/// <field name="inputType" type="String">Gets or sets the "type" attribute of the HTML input element hosted by the control.
/// 
/// By default, this property is set to "tel", a value that causes mobile devices to
/// show a numeric keypad that includes a negative sign and a decimal separator.
/// 
/// Use this property to change the default setting if the default does not work well
/// for the current culture, device, or application. In those cases, try changing
/// the value to "number" or "text."
/// 
/// Note that input elements with type "number" prevent selection in Chrome and therefore
/// is not recommended. For more details, see this link:
/// http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome</field>
/// <field name="value" type="Date">Gets or sets the current input time.</field>
/// <field name="text" type="String">Gets or sets the text shown in the control.</field>
/// <field name="min" type="Date">Gets or sets the earliest time that the user can enter.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="max" type="Date">Gets or sets the latest time that the user can enter.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="step" type="Number">Gets or sets the number of minutes between entries in the drop-down list.
/// 
/// The default value for this property is 15 minutes.
/// Setting it to null, zero, or any negative value disables the drop-down.</field>
/// <field name="format" type="String">Gets or sets the format used to display the selected time (see @see:Globalize).
/// 
/// The format string is expressed as a .NET-style
/// <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
/// time format string</a>.</field>
/// <field name="mask" type="String">Gets or sets a mask to use while the user is editing.
/// 
/// The mask format is the same used by the @see:wijmo.input.InputMask
/// control.
/// 
/// If specified, the mask must be compatible with the value of
/// the @see:format property. For example, you can use the mask '99:99 >LL'
/// for entering short times (format 't').</field>
/// <field name="valueChanged" type="wijmo.Event">Occurs after a new time is selected.</field>
this._wjClassName = 'wijmo.input.InputTime';
this.valueChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.InputTime.prototype = new wijmo.input.ComboBox();
wijmo.input.InputTime.prototype.onValueChanged = function(e) {
/// <summary>Raises the @see:valueChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.InputTime._wjDict = _wjMerge(wijmo.input.ComboBox._wjDict, {inputElement:2,inputType:2,value:2,text:2,min:2,max:2,step:2,format:2,mask:2,valueChanged:1});
wijmo.input.InputTime._wjClass = true;
wijmo.input.InputDateTime = function(element, options) {
/// <summary>Initializes a new instance of the @see:InputDateTime class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.InputDateTime"></returns>
/// <field name="timeMin" type="Date">Gets or sets the earliest time that the user can enter.</field>
/// <field name="timeMax" type="Date">Gets or sets the latest time that the user can enter.</field>
/// <field name="timeFormat" type="String">Gets or sets the format used to display times in the drop-down list.
/// 
/// This property does not affect the value shown in the control's input element.
/// That value is formatted using the @see:format property.
/// 
/// The format string is expressed as a .NET-style
/// <a href="http://msdn.microsoft.com/en-us/library/8kb3ddd4(v=vs.110).aspx" target="_blank">
/// time format string</a>.</field>
/// <field name="timeStep" type="Number">Gets or sets the number of minutes between entries in the drop-down list of times.</field>
this._wjClassName = 'wijmo.input.InputDateTime';
_wjReownEvents(this);
}
wijmo.input.InputDateTime.prototype = new wijmo.input.InputDate();
wijmo.input.InputDateTime.controlTemplate = undefined;
intellisense.annotate(wijmo.input.InputDateTime, {
// Gets or sets the template used to instantiate @see:InputDateTime controls.
controlTemplate: undefined
});
wijmo.input.InputDateTime._wjDict = _wjMerge(wijmo.input.InputDate._wjDict, {timeMin:2,timeMax:2,timeFormat:2,timeStep:2});
wijmo.input.InputDateTime._wjClass = true;
wijmo.input.InputNumber = function(element, options) {
/// <summary>Initializes a new instance of the @see:InputNumber class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.InputNumber"></returns>
/// <field name="inputElement" type="HTMLInputElement">Gets the HTML input element hosted by the control.
/// 
/// Use this property in situations where you want to customize the
/// attributes of the input element.</field>
/// <field name="inputType" type="String">Gets or sets the "type" attribute of the HTML input element hosted by the control.
/// 
/// By default, this property is set to "tel", a value that causes mobile devices to
/// show a numeric keypad that includes a negative sign and a decimal separator.
/// 
/// Use this property to change the default setting if the default does not work well
/// for the current culture, device, or application. In those cases, try changing
/// the value to "number" or "text."
/// 
/// Note that input elements with type "number" prevent selection in Chrome and therefore
/// is not recommended. For more details, see this link:
/// http://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome</field>
/// <field name="value" type="Number">Gets or sets the current value of the control.</field>
/// <field name="isRequired" type="Boolean">Gets or sets a value indicating whether the control value must be a number or whether it
/// can be set to null (by deleting the content of the control).</field>
/// <field name="isReadOnly" type="Boolean">Gets or sets a value that indicates whether the user can modify
/// the control value using the mouse and keyboard.</field>
/// <field name="min" type="Number">Gets or sets the smallest number that the user can enter.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="max" type="Number">Gets or sets the largest number that the user can enter.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="step" type="Number">Gets or sets the amount to add or subtract to the @see:value property
/// when the user clicks the spinner buttons.</field>
/// <field name="format" type="String">Gets or sets the format used to display the number being edited (see @see:Globalize).
/// 
/// The format string is expressed as a .NET-style
/// <a href="http://msdn.microsoft.com/en-us/library/dwhawy9k(v=vs.110).aspx" target="_blank">
/// standard numeric format string</a>.</field>
/// <field name="text" type="String">Gets or sets the text shown in the control.</field>
/// <field name="placeholder" type="String">Gets or sets the string shown as a hint when the control is empty.</field>
/// <field name="showSpinner" type="Boolean">Gets or sets a value indicating whether the control displays spinner buttons
/// to increment or decrement the value (the step property must be set to a
/// value other than zero).</field>
/// <field name="textChanged" type="wijmo.Event">Occurs when the value of the @see:text property changes.</field>
/// <field name="valueChanged" type="wijmo.Event">Occurs when the value of the @see:value property changes.</field>
this._wjClassName = 'wijmo.input.InputNumber';
this.textChanged = new wijmo.Event('wijmo.EventArgs');
this.valueChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.InputNumber.prototype = new wijmo.Control();
wijmo.input.InputNumber.prototype.selectAll = function() {
/// <summary>Sets the focus to the control and selects all its content.</summary>
}
wijmo.input.InputNumber.prototype.onTextChanged = function(e) {
/// <summary>Raises the @see:textChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.InputNumber.prototype.onValueChanged = function(e) {
/// <summary>Raises the @see:valueChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.InputNumber.controlTemplate = undefined;
intellisense.annotate(wijmo.input.InputNumber, {
// Gets or sets the template used to instantiate @see:InputNumber controls.
controlTemplate: undefined
});
wijmo.input.InputNumber._wjDict = _wjMerge(wijmo.Control._wjDict, {inputElement:2,inputType:2,value:2,isRequired:2,isReadOnly:2,min:2,max:2,step:2,format:2,text:2,placeholder:2,showSpinner:2,textChanged:1,valueChanged:1});
wijmo.input.InputNumber._wjClass = true;
wijmo.input.InputMask = function(element, options) {
/// <summary>Initializes a new instance of the @see:InputMask class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.InputMask"></returns>
/// <field name="inputElement" type="HTMLInputElement">Gets the HTML input element hosted by the control.
/// 
/// Use this property in situations where you want to customize the
/// attributes of the input element.</field>
/// <field name="value" type="String">Gets or sets the text currently shown in the control.</field>
/// <field name="rawValue" type="String">Gets or sets the raw value of the control (excluding mask literals).
/// 
/// The raw value of the control excludes prompt and literal characters.
/// For example, if the @see:mask property is set to "AA-9999" and the
/// user enters the value "AB-1234", the @see:rawValue property will return
/// "AB1234", excluding the hyphen that is part of the mask.</field>
/// <field name="mask" type="String">Gets or sets the mask used to validate the input as the user types.
/// 
/// The mask is defined as a string with one or more of the masking
/// characters listed in the @see:InputMask topic.</field>
/// <field name="promptChar" type="String">Gets or sets the symbol used to show input positions in the control.</field>
/// <field name="placeholder" type="String">Gets or sets the string shown as a hint when the control is empty.</field>
/// <field name="maskFull" type="Boolean">Gets a value that indicates whether the mask has been completely filled.</field>
/// <field name="isRequired" type="Boolean">Gets or sets a value indicating whether the control value must be a number or whether it
/// can be set to null (by deleting the content of the control).</field>
/// <field name="valueChanged" type="wijmo.Event">Occurs when the value of the @see:value property changes.</field>
this._wjClassName = 'wijmo.input.InputMask';
this.valueChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.InputMask.prototype = new wijmo.Control();
wijmo.input.InputMask.prototype.selectAll = function() {
/// <summary>Sets the focus to the control and selects all its content.</summary>
}
wijmo.input.InputMask.prototype.onValueChanged = function(e) {
/// <summary>Raises the @see:valueChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.InputMask.controlTemplate = undefined;
intellisense.annotate(wijmo.input.InputMask, {
// Gets or sets the template used to instantiate @see:InputMask controls.
controlTemplate: undefined
});
wijmo.input.InputMask._wjDict = _wjMerge(wijmo.Control._wjDict, {inputElement:2,value:2,rawValue:2,mask:2,promptChar:2,placeholder:2,maskFull:2,isRequired:2,valueChanged:1});
wijmo.input.InputMask._wjClass = true;
wijmo.input.InputColor = function(element, options) {
/// <summary>Initializes a new instance of the @see:InputColor class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.input.InputColor"></returns>
/// <field name="value" type="String">Gets or sets the current color.</field>
/// <field name="text" type="String">Gets or sets the text shown on the control.</field>
/// <field name="showAlphaChannel" type="Boolean">Gets or sets a value indicating whether the @see:ColorPicker allows users
/// to edit the color's alpha channel (transparency).</field>
/// <field name="colorPicker" type="wijmo.input.ColorPicker">Gets a reference to the @see:ColorPicker control shown in the drop-down.</field>
/// <field name="valueChanged" type="wijmo.Event">Occurs after a new color is selected.</field>
this._wjClassName = 'wijmo.input.InputColor';
this.valueChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.input.InputColor.prototype = new wijmo.input.DropDown();
wijmo.input.InputColor.prototype.onValueChanged = function(e) {
/// <summary>Raises the @see:valueChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.input.InputColor._wjDict = _wjMerge(wijmo.input.DropDown._wjDict, {value:2,text:2,showAlphaChannel:2,colorPicker:2,valueChanged:1});
wijmo.input.InputColor._wjClass = true;
wijmo.chart = wijmo.chart || { _wjModule: true };
wijmo.chart.DataPoint = function(x, y) {
/// <summary>Initializes a new instance of the @see:DataPoint class.</summary>
/// <param name="x" type="Object" optional="true">X coordinate of the new DataPoint.</param>
/// <param name="y" type="Object" optional="true">Y coordinate of the new DataPoint.</param>
/// <returns type="wijmo.chart.DataPoint"></returns>
/// <field name="x" type="Object">Gets or sets X coordinate value of this @see:DataPoint.</field>
/// <field name="y" type="Object">Gets or sets Y coordinate value of this @see:DataPoint.</field>
this._wjClassName = 'wijmo.chart.DataPoint';
_wjReownEvents(this);
}
wijmo.chart.DataPoint._wjDict = _wjMerge({}, {});
wijmo.chart.DataPoint._wjClass = true;
wijmo.chart.RenderEventArgs = function(engine) {
/// <summary>Initializes a new instance of the @see:RenderEventArgs class.</summary>
/// <param name="engine" type="wijmo.chart.IRenderEngine" optional="false">(@see:IRenderEngine) The rendering engine to use.</param>
/// <returns type="wijmo.chart.RenderEventArgs"></returns>
/// <field name="engine" type="wijmo.chart.IRenderEngine">Gets the @see:IRenderEngine object to use for rendering the chart elements.</field>
this._wjClassName = 'wijmo.chart.RenderEventArgs';
_wjReownEvents(this);
}
wijmo.chart.RenderEventArgs.prototype = new wijmo.EventArgs();
wijmo.chart.RenderEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {engine:2});
wijmo.chart.RenderEventArgs._wjClass = true;
wijmo.chart.ImageFormat = {
// Gets the W3C Portable Network Graphics (PNG) image format.
Png: 0,
// Gets the Joint Photographic Experts Group (JPEG) image format.
Jpeg: 1,
// Gets the Scalable Vector Graphics(SVG) image format.
Svg: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the format of the image with embed base64-encoded binary data.
ImageFormat: undefined
});

wijmo.chart.FlexChartBase = function() {
/// <summary>The @see:FlexChartBase control from which the FlexChart and FlexPie derive.</summary>
/// <returns type="wijmo.chart.FlexChartBase"></returns>
/// <field name="itemsSource" type="Object">Gets or sets the array or @see:ICollectionView object that contains the data used to create the chart.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView object that contains the chart data.</field>
/// <field name="palette" type="String[]">Gets or sets an array of default colors to use for displaying each series.
/// 
/// The array contains strings that represents CSS colors. For example:
/// <pre>
/// // use colors specified by name
/// chart.palette = ['red', 'green', 'blue'];
/// // or use colors specified as rgba-values
/// chart.palette = [
///   'rgba(255,0,0,1)',
///   'rgba(255,0,0,0.8)',
///   'rgba(255,0,0,0.6)',
///   'rgba(255,0,0,0.4)'];
/// </pre>
/// 
/// There is a set of predefined palettes in the @see:Palettes class that you can use, for example:
/// <pre>
/// chart.palette = wijmo.chart.Palettes.coral;
/// </pre></field>
/// <field name="plotMargin" type="Object">Gets or sets the plot margin in pixels.
/// 
/// The plot margin represents the area between the edges of the control
/// and the plot area.
/// 
/// By default, this value is calculated automatically based on the space
/// required by the axis labels, but you can override it if you want
/// to control the precise position of the plot area within the control
/// (for example, when aligning multiple chart controls on a page).
/// 
/// You may set this property to a numeric value or to a CSS-style
/// margin specification. For example:
/// 
/// <pre>
/// // set the plot margin to 20 pixels on all sides
/// chart.plotMargin = 20;
/// // set the plot margin for top, right, bottom, left sides
/// chart.plotMargin = '10 15 20 25';
/// // set the plot margin for top/bottom (10px) and left/right (20px)
/// chart.plotMargin = '10 20';
/// </pre></field>
/// <field name="legend" type="wijmo.chart.Legend">Gets or sets the chart legend.</field>
/// <field name="header" type="String">Gets or sets the text displayed in the chart header.</field>
/// <field name="footer" type="String">Gets or sets the text displayed in the chart footer.</field>
/// <field name="headerStyle" type="Object">Gets or sets the style of the chart header.</field>
/// <field name="footerStyle" type="Object">Gets or sets the style of the chart footer.</field>
/// <field name="selectionMode" type="wijmo.grid.SelectionMode">Gets or sets an enumerated value indicating whether or what is
/// selected when the user clicks the chart.</field>
/// <field name="itemFormatter" type="Function">Gets or sets the item formatter function that allows you to customize
/// the appearance of data points. See the Explorer sample's <a target="_blank"
/// href="http://demos.wijmo.com/5/Angular/Explorer/Explorer/#/chart/itemFormatter">
/// Item Formatter</a> for a demonstration.</field>
/// <field name="rendering" type="wijmo.Event">Occurs before the chart starts rendering data.</field>
/// <field name="rendered" type="wijmo.Event">Occurs after the chart finishes rendering.</field>
/// <field name="selectionChanged" type="wijmo.Event">Occurs after the selection changes, whether programmatically
/// or when the user clicks the chart. This is useful, for example,
/// when you want to update details in a textbox showing the current
/// selection.</field>
this._wjClassName = 'wijmo.chart.FlexChartBase';
this.rendering = new wijmo.Event('wijmo.chart.RenderEventArgs');
this.rendered = new wijmo.Event('wijmo.chart.RenderEventArgs');
this.selectionChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.chart.FlexChartBase.prototype = new wijmo.Control();
wijmo.chart.FlexChartBase.prototype.onRendered = function(e) {
/// <summary>Raises the @see:rendered event.</summary>
/// <param name="e" type="wijmo.chart.RenderEventArgs" optional="false">The @see:RenderEventArgs object used to render the chart.</param>
}
wijmo.chart.FlexChartBase.prototype.onRendering = function(e) {
/// <summary>Raises the @see:rendering event.</summary>
/// <param name="e" type="wijmo.chart.RenderEventArgs" optional="false">The @see:RenderEventArgs object used to render the chart.</param>
}
wijmo.chart.FlexChartBase.prototype.saveImageToFile = function(filename) {
/// <summary>Save chart to an image file.</summary>
/// <param name="filename" type="String" optional="false">The filename for the exported image file including extension. Supported types are PNG, JPEG, SVG.</param>
}
wijmo.chart.FlexChartBase.prototype.saveImageToDataUrl = function(format, done) {
/// <summary>Save chart to image data url.</summary>
/// <param name="format" type="wijmo.chart.ImageFormat" optional="false">The @see:ImageFormat for the exported image.</param>
/// <param name="done" type="Function" optional="false">A function to be called after data url is generated. The function gets passed the data url as its argument.</param>
}
wijmo.chart.FlexChartBase.prototype.refresh = function(fullUpdate) {
/// <summary>Refreshes the chart.</summary>
/// <param name="fullUpdate" type="Boolean" optional="true">A value indicating whether to update the control layout as well as the content.</param>
}
wijmo.chart.FlexChartBase.prototype.containsFocus = function() {
/// <summary>Checks whether this control contains the focused element.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.chart.FlexChartBase.prototype.onSelectionChanged = function(e) {
/// <summary>Raises the @see:selectionChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.chart.FlexChartBase.prototype._getColor = function(index) {
/// <summary>Gets a color from the palette by index.</summary>
/// <param name="index" type="Number" optional="false">The index of the color in the palette.</param>
/// <returns type="String"></returns>
}
wijmo.chart.FlexChartBase.prototype._getColorLight = function(index) {
/// <summary>Gets a lighter color from the palette by index.</summary>
/// <param name="index" type="Number" optional="false">The index of the color in the palette.</param>
/// <returns type="String"></returns>
}
wijmo.chart.FlexChartBase._wjDict = _wjMerge(wijmo.Control._wjDict, {itemsSource:2,collectionView:2,palette:2,plotMargin:2,legend:2,header:2,footer:2,headerStyle:2,footerStyle:2,selectionMode:2,itemFormatter:2,rendering:1,rendered:1,selectionChanged:1});
wijmo.chart.FlexChartBase._wjClass = true;
wijmo.chart.FlexPie = function(element, options) {
/// <summary>Initializes a new instance of the @see:FlexPie class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">A Javascript object containing initialization data for the control.</param>
/// <returns type="wijmo.chart.FlexPie"></returns>
/// <field name="binding" type="String">Gets or sets the name of the property that contains the chart values.</field>
/// <field name="bindingName" type="String">Gets or sets the name of the property that contains the name of the data items.</field>
/// <field name="startAngle" type="Number">Gets or sets the starting angle for the pie slices, in degrees.
/// 
/// Angles are measured clockwise, starting at the 9 o'clock position.</field>
/// <field name="offset" type="Number">Gets or sets the offset of the slices from the pie center.
/// 
/// The offset is measured as a fraction of the pie radius.</field>
/// <field name="innerRadius" type="Number">Gets or sets the size of the pie's inner radius.
/// 
/// The inner radius is measured as a fraction of the pie radius.
/// 
/// The default value for this property is zero, which creates
/// a pie. Setting this property to values greater than zero
/// creates pies with a hole in the middle, also known as
/// doughnut charts.</field>
/// <field name="reversed" type="Boolean">Gets or sets a value that determines whether angles are reversed
/// (counter-clockwise).
/// 
/// The default value is false, which causes angles to be measured in
/// the clockwise direction.</field>
/// <field name="selectedItemPosition" type="wijmo.chart.Position">Gets or sets the position of the selected slice.
/// 
/// Setting this property to a value other than 'None' causes
/// the pie to rotate when an item is selected.
/// 
/// Note that in order to select slices by clicking the chart,
/// you must set the @see:selectionMode property to "Point".</field>
/// <field name="selectedItemOffset" type="Number">Gets or sets the offset of the selected slice from the pie center.
/// 
/// Offsets are measured as a fraction of the pie radius.</field>
/// <field name="isAnimated" type="Boolean">Gets or sets a value indicating whether to use animation when items are selected.
/// 
/// See also the @see:selectedItemPosition and @see:selectionMode
/// properties.</field>
/// <field name="tooltip" type="wijmo.chart.ChartTooltip">Gets the chart's @see:Tooltip.</field>
/// <field name="dataLabel" type="wijmo.chart.PieDataLabel">Gets or sets the point data label.</field>
/// <field name="selectedIndex" type="Number">Gets or sets the index of the selected slice.</field>
this._wjClassName = 'wijmo.chart.FlexPie';
_wjReownEvents(this);
}
wijmo.chart.FlexPie.prototype = new wijmo.chart.FlexChartBase();
wijmo.chart.FlexPie.prototype.hitTest = function(pt, y) {
/// <summary>Gets a @see:HitTestInfo object with information about the specified point.</summary>
/// <param name="pt" type="Object" optional="false">The point to investigate, in window coordinates.</param>
/// <param name="y" type="Number" optional="true">The Y coordinate of the point (if the first parameter is a number).</param>
/// <returns type="wijmo.grid.HitTestInfo">A HitTestInfo object containing information about the point.</returns>
}
wijmo.chart.FlexPie._wjDict = _wjMerge(wijmo.chart.FlexChartBase._wjDict, {binding:2,bindingName:2,startAngle:2,offset:2,innerRadius:2,reversed:2,selectedItemPosition:2,selectedItemOffset:2,isAnimated:2,tooltip:2,dataLabel:2,selectedIndex:2});
wijmo.chart.FlexPie._wjClass = true;
wijmo.chart.Stacking = {
// No stacking. Each series object is plotted independently.
None: 0,
// Stacked charts show how each value contributes to the total.
Stacked: 1,
// 100% stacked charts show how each value contributes to the total with the relative size of
// each series representing its contribution to the total.
Stacked100pc: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies whether and how to stack the chart's data values.
Stacking: undefined
});

wijmo.chart.SelectionMode = {
// Select neither series nor data points when the user clicks the chart.
None: 0,
// Select the whole @see:Series when the user clicks it on the chart.
Series: 1,
// Select the data point when the user clicks it on the chart. Since Line, Area, Spline,
// and SplineArea charts do not render individual data points, nothing is selected with this
// setting on those chart types.
Point: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies what is selected when the user clicks the chart.
SelectionMode: undefined
});

wijmo.chart.FlexChartCore = function(element, options) {
/// <summary>Initializes a new instance of the @see:FlexChart class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.chart.FlexChartCore"></returns>
/// <field name="series" type="wijmo.collections.ObservableArray">Gets the collection of @see:Series objects.</field>
/// <field name="axes" type="wijmo.collections.ObservableArray">Gets the collection of @see:Axis objects.</field>
/// <field name="axisX" type="wijmo.chart.Axis">Gets or sets the main X axis.</field>
/// <field name="axisY" type="wijmo.chart.Axis">Gets or sets the main Y axis.</field>
/// <field name="plotAreas" type="wijmo.chart.PlotAreaCollection">Gets the collection of @see:PlotArea objects.</field>
/// <field name="binding" type="String">Gets or sets the name of the property that contains the Y values.</field>
/// <field name="bindingX" type="String">Gets or sets the name of the property that contains the X data values.</field>
/// <field name="symbolSize" type="Number">Gets or sets the size of the symbols used for all Series objects in this @see:FlexChart.
/// 
/// This property may be overridden by the symbolSize property on each @see:Series object.</field>
/// <field name="interpolateNulls" type="Boolean">Gets or sets a value that determines whether to interpolate
/// null values in the data.
/// 
/// If true, the chart interpolates the value of any missing data
/// based on neighboring points. If false, it leaves a break in
/// lines and areas at the points with null values.</field>
/// <field name="legendToggle" type="Boolean">Gets or sets a value indicating whether clicking legend items toggles the
/// series visibility in the chart.</field>
/// <field name="tooltip" type="wijmo.chart.ChartTooltip">Gets the chart @see:Tooltip object.
/// 
/// The tooltip content is generated using a template that may contain any of the following
/// parameters:
/// 
/// <ul>
///  <li><b>propertyName</b>:    Any property of the data object represented by the point.</li>
///  <li><b>seriesName</b>:      Name of the series that contains the data point (FlexChart only).</li>
///  <li><b>pointIndex</b>:      Index of the data point.</li>
///  <li><b>value</b>:           <b>Value</b> of the data point (y-value for @see:FlexChart, item value for @see:FlexPie).</li>
///  <li><b>x</b>:               <b>x</b>-value of the data point (FlexChart only).</li>
///  <li><b>y</b>:               <b>y</b>-value of the data point (FlexChart only).</li>
///  <li><b>name</b>:            <b>Name</b> of the data point (x-value for @see:FlexChart or legend entry for @see:FlexPie).</li>
/// </ul>
/// 
/// To modify the template, assign a new value to the tooltip's content property.
/// For example:
/// 
/// <pre>
/// chart.tooltip.content = '&lt;b&gt;{seriesName}&lt;/b&gt; ' +
///    '&lt;img src="resources/{x}.png"/&gt;&lt;br/&gt;{y}';
/// </pre>
/// 
/// You can disable chart tooltips by setting the template to an empty string.
/// 
/// You can also use the @see:tooltip property to customize tooltip parameters
/// such as @see:Tooltip.showDelay and @see:Tooltip.hideDelay:
/// 
/// <pre>
/// chart.tooltip.showDelay = 1000;
/// </pre>
/// 
/// See @see:ChartTooltip properties for more details and options.</field>
/// <field name="dataLabel" type="wijmo.chart.DataLabel">Gets or sets the point data label.</field>
/// <field name="selection" type="wijmo.chart.SeriesBase">Gets or sets the selected chart series.</field>
/// <field name="seriesVisibilityChanged" type="wijmo.Event">Occurs when the series visibility changes, for example when the legendToggle
/// property is set to true and the user clicks the legend.</field>
this._wjClassName = 'wijmo.chart.FlexChartCore';
this.seriesVisibilityChanged = new wijmo.Event('wijmo.chart.SeriesEventArgs');
_wjReownEvents(this);
}
wijmo.chart.FlexChartCore.prototype = new wijmo.chart.FlexChartBase();
wijmo.chart.FlexChartCore.prototype.onSeriesVisibilityChanged = function(e) {
/// <summary>Raises the @see:seriesVisibilityChanged event.</summary>
/// <param name="e" type="wijmo.chart.SeriesEventArgs" optional="false">The @see:SeriesEventArgs object that contains the event data.</param>
}
wijmo.chart.FlexChartCore.prototype.hitTest = function(pt, y) {
/// <summary>Gets a @see:HitTestInfo object with information about the specified point.</summary>
/// <param name="pt" type="Object" optional="false">The point to investigate, in window coordinates.</param>
/// <param name="y" type="Number" optional="true">The Y coordinate of the point (if the first parameter is a number).</param>
/// <returns type="wijmo.grid.HitTestInfo">A HitTestInfo object with information about the point.</returns>
}
wijmo.chart.FlexChartCore.prototype.pointToData = function(pt, y) {
/// <summary>Converts a @see:Point from control coordinates to chart data coordinates.</summary>
/// <param name="pt" type="Object" optional="false">The point to convert, in control coordinates.</param>
/// <param name="y" type="Number" optional="true">The Y coordinate of the point (if the first parameter is a number).</param>
/// <returns type="wijmo.Point">The point in chart data coordinates.</returns>
}
wijmo.chart.FlexChartCore.prototype.dataToPoint = function(pt, y) {
/// <summary>Converts a @see:Point from data coordinates to control coordinates.</summary>
/// <param name="pt" type="Object" optional="false">@see:Point in data coordinates, or X coordinate of a point in data coordinates.</param>
/// <param name="y" type="Number" optional="true">Y coordinate of the point (if the first parameter is a number).</param>
/// <returns type="wijmo.Point">The @see:Point in control coordinates.</returns>
}
wijmo.chart.FlexChartCore._wjDict = _wjMerge(wijmo.chart.FlexChartBase._wjDict, {series:2,axes:2,axisX:2,axisY:2,plotAreas:2,binding:2,bindingX:2,symbolSize:2,interpolateNulls:2,legendToggle:2,tooltip:2,dataLabel:2,selection:2,seriesVisibilityChanged:1});
wijmo.chart.FlexChartCore._wjClass = true;
wijmo.chart._DataInfo = function() {
/// <summary>Analyzes chart data.</summary>
/// <returns type="wijmo.chart._DataInfo"></returns>
this._wjClassName = 'wijmo.chart._DataInfo';
_wjReownEvents(this);
}
wijmo.chart._DataInfo._wjDict = _wjMerge({}, {});
wijmo.chart._DataInfo._wjClass = true;
wijmo.chart.ChartTooltip = function() {
/// <summary>Initializes a new instance of the @see:ChartTooltip class.</summary>
/// <returns type="wijmo.chart.ChartTooltip"></returns>
/// <field name="content" type="Object">Gets or sets the tooltip content.
/// 
/// The tooltip content can be specified as a string or as a function that
/// takes a @see:HitTestInfo object as a parameter.
/// 
/// When the tooltip content is a string, it may contain any of the following
/// parameters:
/// 
/// <ul>
///  <li><b>propertyName</b>:    Any property of the data object represented by the point.</li>
///  <li><b>seriesName</b>:      Name of the series that contains the data point (FlexChart only).</li>
///  <li><b>pointIndex</b>:      Index of the data point.</li>
///  <li><b>value</b>:           <b>Value</b> of the data point (y-value for @see:FlexChart, item value for @see:FlexPie).</li>
///  <li><b>x</b>:               <b>x</b>-value of the data point (FlexChart only).</li>
///  <li><b>y</b>:               <b>y</b>-value of the data point (FlexChart only).</li>
///  <li><b>name</b>:            <b>Name</b> of the data point (x-value for @see:FlexChart or legend entry for @see:FlexPie).</li>
/// </ul>
/// 
/// Parameters must be enclosed in single curly brackets. For example:
/// 
/// <pre>
///   // 'country' and 'sales' are properties of the data object.
///   chart.tooltip.content = '{country}, sales:{sales}';
/// </pre>
/// 
/// The next example shows how to set the tooltip content using a function.
/// 
///  <pre>
///   // Set the tooltip content
///   chart.tooltip.content = function (ht) {
///     return ht.name + ":" + ht.value.toFixed();
///   }
/// </pre></field>
/// <field name="threshold" type="Number">Gets or sets the maximum distance from the element to display the tooltip.</field>
this._wjClassName = 'wijmo.chart.ChartTooltip';
_wjReownEvents(this);
}
wijmo.chart.ChartTooltip.prototype = new wijmo.Tooltip();
wijmo.chart.ChartTooltip._wjDict = _wjMerge(wijmo.Tooltip._wjDict, {content:2,threshold:2});
wijmo.chart.ChartTooltip._wjClass = true;
wijmo.chart.ChartType = {
// Shows vertical bars and allows you to compare values of items across categories.
Column: 0,
// Shows horizontal bars.
Bar: 1,
// Shows patterns within the data using X and Y coordinates.
Scatter: 2,
// Shows trends over a period of time or across categories.
Line: 3,
// Shows line chart with a symbol on each data point.
LineSymbols: 4,
// Shows line chart with the area below the line filled with color.
Area: 5,
// Shows Scatter chart with a third data value that determines the
// size of the symbol. The data for this chart type can be defined using the
//  @see:FlexChart or @see:Series <b>binding</b> property as a comma separated value in the
// following format: "yProperty, bubbleSizeProperty".
Bubble: 6,
// Presents items with high, low, open, and close values.
// The size of the wick line is determined by the High and Low values,
// while the size of the bar is determined by the Open and Close values.
// The bar is displayed using different colors, depending on
// whether the close value is higher or lower than the open value.
// The data for this chart type can be defined using the
//  @see:FlexChart or @see:Series <b>binding</b> property as a comma separated value in the
// following format: "highProperty, lowProperty, openProperty, closeProperty".
Candlestick: 7,
// Displays the same information as a candlestick chart, except that opening
// values are displayed using lines to the left, while lines to the right
// indicate closing values.  The data for this chart type can be defined using the
//  @see:FlexChart or @see:Series <b>binding</b> property as a comma separated value in the
// following format: "highProperty, lowProperty, openProperty, closeProperty".
HighLowOpenClose: 8,
// Displays line chart that plots curves rather than angled lines through the
// data points.
Spline: 9,
// Displays spline chart with symbols on each data point.
SplineSymbols: 10,
// Displays spline chart with the area below the line filled with color.
SplineArea: 11,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the chart type.
ChartType: undefined
});

wijmo.chart.FlexChart = function(element, options) {
/// <summary>Initializes a new instance of the @see:FlexChart class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control,
/// or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data
/// for the control.</param>
/// <returns type="wijmo.chart.FlexChart"></returns>
/// <field name="chartType" type="wijmo.chart.ChartType">Gets or sets the type of chart to create.</field>
/// <field name="rotated" type="Boolean">Gets or sets a value indicating whether to flip the axes so that
/// X is vertical and Y is horizontal.</field>
/// <field name="stacking" type="wijmo.chart.Stacking">Gets or sets a value that determines whether and how the series objects are stacked.</field>
/// <field name="options" type="Object">Gets or sets various chart options.
/// 
/// The following options are supported:
/// 
/// <b>bubble.maxSize</b>: Specifies the maximum size
/// of symbols in the Bubble chart. The default value is 30 pixels.
/// 
/// <b>bubble.minSize</b>: Specifies the minimum size
/// of symbols in the Bubble chart. The default value is 5 pixels.
/// 
/// <pre>chart.options = {
///   bubble: { minSize: 5, maxSize: 30 }
/// }</pre>
/// 
/// <b>groupWidth</b>: Specifies the group width for the Column charts,
/// or the group height for the Bar charts. The group width can be specified
/// in pixels or as percentage of the available space. The default value is '70%'.
/// 
/// <pre>chart.options = {
///   groupWidth : 50; // 50 pixels
/// }
/// chart.options = {
///   groupWidth : '100%'; // 100% pixels
/// }</pre></field>
this._wjClassName = 'wijmo.chart.FlexChart';
_wjReownEvents(this);
}
wijmo.chart.FlexChart.prototype = new wijmo.chart.FlexChartCore();
wijmo.chart.FlexChart._wjDict = _wjMerge(wijmo.chart.FlexChartCore._wjDict, {chartType:2,rotated:2,stacking:2,options:2});
wijmo.chart.FlexChart._wjClass = true;
wijmo.chart.Position = {
// The item is not visible.
None: 0,
// The item appears to the left of the chart.
Left: 1,
// The item appears above the chart.
Top: 2,
// The item appears to the right of the chart.
Right: 3,
// The item appears below the chart.
Bottom: 4,
// The item is positioned automatically.
Auto: 5,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the position of an axis or legend on the chart.
Position: undefined
});

wijmo.chart.AxisType = {
// Category axis (normally horizontal).
X: 0,
// Value axis (normally vertical).
Y: 1,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the axis type.
AxisType: undefined
});

wijmo.chart.OverlappingLabels = {
// Hide overlapping labels.
Auto: 0,
// Show all labels, including overlapping ones.
Show: 1,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies how to handle overlapping labels.
OverlappingLabels: undefined
});

wijmo.chart.TickMark = {
// No tick marks appear.
None: 0,
// Tick marks appear outside the plot area.
Outside: 1,
// Tick marks appear inside the plot area.
Inside: 2,
// Tick marks cross the axis.
Cross: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies whether and where the axis tick marks appear.
TickMark: undefined
});

wijmo.chart.Axis = function(position) {
/// <summary>Initializes a new instance of the @see:Axis class.</summary>
/// <param name="position" type="wijmo.chart.Position" optional="true">The position of the axis on the chart.</param>
/// <returns type="wijmo.chart.Axis"></returns>
/// <field name="hostElement" type="SVGGElement">Gets the axis host element.</field>
/// <field name="actualMin" type="Object">Gets the actual axis minimum.
/// 
/// It returns a number or a Date object (for time-based data).</field>
/// <field name="actualMax" type="Object">Gets the actual axis maximum.
/// 
/// It returns a number or a Date object (for time-based data).</field>
/// <field name="min" type="Object">Gets or sets the minimum value shown on the axis.
/// 
/// If not set, the minimum is calculated automatically.
/// The value can be a number or a Date object (for time-based data).</field>
/// <field name="max" type="Object">Gets or sets the maximum value shown on the axis.
/// 
/// If not set, the maximum is calculated automatically.
/// The value can be a number or a Date object (for time-based data).</field>
/// <field name="reversed" type="Boolean">Gets or sets a value indicating whether the axis is
/// reversed (top to bottom or right to left).</field>
/// <field name="position" type="wijmo.chart.Position">Gets or sets the enumerated axis position.</field>
/// <field name="majorUnit" type="Number">Gets or sets the number of units between axis labels.
/// 
/// If the axis contains date values, then the units are
/// expressed in days.</field>
/// <field name="minorUnit" type="Number">Gets or sets the number of units between minor axis ticks.
/// 
/// If the axis contains date values, then the units are
/// expressed in days.</field>
/// <field name="name" type="String">Gets or sets the axis name.</field>
/// <field name="title" type="String">Gets or sets the title text shown next to the axis.</field>
/// <field name="format" type="String">Gets or sets the format string used for the axis labels
/// (see @see:Globalize).</field>
/// <field name="majorGrid" type="Boolean">Gets or sets a value indicating whether the axis includes grid lines.</field>
/// <field name="majorTickMarks" type="wijmo.chart.TickMark">Gets or sets the location of the axis tick marks.</field>
/// <field name="minorGrid" type="Boolean">Gets or sets a value indicating whether the axis includes minor grid lines.</field>
/// <field name="minorTickMarks" type="wijmo.chart.TickMark">Gets or sets the location of the minor axis tick marks.</field>
/// <field name="axisLine" type="Boolean">Gets or sets a value indicating whether the axis line is visible.</field>
/// <field name="labels" type="Boolean">Gets or sets a value indicating whether the axis labels are visible.</field>
/// <field name="labelAlign" type="String">Gets or sets the label alignment.
/// 
/// By default the labels are centered. The supported values are 'left' and 'right
/// for x-axis and 'top' and 'bottom' for y-axis.</field>
/// <field name="labelAngle" type="Number">Gets or sets the rotation angle of the axis labels.
/// 
/// The angle is measured in degrees with valid values
/// ranging from -90 to 90.</field>
/// <field name="origin" type="Number">Gets or sets the value at which an axis crosses the perpendicular axis.</field>
/// <field name="overlappingLabels" type="wijmo.chart.OverlappingLabels">Gets or sets a value indicating how to handle the overlapping axis labels.</field>
/// <field name="itemsSource" type="Object">Gets or sets the items source for the axis labels.
/// 
/// Names of the properties are specified by the @see:wijmo.chart.Axis.binding.
/// 
/// For example:
/// 
/// <pre>
///  // default value for Axis.binding is 'value,text'
///  chart.axisX.itemsSource = [ { value:1, text:'one' }, { value:2, text:'two' } ];
/// </pre></field>
/// <field name="binding" type="String">Gets or sets the comma-separated property names for the
/// @see:wijmo.chart.Axis.itemsSource property to use in axis labels.
/// 
/// The first name specifies the value on the axis, the second represents the corresponding
/// axis label. The default value is 'value,text'.</field>
/// <field name="itemFormatter" type="Function">Gets or sets the itemFormatter function for the axis labels.
/// 
/// If specified, the function takes two parameters:
/// <ul>
/// <li><b>render engine</b>: The @see:wijmo.chart.IRenderEngine object to be used
/// in formatting the labels.</li>
/// <li><b>current label</b>: A string value with the following properties:
///   <ul>
///     <li><b>value</b>: The value of the axis label to format.</li>
///     <li><b>text</b>: The text to use in the label.</li>
///     <li><b>pos</b>: The position in control coordinates at which
///     the label is to be rendered.</li>
///     <li><b>cls</b>: The CSS class to be applied to the label.</li>
///   </ul></li>
/// </ul>
/// 
/// The function returns the label parameters of labels for which
/// properties are modified.
/// 
/// For example:
/// <pre>
/// chart.axisY.itemFormatter = function(engine, label) {
///     if (label.val &gt; 5){
///         engine.textFill = 'red'; // red text
///         label.cls = null; // no default CSS
///      }
///     return label;
/// }
/// </pre></field>
/// <field name="logBase" type="Number">Gets or sets the logarithmic base of the axis.
/// 
/// If the base is not specified the axis uses a linear scale.
/// 
/// Use the @see:logBase property to spread data that is clustered
/// around the origin. This is common in several financial and economic
/// data sets.</field>
/// <field name="plotArea" type="wijmo.chart.PlotArea">Gets or sets the plot area for the axis.</field>
/// <field name="labelPadding" type="Number">Gets or sets the label padding.</field>
/// <field name="rangeChanged" type="wijmo.Event">Occurs when the axis range changes.</field>
/// <field name="axisType" type="wijmo.chart.AxisType">Gets the axis type.</field>
this._wjClassName = 'wijmo.chart.Axis';
this.rangeChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.chart.Axis.prototype.onRangeChanged = function(e) {
/// <summary>Raises the @see:rangeChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.chart.Axis.prototype._getHeight = function(engine, maxw) {
/// <summary>Calculates the axis height.</summary>
/// <param name="engine" type="wijmo.chart.IRenderEngine" optional="false">Rendering engine.</param>
/// <param name="maxw" type="Number" optional="false">Max width.</param>
/// <returns type="Number"></returns>
}
wijmo.chart.Axis.prototype._updateActualLimits = function(dataType, dataMin, dataMax, labels, values) {
/// <summary>Update the actual axis limits based on a specified data range.</summary>
/// <param name="dataType" type="wijmo.DataType" optional="false">Data type.</param>
/// <param name="dataMin" type="Number" optional="false">Data minimum.</param>
/// <param name="dataMax" type="Number" optional="false">Data maximum.</param>
/// <param name="labels" type="String[]" optional="true">Category labels(category axis).</param>
/// <param name="values" type="Number[]" optional="true">Values(value axis).</param>
}
wijmo.chart.Axis.prototype._layout = function(axisRect, plotRect) {
/// <summary>Set the axis position.</summary>
/// <param name="axisRect" type="wijmo.Rect" optional="false">Axis rectangle.</param>
/// <param name="plotRect" type="wijmo.Rect" optional="false">Plot area rectangle.</param>
}
wijmo.chart.Axis.prototype._render = function(engine) {
/// <summary>Render the axis.</summary>
/// <param name="engine" type="wijmo.chart.IRenderEngine" optional="false">Rendering engine.</param>
}
wijmo.chart.Axis.prototype.convert = function(val, maxValue, minValue) {
/// <summary>Converts the specified value from data to pixel coordinates.</summary>
/// <param name="val" type="Number" optional="false">The data value to convert.</param>
/// <param name="maxValue" type="Number" optional="true">The max value of the data, it's optional.</param>
/// <param name="minValue" type="Number" optional="true">The min value of the data, it's optional.</param>
/// <returns type="Number"></returns>
}
wijmo.chart.Axis.prototype.convertBack = function(val) {
/// <summary>Converts the specified value from pixel to data coordinates.</summary>
/// <param name="val" type="Number" optional="false">The pixel coordinates to convert back.</param>
/// <returns type="Number"></returns>
}
wijmo.chart.Axis._wjDict = _wjMerge({}, {hostElement:2,actualMin:2,actualMax:2,min:2,max:2,reversed:2,position:2,majorUnit:2,minorUnit:2,name:2,title:2,format:2,majorGrid:2,majorTickMarks:2,minorGrid:2,minorTickMarks:2,axisLine:2,labels:2,labelAlign:2,labelAngle:2,origin:2,overlappingLabels:2,itemsSource:2,binding:2,itemFormatter:2,logBase:2,plotArea:2,labelPadding:2,rangeChanged:1,axisType:2});
wijmo.chart.Axis._wjClass = true;
wijmo.chart.AxisCollection = function() {
/// <summary>Represents a collection of @see:Axis objects in a @see:FlexChart control.</summary>
/// <returns type="wijmo.chart.AxisCollection"></returns>
this._wjClassName = 'wijmo.chart.AxisCollection';
_wjReownEvents(this);
}
wijmo.chart.AxisCollection.prototype = new wijmo.collections.ObservableArray();
wijmo.chart.AxisCollection.prototype.getAxis = function(name) {
/// <summary>Gets an axis by name.</summary>
/// <param name="name" type="String" optional="false">The name of the axis to look for.</param>
/// <returns type="wijmo.chart.Axis">The axis object with the specified name, or null if not found.</returns>
}
wijmo.chart.AxisCollection.prototype.indexOf = function(name) {
/// <summary>Gets the index of an axis by name.</summary>
/// <param name="name" type="String" optional="false">The name of the axis to look for.</param>
/// <returns type="Number">The index of the axis with the specified name, or -1 if not found.</returns>
}
wijmo.chart.AxisCollection._wjDict = _wjMerge(wijmo.collections.ObservableArray._wjDict, {});
wijmo.chart.AxisCollection._wjClass = true;
wijmo.chart.PlotArea = function() {
/// <summary>Initializes a new instance of the @see:PlotArea class.</summary>
/// <returns type="wijmo.chart.PlotArea"></returns>
/// <field name="row" type="Number">Gets or sets the row number of plot area.
/// Using <b>row</b> property, you can set horizontal position of the plot area
/// on the chart.</field>
/// <field name="column" type="Number">Gets or sets the column number of plot area.
/// Using <b>column</b> property, you can set vertical position of the plot
/// area on the chart.</field>
/// <field name="name" type="String">Gets or sets the plot area name.</field>
/// <field name="width" type="Object">Gets or sets width of the plot area.
/// 
/// The width can be specified as number(sets the width in pixels) or
/// string in the format '{number}*' (star sizing).</field>
/// <field name="height" type="Object">Gets or sets height of the plot area.
/// 
/// The height can be specified as number(sets the height in pixels) or
/// string in the format '{number}*' (star sizing).</field>
/// <field name="style" type="Object">Gets or sets the style of the plot area.
/// 
/// Using <b>style</b> property, you can set appearance of the plot area.
/// For example:
/// <pre>
///   pa.style = { fill: 'rgba(0,255,0,0.1)' };
/// </pre></field>
this._wjClassName = 'wijmo.chart.PlotArea';
_wjReownEvents(this);
}
wijmo.chart.PlotArea._wjDict = _wjMerge({}, {row:2,column:2,name:2,width:2,height:2,style:2});
wijmo.chart.PlotArea._wjClass = true;
wijmo.chart.PlotAreaCollection = function() {
/// <summary>Represents a collection of @see:PlotArea objects in a @see:FlexChartCore control.</summary>
/// <returns type="wijmo.chart.PlotAreaCollection"></returns>
this._wjClassName = 'wijmo.chart.PlotAreaCollection';
_wjReownEvents(this);
}
wijmo.chart.PlotAreaCollection.prototype = new wijmo.collections.ObservableArray();
wijmo.chart.PlotAreaCollection.prototype.getPlotArea = function(name) {
/// <summary>Gets a plot area by name.</summary>
/// <param name="name" type="String" optional="false">The name of the plot area to look for.</param>
/// <returns type="wijmo.chart.PlotArea">The axis object with the specified name, or null if not found.</returns>
}
wijmo.chart.PlotAreaCollection.prototype.indexOf = function(name) {
/// <summary>Gets the index of a plot area by name.</summary>
/// <param name="name" type="String" optional="false">The name of the plot area to look for.</param>
/// <returns type="Number">The index of the plot area with the specified name, or -1 if not found.</returns>
}
wijmo.chart.PlotAreaCollection._wjDict = _wjMerge(wijmo.collections.ObservableArray._wjDict, {});
wijmo.chart.PlotAreaCollection._wjClass = true;
wijmo.chart.SeriesVisibility = {
// The series is visible on the plot and in the legend.
Visible: 0,
// The series is visible only on the plot.
Plot: 1,
// The series is visible only in the legend.
Legend: 2,
// The series is hidden.
Hidden: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies whether and where the Series is visible.
SeriesVisibility: undefined
});

wijmo.chart.Marker = {
// Uses a circle to mark each data point.
Dot: 0,
// Uses a square to mark each data point.
Box: 1,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the type of marker to use for the @see:Series.symbolMarker
// property.
// 
// Applies to Scatter, LineSymbols, and SplineSymbols chart types.
Marker: undefined
});

wijmo.chart.SeriesEventArgs = function(series) {
/// <summary>Initializes a new instance of the @see:SeriesEventArgs class.</summary>
/// <param name="series" type="wijmo.chart.SeriesBase" optional="false">Specifies the @see:Series object affected by this event.</param>
/// <returns type="wijmo.chart.SeriesEventArgs"></returns>
/// <field name="series" type="wijmo.chart.SeriesBase">Gets the @see:Series object affected by this event.</field>
this._wjClassName = 'wijmo.chart.SeriesEventArgs';
_wjReownEvents(this);
}
wijmo.chart.SeriesEventArgs.prototype = new wijmo.EventArgs();
wijmo.chart.SeriesEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {series:2});
wijmo.chart.SeriesEventArgs._wjClass = true;
wijmo.chart.SeriesBase = function() {
/// <summary>Represents a series of data points to display in the chart.</summary>
/// <returns type="wijmo.chart.SeriesBase"></returns>
/// <field name="style" type="Object">Gets or sets the series style.</field>
/// <field name="altStyle" type="Object">Gets or sets the alternative style for the series. The values from
/// this property will be used for negative values in Bar, Column,
/// and Scatter charts; and for rising values in financial chart types
/// like Candlestick, LineBreak, EquiVolume etc.
/// 
/// If no value is provided, the default styles will be used.</field>
/// <field name="symbolStyle" type="Object">Gets or sets the series symbol style.
/// Applies to Scatter, LineSymbols, and SplineSymbols chart types.</field>
/// <field name="symbolSize" type="Number">Gets or sets the size(in pixels) of the symbols used to render this @see:Series.
/// Applies to Scatter, LineSymbols, and SplineSymbols chart types.</field>
/// <field name="symbolMarker" type="wijmo.chart.Marker">Gets or sets the shape of marker to use for each data point in the series.
/// Applies to Scatter, LineSymbols, and SplineSymbols chart types.</field>
/// <field name="binding" type="String">Gets or sets the name of the property that contains Y values for the series.</field>
/// <field name="bindingX" type="String">Gets or sets the name of the property that contains X values for the series.</field>
/// <field name="name" type="String">Gets or sets the series name.
/// 
/// The series name is displayed in the chart legend. Any series without a name
/// does not appear in the legend.</field>
/// <field name="itemsSource" type="Object">Gets or sets the array or @see:ICollectionView object that contains the series data.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView object that contains the data for this series.</field>
/// <field name="chart" type="wijmo.chart.FlexChartCore">Gets the @see:FlexChart object that owns this series.</field>
/// <field name="hostElement" type="SVGGElement">Gets the series host element.</field>
/// <field name="legendElement" type="SVGGElement">Gets the series element in the legend.</field>
/// <field name="cssClass" type="String">Gets or sets the series CSS class.</field>
/// <field name="visibility" type="wijmo.chart.SeriesVisibility">Gets or sets an enumerated value indicating whether and where the series appears.</field>
/// <field name="rendering" type="wijmo.Event">Occurs when series is rendering.</field>
/// <field name="axisX" type="wijmo.chart.Axis">Gets or sets the x-axis for the series.</field>
/// <field name="axisY" type="wijmo.chart.Axis">Gets or sets the y-axis for the series.</field>
this._wjClassName = 'wijmo.chart.SeriesBase';
this.rendering = new wijmo.Event('wijmo.chart.IRenderEngine');
_wjReownEvents(this);
}
wijmo.chart.SeriesBase.prototype.onRendering = function(engine) {
/// <summary>Raises the @see:rendering event.</summary>
/// <param name="engine" type="wijmo.chart.IRenderEngine" optional="false">The @see:IRenderEngine object used to render the series.</param>
}
wijmo.chart.SeriesBase.prototype.hitTest = function(pt, y) {
/// <summary>Gets a @see:HitTestInfo object with information about the specified point.</summary>
/// <param name="pt" type="Object" optional="false">The point to investigate, in window coordinates.</param>
/// <param name="y" type="Number" optional="true">The Y coordinate of the point (if the first parameter is a number).</param>
/// <returns type="wijmo.grid.HitTestInfo"></returns>
}
wijmo.chart.SeriesBase.prototype.getPlotElement = function(pointIndex) {
/// <summary>Gets the plot element that corresponds to the specified point index.</summary>
/// <param name="pointIndex" type="Number" optional="false">The index of the data point.</param>
/// <returns type="Object"></returns>
}
wijmo.chart.SeriesBase.prototype.drawLegendItem = function(engine, rect, index) {
/// <summary>Draw a legend item at the specified position.</summary>
/// <param name="engine" type="wijmo.chart.IRenderEngine" optional="false">The rendering engine to use.</param>
/// <param name="rect" type="wijmo.Rect" optional="false">The position of the legend item.</param>
/// <param name="index" type="Number" optional="false">Index of legend item(for series with multiple legend items).</param>
}
wijmo.chart.SeriesBase.prototype.measureLegendItem = function(engine, index) {
/// <summary>Measures height and width of the legend item.</summary>
/// <param name="engine" type="wijmo.chart.IRenderEngine" optional="false">The rendering engine to use.</param>
/// <param name="index" type="Number" optional="false">Index of legend item(for series with multiple legend items).</param>
/// <returns type="wijmo.Size"></returns>
}
wijmo.chart.SeriesBase.prototype.legendItemLength = function() {
/// <summary>Returns number of series items in the legend.</summary>
/// <returns type="Number"></returns>
}
wijmo.chart.SeriesBase.prototype.getDataRect = function() {
/// <summary>Returns series bounding rectangle in data coordinates.
/// 
/// If getDataRect() returns null, the limits are calculated automatically based on the data values.</summary>
/// <returns type="wijmo.Rect"></returns>
}
wijmo.chart.SeriesBase.prototype._clearValues = function() {
/// <summary>Clears any cached data values.</summary>
}
wijmo.chart.SeriesBase._wjDict = _wjMerge({}, {style:2,altStyle:2,symbolStyle:2,symbolSize:2,symbolMarker:2,binding:2,bindingX:2,name:2,itemsSource:2,collectionView:2,chart:2,hostElement:2,legendElement:2,cssClass:2,visibility:2,rendering:1,axisX:2,axisY:2});
wijmo.chart.SeriesBase._wjClass = true;
wijmo.chart.Series = function() {
/// <summary>Represents a series of data points to display in the chart.
/// The @see:Series class supports all basic chart types. You may define
/// a different chart type on each @see:Series object that you add to the
/// @see:FlexChart series collection. This overrides the @see:chartType
/// property set on the chart that is the default for all @see:Series objects
/// in its collection.</summary>
/// <returns type="wijmo.chart.Series"></returns>
/// <field name="chartType" type="wijmo.chart.ChartType">Gets or sets the chart type for a specific series, overriding the chart type
/// set on the overall chart.</field>
this._wjClassName = 'wijmo.chart.Series';
_wjReownEvents(this);
}
wijmo.chart.Series.prototype = new wijmo.chart.SeriesBase();
wijmo.chart.Series._wjDict = _wjMerge(wijmo.chart.SeriesBase._wjDict, {chartType:2});
wijmo.chart.Series._wjClass = true;
wijmo.chart._SvgRenderEngine = function() {
/// <summary>Render to svg.</summary>
/// <returns type="wijmo.chart._SvgRenderEngine"></returns>
this._wjClassName = 'wijmo.chart._SvgRenderEngine';
_wjReownEvents(this);
}
wijmo.chart._SvgRenderEngine._wjDict = _wjMerge({}, {});
wijmo.chart._SvgRenderEngine._wjClass = true;
wijmo.chart.Legend = function() {
/// <summary>Represents the chart legend.</summary>
/// <returns type="wijmo.chart.Legend"></returns>
/// <field name="position" type="wijmo.chart.Position">Gets or sets the enumerated value that determines whether and where the
/// legend appears in relation to the chart.</field>
this._wjClassName = 'wijmo.chart.Legend';
_wjReownEvents(this);
}
wijmo.chart.Legend._wjDict = _wjMerge({}, {position:2});
wijmo.chart.Legend._wjClass = true;
wijmo.chart.ChartElement = {
// The area within the axes.
PlotArea: 0,
// X-axis.
AxisX: 1,
// Y-axis.
AxisY: 2,
// The area within the control but outside the axes.
ChartArea: 3,
// The chart legend.
Legend: 4,
// The chart header.
Header: 5,
// The chart footer.
Footer: 6,
// A chart series.
Series: 7,
// A chart series symbol.
SeriesSymbol: 8,
// A data label.
DataLabel: 9,
// No chart element.
None: 10,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the type of chart element found by the hitTest method.
ChartElement: undefined
});

wijmo.chart.HitTestInfo = function(chart, point, element) {
/// <summary>Initializes a new instance of the @see:HitTestInfo class.</summary>
/// <param name="chart" type="wijmo.chart.FlexChartBase" optional="false">The chart control.</param>
/// <param name="point" type="wijmo.Point" optional="false">The original point in window coordinates.</param>
/// <param name="element" type="wijmo.chart.ChartElement" optional="true">The chart element.</param>
/// <returns type="wijmo.grid.HitTestInfo"></returns>
/// <field name="point" type="wijmo.Point">Gets the point in control coordinates to which this HitTestInfo object
/// refers to.</field>
/// <field name="series" type="wijmo.chart.SeriesBase">Gets the chart series at the specified coordinates.</field>
/// <field name="pointIndex" type="Number">Gets the data point index at the specified coordinates.</field>
/// <field name="chartElement" type="wijmo.chart.ChartElement">Gets the chart element at the specified coordinates.</field>
/// <field name="distance" type="Number">Gets the distance from the closest data point.</field>
/// <field name="item" type="Object">Gets the data object that corresponds to the closest data point.</field>
/// <field name="x" type="Object">Gets the x-value of the closest data point.</field>
/// <field name="y" type="Object">Gets the y-value of the closest data point.</field>
this._wjClassName = 'wijmo.chart.HitTestInfo';
_wjReownEvents(this);
}
wijmo.chart.HitTestInfo._wjDict = _wjMerge({}, {point:2,series:2,pointIndex:2,chartElement:2,distance:2,item:2,x:2,y:2});
wijmo.chart.HitTestInfo._wjClass = true;
wijmo.chart.Palettes = function() {
/// <summary>These are predefined color palettes for chart @see:Series objects.
/// To create custom color palettes, supply an array of strings or rgba values.
/// You can specify palettes for @see:FlexChart and @see:FlexPie controls.
/// For example:
/// <pre>chart.palette = Palettes.light;</pre>
/// The following palettes are pre-defined:
/// <ul>
///   <li>standard (default)</li>
///   <li>cocoa</li>
///   <li>coral</li>
///   <li>dark</li>
///   <li>highcontrast</li>
///   <li>light</li>
///   <li>midnight</li>
///   <li>minimal</li>
///   <li>modern</li>
///   <li>organic</li>
///   <li>slate</li>
/// </ul></summary>
/// <returns type="wijmo.chart.Palettes"></returns>
this._wjClassName = 'wijmo.chart.Palettes';
_wjReownEvents(this);
}
wijmo.chart.Palettes._wjDict = _wjMerge({}, {});
wijmo.chart.Palettes._wjClass = true;
wijmo.chart._Spline = function() {
/// <summary>Calculates Spline curves.</summary>
/// <returns type="wijmo.chart._Spline"></returns>
this._wjClassName = 'wijmo.chart._Spline';
_wjReownEvents(this);
}
wijmo.chart._Spline._wjDict = _wjMerge({}, {});
wijmo.chart._Spline._wjClass = true;
wijmo.chart.LabelPosition = {
// No data labels appear.
None: 0,
// The labels appear to the left of the data points.
Left: 1,
// The labels appear above the data points.
Top: 2,
// The labels appear to the right of the data points.
Right: 3,
// The labels appear below the data points.
Bottom: 4,
// The labels appear centered on the data points.
Center: 5,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the position of data labels on the chart.
LabelPosition: undefined
});

wijmo.chart.PieLabelPosition = {
// No data labels.
None: 0,
// The label appears inside the pie slice.
Inside: 1,
// The item appears at the center of the pie slice.
Center: 2,
// The item appears outside the pie slice.
Outside: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the position of data labels on the pie chart.
PieLabelPosition: undefined
});

wijmo.chart.DataLabelRenderEventArgs = function(engine, ht, pt, text) {
/// <summary>Initializes a new instance of the @see:DataLabelRenderEventArgs class.</summary>
/// <param name="engine" type="wijmo.chart.IRenderEngine" optional="false">(@see:IRenderEngine) The rendering engine to use.</param>
/// <param name="ht" type="wijmo.grid.HitTestInfo" optional="false">The hit test information.</param>
/// <param name="pt" type="wijmo.Point" optional="false">The reference point.</param>
/// <param name="text" type="String" optional="false">The label text.</param>
/// <returns type="wijmo.chart.DataLabelRenderEventArgs"></returns>
/// <field name="cancel" type="Boolean">Gets or sets a value that indicates whether the event should be cancelled.</field>
/// <field name="point" type="wijmo.Point">Gets the point associated with the label in control coordinates.</field>
/// <field name="text" type="String">Gets or sets the label text.</field>
/// <field name="hitTestInfo" type="wijmo.grid.HitTestInfo">Gets the hit test information.</field>
this._wjClassName = 'wijmo.chart.DataLabelRenderEventArgs';
_wjReownEvents(this);
}
wijmo.chart.DataLabelRenderEventArgs.prototype = new wijmo.chart.RenderEventArgs();
wijmo.chart.DataLabelRenderEventArgs._wjDict = _wjMerge(wijmo.chart.RenderEventArgs._wjDict, {point:2,text:2,hitTestInfo:2});
wijmo.chart.DataLabelRenderEventArgs._wjClass = true;
wijmo.chart.DataLabelBase = function() {
/// <summary>Represents the base abstract class for the @see:DataLabel and the @see:PieDataLabel classes.</summary>
/// <returns type="wijmo.chart.DataLabelBase"></returns>
/// <field name="content" type="Object">Gets or sets the content of data labels.
/// 
/// The content can be specified as a string or as a function that
/// takes @see:HitTestInfo object as a parameter.
/// 
/// When the label content is a string, it can contain any of the following
/// parameters:
/// 
/// <ul>
///  <li><b>seriesName</b>: Name of the series that contains the data point (FlexChart only).</li>
///  <li><b>pointIndex</b>: Index of the data point.</li>
///  <li><b>value</b>: <b>Value</b> of the data point.</li>
///  <li><b>x</b>: <b>x</b>-value of the data point (FlexChart only).</li>
///  <li><b>y</b>: <b>y</b>-value of the data point (FlexChart only).</li>
///  <li><b>name</b>: <b>Name</b> of the data point.</li>
///  <li><b>propertyName</b>: any property of data object.</li>
/// </ul>
/// 
/// The parameter must be enclosed in curly brackets, for example 'x={x}, y={y}'.
/// 
/// In the following example, we show the y value of the data point in the labels.
/// 
/// <pre>
///  // Create a chart and show y data in labels positioned above the data point.
///  var chart = new wijmo.chart.FlexChart('#theChart');
///  chart.initialize({
///      itemsSource: data,
///      bindingX: 'country',
///      series: [
///          { name: 'Sales', binding: 'sales' },
///          { name: 'Expenses', binding: 'expenses' },
///          { name: 'Downloads', binding: 'downloads' }],
///  });
///  chart.dataLabel.position = "Top";
///  chart.dataLabel.content = "{country} {seriesName}:{y}";
/// </pre>
/// 
/// The next example shows how to set data label content using a function.
/// 
/// <pre>
///  // Set the data label content
///  chart.dataLabel.content = function (ht) {
///    return ht.name + ":" + ht.value.toFixed();
///  }
/// </pre></field>
/// <field name="border" type="Boolean">Gets or sets a value indicating whether the data labels have borders.</field>
/// <field name="offset" type="Number">Gets or sets the offset from label to the data point.</field>
/// <field name="connectingLine" type="Boolean">Gets or sets a value indicating whether to draw lines that connect
/// labels to the data points.</field>
/// <field name="rendering" type="wijmo.Event">Occurs before the rendering data label.</field>
this._wjClassName = 'wijmo.chart.DataLabelBase';
this.rendering = new wijmo.Event('wijmo.chart.DataLabelRenderEventArgs');
_wjReownEvents(this);
}
wijmo.chart.DataLabelBase.prototype.onRendering = function(e) {
/// <summary>Raises the @see:rendering event.</summary>
/// <param name="e" type="wijmo.chart.DataLabelRenderEventArgs" optional="false">The @see:DataLabelRenderEventArgs object used to render the label.</param>
}
wijmo.chart.DataLabelBase._wjDict = _wjMerge({}, {content:2,border:2,offset:2,connectingLine:2,rendering:1});
wijmo.chart.DataLabelBase._wjClass = true;
wijmo.chart.DataLabel = function() {
/// <summary>The point data label for FlexChart.</summary>
/// <returns type="wijmo.chart.DataLabel"></returns>
/// <field name="position" type="wijmo.chart.LabelPosition">Gets or sets the position of the data labels.</field>
this._wjClassName = 'wijmo.chart.DataLabel';
_wjReownEvents(this);
}
wijmo.chart.DataLabel.prototype = new wijmo.chart.DataLabelBase();
wijmo.chart.DataLabel._wjDict = _wjMerge(wijmo.chart.DataLabelBase._wjDict, {position:2});
wijmo.chart.DataLabel._wjClass = true;
wijmo.chart.PieDataLabel = function() {
/// <summary>The point data label for FlexPie.</summary>
/// <returns type="wijmo.chart.PieDataLabel"></returns>
/// <field name="position" type="wijmo.chart.PieLabelPosition">Gets or sets the position of the data labels.</field>
this._wjClassName = 'wijmo.chart.PieDataLabel';
_wjReownEvents(this);
}
wijmo.chart.PieDataLabel.prototype = new wijmo.chart.DataLabelBase();
wijmo.chart.PieDataLabel._wjDict = _wjMerge(wijmo.chart.DataLabelBase._wjDict, {position:2});
wijmo.chart.PieDataLabel._wjClass = true;
wijmo.chart.LineMarkerLines = {
// Show no lines.
None: 0,
// Show a vertical line.
Vertical: 1,
// Show a horizontal line.
Horizontal: 2,
// Show both vertical and horizontal lines.
Both: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the line type for the LineMarker.
LineMarkerLines: undefined
});

wijmo.chart.LineMarkerInteraction = {
// No interaction, the user specifies the position by clicking.
None: 0,
// The LineMarker moves with the pointer.
Move: 1,
// The LineMarker moves when the user drags the line.
Drag: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies how the LineMarker interacts with the user.
LineMarkerInteraction: undefined
});

wijmo.chart.LineMarkerAlignment = {
// The LineMarker alignment adjusts automatically so that it stays inside the
// boundaries of the plot area.
Auto: 2,
// The LineMarker aligns to the right of the pointer.
Right: 0,
// The LineMarker aligns to the left of the pointer.
Left: 1,
// The LineMarker aligns to the bottom of the pointer.
Bottom: 4,
// The LineMarker aligns to the top of the pointer.
Top: 6,
_wjEnum: true
};

intellisense.annotate(wijmo.chart, {
// Specifies the alignment of the LineMarker.
LineMarkerAlignment: undefined
});

wijmo.chart.LineMarker = function(chart, options) {
/// <summary>Initializes a new instance of the @see:LineMarker class.</summary>
/// <param name="chart" type="wijmo.chart.FlexChartCore" optional="false">The chart on which the LineMarker appears.</param>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.chart.LineMarker"></returns>
/// <field name="chart" type="wijmo.chart.FlexChartCore">Gets the @see:FlexChart object that owns the LineMarker.</field>
/// <field name="isVisible" type="Boolean">Gets or sets the visibility of the LineMarker.</field>
/// <field name="seriesIndex" type="Number">Gets or sets the index of the series in the chart in which the LineMarker appears.
/// This takes effect when the @see:interaction property is set to
/// wijmo.chart.LineMarkerInteraction.Move or wijmo.chart.LineMarkerInteraction.Drag.</field>
/// <field name="horizontalPosition" type="Number">Gets or sets the horizontal position of the LineMarker relative to the plot area.
/// 
/// Its value range is (0, 1).
/// If the value is null or undefined and @see:interaction is set to
/// wijmo.chart.LineMarkerInteraction.Move or wijmo.chart.LineMarkerInteraction.Drag,
/// the horizontal position of the marker is calculated automatically based on the
/// pointer's position.</field>
/// <field name="x" type="Number">Gets the current x-value as chart data coordinates.</field>
/// <field name="y" type="Number">Gets the current y-value as chart data coordinates.</field>
/// <field name="content" type="Function">Gets or sets the content function that allows you to customize the text content of the LineMarker.</field>
/// <field name="verticalPosition" type="Number">Gets or sets the vertical position of the LineMarker relative to the plot area.
/// 
/// Its value range is (0, 1).
/// If the value is null or undefined and @see:interaction is set to wijmo.chart.LineMarkerInteraction.Move
/// or wijmo.chart.LineMarkerInteraction.Drag, the vertical position of the LineMarker is calculated automatically based on the pointer's position.</field>
/// <field name="alignment" type="wijmo.chart.LineMarkerAlignment">Gets or sets the alignment of the LineMarker content.
/// 
/// By default, the LineMarker shows to the right, at the bottom of the target point.
/// Use '|' to combine alignment values.
/// 
/// <pre>
/// // set the alignment to the left.
/// marker.alignment = wijmo.chart.LineMarkerAlignment.Left;
/// // set the alignment to the left top.
/// marker.alignment = wijmo.chart.LineMarkerAlignment.Left | wijmo.chart.LineMarkerAlignment.Top;
/// </pre></field>
/// <field name="lines" type="wijmo.chart.LineMarkerLines">Gets or sets the visibility of the LineMarker lines.</field>
/// <field name="interaction" type="wijmo.chart.LineMarkerInteraction">Gets or sets the interaction mode of the LineMarker.</field>
/// <field name="dragThreshold" type="Number">Gets or sets the maximum distance from the horizontal or vertical line that the marker can be dragged.</field>
/// <field name="dragContent" type="Boolean">Gets or sets a value indicating whether the content of the marker is draggable when the interaction mode is "Drag."</field>
/// <field name="dragLines" type="Boolean">Gets or sets a value indicating whether the lines are linked when the horizontal or vertical line is dragged when the interaction mode is "Drag."</field>
/// <field name="positionChanged" type="wijmo.Event">Occurs after the LineMarker's position changes.</field>
this._wjClassName = 'wijmo.chart.LineMarker';
this.positionChanged = new wijmo.Event('wijmo.Point');
_wjReownEvents(this);
}
wijmo.chart.LineMarker.prototype.onPositionChanged = function(point) {
/// <summary>Raises the @see:positionChanged event.</summary>
/// <param name="point" type="wijmo.Point" optional="false">The target point at which to show the LineMarker.</param>
}
wijmo.chart.LineMarker.prototype.remove = function() {
/// <summary>Removes the LineMarker from the chart.</summary>
}
wijmo.chart.LineMarker._wjDict = _wjMerge({}, {chart:2,isVisible:2,seriesIndex:2,horizontalPosition:2,x:2,y:2,content:2,verticalPosition:2,alignment:2,lines:2,interaction:2,dragThreshold:2,dragContent:2,dragLines:2,positionChanged:1});
wijmo.chart.LineMarker._wjClass = true;
wijmo.chart._BasePlotter = function() {
/// <summary>Base class for chart plotters of all types (bar, line, area).</summary>
/// <returns type="wijmo.chart._BasePlotter"></returns>
this._wjClassName = 'wijmo.chart._BasePlotter';
_wjReownEvents(this);
}
wijmo.chart._BasePlotter._wjDict = _wjMerge({}, {});
wijmo.chart._BasePlotter._wjClass = true;
wijmo.chart._BarPlotter = function() {
/// <summary>Bar/column chart plotter.</summary>
/// <returns type="wijmo.chart._BarPlotter"></returns>
this._wjClassName = 'wijmo.chart._BarPlotter';
_wjReownEvents(this);
}
wijmo.chart._BarPlotter.prototype = new wijmo.chart._BasePlotter();
wijmo.chart._BarPlotter._wjDict = _wjMerge(wijmo.chart._BasePlotter._wjDict, {});
wijmo.chart._BarPlotter._wjClass = true;
wijmo.chart._LinePlotter = function() {
/// <summary>Line/scatter chart plotter.</summary>
/// <returns type="wijmo.chart._LinePlotter"></returns>
this._wjClassName = 'wijmo.chart._LinePlotter';
_wjReownEvents(this);
}
wijmo.chart._LinePlotter.prototype = new wijmo.chart._BasePlotter();
wijmo.chart._LinePlotter._wjDict = _wjMerge(wijmo.chart._BasePlotter._wjDict, {});
wijmo.chart._LinePlotter._wjClass = true;
wijmo.chart._AreaPlotter = function() {
/// <summary>Area chart plotter.</summary>
/// <returns type="wijmo.chart._AreaPlotter"></returns>
this._wjClassName = 'wijmo.chart._AreaPlotter';
_wjReownEvents(this);
}
wijmo.chart._AreaPlotter.prototype = new wijmo.chart._BasePlotter();
wijmo.chart._AreaPlotter._wjDict = _wjMerge(wijmo.chart._BasePlotter._wjDict, {});
wijmo.chart._AreaPlotter._wjClass = true;
wijmo.chart.analytics = wijmo.chart.analytics || { _wjModule: true };
wijmo.chart.analytics.TrendLineBase = function(options) {
/// <summary>Initializes a new instance of the @see:TrendLineBase class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the TrendLineBase Series.</param>
/// <returns type="wijmo.chart.analytics.TrendLineBase"></returns>
/// <field name="sampleCount" type="Number">Gets or sets the sample count for function calculation.
/// The property doesn't apply for MovingAverage.</field>
this._wjClassName = 'wijmo.chart.analytics.TrendLineBase';
_wjReownEvents(this);
}
wijmo.chart.analytics.TrendLineBase.prototype = new wijmo.chart.SeriesBase();
wijmo.chart.analytics.TrendLineBase.prototype.approximate = function(x) {
/// <summary>Gets the approximate y value from the given x value.</summary>
/// <param name="x" type="Number" optional="false">The x value to be used for calculating the Y value.</param>
/// <returns type="Number"></returns>
}
wijmo.chart.analytics.TrendLineBase._wjDict = _wjMerge(wijmo.chart.SeriesBase._wjDict, {sampleCount:2});
wijmo.chart.analytics.TrendLineBase._wjClass = true;
wijmo.chart.analytics.TrendLineFitType = {
// A straight line that most closely approximates the data.  Y(x) = a * x + b.
Linear: 0,
// Regression fit to the equation Y(x) = a * exp(b*x).
Exponential: 1,
// Regression fit to the equation Y(x) = a * ln(x) + b.
Logarithmic: 2,
// Regression fit to the equation Y(x) = a * pow(x, b).
Power: 3,
// Regression fit to the equation Y(x) = a + b * cos(x) + c * sin(x) + d * cos(2*x) + e * sin(2*x) + ...
Fourier: 4,
// Regression fit to the equation Y(x) = a * x^n + b * x^n-1 + c * x^n-2 + ... + z.
Polynomial: 5,
// The minimum X-value.
MinX: 6,
// The minimum Y-value.
MinY: 7,
// The maximum X-value.
MaxX: 8,
// The maximum Y-value.
MaxY: 9,
// The average X-value.
AverageX: 10,
// The average Y-value.
AverageY: 11,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.analytics, {
// Specifies the fit type of the trendline series.
TrendLineFitType: undefined
});

wijmo.chart.analytics.TrendLine = function(options) {
/// <summary>Initializes a new instance of the @see:TrendLine class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// the TrendLine Series.</param>
/// <returns type="wijmo.chart.analytics.TrendLine"></returns>
/// <field name="fitType" type="wijmo.chart.analytics.TrendLineFitType">Gets or sets the fit type of the trendline.</field>
/// <field name="order" type="Number">Gets or sets the number of terms in a polynomial or fourier equation.
/// 
/// Set this value to an integer greater than 1.
/// It gets applied when the fitType is set to
/// wijmo.chart.analytics.TrendLineFitType.Polynomial or
/// wijmo.chart.analytics.TrendLineFitType.Fourier.</field>
/// <field name="coefficients" type="Number[]">Gets the coefficients of the equation.</field>
this._wjClassName = 'wijmo.chart.analytics.TrendLine';
_wjReownEvents(this);
}
wijmo.chart.analytics.TrendLine.prototype = new wijmo.chart.analytics.TrendLineBase();
wijmo.chart.analytics.TrendLine.prototype.approximate = function(x) {
/// <summary>Gets the approximate y value from the given x value.</summary>
/// <param name="x" type="Number" optional="false">The x value to be used for calculating the Y value.</param>
/// <returns type="Number"></returns>
}
wijmo.chart.analytics.TrendLine.prototype.getEquation = function(fmt) {
/// <summary>Gets the formatted equation string for the coefficients.</summary>
/// <param name="fmt" type="Function" optional="true">The formatting function for the coefficients. Returns formatted
/// string on the basis of coefficients. This parameter is optional.</param>
}
wijmo.chart.analytics.TrendLine._wjDict = _wjMerge(wijmo.chart.analytics.TrendLineBase._wjDict, {fitType:2,order:2,coefficients:2});
wijmo.chart.analytics.TrendLine._wjClass = true;
wijmo.chart.analytics.FunctionSeries = function(options) {
/// <summary>Initializes a new instance of the @see:FunctionSeries class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the
/// FunctionSeries.</param>
/// <returns type="wijmo.chart.analytics.FunctionSeries"></returns>
/// <field name="min" type="Number">Gets or sets the minimum value of the parameter for calculating a function.</field>
/// <field name="max" type="Number">Gets or sets the maximum value of the parameter for calculating a function.</field>
this._wjClassName = 'wijmo.chart.analytics.FunctionSeries';
_wjReownEvents(this);
}
wijmo.chart.analytics.FunctionSeries.prototype = new wijmo.chart.analytics.TrendLineBase();
wijmo.chart.analytics.FunctionSeries._wjDict = _wjMerge(wijmo.chart.analytics.TrendLineBase._wjDict, {min:2,max:2});
wijmo.chart.analytics.FunctionSeries._wjClass = true;
wijmo.chart.analytics.YFunctionSeries = function(options) {
/// <summary>Initializes a new instance of the @see:YFunctionSeries class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the
/// YFunctionSeries.</param>
/// <returns type="wijmo.chart.analytics.YFunctionSeries"></returns>
/// <field name="func" type="Function">Gets or sets the function used to calculate Y value.</field>
this._wjClassName = 'wijmo.chart.analytics.YFunctionSeries';
_wjReownEvents(this);
}
wijmo.chart.analytics.YFunctionSeries.prototype = new wijmo.chart.analytics.FunctionSeries();
wijmo.chart.analytics.YFunctionSeries.prototype.approximate = function(x) {
/// <summary>Gets the approximate y value from the given x value.</summary>
/// <param name="x" type="Number" optional="false">The x value to be used for calculating the Y value.</param>
/// <returns type="Number"></returns>
}
wijmo.chart.analytics.YFunctionSeries._wjDict = _wjMerge(wijmo.chart.analytics.FunctionSeries._wjDict, {func:2});
wijmo.chart.analytics.YFunctionSeries._wjClass = true;
wijmo.chart.analytics.ParametricFunctionSeries = function(options) {
/// <summary>Initializes a new instance of the @see:ParametricFunctionSeries class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the
/// ParametricFunctionSeries.</param>
/// <returns type="wijmo.chart.analytics.ParametricFunctionSeries"></returns>
/// <field name="xFunc" type="Function">Gets or sets the function used to calculate the x value.</field>
/// <field name="yFunc" type="Function">Gets or sets the function used to calculate the y value.</field>
this._wjClassName = 'wijmo.chart.analytics.ParametricFunctionSeries';
_wjReownEvents(this);
}
wijmo.chart.analytics.ParametricFunctionSeries.prototype = new wijmo.chart.analytics.FunctionSeries();
wijmo.chart.analytics.ParametricFunctionSeries.prototype.approximate = function(value) {
/// <summary>Gets the approximate x and y from the given value.</summary>
/// <param name="value" type="Number" optional="false">The value to calculate.</param>
}
wijmo.chart.analytics.ParametricFunctionSeries._wjDict = _wjMerge(wijmo.chart.analytics.FunctionSeries._wjDict, {xFunc:2,yFunc:2});
wijmo.chart.analytics.ParametricFunctionSeries._wjClass = true;
wijmo.chart.analytics.MovingAverageType = {
// An average of the last n values.
Simple: 0,
// Weighted average of the last n values,
// where the weightage decreases by 1 with each previous value.
Weighted: 1,
// Weighted average of the last n values,
// where the weightage decreases exponentially with each previous value.
Exponential: 2,
// Weighted average of the last n values,
// whose result is equivalent to a double smoothed simple moving average.
Triangular: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.analytics, {
// Specifies the type of MovingAverage Series.
MovingAverageType: undefined
});

wijmo.chart.analytics.MovingAverage = function(options) {
/// <summary>Initializes a new instance of the @see:MovingAverage class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the MovingAverage Series.</param>
/// <returns type="wijmo.chart.analytics.MovingAverage"></returns>
/// <field name="type" type="wijmo.chart.analytics.MovingAverageType">Gets or sets the type of the moving average series.</field>
/// <field name="period" type="Number">Gets or sets the period of the moving average series.
/// It should be set to integer value greater than 1.</field>
this._wjClassName = 'wijmo.chart.analytics.MovingAverage';
_wjReownEvents(this);
}
wijmo.chart.analytics.MovingAverage.prototype = new wijmo.chart.analytics.TrendLineBase();
wijmo.chart.analytics.MovingAverage._wjDict = _wjMerge(wijmo.chart.analytics.TrendLineBase._wjDict, {type:2,period:2});
wijmo.chart.analytics.MovingAverage._wjClass = true;
wijmo.chart.analytics.Waterfall = function(options) {
/// <summary>Initializes a new instance of the @see:Waterfall class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// the Waterfall Series.</param>
/// <returns type="wijmo.chart.analytics.Waterfall"></returns>
/// <field name="relativeData" type="Boolean">Gets or sets a value that determines whether the given data is relative.</field>
/// <field name="start" type="Number">Gets or sets a value that determines the value of the start bar. If start is null, start bar will not show.</field>
/// <field name="startLabel" type="String">Gets or sets the label of the start bar.</field>
/// <field name="showTotal" type="Boolean">Gets or sets a value that determines whether the show the total bar.</field>
/// <field name="totalLabel" type="String">Gets or sets the label of the total bar.</field>
/// <field name="showIntermediateTotal" type="Boolean">Gets or sets a value that determines whether to show the intermediate total bar.
/// The property should work with @see::intermediateToolPositions and @see::intermediateToolLabels property.</field>
/// <field name="intermediateTotalPositions" type="Number[]">Gets or sets the value of the property that contains the index for positions of the intermediate total bar.
/// The property should work with @see::showIntermediateTotal and @see::intermediateToolLabels property.</field>
/// <field name="intermediateTotalLabels" type="Object">Gets or sets the value of the property that contains the label of the intermediate total bar, it should be an array or a string
/// The property should work with @see::showIntermediateTotal and @see::intermediateToolPositions property.</field>
/// <field name="connectorLines" type="Boolean">Gets or sets a value that determines whether to show connector lines.</field>
/// <field name="styles" type="Object">Gets or sets the waterfall styles.
/// The following styles are supported:
/// 
/// <b>start</b>: Specifies the style of the start column.
/// 
/// <b>total</b>: Specifies the style of the total column.
/// 
/// <b>intermediateTotal</b>: Specifies the style of the intermediate total column.
/// 
/// <b>falling</b>: Specifies the style of the falling columns.
/// 
/// <b>rising</b>: Specifies the style of the rising columns.
/// 
/// <b>connectorLines</b>: Specifies the style of the connectorLines.
/// 
/// <pre>waterfall.styles = {
///   start: {
///      fill: 'blue',
///      stroke: 'blue'
///   },
///   total: {
///      fill: 'yellow',
///      stroke: 'yellow'
///   },
///   falling: {
///      fill: 'red',
///      stroke: 'red'
///   },
///   rising: {
///      fill: 'green',
///      stroke: 'green'
///   },
///   connectorLines: {
///      stroke: 'blue',
///      'stroke-dasharray': '10, 10'
///   }
/// }</pre></field>
this._wjClassName = 'wijmo.chart.analytics.Waterfall';
_wjReownEvents(this);
}
wijmo.chart.analytics.Waterfall.prototype = new wijmo.chart.SeriesBase();
wijmo.chart.analytics.Waterfall._wjDict = _wjMerge(wijmo.chart.SeriesBase._wjDict, {relativeData:2,start:2,startLabel:2,showTotal:2,totalLabel:2,showIntermediateTotal:2,intermediateTotalPositions:2,intermediateTotalLabels:2,connectorLines:2,styles:2});
wijmo.chart.analytics.Waterfall._wjClass = true;
wijmo.chart.annotation = wijmo.chart.annotation || { _wjModule: true };
wijmo.chart.annotation.AnnotationAttachment = {
// Coordinates of the annotation point are defined by the data series index and
// the data point index.
DataIndex: 0,
// Annotation point is specified in data coordinates.
DataCoordinate: 1,
// Annotation point is specified as a relative position inside the control where
// (0,0) is the top left corner and (1,1) is the bottom right corner.
Relative: 2,
// The annotation point is specified in control's pixel coordinates.
Absolute: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.annotation, {
// Specifies the attachment of the annotation.
AnnotationAttachment: undefined
});

wijmo.chart.annotation.AnnotationPosition = {
// The annotation appears at the Center of the target point.
Center: 0,
// The annotation appears at the Top of the target point.
Top: 1,
// The annotation appears at the Bottom of the target point.
Bottom: 2,
// The annotation appears at the Left of the target point.
Left: 4,
// The annotation appears at the Right of the target point.
Right: 8,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.annotation, {
// Specifies the position of the annotation.
AnnotationPosition: undefined
});

wijmo.chart.annotation.AnnotationBase = function(options) {
/// <summary>Initializes a new instance of the @see:AnnotationBase class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data
/// for @see:AnnotationBase.</param>
/// <returns type="wijmo.chart.annotation.AnnotationBase"></returns>
/// <field name="attachment" type="wijmo.chart.annotation.AnnotationAttachment">Gets or sets the attachment of the annotation.</field>
/// <field name="point" type="wijmo.chart.DataPoint">Gets or sets the point of the annotation.
/// The coordinates of points depends on the @see:attachment property.
/// See @see:AnnotationAttachment for further description.</field>
/// <field name="seriesIndex" type="Number">Gets or sets the data series index of the annotation.
/// Applies only when the <b>attachment</b> property is set to DataIndex.</field>
/// <field name="pointIndex" type="Number">Gets or sets the data point index of the annotation.
/// Applies only when the <b>attachment</b> property is set to DataIndex.</field>
/// <field name="position" type="wijmo.chart.annotation.AnnotationPosition">Gets or sets the position of the annotation.
/// The position is relative to the @see:point.</field>
/// <field name="offset" type="wijmo.Point">Gets or sets the offset of the annotation from the @see:point.</field>
/// <field name="style" type="Object">Gets or sets the style of the annotation.</field>
/// <field name="isVisible" type="Boolean">Gets or sets the visibility of the annotation.</field>
/// <field name="tooltip" type="String">Gets or sets the tooltip of the annotation.</field>
/// <field name="name" type="String">Gets or sets the name of the annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.AnnotationBase';
_wjReownEvents(this);
}
wijmo.chart.annotation.AnnotationBase.prototype.render = function(engine) {
/// <summary>Render this annotation.</summary>
/// <param name="engine" type="wijmo.chart.IRenderEngine" optional="false">The engine to render annotation.</param>
}
wijmo.chart.annotation.AnnotationBase.prototype.destroy = function() {
/// <summary>Destroy this annotation</summary>
}
wijmo.chart.annotation.AnnotationBase._wjDict = _wjMerge({}, {attachment:2,point:2,seriesIndex:2,pointIndex:2,position:2,offset:2,style:2,isVisible:2,tooltip:2,name:2});
wijmo.chart.annotation.AnnotationBase._wjClass = true;
wijmo.chart.annotation.Text = function(options) {
/// <summary>Initializes a new instance of the @see:Text annotation class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for @see:Text annotation.</param>
/// <returns type="wijmo.chart.annotation.Text"></returns>
/// <field name="text" type="String">Gets or sets the text of the annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.Text';
_wjReownEvents(this);
}
wijmo.chart.annotation.Text.prototype = new wijmo.chart.annotation.AnnotationBase();
wijmo.chart.annotation.Text._wjDict = _wjMerge(wijmo.chart.annotation.AnnotationBase._wjDict, {text:2});
wijmo.chart.annotation.Text._wjClass = true;
wijmo.chart.annotation.Shape = function(options) {
/// <summary>Initializes a new instance of the @see:Shape annotation class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:Shape annotation.</param>
/// <returns type="wijmo.chart.annotation.Shape"></returns>
/// <field name="content" type="String">Gets or sets the text of the annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.Shape';
_wjReownEvents(this);
}
wijmo.chart.annotation.Shape.prototype = new wijmo.chart.annotation.AnnotationBase();
wijmo.chart.annotation.Shape._wjDict = _wjMerge(wijmo.chart.annotation.AnnotationBase._wjDict, {content:2});
wijmo.chart.annotation.Shape._wjClass = true;
wijmo.chart.annotation.Ellipse = function(options) {
/// <summary>Initializes a new instance of the @see:Ellipse annotation class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:Ellipse annotation.</param>
/// <returns type="wijmo.chart.annotation.Ellipse"></returns>
/// <field name="width" type="Number">Gets or sets the width of the @see:Ellipse annotation.</field>
/// <field name="height" type="Number">Gets or sets the height of the @see:Ellipse annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.Ellipse';
_wjReownEvents(this);
}
wijmo.chart.annotation.Ellipse.prototype = new wijmo.chart.annotation.Shape();
wijmo.chart.annotation.Ellipse._wjDict = _wjMerge(wijmo.chart.annotation.Shape._wjDict, {width:2,height:2});
wijmo.chart.annotation.Ellipse._wjClass = true;
wijmo.chart.annotation.Rectangle = function(options) {
/// <summary>Initializes a new instance of the @see:Rectangle annotation class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:Rectangle annotation.</param>
/// <returns type="wijmo.chart.annotation.Rectangle"></returns>
/// <field name="width" type="Number">Gets or sets the width of the @see:Rectangle annotation.</field>
/// <field name="height" type="Number">Gets or sets the height of the @see:Rectangle annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.Rectangle';
_wjReownEvents(this);
}
wijmo.chart.annotation.Rectangle.prototype = new wijmo.chart.annotation.Shape();
wijmo.chart.annotation.Rectangle._wjDict = _wjMerge(wijmo.chart.annotation.Shape._wjDict, {width:2,height:2});
wijmo.chart.annotation.Rectangle._wjClass = true;
wijmo.chart.annotation.Line = function(options) {
/// <summary>Initializes a new instance of the @see:Line annotation class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:Line annotation.</param>
/// <returns type="wijmo.chart.annotation.Line"></returns>
/// <field name="start" type="wijmo.chart.DataPoint">Gets or sets the start point of the @see:Line annotation.</field>
/// <field name="end" type="wijmo.chart.DataPoint">Gets or sets the end point of the Line annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.Line';
_wjReownEvents(this);
}
wijmo.chart.annotation.Line.prototype = new wijmo.chart.annotation.Shape();
wijmo.chart.annotation.Line._wjDict = _wjMerge(wijmo.chart.annotation.Shape._wjDict, {start:2,end:2});
wijmo.chart.annotation.Line._wjClass = true;
wijmo.chart.annotation.Polygon = function(options) {
/// <summary>Initializes a new instance of the @see:Polygon annotation class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:Polygon annotation.</param>
/// <returns type="wijmo.chart.annotation.Polygon"></returns>
/// <field name="points" type="wijmo.collections.ObservableArray">Gets the collection of points of the @see:Polygon annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.Polygon';
_wjReownEvents(this);
}
wijmo.chart.annotation.Polygon.prototype = new wijmo.chart.annotation.Shape();
wijmo.chart.annotation.Polygon._wjDict = _wjMerge(wijmo.chart.annotation.Shape._wjDict, {points:2});
wijmo.chart.annotation.Polygon._wjClass = true;
wijmo.chart.annotation.Circle = function(options) {
/// <summary>Initializes a new instance of the @see:Circle annotation class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:Circle annotation.</param>
/// <returns type="wijmo.chart.annotation.Circle"></returns>
/// <field name="radius" type="Number">Gets or sets the radius of the @see:Circle annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.Circle';
_wjReownEvents(this);
}
wijmo.chart.annotation.Circle.prototype = new wijmo.chart.annotation.Shape();
wijmo.chart.annotation.Circle._wjDict = _wjMerge(wijmo.chart.annotation.Shape._wjDict, {radius:2});
wijmo.chart.annotation.Circle._wjClass = true;
wijmo.chart.annotation.Square = function(options) {
/// <summary>Initializes a new instance of the @see:Square annotation class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:Square annotation.</param>
/// <returns type="wijmo.chart.annotation.Square"></returns>
/// <field name="length" type="Number">Gets or sets the length of the @see:Square annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.Square';
_wjReownEvents(this);
}
wijmo.chart.annotation.Square.prototype = new wijmo.chart.annotation.Shape();
wijmo.chart.annotation.Square._wjDict = _wjMerge(wijmo.chart.annotation.Shape._wjDict, {length:2});
wijmo.chart.annotation.Square._wjClass = true;
wijmo.chart.annotation.Image = function(options) {
/// <summary>Initializes a new instance of the @see:Image annotation class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:Image annotation.</param>
/// <returns type="wijmo.chart.annotation.Image"></returns>
/// <field name="width" type="Number">Gets or sets the width of the @see:Image annotation.</field>
/// <field name="height" type="Number">Gets or sets the height of the @see:Image annotation.</field>
/// <field name="href" type="String">Gets or sets the href of the @see:Image annotation.</field>
this._wjClassName = 'wijmo.chart.annotation.Image';
_wjReownEvents(this);
}
wijmo.chart.annotation.Image.prototype = new wijmo.chart.annotation.Shape();
wijmo.chart.annotation.Image._wjDict = _wjMerge(wijmo.chart.annotation.Shape._wjDict, {width:2,height:2,href:2});
wijmo.chart.annotation.Image._wjClass = true;
wijmo.chart.annotation.AnnotationLayer = function(chart, options) {
/// <summary>Initializes a new instance of the @see:AnnotationLayer class.</summary>
/// <param name="chart" type="wijmo.chart.FlexChartCore" optional="false">A chart to which the @see:AnnotationLayer is attached.</param>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:AnnotationLayer.</param>
/// <returns type="wijmo.chart.annotation.AnnotationLayer"></returns>
/// <field name="items" type="wijmo.collections.ObservableArray">Gets the collection of annotation elements in the @see:AnnotationLayer.</field>
this._wjClassName = 'wijmo.chart.annotation.AnnotationLayer';
_wjReownEvents(this);
}
wijmo.chart.annotation.AnnotationLayer.prototype.getItem = function(name) {
/// <summary>Gets the annotation element by name in the @see:AnnotationLayer.</summary>
/// <param name="name" type="String" optional="false">The annotation's name.</param>
/// <returns type="wijmo.chart.annotation.AnnotationBase"></returns>
}
wijmo.chart.annotation.AnnotationLayer.prototype.getItems = function(name) {
/// <summary>Gets the annotation elements by name in the @see:AnnotationLayer.</summary>
/// <param name="name" type="String" optional="false">The annotations' name.</param>
/// <returns type="Array"></returns>
}
wijmo.chart.annotation.AnnotationLayer._wjDict = _wjMerge({}, {items:2});
wijmo.chart.annotation.AnnotationLayer._wjClass = true;
wijmo.chart.interaction = wijmo.chart.interaction || { _wjModule: true };
wijmo.chart.interaction._RangeSlider = function() {
/// <summary>Range Slider.</summary>
/// <returns type="wijmo.chart.interaction._RangeSlider"></returns>
/// <field name="buttonsVisible" type="Boolean">Gets or sets whether the increase/decrease buttons are displayed or not.</field>
/// <field name="isHorizontal" type="Boolean">Gets or sets the orientation of the range slider.</field>
/// <field name="isVisible" type="Boolean">Gets or sets the visibility of the range slider.</field>
/// <field name="minScale" type="Number">Gets or sets the minimum range scale of the range slider.</field>
/// <field name="maxScale" type="Number">Gets or sets the maximum range scale of the range slider.</field>
/// <field name="seamless" type="Boolean">Gets or sets a value that determines whether the minimal and
/// maximal handler will move seamlessly.</field>
/// <field name="rangeChanged" type="wijmo.Event">Occurs after the range changes.</field>
/// <field name="rangeChanging" type="wijmo.Event">Occurs while the range is changing.</field>
this._wjClassName = 'wijmo.chart.interaction._RangeSlider';
this.rangeChanged = new wijmo.Event('wijmo.EventArgs');
this.rangeChanging = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.chart.interaction._RangeSlider.prototype.onRangeChanged = function(e) {
/// <summary>Raises the @see:rangeChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.chart.interaction._RangeSlider.prototype.onRangeChanging = function(e) {
/// <summary>Raises the @see:rangeChanging event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.chart.interaction._RangeSlider._wjDict = _wjMerge({}, {buttonsVisible:2,isHorizontal:2,isVisible:2,minScale:2,maxScale:2,seamless:2,rangeChanged:1,rangeChanging:1});
wijmo.chart.interaction._RangeSlider._wjClass = true;
wijmo.chart.interaction.Orientation = {
// Horizontal, x-data range.
X: 0,
// Vertical, y-data range.
Y: 1,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.interaction, {
// Specifies the orientation of the range selector.
Orientation: undefined
});

wijmo.chart.interaction.RangeSelector = function(chart, options) {
/// <summary>Initializes a new instance of the @see:RangeSelector class.</summary>
/// <param name="chart" type="wijmo.chart.FlexChartCore" optional="false">The @see:FlexChart that displays the selected range.</param>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.chart.interaction.RangeSelector"></returns>
/// <field name="isVisible" type="Boolean">Gets or sets the visibility of the range selector.</field>
/// <field name="min" type="Number">Gets or sets the minimum value of the range.
/// If not set, the minimum is calculated automatically.</field>
/// <field name="max" type="Number">Gets or sets the maximum value of the range.
/// If not set, the maximum is calculated automatically.</field>
/// <field name="orientation" type="wijmo.chart.interaction.Orientation">Gets or sets the orientation of the range selector.</field>
/// <field name="seamless" type="Boolean">Gets or sets a value that determines whether the minimal and maximal
/// handler will move seamlessly.</field>
/// <field name="minScale" type="Number">Gets or sets the minimum range scale of the range selector.
/// The minimum scale is between 0 and 1.</field>
/// <field name="maxScale" type="Number">Gets or sets the maximum range scale of the range selector.
/// The maximum scale is between 0 and 1.</field>
/// <field name="rangeChanged" type="wijmo.Event">Occurs after the range changes.</field>
this._wjClassName = 'wijmo.chart.interaction.RangeSelector';
this.rangeChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.chart.interaction.RangeSelector.prototype.onRangeChanged = function(e) {
/// <summary>Raises the @see:rangeChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.chart.interaction.RangeSelector.prototype.remove = function() {
/// <summary>Removes the @see:RangeSelector control from the chart.</summary>
}
wijmo.chart.interaction.RangeSelector._wjDict = _wjMerge({}, {isVisible:2,min:2,max:2,orientation:2,seamless:2,minScale:2,maxScale:2,rangeChanged:1});
wijmo.chart.interaction.RangeSelector._wjClass = true;
wijmo.chart.interaction.MouseAction = {
// Zoom chart by mouse.
Zoom: 0,
// Pan chart by mouse.
Pan: 1,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.interaction, {
// Specifies the mouse action of the chart gestures.
MouseAction: undefined
});

wijmo.chart.interaction.InteractiveAxes = {
// Interactive Axis X.
X: 0,
// Interactive Axis Y.
Y: 1,
// Interactive Both Axis X and Axis Y.
XY: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.interaction, {
// Specifies the interactive axes of the chart gestures.
InteractiveAxes: undefined
});

wijmo.chart.interaction.ChartGestures = function(chart, options) {
/// <summary>Initializes a new instance of the @see:ChartGestures class.</summary>
/// <param name="chart" type="wijmo.chart.FlexChartCore" optional="false">The @see:FlexChart that allows the user to zoom or pan.</param>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.chart.interaction.ChartGestures"></returns>
/// <field name="mouseAction" type="wijmo.chart.interaction.MouseAction">Gets or sets the mouse action of the ChartGestures.</field>
/// <field name="interactiveAxes" type="wijmo.chart.interaction.InteractiveAxes">Gets or sets the interactive axes of the ChartGestures.</field>
/// <field name="enable" type="Boolean">Gets or sets the enable of the ChartGestures.</field>
/// <field name="scaleX" type="Number">Gets or sets the initial scale of axis X.
/// The scale should be more than 0 and less than or equal to 1.
/// The scale specifies which part of the range between Min and Max
/// is shown. When scale is 1 (default value), the whole axis range
/// is visible.</field>
/// <field name="scaleY" type="Number">Gets or sets the initial scale of axis Y.
/// The scale should be more than 0 and less than or equal to 1.
/// The scale specifies which part of the range between Min and Max
/// is shown. When scale is 1 (default value), the whole axis range
/// is visible.</field>
/// <field name="posX" type="Number">Gets or sets the initial position of the axis X.
/// The value represents initial position on the axis when the Scale
/// is less than 1. Otherwise, the Value has no effect. The Value should
/// lie between 0 to 1.</field>
/// <field name="posY" type="Number">Gets or sets the initial position of the axis Y.
/// The value represents initial position on the axis when the Scale
/// is less than 1. Otherwise, the Value has no effect. The Value should
/// lie between 0 to 1.</field>
this._wjClassName = 'wijmo.chart.interaction.ChartGestures';
_wjReownEvents(this);
}
wijmo.chart.interaction.ChartGestures.prototype.remove = function() {
/// <summary>Removes the @see:ChartGestures control from the chart.</summary>
}
wijmo.chart.interaction.ChartGestures.prototype.reset = function() {
/// <summary>Reset the axis of the chart.</summary>
}
wijmo.chart.interaction.ChartGestures.prototype._refreshChart = function() {
/// <summary>Refreshes the @see:FlexChart with the gestures settings.</summary>
}
wijmo.chart.interaction.ChartGestures.prototype._onMousedown = function(e) {
/// <summary>mouse event</summary>
/// <param name="e" type="MouseEvent" optional="false"></param>
}
wijmo.chart.interaction.ChartGestures.prototype._onPointerdown = function(e) {
/// <summary>ms pointer event</summary>
/// <param name="e" type="PointerEvent" optional="false"></param>
}
wijmo.chart.interaction.ChartGestures.prototype._onTouchStart = function(e) {
/// <summary>touch event</summary>
/// <param name="e" type="Object" optional="false"></param>
}
wijmo.chart.interaction.ChartGestures.prototype._initOverlay = function() {
/// <summary>help method of zooming chart by mouse</summary>
}
wijmo.chart.interaction.ChartGestures._wjDict = _wjMerge({}, {mouseAction:2,interactiveAxes:2,enable:2,scaleX:2,scaleY:2,posX:2,posY:2});
wijmo.chart.interaction.ChartGestures._wjClass = true;
wijmo.chart.animation = wijmo.chart.animation || { _wjModule: true };
wijmo.chart.animation.Easing = {
// Simple linear tweening, no easing and no acceleration.
Linear: 0,
// Easing equation for a swing easing
Swing: 1,
// Easing equation for a quadratic easing in, accelerating from zero velocity.
EaseInQuad: 2,
// Easing equation for a quadratic easing out, decelerating to zero velocity.
EaseOutQuad: 3,
// Easing equation for a quadratic easing in and out, acceleration until halfway, then deceleration.
EaseInOutQuad: 4,
// Easing equation for a cubic easing in - accelerating from zero velocity.
EaseInCubic: 5,
// Easing equation for a cubic easing out - decelerating to zero velocity.
EaseOutCubic: 6,
// Easing equation for a cubic easing in and out - acceleration until halfway, then deceleration.
EaseInOutCubic: 7,
// Easing equation for a quartic easing in - accelerating from zero velocity.
EaseInQuart: 8,
// Easing equation for a quartic easing out - decelerating to zero velocity.
EaseOutQuart: 9,
// Easing equation for a quartic easing in and out - acceleration until halfway, then deceleration.
EaseInOutQuart: 10,
// Easing equation for a quintic easing in - accelerating from zero velocity.
EaseInQuint: 11,
// Easing equation for a quintic easing out - decelerating to zero velocity.
EaseOutQuint: 12,
// Easing equation for a quintic easing in and out - acceleration until halfway, then deceleration.
EaseInOutQuint: 13,
// Easing equation for a sinusoidal easing in - accelerating from zero velocity.
EaseInSine: 14,
// Easing equation for a sinusoidal easing out - decelerating to zero velocity.
EaseOutSine: 15,
// Easing equation for a sinusoidal easing in and out - acceleration until halfway, then deceleration.
EaseInOutSine: 16,
// Easing equation for an exponential easing in - accelerating from zero velocity.
EaseInExpo: 17,
// Easing equation for an exponential easing out - decelerating to zero velocity.
EaseOutExpo: 18,
// Easing equation for an exponential easing in and out - acceleration until halfway, then deceleration.
EaseInOutExpo: 19,
// Easing equation for a circular easing in - accelerating from zero velocity.
EaseInCirc: 20,
// Easing equation for a circular easing out - decelerating to zero velocity.
EaseOutCirc: 21,
// Easing equation for a circular easing in and out - acceleration until halfway, then deceleration.
EaseInOutCirc: 22,
// Easing equation for a back easing in - accelerating from zero velocity.
EaseInBack: 23,
// Easing equation for a back easing out - decelerating to zero velocity.
EaseOutBack: 24,
// Easing equation for a back easing in and out - acceleration until halfway, then deceleration.
EaseInOutBack: 25,
// Easing equation for a bounce easing in - accelerating from zero velocity.
EaseInBounce: 26,
// Easing equation for a bounce easing out - decelerating to zero velocity.
EaseOutBounce: 27,
// Easing equation for a bounce easing in and out - acceleration until halfway, then deceleration.
EaseInOutBounce: 28,
// Easing equation for an elastic easing in - accelerating from zero velocity.
EaseInElastic: 29,
// Easing equation for an elastic easing out - decelerating to zero velocity.
EaseOutElastic: 30,
// Easing equation for an elastic easing in and out - acceleration until halfway, then deceleration.
EaseInOutElastic: 31,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.animation, {
// Specifies the rate of change of a parameter over time.
Easing: undefined
});

wijmo.chart.animation.AnimationMode = {
// All points and series are animated at once.
All: 0,
// Animation is performed point by point. Multiple series are animated
// simultaneously at the same time.
Point: 1,
// Animation is performed series by series.
// Entire series is animated at once, following the same animation as the "All"
// option, but just one series at a time.
Series: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.animation, {
// Specifies the animation mode whether chart should animate one point at a time,
// series by series, or all at once.
AnimationMode: undefined
});

wijmo.chart.animation.ChartAnimation = function(chart, options) {
/// <summary>Initializes a new instance of the @see:ChartAnimation class.</summary>
/// <param name="chart" type="wijmo.chart.FlexChartBase" optional="false">A chart to which the @see:ChartAnimation is attached.</param>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for
/// @see:ChartAnimation.</param>
/// <returns type="wijmo.chart.animation.ChartAnimation"></returns>
/// <field name="animationMode" type="wijmo.chart.animation.AnimationMode">Gets or sets whether the plot points animate one at a time, series by series,
/// or all at once.
/// The whole animation is still completed within the duration.</field>
/// <field name="easing" type="wijmo.chart.animation.Easing">Gets or sets the easing function applied to the animation.</field>
/// <field name="duration" type="Number">Gets or sets the length of entire animation in milliseconds.</field>
/// <field name="axisAnimation" type="Boolean">Gets or sets a value indicating whether animation is applied to the axis.</field>
this._wjClassName = 'wijmo.chart.animation.ChartAnimation';
_wjReownEvents(this);
}
wijmo.chart.animation.ChartAnimation._wjDict = _wjMerge({}, {animationMode:2,easing:2,duration:2,axisAnimation:2});
wijmo.chart.animation.ChartAnimation._wjClass = true;
wijmo.chart.hierarchical = wijmo.chart.hierarchical || { _wjModule: true };
wijmo.chart.hierarchical.Sunburst = function() {
/// <summary>Sunburst chart control.</summary>
/// <returns type="wijmo.chart.hierarchical.Sunburst"></returns>
/// <field name="bindingName" type="Object">Gets or sets the name of the property that contains the name of the data item, it should be an array or a string.</field>
/// <field name="childItemsPath" type="Object">Gets or sets the name of the property (or properties) used to generate
/// child items in hierarchical data.
/// 
/// Set this property to a string to specify the name of the property that
/// contains an item's child items (e.g. <code>'items'</code>).
/// 
/// If items at different levels child items with different names, then
/// set this property to an array containing the names of the properties
/// that contain child items et each level
/// (e.g. <code>[ 'accounts', 'checks', 'earnings' ]</code>).</field>
this._wjClassName = 'wijmo.chart.hierarchical.Sunburst';
_wjReownEvents(this);
}
wijmo.chart.hierarchical.Sunburst.prototype = new wijmo.chart.FlexPie();
wijmo.chart.hierarchical.Sunburst._wjDict = _wjMerge(wijmo.chart.FlexPie._wjDict, {bindingName:2,childItemsPath:2});
wijmo.chart.hierarchical.Sunburst._wjClass = true;
wijmo.gauge = wijmo.gauge || { _wjModule: true };
wijmo.gauge.ShowText = {
// Do not show any text in the gauge.
None: 0,
// Show the gauge's @see:Gauge.value as text.
Value: 1,
// Show the gauge's @see:Gauge.min and @see:Gauge.max values as text.
MinMax: 2,
// Show the gauge's @see:Gauge.value, @see:Gauge.min, and @see:Gauge.max as text.
All: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.gauge, {
// Specifies which values to display as text.
ShowText: undefined
});

wijmo.gauge.Gauge = function(element, options) {
/// <summary>Initializes a new instance of the @see:Gauge class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.gauge.Gauge"></returns>
/// <field name="value" type="Number">Gets or sets the value to display on the gauge.</field>
/// <field name="min" type="Number">Gets or sets the minimum value that can be displayed on the gauge.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="max" type="Number">Gets or sets the maximum value that can be displayed on the gauge.
/// 
/// For details about using the @see:min and @see:max properties, please see the
/// <a href="static/minMax.html">Using the min and max properties</a> topic.</field>
/// <field name="origin" type="Number">Gets or sets the starting point used for painting the range.
/// 
/// By default, this property is set to null, which causes the value range
/// to start at the gauge's minimum value, or zero if the minimum is less
/// than zero.</field>
/// <field name="isReadOnly" type="Boolean">Gets or sets a value that indicates whether the user can edit the value
/// using the mouse and keyboard.</field>
/// <field name="step" type="Number">Gets or sets the amount to add to or subtract from the @see:value property
/// when the user presses the arrow keys or moves the mouse wheel.</field>
/// <field name="format" type="String">Gets or sets the format string used to display gauge values as text.</field>
/// <field name="getText" type="Function">Gets or sets a callback that returns customized strings used to
/// display gauge values.
/// 
/// Use this property if you want to customize the strings shown on
/// the gauge in cases where the @see:format property is not enough.
/// 
/// If provided, the callback should be a function as that takes as
/// parameters the gauge, the part name, the value, and the formatted
/// value. The callback should return the string to be displayed on
/// the gauge.
/// 
/// For example:
/// 
/// <pre>// callback to convert values into strings
/// gauge.getText = function (gauge, part, value, text) {
///   switch (part) {
///     case 'value':
///       if (value &lt;= 10) return 'Empty!';
///       if (value &lt;= 25) return 'Low...';
///       if (value &lt;= 95) return 'Good';
///       return 'Full';
///     case 'min':
///       return 'EMPTY';
///     case 'max':
///       return 'FULL';
///   }
///   return text;
/// }</pre></field>
/// <field name="thickness" type="Number">Gets or sets the thickness of the gauge, on a scale between zero and one.
/// 
/// Setting the thickness to one causes the gauge to fill as much of the
/// control area as possible. Smaller values create thinner gauges.</field>
/// <field name="face" type="wijmo.gauge.Range">Gets or sets the @see:Range used to represent the gauge's overall geometry
/// and appearance.</field>
/// <field name="pointer" type="wijmo.gauge.Range">Gets or sets the @see:Range used to represent the gauge's current value.</field>
/// <field name="showText" type="wijmo.gauge.ShowText">Gets or sets the @see:ShowText values to display as text in the gauge.</field>
/// <field name="thumbSize" type="Number">Gets or sets the size of the element that shows the gauge's current value, in pixels.</field>
/// <field name="showRanges" type="Boolean">Gets or sets a value that indicates whether the gauge displays the ranges contained in
/// the @see:ranges property.
/// 
/// If this property is set to false, the ranges contained in the @see:ranges property are not
/// displayed in the gauge. Instead, they are used to interpolate the color of the @see:pointer
/// range while animating value changes.</field>
/// <field name="hasShadow" type="Boolean">Gets or sets a value that indicates whether the gauge displays a shadow effect.</field>
/// <field name="isAnimated" type="Boolean">Gets or sets a value that indicates whether the gauge animates value changes.</field>
/// <field name="ranges" type="wijmo.collections.ObservableArray">Gets the collection of ranges in this gauge.</field>
/// <field name="valueChanged" type="wijmo.Event">Occurs when the value shown on the gauge changes.</field>
this._wjClassName = 'wijmo.gauge.Gauge';
this.valueChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.gauge.Gauge.prototype = new wijmo.Control();
wijmo.gauge.Gauge.prototype.onValueChanged = function(e) {
/// <summary>Raises the @see:valueChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.gauge.Gauge.prototype.refresh = function(fullUpdate) {
/// <summary>Refreshes the control.</summary>
/// <param name="fullUpdate" type="Boolean" optional="true">Indicates whether to update the control layout as well as the content.</param>
}
wijmo.gauge.Gauge.prototype.hitTest = function(pt, y) {
/// <summary>Gets a number that corresponds to the value of the gauge at a given point.
/// 
/// For example:
/// 
/// <pre>
/// // hit test a point when the user clicks on the gauge
/// gauge.hostElement.addEventListener('click', function (e) {
///   var ht = gauge.hitTest(e.pageX, e.pageY);
///   if (ht != null) {
///     console.log('you clicked the gauge at value ' + ht.toString());
///   }
/// });
/// </pre></summary>
/// <param name="pt" type="Object" optional="false">The point to investigate, in window coordinates, or a MouseEvent object,
/// or the x coordinate of the point.</param>
/// <param name="y" type="Number" optional="true">The Y coordinate of the point (if the first parameter is a number).</param>
/// <returns type="Number">Value of the gauge at the point, or null if the point is not on the gauge's face.</returns>
}
wijmo.gauge.Gauge.controlTemplate = undefined;
intellisense.annotate(wijmo.gauge.Gauge, {
// Gets or sets the template used to instantiate @see:Gauge controls.
controlTemplate: undefined
});
wijmo.gauge.Gauge._wjDict = _wjMerge(wijmo.Control._wjDict, {value:2,min:2,max:2,origin:2,isReadOnly:2,step:2,format:2,getText:2,thickness:2,face:2,pointer:2,showText:2,thumbSize:2,showRanges:2,hasShadow:2,isAnimated:2,ranges:2,valueChanged:1});
wijmo.gauge.Gauge._wjClass = true;
wijmo.gauge.GaugeDirection = {
// Gauge value increases from left to right.
Right: 0,
// Gauge value increases from right to left.
Left: 1,
// Gauge value increases from bottom to top.
Up: 2,
// Gauge value increases from top to bottom.
Down: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.gauge, {
// Represents the direction in which the pointer of a @see:LinearGauge
// increases.
GaugeDirection: undefined
});

wijmo.gauge.LinearGauge = function(element, options) {
/// <summary>Initializes a new instance of the @see:LinearGauge class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.gauge.LinearGauge"></returns>
/// <field name="direction" type="wijmo.gauge.GaugeDirection">Gets or sets the direction in which the gauge is filled.</field>
this._wjClassName = 'wijmo.gauge.LinearGauge';
_wjReownEvents(this);
}
wijmo.gauge.LinearGauge.prototype = new wijmo.gauge.Gauge();
wijmo.gauge.LinearGauge._wjDict = _wjMerge(wijmo.gauge.Gauge._wjDict, {direction:2});
wijmo.gauge.LinearGauge._wjClass = true;
wijmo.gauge.RadialGauge = function(element, options) {
/// <summary>Initializes a new instance of the @see:RadialGauge class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.gauge.RadialGauge"></returns>
/// <field name="startAngle" type="Number">Gets or sets the starting angle for the gauge, in degrees.
/// 
/// Angles are measured in degrees, clockwise, starting from the 9 o'clock position.</field>
/// <field name="sweepAngle" type="Number">Gets or sets the sweeping angle for the gauge, in degrees.
/// 
/// Angles are measured in degrees, clockwise, starting from the 9 o'clock position.</field>
/// <field name="autoScale" type="Boolean">Gets or sets a value that indicates whether the gauge automatically scales to
/// fill the host element.</field>
this._wjClassName = 'wijmo.gauge.RadialGauge';
_wjReownEvents(this);
}
wijmo.gauge.RadialGauge.prototype = new wijmo.gauge.Gauge();
wijmo.gauge.RadialGauge.prototype.refresh = function(fullUpdate) {
/// <summary>Refreshes the control.</summary>
/// <param name="fullUpdate" type="Boolean" optional="true">Indicates whether to update the control layout as well as the content.</param>
}
wijmo.gauge.RadialGauge._wjDict = _wjMerge(wijmo.gauge.Gauge._wjDict, {startAngle:2,sweepAngle:2,autoScale:2});
wijmo.gauge.RadialGauge._wjClass = true;
wijmo.gauge.BulletGraph = function(element, options) {
/// <summary>Initializes a new instance of the @see:BulletGraph class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.gauge.BulletGraph"></returns>
/// <field name="target" type="Number">Gets or sets the target value for the measure.</field>
/// <field name="good" type="Number">Gets or sets a reference value considered good for the measure.</field>
/// <field name="bad" type="Number">Gets or sets a reference value considered bad for the measure.</field>
this._wjClassName = 'wijmo.gauge.BulletGraph';
_wjReownEvents(this);
}
wijmo.gauge.BulletGraph.prototype = new wijmo.gauge.LinearGauge();
wijmo.gauge.BulletGraph._wjDict = _wjMerge(wijmo.gauge.LinearGauge._wjDict, {target:2,good:2,bad:2});
wijmo.gauge.BulletGraph._wjClass = true;
wijmo.gauge.Range = function(name) {
/// <summary>Initializes a new instance of the @see:Range class.</summary>
/// <param name="name" type="String" optional="true">The name of the range.</param>
/// <returns type="wijmo.gauge.Range"></returns>
/// <field name="min" type="Number">Gets or sets the minimum value for this range.</field>
/// <field name="max" type="Number">Gets or sets the maximum value for this range.</field>
/// <field name="color" type="String">Gets or sets the color used to display this range.</field>
/// <field name="thickness" type="Number">Gets or sets the thickness of this range as a percentage of
/// the parent gauge's thickness.</field>
/// <field name="name" type="String">Gets or sets the name of this @see:Range.</field>
/// <field name="propertyChanged" type="wijmo.Event">Occurs when the value of a property in this @see:Range changes.</field>
this._wjClassName = 'wijmo.gauge.Range';
this.propertyChanged = new wijmo.Event('wijmo.PropertyChangedEventArgs');
_wjReownEvents(this);
}
wijmo.gauge.Range.prototype.onPropertyChanged = function(e) {
/// <summary>Raises the @see:propertyChanged event.</summary>
/// <param name="e" type="wijmo.PropertyChangedEventArgs" optional="false">@see:PropertyChangedEventArgs that contains the property
/// name, old, and new values.</param>
}
wijmo.gauge.Range._wjDict = _wjMerge({}, {min:2,max:2,color:2,thickness:2,name:2,propertyChanged:1});
wijmo.gauge.Range._wjClass = true;
wijmo.odata = wijmo.odata || { _wjModule: true };
wijmo.odata.ODataCollectionView = function(url, tableName, options) {
/// <summary>Initializes a new instance of the @see:ODataCollectionView class.</summary>
/// <param name="url" type="String" optional="false">Url of the OData service (for example
/// 'http://services.odata.org/Northwind/Northwind.svc').</param>
/// <param name="tableName" type="String" optional="false">Name of the table (entity) to retrieve from the service.
/// If not provided, a list of the tables (entities) available is retrieved.</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data (property
/// values and event handlers) for the @see:ODataCollectionView.</param>
/// <returns type="wijmo.odata.ODataCollectionView"></returns>
/// <field name="tableName" type="String">Gets the name of the table (entity) that this collection is bound to.</field>
/// <field name="fields" type="String[]">Gets or sets an array containing the names of the fields to retrieve from
/// the data source.
/// 
/// If this property is set to null or to an empty array, all fields are
/// retrieved.
/// 
/// For example, the code below creates an @see:ODataCollectionView that
/// gets only three fields from the 'Categories' table in the database:
/// 
/// <pre>var categories = new wijmo.data.ODataCollectionView(url, 'Categories', {
///   fields: ['CategoryID', 'CategoryName', 'Description']
/// });</pre></field>
/// <field name="requestHeaders" type="Object">Gets or sets an object containing request headers to be used when sending
/// or requesting data.
/// 
/// The most typical use for this property is in scenarios where authentication
/// is required. For example:
/// 
/// <pre>var categories = new wijmo.odata.ODataCollectionView(serviceUrl, 'Categories', {
///   fields: ['Category_ID', 'Category_Name'],
///   requestHeaders: { Authorization: db.token }
/// });</pre></field>
/// <field name="keys" type="String[]">Gets or sets an array containing the names of the key fields.
/// 
/// Key fields are required for update operations (add/remove/delete).</field>
/// <field name="dataTypes" type="Object">Gets or sets a JavaScript object to be used as a map for coercing data types
/// when loading the data.
/// 
/// The object keys represent the field names and the values are @see:DataType values
/// that indicate how the data should be coerced.
/// 
/// For example, the code below creates an @see:ODataCollectionView and specifies
/// that 'Freight' values, which are stored as strings in the database, should be
/// converted into numbers; and that three date fields should be converted into dates:
/// 
/// <pre>var orders = new wijmo.data.ODataCollectionView(url, 'Orders', {
///   dataTypes: {
///     Freight: wijmo.DataType.Number
///     OrderDate: wijmo.DataType.Date,
///     RequiredDate: wijmo.DataType.Date,
///     ShippedDate: wijmo.DataType.Date,
///   }
/// });</pre>
/// 
/// This property is useful when the database contains data stored in
/// formats that do not conform to common usage.
/// 
/// In most cases you don't have to provide information about the
/// data types, because the @see:inferDataTypes property handles
/// the conversion of Date values automatically.
/// 
/// If you do provide explicit type information, the @see:inferDataTypes
/// property is not applied. Because of this, any data type information
/// that is provided should be complete, including all fields of type
/// Date.</field>
/// <field name="inferDataTypes" type="Boolean">Gets or sets a value that determines whether fields that contain
/// strings that look like standard date representations should be
/// converted to dates automatically.
/// 
/// This property is set to true by default, because the @see:ODataCollectionView
/// class uses JSON and that format does not support Date objects.
/// 
/// This property has no effect if specific type information is provided using
/// the @see:dataTypes property.</field>
/// <field name="sortOnServer" type="Boolean">Gets or sets a value that determines whether sort operations
/// should be performed on the server or on the client.
/// 
/// Use the @see:sortDescriptions property to specify how the
/// data should be sorted.</field>
/// <field name="pageOnServer" type="Boolean">Gets or sets a value that determines whether paging should be
/// performed on the server or on the client.
/// 
/// Use the @see:pageSize property to enable paging.</field>
/// <field name="filterOnServer" type="Boolean">Gets or sets a value that determines whether filtering should be performed on
/// the server or on the client.
/// 
/// Use the @see:filter property to perform filtering on the client, and use the
/// @see:filterDefinition property to perform filtering on the server.
/// 
/// In some cases it may be desirable to apply independent filters on the client
/// <b>and</b> on the server.
/// 
/// You can achieve this by setting (1) the @see:filterOnServer property to false
/// and the @see:filter property to a  filter function (to enable client-side filtering)
/// and (2) the @see:filterDefinition property to a filter string (to enable server-side
/// filtering).</field>
/// <field name="filterDefinition" type="String">Gets or sets a string containing an OData filter specification to
/// be used for filtering the data on the server.
/// 
/// The filter definition syntax is described in the
/// <a href="http://www.odata.org/documentation/odata-version-2-0/uri-conventions/">OData documentation</a>.
/// 
/// For example, the code below causes the server to return records where the 'CompanyName'
/// field starts with 'A' and ends with 'S':
/// 
/// <pre>view.filterDefinition = "startswith(CompanyName, 'A') and endswith(CompanyName, 'B')";</pre>
/// 
/// Filter definitions can be generated automatically. For example, the
/// @see:FlexGridFilter component detects whether its data source is an
/// @see:ODataCollectionView and automatically updates both the
/// @see:ODataCollectionView.filter and @see:ODataCollectionView.filterDefinition
/// properties.
/// 
/// Note that the @see:ODataCollectionView.filterDefinition property is applied even if the
/// @see:ODataCollectionView.filterOnServer property is set to false. This allows you to apply
/// server and client filters to the same collection, which can be useful in many scenarios.
/// 
/// For example, the code below uses the @see:ODataCollectionView.filterDefinition property
/// to filter on the server and the @see:ODataCollectionView.filter property to further
/// filter on the client. The collection will show items with names that start with 'C'
/// and have unit prices greater than 20:
/// 
/// <pre>var url = 'http://services.odata.org/V4/Northwind/Northwind.svc/';
/// var data = new wijmo.odata.ODataCollectionView(url, 'Products', {
///   oDataVersion: 4,
///   filterDefinition: 'startswith(ProductName, \'C\')', // server filter
///   filterOnServer: false, // client filter
///   filter: function(product) {
///     return product.UnitPrice &gt; 20;
///   },
/// });</pre></field>
/// <field name="oDataVersion" type="Number">Gets or sets the OData version used by the server.
/// 
/// There are currently four versions of OData services, 1.0 through 4.0.
/// Version 4.0 is used by the latest services, but there are many legacy
/// services still in operation.
/// 
/// If you know what version of OData your service implements, set the
/// @see:oDataVersion property to the appropriate value (1 through 4) when
/// creating the @see:ODataCollectionView (see example below).
/// 
/// <pre>var url = 'http://services.odata.org/Northwind/Northwind.svc';
/// var categories = new wijmo.odata.ODataCollectionView(url, 'Categories', {
///   oDataVersion: 1.0, // legacy OData source
///   fields: ['CategoryID', 'CategoryName', 'Description'],
///   sortOnServer: false
/// });</pre>
/// 
/// If you do not know what version of OData your service implements (perhaps
/// you are writing an OData explorer application), then do not specify the
/// version. In this case, the @see:ODataCollectionView will get this information
/// from the server. This operation requires an extra request, but only once
/// per service URL, so the overhead is small.</field>
/// <field name="isLoading" type="Boolean">Gets a value that indicates the @see:ODataCollectionView is
/// currently loading data.
/// 
/// This property can be used to provide progress indicators.</field>
/// <field name="loading" type="wijmo.Event">Occurs when the @see:ODataCollectionView starts loading data.</field>
/// <field name="loaded" type="wijmo.Event">Occurs when the @see:ODataCollectionView finishes loading data.</field>
/// <field name="error" type="wijmo.Event">Occurs when there is an error reading or writing data.</field>
/// <field name="totalItemCount" type="Number">Gets the total number of items in the view before paging is applied.</field>
/// <field name="pageCount" type="Number">Gets the total number of pages.</field>
/// <field name="pageSize" type="Number">Gets or sets the number of items to display on a page.</field>
this._wjClassName = 'wijmo.odata.ODataCollectionView';
this.loading = new wijmo.Event('wijmo.EventArgs');
this.loaded = new wijmo.Event('wijmo.EventArgs');
this.error = new wijmo.Event('wijmo.RequestErrorEventArgs');
_wjReownEvents(this);
}
wijmo.odata.ODataCollectionView.prototype = new wijmo.collections.CollectionView();
wijmo.odata.ODataCollectionView.prototype.updateFilterDefinition = function(filterProvider) {
/// <summary>Updates the filter definition based on a known filter provider such as the
/// @see:FlexGridFilter.</summary>
/// <param name="filterProvider" type="Object" optional="false">Known filter provider, typically an instance of a
/// @see:FlexGridFilter.</param>
}
wijmo.odata.ODataCollectionView.prototype.onLoading = function(e) {
/// <summary>Raises the @see:loading event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.odata.ODataCollectionView.prototype.onLoaded = function(e) {
/// <summary>Raises the @see:loaded event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.odata.ODataCollectionView.prototype.load = function() {
/// <summary>Loads or re-loads the data from the OData source.</summary>
}
wijmo.odata.ODataCollectionView.prototype.onError = function(e) {
/// <summary>Raises the @see:error event.
/// 
/// By default, errors throw exceptions and trigger a data refresh. If you
/// want to prevent this behavior, set the @see:RequestErrorEventArgs.cancel
/// parameter to true in the event handler.</summary>
/// <param name="e" type="wijmo.RequestErrorEventArgs" optional="false">@see:RequestErrorEventArgs that contains information about the error.</param>
/// <returns type="Boolean"></returns>
}
wijmo.odata.ODataCollectionView.prototype.commitNew = function() {
/// <summary>Override @see:commitNew to add the new item to the database.</summary>
}
wijmo.odata.ODataCollectionView.prototype.commitEdit = function() {
/// <summary>Override @see:commitEdit to modify the item in the database.</summary>
}
wijmo.odata.ODataCollectionView.prototype.remove = function(item) {
/// <summary>Override @see:remove to remove the item from the database.</summary>
/// <param name="item" type="Object" optional="false">Item to be removed from the database.</param>
}
wijmo.odata.ODataCollectionView.prototype.onPageChanging = function(e) {
/// <summary>Raises the @see:pageChanging event.</summary>
/// <param name="e" type="wijmo.collections.PageChangingEventArgs" optional="false">@see:PageChangingEventArgs that contains the event data.</param>
/// <returns type="Boolean"></returns>
}
wijmo.odata.ODataCollectionView._wjDict = _wjMerge(wijmo.collections.CollectionView._wjDict, {tableName:2,fields:2,requestHeaders:2,keys:2,dataTypes:2,inferDataTypes:2,sortOnServer:2,pageOnServer:2,filterOnServer:2,filterDefinition:2,oDataVersion:2,isLoading:2,loading:1,loaded:1,error:1,totalItemCount:2,pageCount:2,pageSize:2});
wijmo.odata.ODataCollectionView._wjClass = true;
wijmo.odata.ODataVirtualCollectionView = function(url, tableName, options) {
/// <summary>Initializes a new instance of the @see:ODataVirtualCollectionView class.</summary>
/// <param name="url" type="String" optional="false">Url of the OData service (for example
/// 'http://services.odata.org/Northwind/Northwind.svc').</param>
/// <param name="tableName" type="String" optional="false">Name of the table (entity) to retrieve from the service.
/// If not provided, a list of the tables (entities) available is retrieved.</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data (property
/// values and event handlers) for the @see:ODataVirtualCollectionView.</param>
/// <returns type="wijmo.odata.ODataVirtualCollectionView"></returns>
/// <field name="pageOnServer" type="Boolean">@see:ODataVirtualCollectionView requires @see:pageOnServer to be set to true.</field>
/// <field name="sortOnServer" type="Boolean">@see:ODataVirtualCollectionView requires @see:sortOnServer to be set to true.</field>
/// <field name="filterOnServer" type="Boolean">@see:ODataVirtualCollectionView requires @see:filterOnServer to be set to true.</field>
/// <field name="canGroup" type="Boolean">@see:ODataVirtualCollectionView requires @see:canGroup to be set to false.</field>
this._wjClassName = 'wijmo.odata.ODataVirtualCollectionView';
_wjReownEvents(this);
}
wijmo.odata.ODataVirtualCollectionView.prototype = new wijmo.odata.ODataCollectionView();
wijmo.odata.ODataVirtualCollectionView.prototype.setWindow = function(start, end) {
/// <summary>Sets the data window to ensure a range of records are loaded into the view.</summary>
/// <param name="start" type="Number" optional="false">Index of the first item in the data window.</param>
/// <param name="end" type="Number" optional="false">Index of the last item in the data window.</param>
}
wijmo.odata.ODataVirtualCollectionView._wjDict = _wjMerge(wijmo.odata.ODataCollectionView._wjDict, {pageOnServer:2,sortOnServer:2,filterOnServer:2,canGroup:2});
wijmo.odata.ODataVirtualCollectionView._wjClass = true;
wijmo.xlsx = wijmo.xlsx || { _wjModule: true };
wijmo.xlsx.Workbook = function() {
/// <summary>Initializes a new instance of the @see:Workbook class.</summary>
/// <returns type="wijmo.xlsx.Workbook"></returns>
/// <field name="application" type="String">Gets or sets the name of application that generated the file that appears in the file properties.</field>
/// <field name="company" type="String">Gets or sets the name of company that generated the file that appears in the file properties.</field>
/// <field name="creator" type="String">Gets or sets the creator of the xlsx file.</field>
/// <field name="created" type="Date">Gets or sets the creation time of the xlsx file.</field>
/// <field name="lastModifiedBy" type="String">Gets or sets the last modifier of the xlsx file.</field>
/// <field name="modified" type="Date">Gets or sets the last modified time of the xlsx file.</field>
/// <field name="activeWorksheet" type="Number">Gets or sets the index of the active sheet in the xlsx file.</field>
/// <field name="sheets" type="wijmo.xlsx.WorkSheet[]">Gets the WorkSheet array of the Workbook.</field>
/// <field name="styles" type="wijmo.xlsx.WorkbookStyle[]">Gets the styles table of the workbook.</field>
/// <field name="reservedContent" type="Object">Gets or sets the reserved content from xlsx file that flexgrid or flexsheet doesn't support yet.</field>
this._wjClassName = 'wijmo.xlsx.Workbook';
_wjReownEvents(this);
}
wijmo.xlsx.Workbook.prototype.save = function(fileName) {
/// <summary>Saves the book to a file and returns a base-64 string representation of
/// the book.
/// 
/// For example, this sample creates an xlsx file with a single cell:
/// 
/// <pre>function exportXlsx(fileName) {
///     var book = new wijmo.xlsx.Workbook(),
///         sheet = new wijmo.xlsx.WorkSheet(),
///         bookRow = new wijmo.xlsx.WorkbookRow(),
///         bookCell = new wijmo.xlsx.WorkbookCell();
///     bookCell.value = 'Hello, Excel!';
///     bookRow.cells.push(bookCell);
///     sheet.rows.push(bookRow);
///     book.sheets.push(sheet);
///     book.save(fileName);
/// }</pre>
/// 
/// The file name is optional. If not provided, the method still returns
/// a base-64 string representing the book. This string can be used for
/// further processing on the client or on the server.</summary>
/// <param name="fileName" type="String" optional="true">Name of the xlsx file to save.</param>
/// <returns type="String">A base-64 string representing the content of the file.</returns>
}
wijmo.xlsx.Workbook.prototype.load = function(base64) {
/// <summary>Loads from base 64 string or data url.
/// 
/// For example:
/// <pre>// This sample opens an xlsx file chosen from Open File
/// // dialog and creates a workbook instance to load the file.
/// &nbsp;
/// // HTML
/// &lt;input type="file"
///     id="importFile"
///     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
/// /&gt;
/// &nbsp;
/// // JavaScript
/// var workbook, // receives imported IWorkbook
///     importFile = document.getElementById('importFile');
/// &nbsp;
/// importFile.addEventListener('change', function () {
///     loadWorkbook();
/// });
/// &nbsp;
/// function loadWorkbook() {
///     var reader,
///         workbook,
///         file = importFile.files[0];
///     if (file) {
///         reader = new FileReader();
///         reader.onload = function (e) {
///            workbook = new wijmo.xlsx.Workbook(),
///            workbook.load(reader.result);
///         };
///         reader.readAsDataURL(file);
///     }
/// }</pre></summary>
/// <param name="base64" type="String" optional="false">the base 64 string that contains the xlsx file content.</param>
}
wijmo.xlsx.Workbook.toXlsxDateFormat = function(format) {
/// <summary>Converts the wijmo date format to Excel format.</summary>
/// <param name="format" type="String" optional="false">The wijmo date format.</param>
/// <returns type="String">Excel format representation.</returns>
}
wijmo.xlsx.Workbook.toXlsxNumberFormat = function(format) {
/// <summary>Converts the wijmo number format to xlsx format.</summary>
/// <param name="format" type="String" optional="false">The wijmo number format.</param>
/// <returns type="String">Excel format representation.</returns>
}
wijmo.xlsx.Workbook.fromXlsxFormat = function(xlsxFormat) {
/// <summary>Converts the xlsx multi-section format string to an array of corresponding wijmo formats.</summary>
/// <param name="xlsxFormat" type="String" optional="false">The Excel format string, that may contain multiple format sections separated by semicolon.</param>
/// <returns type="String[]">An array of .Net format strings where each element corresponds to a separate Excel format section.
/// The returning array always contains at least one element. It can be an empty string in case the passed Excel format is empty.</returns>
}
wijmo.xlsx.Workbook.xlsxAddress = function(row, col, absolute, absoluteCol) {
/// <summary>Converts zero-based cell, row or column index to Excel alphanumeric representation.</summary>
/// <param name="row" type="Number" optional="false">The zero-based row index or a null value if only column index should be converted.</param>
/// <param name="col" type="Number" optional="false">The zero-based column index or a null value if only row index should be converted.</param>
/// <param name="absolute" type="Boolean" optional="true">True value indicates that absolute indexes should be returned for both row and
///        column indexes (like $D$7). The <b>absoluteCol</b> parameter allows to redefine this value for the column index.</param>
/// <param name="absoluteCol" type="Boolean" optional="true">True value indicates that column index is absolute.</param>
/// <returns type="String">The alphanumeric Excel index representation.</returns>
}
wijmo.xlsx.Workbook.tableAddress = function(xlsxIndex) {
/// <summary>Convert Excel's alphanumeric cell, row or column index to the zero-based row/column indexes pair.</summary>
/// <param name="xlsxIndex" type="String" optional="false">The alphanumeric Excel index that may include alphabetic A-based on column index
/// and/or numeric 1-based on row index, like "D15", "D" or "15". The alphabetic column index can be
/// in lower or upper case.</param>
/// <returns type="wijmo.xlsx.ITableAddress">The object with <b>row</b> and <b>col</b> properties containing zero-based row and/or column indexes.
/// If row or column component is not specified in the alphanumeric index then corresponding returning property is undefined.</returns>
}
wijmo.xlsx.Workbook._wjDict = _wjMerge({}, {sheets:2,styles:2,reservedContent:2});
wijmo.xlsx.Workbook._wjClass = true;
wijmo.xlsx.WorkSheet = function() {
/// <summary>Initializes a new instance of the @see:WorkSheet class.</summary>
/// <returns type="wijmo.xlsx.WorkSheet"></returns>
/// <field name="name" type="String">Gets or sets the sheet name.</field>
/// <field name="frozenPane" type="wijmo.xlsx.WorkbookFrozenPane">Gets or sets the @see:WorkbookFrozenPane settings.</field>
/// <field name="summaryBelow" type="Boolean">Gets or sets a value indicating whether summary rows appear below or above detail rows.</field>
/// <field name="visible" type="Boolean">Gets or sets the worksheet visibility.</field>
/// <field name="style" type="wijmo.xlsx.WorkbookStyle">Gets or sets the row style.
/// 
/// The property defines the style for all cells in the worksheet, and can be overridden by the specific cell styles.</field>
/// <field name="columns" type="wijmo.xlsx.WorkbookColumn[]">Gets or sets an array of sheet columns definitions.
/// 
/// Each @see:WorkbookColumn object in the array describes a column at the corresponding position in xlsx sheet,
/// i.e. the column with index 0
/// corresponds to xlsx sheet column with index A, object with index 1 defines sheet column with index B, and so on. If certain column
/// has no description in xlsx file then corresponding array element is undefined for both export and import operations.
/// 
/// If @see:WorkbookColumn object in the array doesn't specify the <b>width</b> property value then the default column width
/// is applied.</field>
/// <field name="rows" type="wijmo.xlsx.WorkbookRow[]">Gets an array of sheet rows definition.
/// 
/// Each @see:WorkbookRow object in the array describes a row at the corresponding position in xlsx sheet,
/// i.e. the row with index 0
/// corresponds to xlsx sheet row with index 1, object with index 1 defines sheet row with index 2, and so on. If certain row
/// has no properties and data in xlsx file then corresponding array element is undefined for both export and import operations.
/// 
/// If @see:WorkbookRow object in the array doesn't specify the <b>height</b> property value then the default row height
/// is applied.</field>
this._wjClassName = 'wijmo.xlsx.WorkSheet';
_wjReownEvents(this);
}
wijmo.xlsx.WorkSheet._wjDict = _wjMerge({}, {columns:2,rows:2});
wijmo.xlsx.WorkSheet._wjClass = true;
wijmo.xlsx.WorkbookColumn = function() {
/// <summary>Initializes a new instance of the @see:WorkbookColumn class.</summary>
/// <returns type="wijmo.xlsx.WorkbookColumn"></returns>
/// <field name="width" type="Object">Gets or sets the width of the column in device-independent (1/96th inch) pixels or characters.
/// 
/// The numeric value defines the width in pixels. On import the widths are always expressed in pixels.
/// 
/// The string value which is a number with the 'ch' suffix, for example '10ch', defines the width in characters.
/// It has the same meaning as the column width defined via Excel UI. The width can be specified in characters
/// only for export operations.
/// 
/// If width is not specified then the default width is applied.</field>
/// <field name="visible" type="Boolean">Gets or sets the column visibility.</field>
/// <field name="style" type="wijmo.xlsx.WorkbookStyle">Gets or sets the column style.
/// 
/// The property defines the style for all cells in the column, and can be overridden by the specific cell styles.</field>
/// <field name="autoWidth" type="Boolean">Gets or sets a value indicating whether the column width is automatically adjusted to fit its cells content.</field>
this._wjClassName = 'wijmo.xlsx.WorkbookColumn';
_wjReownEvents(this);
}
wijmo.xlsx.WorkbookColumn._wjDict = _wjMerge({}, {});
wijmo.xlsx.WorkbookColumn._wjClass = true;
wijmo.xlsx.WorkbookRow = function() {
/// <summary>Initializes a new instance of the @see:WorkbookRow class.</summary>
/// <returns type="wijmo.xlsx.WorkbookRow"></returns>
/// <field name="height" type="Number">Gets or sets the row height in device-independent (1/96th inch) pixels.
/// 
/// If height is not specified then the default height is applied.</field>
/// <field name="visible" type="Boolean">Gets or sets the row visibility.</field>
/// <field name="groupLevel" type="Number">Gets or sets the group level of the row.</field>
/// <field name="style" type="wijmo.xlsx.WorkbookStyle">Gets or sets the row style.
/// 
/// The property defines the style for all cells in the row, and can be overridden by the specific cell styles.</field>
/// <field name="collapsed" type="Boolean">Indicating if the row is in the collapsed outline state.</field>
/// <field name="cells" type="wijmo.xlsx.WorkbookCell[]">Gets or sets an array of cells in the row.
/// 
/// Each @see:WorkbookCell object in the array describes a cell at the corresponding position in the row,
/// i.e. the cell with index 0
/// pertain to column with index A, cell with index 1 defines cell pertain to column with index B, and so on. If a certain cell
/// has no definition (empty) in xlsx file then corresponding array element is undefined for both export and import operations.</field>
this._wjClassName = 'wijmo.xlsx.WorkbookRow';
_wjReownEvents(this);
}
wijmo.xlsx.WorkbookRow._wjDict = _wjMerge({}, {cells:2});
wijmo.xlsx.WorkbookRow._wjClass = true;
wijmo.xlsx.WorkbookCell = function() {
/// <summary>Initializes a new instance of the @see:WorkbookCell class.</summary>
/// <returns type="wijmo.xlsx.WorkbookCell"></returns>
/// <field name="value" type="Object">Gets or sets the cell value.
/// 
/// The type of the value can be String, Number, Boolean or Date.</field>
/// <field name="isDate" type="Boolean">Indicates whether the cell value is date or not.</field>
/// <field name="formula" type="String">Gets or sets the formula of cell.</field>
/// <field name="style" type="wijmo.xlsx.WorkbookStyle">Gets or sets the style of cell.</field>
/// <field name="colSpan" type="Number">Gets or sets the colSpan setting of cell.</field>
/// <field name="rowSpan" type="Number">Gets or sets the rowSpan setting of cell.</field>
this._wjClassName = 'wijmo.xlsx.WorkbookCell';
_wjReownEvents(this);
}
wijmo.xlsx.WorkbookCell._wjDict = _wjMerge({}, {});
wijmo.xlsx.WorkbookCell._wjClass = true;
wijmo.xlsx.WorkbookFrozenPane = function() {
/// <summary>Initializes a new instance of the @see:WorkbookFrozenPane class.</summary>
/// <returns type="wijmo.xlsx.WorkbookFrozenPane"></returns>
/// <field name="rows" type="Number">Gets or sets the number of frozen rows.</field>
/// <field name="columns" type="Number">Gets or sets the number of frozen columns.</field>
this._wjClassName = 'wijmo.xlsx.WorkbookFrozenPane';
_wjReownEvents(this);
}
wijmo.xlsx.WorkbookFrozenPane._wjDict = _wjMerge({}, {});
wijmo.xlsx.WorkbookFrozenPane._wjClass = true;
wijmo.xlsx.WorkbookStyle = function() {
/// <summary>Initializes a new instance of the @see:WorkbookStyle class.</summary>
/// <returns type="wijmo.xlsx.WorkbookStyle"></returns>
/// <field name="format" type="String">Cell value format, defined using Excel format syntax.
/// 
/// The description of Excel format syntax can be found
/// <a href="https://support.office.com/en-us/article/Create-or-delete-a-custom-number-format-78f2a361-936b-4c03-8772-09fab54be7f4" target="_blank">here</a>.
/// 
/// You may use the <b>toXlsxNumberFormat</b> and <b>toXlsxDateFormat</b> static functions of the
/// @see:Workbook class to convert from .Net (@see:Globalize) format to Excel format.</field>
/// <field name="basedOn" type="wijmo.xlsx.WorkbookStyle">Defines the base style that this style inherits from.
/// 
/// This property is applicable for export operations only. The style gets all the properties defined in the base style,
/// and can override or augment them by setting its own properties.</field>
/// <field name="font" type="wijmo.xlsx.WorkbookFont">Gets or sets the font of style.</field>
/// <field name="hAlign" type="wijmo.xlsx.HAlign">Gets or sets a horizontal alignment of a text.</field>
/// <field name="vAlign" type="wijmo.xlsx.VAlign">Gets or sets vertical alignment of a text.</field>
/// <field name="indent" type="Number">Gets or sets indenet setting of the style.</field>
/// <field name="fill" type="wijmo.xlsx.WorkbookFill">Gets or sets background setting.</field>
/// <field name="borders" type="wijmo.xlsx.WorkbookBorder">Gets or sets border setting.</field>
this._wjClassName = 'wijmo.xlsx.WorkbookStyle';
_wjReownEvents(this);
}
wijmo.xlsx.WorkbookStyle._wjDict = _wjMerge({}, {});
wijmo.xlsx.WorkbookStyle._wjClass = true;
wijmo.xlsx.WorkbookFont = function() {
/// <summary>Initializes a new instance of the @see:WorkbookFont class.</summary>
/// <returns type="wijmo.xlsx.WorkbookFont"></returns>
/// <field name="family" type="String">Gets or sets font family name.</field>
/// <field name="size" type="Number">Gets or sets the font size in device-independent (1/96th inch) pixels.</field>
/// <field name="bold" type="Boolean">Indicates whether current font is bold.</field>
/// <field name="italic" type="Boolean">Indicates whether current font has the italic style applied.</field>
/// <field name="underline" type="Boolean">Indicates whether current font is underlined.</field>
/// <field name="color" type="String">Gets or sets the font color.
/// 
/// For export, the color can be specified in any valid HTML format like 6-character dash notation or
/// rgb/rgba/hsl/hsla functional form. In case of rgba/hsla representations a specified alpha channel value
/// will be ignored.
/// 
/// For import a value is always represented in the HTML 6-character dash notation, e.g. "#afbfcf".</field>
this._wjClassName = 'wijmo.xlsx.WorkbookFont';
_wjReownEvents(this);
}
wijmo.xlsx.WorkbookFont._wjDict = _wjMerge({}, {});
wijmo.xlsx.WorkbookFont._wjClass = true;
wijmo.xlsx.WorkbookFill = function() {
/// <summary>Initializes a new instance of the @see:WorkbookFill class.</summary>
/// <returns type="wijmo.xlsx.WorkbookFill"></returns>
/// <field name="color" type="String">Gets or sets the fill color.
/// 
/// For export, the color can be specified in any valid HTML format like 6-character dash notation or
/// rgb/rgba/hsl/hsla functional form. In case of rgba/hsla representations a specified alpha channel value
/// will be ignored.
/// 
/// For import a value is always represented in the HTML 6-character dash notation, e.g. "#afbfcf".</field>
this._wjClassName = 'wijmo.xlsx.WorkbookFill';
_wjReownEvents(this);
}
wijmo.xlsx.WorkbookFill._wjDict = _wjMerge({}, {});
wijmo.xlsx.WorkbookFill._wjClass = true;
wijmo.xlsx.WorkbookBorder = function() {
/// <summary>Initializes a new instance of the @see:WorkbookBorder class.</summary>
/// <returns type="wijmo.xlsx.WorkbookBorder"></returns>
/// <field name="top" type="wijmo.xlsx.WorkbookBorderSetting">Gets or sets top border setting.</field>
/// <field name="bottom" type="wijmo.xlsx.WorkbookBorderSetting">Gets or sets bottom border setting.</field>
/// <field name="left" type="wijmo.xlsx.WorkbookBorderSetting">Gets or sets left border setting.</field>
/// <field name="right" type="wijmo.xlsx.WorkbookBorderSetting">Gets or sets right border setting.</field>
/// <field name="diagonal" type="wijmo.xlsx.WorkbookBorderSetting">Gets or sets diagonal border setting.</field>
this._wjClassName = 'wijmo.xlsx.WorkbookBorder';
_wjReownEvents(this);
}
wijmo.xlsx.WorkbookBorder._wjDict = _wjMerge({}, {});
wijmo.xlsx.WorkbookBorder._wjClass = true;
wijmo.xlsx.WorkbookBorderSetting = function() {
/// <summary>Initializes a new instance of the @see:WorkbookBorderSetting class.</summary>
/// <returns type="wijmo.xlsx.WorkbookBorderSetting"></returns>
/// <field name="color" type="String">Gets or sets border color.
/// 
/// For export, the color can be specified in any valid HTML format like 6-character dash notation or
/// rgb/rgba/hsl/hsla functional form. In case of rgba/hsla representations a specified alpha channel value
/// will be ignored.
/// 
/// For import a value is always represented in the HTML 6-character dash notation, e.g. "#afbfcf".</field>
/// <field name="style" type="wijmo.xlsx.BorderStyle">Gets or sets border type.</field>
this._wjClassName = 'wijmo.xlsx.WorkbookBorderSetting';
_wjReownEvents(this);
}
wijmo.xlsx.WorkbookBorderSetting._wjDict = _wjMerge({}, {});
wijmo.xlsx.WorkbookBorderSetting._wjClass = true;
wijmo.xlsx.HAlign = {
// Alignment depends on the cell value type.
General: 0,
// Text is aligned to the left.
Left: 1,
// Text is centered.
Center: 2,
// Text is aligned to the right.
Right: 3,
// Text is replicated to fill the whole cell width.
Fill: 4,
// Text is justified.
Justify: 5,
_wjEnum: true
};

intellisense.annotate(wijmo.xlsx, {
// Defines the Workbook Object Model horizontal text alignment.
HAlign: undefined
});

wijmo.xlsx.VAlign = {
// Top vertical alignment
Top: 0,
// Center vertical alignment
Center: 1,
// Bottom vertical alignment
Bottom: 2,
// Justify vertical alignment
Justify: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.xlsx, {
// Vertical alignment
VAlign: undefined
});

wijmo.xlsx.BorderStyle = {
// No border
None: 0,
// Thin border
Thin: 1,
// Medium border
Medium: 2,
// Dashed border
Dashed: 3,
// Dotted border
Dotted: 4,
// Thick line border
Thick: 5,
// Double line border
Double: 6,
// Hair line border
Hair: 7,
// Medium dashed border
MediumDashed: 8,
// Thin dash dotted border
ThinDashDotted: 9,
// Medium dash dotted border
MediumDashDotted: 10,
// Thin dash dot dotted border
ThinDashDotDotted: 11,
// Medium dash dot dotted border
MediumDashDotDotted: 12,
// Slanted medium dash dotted border
SlantedMediumDashDotted: 13,
_wjEnum: true
};

intellisense.annotate(wijmo.xlsx, {
// Border line style
BorderStyle: undefined
});

wijmo.pdf = wijmo.pdf || { _wjModule: true };
wijmo.pdf.PdfLineCapStyle = {
// The stroke is squared off at the endpoint of the path.
Butt: 0,
// A semicircular arc with a diameter equal to the line width is
// drawn around the endpoint and is filled in.
Round: 1,
// The stroke continues beyond the endpoint of the path for a
// distance equal to the half of the line width and is squared off.
Square: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.pdf, {
// Specifies the shape that shall be used at the ends of open subpaths
// (and dashes, if any) when they are stroked.
PdfLineCapStyle: undefined
});

wijmo.pdf.PdfLineJoinStyle = {
// The outer edges of the strokes for the two segments are extended
// until they meet at an angle.
Miter: 0,
// An arc of a circle with a diameter equal to the line width is drawn
// around the point where the two segments meet.
Round: 1,
// The two segments are finished with butt caps and the resulting notch
// beyond the ends of the segments is filled with a triangle.
Bevel: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.pdf, {
// Specifies the shape to be used at the corners of paths that are stroked.
PdfLineJoinStyle: undefined
});

wijmo.pdf.PdfFillRule = {
// Non-zero rule.
NonZero: 0,
// Even-odd rule.
EvenOdd: 1,
_wjEnum: true
};

intellisense.annotate(wijmo.pdf, {
// Specifies a rule that determines if a point falls inside the enclosed path.
PdfFillRule: undefined
});

wijmo.pdf.PdfPageOrientation = {
// Portrait orientation.
Portrait: 0,
// Landscape orientation.
Landscape: 1,
_wjEnum: true
};

intellisense.annotate(wijmo.pdf, {
// Specifies the page orientation.
PdfPageOrientation: undefined
});

wijmo.pdf.PdfImageHorizontalAlign = {
// Aligns the image to the left edge of the drawing area.
Left: 0,
// Aligns the image in the middle of the drawing area.
Center: 1,
// Aligns the image to the right edge of the drawing area.
Right: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.pdf, {
// Specifies the horizontal alignment of the image.
PdfImageHorizontalAlign: undefined
});

wijmo.pdf.PdfImageVerticalAlign = {
// Aligns the image to the top edge of the drawing area.
Top: 0,
// Aligns the image in the middle of the drawing area.
Center: 1,
// Aligns the image to the bottom edge of the drawing area.
Bottom: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.pdf, {
// Specifies the vertical alignment of the image.
PdfImageVerticalAlign: undefined
});

wijmo.pdf.PdfTextHorizontalAlign = {
// Text is aligned to the left.
Left: 0,
// Text is centered.
Center: 1,
// Text is aligned to the right.
Right: 2,
// Text is justified.
Justify: 3,
_wjEnum: true
};

intellisense.annotate(wijmo.pdf, {
// Specifies the horizontal alignment of text content.
PdfTextHorizontalAlign: undefined
});

wijmo.pdf.PdfPageSize = {
// Represents the A0 page size.
A0: 0,
// Represents the A1 page size.
A1: 1,
// Represents the A2 page size.
A2: 2,
// Represents the A3 page size.
A3: 3,
// Represents the A4 page size.
A4: 4,
// Represents the A5 page size.
A5: 5,
// Represents the A6 page size.
A6: 6,
// Represents the A7 page size.
A7: 7,
// Represents the A8 page size.
A8: 8,
// Represents the A9 page size.
A9: 9,
// Represents the A10 page size.
A10: 10,
// Represents the B0 page size.
B0: 11,
// Represents the B1 page size.
B1: 12,
// Represents the B2 page size.
B2: 13,
// Represents the B3 page size.
B3: 14,
// Represents the B4 page size.
B4: 15,
// Represents the B5 page size.
B5: 16,
// Represents the B6 page size.
B6: 17,
// Represents the B7 page size.
B7: 18,
// Represents the B8 page size.
B8: 19,
// Represents the B9 page size.
B9: 20,
// Represents the B10 page size.
B10: 21,
// Represents the C0 page size.
C0: 22,
// Represents the C1 page size.
C1: 23,
// Represents the C2 page size.
C2: 24,
// Represents the C3 page size.
C3: 25,
// Represents the C4 page size.
C4: 26,
// Represents the C5 page size.
C5: 27,
// Represents the C6 page size.
C6: 28,
// Represents the C7 page size.
C7: 29,
// Represents the C8 page size.
C8: 30,
// Represents the C9 page size.
C9: 31,
// Represents the C10 page size.
C10: 32,
// Represents the RA0 page size.
RA0: 33,
// Represents the RA1 page size.
RA1: 34,
// Represents the RA2 page size.
RA2: 35,
// Represents the RA3 page size.
RA3: 36,
// Represents the RA4 page size.
RA4: 37,
// Represents the SRA0 page size.
SRA0: 38,
// Represents the SRA1 page size.
SRA1: 39,
// Represents the SRA2 page size.
SRA2: 40,
// Represents the SRA3 page size.
SRA3: 41,
// Represents the SRA4 page size.
SRA4: 42,
// Represents the executive page size.
Executive: 43,
// Represents the folio page size.
Folio: 44,
// Represents the legal page size.
Legal: 45,
// Represents the letter page size.
Letter: 46,
// Represents the tabloid page size.
Tabloid: 47,
_wjEnum: true
};

intellisense.annotate(wijmo.pdf, {
// Specifies the page size, in points.
PdfPageSize: undefined
});

wijmo.pdf.saveBlob = function(blob, fileName) {
/// <summary>Saves the Blob object as a file.</summary>
/// <param name="blob" type="Blob" optional="false">The Blob object to save.</param>
/// <param name="fileName" type="String" optional="false">The name with which the file is saved.</param>
}
wijmo.pdf.ptToPx = function(value) {
/// <summary>Converts a point unit value to a pixel unit value.</summary>
/// <param name="value" type="Number" optional="false">The value to convert.</param>
/// <returns type="Number">The converted value.</returns>
}
wijmo.pdf.pxToPt = function(value) {
/// <summary>Converts a pixel unit value to a point unit value.</summary>
/// <param name="value" type="Number" optional="false">The value to convert.</param>
/// <returns type="Number">The converted value.</returns>
}
wijmo.pdf.PdfDashPattern = function(dash, gap, phase) {
/// <summary>Initializes a new instance of the @see:PdfDashPattern class.</summary>
/// <param name="dash" type="Number" optional="true">The length of alternating dashes, in points.</param>
/// <param name="gap" type="Number" optional="true">The length of alternating gaps, in points.</param>
/// <param name="phase" type="Number" optional="true">The distance in the dash pattern to start the dash at, in points.</param>
/// <returns type="wijmo.pdf.PdfDashPattern"></returns>
/// <field name="dash" type="Number">Gets or sets the length of alternating dashes, in points.
/// The default value is null which indicates no dash pattern, but a solid line.</field>
/// <field name="gap" type="Number">Gets or sets the length of alternating gaps, in points.
/// The default value is equal to @see:dash which indicates that dashes and gaps will
/// have the same length.</field>
/// <field name="phase" type="Number">Gets or sets the distance in the dash pattern to start the dash at, in points.
/// The default value is 0.</field>
this._wjClassName = 'wijmo.pdf.PdfDashPattern';
_wjReownEvents(this);
}
wijmo.pdf.PdfDashPattern.prototype.clone = function() {
/// <summary>Creates a copy of this @see:PdfDashPattern.</summary>
/// <returns type="wijmo.pdf.PdfDashPattern">A copy of this dash pattern.</returns>
}
wijmo.pdf.PdfDashPattern.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfDashPattern instance is equal
/// to the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfDashPattern" optional="false">@see:PdfDashPattern to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfDashPattern._wjDict = _wjMerge({}, {dash:2,gap:2,phase:2});
wijmo.pdf.PdfDashPattern._wjClass = true;
wijmo.pdf.PdfBrush = function() {
/// <summary>Represents an abstract class that serves as a base class for all brushes.
/// Instances of any class that derives from this class are used to fill areas and text.
/// This class is not intended to be instantiated in your code.</summary>
/// <returns type="wijmo.pdf.PdfBrush"></returns>
this._wjClassName = 'wijmo.pdf.PdfBrush';
_wjReownEvents(this);
}
wijmo.pdf.PdfBrush.prototype.clone = function() {
/// <summary>Creates a copy of this @see:PdfBrush.</summary>
/// <returns type="wijmo.pdf.PdfBrush">A copy of this brush.</returns>
}
wijmo.pdf.PdfBrush.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfBrush instance is equal to the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfBrush" optional="false">@see:PdfBrush to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfBrush._wjDict = _wjMerge({}, {});
wijmo.pdf.PdfBrush._wjClass = true;
wijmo.pdf.PdfGradientStop = function(offset, color, opacity) {
/// <summary>Initializes a new instance of the @see:PdfGradientStop class.</summary>
/// <param name="offset" type="Number" optional="true">The location of the gradient stop on the gradient axis.</param>
/// <param name="color" type="Object" optional="true">The color of the gradient stop. A @see:wijmo.Color object or
/// any string acceptable by the @see:wijmo.Color.fromString method.</param>
/// <param name="opacity" type="Number" optional="true">The opacity of the gradient stop.</param>
/// <returns type="wijmo.pdf.PdfGradientStop"></returns>
/// <field name="offset" type="Number">Gets or sets the location of the gradient stop on gradient axis of the brush.
/// The value must be in range [0, 1], where 0 indicates that the gradient stop is
/// placed at the beginning of the gradient axis, while 1 indicates that the
/// gradient stop is placed at the end of the gradient axis.
/// The default value is 0.</field>
/// <field name="color" type="wijmo.Color">Gets or sets the color of the gradient stop.
/// The default color is black.</field>
/// <field name="opacity" type="Number">Gets or sets the opacity of the gradient stop.
/// The value must be in range [0, 1], where 0 indicates that the gradient stop is
/// completely transparent, while 1 indicates that the gradient stop is completely
/// opaque. The default value is 1.</field>
this._wjClassName = 'wijmo.pdf.PdfGradientStop';
_wjReownEvents(this);
}
wijmo.pdf.PdfGradientStop.prototype.clone = function() {
/// <summary>Creates a copy of this @see:PdfGradientStop.</summary>
/// <returns type="wijmo.pdf.PdfGradientStop">A copy of this gradient stop.</returns>
}
wijmo.pdf.PdfGradientStop.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfGradientStop instance is equal to
/// the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfGradientStop" optional="false">@see:PdfGradientStop to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfGradientStop._wjDict = _wjMerge({}, {offset:2,color:2,opacity:2});
wijmo.pdf.PdfGradientStop._wjClass = true;
wijmo.pdf.PdfGradientBrush = function(stops, opacity) {
/// <summary>Initializes a new instance of the @see:PdfGradientBrush class.</summary>
/// <param name="stops" type="wijmo.pdf.PdfGradientStop[]" optional="true">The @see:PdfGradientStop array to set on this brush.</param>
/// <param name="opacity" type="Number" optional="true">The opacity of this brush.</param>
/// <returns type="wijmo.pdf.PdfGradientBrush"></returns>
/// <field name="opacity" type="Number">Gets or sets the opacity of the brush.
/// The value must be in range [0, 1], where 0 indicates that the brush is
/// completely transparent and 1 indicates that the brush is completely opaque.
/// The default value is 1.</field>
/// <field name="stops" type="wijmo.pdf.PdfGradientStop[]">Gets or sets an array of @see:PdfGradientStop objects representing a color,
/// offset and opacity within the brush's gradient axis.
/// The default value is an empty array.</field>
this._wjClassName = 'wijmo.pdf.PdfGradientBrush';
_wjReownEvents(this);
}
wijmo.pdf.PdfGradientBrush.prototype = new wijmo.pdf.PdfBrush();
wijmo.pdf.PdfGradientBrush.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfGradientBrush instance is equal
/// to the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfGradientBrush" optional="false">@see:PdfGradientBrush to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfGradientBrush._wjDict = _wjMerge(wijmo.pdf.PdfBrush._wjDict, {opacity:2,stops:2});
wijmo.pdf.PdfGradientBrush._wjClass = true;
wijmo.pdf.PdfLinearGradientBrush = function(x1, y1, x2, y2, stops, opacity) {
/// <summary>Initializes a new instance of the @see:PdfLinearGradientBrush class.</summary>
/// <param name="x1" type="Number" optional="false">The X-coordinate of the starting point of the linear gradient.</param>
/// <param name="y1" type="Number" optional="false">The Y-coordinate of the starting point of the linear gradient.</param>
/// <param name="x2" type="Number" optional="false">The X-coordinate of the ending point of the linear gradient.</param>
/// <param name="y2" type="Number" optional="false">The Y-coordinate of the ending point of the linear gradient.</param>
/// <param name="stops" type="wijmo.pdf.PdfGradientStop[]" optional="false">The @see:PdfGradientStop array to set on this brush.</param>
/// <param name="opacity" type="Number" optional="false">The opacity of this brush.</param>
/// <returns type="wijmo.pdf.PdfLinearGradientBrush"></returns>
/// <field name="x1" type="Number">Gets or sets the X-coordinate of the starting point of the linear gradient,
/// in page area coordinates, in points.</field>
/// <field name="y1" type="Number">Gets or sets the Y-coordinate of the starting point of the linear gradient,
/// in page area coordinates, in points.</field>
/// <field name="x2" type="Number">Gets or sets the X-coordinate of the ending point of the linear gradient,
/// in page area coordinates, in points.</field>
/// <field name="y2" type="Number">Gets or sets the Y-coordinate of the ending point of the linear gradient,
/// in page area coordinates, in points.</field>
this._wjClassName = 'wijmo.pdf.PdfLinearGradientBrush';
_wjReownEvents(this);
}
wijmo.pdf.PdfLinearGradientBrush.prototype = new wijmo.pdf.PdfGradientBrush();
wijmo.pdf.PdfLinearGradientBrush.prototype.clone = function() {
/// <summary>Creates a copy of this @see:PdfLinearGradientBrush.</summary>
/// <returns type="wijmo.pdf.PdfLinearGradientBrush">A copy of this brush.</returns>
}
wijmo.pdf.PdfLinearGradientBrush.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfLinearGradientBrush instance is equal to
/// the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfLinearGradientBrush" optional="false">@see:PdfLinearGradientBrush to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfLinearGradientBrush._wjDict = _wjMerge(wijmo.pdf.PdfGradientBrush._wjDict, {x1:2,y1:2,x2:2,y2:2});
wijmo.pdf.PdfLinearGradientBrush._wjClass = true;
wijmo.pdf.PdfRadialGradientBrush = function(x1, y1, r1, x2, y2, r2, stops, opacity) {
/// <summary>Initializes a new instance of the @see:PdfRadialGradientBrush class.</summary>
/// <param name="x1" type="Number" optional="false">The X-coordinate of the inner circle's center of the radial gradient.</param>
/// <param name="y1" type="Number" optional="false">The Y-coordinate of the inner circle's center of the radial gradient.</param>
/// <param name="r1" type="Number" optional="false">The radius of the inner circle of the radial gradient.</param>
/// <param name="x2" type="Number" optional="false">The X-coordinate of the outer circle's center of the radial gradient.</param>
/// <param name="y2" type="Number" optional="false">The Y-coordinate of the outer circle's center of the radial gradient.</param>
/// <param name="r2" type="Number" optional="false">The radius of the outer circle of the radial gradient.</param>
/// <param name="stops" type="wijmo.pdf.PdfGradientStop[]" optional="false">The @see:PdfGradientStop array to set on this brush.</param>
/// <param name="opacity" type="Number" optional="false">The opacity of this brush.</param>
/// <returns type="wijmo.pdf.PdfRadialGradientBrush"></returns>
/// <field name="x1" type="Number">Gets or sets the X-coordinate of the inner circle's center that represents the
/// starting point of the radial gradient, in page area coordinates, in points.</field>
/// <field name="y1" type="Number">Gets or sets the Y-coordinate of the inner circle's center that represents the
/// starting point of the radial gradient, in page area coordinates, in points.</field>
/// <field name="r1" type="Number">Gets or sets the radius of the inner circle that represents the starting
/// point of the radial gradient, in page area coordinates, in points.</field>
/// <field name="x2" type="Number">Gets or sets the X-coordinate of the outer circle's center that represents the ending point of the radial gradient, in page area coordinates, in points.</field>
/// <field name="y2" type="Number">Gets or sets the Y-coordinate of the outer circle's center that represents
/// the ending point of the radial gradient, in page area coordinates, in points.</field>
/// <field name="r2" type="Number">Gets or sets the radius of the outer circle that represents the ending point of the
/// radial gradient, in page area coordinates, in points.</field>
this._wjClassName = 'wijmo.pdf.PdfRadialGradientBrush';
_wjReownEvents(this);
}
wijmo.pdf.PdfRadialGradientBrush.prototype = new wijmo.pdf.PdfGradientBrush();
wijmo.pdf.PdfRadialGradientBrush.prototype.clone = function() {
/// <summary>Creates a copy of this @see:PdfRadialGradientBrush.</summary>
/// <returns type="wijmo.pdf.PdfRadialGradientBrush">A copy of this brush.</returns>
}
wijmo.pdf.PdfRadialGradientBrush.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfRadialGradientBrush instance is equal
/// to the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfRadialGradientBrush" optional="false">@see:PdfRadialGradientBrush to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfRadialGradientBrush._wjDict = _wjMerge(wijmo.pdf.PdfGradientBrush._wjDict, {x1:2,y1:2,r1:2,x2:2,y2:2,r2:2});
wijmo.pdf.PdfRadialGradientBrush._wjClass = true;
wijmo.pdf.PdfSolidBrush = function(color) {
/// <summary>Initializes a new instance of the @see:PdfSolidBrush class.</summary>
/// <param name="color" type="Object" optional="true">The color of this brush. A @see:wijmo.Color object or any string
/// acceptable by the @see:wijmo.Color.fromString method.</param>
/// <returns type="wijmo.pdf.PdfSolidBrush"></returns>
/// <field name="color" type="wijmo.Color">Gets or sets the color of the brush.
/// The default color is black.</field>
this._wjClassName = 'wijmo.pdf.PdfSolidBrush';
_wjReownEvents(this);
}
wijmo.pdf.PdfSolidBrush.prototype = new wijmo.pdf.PdfBrush();
wijmo.pdf.PdfSolidBrush.prototype.clone = function() {
/// <summary>Creates a copy of this @see:PdfSolidBrush.</summary>
/// <returns type="wijmo.pdf.PdfSolidBrush">A copy of this brush.</returns>
}
wijmo.pdf.PdfSolidBrush.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfSolidBrush instance is equal
/// to the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfSolidBrush" optional="false">@see:PdfSolidBrush to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfSolidBrush._wjDict = _wjMerge(wijmo.pdf.PdfBrush._wjDict, {color:2});
wijmo.pdf.PdfSolidBrush._wjClass = true;
wijmo.pdf.PdfPen = function(colorOrBrushOrOptions, width, dashPattern, cap, join, miterLimit) {
/// <summary>Initializes a new instance of the @see:PdfPen class with the specified color or
/// brush or JavaScript object.
/// 
/// The first argument can accept the following values:
/// <ul>
///  <li>@see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.</li>
///  <li>@see:PdfBrush object.</li>
///  <li>JavaScript object containing initialization properties (all other arguments are ignored).</li>
/// </ul></summary>
/// <param name="colorOrBrushOrOptions" type="Object" optional="true">The color or brush or JavaScript object to use.</param>
/// <param name="width" type="Number" optional="true">The width to use.</param>
/// <param name="dashPattern" type="wijmo.pdf.PdfDashPattern" optional="true">The dash pattern to use.</param>
/// <param name="cap" type="wijmo.pdf.PdfLineCapStyle" optional="true">The line cap style to use.</param>
/// <param name="join" type="wijmo.pdf.PdfLineJoinStyle" optional="true">The line join style to use.</param>
/// <param name="miterLimit" type="Number" optional="true">The miter limit to use.</param>
/// <returns type="wijmo.pdf.PdfPen"></returns>
/// <field name="color" type="wijmo.Color">Gets or sets the color used to stroke paths.
/// The default color is black.</field>
/// <field name="brush" type="wijmo.pdf.PdfBrush">Gets or sets the brush used to stroke paths.
/// Takes precedence over the @see:color property, if defined.</field>
/// <field name="width" type="Number">Gets or sets the line width used to stroke paths, in points.
/// The default width is 1.</field>
/// <field name="cap" type="wijmo.pdf.PdfLineCapStyle">Gets or sets the shape that shall be used at the open ends of a stroked path.
/// The default value is <b>Butt</b>.</field>
/// <field name="join" type="wijmo.pdf.PdfLineJoinStyle">Gets or sets the shape to be used at the corners of a stroked path.
/// The default value is <b>Miter</b>.</field>
/// <field name="miterLimit" type="Number">Determines the maximum value of the miter length to the line width ratio, when the line
/// join is converted from miter to bevel.
/// The default value is 10.</field>
/// <field name="dashPattern" type="wijmo.pdf.PdfDashPattern">Gets the dash pattern used to stroke paths.
/// The default value is a solid line.</field>
this._wjClassName = 'wijmo.pdf.PdfPen';
_wjReownEvents(this);
}
wijmo.pdf.PdfPen.prototype.clone = function() {
/// <summary>Creates a copy of this @see:PdfPen.</summary>
/// <returns type="wijmo.pdf.PdfPen">A copy of this pen.</returns>
}
wijmo.pdf.PdfPen.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfPen instance is equal to the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfPen" optional="false">@see:PdfPen to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfPen._wjDict = _wjMerge({}, {color:2,brush:2,width:2,cap:2,join:2,miterLimit:2,dashPattern:2});
wijmo.pdf.PdfPen._wjClass = true;
wijmo.pdf.PdfFont = function(family, size, style, weight) {
/// <summary>Initializes a new instance of the @see:PdfFont class.</summary>
/// <param name="family" type="String" optional="true">The family name of the font.</param>
/// <param name="size" type="Number" optional="true">The size of the font.</param>
/// <param name="style" type="String" optional="true">The style of the font.</param>
/// <param name="weight" type="String" optional="true">The weight of the font.</param>
/// <returns type="wijmo.pdf.PdfFont"></returns>
/// <field name="family" type="String">Gets or sets the family name of the font.
/// 
/// The list of the font family names in the order of preferences,
/// separated by commas. Each font family name can be the one that
/// was registered using the @see:PdfDocument.registerFont method or
/// the name of one of the PDF standard font families: 'courier',
/// 'helvetica', 'symbol', 'times', 'zapfdingbats' or the superfamily
/// name: 'cursive', 'fantasy', 'monospace', 'serif', 'sans-serif'.</field>
/// <field name="size" type="Number">Gets or sets the size of the font.</field>
/// <field name="style" type="String">Gets or sets the style of the font.
/// 
/// The following values are supported: 'normal', 'italic', 'oblique'.</field>
/// <field name="weight" type="String">Gets or sets the weight of the font.
/// 
/// The following values are supported: 'normal', 'bold', '100', '200', '300',
/// '400', '500', '600', '700', '800', '900'.</field>
this._wjClassName = 'wijmo.pdf.PdfFont';
_wjReownEvents(this);
}
wijmo.pdf.PdfFont.prototype.clone = function() {
/// <summary>Creates a copy of this @see:PdfFont.</summary>
/// <returns type="wijmo.pdf.PdfFont">A copy of this font.</returns>
}
wijmo.pdf.PdfFont.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfFont instance is equal to the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfFont" optional="false">@see:PdfFont to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfFont._wjDict = _wjMerge({}, {family:2,size:2,style:2,weight:2});
wijmo.pdf.PdfFont._wjClass = true;
wijmo.pdf.PdfPageArea = function() {
/// <summary>Initializes a new instance of the @see:PdfRunningTitle class.</summary>
/// <returns type="wijmo.pdf.PdfPageArea"></returns>
/// <field name="x" type="Number">Gets or sets the X-coordinate (in points) of the current point in the text flow
/// used to draw a text or an image.</field>
/// <field name="y" type="Number">Gets or sets the Y-coordinate (in points) of the current point in the text flow
/// used to draw a text or an image.</field>
/// <field name="lineGap" type="Number">Gets or sets the spacing between each line of text, in points.
/// 
/// The default value is 0.</field>
/// <field name="height" type="Number">Gets the height of the area, in points.</field>
/// <field name="width" type="Number">Gets the width of the area, in points.</field>
/// <field name="paths" type="wijmo.pdf.PdfPaths">Gets an object that provides ability to draw paths.</field>
this._wjClassName = 'wijmo.pdf.PdfPageArea';
_wjReownEvents(this);
}
wijmo.pdf.PdfPageArea.prototype.drawText = function(text, x, y, options) {
/// <summary>Draws a string with the given options and returns the measurement information.
/// 
/// If <b>options.pen</b>, <b>options.brush</b> or <b>options.font</b> are omitted,
/// the current document's pen, brush or font are used (see @see:PdfDocument.setPen,
/// @see:PdfDocument.setBrush, and  @see:PdfDocument.setFont).
/// 
/// The string is drawn within the rectangular area for which top-left corner, width
/// and  height are defined by the x, y, <b>options.width</b> and <b>options.height</b>
/// values. If x and y are not provided, the @see:PdfDocument.x and @see:PdfDocument.y
/// properties are used instead.
/// 
/// The text is wrapped and clipped automatically within the area.
/// If <b>options.height</b> is not provided and the text exceeds the bottom body edge,
/// then a new page will be added to accommodate the text.
/// 
/// Finally, the method updates the value of the @see:PdfDocument.x and @see:PdfDocument.y
/// properties. Hence, any subsequent text or image starts below this point
/// (depending on the value of <b>options.continued</b>).
/// 
/// The measurement result doesn't reflect the fact that text can be split into
/// multiple pages or columns; the text is treated as a single block.</summary>
/// <param name="text" type="String" optional="false">The text to draw.</param>
/// <param name="x" type="Number" optional="true">The X-coordinate of the point to draw the text at, in points.</param>
/// <param name="y" type="Number" optional="true">The Y-coordinate of the point to draw the text at, in points.</param>
/// <param name="options" type="wijmo.pdf.IPdfTextDrawSettings" optional="true">Determines the text drawing options.</param>
/// <returns type="wijmo.pdf.IPdfTextMeasurementInfo">A @see:IPdfTextMeasurementInfo object determines the measurement information.</returns>
}
wijmo.pdf.PdfPageArea.prototype.drawImage = function(url, x, y, options) {
/// <summary>Draws an image in JPG or PNG format with the given options.
/// 
/// If x and y are not defined, then @see:x and @see:y are used instead.
/// 
/// Finally, if the image was drawn in the text flow, the method updates @see:y.
/// Hence, any subsequent text or image starts below this point.</summary>
/// <param name="url" type="String" optional="false">A string containing the URL to get the image from or the data URI containing a base64 encoded image.</param>
/// <param name="x" type="Number" optional="true">The x-coordinate of the point to draw the image at, in points.</param>
/// <param name="y" type="Number" optional="true">The y-coordinate of the point to draw the image at, in points.</param>
/// <param name="options" type="wijmo.pdf.IPdfImageDrawSettings" optional="true">Determines the image drawing options.</param>
/// <returns type="wijmo.pdf.PdfPageArea">The @see:PdfPageArea object.</returns>
}
wijmo.pdf.PdfPageArea.prototype.drawSvg = function(url, x, y, options) {
/// <summary>Draws a SVG image with the given options.
/// 
/// If x and y are not defined, then @see:x and @see:y are used instead.
/// 
/// The method uses the values of the width and height attributes of the outermost svg element to determine the
/// scale factor according to the options.width and options.height properties. If any of these attributes are
/// omitted then scaling is not performed and the image will be rendered in its original size.
/// 
/// Finally, if the image was drawn in the text flow, the method updates @see:y.
/// Hence, any subsequent text or image starts below this point.
/// The increment value is defined by the options.height property or by the outermost svg element's height attribute, which comes first.
/// If none of them is provided then @see:y will stay unchanged.
/// 
/// The method supports a limited set of SVG features and provided primarily for rendering wijmo 5 chart controls.</summary>
/// <param name="url" type="String" optional="false">A string containing the URL to get the SVG image from or the data URI containing a base64 encoded SVG image.</param>
/// <param name="x" type="Number" optional="true">The x-coordinate of the point to draw the image at, in points.</param>
/// <param name="y" type="Number" optional="true">The y-coordinate of the point to draw the image at, in points.</param>
/// <param name="options" type="wijmo.pdf.IPdfSvgDrawSettings" optional="true">Determines the SVG image drawing options.</param>
/// <returns type="wijmo.pdf.PdfPageArea">The @see:PdfPageArea object.</returns>
}
wijmo.pdf.PdfPageArea.prototype.lineHeight = function(font) {
/// <summary>Gets the line height with a given font.
/// 
/// If font is not specified, then font used in the current document is used.</summary>
/// <param name="font" type="wijmo.pdf.PdfFont" optional="true">Font to get the line height.</param>
/// <returns type="Number">The line height, in points.</returns>
}
wijmo.pdf.PdfPageArea.prototype.measureText = function(text, font, options) {
/// <summary>Measures a text with the given font and text drawing options without rendering it.
/// 
/// If font is not specified, then the font used in the current document is used.
/// 
/// The method uses the same text rendering engine as @see:drawText, so it is tied up
/// in the same way to @see:x and the right page margin, if options.width is not
/// provided. The measurement result doesn't reflect the fact that text can be split
/// into multiple pages or columns; the text is treated as a single block.</summary>
/// <param name="text" type="String" optional="false">Text to measure.</param>
/// <param name="font" type="wijmo.pdf.PdfFont" optional="true">Font to be applied on the text.</param>
/// <param name="options" type="wijmo.pdf.IPdfTextSettings" optional="true">Determines the text drawing options.</param>
/// <returns type="wijmo.pdf.IPdfTextMeasurementInfo">A @see:IPdfTextMeasurementInfo object determines the measurement information.</returns>
}
wijmo.pdf.PdfPageArea.prototype.moveDown = function(lines, font) {
/// <summary>Moves down the @see:y by a given number of lines using the given font or,
/// using the font of current document, if not specified.</summary>
/// <param name="lines" type="Number" optional="true">Number of lines to move down.</param>
/// <param name="font" type="wijmo.pdf.PdfFont" optional="true">Font to calculate the line height.</param>
/// <returns type="wijmo.pdf.PdfPageArea">The @see:PdfPageArea object.</returns>
}
wijmo.pdf.PdfPageArea.prototype.moveUp = function(lines, font) {
/// <summary>Moves up the @see:y by a given number of lines using the given font or,
/// using the font of current document, if not specified.</summary>
/// <param name="lines" type="Number" optional="true">Number of lines to move up.</param>
/// <param name="font" type="wijmo.pdf.PdfFont" optional="true">Font to calculate the line height.</param>
/// <returns type="wijmo.pdf.PdfPageArea">The @see:PdfPageArea object.</returns>
}
wijmo.pdf.PdfPageArea.prototype.scale = function(xFactor, yFactor, origin) {
/// <summary>Scales the graphic context by a specified scaling factor.
/// 
/// The scaling factor value within the range [0, 1] indicates that the size will be
/// decreased.
/// The scaling factor value greater than 1 indicates that the size will be increased.</summary>
/// <param name="xFactor" type="Number" optional="false">The factor to scale the X dimension.</param>
/// <param name="yFactor" type="Number" optional="true">The factor to scale the Y dimension. If it is not provided, it is
/// assumed to be equal to xFactor.</param>
/// <param name="origin" type="wijmo.Point" optional="true">The @see:Point to scale around, in points. If it is not provided,
/// then the top left corner is used.</param>
/// <returns type="wijmo.pdf.PdfPageArea">The @see:PdfPageArea object.</returns>
}
wijmo.pdf.PdfPageArea.prototype.translate = function(x, y) {
/// <summary>Translates the graphic context with a given distance.</summary>
/// <param name="x" type="Number" optional="false">The distance to translate along the X-axis, in points.</param>
/// <param name="y" type="Number" optional="false">The distance to translate along the Y-axis, in points.</param>
/// <returns type="wijmo.pdf.PdfPageArea">The @see:PdfPageArea object.</returns>
}
wijmo.pdf.PdfPageArea.prototype.transform = function(a, b, c, d, e, f) {
/// <summary>Transforms the graphic context with given six numbers which represents a
/// 3x3 transformation matrix.
/// 
/// A transformation matrix is written as follows:
/// <table>
///   <tr><td>a</td><td>b</td><td>0</td></tr>
///   <tr><td>c</td><td>d</td><td>0</td></tr>
///   <tr><td>e</td><td>f</td><td>1</td></tr>
/// </table></summary>
/// <param name="a" type="Number" optional="false">Value of the first row and first column.</param>
/// <param name="b" type="Number" optional="false">Value of the first row and second column.</param>
/// <param name="c" type="Number" optional="false">Value of the second row and first column.</param>
/// <param name="d" type="Number" optional="false">Value of the second row and second column.</param>
/// <param name="e" type="Number" optional="false">Value of the third row and first column.</param>
/// <param name="f" type="Number" optional="false">Value of the third row and second column.</param>
/// <returns type="wijmo.pdf.PdfPageArea">The @see:PdfPageArea object.</returns>
}
wijmo.pdf.PdfPageArea.prototype.rotate = function(angle, origin) {
/// <summary>Rotates the graphic context clockwise by a specified angle.</summary>
/// <param name="angle" type="Number" optional="false">The rotation angle, in degrees.</param>
/// <param name="origin" type="wijmo.Point" optional="true">The @see:Point of rotation, in points. If it is not provided,
/// then the top left corner is used.</param>
/// <returns type="wijmo.pdf.PdfPageArea"></returns>
}
wijmo.pdf.PdfPageArea._wjDict = _wjMerge({}, {x:2,y:2,lineGap:2,height:2,width:2,paths:2});
wijmo.pdf.PdfPageArea._wjClass = true;
wijmo.pdf.PdfRunningTitleDeclarativeContent = function(text, font, brushOrColor) {
/// <summary>Initializes a new instance of the @see:PdfRunningTitleDeclarativeContent class.</summary>
/// <param name="text" type="String" optional="true">The text of the running title.</param>
/// <param name="font" type="wijmo.pdf.PdfFont" optional="true">Font of the text.</param>
/// <param name="brushOrColor" type="Object" optional="true">The @see:PdfBrush or @see:wijmo.Color or any string acceptable
/// by the @see:wijmo.Color.fromString method used to fill the text.</param>
/// <returns type="wijmo.pdf.PdfRunningTitleDeclarativeContent"></returns>
/// <field name="font" type="wijmo.pdf.PdfFont">Gets or sets the font of the @see:text.</field>
/// <field name="text" type="String">Gets or sets the text of the running title.
/// 
/// May contain up to 3 tabular characters ('\t') which are used for separating the text
/// into the parts that will be aligned within the page area using left, center and right
/// alignment.
/// Two kinds of macros are supported, '&[Page]' and '&[Pages]'. The former one designates
/// the current page index while the latter one designates the page count.
/// 
/// For example, for the first page of a document having ten pages, the following string:
/// <pre>
///    '&[Page]\\&[Pages]\theader\t&[Page]\\&[Pages]'
/// </pre>
/// will be translated to:
/// <pre>
///    '1\10 header 1\10'
/// </pre></field>
/// <field name="brush" type="wijmo.pdf.PdfBrush">Gets or sets the brush used to fill the @see:text.</field>
this._wjClassName = 'wijmo.pdf.PdfRunningTitleDeclarativeContent';
_wjReownEvents(this);
}
wijmo.pdf.PdfRunningTitleDeclarativeContent.prototype.clone = function() {
/// <summary>Creates a copy of this @see:PdfRunningTitleDeclarativeContent.</summary>
/// <returns type="wijmo.pdf.PdfRunningTitleDeclarativeContent">A copy of this pen.</returns>
}
wijmo.pdf.PdfRunningTitleDeclarativeContent.prototype.equals = function(value) {
/// <summary>Determines whether the specified @see:PdfRunningTitleDeclarativeContent instance
/// is equal to the current one.</summary>
/// <param name="value" type="wijmo.pdf.PdfRunningTitleDeclarativeContent" optional="false">@see:PdfRunningTitleDeclarativeContent to compare.</param>
/// <returns type="Boolean">true if the specified object is equal to the current one, otherwise false.</returns>
}
wijmo.pdf.PdfRunningTitleDeclarativeContent._wjDict = _wjMerge({}, {font:2,text:2,brush:2});
wijmo.pdf.PdfRunningTitleDeclarativeContent._wjClass = true;
wijmo.pdf.PdfRunningTitle = function(options) {
/// <summary>Initializes a new instance of the @see:PdfRunningTitle class.</summary>
/// <param name="options" type="Object" optional="true">An optional object containing initialization settings.</param>
/// <returns type="wijmo.pdf.PdfRunningTitle"></returns>
/// <field name="declarative" type="wijmo.pdf.PdfRunningTitleDeclarativeContent">Gets or sets an object that provides the ability to setup the running title
/// content declaratively.</field>
/// <field name="height" type="Number">Gets or sets the height of the running title, in points.
/// To hide the running title, set this property to 0.
/// Changing this property has no effect on previous drawings; they will not be resized
/// or clipped.
/// 
/// The default value is 24.</field>
this._wjClassName = 'wijmo.pdf.PdfRunningTitle';
_wjReownEvents(this);
}
wijmo.pdf.PdfRunningTitle.prototype = new wijmo.pdf.PdfPageArea();
wijmo.pdf.PdfRunningTitle._wjDict = _wjMerge(wijmo.pdf.PdfPageArea._wjDict, {declarative:2,height:2});
wijmo.pdf.PdfRunningTitle._wjClass = true;
wijmo.pdf.PdfPaths = function(doc, offset) {
/// <summary>Initializes a new instance of the @see:PdfPaths class.</summary>
/// <param name="doc" type="wijmo.pdf.PdfDocument" optional="false">Document.</param>
/// <param name="offset" type="wijmo.Point" optional="false">Offset.</param>
/// <returns type="wijmo.pdf.PdfPaths"></returns>
this._wjClassName = 'wijmo.pdf.PdfPaths';
_wjReownEvents(this);
}
wijmo.pdf.PdfPaths.prototype.moveTo = function(x, y) {
/// <summary>Sets a new current point.</summary>
/// <param name="x" type="Number" optional="false">The X-coordinate of the new point, in points.</param>
/// <param name="y" type="Number" optional="false">The Y-coordinate of the new point, in points.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.lineTo = function(x, y) {
/// <summary>Draws a line from the current point to a new point.
/// 
/// The new current point is (x, y).</summary>
/// <param name="x" type="Number" optional="false">The X-coordinate of the new point, in points.</param>
/// <param name="y" type="Number" optional="false">The Y-coordinate of the new point, in points.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.quadraticCurveTo = function(cpx, cpy, x, y) {
/// <summary>Draws a quadratic curve from the current point to a new point using the current point
/// and (cpx, cpy) as the control points.
/// 
/// The new current point is (x, y).</summary>
/// <param name="cpx" type="Number" optional="false">The X-coordinate of the control point, in points.</param>
/// <param name="cpy" type="Number" optional="false">The Y-coordinate of the control point, in points.</param>
/// <param name="x" type="Number" optional="false">The X-coordinate of the new point, in points.</param>
/// <param name="y" type="Number" optional="false">The Y-coordinate of the new point, in points.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.bezierCurveTo = function(cp1x, cp1y, cp2x, cp2y, x, y) {
/// <summary>Draws a bezier curve from the current point to a new point using the (cp1x, cp1y)
/// and (cp2x, cp2y) as the control points.
/// 
/// The new current point is (x, y).</summary>
/// <param name="cp1x" type="Number" optional="false">The X-coordinate of the first control point, in points.</param>
/// <param name="cp1y" type="Number" optional="false">The Y-coordinate of the first control point, in points.</param>
/// <param name="cp2x" type="Number" optional="false">The X-coordinate of the second control point, in points.</param>
/// <param name="cp2y" type="Number" optional="false">The Y-coordinate of the second control point, in points.</param>
/// <param name="x" type="Number" optional="false">The X-coordinate of the new point, in points.</param>
/// <param name="y" type="Number" optional="false">The Y-coordinate of the new point, in points.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.svgPath = function(path) {
/// <summary>Draws a SVG 1.1 path.</summary>
/// <param name="path" type="String" optional="false">The SVG path to draw.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.closePath = function() {
/// <summary>Closes the current path and draws a line from the current point to the initial
/// point of the current path.</summary>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.rect = function(x, y, width, height) {
/// <summary>Draws a rectangle.</summary>
/// <param name="x" type="Number" optional="false">The X-coordinate of the topleft corner of the rectangle, in points.</param>
/// <param name="y" type="Number" optional="false">The Y-coordinate of the topleft corner of the rectangle, in points.</param>
/// <param name="width" type="Number" optional="false">The width of the rectangle, in points.</param>
/// <param name="height" type="Number" optional="false">The width of the rectangle, in points.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.roundedRect = function(x, y, width, height, cornerRadius) {
/// <summary>Draws a rounded rectangle.</summary>
/// <param name="x" type="Number" optional="false">The X-coordinate of the upper-left corner of the rectangle, in points.</param>
/// <param name="y" type="Number" optional="false">The Y-coordinate of the upper-left corner of the rectangle, in points.</param>
/// <param name="width" type="Number" optional="false">The width of the rectangle, in points.</param>
/// <param name="height" type="Number" optional="false">The width of the rectangle, in points.</param>
/// <param name="cornerRadius" type="Number" optional="true">The corner radius of the rectangle, in points. The default value is 0.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.ellipse = function(x, y, radiusX, radiusY) {
/// <summary>Draws an ellipse.</summary>
/// <param name="x" type="Number" optional="false">The X-coordinate of the center of the ellipse, in points.</param>
/// <param name="y" type="Number" optional="false">The Y-coordinate of the center of the ellipse, in points.</param>
/// <param name="radiusX" type="Number" optional="false">The radius of the ellipse along the X-axis, in points.</param>
/// <param name="radiusY" type="Number" optional="true">The radius of the ellipse along the Y-axis, in points.
/// If it is not provided, then it is assumed to be equal to radiusX.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.circle = function(x, y, radius) {
/// <summary>Draws a circle.</summary>
/// <param name="x" type="Number" optional="false">The X-coordinate of the center of the circle, in points.</param>
/// <param name="y" type="Number" optional="false">The Y-coordinate of the center of the circle, in points.</param>
/// <param name="radius" type="Number" optional="false">The radius of the circle, in points.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.polygon = function(points) {
/// <summary>Draws a polygon using a given points array.</summary>
/// <param name="points" type="Number[][]" optional="false">An array of two-elements arrays [x, y] specifying
/// the X and Y coordinates of the point, in points.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.clip = function(rule) {
/// <summary>Creates a clipping path used to limit the regions of the page affected by
/// painting operators.</summary>
/// <param name="rule" type="wijmo.pdf.PdfFillRule" optional="true">The fill rule to use.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.fill = function(brushOrColor, rule) {
/// <summary>Fills the path with the specified brush and rule.
/// If brush is not specified, then the default document brush will be used
/// (see the @see:PdfDocument.setBrush method).
/// 
/// The brushOrColor argument can accept the following values:
/// <ul>
///   <li>A @see:PdfBrush object.</li>
///   <li>
///     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
///     In this case, the @see:PdfBrush object with the specified color will be created internally.
///    </li>
/// </ul></summary>
/// <param name="brushOrColor" type="Object" optional="true">The brush or color to use.</param>
/// <param name="rule" type="wijmo.pdf.PdfFillRule" optional="true">The fill rule to use.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.fillAndStroke = function(brushOrColor, penOrColor, rule) {
/// <summary>Fills and strokes the path with the specified brush, pen and rule.
/// If brush and pen is not specified, then the default document brush and pen will
/// be used (See the @see:PdfDocument.setBrush, @see:PdfDocument.setPen methods).
/// 
/// The brushOrColor argument can accept the following values:
/// <ul>
///   <li>A @see:PdfBrush object.</li>
///   <li>
///     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
///     In this case, the @see:PdfBrush object with the specified color will be created internally.
///    </li>
/// </ul>
/// 
/// The penOrColor argument can accept the following values:
/// <ul>
///   <li>A @see:PdfPen object.</li>
///   <li>
///     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
///     In this case, the @see:PdfPen object with the specified color will be created internally.
///   </li>
/// </ul></summary>
/// <param name="brushOrColor" type="Object" optional="true">The brush or color to use.</param>
/// <param name="penOrColor" type="Object" optional="true">The pen or color to use.</param>
/// <param name="rule" type="wijmo.pdf.PdfFillRule" optional="true">The fill rule to use.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths.prototype.stroke = function(penOrColor) {
/// <summary>Strokes the path with the specified pen.
/// If pen is not specified, then the default document pen will be used
/// (See the @see:PdfDocument.setPen method).
/// 
/// The penOrColor argument can accept the following values:
/// <ul>
///   <li>A @see:PdfPen object.</li>
///   <li>
///     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
///     In this case, the @see:PdfPen object with the specified color will be created internally.
///   </li>
/// </ul></summary>
/// <param name="penOrColor" type="Object" optional="true">The pen or color to use.</param>
/// <returns type="wijmo.pdf.PdfPaths">The @see:PdfPaths object.</returns>
}
wijmo.pdf.PdfPaths._wjDict = _wjMerge({}, {});
wijmo.pdf.PdfPaths._wjClass = true;
wijmo.pdf.PdfDocumentEndedEventArgs = function(blob) {
/// <summary>Initializes a new instance of the @see:PdfDocumentEndedEventArgs class.</summary>
/// <param name="blob" type="Blob" optional="false">A Blob object that contains the document data.</param>
/// <returns type="wijmo.pdf.PdfDocumentEndedEventArgs"></returns>
/// <field name="blob" type="Blob">Gets a Blob object that contains the document data.</field>
this._wjClassName = 'wijmo.pdf.PdfDocumentEndedEventArgs';
_wjReownEvents(this);
}
wijmo.pdf.PdfDocumentEndedEventArgs.prototype = new wijmo.EventArgs();
wijmo.pdf.PdfDocumentEndedEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {blob:2});
wijmo.pdf.PdfDocumentEndedEventArgs._wjClass = true;
wijmo.pdf.PdfDocument = function(options) {
/// <summary>Initializes a new instance of the @see:PdfDocument class.</summary>
/// <param name="options" type="Object" optional="true">An optional object containing initialization settings.</param>
/// <returns type="wijmo.pdf.PdfDocument"></returns>
/// <field name="compress" type="Boolean">Gets a value that indicates whether the document compression is enabled.
/// This property can be assigned using the @see:PdfDocument constructor only.
/// 
/// The default value is true.</field>
/// <field name="bufferPages" type="Boolean">Gets a value that indicates whether the pages buffering mode is enabled which means
/// that the document's pages can be iterated over using @see:pageIndex and @see:bufferedPageRange.
/// 
/// This property can be assigned using the @see:PdfDocument constructor only.
/// This property can be set to false only if both @see:header and @see:footer are invisible.
/// 
/// The default value is true.</field>
/// <field name="info" type="wijmo.pdf.IPdfDocumentInfo">Gets or sets the document information, such as author name, document's creation
/// date and so on.</field>
/// <field name="header" type="wijmo.pdf.PdfRunningTitle">Gets an object that represents a header, the page area positioned right below
/// the top margin.</field>
/// <field name="footer" type="wijmo.pdf.PdfRunningTitle">Gets an object that represents a footer, the page area positioned right above
/// the bottom margin.</field>
/// <field name="pageIndex" type="Number">Gets or sets the index of the current page within the buffered pages range.
/// 
/// Use the @see:bufferedPageRange method to get the range of buffered pages.</field>
/// <field name="pageSettings" type="wijmo.pdf.IPdfPageSettings">Gets an object that represents the default page settings for the pages added
/// automatically and for the @see:addPage method.</field>
/// <field name="ended" type="wijmo.Event">Occurs when the document has been rendered.</field>
/// <field name="pageAdded" type="wijmo.Event">Occurs when a new page is added to the document.</field>
/// <field name="currentPageSettings" type="wijmo.pdf.IPdfPageSettings">Gets an object that represents the current page settings (read-only).</field>
this._wjClassName = 'wijmo.pdf.PdfDocument';
this.ended = new wijmo.Event('wijmo.pdf.PdfDocumentEndedEventArgs');
this.pageAdded = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.pdf.PdfDocument.prototype = new wijmo.pdf.PdfPageArea();
wijmo.pdf.PdfDocument.prototype.onEnded = function(args) {
/// <summary>Raises the @see:end event.</summary>
/// <param name="args" type="wijmo.pdf.PdfDocumentEndedEventArgs" optional="false">A @see:PdfDocumentEndedEventArgs object that contains the event data.</param>
}
wijmo.pdf.PdfDocument.prototype.onPageAdded = function(args) {
/// <summary>Raises the @see:pageAdded event.</summary>
/// <param name="args" type="wijmo.EventArgs" optional="false">A @see:EventArgs object that contains the event data.</param>
}
wijmo.pdf.PdfDocument.prototype.dispose = function() {
/// <summary>Disposes the document.</summary>
}
wijmo.pdf.PdfDocument.prototype.addPage = function(settings) {
/// <summary>Adds a new page with the given settings.
/// 
/// If the settings parameter is omitted, then @see:pageSettings will be used instead.</summary>
/// <param name="settings" type="wijmo.pdf.IPdfPageSettings" optional="true">Page settings.</param>
/// <returns type="wijmo.pdf.PdfDocument">The @see:PdfDocument object.</returns>
}
wijmo.pdf.PdfDocument.prototype.bufferedPageRange = function() {
/// <summary>Gets the range of buffered pages.</summary>
/// <returns type="wijmo.pdf.IPdfBufferedPageRange">A @see:IPdfBufferedPageRange object that represents the range of buffered pages.</returns>
}
wijmo.pdf.PdfDocument.prototype.end = function() {
/// <summary>Finishes the document rendering.</summary>
}
wijmo.pdf.PdfDocument.prototype.setBrush = function(brushOrColor) {
/// <summary>Sets the default document brush.
/// This brush will be used by the @see:PdfPaths.fill, @see:PdfPaths.fillAndStroke and
/// @see:drawText methods, if no specific brush is provided.
/// 
/// The brushOrColor argument can accept the following values:
/// <ul>
///   <li>A @see:PdfBrush object.</li>
///   <li>
///     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
///     In this case, the @see:PdfBrush object with the specified color will be created internally.
///    </li>
/// </ul></summary>
/// <param name="brushOrColor" type="Object" optional="false">The brush or color to use.</param>
/// <returns type="wijmo.pdf.PdfDocument">The @see:PdfDocument object.</returns>
}
wijmo.pdf.PdfDocument.prototype.setPen = function(penOrColor) {
/// <summary>Sets the default document pen.
/// This pen will be used by the @see:PdfPaths.stroke, @see:PdfPaths.fillAndStroke
/// and @see:drawText methods, if no specific pen is provided.
/// 
/// The penOrColor argument can accept the following values:
/// <ul>
///   <li>A @see:PdfPen object.</li>
///   <li>
///     A @see:wijmo.Color object or any string acceptable by the @see:wijmo.Color.fromString method.
///     In this case, the @see:PdfPen object with the specified color will be created internally.
///   </li>
/// </ul></summary>
/// <param name="penOrColor" type="Object" optional="false">The pen or color to use.</param>
/// <returns type="wijmo.pdf.PdfDocument">The @see:PdfDocument object.</returns>
}
wijmo.pdf.PdfDocument.prototype.setFont = function(font) {
/// <summary>Sets the document font.
/// 
/// If exact font with given style and weight properties is not found then,
/// <ul>
///   <li>
///     It tries to search the closest font using
///     <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight">font weight fallback</a>.
///   </li>
///   <li>
///     If still nothing is found, it tries to find the closest font with other style in following order:
///     <ul>
///       <li><b>'italic'</b>: 'oblique', 'normal'.</li>
///       <li><b>'oblique'</b>: 'italic', 'normal'.</li>
///       <li><b>'normal'</b>: 'oblique', 'italic'.</li>
///     </ul>
///   </li>
/// </ul></summary>
/// <param name="font" type="wijmo.pdf.PdfFont" optional="false">The font object to set.</param>
/// <returns type="wijmo.pdf.PdfDocument">The @see:PdfDocument object.</returns>
}
wijmo.pdf.PdfDocument.prototype.registerFont = function(font) {
/// <summary>Registers a font from a source and associates it with a given font family name
/// and font attributes.</summary>
/// <param name="font" type="wijmo.pdf.IPdfFontFile" optional="false">The font to register.</param>
/// <returns type="wijmo.pdf.PdfDocument">The @see:PdfDocument object.</returns>
}
wijmo.pdf.PdfDocument.prototype.registerFontAsync = function(font, callback) {
/// <summary>Registers a font from a URL asynchronously and associates it with a given font
/// family name and font attributes.
/// 
/// The callback function takes a @see:IPdfFontFile object as a parameter.</summary>
/// <param name="font" type="wijmo.pdf.IPdfFontFile" optional="false">The font to register.</param>
/// <param name="callback" type="Function" optional="false">A callback function which will be called, when the font has been
/// registered.</param>
}
wijmo.pdf.PdfDocument.prototype.saveState = function() {
/// <summary>Saves the state of the graphic context (including current pen, brush and
/// transformation state) and pushes it onto stack.</summary>
/// <returns type="wijmo.pdf.PdfDocument">The @see:PdfDocument object.</returns>
}
wijmo.pdf.PdfDocument.prototype.restoreState = function() {
/// <summary>Restores the state from the stack and applies it to the graphic context.</summary>
/// <returns type="wijmo.pdf.PdfDocument">The @see:PdfDocument object.</returns>
}
wijmo.pdf.PdfDocument._wjDict = _wjMerge(wijmo.pdf.PdfPageArea._wjDict, {compress:2,bufferPages:2,header:2,footer:2,pageIndex:2,ended:1,pageAdded:1,currentPageSettings:2});
wijmo.pdf.PdfDocument._wjClass = true;
wijmo.grid.pdf = wijmo.grid.pdf || { _wjModule: true };
wijmo.grid.pdf.ScaleMode = {
// Render the grid in actual size, breaking into pages as needed.
ActualSize: 0,
// Scale the grid, so that it fits the page width.
PageWidth: 1,
// Scale the grid, so that it fits on a single page.
SinglePage: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.grid.pdf, {
// Specifies how the grid content should be scaled to fit the page.
ScaleMode: undefined
});

wijmo.grid.pdf.ExportMode = {
// Exports all the data from grid.
All: 0,
// Exports the current selection only.
Selection: 1,
_wjEnum: true
};

intellisense.annotate(wijmo.grid.pdf, {
// Specifies whether the whole grid or just a section should be rendered.
ExportMode: undefined
});

wijmo.grid.pdf.FlexGridPdfConverter = function() {
/// <summary>Provides a functionality to export the @see:FlexGrid to PDF.</summary>
/// <returns type="wijmo.grid.pdf.FlexGridPdfConverter"></returns>
this._wjClassName = 'wijmo.grid.pdf.FlexGridPdfConverter';
_wjReownEvents(this);
}
wijmo.grid.pdf.FlexGridPdfConverter.draw = function(flex, doc, width, height, settings) {
/// <summary>Draws the @see:FlexGrid to an existing @see:PdfDocument at the
/// (0, @wijmo.pdf.PdfDocument.y) coordinates.
/// 
/// If width is not specified, then grid will be rendered in actual size,
/// breaking into pages as needed. If height is not specified, then grid will be
/// scaled to fit the width, breaking into pages vertically as needed.
/// If both, width and height are determined, then grid will be scaled to fit
/// the specified rectangle without any page breaks.
/// 
/// <pre>
/// var doc = new wijmo.pdf.PdfDocument({
///    ended: function (sender, args) {
///       wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
///    }
/// });
/// 
/// wijmo.grid.pdf.FlexGridPdfConverter.draw(grid, doc, null, null, {
///    maxPages: 10,
///    styles: {
///       cellStyle: {
///          backgroundColor: '#ffffff',
///          borderColor: '#c6c6c6'
///       },
///       headerCellStyle: {
///          backgroundColor: '#eaeaea'
///       }
///    }
/// });
/// </pre></summary>
/// <param name="flex" type="wijmo.grid.FlexGrid" optional="false">The @see:FlexGrid instance to export.</param>
/// <param name="doc" type="wijmo.pdf.PdfDocument" optional="false">The @see:PdfDocument instance to draw in.</param>
/// <param name="width" type="Number" optional="true">The width of the drawing area in points.</param>
/// <param name="height" type="Number" optional="true">The height of the drawing area in points.</param>
/// <param name="settings" type="wijmo.grid.pdf.IFlexGridDrawSettings" optional="true">The draw settings.</param>
}
wijmo.grid.pdf.FlexGridPdfConverter.drawToPosition = function(flex, doc, point, width, height, settings) {
/// <summary>Draws the @see:FlexGrid to an existing @see:PdfDocument instance at the
/// specified coordinates.
/// 
/// If width is not specified, then grid will be rendered in actual size
/// without any page breaks.
/// If height is not specified, then grid will be scaled to fit the width
/// without any page breaks.
/// If both, width and height are determined, then grid will be scaled to fit
/// the specified rectangle without any page breaks.
/// 
/// <pre>
/// var doc = new wijmo.pdf.PdfDocument({
///    ended: function (sender, args) {
///       wijmo.pdf.saveBlob(args.blob, 'FlexGrid.pdf');
///    }
/// });
/// 
/// wijmo.grid.pdf.FlexGridPdfConverter.drawToPosition(grid, doc, new wijmo.Point(0, 0), null, null, {
///    maxPages: 10,
///    styles: {
///       cellStyle: {
///          backgroundColor: '#ffffff',
///          borderColor: '#c6c6c6'
///       },
///       headerCellStyle: {
///          backgroundColor: '#eaeaea'
///       }
///    }
/// });
/// </pre></summary>
/// <param name="flex" type="wijmo.grid.FlexGrid" optional="false">The @see:FlexGrid instance to export.</param>
/// <param name="doc" type="wijmo.pdf.PdfDocument" optional="false">The @see:PdfDocument instance to draw in.</param>
/// <param name="point" type="wijmo.Point" optional="false">The position to draw at, in points.</param>
/// <param name="width" type="Number" optional="true">The width of the drawing area in points.</param>
/// <param name="height" type="Number" optional="true">The height of the drawing area in points.</param>
/// <param name="settings" type="wijmo.grid.pdf.IFlexGridDrawSettings" optional="true">The draw settings.</param>
}
wijmo.grid.pdf.FlexGridPdfConverter.export = function(flex, fileName, settings) {
/// <summary>Exports the @see:FlexGrid to PDF.
/// 
/// <pre>
/// wijmo.grid.pdf.FlexGridPdfConverter.export(grid, 'FlexGrid.pdf', {
///    scaleMode: wijmo.grid.pdf.ScaleMode.PageWidth,
///    maxPages: 10,
///    styles: {
///       cellStyle: {
///          backgroundColor: '#ffffff',
///          borderColor: '#c6c6c6'
///       },
///       headerCellStyle: {
///          backgroundColor: '#eaeaea'
///       }
///    },
///    documentOptions: {
///       info: {
///          title: 'Sample'
///       }
///    }
/// });
/// </pre></summary>
/// <param name="flex" type="wijmo.grid.FlexGrid" optional="false">The @see:FlexGrid instance to export.</param>
/// <param name="fileName" type="String" optional="false">Name of the file to export.</param>
/// <param name="settings" type="wijmo.grid.pdf.IFlexGridExportSettings" optional="true">The export settings.</param>
}
wijmo.grid.pdf.FlexGridPdfConverter._wjDict = _wjMerge({}, {});
wijmo.grid.pdf.FlexGridPdfConverter._wjClass = true;
wijmo.grid.sheet = wijmo.grid.sheet || { _wjModule: true };
wijmo.grid.sheet.FlexSheet = function(element, options) {
/// <summary>Initializes a new instance of the @see:FlexSheet class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control, or a jQuery selector (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.grid.sheet.FlexSheet"></returns>
/// <field name="sheets" type="wijmo.grid.sheet.SheetCollection">Gets the collection of @see:Sheet objects representing workbook sheets.</field>
/// <field name="selectedSheetIndex" type="Number">Gets or sets the index of the current sheet in the @see:FlexSheet.</field>
/// <field name="selectedSheet" type="wijmo.grid.sheet.Sheet">Gets the current @see:Sheet in the <b>FlexSheet</b>.</field>
/// <field name="isFunctionListOpen" type="Boolean">Gets a value indicating whether the function list is opened.</field>
/// <field name="isTabHolderVisible" type="Boolean">Gets or sets a value indicating whether the TabHolder is visible.</field>
/// <field name="undoStack" type="wijmo.grid.sheet.UndoStack">Gets the @see:UndoStack instance that controls undo and redo operations of the <b>FlexSheet</b>.</field>
/// <field name="sortManager" type="wijmo.grid.sheet.SortManager">Gets the @see:SortManager instance that controls <b>FlexSheet</b> sorting.</field>
/// <field name="selectedSheetChanged" type="wijmo.Event">Occurs when current sheet index changed.</field>
/// <field name="draggingRowColumn" type="wijmo.Event">Occurs when dragging the rows or the columns of the <b>FlexSheet</b>.</field>
/// <field name="droppingRowColumn" type="wijmo.Event">Occurs when dropping the rows or the columns of the <b>FlexSheet</b>.</field>
/// <field name="loaded" type="wijmo.Event">Occurs after the @see:FlexSheet loads the @see:Workbook instance</field>
/// <field name="unknownFunction" type="wijmo.Event">Occurs when the @see:FlexSheet meets the unknown formula.</field>
/// <field name="sheetCleared" type="wijmo.Event">Occurs when the @see:FlexSheet is cleared.</field>
this._wjClassName = 'wijmo.grid.sheet.FlexSheet';
this.selectedSheetChanged = new wijmo.Event('wijmo.PropertyChangedEventArgs');
this.draggingRowColumn = new wijmo.Event('wijmo.grid.sheet.DraggingRowColumnEventArgs');
this.droppingRowColumn = new wijmo.Event('wijmo.EventArgs');
this.loaded = new wijmo.Event('wijmo.EventArgs');
this.unknownFunction = new wijmo.Event('wijmo.grid.sheet.UnknownFunctionEventArgs');
this.sheetCleared = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.grid.sheet.FlexSheet.prototype = new wijmo.grid.FlexGrid();
wijmo.grid.sheet.FlexSheet.prototype.onSelectedSheetChanged = function(e) {
/// <summary>Raises the currentSheetChanged event.</summary>
/// <param name="e" type="wijmo.PropertyChangedEventArgs" optional="false">@see:PropertyChangedEventArgs that contains the event data.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.onDraggingRowColumn = function(e) {
/// <summary>Raises the draggingRowColumn event.</summary>
/// <param name="e" type="wijmo.grid.sheet.DraggingRowColumnEventArgs" optional="false"></param>
}
wijmo.grid.sheet.FlexSheet.prototype.onDroppingRowColumn = function() {
/// <summary>Raises the droppingRowColumn event.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.onLoaded = function() {
/// <summary>Raises the loaded event.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.onUnknownFunction = function(e) {
/// <summary>Raises the unknownFunction event.</summary>
/// <param name="e" type="wijmo.grid.sheet.UnknownFunctionEventArgs" optional="false"></param>
}
wijmo.grid.sheet.FlexSheet.prototype.onSheetCleared = function() {
/// <summary>Raises the sheetCleared event.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.refresh = function(fullUpdate) {
/// <summary>Overridden to refresh the sheet and the TabHolder.</summary>
/// <param name="fullUpdate" type="Boolean" optional="true">Whether to update the control layout as well as the content.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.setCellData = function(r, c, value, coerce) {
/// <summary>Overrides the setCellData function of the base class.</summary>
/// <param name="r" type="Number" optional="false">Index of the row that contains the cell.</param>
/// <param name="c" type="Object" optional="false">Index, name, or binding of the column that contains the cell.</param>
/// <param name="value" type="Object" optional="false">Value to store in the cell.</param>
/// <param name="coerce" type="Boolean" optional="true">Whether to change the value automatically to match the column's data type.</param>
/// <returns type="Boolean">True if the value was stored successfully, false otherwise.</returns>
}
wijmo.grid.sheet.FlexSheet.prototype.containsFocus = function() {
/// <summary>Overrides the base class method to take into account the function list.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.grid.sheet.FlexSheet.prototype.addUnboundSheet = function(sheetName, rows, cols, pos, grid) {
/// <summary>Add an unbound @see:Sheet to the <b>FlexSheet</b>.</summary>
/// <param name="sheetName" type="String" optional="true">The name of the Sheet.</param>
/// <param name="rows" type="Number" optional="true">The row count of the Sheet.</param>
/// <param name="cols" type="Number" optional="true">The column count of the Sheet.</param>
/// <param name="pos" type="Number" optional="true">The position in the <b>sheets</b> collection.</param>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="true">The @see:FlexGrid instance associated with the @see:Sheet. If not specified then new @see:FlexGrid instance
/// will be created.</param>
/// <returns type="wijmo.grid.sheet.Sheet"></returns>
}
wijmo.grid.sheet.FlexSheet.prototype.addBoundSheet = function(sheetName, source, pos, grid) {
/// <summary>Add a bound @see:Sheet to the <b>FlexSheet</b>.</summary>
/// <param name="sheetName" type="String" optional="false">The name of the @see:Sheet.</param>
/// <param name="source" type="Object" optional="false">The items source for the @see:Sheet.</param>
/// <param name="pos" type="Number" optional="true">The position in the <b>sheets</b> collection.</param>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="true">The @see:FlexGrid instance associated with the @see:Sheet. If not specified then new @see:FlexGrid instance
/// will be created.</param>
/// <returns type="wijmo.grid.sheet.Sheet"></returns>
}
wijmo.grid.sheet.FlexSheet.prototype.applyCellsStyle = function(cellStyle, cells, isPreview) {
/// <summary>Apply the style to a range of cells.</summary>
/// <param name="cellStyle" type="wijmo.grid.pdf.ICellStyle" optional="false">The @see:ICellStyle object to apply.</param>
/// <param name="cells" type="wijmo.grid.CellRange[]" optional="true">An array of @see:CellRange objects to apply the style to. If not specified then
/// style is applied to the currently selected cells.</param>
/// <param name="isPreview" type="Boolean" optional="true">Indicates whether the applied style is just for preview.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.freezeAtCursor = function() {
/// <summary>Freeze or unfreeze the columns and rows of the <b>FlexSheet</b> control.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.showColumnFilter = function() {
/// <summary>Show the filter editor.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.clear = function() {
/// <summary>Clears the content of the <b>FlexSheet</b> control.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.getSelectionFormatState = function() {
/// <summary>Gets the @see:IFormatState object describing formatting of the selected cells.</summary>
/// <returns type="wijmo.grid.sheet.IFormatState">The @see:IFormatState object containing formatting properties.</returns>
}
wijmo.grid.sheet.FlexSheet.prototype.insertRows = function(index, count) {
/// <summary>Inserts rows in the current @see:Sheet of the <b>FlexSheet</b> control.</summary>
/// <param name="index" type="Number" optional="true">The position where new rows should be added. If not specified then rows will be added
/// before the first row of the current selection.</param>
/// <param name="count" type="Number" optional="true">The numbers of rows to add. If not specified then one row will be added.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.deleteRows = function(index, count) {
/// <summary>Deletes rows from the current @see:Sheet of the <b>FlexSheet</b> control.</summary>
/// <param name="index" type="Number" optional="true">The starting index of the deleting rows. If not specified then rows will be deleted
/// starting from the first row of the current selection.</param>
/// <param name="count" type="Number" optional="true">The numbers of rows to delete. If not specified then one row will be deleted.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.insertColumns = function(index, count) {
/// <summary>Inserts columns in the current @see:Sheet of the <b>FlexSheet</b> control.</summary>
/// <param name="index" type="Number" optional="true">The position where new columns should be added. If not specified then columns will be added
/// before the left column of the current selection.</param>
/// <param name="count" type="Number" optional="true">The numbers of columns to add. If not specified then one column will be added.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.deleteColumns = function(index, count) {
/// <summary>Deletes columns from the current @see:Sheet of the <b>FlexSheet</b> control.</summary>
/// <param name="index" type="Number" optional="true">The starting index of the deleting columns. If not specified then columns will be deleted
/// starting from the first column of the current selection.</param>
/// <param name="count" type="Number" optional="true">The numbers of columns to delete. If not specified then one column will be deleted.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.mergeRange = function(cells) {
/// <summary>Merges the selected @see:CellRange into one cell.</summary>
/// <param name="cells" type="wijmo.grid.CellRange" optional="true">The @see:CellRange to merge.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.getMergedRange = function(panel, r, c, clip) {
/// <summary>Gets a @see:CellRange that specifies the merged extent of a cell
/// in a @see:GridPanel.
/// This method overrides the getMergedRange method of its parent class FlexGrid</summary>
/// <param name="panel" type="wijmo.grid.GridPanel" optional="false">@see:GridPanel that contains the range.</param>
/// <param name="r" type="Number" optional="false">Index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">Index of the column that contains the cell.</param>
/// <param name="clip" type="Boolean" optional="true">Whether to clip the merged range to the grid's current view range.</param>
/// <returns type="wijmo.grid.CellRange">A @see:CellRange that specifies the merged range, or null if the cell is not merged.</returns>
}
wijmo.grid.sheet.FlexSheet.prototype.evaluate = function(formula, format, sheet) {
/// <summary>Evaluates a formula.
/// 
/// @see:FlexSheet formulas follow the Excel syntax, including a large subset of the
/// functions supported by Excel. A complete list of the functions supported by
/// @see:FlexSheet can be found here:
/// <a href="static/FlexSheetFunctions.html">FlexSheet Functions</a>.</summary>
/// <param name="formula" type="String" optional="false">The formula to evaluate. The formula may start with an optional equals sign ('=').</param>
/// <param name="format" type="String" optional="true">If specified, defines the .Net format that will be applied to the evaluated value.</param>
/// <param name="sheet" type="wijmo.grid.sheet.Sheet" optional="true">The @see:Sheet whose data will be used for evaluation.
///              If not specified then the current sheet is used.</param>
/// <returns type="Object"></returns>
}
wijmo.grid.sheet.FlexSheet.prototype.getCellValue = function(rowIndex, colIndex, formatted, sheet) {
/// <summary>Gets the evaluated cell value.
/// 
/// Unlike the <b>getCellData</b> method that returns a raw data that can be a value or a formula, the <b>getCellValue</b>
/// method always returns an evaluated value, that is if the cell contains a formula then it will be evaluated first and the
/// resulting value will be returned.</summary>
/// <param name="rowIndex" type="Number" optional="false">The row index of the cell.</param>
/// <param name="colIndex" type="Number" optional="false">The column index of the cell.</param>
/// <param name="formatted" type="Boolean" optional="true">Indicates whether to return an original or a formatted value of the cell.</param>
/// <param name="sheet" type="wijmo.grid.sheet.Sheet" optional="true">The @see:Sheet whose value to evaluate. If not specified then the data from current sheet
/// is used.</param>
/// <returns type="Object"></returns>
}
wijmo.grid.sheet.FlexSheet.prototype.showFunctionList = function(target) {
/// <summary>Open the function list.</summary>
/// <param name="target" type="HTMLElement" optional="false">The DOM element that toggle the function list.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.hideFunctionList = function() {
/// <summary>Close the function list.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.selectPreviousFunction = function() {
/// <summary>Select previous function in the function list.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.selectNextFunction = function() {
/// <summary>Select next function in the function list.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.applyFunctionToCell = function() {
/// <summary>Inserts the selected function from the function list to the cell value editor.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.save = function(fileName) {
/// <summary>Saves the <b>FlexSheet</b> to xlsx file.
/// 
/// For example:
/// <pre>// This sample exports FlexSheet content to an xlsx
/// // click.
/// &nbsp;
/// // HTML
/// &lt;button
///     onclick="saveXlsx('FlexSheet.xlsx')"&gt;
///     Save
/// &lt;/button&gt;
/// &nbsp;
/// // JavaScript
/// function saveXlsx(fileName) {
///     // Save the flexGrid to xlsx file.
///     flexsheet.save(fileName);
/// }</pre></summary>
/// <param name="fileName" type="String" optional="true">Name of the file that will be generated.</param>
/// <returns type="wijmo.xlsx.Workbook">A workbook instance containing the generated xlsx file content.</returns>
}
wijmo.grid.sheet.FlexSheet.prototype.load = function(workbook) {
/// <summary>Loads the workbook into the <b>FlexSheet</b>.
/// 
/// For example:
/// <pre>// This sample opens an xlsx file chosen via Open File
/// // dialog and fills FlexSheet
/// &nbsp;
/// // HTML
/// &lt;input type="file"
///     id="importFile"
///     accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
/// /&gt;
/// &lt;div id="flexHost"&gt;&lt;/&gt;
/// &nbsp;
/// // JavaScript
/// var flexSheet = new wijmo.grid.FlexSheet("#flexHost"),
///     importFile = document.getElementById('importFile');
/// &nbsp;
/// importFile.addEventListener('change', function () {
///     loadWorkbook();
/// });
/// &nbsp;
/// function loadWorkbook() {
///     var reader,
///         file = importFile.files[0];
///     if (file) {
///         reader = new FileReader();
///         reader.onload = function (e) {
///             flexSheet.load(reader.result);
///         };
///         reader.readAsArrayBuffer(file);
///     }
/// }</pre></summary>
/// <param name="workbook" type="Object" optional="false">An Workbook instance or a Blob instance or a base 64 stirng or an ArrayBuffer containing xlsx file content.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.undo = function() {
/// <summary>Undo the last user action.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.redo = function() {
/// <summary>Redo the last user action.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.select = function(rng, show) {
/// <summary>Selects a cell range and optionally scrolls it into view.
/// 
/// @see:FlexSheet overrides this method to adjust the selection cell range for the merged cells in the @see:FlexSheet.</summary>
/// <param name="rng" type="Object" optional="false">The cell range to select.</param>
/// <param name="show" type="Object" optional="true">Indicates whether to scroll the new selection into view.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.addCustomFunction = function(name, func, description, minParamsCount, maxParamsCount) {
/// <summary>Add custom function in @see:FlexSheet.</summary>
/// <param name="name" type="String" optional="false">the name of the custom function.</param>
/// <param name="func" type="Function" optional="false">the custom function.</param>
/// <param name="description" type="String" optional="true">the description of the custom function, it will be shown in the function autocompletion of the @see:FlexSheet.</param>
/// <param name="minParamsCount" type="Number" optional="true">the minimum count of the parameter that the function need.</param>
/// <param name="maxParamsCount" type="Number" optional="true">the maximum count of the parameter that the function need.
///        If the count of the parameters in the custom function is arbitrary, the minParamsCount and maxParamsCount should be set to null.</param>
}
wijmo.grid.sheet.FlexSheet.prototype.dispose = function() {
/// <summary>Disposes of the control by removing its association with the host element.</summary>
}
wijmo.grid.sheet.FlexSheet.prototype.setClipString = function(text, rng) {
/// <summary>Parses a string into rows and columns and applies the content to a given range.
/// 
/// Override the <b>setClipString</b> method of @see:FlexGrid.</summary>
/// <param name="text" type="String" optional="false">Tab and newline delimited text to parse into the grid.</param>
/// <param name="rng" type="wijmo.grid.CellRange" optional="true">@see:CellRange to copy. If omitted, the current selection is used.</param>
}
wijmo.grid.sheet.FlexSheet.convertNumberToAlpha = function(c) {
/// <summary>Converts the number value to its corresponding alpha value.
/// For instance: 0, 1, 2...to a, b, c...</summary>
/// <param name="c" type="Number" optional="false">The number value need to be converted.</param>
/// <returns type="String"></returns>
}
wijmo.grid.sheet.FlexSheet.controlTemplate = undefined;
intellisense.annotate(wijmo.grid.sheet.FlexSheet, {
// Overrides the template used to instantiate @see:FlexSheet control.
controlTemplate: undefined
});
wijmo.grid.sheet.FlexSheet._wjDict = _wjMerge(wijmo.grid.FlexGrid._wjDict, {sheets:2,selectedSheetIndex:2,selectedSheet:2,isFunctionListOpen:2,isTabHolderVisible:2,undoStack:2,sortManager:2,selectedSheetChanged:1,draggingRowColumn:1,droppingRowColumn:1,loaded:1,unknownFunction:1,sheetCleared:1});
wijmo.grid.sheet.FlexSheet._wjClass = true;
wijmo.grid.sheet.DraggingRowColumnEventArgs = function(isDraggingRows, isShiftKey) {
/// <summary>Initializes a new instance of the @see:DraggingRowColumnEventArgs class.</summary>
/// <param name="isDraggingRows" type="Boolean" optional="false">Indicates whether the dragging event is triggered due to dragging rows or columns.</param>
/// <param name="isShiftKey" type="Boolean" optional="false">Indicates whether the shift key is pressed when dragging.</param>
/// <returns type="wijmo.grid.sheet.DraggingRowColumnEventArgs"></returns>
/// <field name="isDraggingRows" type="Boolean">Gets a value indicating whether the event refers to dragging rows or columns.</field>
/// <field name="isShiftKey" type="Boolean">Gets a value indicating whether the shift key is pressed.</field>
this._wjClassName = 'wijmo.grid.sheet.DraggingRowColumnEventArgs';
_wjReownEvents(this);
}
wijmo.grid.sheet.DraggingRowColumnEventArgs.prototype = new wijmo.EventArgs();
wijmo.grid.sheet.DraggingRowColumnEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {isDraggingRows:2,isShiftKey:2});
wijmo.grid.sheet.DraggingRowColumnEventArgs._wjClass = true;
wijmo.grid.sheet.UnknownFunctionEventArgs = function(funcName, params) {
/// <summary>Initializes a new instance of the @see:UnknownFunctionEventArgs class.</summary>
/// <param name="funcName" type="String" optional="false">The name of the unknown function.</param>
/// <param name="params" type="Object[]" optional="false">The parameters' value list of the nuknown function.</param>
/// <returns type="wijmo.grid.sheet.UnknownFunctionEventArgs"></returns>
/// <field name="value" type="String">Gets or sets the result for the unknown funtion.</field>
/// <field name="funcName" type="String">Gets the name of the unknown function.</field>
/// <field name="params" type="Object[]">Gets the parameters' value list of the nuknown function.</field>
this._wjClassName = 'wijmo.grid.sheet.UnknownFunctionEventArgs';
_wjReownEvents(this);
}
wijmo.grid.sheet.UnknownFunctionEventArgs.prototype = new wijmo.EventArgs();
wijmo.grid.sheet.UnknownFunctionEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {funcName:2,params:2});
wijmo.grid.sheet.UnknownFunctionEventArgs._wjClass = true;
wijmo.grid.sheet.FlexSheetPanel = function(grid, cellType, rows, cols, element) {
/// <summary>Initializes a new instance of the @see:FlexSheetPanel class.</summary>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="false">The @see:FlexGrid object that owns the panel.</param>
/// <param name="cellType" type="wijmo.grid.CellType" optional="false">The type of cell in the panel.</param>
/// <param name="rows" type="wijmo.grid.RowCollection" optional="false">The rows displayed in the panel.</param>
/// <param name="cols" type="wijmo.grid.ColumnCollection" optional="false">The columns displayed in the panel.</param>
/// <param name="element" type="HTMLElement" optional="false">The HTMLElement that hosts the cells in the control.</param>
/// <returns type="wijmo.grid.sheet.FlexSheetPanel"></returns>
this._wjClassName = 'wijmo.grid.sheet.FlexSheetPanel';
_wjReownEvents(this);
}
wijmo.grid.sheet.FlexSheetPanel.prototype = new wijmo.grid.GridPanel();
wijmo.grid.sheet.FlexSheetPanel.prototype.getSelectedState = function(r, c, rng) {
/// <summary>Gets a @see:SelectedState value that indicates the selected state of a cell.
/// 
/// Overrides this method to support multiple selection showSelectedHeaders for @see:FlexSheet</summary>
/// <param name="r" type="Number" optional="false">Specifies Row index of the cell.</param>
/// <param name="c" type="Number" optional="false">Specifies Column index of the cell.</param>
/// <param name="rng" type="wijmo.grid.CellRange" optional="false">@see:CellRange that contains the cell that would be included.</param>
/// <returns type="wijmo.grid.SelectedState"></returns>
}
wijmo.grid.sheet.FlexSheetPanel.prototype.setCellData = function(r, c, value, coerce) {
/// <summary>Sets the content of a cell in the panel.</summary>
/// <param name="r" type="Number" optional="false">The index of the row that contains the cell.</param>
/// <param name="c" type="Object" optional="false">The index, name, or binding of the column that contains the cell.</param>
/// <param name="value" type="Object" optional="false">The value to store in the cell.</param>
/// <param name="coerce" type="Boolean" optional="true">A value indicating whether to change the value automatically to match the column's data type.</param>
/// <returns type="Boolean">Returns true if the value is stored successfully, otherwise false (failed cast).</returns>
}
wijmo.grid.sheet.FlexSheetPanel._wjDict = _wjMerge(wijmo.grid.GridPanel._wjDict, {});
wijmo.grid.sheet.FlexSheetPanel._wjClass = true;
wijmo.grid.sheet.HeaderRow = function() {
/// <summary>Initializes a new instance of the HeaderRow class.</summary>
/// <returns type="wijmo.grid.sheet.HeaderRow"></returns>
this._wjClassName = 'wijmo.grid.sheet.HeaderRow';
_wjReownEvents(this);
}
wijmo.grid.sheet.HeaderRow.prototype = new wijmo.grid.Row();
wijmo.grid.sheet.HeaderRow._wjDict = _wjMerge(wijmo.grid.Row._wjDict, {});
wijmo.grid.sheet.HeaderRow._wjClass = true;
wijmo.grid.sheet.Sheet = function(owner, grid, sheetName, rows, cols) {
/// <summary>Initializes a new instance of the @see:FlexSheet class.</summary>
/// <param name="owner" type="wijmo.grid.sheet.FlexSheet" optional="true">The owner @see: FlexSheet control.</param>
/// <param name="grid" type="wijmo.grid.FlexGrid" optional="true">The associated @see:FlexGrid control used to store the sheet data. If not specified then the
/// new <b>FlexGrid</b> control will be created.</param>
/// <param name="sheetName" type="String" optional="true">The name of the sheet within the @see:FlexSheet control.</param>
/// <param name="rows" type="Number" optional="true">The row count for the sheet.</param>
/// <param name="cols" type="Number" optional="true">The column count for the sheet.</param>
/// <returns type="wijmo.grid.sheet.Sheet"></returns>
/// <field name="grid" type="wijmo.grid.FlexGrid">Gets the associated @see:FlexGrid control used to store the sheet data.</field>
/// <field name="name" type="String">Gets or sets the name of the sheet.</field>
/// <field name="visible" type="Boolean">Gets or sets the sheet visibility.</field>
/// <field name="rowCount" type="Number">Gets or sets the number of rows in the sheet.</field>
/// <field name="columnCount" type="Number">Gets or sets the number of columns in the sheet.</field>
/// <field name="selectionRanges" type="wijmo.collections.ObservableArray">Gets the selection array.</field>
/// <field name="itemsSource" type="Object">Gets or sets the array or @see:ICollectionView for the @see:FlexGrid instance of the sheet.</field>
/// <field name="nameChanged" type="wijmo.Event">Occurs after the sheet name has changed.</field>
/// <field name="visibleChanged" type="wijmo.Event">Occurs after the visible of sheet has changed.</field>
this._wjClassName = 'wijmo.grid.sheet.Sheet';
this.nameChanged = new wijmo.Event('wijmo.EventArgs');
this.visibleChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.grid.sheet.Sheet.prototype.onNameChanged = function(e) {
/// <summary>Raises the @see:nameChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="false"></param>
}
wijmo.grid.sheet.Sheet.prototype.onVisibleChanged = function(e) {
/// <summary>Raises the @see:visibleChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="false"></param>
}
wijmo.grid.sheet.Sheet.prototype.getCellStyle = function(rowIndex, columnIndex) {
/// <summary>Gets the style of specified cell.</summary>
/// <param name="rowIndex" type="Number" optional="false">the row index of the specified cell.</param>
/// <param name="columnIndex" type="Number" optional="false">the column index of the specified cell.</param>
/// <returns type="wijmo.grid.pdf.ICellStyle"></returns>
}
wijmo.grid.sheet.Sheet._wjDict = _wjMerge({}, {grid:2,name:2,visible:2,rowCount:2,columnCount:2,selectionRanges:2,itemsSource:2,nameChanged:1,visibleChanged:1});
wijmo.grid.sheet.Sheet._wjClass = true;
wijmo.grid.sheet.SheetCollection = function() {
/// <summary>Defines the collection of the @see:Sheet objects.</summary>
/// <returns type="wijmo.grid.sheet.SheetCollection"></returns>
/// <field name="selectedIndex" type="Number">Gets or sets the index of the currently selected sheet.</field>
/// <field name="selectedSheetChanged" type="wijmo.Event">Occurs when the <b>selectedIndex</b> property changes.</field>
/// <field name="sheetNameChanged" type="wijmo.Event">Occurs after the name of the sheet in the collection has changed.</field>
/// <field name="sheetVisibleChanged" type="wijmo.Event">Occurs after the visible of the sheet in the collection has changed.</field>
this._wjClassName = 'wijmo.grid.sheet.SheetCollection';
this.selectedSheetChanged = new wijmo.Event('wijmo.PropertyChangedEventArgs');
this.sheetNameChanged = new wijmo.Event('wijmo.collections.NotifyCollectionChangedEventArgs');
this.sheetVisibleChanged = new wijmo.Event('wijmo.collections.NotifyCollectionChangedEventArgs');
_wjReownEvents(this);
}
wijmo.grid.sheet.SheetCollection.prototype = new wijmo.collections.ObservableArray();
wijmo.grid.sheet.SheetCollection.prototype.onSelectedSheetChanged = function(e) {
/// <summary>Raises the <b>currentChanged</b> event.</summary>
/// <param name="e" type="wijmo.PropertyChangedEventArgs" optional="false">@see:PropertyChangedEventArgs that contains the event data.</param>
}
wijmo.grid.sheet.SheetCollection.prototype.insert = function(index, item) {
/// <summary>Inserts an item at a specific position in the array.
/// Overrides the insert method of its base class @see:ObservableArray.</summary>
/// <param name="index" type="Number" optional="false">Position where the item will be added.</param>
/// <param name="item" type="Object" optional="false">Item to add to the array.</param>
}
wijmo.grid.sheet.SheetCollection.prototype.push = function(item) {
/// <summary>Adds one or more items to the end of the array.
/// Overrides the push method of its base class @see:ObservableArray.</summary>
/// <param name="item" type="Object[]" optional="false">One or more items to add to the array.</param>
/// <returns type="Number">The new length of the array.</returns>
}
wijmo.grid.sheet.SheetCollection.prototype.splice = function(index, count, item) {
/// <summary>Removes and/or adds items to the array.
/// Overrides the splice method of its base class @see:ObservableArray.</summary>
/// <param name="index" type="Number" optional="false">Position where items will be added or removed.</param>
/// <param name="count" type="Number" optional="false">Number of items to remove from the array.</param>
/// <param name="item" type="Object" optional="true">Item to add to the array.</param>
/// <returns type="Object[]">An array containing the removed elements.</returns>
}
wijmo.grid.sheet.SheetCollection.prototype.removeAt = function(index) {
/// <summary>Removes an item at a specific position in the array.
/// Overrides the removeAt method of its base class @see:ObservableArray.</summary>
/// <param name="index" type="Number" optional="false">Position of the item to remove.</param>
}
wijmo.grid.sheet.SheetCollection.prototype.onSheetNameChanged = function(e) {
/// <summary>Raises the <b>sheetNameChanged</b> event.</summary>
/// <param name="e" type="wijmo.collections.NotifyCollectionChangedEventArgs" optional="false"></param>
}
wijmo.grid.sheet.SheetCollection.prototype.onSheetVisibleChanged = function(e) {
/// <summary>Raises the <b>sheetVisibleChanged</b> event.</summary>
/// <param name="e" type="wijmo.collections.NotifyCollectionChangedEventArgs" optional="false"></param>
}
wijmo.grid.sheet.SheetCollection.prototype.selectFirst = function() {
/// <summary>Selects the first sheet in the @see:FlexSheet control.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.grid.sheet.SheetCollection.prototype.selectLast = function() {
/// <summary>Selects the last sheet in the owner @see:FlexSheet control.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.grid.sheet.SheetCollection.prototype.selectPrevious = function() {
/// <summary>Selects the previous sheet in the owner @see:FlexSheet control.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.grid.sheet.SheetCollection.prototype.selectNext = function() {
/// <summary>Select the next sheet in the owner @see:FlexSheet control.</summary>
/// <returns type="Boolean"></returns>
}
wijmo.grid.sheet.SheetCollection.prototype.hide = function(pos) {
/// <summary>Hides the sheet at the specified position.</summary>
/// <param name="pos" type="Number" optional="false">The position of the sheet to hide.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.sheet.SheetCollection.prototype.show = function(pos) {
/// <summary>Unhide and selects the @see:Sheet at the specified position.</summary>
/// <param name="pos" type="Number" optional="false">The position of the sheet to show.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.sheet.SheetCollection.prototype.clear = function() {
/// <summary>Clear the SheetCollection.</summary>
}
wijmo.grid.sheet.SheetCollection.prototype.isValidSheetName = function(sheet) {
/// <summary>Checks whether the sheet name is valid.</summary>
/// <param name="sheet" type="wijmo.grid.sheet.Sheet" optional="false">The @see:Sheet for which the name needs to check.</param>
/// <returns type="Boolean"></returns>
}
wijmo.grid.sheet.SheetCollection.prototype.getValidSheetName = function(currentSheet) {
/// <summary>Gets the valid name for the sheet.</summary>
/// <param name="currentSheet" type="wijmo.grid.sheet.Sheet" optional="false">The @see:Sheet need get the valid name.</param>
/// <returns type="String"></returns>
}
wijmo.grid.sheet.SheetCollection._wjDict = _wjMerge(wijmo.collections.ObservableArray._wjDict, {selectedIndex:2,selectedSheetChanged:1,sheetNameChanged:1,sheetVisibleChanged:1});
wijmo.grid.sheet.SheetCollection._wjClass = true;
wijmo.grid.sheet.SortManager = function(owner) {
/// <summary>Initializes a new instance of the @see:SortManager class.</summary>
/// <param name="owner" type="wijmo.grid.sheet.FlexSheet" optional="false">The @see:FlexSheet control that owns this <b>SortManager</b>.</param>
/// <returns type="wijmo.grid.sheet.SortManager"></returns>
/// <field name="sortDescriptions" type="wijmo.collections.CollectionView">Gets or sets the collection of the sort descriptions represented by the  @see:ColumnSortDescription objects.</field>
this._wjClassName = 'wijmo.grid.sheet.SortManager';
_wjReownEvents(this);
}
wijmo.grid.sheet.SortManager.prototype.addSortLevel = function(columnIndex, ascending) {
/// <summary>Adds a blank sorting level to the sort descriptions.</summary>
/// <param name="columnIndex" type="Number" optional="true">The index of the column in the FlexSheet control.</param>
/// <param name="ascending" type="Boolean" optional="true">The sort order for the sort level.</param>
}
wijmo.grid.sheet.SortManager.prototype.deleteSortLevel = function(columnIndex) {
/// <summary>Removes the current sorting level from the sort descriptions.</summary>
/// <param name="columnIndex" type="Number" optional="true">The index of the column in the FlexSheet control.</param>
}
wijmo.grid.sheet.SortManager.prototype.copySortLevel = function() {
/// <summary>Adds a copy of the current sorting level to the sort descriptions.</summary>
}
wijmo.grid.sheet.SortManager.prototype.editSortLevel = function(columnIndex, ascending) {
/// <summary>Updates the current sort level.</summary>
/// <param name="columnIndex" type="Number" optional="true">The column index for the sort level.</param>
/// <param name="ascending" type="Boolean" optional="true">The sort order for the sort level.</param>
}
wijmo.grid.sheet.SortManager.prototype.moveSortLevel = function(offset) {
/// <summary>Moves the current sorting level to a new position.</summary>
/// <param name="offset" type="Number" optional="false">The offset to move the current level by.</param>
}
wijmo.grid.sheet.SortManager.prototype.checkSortItemExists = function(columnIndex) {
/// <summary>Check whether the sort item of specific column exists or not</summary>
/// <param name="columnIndex" type="Object" optional="false">The index of the column in the FlexSheet control.</param>
/// <returns type="Number"></returns>
}
wijmo.grid.sheet.SortManager.prototype.commitSort = function(undoable) {
/// <summary>Commits the current sort descriptions to the FlexSheet control.</summary>
/// <param name="undoable" type="Boolean" optional="true">The boolean value indicating whether the commit sort action is undoable.</param>
}
wijmo.grid.sheet.SortManager.prototype.cancelSort = function() {
/// <summary>Cancel the current sort descriptions to the FlexSheet control.</summary>
}
wijmo.grid.sheet.SortManager._wjDict = _wjMerge({}, {sortDescriptions:2});
wijmo.grid.sheet.SortManager._wjClass = true;
wijmo.grid.sheet.ColumnSortDescription = function(columnIndex, ascending) {
/// <summary>Initializes a new instance of the @see:ColumnSortDescription class.</summary>
/// <param name="columnIndex" type="Number" optional="false">Indicates which column to sort the rows by.</param>
/// <param name="ascending" type="Boolean" optional="false">The sort order.</param>
/// <returns type="wijmo.grid.sheet.ColumnSortDescription"></returns>
/// <field name="columnIndex" type="Number">Gets or sets the column index.</field>
/// <field name="ascending" type="Boolean">Gets or sets the ascending.</field>
this._wjClassName = 'wijmo.grid.sheet.ColumnSortDescription';
_wjReownEvents(this);
}
wijmo.grid.sheet.ColumnSortDescription._wjDict = _wjMerge({}, {columnIndex:2,ascending:2});
wijmo.grid.sheet.ColumnSortDescription._wjClass = true;
wijmo.grid.sheet.UndoStack = function(owner) {
/// <summary>Initializes a new instance of the @see:UndoStack class.</summary>
/// <param name="owner" type="wijmo.grid.sheet.FlexSheet" optional="false">The @see:FlexSheet control that the @see:UndoStack works for.</param>
/// <returns type="wijmo.grid.sheet.UndoStack"></returns>
/// <field name="canUndo" type="Boolean">Checks whether the undo action can be performed.</field>
/// <field name="canRedo" type="Boolean">Checks whether the redo action can be performed.</field>
/// <field name="undoStackChanged" type="wijmo.Event">Occurs after the undo stack has changed.</field>
this._wjClassName = 'wijmo.grid.sheet.UndoStack';
this.undoStackChanged = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.grid.sheet.UndoStack.prototype.onUndoStackChanged = function() {
/// <summary>Raises the <b>undoStackChanged</b> event.</summary>
}
wijmo.grid.sheet.UndoStack.prototype.undo = function() {
/// <summary>Undo the latest action.</summary>
}
wijmo.grid.sheet.UndoStack.prototype.redo = function() {
/// <summary>Redo the latest undone action.</summary>
}
wijmo.grid.sheet.UndoStack.prototype.clear = function() {
/// <summary>Clears the undo stack.</summary>
}
wijmo.grid.sheet.UndoStack._wjDict = _wjMerge({}, {canUndo:2,canRedo:2,undoStackChanged:1});
wijmo.grid.sheet.UndoStack._wjClass = true;
wijmo.chart.finance = wijmo.chart.finance || { _wjModule: true };
wijmo.chart.finance.FinancialChartType = {
// Shows vertical bars and allows you to compare values of items across categories.
Column: 0,
// Uses X and Y coordinates to show patterns within the data.
Scatter: 1,
// Shows trends over a period of time or across categories.
Line: 2,
// Shows line chart with a symbol on each data point.
LineSymbols: 3,
// Shows line chart with area below the line filled with color.
Area: 4,
// Presents items with high, low, open, and close values.
// The size of the wick line is determined by the High and Low values, while
// the size of the bar is determined by the Open and Close values. The bar is
// displayed using different colors, depending on whether the close value is
// higher or lower than the open value. The data for this chart type can be defined using the
//  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
// following format: "highProperty, lowProperty, openProperty, closeProperty".
Candlestick: 5,
// Displays the same information as a candlestick chart, except that opening
// values are displayed using lines to the left, while lines to the right
// indicate closing values. The data for this chart type can be defined using the
//  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
// following format: "highProperty, lowProperty, openProperty, closeProperty".
HighLowOpenClose: 6,
// Derived from the candlestick chart and uses information from the current and
// prior period in order to filter out the noise. These charts cannot be combined
// with any other series objects. The data for this chart type can be defined using the
//  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
// following format: "highProperty, lowProperty, openProperty, closeProperty".
HeikinAshi: 7,
// Filters out noise by focusing exclusively on price changes. These charts cannot
// be combined with any other series objects. The data for this chart type can be defined using the
//  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
// following format: "highProperty, lowProperty, openProperty, closeProperty".
LineBreak: 8,
// Ignores time and focuses on price changes that meet a specified amount. These
// charts cannot be combined with any other series objects. The data for this chart type can be defined using the
//  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
// following format: "highProperty, lowProperty, openProperty, closeProperty".
Renko: 9,
// Ignores time and focuses on price action. These charts cannot be combined with
// any other series objects. The data for this chart type can be defined using the
//  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
// following format: "highProperty, lowProperty, openProperty, closeProperty".
Kagi: 10,
// Identical to the standard Column chart, except that the width of each bar is
// determined by the Volume value. The data for this chart type can be defined using the
//  @see:FinancialChart or @see:FinancialSeries <b>binding</b> property as a comma separated value in the
// following format: "yProperty, volumeProperty".  This chart type can only be used at
// the @see:FinancialChart level, and should not be applied on
// @see:FinancialSeries objects. Only one set of volume data is currently supported
// per @see:FinancialChart.
ColumnVolume: 11,
// Similar to the Candlestick chart, but shows the high and low values only.
// In addition, the width of each bar is determined by Volume value. The data for
// this chart type can be defined using the  @see:FinancialChart or @see:FinancialSeries
// <b>binding</b> property as a comma separated value in the following format:
// "highProperty, lowProperty, openProperty, closeProperty, volumeProperty".
// This chart type can only be used at the @see:FinancialChart level, and should not
// be applied on @see:FinancialSeries objects. Only one set of volume data is currently
// supported per @see:FinancialChart.
EquiVolume: 12,
// Identical to the standard Candlestick chart, except that the width of each
// bar is determined by Volume value. The data for
// this chart type can be defined using the  @see:FinancialChart or @see:FinancialSeries
// <b>binding</b> property as a comma separated value in the following format:
// "highProperty, lowProperty, openProperty, closeProperty, volumeProperty".
// This chart type can only be used at the @see:FinancialChart level, and should not
// be applied on @see:FinancialSeries objects. Only one set of volume data is currently
// supported per @see:FinancialChart.
CandleVolume: 13,
// Created by Richard Arms, this chart is a combination of EquiVolume and
// CandleVolume chart types. The data for
// this chart type can be defined using the  @see:FinancialChart or @see:FinancialSeries
// <b>binding</b> property as a comma separated value in the following format:
// "highProperty, lowProperty, openProperty, closeProperty, volumeProperty".
// This chart type can only be used at the @see:FinancialChart level, and should not
// be applied on @see:FinancialSeries objects. Only one set of volume data is currently
// supported per @see:FinancialChart.
ArmsCandleVolume: 14,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.finance, {
// Specifies the type of financial chart.
FinancialChartType: undefined
});

wijmo.chart.finance.FinancialChart = function(element, options) {
/// <summary>Initializes a new instance of the @see:FlexChart class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the
/// host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data for the
/// control.</param>
/// <returns type="wijmo.chart.finance.FinancialChart"></returns>
/// <field name="chartType" type="wijmo.chart.finance.FinancialChartType">Gets or sets the type of financial chart to create.</field>
/// <field name="options" type="Object">Gets or sets various chart options.
/// 
/// The following options are supported:
/// 
/// <b>kagi.fields</b>: Specifies the @see:DataFields used for
/// the Kagi chart. The default value is DataFields.Close.
/// 
/// <b>kagi.rangeMode</b>: Specifies the @see:RangeMode for
/// the Kagi chart. The default value is RangeMode.Fixed.
/// 
/// <b>kagi.reversalAmount</b>: Specifies the reversal amount for
/// the Kagi chart. The default value is 14.
/// 
/// <pre>chart.options = {
///   kagi: {
///      fields: wijmo.chart.finance.DataFields.Close,
///      rangeMode: wijmo.chart.finance.RangeMode.Fixed,
///      reversalAmount: 14
///   }
/// }</pre>
/// 
/// <b>lineBreak.newLineBreaks</b>: Gets or sets the number of previous
/// boxes that must be compared before a new box is drawn in
/// Line Break charts. The default value is 3.
/// 
/// <pre>chart.options = {
///   lineBreak: { newLineBreaks: 3 }
/// }</pre>
/// 
/// <b>renko.fields</b>: Specifies the @see:DataFields used for
/// the Renko chart. The default value is DataFields.Close.
/// 
/// <b>renko.rangeMode</b>: Specifies the @see:RangeMode for
/// the Renko chart. The default value is RangeMode.Fixed.
/// 
/// <b>renko.boxSize</b>: Specifies the box size for
/// the Renko chart. The default value is 14.
/// 
/// <pre>chart.options = {
///   renko: {
///      fields: wijmo.chart.finance.DataFields.Close,
///      rangeMode: wijmo.chart.finance.RangeMode.Fixed,
///      boxSize: 14
///   }
/// }</pre></field>
this._wjClassName = 'wijmo.chart.finance.FinancialChart';
_wjReownEvents(this);
}
wijmo.chart.finance.FinancialChart.prototype = new wijmo.chart.FlexChartCore();
wijmo.chart.finance.FinancialChart._wjDict = _wjMerge(wijmo.chart.FlexChartCore._wjDict, {chartType:2,options:2});
wijmo.chart.finance.FinancialChart._wjClass = true;
wijmo.chart.finance.FinancialSeries = function() {
/// <summary>Represents a series of data points to display in the chart.
/// The @see:Series class supports all basic chart types. You may define
/// a different chart type on each @see:Series object that you add to the
/// @see:FlexChart series collection. This overrides the @see:chartType
/// property set on the chart that is the default for all @see:Series objects
/// in its collection.</summary>
/// <returns type="wijmo.chart.finance.FinancialSeries"></returns>
/// <field name="chartType" type="wijmo.chart.finance.FinancialChartType">Gets or sets the chart type for a specific series, overriding the chart type
/// set on the overall chart. Please note that ColumnVolume, EquiVolume,
/// CandleVolume and ArmsCandleVolume chart types are not supported and should be
/// set on the @see:FinancialChart.</field>
this._wjClassName = 'wijmo.chart.finance.FinancialSeries';
_wjReownEvents(this);
}
wijmo.chart.finance.FinancialSeries.prototype = new wijmo.chart.SeriesBase();
wijmo.chart.finance.FinancialSeries._wjDict = _wjMerge(wijmo.chart.SeriesBase._wjDict, {chartType:2});
wijmo.chart.finance.FinancialSeries._wjClass = true;
wijmo.chart.finance.DataFields = {
// Close values are used for calculations.
Close: 0,
// High values are used for calculations.
High: 1,
// Low values are used for calculations.
Low: 2,
// Open values are used for calculations.
Open: 3,
// High-Low method is used for calculations. DataFields.HighLow is currently not
// supported with Renko chart types.
HighLow: 4,
// Average of high and low values is used for calculations.
HL2: 5,
// Average of high, low, and close values is used for calculations.
HLC3: 6,
// Average of high, low, open, and close values is used for calculations.
HLOC4: 7,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.finance, {
// Specifies which fields are to be used for calculation. Applies to Renko and Kagi chart types.
DataFields: undefined
});

wijmo.chart.finance.RangeMode = {
// Uses a fixed, positive number for the Kagi chart's reversal amount
// or Renko chart's box size.
Fixed: 0,
// Uses the current Average True Range value for Kagi chart's reversal amount
// or Renko chart's box size. When ATR is used, the reversal amount or box size
// option of these charts must be an integer and will be used as the period for
// the ATR calculation.
ATR: 1,
// Uses a percentage for the Kagi chart's reversal amount. RangeMode.Percentage
// is currently not supported with Renko chart types.
Percentage: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.chart.finance, {
// Specifies the unit for Kagi and Renko chart types.
RangeMode: undefined
});

wijmo.chart.finance.analytics = wijmo.chart.finance.analytics || { _wjModule: true };
wijmo.chart.finance.analytics.Fibonacci = function(options) {
/// <summary>Initializes a new instance of the @see:Fibonacci class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data.</param>
/// <returns type="wijmo.chart.finance.analytics.Fibonacci"></returns>
/// <field name="low" type="Number">Gets or sets the low value of @see:Fibonacci tool.
/// 
/// If not specified, the low value is calculated based on data values provided by <b>itemsSource</b>.</field>
/// <field name="high" type="Number">Gets or sets the high value of @see:Fibonacci tool.
/// 
/// If not specified, the high value is caclulated based on
/// data values provided by the <b>itemsSource</b>.</field>
/// <field name="labelPosition" type="wijmo.chart.LabelPosition">Gets or sets the label position for levels in @see:Fibonacci tool.</field>
/// <field name="uptrend" type="Boolean">Gets or sets a value indicating whether to create uptrending @see:Fibonacci tool.
/// 
/// Default value is true(uptrend). If the value is false, the downtrending levels are plotted.</field>
/// <field name="levels" type="Number[]">Gets or sets the array of levels for plotting.
/// 
/// Default value is [0, 23.6, 38.2, 50, 61.8, 100].</field>
/// <field name="minX" type="Object">Gets or sets the x minimal value of the @see:Fibonacci tool.
/// 
/// If not specified, current minimum of x-axis is used.
/// The value can be specified as a number or Date object.</field>
/// <field name="maxX" type="Object">Gets or sets the x maximum value of the @see:Fibonacci tool.
/// 
/// If not specified, current maximum of x-axis is used.
/// The value can be specified as a number or Date object.</field>
this._wjClassName = 'wijmo.chart.finance.analytics.Fibonacci';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.Fibonacci.prototype = new wijmo.chart.SeriesBase();
wijmo.chart.finance.analytics.Fibonacci._wjDict = _wjMerge(wijmo.chart.SeriesBase._wjDict, {low:2,high:2,labelPosition:2,uptrend:2,levels:2,minX:2,maxX:2});
wijmo.chart.finance.analytics.Fibonacci._wjClass = true;
wijmo.chart.finance.analytics.FibonacciArcs = function(options) {
/// <summary>Initializes a new instance of the @see:FibonacciArcs class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data.</param>
/// <returns type="wijmo.chart.finance.analytics.FibonacciArcs"></returns>
/// <field name="start" type="wijmo.chart.DataPoint">Gets or sets the starting @see:DataPoint for the base line.
/// 
/// The @see:DataPoint x value can be a number or a Date object
/// (for time-based data).
/// 
/// Unlike some of the other Fibonacci tools, the starting
/// @see:DataPoint is <b>not</b> calculated automatically if
/// undefined.</field>
/// <field name="end" type="wijmo.chart.DataPoint">Gets or sets the ending @see:DataPoint for the base line.
/// 
/// The @see:DataPoint x value can be a number or a Date object
/// (for time-based data).
/// 
/// Unlike some of the other Fibonacci tools, the ending
/// @see:DataPoint is <b>not</b> calculated automatically if
/// undefined.</field>
/// <field name="levels" type="Number[]">Gets or sets the array of levels for plotting.
/// 
/// Default value is [38.2, 50, 61.8].</field>
/// <field name="labelPosition" type="wijmo.chart.LabelPosition">Gets or sets the @see:LabelPosition for levels in @see:FibonacciArcs tool.</field>
this._wjClassName = 'wijmo.chart.finance.analytics.FibonacciArcs';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.FibonacciArcs.prototype = new wijmo.chart.SeriesBase();
wijmo.chart.finance.analytics.FibonacciArcs._wjDict = _wjMerge(wijmo.chart.SeriesBase._wjDict, {start:2,end:2,levels:2,labelPosition:2});
wijmo.chart.finance.analytics.FibonacciArcs._wjClass = true;
wijmo.chart.finance.analytics.FibonacciFans = function(options) {
/// <summary>Initializes a new instance of the @see:FibonacciFans class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data.</param>
/// <returns type="wijmo.chart.finance.analytics.FibonacciFans"></returns>
/// <field name="start" type="wijmo.chart.DataPoint">Gets or sets the starting @see:DataPoint for the base line.
/// 
/// If not set, the starting @see:DataPoint is calculated automatically.
/// The @see:DataPoint x value can be a number or a Date object (for
/// time-based data).</field>
/// <field name="end" type="wijmo.chart.DataPoint">Gets or sets the ending @see:DataPoint for the base line.
/// 
/// If not set, the starting @see:DataPoint is calculated automatically.
/// The @see:DataPoint x value can be a number or a Date object (for
/// time-based data).</field>
/// <field name="levels" type="Number[]">Gets or sets the array of levels for plotting.
/// 
/// Default value is [0, 23.6, 38.2, 50, 61.8, 100].</field>
/// <field name="labelPosition" type="wijmo.chart.LabelPosition">Gets or sets the @see:LabelPosition for levels in @see:FibonacciFans tool.</field>
this._wjClassName = 'wijmo.chart.finance.analytics.FibonacciFans';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.FibonacciFans.prototype = new wijmo.chart.SeriesBase();
wijmo.chart.finance.analytics.FibonacciFans._wjDict = _wjMerge(wijmo.chart.SeriesBase._wjDict, {start:2,end:2,levels:2,labelPosition:2});
wijmo.chart.finance.analytics.FibonacciFans._wjClass = true;
wijmo.chart.finance.analytics.FibonacciTimeZones = function(options) {
/// <summary>Initializes a new instance of the @see:FibonacciTimeZones class.</summary>
/// <param name="options" type="Object" optional="true">A JavaScript object containing initialization data.</param>
/// <returns type="wijmo.chart.finance.analytics.FibonacciTimeZones"></returns>
/// <field name="startX" type="Object">Gets or sets the starting X data point for the time zones.
/// 
/// If not set, the starting X data point is calculated automatically. The
/// value can be a number or a Date object (for time-based data).</field>
/// <field name="endX" type="Object">Gets or sets the ending X data point for the time zones.
/// 
/// If not set, the ending X data point is calculated automatically. The
/// value can be a number or a Date object (for time-based data).</field>
/// <field name="levels" type="Number[]">Gets or sets the array of levels for plotting.
/// 
/// Default value is [0, 1, 2, 3, 5, 8, 13, 21, 34].</field>
/// <field name="labelPosition" type="wijmo.chart.LabelPosition">Gets or sets the @see:LabelPosition for levels in @see:FibonacciTimeZones tool.</field>
this._wjClassName = 'wijmo.chart.finance.analytics.FibonacciTimeZones';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.FibonacciTimeZones.prototype = new wijmo.chart.SeriesBase();
wijmo.chart.finance.analytics.FibonacciTimeZones._wjDict = _wjMerge(wijmo.chart.SeriesBase._wjDict, {startX:2,endX:2,levels:2,labelPosition:2});
wijmo.chart.finance.analytics.FibonacciTimeZones._wjClass = true;
wijmo.chart.finance.analytics.OverlayIndicatorBase = function() {
/// <summary>Base class for overlay and indicator series (abstract).</summary>
/// <returns type="wijmo.chart.finance.analytics.OverlayIndicatorBase"></returns>
this._wjClassName = 'wijmo.chart.finance.analytics.OverlayIndicatorBase';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.OverlayIndicatorBase.prototype = new wijmo.chart.SeriesBase();
wijmo.chart.finance.analytics.OverlayIndicatorBase._wjDict = _wjMerge(wijmo.chart.SeriesBase._wjDict, {});
wijmo.chart.finance.analytics.OverlayIndicatorBase._wjClass = true;
wijmo.chart.finance.analytics.SingleOverlayIndicatorBase = function() {
/// <summary>Base class for overlay and indicator series that render a single series (abstract).</summary>
/// <returns type="wijmo.chart.finance.analytics.SingleOverlayIndicatorBase"></returns>
/// <field name="period" type="Object">Gets or sets the period for the calculation as an integer value.</field>
this._wjClassName = 'wijmo.chart.finance.analytics.SingleOverlayIndicatorBase';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.SingleOverlayIndicatorBase.prototype = new wijmo.chart.finance.analytics.OverlayIndicatorBase();
wijmo.chart.finance.analytics.SingleOverlayIndicatorBase._wjDict = _wjMerge(wijmo.chart.finance.analytics.OverlayIndicatorBase._wjDict, {period:2});
wijmo.chart.finance.analytics.SingleOverlayIndicatorBase._wjClass = true;
wijmo.chart.finance.analytics.ATR = function() {
/// <summary>Represents an Average True Range indicator series for the @see:FinancialChart.
/// Average true range is used to measure the volatility of an asset. Average true range
/// does not provide any indication of the price's trend, but rather the degree of price
/// volatility.</summary>
/// <returns type="wijmo.chart.finance.analytics.ATR"></returns>
this._wjClassName = 'wijmo.chart.finance.analytics.ATR';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.ATR.prototype = new wijmo.chart.finance.analytics.SingleOverlayIndicatorBase();
wijmo.chart.finance.analytics.ATR._wjDict = _wjMerge(wijmo.chart.finance.analytics.SingleOverlayIndicatorBase._wjDict, {});
wijmo.chart.finance.analytics.ATR._wjClass = true;
wijmo.chart.finance.analytics.CCI = function() {
/// <summary>Represents a Commodity Channel Index indicator series for the @see:FinancialChart.
/// The commodity channel index is an oscillator that measures an asset's current price
/// level relative to an average price level over a specified period of time.</summary>
/// <returns type="wijmo.chart.finance.analytics.CCI"></returns>
/// <field name="constant" type="Number">Gets or sets the constant value for the CCI calculation.  The default
/// value is 0.015.</field>
this._wjClassName = 'wijmo.chart.finance.analytics.CCI';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.CCI.prototype = new wijmo.chart.finance.analytics.SingleOverlayIndicatorBase();
wijmo.chart.finance.analytics.CCI._wjDict = _wjMerge(wijmo.chart.finance.analytics.SingleOverlayIndicatorBase._wjDict, {constant:2});
wijmo.chart.finance.analytics.CCI._wjClass = true;
wijmo.chart.finance.analytics.WilliamsR = function() {
/// <summary>Represents a Willaims %R indicator series for the @see:FinancialChart.
/// Williams %R is a momentum indicator that is the inverse of a fast stochastic
/// oscillator (@see:Stochastic).  The Williams %R indicator is designed to
/// tell whether an asset is trading near the high or low of its trading range.</summary>
/// <returns type="wijmo.chart.finance.analytics.WilliamsR"></returns>
this._wjClassName = 'wijmo.chart.finance.analytics.WilliamsR';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.WilliamsR.prototype = new wijmo.chart.finance.analytics.SingleOverlayIndicatorBase();
wijmo.chart.finance.analytics.WilliamsR._wjDict = _wjMerge(wijmo.chart.finance.analytics.SingleOverlayIndicatorBase._wjDict, {});
wijmo.chart.finance.analytics.WilliamsR._wjClass = true;
wijmo.chart.finance.analytics.Envelopes = function() {
/// <summary>Represents a Moving Average Envelopes overlay series for the @see:FinancialChart.
/// Moving average envelopes are moving averages set above and below a standard moving
/// average.  The amount above/below the standard moving average is percentage based and
/// dictated by the @see:size property.</summary>
/// <returns type="wijmo.chart.finance.analytics.Envelopes"></returns>
/// <field name="period" type="Object">Gets or sets the period for the calculation as an integer value.</field>
/// <field name="type" type="wijmo.chart.analytics.MovingAverageType">Gets or sets the moving average type for the
/// envelopes.  The default value is Simple.</field>
/// <field name="size" type="Number">Gets or set the size of the moving average
/// envelopes.  The default value is 2.5 percent (0.025).</field>
this._wjClassName = 'wijmo.chart.finance.analytics.Envelopes';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.Envelopes.prototype = new wijmo.chart.finance.analytics.OverlayIndicatorBase();
wijmo.chart.finance.analytics.Envelopes._wjDict = _wjMerge(wijmo.chart.finance.analytics.OverlayIndicatorBase._wjDict, {period:2,type:2,size:2});
wijmo.chart.finance.analytics.Envelopes._wjClass = true;
wijmo.chart.finance.analytics.BollingerBands = function() {
/// <summary>Represents a Bollinger Bands&reg; overlay series for the @see:FinancialChart.
/// <i>Bollinger Bands is a registered trademark of John Bollinger.</i></summary>
/// <returns type="wijmo.chart.finance.analytics.BollingerBands"></returns>
/// <field name="period" type="Object">Gets or sets the period for the calculation as an integer value.</field>
/// <field name="multiplier" type="Number">Gets or sets the standard deviation multiplier.</field>
this._wjClassName = 'wijmo.chart.finance.analytics.BollingerBands';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.BollingerBands.prototype = new wijmo.chart.finance.analytics.OverlayIndicatorBase();
wijmo.chart.finance.analytics.BollingerBands._wjDict = _wjMerge(wijmo.chart.finance.analytics.OverlayIndicatorBase._wjDict, {period:2,multiplier:2});
wijmo.chart.finance.analytics.BollingerBands._wjClass = true;
wijmo.chart.finance.analytics.RSI = function() {
/// <summary>Represents a Relative Strength Index indicator series for the @see:FinancialChart.
/// Relative strength index is a momentum osciallator designed to measure the current
/// and historical strength or weakness of an asset based on the closing prices of a
/// recent trading period.</summary>
/// <returns type="wijmo.chart.finance.analytics.RSI"></returns>
this._wjClassName = 'wijmo.chart.finance.analytics.RSI';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.RSI.prototype = new wijmo.chart.finance.analytics.SingleOverlayIndicatorBase();
wijmo.chart.finance.analytics.RSI._wjDict = _wjMerge(wijmo.chart.finance.analytics.SingleOverlayIndicatorBase._wjDict, {});
wijmo.chart.finance.analytics.RSI._wjClass = true;
wijmo.chart.finance.analytics.MacdBase = function() {
/// <summary>Base class for @see:Macd and @see:MacdHistogram series (abstract).</summary>
/// <returns type="wijmo.chart.finance.analytics.MacdBase"></returns>
/// <field name="fastPeriod" type="Number">Gets or sets the fast exponential moving average period
/// for the MACD line.</field>
/// <field name="slowPeriod" type="Number">Gets or sets the slow exponential moving average period
/// for the MACD line.</field>
/// <field name="smoothingPeriod" type="Number">Gets or sets the exponential moving average period
/// for the signal line.</field>
this._wjClassName = 'wijmo.chart.finance.analytics.MacdBase';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.MacdBase.prototype = new wijmo.chart.finance.analytics.OverlayIndicatorBase();
wijmo.chart.finance.analytics.MacdBase._wjDict = _wjMerge(wijmo.chart.finance.analytics.OverlayIndicatorBase._wjDict, {fastPeriod:2,slowPeriod:2,smoothingPeriod:2});
wijmo.chart.finance.analytics.MacdBase._wjClass = true;
wijmo.chart.finance.analytics.Macd = function() {
/// <summary>Represents a Moving Average Convergence/Divergence (MACD) indicator series
/// for the @see:FinancialChart.
/// The MACD indicator is designed to reveal changes in strength, direction, momentum,
/// and duration of an asset's price trend.</summary>
/// <returns type="wijmo.chart.finance.analytics.Macd"></returns>
/// <field name="styles" type="Object">Gets or sets the styles for the MACD and Signal lines.
/// 
/// The following options are supported:
/// 
/// <pre>series.styles = {
///   macdLine: {
///      stroke: 'red',
///      strokeWidth: 1
///   },
///   signalLine: {
///      stroke: 'green',
///      strokeWidth: 1
///   },
/// }</pre></field>
this._wjClassName = 'wijmo.chart.finance.analytics.Macd';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.Macd.prototype = new wijmo.chart.finance.analytics.MacdBase();
wijmo.chart.finance.analytics.Macd._wjDict = _wjMerge(wijmo.chart.finance.analytics.MacdBase._wjDict, {styles:2});
wijmo.chart.finance.analytics.Macd._wjClass = true;
wijmo.chart.finance.analytics.MacdHistogram = function() {
/// <summary>Represents a Moving Average Convergence/Divergence (MACD) Histogram indicator series
/// for the @see:FinancialChart.
/// The MACD indicator is designed to reveal changes in strength, direction, momentum,
/// and duration of an asset's price trend.</summary>
/// <returns type="wijmo.chart.finance.analytics.MacdHistogram"></returns>
this._wjClassName = 'wijmo.chart.finance.analytics.MacdHistogram';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.MacdHistogram.prototype = new wijmo.chart.finance.analytics.MacdBase();
wijmo.chart.finance.analytics.MacdHistogram._wjDict = _wjMerge(wijmo.chart.finance.analytics.MacdBase._wjDict, {});
wijmo.chart.finance.analytics.MacdHistogram._wjClass = true;
wijmo.chart.finance.analytics.Stochastic = function() {
/// <summary>Represents a Stochastic Oscillator indicator series for the @see:FinancialChart.
/// Stochastic oscillators are momentum indicators designed to predict price turning
/// points by comparing an asset's closing price to its high-low range.
/// The @see:Stochastic series can be used for fast (default), slow and full stochastic
/// oscillators.  To create a slow or full stochastic oscillator, set the @see:smoothingPeriod
/// to an integer value greater than one; slow stochastic oscillators generally use a fixed
/// @see:smoothingPeriod of three.  To create or revert to a fast stochastic oscillator, set the
/// @see:smoothingPeriod to an integer value of one.</summary>
/// <returns type="wijmo.chart.finance.analytics.Stochastic"></returns>
/// <field name="kPeriod" type="Number">Gets or sets the period for the %K calculation.</field>
/// <field name="dPeriod" type="Number">Gets or sets the period for the %D simple moving average.</field>
/// <field name="smoothingPeriod" type="Number">Gets or sets the smoothing period for full %K.</field>
/// <field name="styles" type="Object">Gets or sets the styles for the %K and %D lines.
/// 
/// The following options are supported:
/// 
/// <pre>series.styles = {
///   kLine: {
///      stroke: 'red',
///      strokeWidth: 1
///   },
///   dLine: {
///      stroke: 'green',
///      strokeWidth: 1
///   },
/// }</pre></field>
this._wjClassName = 'wijmo.chart.finance.analytics.Stochastic';
_wjReownEvents(this);
}
wijmo.chart.finance.analytics.Stochastic.prototype = new wijmo.chart.finance.analytics.OverlayIndicatorBase();
wijmo.chart.finance.analytics.Stochastic._wjDict = _wjMerge(wijmo.chart.finance.analytics.OverlayIndicatorBase._wjDict, {kPeriod:2,dPeriod:2,smoothingPeriod:2,styles:2});
wijmo.chart.finance.analytics.Stochastic._wjClass = true;
wijmo.olap = wijmo.olap || { _wjModule: true };
wijmo.olap._Tally = function() {
/// <summary>Accumulates observations and returns aggregate statistics.</summary>
/// <returns type="wijmo.olap._Tally"></returns>
this._wjClassName = 'wijmo.olap._Tally';
_wjReownEvents(this);
}
wijmo.olap._Tally.prototype.add = function(value, weight) {
/// <summary>Adds a value to the tally.</summary>
/// <param name="value" type="Object" optional="false">Value to be added to the tally.</param>
/// <param name="weight" type="Number" optional="true">Weight to be attributed to the value.</param>
}
wijmo.olap._Tally.prototype.getAggregate = function(aggregate) {
/// <summary>Gets an aggregate statistic from the tally.</summary>
/// <param name="aggregate" type="wijmo.Aggregate" optional="false">Type of aggregate statistic to get.</param>
/// <returns type="Number"></returns>
}
wijmo.olap._Tally._wjDict = _wjMerge({}, {});
wijmo.olap._Tally._wjClass = true;
wijmo.olap._PivotKey = function(fields, fieldCount, valueFields, valueFieldIndex, item) {
/// <summary>Initializes a new instance of the @see:PivotKey class.</summary>
/// <param name="fields" type="wijmo.olap.PivotFieldCollection" optional="false">@see:PivotFieldCollection that owns this key.</param>
/// <param name="fieldCount" type="Number" optional="false">Number of fields to take into account for this key.</param>
/// <param name="valueFields" type="wijmo.olap.PivotFieldCollection" optional="false">@see:PivotFieldCollection that contains the values for this key.</param>
/// <param name="valueFieldIndex" type="Number" optional="false">Index of the value to take into account for this key.</param>
/// <param name="item" type="Object" optional="false">First data item represented by this key.</param>
/// <returns type="wijmo.olap._PivotKey"></returns>
/// <field name="fields" type="wijmo.olap.PivotFieldCollection">Gets the @see:PivotFieldCollection that owns this key.</field>
/// <field name="valueFields" type="wijmo.olap.PivotFieldCollection">Gets the @see:PivotFieldCollection that contains the values for this key.</field>
/// <field name="values" type="Object[]">Gets an array with the values used to create this key.</field>
/// <field name="aggregate" type="wijmo.Aggregate">Gets the type of aggregate represented by this key.</field>
this._wjClassName = 'wijmo.olap._PivotKey';
_wjReownEvents(this);
}
wijmo.olap._PivotKey.prototype.getValue = function(index, formatted) {
/// <summary>Gets the value for this key at a given index.</summary>
/// <param name="index" type="Number" optional="false">Index of the field to be retrieved.</param>
/// <param name="formatted" type="Boolean" optional="false">Whether to return a formatted string or the raw value.</param>
}
wijmo.olap._PivotKey.prototype.compareTo = function(key) {
/// <summary>Comparer function used to sort arrays of @see:_PivotKey objects.</summary>
/// <param name="key" type="wijmo.olap._PivotKey" optional="false">@see:_PivotKey to compare to this one.</param>
/// <returns type="Number"></returns>
}
wijmo.olap._PivotKey.prototype.matchesItem = function(item) {
/// <summary>Gets a value that determines whether a given data object matches
/// this @see:_PivotKey.
/// 
/// The match is determined by comparing the formatted values for each
/// @see:PivotField in the key to the formatted values in the given item.
/// Therefore, matches may occur even if the raw values are different.</summary>
/// <param name="item" type="Object" optional="false">Item to check for a match.</param>
/// <returns type="Boolean"></returns>
}
wijmo.olap._PivotKey._wjDict = _wjMerge({}, {fields:2,valueFields:2,values:2,aggregate:2});
wijmo.olap._PivotKey._wjClass = true;
wijmo.olap._PivotNode = function(fields, fieldCount, valueFields, valueFieldIndex, item, parent) {
/// <summary>Initializes a new instance of the @see:PivotNode class.</summary>
/// <param name="fields" type="wijmo.olap.PivotFieldCollection" optional="false">@see:PivotFieldCollection that owns this node.</param>
/// <param name="fieldCount" type="Number" optional="false">Number of fields to take into account for this node.</param>
/// <param name="valueFields" type="wijmo.olap.PivotFieldCollection" optional="false">@see:PivotFieldCollection that contains the values for this node.</param>
/// <param name="valueFieldIndex" type="Number" optional="false">Index of the value to take into account for this node.</param>
/// <param name="item" type="Object" optional="false">First data item represented by this node.</param>
/// <param name="parent" type="wijmo.olap._PivotNode" optional="true">Parent @see:_PivotField.</param>
/// <returns type="wijmo.olap._PivotNode"></returns>
/// <field name="key" type="wijmo.olap._PivotKey">Gets the @see:_PivotKey represented by this @see:_PivotNode.</field>
/// <field name="parent" type="wijmo.olap._PivotNode">Gets the parent node of this node.</field>
/// <field name="tree" type="wijmo.olap._PivotNode">Gets the child items of this node.</field>
this._wjClassName = 'wijmo.olap._PivotNode';
_wjReownEvents(this);
}
wijmo.olap._PivotNode.prototype.getNode = function(fields, fieldCount, valueFields, valueFieldIndex, item) {
/// <summary>Gets a child node from a parent node.</summary>
/// <param name="fields" type="wijmo.olap.PivotFieldCollection" optional="false">@see:PivotFieldCollection that owns this node.</param>
/// <param name="fieldCount" type="Number" optional="false">Number of fields to take into account for this node.</param>
/// <param name="valueFields" type="wijmo.olap.PivotFieldCollection" optional="false">@see:PivotFieldCollection that contains the values for this node.</param>
/// <param name="valueFieldIndex" type="Number" optional="false">Index of the value to take into account for this node.</param>
/// <param name="item" type="Object" optional="false">First data item represented by this node.</param>
/// <returns type="wijmo.olap._PivotNode"></returns>
}
wijmo.olap._PivotNode._wjDict = _wjMerge({}, {key:2,parent:2,tree:2});
wijmo.olap._PivotNode._wjClass = true;
wijmo.olap.PivotCollectionView = function(engine) {
/// <summary>Initializes a new instance of the @see:PivotCollectionView class.</summary>
/// <param name="engine" type="wijmo.olap.PivotEngine" optional="false">@see:PivotEngine that owns this collection.</param>
/// <returns type="wijmo.olap.PivotCollectionView"></returns>
/// <field name="engine" type="wijmo.olap.PivotEngine">Gets a reference to the @see:PivotEngine that owns this view.</field>
this._wjClassName = 'wijmo.olap.PivotCollectionView';
_wjReownEvents(this);
}
wijmo.olap.PivotCollectionView.prototype = new wijmo.collections.CollectionView();
wijmo.olap.PivotCollectionView._wjDict = _wjMerge(wijmo.collections.CollectionView._wjDict, {engine:2});
wijmo.olap.PivotCollectionView._wjClass = true;
wijmo.olap.PivotField = function(engine, binding, header, options) {
/// <summary>Initializes a new instance of the @see:PivotField class.</summary>
/// <param name="engine" type="wijmo.olap.PivotEngine" optional="false">@see:PivotEngine that owns this field.</param>
/// <param name="binding" type="String" optional="false">Property that this field is bound to.</param>
/// <param name="header" type="String" optional="true">Header shown to identify this field (defaults to the binding).</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the field.</param>
/// <returns type="wijmo.olap.PivotField"></returns>
/// <field name="binding" type="String">Gets or sets the name of the property the field is bound to.</field>
/// <field name="header" type="String">Gets or sets a string used to represent this field in the user interface.</field>
/// <field name="filter" type="wijmo.olap.PivotFilter">Gets a reference to the @see:PivotFilter used to filter values for this field.</field>
/// <field name="aggregate" type="wijmo.Aggregate">Gets or sets how the field should be summarized.</field>
/// <field name="showAs" type="wijmo.olap.ShowAs">Gets or sets how the field results should be formatted.</field>
/// <field name="weightField" type="wijmo.olap.PivotField">Gets or sets the @see:PivotField used as a weight for calculating
/// aggregates on this field.
/// 
/// If this property is set to null, all values are assumed to have weight one.
/// 
/// This property allows you to calculate weighted averages and totals.
/// For example, if the data contains a 'Quantity' field and a 'Price' field,
/// you could use the 'Price' field as a value field and the 'Quantity' field as
/// a weight. The output would contain a weighted average of the data.</field>
/// <field name="dataType" type="wijmo.DataType">Gets or sets the data type of the field.</field>
/// <field name="format" type="String">Gets or sets the format to use when displaying field values.</field>
/// <field name="width" type="Number">Gets or sets the preferred width to be used for showing this field in the
/// user interface.</field>
/// <field name="wordWrap" type="Boolean">Gets or sets a value that indicates whether the content of this field should
/// be allowed to wrap within cells.</field>
/// <field name="descending" type="Boolean">Gets or sets a value that determines whether keys should be sorted
/// in descending order for this field.</field>
/// <field name="isContentHtml" type="Boolean">Gets or sets a value indicating whether items in this field
/// contain HTML content rather than plain text.</field>
/// <field name="engine" type="wijmo.olap.PivotEngine">Gets a reference to the @see:PivotEngine that owns this @see:PivotField.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView bound to this field.</field>
/// <field name="isActive" type="Boolean">Gets or sets a value that determines whether this field is
/// currently being used in the view.
/// 
/// Setting this property to true causes the field to be added to the
/// view's @see:PivotEngine.rowFields or @see:PivotEngine.valueFields,
/// depending on the field's data type.</field>
/// <field name="parentField" type="wijmo.olap.PivotField">Gets this field's parent field.
/// 
/// When you drag the same field into the Values list multiple
/// times, copies of the field are created so you can use the
/// same binding with different parameters. The copies keep a
/// reference to their parent fields.</field>
/// <field name="propertyChanged" type="wijmo.Event">Occurs when the value of a property in this @see:Range changes.</field>
this._wjClassName = 'wijmo.olap.PivotField';
this.propertyChanged = new wijmo.Event('wijmo.PropertyChangedEventArgs');
_wjReownEvents(this);
}
wijmo.olap.PivotField.prototype.onPropertyChanged = function(e) {
/// <summary>Raises the @see:propertyChanged event.</summary>
/// <param name="e" type="wijmo.PropertyChangedEventArgs" optional="false">@see:PropertyChangedEventArgs that contains the property
/// name, old, and new values.</param>
}
wijmo.olap.PivotField._wjDict = _wjMerge({}, {binding:2,header:2,filter:2,aggregate:2,showAs:2,weightField:2,dataType:2,format:2,width:2,wordWrap:2,descending:2,isContentHtml:2,engine:2,collectionView:2,isActive:2,parentField:2,propertyChanged:1});
wijmo.olap.PivotField._wjClass = true;
wijmo.olap.PivotFieldCollection = function(engine) {
/// <summary>Initializes a new instance of the @see:PivotFieldCollection class.</summary>
/// <param name="engine" type="wijmo.olap.PivotEngine" optional="false">@see:PivotEngine that owns this @see:PivotFieldCollection.</param>
/// <returns type="wijmo.olap.PivotFieldCollection"></returns>
/// <field name="maxItems" type="Number">Gets or sets the maximum number of fields allowed in this collection.
/// 
/// This property is set to null by default, which means any number of items is allowed.</field>
/// <field name="engine" type="wijmo.olap.PivotEngine">Gets a reference to the @see:PivotEngine that owns this @see:PivotFieldCollection.</field>
this._wjClassName = 'wijmo.olap.PivotFieldCollection';
_wjReownEvents(this);
}
wijmo.olap.PivotFieldCollection.prototype = new wijmo.collections.ObservableArray();
wijmo.olap.PivotFieldCollection.prototype.getField = function(header) {
/// <summary>Gets a field by header.</summary>
/// <param name="header" type="String" optional="false">Header string to look for.</param>
/// <returns type="wijmo.olap.PivotField"></returns>
}
wijmo.olap.PivotFieldCollection.prototype.push = function(item) {
/// <summary>Overridden to allow pushing fields by header.</summary>
/// <param name="item" type="Object[]" optional="false">One or more @see:PivotField objects to add to the array.</param>
/// <returns type="Number">The new length of the array.</returns>
}
wijmo.olap.PivotFieldCollection._wjDict = _wjMerge(wijmo.collections.ObservableArray._wjDict, {maxItems:2,engine:2});
wijmo.olap.PivotFieldCollection._wjClass = true;
wijmo.olap.PivotFilter = function(field) {
/// <summary>Initializes a new instance of the @see:PivotFilter class.</summary>
/// <param name="field" type="wijmo.olap.PivotField" optional="false">@see:PivotField that owns this filter.</param>
/// <returns type="wijmo.olap.PivotFilter"></returns>
/// <field name="filterType" type="wijmo.grid.filter.FilterType">Gets or sets the types of filtering provided by this filter.
/// 
/// Setting this property to null causes the filter to use the value
/// defined by the owner filter's @see:FlexGridFilter.defaultFilterType
/// property.</field>
/// <field name="isActive" type="Boolean">Gets a value that indicates whether the filter is active.</field>
/// <field name="valueFilter" type="wijmo.grid.filter.ValueFilter">Gets the @see:ValueFilter in this @see:PivotFilter.</field>
/// <field name="conditionFilter" type="wijmo.grid.filter.ConditionFilter">Gets the @see:ConditionFilter in this @see:PivotFilter.</field>
this._wjClassName = 'wijmo.olap.PivotFilter';
_wjReownEvents(this);
}
wijmo.olap.PivotFilter.prototype.apply = function(value) {
/// <summary>Gets a value that indicates whether a value passes the filter.</summary>
/// <param name="value" type="Object" optional="false">The value to test.</param>
/// <returns type="Boolean"></returns>
}
wijmo.olap.PivotFilter.prototype.clear = function() {
/// <summary>Clears the filter.</summary>
}
wijmo.olap.PivotFilter._wjDict = _wjMerge({}, {filterType:2,isActive:2,valueFilter:2,conditionFilter:2});
wijmo.olap.PivotFilter._wjClass = true;
wijmo.olap.PivotFieldEditor = function(element, options) {
/// <summary>Initializes a new instance of the @see:PivotFieldEditor class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.olap.PivotFieldEditor"></returns>
/// <field name="field" type="wijmo.olap.PivotField">Gets or sets a reference to the @see:PivotField being edited.</field>
this._wjClassName = 'wijmo.olap.PivotFieldEditor';
_wjReownEvents(this);
}
wijmo.olap.PivotFieldEditor.prototype = new wijmo.Control();
wijmo.olap.PivotFieldEditor.prototype.updateEditor = function() {
/// <summary>Updates editor to reflect the current field values.</summary>
}
wijmo.olap.PivotFieldEditor.prototype.updateField = function() {
/// <summary>Updates field to reflect the current editor values.</summary>
}
wijmo.olap.PivotFieldEditor.controlTemplate = undefined;
intellisense.annotate(wijmo.olap.PivotFieldEditor, {
// Gets or sets the template used to instantiate @see:PivotFieldEditor controls.
controlTemplate: undefined
});
wijmo.olap.PivotFieldEditor._wjDict = _wjMerge(wijmo.Control._wjDict, {field:2});
wijmo.olap.PivotFieldEditor._wjClass = true;
wijmo.olap.PivotFilterEditor = function(element, field, options) {
/// <summary>Initializes a new instance of the @see:ColumnFilterEditor class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector
/// for the host element (e.g. '#theCtrl').</param>
/// <param name="field" type="wijmo.olap.PivotField" optional="false">The @see:PivotField to edit.</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the editor.</param>
/// <returns type="wijmo.olap.PivotFilterEditor"></returns>
/// <field name="field" type="wijmo.olap.PivotField">Gets a reference to the @see:PivotField whose filter is being edited.</field>
/// <field name="filter" type="wijmo.olap.PivotFilter">Gets a reference to the @see:PivotFilter being edited.</field>
/// <field name="finishEditing" type="wijmo.Event">Occurs when the user finishes editing the filter.</field>
this._wjClassName = 'wijmo.olap.PivotFilterEditor';
this.finishEditing = new wijmo.Event('wijmo.CancelEventArgs');
_wjReownEvents(this);
}
wijmo.olap.PivotFilterEditor.prototype = new wijmo.Control();
wijmo.olap.PivotFilterEditor.prototype.updateEditor = function() {
/// <summary>Updates the editor with current filter settings.</summary>
}
wijmo.olap.PivotFilterEditor.prototype.updateFilter = function() {
/// <summary>Updates the filter to reflect the current editor values.</summary>
}
wijmo.olap.PivotFilterEditor.prototype.clearEditor = function() {
/// <summary>Clears the editor fields without applying changes to the filter.</summary>
}
wijmo.olap.PivotFilterEditor.prototype.onFinishEditing = function(e) {
/// <summary>Raises the @see:finishEditing event.</summary>
/// <param name="e" type="wijmo.CancelEventArgs" optional="true"></param>
}
wijmo.olap.PivotFilterEditor.controlTemplate = undefined;
intellisense.annotate(wijmo.olap.PivotFilterEditor, {
// Gets or sets the template used to instantiate @see:PivotFilterEditor controls.
controlTemplate: undefined
});
wijmo.olap.PivotFilterEditor._wjDict = _wjMerge(wijmo.Control._wjDict, {field:2,filter:2,finishEditing:1});
wijmo.olap.PivotFilterEditor._wjClass = true;
wijmo.olap.ShowTotals = {
// Do not show any totals.
None: 0,
// Show grand totals.
GrandTotals: 1,
// Show subtotals and grand totals.
Subtotals: 2,
_wjEnum: true
};

intellisense.annotate(wijmo.olap, {
// Specifies constants that define whether to include totals in the output table.
ShowTotals: undefined
});

wijmo.olap.ShowAs = {
// Show plain aggregated values.
NoCalculation: 0,
// Show differences between each item and the item in the previous row.
DiffRow: 1,
// Show differences between each item and the item in the previous row as a percentage.
DiffRowPct: 2,
// Show differences between each item and the item in the previous column.
DiffCol: 3,
// Show differences between each item and the item in the previous column as a percentage.
DiffColPct: 4,
_wjEnum: true
};

intellisense.annotate(wijmo.olap, {
// Specifies constants that define calculations to be applied to cells in the output view.
ShowAs: undefined
});

wijmo.olap.PivotEngine = function(options) {
/// <summary>Initializes a new instance of the @see:PivotEngine class.</summary>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the field.</param>
/// <returns type="wijmo.olap.PivotEngine"></returns>
/// <field name="itemsSource" type="Object">Gets or sets the array or @see:ICollectionView that contains the raw data.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView that contains the raw data.</field>
/// <field name="pivotView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView containing the output pivot view.</field>
/// <field name="showRowTotals" type="wijmo.olap.ShowTotals">Gets or sets a value that determines whether the output @see:pivotView
/// should include rows containing subtotals or grand totals.</field>
/// <field name="showColumnTotals" type="wijmo.olap.ShowTotals">Gets or sets a value that determines whether the output @see:pivotView
/// should include columns containing subtotals or grand totals.</field>
/// <field name="totalsBeforeData" type="Boolean">Gets or sets a value that determines whether row and column totals
/// should be displayed before or after regular data rows and columns.
/// 
/// If this value is set to true, total rows appear above data rows
/// and total columns appear on the left of regular data columns.</field>
/// <field name="showZeros" type="Boolean">Gets or sets a value that determines whether the Olap output table
/// should use zeros to indicate the missing values.</field>
/// <field name="defaultFilterType" type="wijmo.grid.filter.FilterType">Gets or sets the default filter type (by value or by condition).</field>
/// <field name="autoGenerateFields" type="Boolean">Gets or sets a value that determines whether the engine should generate fields
/// automatically based on the @see:itemsSource.</field>
/// <field name="allowFieldEditing" type="Boolean">Gets or sets a value that determines whether users should be allowed to edit
/// the properties of the @see:PivotField objects owned by this @see:PivotEngine.</field>
/// <field name="fields" type="wijmo.olap.PivotFieldCollection">Gets the list of @see:PivotField objects exposed by the data source.
/// 
/// This list is created automatically whenever the @see:itemsSource property is set.
/// 
/// Pivot views are defined by copying fields from this list to the lists that define
/// the view: @see:valueFields, @see:rowFields, @see:columnFields, and @see:filterFields.
/// 
/// For example, the code below assigns a data source to the @see:PivotEngine and
/// then defines a view by adding fields to the @see:rowFields, @see:columnFields, and
/// @see:valueFields lists.
/// 
/// <pre>// create pivot engine
/// var pe = new wijmo.olap.PivotEngine();
/// 
/// // set data source (populates fields list)
/// pe.itemsSource = this.getRawData();
/// 
/// // prevent updates while building Olap view
/// pe.beginUpdate();
/// 
/// // show countries in rows
/// pe.rowFields.push('Country');
/// 
/// // show categories and products in columns
/// pe.columnFields.push('Category');
/// pe.columnFields.push('Product');
/// 
/// // show total sales in cells
/// pe.valueFields.push('Sales');
/// 
/// // done defining the view
/// pe.endUpdate();</pre></field>
/// <field name="rowFields" type="wijmo.olap.PivotFieldCollection">Gets the list of @see:PivotField objects that define the fields shown as rows in the output table.</field>
/// <field name="columnFields" type="wijmo.olap.PivotFieldCollection">Gets the list of @see:PivotField objects that define the fields shown as columns in the output table.</field>
/// <field name="filterFields" type="wijmo.olap.PivotFieldCollection">Gets the list of @see:PivotField objects that define the fields used as filters.
/// 
/// Fields on this list do not appear in the output table, but are still used for filtering the input data.</field>
/// <field name="valueFields" type="wijmo.olap.PivotFieldCollection">Gets the list of @see:PivotField objects that define the fields summarized in the output table.</field>
/// <field name="viewDefinition" type="String">Gets or sets the current pivot view definition as a JSON string.
/// 
/// This property is typically used to persist the current view as
/// an application setting.
/// 
/// For example, the code below implements two functions that save
/// and load view definitions using local storage:
/// 
/// <pre>// save/load views
/// function saveView() {
///   localStorage.viewDefinition = pivotEngine.viewDefinition;
/// }
/// function loadView() {
///   pivotEngine.viewDefinition = localStorage.viewDefinition;
/// }</pre></field>
/// <field name="isViewDefined" type="Boolean">Gets a value that determines whether a pivot view is currently defined.
/// 
/// A pivot view is defined if the @see:valueFields list is not empty and
/// either the @see:rowFields or @see:columnFields lists are not empty.</field>
/// <field name="isUpdating" type="Boolean">Gets a value that indicates whether the engine is currently being updated.</field>
/// <field name="async" type="Boolean">Gets or sets a value that determines whether view updates should be generated asynchronously.
/// 
/// This property is set to true by default, so summaries over large data sets are performed
/// asynchronously to prevent stopping the UI thread.</field>
/// <field name="itemsSourceChanged" type="wijmo.Event">Occurs after the value of the @see:itemsSource property changes.</field>
/// <field name="viewDefinitionChanged" type="wijmo.Event">Occurs after the view definition changes.</field>
/// <field name="updatingView" type="wijmo.Event">Occurs when the engine starts updating the @see:pivotView list.</field>
/// <field name="updatedView" type="wijmo.Event">Occurs after the engine has finished updating the @see:pivotView list.</field>
this._wjClassName = 'wijmo.olap.PivotEngine';
this.itemsSourceChanged = new wijmo.Event('wijmo.EventArgs');
this.viewDefinitionChanged = new wijmo.Event('wijmo.EventArgs');
this.updatingView = new wijmo.Event('wijmo.olap.ProgressEventArgs');
this.updatedView = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.olap.PivotEngine.prototype.beginUpdate = function() {
/// <summary>Suspends the refresh processes until next call to the @see:endUpdate.</summary>
}
wijmo.olap.PivotEngine.prototype.endUpdate = function() {
/// <summary>Resumes refresh processes suspended by calls to @see:beginUpdate.</summary>
}
wijmo.olap.PivotEngine.prototype.deferUpdate = function(fn) {
/// <summary>Executes a function within a @see:beginUpdate/@see:endUpdate block.
/// 
/// The control will not be updated until the function has been executed.
/// This method ensures @see:endUpdate is called even if the function throws
/// an exception.</summary>
/// <param name="fn" type="Function" optional="false">Function to be executed.</param>
}
wijmo.olap.PivotEngine.prototype.refresh = function(force) {
/// <summary>Summarizes the data and updates the output @see:pivotView.</summary>
/// <param name="force" type="Boolean" optional="true">Refresh even while updating (see @see:beginUpdate).</param>
}
wijmo.olap.PivotEngine.prototype.invalidate = function() {
/// <summary>Invalidates the view causing an asynchronous refresh.</summary>
}
wijmo.olap.PivotEngine.prototype.cancelPendingUpdates = function() {
/// <summary>Cancels any pending asynchronous view updates.</summary>
}
wijmo.olap.PivotEngine.prototype.getDetail = function(item, binding) {
/// <summary>Gets an array containing the records summarized by a property in the @see:pivotView list.</summary>
/// <param name="item" type="Object" optional="false">Data item in the @see:pivotView list.</param>
/// <param name="binding" type="String" optional="false">Name of the property being summarized.</param>
}
wijmo.olap.PivotEngine.prototype.editField = function(field) {
/// <summary>Shows a settings dialog where users can edit a field's settings.</summary>
/// <param name="field" type="wijmo.olap.PivotField" optional="false">@see:PivotField to be edited.</param>
}
wijmo.olap.PivotEngine.prototype.removeField = function(field) {
/// <summary>Removes a field from the current view.</summary>
/// <param name="field" type="wijmo.olap.PivotField" optional="false">@see:PivotField to be removed.</param>
}
wijmo.olap.PivotEngine.prototype.onItemsSourceChanged = function(e) {
/// <summary>Raises the @see:itemsSourceChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.olap.PivotEngine.prototype.onViewDefinitionChanged = function(e) {
/// <summary>Raises the @see:viewDefinitionChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.olap.PivotEngine.prototype.onUpdatingView = function(e) {
/// <summary>Raises the @see:updatingView event.</summary>
/// <param name="e" type="wijmo.olap.ProgressEventArgs" optional="false">@see:ProgressEventArgs that provides the event data.</param>
}
wijmo.olap.PivotEngine.prototype.onUpdatedView = function(e) {
/// <summary>Raises the @see:updatedView event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.olap.PivotEngine._wjDict = _wjMerge({}, {itemsSource:2,collectionView:2,pivotView:2,showRowTotals:2,showColumnTotals:2,totalsBeforeData:2,showZeros:2,defaultFilterType:2,autoGenerateFields:2,allowFieldEditing:2,fields:2,rowFields:2,columnFields:2,filterFields:2,valueFields:2,viewDefinition:2,isViewDefined:2,isUpdating:2,async:2,itemsSourceChanged:1,viewDefinitionChanged:1,updatingView:1,updatedView:1});
wijmo.olap.PivotEngine._wjClass = true;
wijmo.olap.ProgressEventArgs = function(progress) {
/// <summary>Initializes a new instance of the @see:ProgressEventArgs class.</summary>
/// <param name="progress" type="Number" optional="false">Number between 0 and 100 that represents the progress.</param>
/// <returns type="wijmo.olap.ProgressEventArgs"></returns>
/// <field name="progress" type="Number">Gets the current progress as a number between 0 and 100.</field>
this._wjClassName = 'wijmo.olap.ProgressEventArgs';
_wjReownEvents(this);
}
wijmo.olap.ProgressEventArgs.prototype = new wijmo.EventArgs();
wijmo.olap.ProgressEventArgs._wjDict = _wjMerge(wijmo.EventArgs._wjDict, {progress:2});
wijmo.olap.ProgressEventArgs._wjClass = true;
wijmo.olap._ListContextMenu = function(full) {
/// <summary>Initializes a new instance of the @see:_ListContextMenu class.</summary>
/// <param name="full" type="Boolean" optional="false">Whether to include all commands or only the ones that apply to the main field list.</param>
/// <returns type="wijmo.olap._ListContextMenu"></returns>
this._wjClassName = 'wijmo.olap._ListContextMenu';
_wjReownEvents(this);
}
wijmo.olap._ListContextMenu.prototype = new wijmo.input.Menu();
wijmo.olap._ListContextMenu.prototype.attach = function(listBox) {
/// <summary>Attaches this context menu to a @see:ListBox control.</summary>
/// <param name="listBox" type="wijmo.input.ListBox" optional="false">@see:ListBox control to attach this menu to.</param>
}
wijmo.olap._ListContextMenu._wjDict = _wjMerge(wijmo.input.Menu._wjDict, {});
wijmo.olap._ListContextMenu._wjClass = true;
wijmo.olap.PivotPanel = function(element, options) {
/// <summary>Initializes a new instance of the @see:PivotPanel class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.olap.PivotPanel"></returns>
/// <field name="engine" type="wijmo.olap.PivotEngine">Gets or sets the @see:PivotEngine being controlled by this @see:PivotPanel.</field>
/// <field name="itemsSource" type="Object">Gets or sets the array or @see:ICollectionView that contains the raw data.</field>
/// <field name="collectionView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView that contains the raw data.</field>
/// <field name="pivotView" type="wijmo.collections.ICollectionView">Gets the @see:ICollectionView containing the output pivot view.</field>
/// <field name="autoGenerateFields" type="Boolean">Gets or sets a value that determines whether the engine should populate
/// the @see:fields collection automatically based on the @see:itemsSource.</field>
/// <field name="fields" type="wijmo.olap.PivotFieldCollection">Gets the list of fields available for building views.</field>
/// <field name="rowFields" type="wijmo.olap.PivotFieldCollection">Gets the list of fields that define the rows in the output table.</field>
/// <field name="columnFields" type="wijmo.olap.PivotFieldCollection">Gets the list of fields that define the columns in the output table.</field>
/// <field name="valueFields" type="wijmo.olap.PivotFieldCollection">Gets the list of fields that define the values shown in the output table.</field>
/// <field name="filterFields" type="wijmo.olap.PivotFieldCollection">Gets the list of fields that define filters applied while generating the output table.</field>
/// <field name="viewDefinition" type="String">Gets or sets the current pivot view definition as a JSON string.
/// 
/// This property is typically used to persist the current view as
/// an application setting.
/// 
/// For example, the code below implements two functions that save
/// and load view definitions using local storage:
/// 
/// <pre>// save/load views
/// function saveView() {
///   localStorage.viewDefinition = pivotPanel.viewDefinition;
/// }
/// function loadView() {
///   pivotPanel.viewDefinition = localStorage.viewDefinition;
/// }</pre></field>
/// <field name="isViewDefined" type="Boolean">Gets a value that determines whether a pivot view is currently defined.
/// 
/// A pivot view is defined if the @see:valueFields list is not empty and
/// either the @see:rowFields or @see:columnFields lists are not empty.</field>
/// <field name="itemsSourceChanged" type="wijmo.Event">Occurs after the value of the @see:itemsSource property changes.</field>
/// <field name="viewDefinitionChanged" type="wijmo.Event">Occurs after the view definition changes.</field>
/// <field name="updatingView" type="wijmo.Event">Occurs when the engine starts updating the @see:pivotView list.</field>
/// <field name="updatedView" type="wijmo.Event">Occurs after the engine has finished updating the @see:pivotView list.</field>
this._wjClassName = 'wijmo.olap.PivotPanel';
this.itemsSourceChanged = new wijmo.Event('wijmo.EventArgs');
this.viewDefinitionChanged = new wijmo.Event('wijmo.EventArgs');
this.updatingView = new wijmo.Event('wijmo.olap.ProgressEventArgs');
this.updatedView = new wijmo.Event('wijmo.EventArgs');
_wjReownEvents(this);
}
wijmo.olap.PivotPanel.prototype = new wijmo.Control();
wijmo.olap.PivotPanel.prototype.onItemsSourceChanged = function(e) {
/// <summary>Raises the @see:itemsSourceChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.olap.PivotPanel.prototype.onViewDefinitionChanged = function(e) {
/// <summary>Raises the @see:viewDefinitionChanged event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.olap.PivotPanel.prototype.onUpdatingView = function(e) {
/// <summary>Raises the @see:updatingView event.</summary>
/// <param name="e" type="wijmo.olap.ProgressEventArgs" optional="false">@see:ProgressEventArgs that provides the event data.</param>
}
wijmo.olap.PivotPanel.prototype.onUpdatedView = function(e) {
/// <summary>Raises the @see:updatedView event.</summary>
/// <param name="e" type="wijmo.EventArgs" optional="true"></param>
}
wijmo.olap.PivotPanel.controlTemplate = undefined;
intellisense.annotate(wijmo.olap.PivotPanel, {
// Gets or sets the template used to instantiate @see:PivotPanel controls.
controlTemplate: undefined
});
wijmo.olap.PivotPanel._wjDict = _wjMerge(wijmo.Control._wjDict, {engine:2,itemsSource:2,collectionView:2,pivotView:2,autoGenerateFields:2,fields:2,rowFields:2,columnFields:2,valueFields:2,filterFields:2,viewDefinition:2,isViewDefined:2,itemsSourceChanged:1,viewDefinitionChanged:1,updatingView:1,updatedView:1});
wijmo.olap.PivotPanel._wjClass = true;
wijmo.olap._GridContextMenu = function() {
/// <summary>Initializes a new instance of the @see:_GridContextMenu class.</summary>
/// <returns type="wijmo.olap._GridContextMenu"></returns>
this._wjClassName = 'wijmo.olap._GridContextMenu';
_wjReownEvents(this);
}
wijmo.olap._GridContextMenu.prototype = new wijmo.input.Menu();
wijmo.olap._GridContextMenu.prototype.attach = function(grid) {
/// <summary>Attaches this context menu to a @see:PivotGrid control.</summary>
/// <param name="grid" type="wijmo.olap.PivotGrid" optional="false">@see:PivotGrid to attach this menu to.</param>
}
wijmo.olap._GridContextMenu._wjDict = _wjMerge(wijmo.input.Menu._wjDict, {});
wijmo.olap._GridContextMenu._wjClass = true;
wijmo.olap._PivotMergeManager = function() {
/// <summary>Provides custom merging for @see:PivotGrid controls.</summary>
/// <returns type="wijmo.olap._PivotMergeManager"></returns>
this._wjClassName = 'wijmo.olap._PivotMergeManager';
_wjReownEvents(this);
}
wijmo.olap._PivotMergeManager.prototype = new wijmo.grid.MergeManager();
wijmo.olap._PivotMergeManager.prototype.getMergedRange = function(p, r, c, clip) {
/// <summary>Gets a @see:CellRange that specifies the merged extent of a cell
/// in a @see:GridPanel.</summary>
/// <param name="p" type="wijmo.grid.GridPanel" optional="false">The @see:GridPanel that contains the range.</param>
/// <param name="r" type="Number" optional="false">The index of the row that contains the cell.</param>
/// <param name="c" type="Number" optional="false">The index of the column that contains the cell.</param>
/// <param name="clip" type="Boolean" optional="true">Whether to clip the merged range to the grid's current view range.</param>
/// <returns type="wijmo.grid.CellRange">A @see:CellRange that specifies the merged range, or null if the cell is not merged.</returns>
}
wijmo.olap._PivotMergeManager._wjDict = _wjMerge(wijmo.grid.MergeManager._wjDict, {});
wijmo.olap._PivotMergeManager._wjClass = true;
wijmo.olap.PivotGrid = function(element, options) {
/// <summary>Initializes a new instance of the @see:PivotGrid class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.olap.PivotGrid"></returns>
/// <field name="engine" type="wijmo.olap.PivotEngine">Gets a reference to the @see:PivotEngine that owns this @see:PivotGrid.</field>
/// <field name="showDetailOnDoubleClick" type="Boolean">Gets or sets a value that determines whether the grid should show a popup containing
/// the detail records when the user double-clicks a cell.</field>
/// <field name="showRowFieldSort" type="Boolean">Gets or sets a value that determines whether the grid should display
/// sort indicators in the column headers for row fields.
/// 
/// Unlike regular column headers, row fields are always sorted, either
/// in ascending or descending order. If you set this property to true,
/// sort icons will always be displayed over any row field headers.</field>
/// <field name="customContextMenu" type="Boolean">Gets or sets a value that determines whether the grid should provide a custom context menu.
/// 
/// The custom context menu includes commands for changing field settings,
/// removing fields, or showing detail records for the grid cells.</field>
/// <field name="collapsibleSubtotals" type="Boolean">Gets or sets a value that determines whether the grid should allow users to collapse
/// and expand subtotal groups of rows and columns.</field>
/// <field name="centerHeadersVertically" type="Boolean">Gets or sets a value that determines whether the content of header cells should be
/// vertically centered.</field>
this._wjClassName = 'wijmo.olap.PivotGrid';
_wjReownEvents(this);
}
wijmo.olap.PivotGrid.prototype = new wijmo.grid.FlexGrid();
wijmo.olap.PivotGrid.prototype.getDetail = function(row, col) {
/// <summary>Gets an array containing the records summarized by a given grid cell.</summary>
/// <param name="row" type="Number" optional="false">Index of the row that contains the cell.</param>
/// <param name="col" type="Number" optional="false">Index of the column that contains the cell.</param>
}
wijmo.olap.PivotGrid.prototype.showDetail = function(row, col) {
/// <summary>Shows a dialog containing details for a given grid cell.</summary>
/// <param name="row" type="Number" optional="false">Index of the row that contains the cell.</param>
/// <param name="col" type="Number" optional="false">Index of the column that contains the cell.</param>
}
wijmo.olap.PivotGrid._wjDict = _wjMerge(wijmo.grid.FlexGrid._wjDict, {engine:2,showDetailOnDoubleClick:2,showRowFieldSort:2,customContextMenu:2,collapsibleSubtotals:2,centerHeadersVertically:2});
wijmo.olap.PivotGrid._wjClass = true;
wijmo.olap.DetailDialog = function(element, options) {
/// <summary>Initializes a new instance of the @see:DetailDialog class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that hosts the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">The JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.olap.DetailDialog"></returns>
this._wjClassName = 'wijmo.olap.DetailDialog';
_wjReownEvents(this);
}
wijmo.olap.DetailDialog.prototype = new wijmo.Control();
wijmo.olap.DetailDialog.controlTemplate = undefined;
intellisense.annotate(wijmo.olap.DetailDialog, {
// Gets or sets the template used to instantiate @see:PivotFieldEditor controls.
controlTemplate: undefined
});
wijmo.olap.DetailDialog._wjDict = _wjMerge(wijmo.Control._wjDict, {});
wijmo.olap.DetailDialog._wjClass = true;
wijmo.olap.PivotChartType = {
// Shows vertical bars and allows you to compare values of items across categories.
Column: 0,
// Shows horizontal bars.
Bar: 1,
// Shows patterns within the data using X and Y coordinates.
Scatter: 2,
// Shows trends over a period of time or across categories.
Line: 3,
// Shows line chart with the area below the line filled with color.
Area: 4,
// Shows pie chart.
Pie: 5,
_wjEnum: true
};

intellisense.annotate(wijmo.olap, {
// Specifies constants that define the chart type.
PivotChartType: undefined
});

wijmo.olap.PivotChart = function(element, options) {
/// <summary>Initializes a new instance of the @see:PivotChart class.</summary>
/// <param name="element" type="Object" optional="false">The DOM element that will host the control, or a selector for the host element (e.g. '#theCtrl').</param>
/// <param name="options" type="Object" optional="true">JavaScript object containing initialization data for the control.</param>
/// <returns type="wijmo.olap.PivotChart"></returns>
/// <field name="engine" type="wijmo.olap.PivotEngine">Gets a reference to the @see:PivotEngine that owns this @see:PivotChart.</field>
/// <field name="itemsSource" type="Object">Gets or sets the @see:PivotEngine or @see:PivotPanel that provides data
/// for this @see:PivotChart.</field>
/// <field name="chartType" type="wijmo.olap.PivotChartType">Gets or sets the type of chart to create.</field>
/// <field name="showHierarchicalAxes" type="Boolean">Gets or sets a value that determines whether the chart should group axis
/// annotations for grouped data.</field>
/// <field name="showTotals" type="Boolean">Gets or sets a value that determines whether the chart should include only totals.</field>
/// <field name="stacking" type="wijmo.chart.Stacking">Gets or sets a value that determines whether and how the series objects are stacked.</field>
/// <field name="maxSeries" type="Number">Gets or sets the maximum number of data series to be shown in the chart.</field>
/// <field name="maxPoints" type="Number">Gets or sets the maximum number of points to be shown in each series.</field>
/// <field name="flexChart" type="wijmo.chart.FlexChart">Gets a reference to the inner <b>FlexChart</b> control.</field>
/// <field name="flexPie" type="wijmo.chart.FlexPie">Gets a reference to the inner <b>FlexPie</b> control.</field>
this._wjClassName = 'wijmo.olap.PivotChart';
_wjReownEvents(this);
}
wijmo.olap.PivotChart.prototype = new wijmo.Control();
wijmo.olap.PivotChart.prototype.refresh = function(fullUpdate) {
/// <summary>Refreshes the control.</summary>
/// <param name="fullUpdate" type="Boolean" optional="true">Whether to update the control layout as well as the content.</param>
}
wijmo.olap.PivotChart._wjDict = _wjMerge(wijmo.Control._wjDict, {engine:2,itemsSource:2,chartType:2,showHierarchicalAxes:2,showTotals:2,stacking:2,maxSeries:2,maxPoints:2,flexChart:2,flexPie:2});
wijmo.olap.PivotChart._wjClass = true;

function _wjGetProp(name) {
   if (!name || (typeof (name) !== 'string')) return;
   name = name.split('.');
   var cur;
   for (var i = 0; i < name.length; i++) {
      if (i && !cur) break;
      cur = !i ? window[name[i]] : cur[name[i]];
   }
   return cur;
}

function _wjReownEvents(ctrl) {
   var foo;
   if ((foo = _wjGetProp(ctrl._wjClassName)) && (foo = foo._wjDict)) {
      for (var k in foo) {
         if (foo[k] === 1) ctrl[k]._wjOwner = ctrl;
      }
   }
}

function _wjUpdateEventHandlerSignatureHint(po, fh) {
   if (po && fh && (po._wjClassName === 'wijmo.Event') && (fh.functionName === 'addHandler' || fh.functionName === 'removeHandler')) {
      var owner, sender, arg;
      if ((owner = po._wjOwner) && (sender = owner._wjClassName) && (arg = po._wjArgType)) {
         fh.signatures[0].params[0].type = 'Function(' + sender + ' sender, ' + arg + ' args)';
      }
   }
}

intellisense.addEventListener('statementcompletion', function (e) {
   e.items = e.items.filter(function (item) {
      var hide = !!(item.name && (item.name.indexOf('_wj') === 0));

      if (!hide) {
         var po = item.parentObject,
            value = item.value,
            obj = new Object(),
            fn = function() {},
            isObjMember = function(name) { return name in obj; },
            isFnMember = function(name) { return name in fn; };

         if (value._wjModule === true) {
            item.glyph = 'vs:GlyphGroupNamespace';
         } else if (value._wjClass === true && item.name !== 'constructor') {
            item.glyph = 'vs:GlyphGroupClass';
         } else if (value._wjEnum === true) {
            item.glyph = 'vs:GlyphGroupEnum';
         } else if (po._wjModule === true) {
            hide = isObjMember(item.name);
         } else if (po._wjClass === true) {
            hide = isFnMember(item.name);
         } else if (po._wjEnum === true) {
            item.glyph = 'vs:GlyphGroupEnumMember';
            hide = isObjMember(item.name);
         } else {
            if (po.constructor && po.constructor._wjClass === true) {
               hide = isObjMember(item.name);
               var foo;
               if (!hide && po._wjClassName && (foo = _wjGetProp(po._wjClassName)) && (foo = foo._wjDict)) {
                  if (foo[item.name] === 1)
                     item.glyph = 'vs:GlyphGroupEvent';
                  else if (foo[item.name] === 2)
                     item.glyph = 'vs:GlyphGroupProperty';
               }
            }
         }
      }

      return !hide;
   });
});

intellisense.addEventListener('signaturehelp', function (e) {
   _wjUpdateEventHandlerSignatureHint(e.parentObject, e.functionHelp);
});

intellisense.addEventListener('statementcompletionhint', function (e) {
   if (e.completionItem.value != null) {
      if (e.completionItem.value._wjEnum === true) {
         e.symbolHelp.symbolDisplayType = 'Enum';
      }
   }

   _wjUpdateEventHandlerSignatureHint(e.completionItem.parentObject, e.symbolHelp.functionHelp);
});
