var Helper = (function ($, wijmo) {
    'use strict';

    var helper = {};

    // helper function to update Wijmo Menu.header
    helper.updateMenuHeader = function (menu, prefix, text) {
        menu.header = prefix + text;
    };

    // Simple Helper Function to create LinearGauge and init
    // common properties
    helper.createLinearGauge = function(selector, props) {
        var gauge = new wijmo.gauge.LinearGauge(selector);
        return initGaugeProperties(gauge, props);
    };

    // Simple Helper Function to create bulletGraph and init
    // common properties
    helper.createBulletGraph = function(selector, props) {
        var gauge = new wijmo.gauge.BulletGraph(selector);
        return initGaugeProperties(gauge, props);
    };

    // Simple Helper Function to create RadialGauge and init
    // common properties
    helper.createRadialGauge = function(selector, props) {
        var gauge = new wijmo.gauge.RadialGauge(selector);
        return initGaugeProperties(gauge, props);
    };

    // init common Gauge properties
    function initGaugeProperties(gauge, props) {
        gauge.value = props.value;
        gauge.min = props.min;
        gauge.max = props.max;
        gauge.format = props.format;

        // subscribe valueChanged - callback in app.js
        $.subscribe('valueChanged', $.proxy(subValueChanged, gauge));

        return gauge;
    }

    // Simple Helper Function to create InputNumber for Gauge.value
    helper.createValueInput = function (selector, props) {
        var valueInput = new wijmo.input.InputNumber(selector);

        valueInput.value = props.value;
        valueInput.min = props.min;
        valueInput.max = props.max;
        valueInput.format = props.format;
        valueInput.step = props.step;

        // subscribe valueChanged - callback in app.js
        $.subscribe('valueChanged', $.proxy(subValueChanged, valueInput));

        // publish valueChanged - callback in app.js
        valueInput.valueChanged.addHandler(pubValueChanged);

        return valueInput;
    };

    return helper;

})(jQuery, wijmo);