'use strict';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var wjNg2Input = require('wijmo/wijmo.angular2.input');
var wjNg2Chart = require('wijmo/wijmo.angular2.chart');
var wjNg2FinancialChart = require('wijmo/wijmo.angular2.chart.finance');
var DataSvc_1 = require('./../../services/DataSvc');
//Markers sample component
var MarkersCmp = (function () {
    function MarkersCmp(dataSvc) {
        var _this = this;
        this.data = [];
        this.dataSvc = dataSvc;
        this.dataList = dataSvc.getDataList();
        this.selectedSymbol = this.dataList[0].symbol;
        this.setDataSource();
        this.isTouch = 'ontouchstart' in window;
        this.title = 'Markers';
        this.properties = {
            interaction: 'Move',
            markerLines: 'Both',
            alignment: 2,
            snapping: false,
            content: function () {
                var retval = null, hti, item;
                if (_this.chart && _this.pt) {
                    // hit test
                    hti = _this.chart.hitTest(_this.pt);
                    // check hit test & use its values for LineMarker's content
                    if (hti && hti.item) {
                        item = hti.item;
                        retval =
                            'Date: ' + item.date + '<br />' +
                                'Open: ' + wijmo.Globalize.format(item.open, 'n2') + '<br />' +
                                'High: ' + wijmo.Globalize.format(item.high, 'n2') + '<br />' +
                                'Low: ' + wijmo.Globalize.format(item.low, 'n2') + '<br />' +
                                'Close: ' + wijmo.Globalize.format(item.close, 'n2');
                    }
                }
                // return content string
                return retval;
            }
        };
    }
    MarkersCmp.prototype.chartRendered = function () {
        // customize tooltips
        if (this.chart) {
            // handle custom "snapping" feature using the correct event (mousemove or touchmove)
            this.chart.hostElement.addEventListener('mousemove', this.snappingHandler.bind(this));
            this.chart.hostElement.addEventListener('touchmove', this.snappingHandler.bind(this));
        }
    };
    MarkersCmp.prototype.positionChanged = function (event) {
        this.pt = event;
    };
    MarkersCmp.prototype.snappingChanged = function () {
        var chart = this.chart, props = this.properties, snapping = props.snapping, marker = this.marker;
        if (!chart || !marker) {
            return;
        }
        // change marker settings based on snapping variable
        if (!snapping && chart && marker) {
            props.interaction = 'None';
            props.markerLines = 'Both';
            props.alignment = 2; //auto
        }
        else if (snapping && chart && marker) {
            props.interaction = 'Move';
            marker.horizontalPosition = null;
            marker.verticalPosition = null;
            marker.content = props.content;
            marker.isVisible = true;
        }
    };
    MarkersCmp.prototype.setDataSource = function () {
        var _this = this;
        var symbol = this.selectedSymbol;
        this.dataSvc.getData(symbol).subscribe(function (data) {
            _this.data = data.splice(0, 20);
        });
    };
    MarkersCmp.prototype.snappingHandler = function (e) {
        if (this.properties.snapping) {
            var chart = this.chart, marker = this.marker, ex, ey;
            if (!wijmo.hasClass(chart.hostElement, 'snapping')) {
                wijmo.addClass(chart.hostElement, 'snapping');
            }
            // get points from event
            if (this.isTouch && e.touches && e.touches.length > 0) {
                ex = e.touches[0].clientX;
                ey = e.touches[0].clientY;
            }
            else {
                e = chart._toControl(new wijmo.Point(e.pageX, e.pageY));
                ex = e.x;
                ey = e.y;
            }
            var dp = chart.pointToData(ex, ey), idx = wijmo.clamp(Math.round(dp.x), 0, this.data.length - 1), item = this.data[idx], ax = chart.axisX, ay = chart.axisY, x = wijmo.clamp(((Math.round(dp.x) - ax.actualMin) / (ax.actualMax - ax.actualMin)) - 0.00275, 0, 1), y = wijmo.clamp((ay.actualMax - dp.y) / (ay.actualMax - ay.actualMin), 0, 1);
            // marker content fn and give it access to current scope
            marker.content = function () {
                return 'Date: ' + item.date + '<br />' +
                    'Open: ' + wijmo.Globalize.format(item.open, 'n2') + '<br />' +
                    'High: ' + wijmo.Globalize.format(item.high, 'n2') + '<br />' +
                    'Low: ' + wijmo.Globalize.format(item.low, 'n2') + '<br />' +
                    'Close: ' + wijmo.Globalize.format(item.close, 'n2');
            }.bind(this);
            // set position and visibility
            marker.horizontalPosition = x;
            marker.verticalPosition = y;
            marker.isVisible = 0 < x && x < 1;
        }
        else {
            if (wijmo.hasClass(this.chart.hostElement, 'snapping')) {
                wijmo.removeClass(this.chart.hostElement, 'snapping');
            }
        }
    };
    __decorate([
        core_1.ViewChild('chart')
    ], MarkersCmp.prototype, "chart", void 0);
    __decorate([
        core_1.ViewChild('marker')
    ], MarkersCmp.prototype, "marker", void 0);
    MarkersCmp = __decorate([
        core_1.Component({
            selector: 'markers-cmp',
            templateUrl: 'src/components/interaction/MarkersCmp.html',
            directives: [wjNg2FinancialChart.WjFinancialChart, wjNg2FinancialChart.WjFinancialChartSeries,
                wjNg2Input.WjMenu, wjNg2Input.WjMenuItem, wjNg2Chart.WjFlexChartLineMarker, common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }),
        __param(0, core_1.Inject(DataSvc_1.DataSvc))
    ], MarkersCmp);
    return MarkersCmp;
}());
exports.MarkersCmp = MarkersCmp;
//# sourceMappingURL=MarkersCmp.js.map