// generate some random data
var countries = 'US,Germany,UK,Japan,Italy,Greece'.split(','),
	appData = [];

for (var i = 0; i < countries.length; i++) {
	appData.push({
		country: countries[i],
		downloads: Math.round(Math.random() * 20000),
		sales: Math.random() * 10000,
		expenses: Math.random() * 5000
	});
}