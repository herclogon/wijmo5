module wijmo.chart.annotation {
    
    /**
     * Represents a Button of EditableAnnotationLayer.
     */
    export class Button {
        private _iconFunc: Function;
        private _drawFunc: Function;
        private _resizeFunc: Function;

        constructor(iconFunc, drawFunc, resizeFunc) {
            this._iconFunc = iconFunc;
            this._drawFunc = drawFunc;
            this._resizeFunc = resizeFunc;
        }
        
        /**
         * Gets the function of drawing button icon.
         */
        get iconFunc(): Function {
            return this._iconFunc;
        }

        /**
         * Gets the function of drawing annotation.
         */
        get drawFunc(): Function {
            return this._drawFunc;
        }

        /**
         * Gets the function of resizing annotation.
         */
        get resizeFunc(): Function {
            return this._resizeFunc;
        }
    }


    class TextEditor {
        private _element: HTMLElement;
        private _input: HTMLInputElement;
        private _button: HTMLButtonElement
        private _text: string;
        private _isShowing: boolean;

        constructor() {
            this._create();
        }

        get text(): string {
            return this._text;
        }
        set text(value: string) {
            if (value === this._text) {
                return;
            }
            this._text = value;
            this._input.value = value;
        }

        get isShowing() {
            return !!this._isShowing;
        }

        setFocus() {
            this._input.focus();
        }

        //hide TextEditor.
        hide() {
            this._element.style.display = 'none';
            this._isShowing = false;
        }

        show(point?) {
            var s = this._element.style;

            s.display = 'block';
            this._isShowing = true;
            if (point) {
                s.left = point.x + 'px';
                s.top = point.y + 'px';
            }
        }

        private _create() {
            var self = this,
                ele: HTMLElement;

            ele = document.createElement('div');
            self._element = ele;
            ele.style.position = 'absolute';
            self.hide();

            self._input = document.createElement('input');
            ele.appendChild(self._input);

            self._button = document.createElement('button');
            self._button.innerHTML = 'OK';
            self._button.addEventListener('click', self._click.bind(self));
            ele.appendChild(self._button);
            document.body.appendChild(ele);
        }

        /**
         * Occurs after the chart finishes rendering.
         */
        clicked = new Event();

        /**
         * Raises the click event.
         */
        onClicked(e) {
            this.clicked.raise(this, e);
        }

        private _click(e) {
            this._text = this._input.value || '';
            this.onClicked(new EventArgs());
        }
    }
    
    /**
     * Class that represents a point with data (with x and y coordinates and dx, dy).
     */
    export class DataPoint extends Point {
        /**
         * Gets or sets the data coordinate x of this @see:DataPoint.
         */
        dx: any;
        /**
         * Gets or sets the data coordinate y of this @see:DataPoint.
         */
        dy: any;

        /**
         * Initializes a new instance of a @see:DataPoint object.
         *
         * @param x X coordinate of the new DataPoint.
         * @param y Y coordinate of the new DataPoint.
         */
        constructor(x: number = 0, y: number = 0) {
            super(x, y)
        }
    }
    
    /**
     * Represents an extension of the editable annotation layer for the FlexChart.
     *
     * The EditableAnnotationLayer contains a collection of annotation elements: texts, lines, images, rectangle etc.
     */
    export class EditableAnnotationLayer extends AnnotationLayer {

        private _isEditable: boolean; 
        private _editableUI: HTMLElement;

        private _hostMouseDown = null;
        private _hostMouseMove = null;
        private _hostMouseUp = null;
        private _hostMouseLeave = null;
        private _hostClick = null;
        private _hostDBLClick = null;
        private _isDragging = false;
        private _draggingAnno: AnnotationBase;
        private _textEditorAnno: AnnotationBase;
        private _originPoint: Point;
        private _chartMarginPlot;
        private _topMarginAdded: boolean;
        private _isDeleting: boolean;
        private _isAdding: boolean;
        private _selectedBtnIdx: number;
        private _buttons: wijmo.collections.ObservableArray;
        private _timer: number;
        private _textEditor: TextEditor;
        private _isDataCoordinate: boolean;

        /**
         * Initializes a new instance of a @see:EditableAnnotationLayer object.
         * 
         * @param chart The chart on which the EditableAnnotationLayer attached to.
         * @param options A JavaScript object containing initialization data for EditableAnnotationLayer.  
         */
        constructor(chart: FlexChart, options?) {
            super(chart, options);
            //bind drag/drop event
            this._bindEditableEvent();
        }

        _init(chart: FlexChart) {
            super._init(chart);

            var self = this;

            self._textEditor = new TextEditor();
            self._textEditor.clicked.addHandler(self._textEditorClick, self);
            self._buttons = new wijmo.collections.ObservableArray();

            var text, textBtn = new Button(function (engine: IRenderEngine) {
                var textIcon = new Text({
                    text: 'T',
                    tooltip: 'Text Button</br>Select to add Text Annotation.',
                    point: { x: 10, y: 22 }
                });
                textIcon.render(engine);
                return textIcon._element;
            }, function (point: DataPoint, isDataCoordinate: boolean) {
                var x = isDataCoordinate ? point.dx : point.x,
                    y = isDataCoordinate ? point.dy : point.y;

                text = new Text({
                    attachment: isDataCoordinate ? AnnotationAttachment.DataCoordinate : AnnotationAttachment.Absolute,
                    tooltip: 'Text',
                    text: 'Text',
                    point: { x: x, y: y },
                    style: {
                        fill: 'black'
                    }
                });
                self.items.push(text);
            }, function (originPoint: Point, currentPoint: Point) {
            });
            self.buttons.push(textBtn);

            var line, lineBtn = new Button(function (engine: IRenderEngine) {
                var lineIcon = new Line({
                    position: AnnotationPosition.Center,
                    tooltip: 'Line Button</br>Select to add Line Annotation.',
                    start: { x: 5, y: 6 },
                    end: { x: 15, y: 15 }
                });
                lineIcon.render(engine);
                return lineIcon._element;
            }, function (point: DataPoint, isDataCoordinate: boolean) {
                var x = isDataCoordinate ? point.dx : point.x,
                    y = isDataCoordinate ? point.dy : point.y;

                line = new Line({
                    attachment: isDataCoordinate ? AnnotationAttachment.DataCoordinate : AnnotationAttachment.Absolute,
                    position: AnnotationPosition.Center,
                    tooltip: 'Line',
                    start: { x: x, y: y },
                    end: { x: x, y: y }
                });
                self.items.push(line);
            }, function (originPoint: DataPoint, currentPoint: DataPoint, isDataCoordinate: boolean) {
                var ox = isDataCoordinate ? originPoint.dx : originPoint.x,
                    oy = isDataCoordinate ? originPoint.dy : originPoint.y,
                    cx = isDataCoordinate ? currentPoint.dx : currentPoint.x,
                    cy = isDataCoordinate ? currentPoint.dy : currentPoint.y;

                line.start = new wijmo.chart.DataPoint(ox, oy);
                line.end = new wijmo.chart.DataPoint(cx, cy);
            });
            self.buttons.push(lineBtn);

            var circle, circleBtn = new Button(function (engine: IRenderEngine) {
                var circleIcon = new Circle({
                    tooltip: 'Circle Button</br>Select to add Circle Annotation.',
                    point: { x: 10, y: 11 },
                    radius: 6,
                    style: { fill: 'red' }
                });
                circleIcon.render(engine);
                return circleIcon._element;
            }, function (point: DataPoint, isDataCoordinate: boolean) {
                var x = isDataCoordinate ? point.dx : point.x,
                    y = isDataCoordinate ? point.dy : point.y;

                circle = new Circle({
                    attachment: isDataCoordinate ? AnnotationAttachment.DataCoordinate : AnnotationAttachment.Absolute,
                    tooltip: 'Circle',
                    point: { x: x, y: y },
                    radius: 0,
                    style: {
                        fill: 'red'
                    }
                });
                self.items.push(circle);
            }, function (originPoint: Point, currentPoint: Point) {
                circle.radius = Math.sqrt(Math.pow(currentPoint.x - originPoint.x, 2) + Math.pow(currentPoint.y - originPoint.y, 2));
            });
            self.buttons.push(circleBtn);

            var ellipse, ellipseBtn = new Button(function (engine: IRenderEngine) {
                var ellipseIcon = new Ellipse({
                    tooltip: 'Ellipse Button</br>Select to add Ellipse Annotation.',
                    point: { x: 10, y: 11 },
                    width: 16,
                    height: 10,
                    style: { fill: 'red' }
                });
                ellipseIcon.render(engine);
                return ellipseIcon._element;
            }, function (point: DataPoint, isDataCoordinate: boolean) {
                var x = isDataCoordinate ? point.dx : point.x,
                    y = isDataCoordinate ? point.dy : point.y;

                ellipse = new Ellipse({
                    attachment: isDataCoordinate ? AnnotationAttachment.DataCoordinate : AnnotationAttachment.Absolute,
                    tooltip: 'Ellipse',
                    point: { x: x, y: y },
                    width: 0,
                    height: 0,
                    style: {
                        fill: 'red'
                    }
                });
                self.items.push(ellipse);
            }, function (originPoint: Point, currentPoint: Point) {
                ellipse.width = Math.abs(currentPoint.x - originPoint.x) * 2;
                ellipse.height = Math.abs(currentPoint.y - originPoint.y) * 2;
            });
            self.buttons.push(ellipseBtn);

            var rect, rectBtn = new Button(function (engine: IRenderEngine) {
                var rectangleIcon = new Rectangle({
                    tooltip: 'Rectangle Button</br>Select to add Rectangle Annotation.',
                    point: { x: 10, y: 11 },
                    width: 14,
                    height: 10,
                    style: { fill: 'red' }
                });
                rectangleIcon.render(engine);
                return rectangleIcon._element;
            }, function (point: DataPoint, isDataCoordinate: boolean) {
                var x = isDataCoordinate ? point.dx : point.x,
                    y = isDataCoordinate ? point.dy : point.y;

                rect = new Rectangle({
                    attachment: isDataCoordinate ? AnnotationAttachment.DataCoordinate : AnnotationAttachment.Absolute,
                    tooltip: 'Rectangle',
                    point: { x: x, y: y },
                    width: 0,
                    height: 0,
                    style: {
                        fill: 'red'
                    }
                });
                self.items.push(rect);
            }, function (originPoint: Point, currentPoint: Point) {
                rect.width = Math.abs(currentPoint.x - originPoint.x) * 2;
                rect.height = Math.abs(currentPoint.y - originPoint.y) * 2;
            });
            self.buttons.push(rectBtn);

            var square, squareBtn = new Button(function (engine: IRenderEngine) {
                var squareleIcon = new Square({
                    tooltip: 'Square Button</br>Select to add Square Annotation.',
                    point: { x: 10, y: 11 },
                    length: 10,
                    style: { fill: 'red' }
                });
                squareleIcon.render(engine);
                return squareleIcon._element;
            }, function (point: DataPoint, isDataCoordinate: boolean) {
                var x = isDataCoordinate ? point.dx : point.x,
                    y = isDataCoordinate ? point.dy : point.y;

                square = new Square({
                    attachment: isDataCoordinate ? AnnotationAttachment.DataCoordinate : AnnotationAttachment.Absolute,
                    tooltip: 'Square',
                    point: { x: x, y: y },
                    length: 0,
                    style: {
                        fill: 'red'
                    }
                });
                self.items.push(square);
            }, function (originPoint: Point, currentPoint: Point) {
                square.length = Math.abs(currentPoint.x - originPoint.x) * 2;
            });
            self.buttons.push(squareBtn);

        }

        /**
         * Gets the collection of annotation elements in AnnotationLayer.
         */
        get buttons(): wijmo.collections.ObservableArray {
            return this._buttons;
        }

        _renderGroup() {
            var self = this;

            super._renderGroup();
            //create editable UI
            if (!self._editableUI || self._editableUI.parentNode == null) {
                self._createEditableUI();
            }
        }

        private _createEditableUI() {
            var self = this,
                engine = self._chart._currentRenderEngine;

            if (!self._editableUI || self._editableUI.parentNode == null) {
                if (!self._editableUI) {
                    self._chartMarginPlot = self._chart.plotMargin;
                }

                self._editableUI = engine.startGroup('wjanno-editable-layer');
                engine.endGroup();

                self._drawIcons(engine);
            }
            self._toggleUIVisible(self._isEditable);
        }
        
        //draw rounded corner container
        private _drawRCContainer(engine, x = 0) {
            engine.drawRect(x, 1, 20, 20, 'wjanno-container', {
                rx: 2,
                ry: 2
            });
        }

        private _drawIcons(engine: IRenderEngine) {
            var self = this,
                ele = self._editableUI,
                btns = self.buttons,
                idx, len, btn: Button, iconGroup, icon,
                iconOffset = 65,
                iconSelectedClass = ' wjanno-icon-selected',
                cls;

            while (ele.hasChildNodes()) {
                ele.removeChild(ele.lastChild);
            }
            //data coordinate
            cls = 'wjanno-dc-icon wjanno-icon';
            if (self._isDataCoordinate) {
                cls += iconSelectedClass;
            }
            var dc = engine.startGroup(cls);
            self._drawRCContainer(engine, 5);
            engine.endGroup();
            var dcIcon = new Polygon({
                tooltip: 'Data Coordinate Button</br> Click to switch the attachment of the annotation to be added</br> between Absolute and DataCoordinate.',
                points: [{
                    x: 16, y: 5
                }, {
                    x: 10, y: 5
                }, {
                    x: 10, y: 17
                }, {
                    x: 20, y: 17
                }, {
                    x: 20, y: 9
                }]
            });
            dcIcon.render(engine);
            dc.appendChild(dcIcon._element);
            ele.appendChild(dc);
            //delete
            cls = 'wjanno-delete-icon wjanno-icon';
            if (self._isDeleting) {
                cls += iconSelectedClass;
            }
            var del = engine.startGroup(cls);
            self._drawRCContainer(engine, 35);
            engine.endGroup();
            var deleteIcon = new Text({
                text: 'X',
                tooltip: 'Delete Button </br> Click to enable delete mode on selecting an annotation on the chart.',
                point: { x: 45, y: 22 }
            });
            deleteIcon.render(engine);
            del.appendChild(deleteIcon._element);
            ele.appendChild(del);

            for (idx = 0, len = btns.length; idx < len; idx++) {
                btn = btns[idx];
                cls = 'wjanno-icon';
                if (self._selectedBtnIdx === idx) {
                    cls += iconSelectedClass;
                }
                iconGroup = engine.startGroup(cls);
                self._drawRCContainer(engine);
                engine.endGroup();
                iconGroup.setAttribute('transform', 'translate(' + iconOffset + ', 0)');

                icon = btn.iconFunc.call(self, engine);
                if (icon) {
                    iconGroup.appendChild(icon);
                }

                iconOffset += 30;
                ele.appendChild(iconGroup);
            }

        }

        _showTooltip() {
            return super._showTooltip() && !this._isDragging;
        }

        private _toggleUIVisible(value: boolean) {
            var self = this,
                str = value ? 'visible' : 'hidden',
                margin;

            if (!self._editableUI) {
                self._createEditableUI();
            }

            self._editableUI.setAttribute('visibility', str);
            if (value) {
                if (!self._topMarginAdded) {
                    margin = self._convertMargin();
                    self._chart.plotMargin = margin;
                    self._topMarginAdded = true;
                }
            } else {
                self._chart.plotMargin = self._chartMarginPlot;
                self._topMarginAdded = false;
            }
        }

        _convertMargin(): string {
            var chart = this._chart,
                margin = chart._parseMargin(chart.plotMargin),
                m = [];

            if (margin.top) {
                margin.top = +margin.top + 35;
            } else {
                margin.top = 35;
            }
            m.push(margin.top, margin.right ? margin.right : NaN, margin.bottom ? margin.bottom : NaN, margin.left ? margin.left : NaN);
            return m.join(' ');
        }

        private _bindEditableEvent() {
            var self = this;

            self._hostMouseDown = self._onHostMouseDown.bind(self);
            self._hostMouseMove = self._onHostMouseMove.bind(self);
            self._hostMouseUp = self._onHostMouseUp.bind(self);
            self._hostMouseLeave = self._onHostMouseLeave.bind(self);
            self._hostClick = self._onHostClick.bind(self);
            self._hostDBLClick = self._onHostDBLClick.bind(self);

            self.toggleDragEventBinding();
        }

        private toggleDragEventBinding(bind = true) {
            var self = this,
                ele = self._chart.hostElement,
                eventListener = bind ? 'addEventListener' : 'removeEventListener';

            ele[eventListener]('mousedown', self._hostMouseDown);
            ele[eventListener]('mousemove', self._hostMouseMove);
            ele[eventListener]('mouseup', self._hostMouseUp);
            ele[eventListener]('mouseleave', self._hostMouseLeave);
            ele[eventListener]('click', self._hostClick);
            ele[eventListener]('dblclick', self._hostDBLClick);
            //prevent default drag behavior of image.
            ele[eventListener]('dragstart', e => {
                if (e.target && e.target.tagName && e.target.tagName.toLowerCase() === 'image') {
                    e.preventDefault();
                    return false;
                }
            });

            if ('ontouchstart' in window) {
                ele[eventListener]('touchstart', self._hostMouseDown);
                ele[eventListener]('touchmove', self._hostMouseMove);
                ele[eventListener]('touchend', self._hostMouseUp);
            }
        }

        private _getIconElement(ele, pNode): SVGGElement {
            var parentNode = ele.parentNode;
            if (wijmo.hasClass(ele, 'wjanno-icon')) {
                return ele;
            } else if (parentNode == null || parentNode === document.body || parentNode === document || parentNode === pNode) {
                return null;
            } else {
                return this._getIconElement(parentNode, pNode);
            }
        }

        private _onHostDBLClick(e) {
            var self = this,
                rootEle = self._chart.hostElement,
                anno: AnnotationBase,
                pNode;

            if (!self._isEditable) {
                return;
            }
            anno = self._getAnnotation(e.target, rootEle);
            if (anno != null) {
                pNode = anno._element.parentNode;
                if (pNode == self._layerEle) {
                    self._dlbClick(e, anno);
                }
            }
        }

        private _textEditorClick(e) {
            var self = this,
                textEditor = self._textEditor,
                anno = self._textEditorAnno,
                text;

            if (!self._isEditable) {
                return;
            }
            text = textEditor.text;
            textEditor.hide();
            if (anno instanceof Text) {
                (<Text>anno).text = text;
            } else {
                (<Shape>anno).content = text;
            }
            self._textEditorAnno = null;
        }

        private _dlbClick(e, anno: AnnotationBase) {
            var self = this,
                textEditor = self._textEditor,
                text;

            if (!self._isEditable) {
                return;
            }
            if (anno instanceof Text) {
                text = (<Text>anno).text || '';
            } else {
                text = (<Shape>anno).content || '';
            }

            self._textEditorAnno = anno;
            textEditor.text = text;
            textEditor.show(new Point(e.pageX, e.pageY));
            textEditor.setFocus();
        }

        private _onHostClick(e) {
            var self = this,
                tar = e.target,
                iconEle, selectedIcon,
                iconSelectedClass = 'wjanno-icon-selected',
                isDC = self._isDataCoordinate;

            if (!self._isEditable) {
                return;
            }
            iconEle = self._getIconElement(tar, self._editableUI);
            if (!iconEle) {
                return;
            }

            //for data-coordinate icon only
            if (wijmo.hasClass(iconEle, 'wjanno-dc-icon')) {
                self._isDataCoordinate = !isDC;
                wijmo.toggleClass(iconEle, iconSelectedClass, !isDC);
                return;
            }

            self._isDeleting = false;
            self._selectedBtnIdx = -1;
            if (wijmo.hasClass(iconEle, iconSelectedClass)) {
                wijmo.removeClass(iconEle, iconSelectedClass);
            } else {
                selectedIcon = self._editableUI.querySelector('.' + iconSelectedClass + ':not(:first-child)');
                if (selectedIcon != null) {
                    wijmo.removeClass(selectedIcon, iconSelectedClass);
                }
                wijmo.addClass(iconEle, iconSelectedClass);
                if (wijmo.hasClass(iconEle, 'wjanno-delete-icon')) {
                    self._isDeleting = true;
                } else {
                    self._selectedBtnIdx = [].indexOf.call(iconEle.parentNode.childNodes, iconEle) - 2;
                }
            }
        }

        private _onHostMouseDown(e) {
            var self = this,
                rootEle = self._chart.hostElement,
                anno: AnnotationBase,
                pt = e instanceof MouseEvent ? new Point(e.pageX, e.pageY) :
                    new Point(e.changedTouches[0].pageX, e.changedTouches[0].pageY),
                pNode, del, btn: Button, hostRect: Rect,
                plotRect: Rect = self._chart._plotRect,
                isDC = self._isDataCoordinate,
                textEditor = self._textEditor,
                dp: DataPoint;

            if (!self._isEditable) {
                return;
            }
            rootEle.style.cursor = 'default';

            self._toggleIsAdding(false);
            self._originPoint = pt;
            anno = self._getAnnotation(e.target, rootEle);
            if (anno != null) {
                pNode = anno._element.parentNode;
                if (pNode == self._layerEle) {
                    if (self._isDeleting) {
                        del = window.confirm('Delete selected Annotation?');
                        if (del) {
                            self.items.removeAt(self.items.indexOf(anno));
                            //remove text editor
                            if (textEditor && textEditor.isShowing) {
                                textEditor.text = '';
                                textEditor.hide();
                            }
                        }
                        return;
                    }
                    self._toggleIsDragging(true, anno);
                    // move this element to the "top" of the display, so it is (almost) always over other elements
                    anno._element.parentNode.appendChild(anno._element);
                    if (self._chart.isTouching) {
                        self._timer = window.setTimeout(self._dlbClick(e, anno), 1000);
                    }
                }
            } else if (self._selectedBtnIdx > -1) {
                hostRect = wijmo.getElementRect(rootEle.querySelector('svg'));
                pt = new Point(pt.x - hostRect.left, pt.y - hostRect.top);
                if (!FlexChart._contains(plotRect, pt)) {
                    return;
                }
                //inside plot rect
                //check whether is adding new annotation
                self._toggleIsAdding(true);
                btn = self._buttons[self._selectedBtnIdx];

                dp = new DataPoint(pt.x - plotRect.left, pt.y - plotRect.top);
                if (isDC) {
                    self._convertPtToData(dp);
                }
                btn.drawFunc.call(self, dp, isDC);
                e.preventDefault();
            }
        }

        private _convertPtToData(point: DataPoint) {
            var self = this,
                chart = self._chart,
                rect = chart._plotRect;

            point.dx = self._convertLenToData(rect.width, chart.axisX, point.x);
            point.dy = self._convertLenToData(rect.height, chart.axisY, point.y, true);
        }

        _convertLenToData(total: number, axis: Axis, val, converted = false) {
            var min = axis.min == null ? axis.actualMin : axis.min,
                max = axis.max == null ? axis.actualMax : axis.max,
                isDate = wijmo.isDate(min), v;
            
            if (isDate) {
                //val = FlexChart._fromOADate(val);
                min = FlexChart._toOADate(min);
                max = FlexChart._toOADate(max);
            }
            if (converted) {
                v = (1 - val / total) * (max - min) + min;
            } else {
                v = val / total * (max - min) + min;
            }
            if (isDate) {
                v = FlexChart._fromOADate(v);
            }
            return v;
        }

        private _clearTimer() {
            if (this._timer) {
                window.clearTimeout(this._timer);
                this._timer = null;
            }
        }

        private _onHostMouseMove(e) {
            var self = this,
                rootEle = self._chart.hostElement,
                tarAnno = self._draggingAnno,
                oriPt = self._originPoint,
                newPt,
                plotRect: Rect = self._chart._plotRect,
                btn: Button, hostRect: Rect,
                isDC = self._isDataCoordinate,
                odp: DataPoint, cdp: DataPoint;

            if (!self._isEditable) {
                return;
            }
            self._clearTimer();
            if (!oriPt) {
                return;
            }
            newPt = e instanceof MouseEvent ? new Point(e.pageX, e.pageY) :
                new Point(e.changedTouches[0].pageX, e.changedTouches[0].pageY);

            if (self._isDragging) {
                tarAnno._element.setAttribute('transform', 'translate(' + (newPt.x - oriPt.x) + ',' + (newPt.y - oriPt.y) + ')');
            } else if (self._isAdding) {
                hostRect = wijmo.getElementRect(rootEle.querySelector('svg'));
                oriPt = new Point(oriPt.x - hostRect.left, oriPt.y - hostRect.top);
                newPt = new Point(newPt.x - hostRect.left, newPt.y - hostRect.top);
                //check whether is adding new annotation
                btn = self._buttons[self._selectedBtnIdx];

                odp = new DataPoint(oriPt.x - plotRect.left, oriPt.y - plotRect.top);
                cdp = new DataPoint(newPt.x - plotRect.left, newPt.y - plotRect.top);
                if (isDC) {
                    self._convertPtToData(odp);
                    self._convertPtToData(cdp);
                }
                btn.resizeFunc.call(self, odp, cdp, isDC);
            }
        }

        private _onHostMouseUp(e) {
            var self = this;

            if (!self._isEditable) {
                return;
            }
            self._clearTimer();
            if (self._isDragging) {
                self._convertTransform();
                self._toggleIsDragging(false);
            }
            if (self._isAdding) {
                self._toggleIsAdding(false);
            }
            delete self._chart.hostElement.style.cursor;
        }

        private _onHostMouseLeave(e) {
            this._onHostMouseUp(e);
        }

        private _convertTransform() {
            //because it is a sample, so convert transform to offset only.
            var anno = this._draggingAnno,
                ele = anno._element,
                offset = new Point(),
                translate, plotRect: Rect, transform: string;

            transform = ele.getAttribute('transform');
            //IE - translate(0)
            if (transform == null || transform === 'translate(0)') {
                return;
            }
            transform = transform.replace('translate(', '').replace(')', '');
            if (transform.indexOf(',') > -1) {
                translate = transform.split(',').map(v => {
                    return +v;
                });
            } else {
                translate = transform.split(' ').map(v => {
                    return +v;
                });
            }
            //if (anno.attachment === AnnotationAttachment.DataCoordinate) {
            //    plotRect = this._chart._plotRect;
            //    offset.x = anno.offset.x + translate[0] / plotRect.width;
            //    offset.y = anno.offset.y + translate[1] / plotRect.height;
            //    anno.
            //} else {
                offset.x = anno.offset.x + translate[0];
                offset.y = anno.offset.y + translate[1];
                anno.offset = offset;
            //}
            ele.removeAttribute('transform');
        }

        private _toggleIsDragging(value: boolean, anno?: AnnotationBase) {
            var self = this,
                svg = <SVGSVGElement>this._layerEle.parentNode;

            if (value) {
                self._isDragging = true;
                wijmo.addClass(self._chart.hostElement, 'no-selection');
                if (anno) {
                    self._draggingAnno = anno;
                }
            } else {
                self._isDragging = false;
                wijmo.removeClass(self._chart.hostElement, 'no-selection');
                self._draggingAnno = null;
            }
        }

        private _toggleIsAdding(value: boolean) {
            var self = this,
                svg = <SVGSVGElement>this._layerEle.parentNode;

            if (value) {
                self._isAdding = true;
                wijmo.addClass(self._chart.hostElement, 'no-selection');
            } else {
                self._isAdding = false;
                wijmo.removeClass(self._chart.hostElement, 'no-selection');
            }
        }

        /**
         * Gets or sets the visibility of the Annotation.
         */
        get isEditable(): boolean {
            return !!this._isEditable;
        }
        set isEditable(value: boolean) {
            if (value === this._isEditable) {
                return;
            }
            this._isEditable = asBoolean(value, false);
            this._toggleUIVisible(value);
        }
    }
}