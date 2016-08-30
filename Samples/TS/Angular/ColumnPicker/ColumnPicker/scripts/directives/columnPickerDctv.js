// application
var app = angular.module('app');

// columnPicker directive
//
// Adds a column-picker icon to the top-left of a FlexGrid; 
// clicking the icon displays a list of columns so the user
// can select which ones to display.
//
// To use, add this as a parameter to the <wj-flex-grid> 
// tag in your markup. The parameter value should correspond
// to the image you want to show in the column picker icon:
//
// <wj-flex-grid column-picker="images/colpicker.png" ...
//
app.directive('columnPicker', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            // get control instance, assert type
            var flex = wijmo.Control.getControl(element[0]);
            flex = wijmo.asType(flex, wijmo.grid.FlexGrid);

            // add picker icon to column header element
            var host = flex.hostElement;
            var colHdr = host.querySelector('[wj-part="ch"]')
            var img = $('<img class="wj-col-picker-icon" style="position:absolute;top:0px;right:0px">')[0];
            img.src = attrs['columnPicker'];
            img.style.height = flex.rows.defaultSize + 'px';
            colHdr.appendChild(img);

            // create frame element for column list
            var frame = $('<div class="wj-col-picker-dropdown" style="position:absolute;outline-style:none;display:none">')[0];
            frame.tabIndex = 0; // so it can get the focus on Chrome
            var root = host.querySelector('[wj-part="root"]');
            root.parentElement.appendChild(frame);

            // handle icon clicks to show/hide drop-down
            var fs = frame.style;
            img.addEventListener('mousedown', function (e) {

                // we're done with this event
                e.preventDefault();
                e.stopImmediatePropagation();

                // if frame is visible, hide it
                if (fs.display != 'none') {
                    fs.display = 'none';
                    return;
                }

                // populate frame with checkboxes for the columns
                populateFrame();

                // show frame
                fs.top = flex.rows.defaultSize + 'px';
                fs.right = (root.offsetWidth - root.clientWidth) + 'px';
                fs.maxHeight = (root.clientHeight - flex.rows.defaultSize) * 0.65 + 'px';
                fs.display = '';
                frame.focus();
            });

            // close frame when user clicks anywhere else
            document.body.addEventListener('mousedown', function (e) {
                var mde = document.elementFromPoint(e.clientX, e.clientY);
                if (mde != img) {
                    if (contains(frame, mde)) {
                        e.preventDefault();
                        e.stopImmediatePropagation();
                        frame.focus();
                    } else {
                        frame.style.display = 'none';
                    }
                }
            }, true);
            function contains(parent, child) {
                for (var e = child; e; e = e.parentElement) {
                    if (e == parent) return true;
                }
                return false;
            }

            // handle checkbox changes to show/hide columns
            frame.addEventListener('change', function (e) {
                var sender = e.target;
                if (sender instanceof HTMLInputElement &&
                    sender.type == 'checkbox' &&
                    sender.value != null) {
                    var col = flex.columns[parseInt(sender.value)];
                    col.visible = sender.checked;
                }
            });

            // populate the frame with checkboxes for each column
            function populateFrame() {
                frame.innerHTML = '';

                // create two divs to hold the checkboxes
                for (var i = 0; i < 2; i++) {
                    var d = $('<div style="float:left"/>')[0];
                    frame.appendChild(d);
                }

                // add one checkbox for each grid column
                for (var i = 0; i < flex.columns.length; i++) {

                    // create checkbox
                    var col = flex.columns[i];
                    var hdr = col.header ? col.header : col.binding;
                    var checked = col.visible ? 'checked' : '';
                    var chk = $('<label class="wj-col-picker-item"><input type="checkbox" value="' + i + '" ' + checked + '> ' + hdr + '</label>')[0];

                    // append to first or second div
                    var fc = i <= flex.columns.length / 2 ? 0 : 1;
                    frame.children[fc].appendChild(chk);
                }
            }
        }
    };
});

