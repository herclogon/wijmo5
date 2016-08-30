(function (wijmo) {
    'use strict';

	// dynamic data
    var toAddData, interval,
		trafficData = new wijmo.collections.ObservableArray(),
		setInterval = function (interval) {
			if (toAddData) {
				clearTimeout(toAddData);
				toAddData = null;
			}

			if (interval) {
				toAddData = setTimeout(function () {
					addTrafficItem(trafficData, interval);
				});
			}
		},
		// define the interval hash for the speed buttons
		intervalHash = {
			Slow: 200,
			Medium: 100,
			Fast: 50,
			Stop: 0
		},
		// create FlexChart
		dynamicChart = new wijmo.chart.FlexChart('#dynamicChart');

	// initialize FlexChart's properties
    dynamicChart.initialize({
    	chartType: wijmo.chart.ChartType.Area,
    	stacking: wijmo.chart.Stacking.Stacked,
    	itemsSource: trafficData,
    	bindingX: 'time',
    	axisX: { format: 'mm:ss' },
    	series: [
            { name: 'Trucks', binding: 'trucks' },
            { name: 'Ships', binding: 'ships' },
            { name: 'Planes', binding: 'planes' }
    	]
    });

    setInterval(500);

    // Bind the click event to the speed buttons
    for (var prop in intervalHash) {
        document.getElementById('btn' + prop).addEventListener('click', buttonClick(intervalHash[prop]));
    }

    function buttonClick(value) {
        return function () {
            setInterval(value);
        };
    }

    function addTrafficItem(trafficData, interval) {
    	var len = trafficData.length,
            last = len ? trafficData[len - 1] : null,
            trucks = last ? last.trucks : 0,
            ships = last ? last.ships : 0,
            planes = last ? last.planes : 0;

    	trucks = Math.max(0, trucks + Math.round(Math.random() * 50 - 25));
    	ships = Math.max(0, ships + Math.round(Math.random() * 10 - 5));
    	planes = Math.max(0, planes + Math.round(Math.random() * 10 - 5));

    	// add random data, limit array length
    	trafficData.push({ time: new Date(), trucks: trucks, ships: ships, planes: planes });
    	if (trafficData.length > 200) {
    		trafficData.splice(0, 1);
    	}

    	// keep adding
    	if (interval) {
    		toAddData = setTimeout(function () {
    			addTrafficItem(trafficData, interval);
    		}, interval);
    	}
    }
})(wijmo);