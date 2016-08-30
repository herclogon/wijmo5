module wijmo.chart {
    'use strict';

    /**
     * Render to canvas.
     */
    export class _CanvasRenderEngine implements IRenderEngine {
        private _element: HTMLElement;
        private _canvas: HTMLCanvasElement;
        private _svgEngine: _SvgRenderEngine;
        // 
        private _fill: string;
        private _stroke: string;
        private _textFill: string;
        private _strokeWidth: number = 1;
        private _fontSize: string = null;
        private _fontFamily: string = null;

        private _canvasRect;
        private _canvasDefaultFont;

        private _applyCSSStyles: boolean;

        constructor(element: HTMLElement, applyCSSStyles = false) {
            var self = this;

            self._element = element;
            self._canvas = document.createElement('canvas');
            self._svgEngine = new _SvgRenderEngine(element);
            self._element.appendChild(self._canvas);
            self._applyCSSStyles = applyCSSStyles;
        }

        beginRender() {
            var self = this,
                svg = self._svgEngine.element,
                ele = <Element>self._element,
                style;

            if (self._applyCSSStyles) {
                self._svgEngine.beginRender();
                ele = svg;
            }
            self._element.appendChild(svg);
            //clear and initialize _canvasRect, _canvasDefaultFont
            self._canvasRect = {};
            style = window.getComputedStyle(ele);
            self._canvasDefaultFont = {
                fontSize: style.fontSize,
                fontFamily: style.fontFamily,
                textFill: style.color
            };
        }

        endRender() {
            if (this._applyCSSStyles) {
                this._svgEngine.endRender();
            }
            this._svgEngine.element.parentNode.removeChild(this._svgEngine.element);
        }

        setViewportSize(w: number, h: number) {
            var self = this,
                canvas = self._canvas,
                ctx = canvas.getContext('2d'),
                f = self.fill,
                color, stroke;

            if (self._applyCSSStyles) {
                self._svgEngine.setViewportSize(w, h);
            }
            canvas.width = w;
            canvas.height = h;
            color = window.getComputedStyle(self._element).backgroundColor;
            stroke = self.stroke;
            if (color) {
                self.stroke = null;
                self.fill = color;
                self.drawRect(0, 0, w, h);
                self.fill = f;
                self.stroke = stroke;
            }
        }

        get element(): Element {
            return this._canvas;
        }

        get fill(): string {
            return this._fill
        }
        set fill(value: string) {
            this._svgEngine.fill = value;
            this._fill = value;
        }

        get fontSize(): string {
            return this._fontSize;
        }
        set fontSize(value: string) {
            this._svgEngine.fontSize = value;
            var val = (value == null || isNaN(<any>value)) ? value : value + 'px';
            this._fontSize = val;
        }

        get fontFamily(): string {
            return this._fontFamily;
        }
        set fontFamily(value: string) {
            this._svgEngine.fontFamily = value;
            this._fontFamily = value;
        }

        get stroke(): string {
            return this._stroke;
        }
        set stroke(value: string) {
            this._svgEngine.stroke = value;
            this._stroke = value;
        }

        get strokeWidth(): number {
            return this._strokeWidth;
        }
        set strokeWidth(value: number) {
            this._svgEngine.strokeWidth = value;
            this._strokeWidth = value;
        }

        get textFill(): string {
            return this._textFill;
        }
        set textFill(value: string) {
            this._svgEngine.textFill = value;
            this._textFill = value;
        }

        addClipRect(clipRect: Rect, id: string) {
            if (clipRect && id) {
                if (this._applyCSSStyles) {
                    this._svgEngine.addClipRect(clipRect, id);
                }
                this._canvasRect[id] = clipRect;
            }
        }

        drawEllipse(cx: number, cy: number, rx: number, ry: number, className?: string, style?: any) {
            var el, ctx = <any>this._canvas.getContext('2d');

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawEllipse(cx, cy, rx, ry, className, style);
            }

            ctx.save();
            ctx.beginPath();
            if (ctx.ellipse) {
                ctx.ellipse(cx, cy, rx, ry, 0, 0, 2 * Math.PI);
            } else {
                ctx.translate(cx, cy);
                ctx.scale(1, ry / rx);
                ctx.translate(-cx, -cy);
                ctx.arc(cx, cy, rx, 0, 2 * Math.PI);
                ctx.scale(1, 1);
            }
            this._applyCanvasStyles(el, style, className, true);
            ctx.restore();
            return el;
        }

        drawRect(x: number, y: number, w: number, h: number, className?: string, style?: any, clipPath?: string) {
            var el, ctx = this._canvas.getContext('2d');

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawRect(x, y, w, h, className, style, clipPath);
            }
            ctx.save();

            this._applyCanvasClip(ctx, clipPath);
            ctx.beginPath();
            ctx.rect(x, y, w, h);
            this._applyCanvasStyles(el, style, className, true);
            ctx.restore();
            return el;
        }

        drawLine(x1: number, y1: number, x2: number, y2: number, className?: string, style?: any) {
            var el,
                ctx = this._canvas.getContext('2d');

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawLine(x1, y1, x2, y2, className, style);
            }
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            this._applyCanvasStyles(el, style, className);
            ctx.restore();
            return el;
        }

        drawLines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string) {
            if (!xs || !ys || xs.length === 0 || ys.length === 0) {
                return;
            }

            var ctx = this._canvas.getContext('2d'),
                len = Math.min(xs.length, ys.length),
                el, i;

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawLines([0, 1], [1, 0], className, style, clipPath);
            }
            ctx.save();

            this._applyCanvasClip(ctx, clipPath);
            ctx.beginPath();
            ctx.moveTo(xs[0], ys[0]);
            for (i = 1; i < len; i++) {
                ctx.lineTo(xs[i], ys[i]);
            }
            this._applyCanvasStyles(el, style, className);
            ctx.restore();
            return el;
        }

        drawSplines(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string) {
            if (!xs || !ys || xs.length === 0 || ys.length === 0) {
                return;
            }

            var ctx = this._canvas.getContext('2d'),
                spline = new _Spline(xs, ys),
                s = spline.calculate(),
                sx = s.xs,
                sy = s.ys,
                len = Math.min(sx.length, sy.length),
                el, i;

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawSplines([0, 1], [1, 0], className, style, clipPath);
            }
            ctx.save();

            this._applyCanvasClip(ctx, clipPath);
            ctx.beginPath();
            ctx.moveTo(sx[0], sy[0]);
            for (i = 1; i < len; i++) {
                ctx.lineTo(sx[i], sy[i]);
            }
            this._applyCanvasStyles(el, style, className);
            ctx.restore();
            return el;
        }

        drawPolygon(xs: number[], ys: number[], className?: string, style?: any, clipPath?: string) {
            if (!xs || !ys || xs.length === 0 || ys.length === 0) {
                return;
            }

            var ctx = this._canvas.getContext('2d'),
                len = Math.min(xs.length, ys.length),
                el, i;

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawPolygon([0, 1, 1], [1, 0, 1], className, style, clipPath);
            }
            ctx.save();

            this._applyCanvasClip(ctx, clipPath);
            ctx.beginPath();
            ctx.moveTo(xs[0], ys[0]);
            for (i = 1; i < len; i++) {
                ctx.lineTo(xs[i], ys[i]);
            }
            ctx.closePath();
            this._applyCanvasStyles(el, style, className, true);
            ctx.restore();
            return el;
        }

        drawPieSegment(cx: number, cy: number, r: number, startAngle: number, sweepAngle: number,
            className?: string, style?: any, clipPath?: string) {

            var el,
                ctx = this._canvas.getContext('2d'),
                sta = startAngle,
                swa = startAngle + sweepAngle;

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawPieSegment(cx, cy, r, startAngle, sweepAngle, className, style, clipPath);
            }
            ctx.save();

            this._applyCanvasClip(ctx, clipPath);
            ctx.beginPath();
            ctx.moveTo(cx, cy);
            ctx.arc(cx, cy, r, sta, swa, false);
            ctx.lineTo(cx, cy);
            this._applyCanvasStyles(el, style, className, true);
            ctx.restore();
            return el;
        }

        drawDonutSegment(cx: number, cy: number, radius: number, innerRadius: number, startAngle: number, sweepAngle: number,
            className?: string, style?: any, clipPath?: string) {

            var ctx = this._canvas.getContext('2d'),
                sta = startAngle,
                swa = startAngle + sweepAngle,
                el, p1, p2;

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawDonutSegment(cx, cy, radius, innerRadius, startAngle, sweepAngle, className, style, clipPath);
            }
            p1 = new Point(cx, cy);
            p1.x += innerRadius * Math.cos(sta);
            p1.y += innerRadius * Math.sin(sta);

            p2 = new Point(cx, cy);
            p2.x += innerRadius * Math.cos(swa);
            p2.y += innerRadius * Math.sin(swa);

            ctx.save();

            this._applyCanvasClip(ctx, clipPath);
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.arc(cx, cy, radius, sta, swa, false);
            ctx.lineTo(p2.x, p2.y);
            ctx.arc(cx, cy, innerRadius, swa, sta, true);
            this._applyCanvasStyles(el, style, className, true);
            ctx.restore();
            return el;
        }

        drawString(s: string, pt: Point, className?: string, style?: any) {
            var el, ctx = this._canvas.getContext('2d');

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawString(s, pt, className, style);
            }
            ctx.save();
            ctx.textBaseline = 'bottom';
            this._applyCanvasStyles(el, style, className, true, true);
            ctx.fillText(s, pt.x, pt.y);
            ctx.restore();
            return el;
        }

        drawStringRotated(s: string, pt: Point, center: Point, angle: number, className?: string, style?: any) {
            var el,
                ctx = this._canvas.getContext('2d'),
                metric = ctx.measureText(s);

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawStringRotated(s, pt, center, angle, className, style);
            }
            ctx.save();
            ctx.textBaseline = 'bottom';
            ctx.translate(center.x, center.y);
            ctx.rotate(Math.PI / 180 * angle);
            ctx.translate(-center.x, -center.y);
            this._applyCanvasStyles(el, style, className, true, true);
            ctx.fillText(s, pt.x, pt.y);
            ctx.restore();
            return el;
        }

        measureString(s: string, className?: string, groupName?: string, style?: any): Size {
            var ctx = ctx = this._canvas.getContext('2d'),
                width;

            this._applyCanvasStyles(null, null, className, true, true);
            width = ctx.measureText(s).width;
            return new Size(width, parseInt(ctx.font) * 1.5);
        }

        startGroup(className?: string, clipPath?: string, createTransform: boolean= false) {
            var el,
                ctx = this._canvas.getContext('2d');

            if (this._applyCSSStyles) {
                el = this._svgEngine.startGroup(className, clipPath, createTransform);
            }
            ctx.save();
            this._applyCanvasClip(ctx, clipPath);
            return el;
        }

        endGroup() {
            if (this._applyCSSStyles) {
                this._svgEngine.endGroup();
            }
            this._canvas.getContext('2d').restore();
        }

        drawImage(imageHref: string, x: number, y: number, w: number, h: number) {
            var el,
                ctx = this._canvas.getContext('2d'),
                img = new Image;

            if (this._applyCSSStyles) {
                el = this._svgEngine.drawImage(imageHref, x, y, w, h);
            }
            img.onload = function () {
                ctx.drawImage(img, x, y, w, h);
            };
            img.src = imageHref;
            return el;
        }

        private _applyCanvasClip = function (ctx, clipID) {
            var clipRect = this._canvasRect[clipID];

            if (!clipRect) {
                return;
            }
            ctx.beginPath();
            ctx.rect(clipRect.left, clipRect.top, clipRect.width, clipRect.height);
            ctx.clip();
            ctx.closePath();
        };

        private _getOpacityColor(color, opacity?) {
            var wjColor = new wijmo.Color(color);

            if (opacity != null && wjColor.a === 1) {
                wjColor.a = isNaN(opacity) ? 1 : Number(opacity);
            }
            return wjColor.toString();
        }

        private _applyCanvasStyles = function (ele, style, className?, enableFill?, enableFont?) {
            var self = this,
                ctx = self._canvas.getContext('2d'),
                font, eleStyles,
                stroke = self.stroke,
                fill = self.fill,
                strokeWidth = self.strokeWidth;

            if (style && style.stroke !== undefined) {
                stroke = style.stroke;
            }
            if (style && style.fill !== undefined) {
                fill = self._getOpacityColor(style.fill, style['fill-opacity']);
            }
            //style can be set in tag name, so always get element style.
            if (ele) {
            //if (style != null || className != null) {
                //if eleStyles is not null, use eleStyles
                eleStyles = window.getComputedStyle(ele);
            //}
            }
            if (enableFont) {
                if (eleStyles) {
                    ctx.fillStyle = eleStyles.fill;
                    font = eleStyles.fontSize + ' ' + eleStyles.fontFamily;
                    ctx.font = font;
                    if (ctx.font.replace(/\"/g, "'") !== font.replace(/\"/g, "'")) {
                        font = eleStyles.fontSize + ' ' + (ctx.font.split(' ')[1] || 'sans-serif');
                        ctx.font = font;
                    }
                } else if (self.fontSize) {
                    ctx.fillStyle = self.textFill;
                    ctx.font = self.fontSize + ' ' + (self.fontFamily || 'sans-serif');
                } else if (self._canvasDefaultFont) {
                    ctx.fillStyle = self._canvasDefaultFont.textFill;
                    font = self._canvasDefaultFont.fontSize + ' ' + self._canvasDefaultFont.fontFamily;
                    ctx.font = font;
                    if (ctx.font.replace(/\"/g, "'") !== font.replace(/\"/g, "'")) {
                        font = self._canvasDefaultFont.fontSize + ' ' + (ctx.font.split(' ')[1] || 'sans-serif');
                        ctx.font = font;
                    }
                }
            } else {
                if (eleStyles) {
                    stroke = (eleStyles.stroke && eleStyles.stroke !== 'none') ? eleStyles.stroke : stroke;
                    fill = (eleStyles.fill && eleStyles.fill !== 'none') ? self._getOpacityColor(eleStyles.fill, eleStyles['fill-opacity']) : fill;
                    strokeWidth = eleStyles.strokeWidth ? eleStyles.strokeWidth : strokeWidth;
                }
                if (stroke !== 'none' && stroke != null) {
                    ctx.strokeStyle = stroke;
                    ctx.lineWidth = strokeWidth;
                    ctx.stroke();
                }
                if (enableFill && fill != null && fill !== 'transparent' && fill !== 'none') {
                    ctx.fillStyle = fill;
                    ctx.fill();
                }
            }
        }
    }

    //export chart using _CanvasRenderEngine.
    if (wijmo.chart.FlexChartBase && wijmo.chart.FlexChartBase.prototype && wijmo.chart.FlexChartBase.prototype._exportToImage) {
        var _exportFn = wijmo.chart.FlexChartBase.prototype._exportToImage;

        wijmo.chart.FlexChartBase.prototype._exportToImage = function (extension, processDataURI) {
            if (extension === 'svg') {
                _exportFn.call(this, extension, processDataURI);
                return;
            }

            var canvasEngine = new wijmo.chart._CanvasRenderEngine(this.hostElement, true),
                r = this.rendered,
                dataUrl, canvas;

            this.rendered = new Event();
            this._render(canvasEngine, false);
            canvas = canvasEngine.element;
            canvas.parentNode.removeChild(canvas);

            dataUrl = canvas.toDataURL('image/' + extension);
            processDataURI.call(null, dataUrl);
            canvas = null;
            canvasEngine = null;
            this.rendered = r;
        }
    }
}

