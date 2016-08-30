var CustomGridEditor = (function () {
    /**
     * Initializes a new instance of a CustomGridEditor.
     *
     * @param col Column that will be edited with the custom editor.
     * @param edt HTMLElement that hosts the custom editor.
     */
    function CustomGridEditor(col, edt) {
        var _this = this;
        // save references
        this._grid = col.grid;
        this._col = col;
        this._edt = edt;
        this._ctl = wijmo.Control.getControl(edt);
        // sanity
        wijmo.assert(this._col != null, 'invalid column');
        wijmo.assert(this._edt != null, 'invalid editor element');
        wijmo.assert(this._ctl != null, 'editor element doesn\'t have a control');
        // initialize input event dispatcher
        this._evtInput = document.createEvent('HTMLEvents');
        this._evtInput.initEvent('input', true, false);
        // optional: increase row height a little to give editors more room
        //this._grid.rows.defaultSize = 32;
        // remove editor from DOM
        this._edt.parentElement.removeChild(this._edt);
        // connect grid events
        this._grid.beginningEdit.addHandler(this._beginningEdit, this);
        this._grid.scrollPositionChanged.addHandler(this._closeEditor, this);
        // connect editor events
        this._edt.addEventListener('keydown', function (e) {
            switch (e.keyCode) {
                case wijmo.Key.Tab:
                case wijmo.Key.Enter:
                    _this._closeEditor(true);
                    _this._grid.focus();
                    // forward event to the grid so it will move the selection
                    var event = document.createEvent('HTMLEvents');
                    event.initEvent('keydown', true, true);
                    event['ctrlKey'] = e.ctrlKey;
                    event['shiftKey'] = e.shiftKey;
                    event['keyCode'] = e.keyCode;
                    _this._grid.hostElement.dispatchEvent(event);
                    break;
                case wijmo.Key.Escape:
                    _this._closeEditor(false);
                    _this._grid.focus();
                    break;
            }
        });
        this._ctl.lostFocus.addHandler(function () {
            setTimeout(function () {
                if (!_this._ctl.containsFocus()) {
                    _this._closeEditor(true);
                }
            });
        });
        // keep track of key that initiated the editing process, open drop-down on f4/alt-down
        this._grid.addEventListener(this._grid.hostElement, 'keydown', function (e) {
            // clear keypress buffer
            _this._key = null;
            // start editing and open drop-down on F4/alt+up/down
            _this._openDropDown = false;
            if (e.keyCode == wijmo.Key.F4 ||
                (e.altKey && (e.keyCode == wijmo.Key.Down || e.keyCode == wijmo.Key.Up))) {
                _this._openDropDown = true;
                _this._grid.startEditing(true);
                e.preventDefault();
            }
        }, true);
        this._grid.addEventListener(this._grid.hostElement, 'keypress', function (e) {
            _this._key = e.charCode > 32 ? String.fromCharCode(e.charCode) : null;
        }, true);
        this._grid.addEventListener(this._edt, 'keypress', function (e) {
            if (_this._key && e.charCode > 32) {
                _this._key += String.fromCharCode(e.charCode);
            }
        }, true);
        // close editor when user resizes the window
        window.addEventListener('resize', function () {
            if (_this._containsFocus(_this._edt)) {
                _this._closeEditor(true);
                _this._grid.focus();
            }
        });
    }
    // handle the grid's beginningEdit event by canceling the built-in editor,
    // initializing the custom editor and giving it the focus.
    CustomGridEditor.prototype._beginningEdit = function (grid, args) {
        var _this = this;
        // check that this is our column
        if (grid.columns[args.col] == this._col) {
            // cancel built-in editor
            args.cancel = true;
            // save cell being edited
            this._rng = args.range;
            // initialize editor host
            var rc = grid.getCellBoundingRect(args.row, args.col);
            wijmo.setCss(this._edt, {
                position: 'absolute',
                left: rc.left - 1 + pageXOffset,
                top: rc.top - 1 + pageYOffset,
                width: rc.width + 1,
                height: grid.rows[args.row].renderHeight + 1,
                borderRadius: '0px'
            });
            // initialize editor content
            if (this._ctl != null) {
                if (!wijmo.isUndefined(this._ctl['value'])) {
                    this._ctl['value'] = grid.getCellData(this._rng.row, this._rng.col, false);
                }
                else if (!wijmo.isUndefined(this._ctl['text'])) {
                    this._ctl['text'] = grid.getCellData(this._rng.row, this._rng.col, true);
                }
                else {
                    throw 'Can\'t set editor value/text...';
                }
            }
            // start editing item
            var ecv = wijmo.tryCast(grid.collectionView, 'IEditableCollectionView'), item = grid.rows[args.row].dataItem;
            if (ecv && item) {
                setTimeout(function () {
                    ecv.editItem(item);
                }, 210); // FlexGrid commits edits 200ms after losing focus
            }
            // activate editor
            document.body.appendChild(this._edt);
            this._edt.focus();
            setTimeout(function () {
                // apply the last key pressed to the editor
                if (_this._key) {
                    var input = _this._edt.querySelector('input');
                    if (input instanceof HTMLInputElement) {
                        input.value = _this._key;
                        wijmo.setSelectionRange(input, _this._key.length, _this._key.length);
                        input.dispatchEvent(_this._evtInput);
                    }
                }
                _this._key = null;
                // open drop-down on F4/alt-down
                if (_this._openDropDown && _this._ctl instanceof wijmo.input.DropDown) {
                    _this._ctl.isDroppedDown = true;
                }
            }, 50);
        }
    };
    // close the custom editor, optionally saving the edits back to the grid
    CustomGridEditor.prototype._closeEditor = function (saveEdits) {
        // check that the editor is active
        var parent = this._edt.parentElement, grid = this._grid, edt = wijmo.Control.getControl(this._edt);
        if (parent) {
            // raise grid's cellEditEnding event
            var e = new wijmo.grid.CellRangeEventArgs(grid.cells, this._rng);
            grid.onCellEditEnding(e);
            // save editor value into grid
            if (saveEdits && !e.cancel) {
                if (edt != null) {
                    if (!wijmo.isUndefined(edt['text'])) {
                        this._grid.setCellData(this._rng.row, this._rng.col, edt['text']);
                    }
                    else {
                        throw 'Can\'t get editor value/text...';
                    }
                    this._grid.invalidate();
                }
            }
            // close editor and remove it from the DOM
            if (edt instanceof wijmo.input.DropDown) {
                edt.isDroppedDown = false;
            }
            parent.removeChild(this._edt);
            // raise grid's cellEditEnded event
            grid.onCellEditEnded(e);
        }
    };
    // checks whether an element contains the focus
    CustomGridEditor.prototype._containsFocus = function (element) {
        var control = wijmo.Control.getControl(element);
        return control
            ? control.containsFocus() // controls may have popups...
            : wijmo.contains(element, document.activeElement);
    };
    return CustomGridEditor;
}());
//# sourceMappingURL=CustomGridEditor.js.map